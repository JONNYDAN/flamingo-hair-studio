import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(110deg, rgba(18,12,8,0.85), rgba(18,12,8,0.25)), url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-28 left-10 w-72 h-72 rounded-full bg-cream/60 blur-3xl" />
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-body text-xs uppercase tracking-[0.4em] text-white/70"
            >
              Willow Hair Salon
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-light mt-6 leading-tight"
            >
              Refined hair care
              <br />
              Elegant style
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-body text-sm md:text-base text-white/70 mt-6 max-w-xl leading-relaxed"
            >
              A warm atmosphere, experienced stylists, and personalized services for every style.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link
                to="/booking"
                className="inline-flex items-center justify-center border border-white/60 px-8 py-4 text-xs uppercase tracking-[0.3em] font-body hover:bg-white hover:text-black transition-colors"
              >
                Book now
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center border border-white/30 px-8 py-4 text-xs uppercase tracking-[0.3em] font-body text-white/80 hover:text-white hover:border-white transition-colors"
              >
                View menu
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative bg-white/10 border border-white/20 p-6 backdrop-blur">
              <img
                src="/BusinessCard_WillowGlenHairSalon/front_fullcolor_1024x599.png"
                alt="Business card"
                className="w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
