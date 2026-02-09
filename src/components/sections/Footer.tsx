import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.2fr_0.8fr_0.6fr] gap-12 items-start">
          <div>
            <img
              src="/Logo/fulllogo_transparent.png"
              alt="Willow Hair Salon"
              style={{ width: "150px", height: "auto" }}
            />
            <p className="font-body text-sm text-background/60 tracking-wide max-w-md mt-6">
              Where hair artistry meets refined care. Private, personalized sessions for every style.
            </p>
            <div className="flex gap-6 mt-8">
              <Link
                to="/"
                className="font-body text-xs uppercase tracking-[0.2em] text-background/60 hover:text-background transition-colors"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="font-body text-xs uppercase tracking-[0.2em] text-background/60 hover:text-background transition-colors"
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="font-body text-xs uppercase tracking-[0.2em] text-background/60 hover:text-background transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="font-body text-xs uppercase tracking-[0.2em] text-background/60 hover:text-background transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/booking"
                className="font-body text-xs uppercase tracking-[0.2em] text-background/60 hover:text-background transition-colors"
              >
                Booking
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-background/50 font-body">
              Studio / Address
            </p>
            <p className="font-display text-2xl mt-4">Willow Hair Salon</p>
            <p className="font-body text-sm text-background/60 mt-4 leading-relaxed">
              2306 Almaden Rd
              <br />
              San Jose, CA 95125
              <br />
              +1 (408) 978-1499
            </p>
            
          </div>

          <div>
            <img
              src="/BusinessCard_WillowGlenHairSalon/front_fullcolor_1024x599.png"
              alt="Business card"
              className="mt-6 w-full max-w-[220px]"
            />
          </div>
        </div>

        <div className="w-full h-px bg-background/20 my-10" />

        <p className="font-body text-xs text-background/40 text-center tracking-wider">
          © {new Date().getFullYear()} Willow Hair Salon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
