import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 bg-charcoal text-white/60">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm">
            © {new Date().getFullYear()} Hair Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/about" className="text-sm hover:text-white transition-colors font-body">
              About
            </Link>
            <Link to="/contact" className="text-sm hover:text-white transition-colors font-body">
              Contact
            </Link>
            <Link to="/booking" className="text-sm hover:text-white transition-colors font-body">
              Booking
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
