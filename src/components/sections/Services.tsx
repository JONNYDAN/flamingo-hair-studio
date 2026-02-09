import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: 1,
    name: "Cắt Tóc",
    description: "Cắt tạo kiểu theo xu hướng mới nhất",
    price: "150k - 300k",
  },
  {
    id: 2,
    name: "Nhuộm Tóc",
    description: "Nhuộm màu thời trang, highlight, ombre",
    price: "500k - 2.000k",
  },
  {
    id: 3,
    name: "Uốn Tóc",
    description: "Uốn xoăn, uốn phồng với công nghệ Hàn Quốc",
    price: "800k - 1.500k",
  },
  {
    id: 4,
    name: "Duỗi Tóc",
    description: "Duỗi thẳng, phục hồi tóc với keratin cao cấp",
    price: "700k - 1.200k",
  },
  {
    id: 5,
    name: "Phục Hồi",
    description: "Điều trị tóc hư tổn, cấp ẩm chuyên sâu",
    price: "400k - 800k",
  },
  {
    id: 6,
    name: "Gội Massage",
    description: "Gội đầu thư giãn kết hợp massage da đầu",
    price: "100k - 200k",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 md:py-40 bg-secondary/30">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
          ref={ref}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Menu
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
              className="group border-b border-border py-8 flex justify-between items-center hover:bg-background/50 transition-colors px-4 -mx-4"
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
      </div>
    </section>
  );
};

export default Services;
