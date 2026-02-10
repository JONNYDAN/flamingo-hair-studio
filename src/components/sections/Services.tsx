import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Men's Haircut",
    description: "Precision cut tailored to style",
    price: "$29",
  },
  {
    id: 2,
    name: "Women's Haircut",
    description: "Customized cut designed for your face shape",
    price: "$35 & up",
  },
  {
    id: 3,
    name: "Senior's Haircut",
    description: "Comfortable, easy-to-maintain styles",
    price: "$26 & up",
  },
  {
    id: 4,
    name: "Kid's Haircut",
    description: "Gentle haircut in a friendly environment",
    price: "$26",
  },
  {
    id: 5,
    name: "Color",
    description: "Customized color for natural & vibrant results",
    price: "$65 & up",
  },
  {
    id: 6,
    name: "Hilite",
    description: "Soft dimension and natural brightness",
    price: "$85 & up",
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
              className="group border-b border-border py-8 flex md:flex-row justify-between md:items-center hover:bg-background/50 transition-colors px-4 -mx-4"
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
