import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
const ACUITY_EMBED_URL = "https://app.acuityscheduling.com/schedule.php?owner=38337322";
const ACUITY_EMBED_SCRIPT = "https://embed.acuityscheduling.com/js/embed.js";

const Booking = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = ACUITY_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

      {/* Booking Embed */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="border border-border bg-background/80 p-4 md:p-6">
              <iframe
                title="Acuity Scheduling"
                src={ACUITY_EMBED_URL}
                width="100%"
                height="1100"
                frameBorder={0}
              />
            </div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
              <div className="border border-border bg-background/80 p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body">
                  Live booking
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4">
                  Schedule in real time
                </h2>
                <p className="text-sm text-muted-foreground font-body mt-4 leading-relaxed">
                  Pick your service, preferred staff, and the time that works best. The live
                  calendar updates instantly as you browse.
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

              <div className="grid gap-6">
                <div className="bg-charcoal text-white p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-light font-body">
                    Instagram
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <img
                      src="/QR%20Code_Willow%20Hair%20Salon_Instagram/design%20(1).png"
                      alt="QR Instagram"
                      className="w-20 h-20 object-contain bg-white p-2"
                    />
                    <p className="text-sm text-white/70 font-body">
                      Scan the QR for the latest looks.
                    </p>
                  </div>
                </div>

                <div className="border border-border bg-background/80 p-4">
                  <img
                    src="/BusinessCard_WillowGlenHairSalon/front_fullcolor_1024x599.png"
                    alt="Business card"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
