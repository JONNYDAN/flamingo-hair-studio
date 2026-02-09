import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl md:text-4xl mb-6">Hair Studio</h3>
          <p className="font-body text-sm text-background/60 tracking-wide max-w-md mx-auto">
            Nơi nghệ thuật làm đẹp gặp gỡ sự tinh tế
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-8 md:gap-12 mb-12">
          <Link 
            to="/" 
            className="font-body text-xs uppercase tracking-[0.2em] text-background/60 hover:text-background transition-colors"
          >
            Home
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

        {/* Divider */}
        <div className="w-12 h-px bg-background/20 mx-auto mb-8" />

        {/* Copyright */}
        <p className="font-body text-xs text-background/40 text-center tracking-wider">
          © {new Date().getFullYear()} Hair Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
