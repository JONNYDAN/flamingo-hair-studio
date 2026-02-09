import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(18,12,8,0.75), rgba(18,12,8,0.3)), url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold-light tracking-[0.35em] uppercase text-sm mb-4 font-body"
          >
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl font-light"
          >
              Our story
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
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
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
              <p className="text-accent tracking-[0.35em] uppercase text-sm mb-4 font-body">
                Mission
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-8 text-foreground">
                Artistry & passion
              </h2>
              <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
                <p>
                  With over 10 years of beauty expertise, we deliver refined, personalized services.
                </p>
                <p>
                  Our stylists stay ahead of trends and pair global technique with premium products.
                </p>
                <p>
                  We do more than hair. We craft confidence and personal style.
                </p>
              </div>
              <img
                src="/BusinessCard_WillowGlenHairSalon/front_fullcolor_1024x599.png"
                alt="Business card"
                className="mt-8 w-full max-w-[260px]"
              />
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
            <p className="text-accent tracking-[0.35em] uppercase text-sm mb-4 font-body">
              Core values
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              What we believe in
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Quality",
                description: "We use only trusted premium brands.",
              },
              {
                title: "Creativity",
                description: "Every client has a unique style.",
              },
              {
                title: "Care",
                description: "Your satisfaction defines our success.",
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
                <h3 className="font-display text-2xl mb-4 text-foreground">
                  {value.title}
                </h3>
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
              { number: "10+", label: "Years of experience" },
              { number: "5000+", label: "Clients" },
              { number: "15+", label: "Professional stylists" },
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
