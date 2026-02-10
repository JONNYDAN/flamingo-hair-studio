import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const menuGroups = [
  {
    subtitle: "Haircut & finishing",
    items: [
      {
        name: "Men's Haircut",
        detail: "Precision cut tailored to style",
        price: "$29",
      },
      {
        name: "Women's Haircut",
        detail: "Customized cut designed for your face shape",
        price: "$35 & up",
      },
      {
        name: "Senior's Haircut",
        detail: "Comfortable, easy-to-maintain styles",
        price: "$26 & up",
      },
      {
        name: "Kid's Haircut",
        detail: "Gentle haircut in a friendly environment",
        price: "$26",
      },
      {
        name: "Color",
        detail: "Customized color for natural & vibrant results",
        price: "$65 & up",
      },
      {
        name: "Hilite",
        detail: "Soft dimension and natural brightness",
        price: "$85 & up",
      },
    ],
  },
  {
    subtitle: "Brow & Lash Services",
    items: [
      { name: "Powder Shading Brow & Microblading",
        detail: "Soft ombre + hair-stroke technique",
        price: "$450" },
      {
        name: "Microblading",
        detail: "Natural hair-like strokes",
        price: "$350",
      },
      { name: "Eyelash Extensions",
        detail: "Classic - Hybrid - Volume",
        price: "$130 & up" },
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
              "linear-gradient(120deg, rgba(18,12,8,0.75), rgba(18,12,8,0.2)), url('https://images.pexels.com/photos/3992878/pexels-photo-3992878.jpeg?_gl=1*nsgu6b*_ga*MTA3ODIxOTI1MS4xNzcwNzIyMjEz*_ga_8JE65Q40S6*czE3NzA3MjIyMTMkbzEkZzEkdDE3NzA3MjI3NjckajU3JGwwJGgw')",
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
                  </div>
                  <div className="space-y-6">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-start justify-between gap-6"
                      >
                        <div>
                          <h3 className="font-display text-xl text-foreground">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground font-body">
                            {item.detail}
                          </p>
                        </div>
                        <p className="font-body text-sm text-foreground shrink-0">
                          {item.price}
                        </p>
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
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body">
                  Booking
                </p>
                <h3 className="font-display text-2xl text-foreground mt-3">
                  Personal booking
                </h3>
                <p className="text-sm text-muted-foreground font-body mt-4 leading-relaxed">
                  Personalized sessions based on your hair and style. Please
                  book ahead for the best experience.
                </p>
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center mt-6 border border-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.3em] font-body hover:bg-foreground hover:text-background transition-colors"
                >
                  Book now
                </Link>
              </div>

              <div className="bg-charcoal text-white p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-light font-body">
                  Instagram
                </p>
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
