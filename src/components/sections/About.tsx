import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Salon interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent tracking-[0.3em] uppercase text-sm mb-4 font-body">
              Về Chúng Tôi
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8 text-foreground">
              Nghệ Thuật & Đam Mê
            </h2>
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                Với hơn 10 năm kinh nghiệm trong ngành làm đẹp, Hair Studio tự hào 
                mang đến những dịch vụ chăm sóc tóc chất lượng cao nhất. Chúng tôi 
                tin rằng mỗi mái tóc đều là một tác phẩm nghệ thuật.
              </p>
              <p>
                Đội ngũ stylist của chúng tôi được đào tạo bài bản, luôn cập nhật 
                những xu hướng mới nhất và sử dụng các sản phẩm cao cấp để đảm bảo 
                kết quả tốt nhất cho khách hàng.
              </p>
              <p>
                Tại Hair Studio, chúng tôi không chỉ làm tóc - chúng tôi tạo nên 
                phong cách và sự tự tin cho bạn.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <p className="font-display text-4xl text-accent">10+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mt-2">
                  Năm Kinh Nghiệm
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl text-accent">5000+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mt-2">
                  Khách Hàng
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl text-accent">15+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mt-2">
                  Stylist
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
