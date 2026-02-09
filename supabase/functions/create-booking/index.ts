import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface BookingRequest {
  customer_name: string;
  customer_phone: string;
  service: string;
  booking_date: string;
  booking_time: string;
  note?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { customer_name, customer_phone, service, booking_date, booking_time, note }: BookingRequest = await req.json();

    // Validate required fields
    if (!customer_name || !customer_phone || !service || !booking_date || !booking_time) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get Supabase credentials from environment
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    // Save booking to database
    const dbResponse = await fetch(`${supabaseUrl}/rest/v1/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseServiceKey,
        'Authorization': `Bearer ${supabaseServiceKey}`,
        'Prefer': 'return=representation',
      },
      body: JSON.stringify({
        customer_name,
        customer_phone,
        service,
        booking_date,
        booking_time,
        note: note || null,
        status: 'pending',
        sms_sent: false,
      }),
    });

    if (!dbResponse.ok) {
      const errorText = await dbResponse.text();
      console.error('Database error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to save booking' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const bookingData = await dbResponse.json();
    console.log('Booking saved:', bookingData);

    // Try to send SMS notification
    let smsSent = false;
    const twilioAccountSid = Deno.env.get('TWILIO_ACCOUNT_SID');
    const twilioAuthToken = Deno.env.get('TWILIO_AUTH_TOKEN');
    const twilioPhoneNumber = Deno.env.get('TWILIO_PHONE_NUMBER');
    const normalizePhone = (value: string) => {
      const trimmed = value.trim();
      if (trimmed.startsWith("+")) {
        return trimmed;
      }
      if (trimmed.startsWith("0")) {
        return `+84${trimmed.slice(1)}`;
      }
      return trimmed;
    };

    const ownerPhoneNumber = Deno.env.get('OWNER_PHONE_NUMBER')
      ? normalizePhone(Deno.env.get('OWNER_PHONE_NUMBER')!)
      : normalizePhone("0905193358");

    if (twilioAccountSid && twilioAuthToken && twilioPhoneNumber && ownerPhoneNumber) {
      try {
        const smsMessage = `📅 ĐẶT LỊCH MỚI!\n\n` +
          `👤 Khách: ${customer_name}\n` +
          `📱 SĐT: ${customer_phone}\n` +
          `✂️ Dịch vụ: ${service}\n` +
          `📆 Ngày: ${booking_date}\n` +
          `⏰ Giờ: ${booking_time}\n` +
          `${note ? `📝 Ghi chú: ${note}` : ''}`;

        const twilioResponse = await fetch(
          `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + btoa(`${twilioAccountSid}:${twilioAuthToken}`),
            },
            body: new URLSearchParams({
              To: ownerPhoneNumber,
              From: twilioPhoneNumber,
              Body: smsMessage,
            }),
          }
        );

        if (twilioResponse.ok) {
          smsSent = true;
          console.log('SMS sent successfully');

          // Update booking with sms_sent = true
          await fetch(`${supabaseUrl}/rest/v1/bookings?id=eq.${bookingData[0].id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'apikey': supabaseServiceKey,
              'Authorization': `Bearer ${supabaseServiceKey}`,
            },
            body: JSON.stringify({ sms_sent: true }),
          });
        } else {
          const smsError = await twilioResponse.text();
          console.error('SMS error:', smsError);
        }
      } catch (smsError) {
        console.error('SMS sending failed:', smsError);
      }
    } else {
      console.log('Twilio credentials not configured, skipping SMS');
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Booking created successfully',
        sms_sent: smsSent,
        booking_id: bookingData[0].id,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing booking:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
