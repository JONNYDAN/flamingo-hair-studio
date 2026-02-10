import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 md:py-40 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 md:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.35em] text-muted-foreground mb-6">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8 text-foreground leading-tight">
              Hair care as an art
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-sm leading-relaxed">
              <p>
                We believe every hairstyle deserves a tailored journey. From consultation and color
                to aftercare, every step is refined.
              </p>
              <p>
                Our approach blends global technique with a deep understanding of hair texture,
                creating lasting beauty and confidence.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <p className="font-display text-3xl text-foreground">20+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  Years
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-foreground">5k+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  Clients
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-foreground">1+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  Stylists
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
                alt="Salon interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 md:w-48 bg-background border border-border p-3 shadow-lg">
              <img
                src="/BusinessCard_WillowGlenHairSalon/front_fullcolor_1024x599.png"
                alt="Business card"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
