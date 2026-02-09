import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          ref={ref}
        >
          <p className="text-accent tracking-[0.35em] uppercase text-sm mb-4 font-body">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Visit the salon
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
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

            {/* QR Code */}
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
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[400px] md:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4194957853195!2d106.69881687596426!3d10.77693028937901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2zTmd1eeG7hW4gSHXhu4csIELhur9uIE5naMOpLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1706781234567!5m2!1svi!2s"
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
  );
};

export default Contact;
