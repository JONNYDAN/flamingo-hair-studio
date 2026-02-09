import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const menuGroups = [
  {
    title: "Cut & Style",
    subtitle: "Haircut & finishing",
    items: [
      { name: "Signature Cut", detail: "Consultation, cut, and finish", price: "350k - 600k" },
      { name: "Short Cut", detail: "Short shaping", price: "280k - 450k" },
      { name: "Blowout", detail: "Volume finish", price: "200k - 350k" },
    ],
  },
  {
    title: "Color",
    subtitle: "Color & dimension",
    items: [
      { name: "Full Color", detail: "Full coverage", price: "900k - 2.200k" },
      { name: "Balayage", detail: "Soft transitions", price: "1.500k - 3.200k" },
      { name: "Highlights", detail: "Light accents", price: "1.200k - 2.800k" },
    ],
  },
  {
    title: "Texture",
    subtitle: "Curl & straight",
    items: [
      { name: "Soft Perm", detail: "Soft waves", price: "1.000k - 1.800k" },
      { name: "Digital Perm", detail: "Korean digital perm", price: "1.400k - 2.500k" },
      { name: "Keratin Straight", detail: "Repair straight", price: "1.200k - 2.200k" },
    ],
  },
  {
    title: "Treatment",
    subtitle: "Deep care",
    items: [
      { name: "Scalp Care", detail: "Scalp balance", price: "350k - 600k" },
      { name: "Moisture Repair", detail: "Moisture restore", price: "500k - 900k" },
      { name: "Premium Mask", detail: "Premium mask", price: "650k - 1.200k" },
    ],
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(18,12,8,0.75), rgba(18,12,8,0.2)), url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="relative z-10 container max-w-6xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold-light tracking-[0.35em] uppercase text-xs font-body"
          >
            Menu
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl text-white font-light mt-4 max-w-2xl"
          >
              Service menu
              <br />
              refined and modern
          </motion.h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16">
            <div className="space-y-14">
              {menuGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="border-b border-border pb-10"
                >
                  <div className="mb-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body">
                      {group.subtitle}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2">
                      {group.title}
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {group.items.map((item) => (
                      <div key={item.name} className="flex items-start justify-between gap-6">
                        <div>
                          <h3 className="font-display text-xl text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground font-body">{item.detail}</p>
                        </div>
                        <p className="font-body text-sm text-foreground shrink-0">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10"
            >
              <div className="bg-background/80 border border-border p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body">Booking</p>
                <h3 className="font-display text-2xl text-foreground mt-3">
                  Personal booking
                </h3>
                <p className="text-sm text-muted-foreground font-body mt-4 leading-relaxed">
                  Personalized sessions based on your hair and style. Please book ahead for the best
                  experience.
                </p>
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center mt-6 border border-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.3em] font-body hover:bg-foreground hover:text-background transition-colors"
                >
                  Book now
                </Link>
              </div>

              <div className="bg-charcoal text-white p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-light font-body">Instagram</p>
                <h3 className="font-display text-2xl mt-3">Follow the style</h3>
                <img
                  src="/QR%20Code_Willow%20Hair%20Salon_Instagram/design%20(1).png"
                  alt="QR Instagram"
                  className="w-40 h-40 object-contain mt-6 bg-white p-3"
                />
                <p className="text-sm text-white/70 font-body mt-4">
                  Scan the QR for the latest looks.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
