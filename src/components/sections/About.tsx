import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 md:py-40 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="order-2 md:order-1"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Salon interior"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8 text-foreground leading-tight">
              Nghệ Thuật
              <br />
              & Đam Mê
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-sm leading-relaxed">
              <p>
                Với hơn 10 năm kinh nghiệm trong ngành làm đẹp, Hair Studio tự hào 
                mang đến những dịch vụ chăm sóc tóc chất lượng cao nhất.
              </p>
              <p>
                Đội ngũ stylist của chúng tôi được đào tạo bài bản, luôn cập nhật 
                những xu hướng mới nhất và sử dụng các sản phẩm cao cấp.
              </p>
            </div>

            {/* Minimal Stats */}
            <div className="flex gap-12 mt-12 pt-8 border-t border-border">
              <div>
                <p className="font-display text-3xl text-foreground">10+</p>
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
                <p className="font-display text-3xl text-foreground">15+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  Stylists
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
