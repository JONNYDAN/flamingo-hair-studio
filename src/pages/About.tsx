import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold-light tracking-[0.3em] uppercase text-sm mb-4 font-body"
          >
            Về Chúng Tôi
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl font-light"
          >
            Câu Chuyện Của Chúng Tôi
          </motion.h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Salon interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-accent tracking-[0.3em] uppercase text-sm mb-4 font-body">
                Sứ Mệnh
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-accent tracking-[0.3em] uppercase text-sm mb-4 font-body">
              Giá Trị Cốt Lõi
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Điều Chúng Tôi Tin Tưởng
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Chất Lượng",
                description: "Chúng tôi chỉ sử dụng những sản phẩm tốt nhất từ các thương hiệu uy tín toàn cầu.",
              },
              {
                title: "Sáng Tạo",
                description: "Mỗi khách hàng là một cá nhân độc đáo, xứng đáng có một phong cách riêng biệt.",
              },
              {
                title: "Tận Tâm",
                description: "Sự hài lòng của khách hàng là thước đo thành công của chúng tôi.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-display text-2xl mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32 bg-charcoal text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {[
              { number: "10+", label: "Năm Kinh Nghiệm" },
              { number: "5000+", label: "Khách Hàng" },
              { number: "15+", label: "Stylist Chuyên Nghiệp" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl text-gold-light">{stat.number}</p>
                <p className="text-sm text-white/60 uppercase tracking-wider mt-2 font-body">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
