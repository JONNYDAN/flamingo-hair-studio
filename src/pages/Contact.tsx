import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(18,12,8,0.75), rgba(18,12,8,0.3)), url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold-light tracking-[0.35em] uppercase text-sm mb-4 font-body"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl font-light"
          >
              Visit the salon
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2 text-foreground">Address</h3>
                  <p className="text-muted-foreground font-body">
                    2306 Almaden Rd
                    <br />
                    San Jose, CA 95125
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2 text-foreground">Phone</h3>
                  <p className="text-muted-foreground font-body">
                    <a href="tel:+14089781499" className="hover:text-accent transition-colors">
                      +1 (408) 978-1499
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2 text-foreground">Email</h3>
                  <p className="text-muted-foreground font-body">
                    <a href="mailto:hello@hairstudio.vn" className="hover:text-accent transition-colors">
                      hello@hairstudio.vn
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2 text-foreground">Hours</h3>
                  <div className="text-muted-foreground font-body space-y-1">
                    <p>Tue - Fri: 9:30 AM - 6:00 PM</p>
                    <p>Sat: 9:30 AM - 4:30 PM</p>
                    <p>Mon & Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4 font-body">
                  Follow us
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="bg-secondary/40 border border-border p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body">
                  Instagram QR
                </p>
                <div className="mt-4 flex items-center gap-6">
                  <img
                    src="/QR%20Code_Willow%20Hair%20Salon_Instagram/design%20(1).png"
                    alt="QR Instagram"
                    className="w-24 h-24 object-contain bg-white p-2"
                  />
                  <p className="text-sm text-muted-foreground font-body">
                    Scan for the latest looks and offers.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[400px] md:h-full min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps?q=2306%20Almaden%20Rd,%20San%20Jose,%20CA%2095125&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
