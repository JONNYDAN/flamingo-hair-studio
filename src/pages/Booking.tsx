import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { CalendarIcon, Clock, User, Phone, MessageSquare, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

const services = [
  { id: "cat-toc", name: "Haircut", price: "150.000đ - 300.000đ" },
  { id: "nhuom-toc", name: "Color", price: "500.000đ - 2.000.000đ" },
  { id: "uon-toc", name: "Perm", price: "800.000đ - 1.500.000đ" },
  { id: "duoi-toc", name: "Straightening", price: "700.000đ - 1.200.000đ" },
  { id: "phuc-hoi", name: "Treatment", price: "400.000đ - 800.000đ" },
  { id: "goi-massage", name: "Scalp Care", price: "100.000đ - 200.000đ" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z.string()
    .min(10, "Invalid phone number")
    .max(15, "Invalid phone number")
    .regex(/^[0-9+]+$/, "Phone number must contain digits only"),
  service: z.string().min(1, "Please select a service"),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, "Please select a time"),
  note: z.string().max(500, "Note is too long").optional(),
});

type FormData = z.infer<typeof formSchema>;

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      note: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('create-booking', {
        body: {
          customer_name: data.name,
          customer_phone: data.phone,
          service: data.service,
          booking_date: format(data.date, 'yyyy-MM-dd'),
          booking_time: data.time,
          note: data.note || null,
        },
      });

      if (error) {
        throw error;
      }
      
      toast.success("Booking confirmed!", {
        description: "We will contact you shortly to confirm.",
      });
      
      form.reset();
      setSelectedService(null);
    } catch (error) {
      console.error('Booking error:', error);
      toast.error("Something went wrong", {
        description: "Please try again later or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(18,12,8,0.75), rgba(18,12,8,0.3)), url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold-light tracking-[0.35em] uppercase text-sm mb-4 font-body"
          >
            Booking
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl font-light"
          >
                Book an appointment
          </motion.h1>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
              <aside className="space-y-8">
                <div className="border border-border bg-background/80 p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body">
                    Booking
                  </p>
                  <h2 className="font-display text-3xl text-foreground mt-4">
                    Personalized booking
                  </h2>
                  <p className="text-sm text-muted-foreground font-body mt-4 leading-relaxed">
                    Please book ahead for the best experience. If you need quick advice,
                    contact us directly.
                  </p>
                  <div className="mt-6 text-sm text-foreground font-body">
                    +1 (408) 978-1499
                    <span className="block text-xs text-muted-foreground mt-2">
                      Tue - Fri: 9:30 AM - 6:00 PM
                      <br />
                      Sat: 9:30 AM - 4:30 PM
                      <br />
                      Mon & Sun: Closed
                    </span>
                  </div>
                </div>

                <div className="bg-charcoal text-white p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-light font-body">
                    Instagram
                  </p>
                  <img
                    src="/QR%20Code_Willow%20Hair%20Salon_Instagram/design%20(1).png"
                    alt="QR Instagram"
                    className="mt-6 w-28 h-28 object-contain bg-white p-2"
                  />
                  <p className="text-sm text-white/70 font-body mt-4">
                    Scan the QR for the latest looks.
                  </p>
                </div>

                <img
                  src="/BusinessCard_WillowGlenHairSalon/front_fullcolor_1024x599.png"
                  alt="Business card"
                  className="w-full max-w-[280px]"
                />
              </aside>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                
                {/* Step 1: Choose Service */}
                <div>
                  <div className="text-center mb-8">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground font-body text-sm mb-4">1</span>
                    <h2 className="font-display text-2xl md:text-3xl text-foreground">
                      Choose a service
                    </h2>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="grid md:grid-cols-2 gap-4">
                            {services.map((service) => (
                              <button
                                key={service.id}
                                type="button"
                                onClick={() => {
                                  field.onChange(service.name);
                                  setSelectedService(service.id);
                                }}
                                className={cn(
                                  "p-6 border rounded-lg text-left transition-all duration-300 group",
                                  selectedService === service.id
                                    ? "border-accent bg-accent/5"
                                    : "border-border hover:border-accent/50"
                                )}
                              >
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h3 className="font-display text-lg text-foreground mb-1">{service.name}</h3>
                                    <p className="text-muted-foreground font-body text-sm">{service.price}</p>
                                  </div>
                                  {selectedService === service.id && (
                                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                                      <Check className="w-4 h-4 text-accent-foreground" />
                                    </div>
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage className="text-center mt-4" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Step 2: Choose Date & Time */}
                <div>
                  <div className="text-center mb-8">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground font-body text-sm mb-4">2</span>
                    <h2 className="font-display text-2xl md:text-3xl text-foreground">
                      Select date & time
                    </h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Date */}
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="text-foreground font-body flex items-center gap-2 mb-2">
                            <CalendarIcon className="w-4 h-4 text-accent" />
                            Date
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal h-12",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP", { locale: vi })
                                  ) : (
                                    <span>Select date</span>
                                  )}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date() || date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Time */}
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-body flex items-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-accent" />
                            Time
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Step 3: Your Information */}
                <div>
                  <div className="text-center mb-8">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground font-body text-sm mb-4">3</span>
                    <h2 className="font-display text-2xl md:text-3xl text-foreground">
                      Your details
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-body flex items-center gap-2">
                              <User className="w-4 h-4 text-accent" />
                              Full name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Full name"
                                className="h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Phone */}
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-body flex items-center gap-2">
                              <Phone className="w-4 h-4 text-accent" />
                              Phone number
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+1 (408) 978-1499"
                                className="h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Note */}
                    <FormField
                      control={form.control}
                      name="note"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-body flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-accent" />
                            Note (optional)
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Special requests, preferred style..."
                              className="min-h-[120px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-sm tracking-[0.2em] uppercase font-body transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Confirm booking"}
                  </Button>
                </div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
