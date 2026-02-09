import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Home = () => {
  const [isPromoOpen, setIsPromoOpen] = useState(true);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {isPromoOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4"
            onClick={() => setIsPromoOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Promotion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
            <button
              type="button"
              onClick={() => setIsPromoOpen(false)}
              className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-charcoal shadow-lg transition hover:bg-foreground hover:text-background"
              aria-label="Close promotion"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src="/banner.png"
              alt="Lunar New Year promotion"
              className="max-h-[80vh] w-auto max-w-full rounded-2xl shadow-2xl"
            />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
