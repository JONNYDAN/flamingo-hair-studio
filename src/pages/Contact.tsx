import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold-light tracking-[0.3em] uppercase text-sm mb-4 font-body"
          >
            Liên Hệ
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl font-light"
          >
            Ghé Thăm Chúng Tôi
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
                  <h3 className="font-display text-xl mb-2 text-foreground">Địa Chỉ</h3>
                  <p className="text-muted-foreground font-body">
                    123 Đường Nguyễn Huệ, Quận 1<br />
                    TP. Hồ Chí Minh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2 text-foreground">Điện Thoại</h3>
                  <p className="text-muted-foreground font-body">
                    <a href="tel:0901234567" className="hover:text-accent transition-colors">
                      090 123 4567
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
                  <h3 className="font-display text-xl mb-2 text-foreground">Giờ Mở Cửa</h3>
                  <div className="text-muted-foreground font-body space-y-1">
                    <p>Thứ 2 - Thứ 6: 9:00 - 19:00</p>
                    <p>Thứ 7 - Chủ Nhật: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4 font-body">
                  Theo Dõi Chúng Tôi
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

      <Footer />
    </div>
  );
};

export default Contact;
