import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Signature Cut",
    description: "Consultation, cut, and finish",
    price: "350k - 600k",
  },
  {
    id: 2,
    name: "Balayage",
    description: "Soft, dimensional color",
    price: "1.500k - 3.200k",
  },
  {
    id: 3,
    name: "Digital Perm",
    description: "Heat perm for soft waves",
    price: "1.400k - 2.500k",
  },
  {
    id: 4,
    name: "Keratin Straight",
    description: "Smooth, repair finish",
    price: "1.200k - 2.200k",
  },
  {
    id: 5,
    name: "Scalp Therapy",
    description: "Deep scalp care",
    price: "350k - 600k",
  },
  {
    id: 6,
    name: "Signature Blowout",
    description: "Volume blowout",
    price: "200k - 350k",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 md:py-40 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
          ref={ref}
        >
          <p className="font-body text-xs uppercase tracking-[0.35em] text-muted-foreground mb-6">
            Signature Menu
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Featured services
          </h2>
        </motion.div>

        {/* Services List - Minimal Style */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-border py-8 flex flex-col md:flex-row justify-between md:items-center hover:bg-background/50 transition-colors px-4 -mx-4"
            >
              <div>
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-1">
                  {service.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  {service.description}
                </p>
              </div>
              <p className="font-body text-sm text-foreground shrink-0 ml-4">
                {service.price}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center border border-foreground/30 px-8 py-4 text-xs uppercase tracking-[0.3em] font-body hover:bg-foreground hover:text-background transition-colors"
          >
            View full menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
