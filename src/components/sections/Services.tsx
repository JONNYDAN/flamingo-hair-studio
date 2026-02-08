import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: 1,
    name: "Cắt Tóc",
    description: "Cắt tạo kiểu theo xu hướng mới nhất, phù hợp với khuôn mặt",
    price: "150.000đ - 300.000đ",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Nhuộm Tóc",
    description: "Nhuộm màu thời trang, highlight, ombre với sản phẩm cao cấp",
    price: "500.000đ - 2.000.000đ",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Uốn Tóc",
    description: "Uốn xoăn, uốn phồng, uốn setting với công nghệ Hàn Quốc",
    price: "800.000đ - 1.500.000đ",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Duỗi Tóc",
    description: "Duỗi thẳng, phục hồi tóc hư tổn với keratin cao cấp",
    price: "700.000đ - 1.200.000đ",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Phục Hồi Tóc",
    description: "Điều trị tóc hư tổn, cấp ẩm chuyên sâu, phục hồi keratin",
    price: "400.000đ - 800.000đ",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Gội Massage",
    description: "Gội đầu thư giãn kết hợp massage da đầu chuyên nghiệp",
    price: "100.000đ - 200.000đ",
    image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          ref={ref}
        >
          <p className="text-accent tracking-[0.3em] uppercase text-sm mb-4 font-body">
            Dịch Vụ
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Những Gì Chúng Tôi Cung Cấp
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-6">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              </div>
              
              <h3 className="font-display text-2xl mb-2 text-foreground">
                {service.name}
              </h3>
              <p className="text-muted-foreground font-body text-sm mb-3 leading-relaxed">
                {service.description}
              </p>
              <p className="text-accent font-body font-medium">
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
