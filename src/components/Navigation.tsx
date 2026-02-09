import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Left Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <Link
                to="/"
                className={`font-body text-xs uppercase tracking-[0.25em] transition-colors duration-300 hover:opacity-60 ${
                  isScrolled ? "text-foreground" : "text-white"
                } ${isActive("/") ? "opacity-60" : ""}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-body text-xs uppercase tracking-[0.25em] transition-colors duration-300 hover:opacity-60 ${
                  isScrolled ? "text-foreground" : "text-white"
                } ${isActive("/about") ? "opacity-60" : ""}`}
              >
                About
              </Link>
            </div>

            {/* Center Logo */}
            <Link 
              to="/" 
              className={`font-display text-2xl md:text-3xl tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Hair Studio
            </Link>

            {/* Right Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <Link
                to="/contact"
                className={`font-body text-xs uppercase tracking-[0.25em] transition-colors duration-300 hover:opacity-60 ${
                  isScrolled ? "text-foreground" : "text-white"
                } ${isActive("/contact") ? "opacity-60" : ""}`}
              >
                Contact
              </Link>
              <Link
                to="/booking"
                className={`font-body text-xs uppercase tracking-[0.25em] transition-colors duration-300 hover:opacity-60 ${
                  isScrolled ? "text-foreground" : "text-white"
                } ${isActive("/booking") ? "opacity-60" : ""}`}
              >
                Booking
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10">
              <Link
                to="/"
                className={`font-body text-sm uppercase tracking-[0.3em] transition-opacity hover:opacity-50 ${
                  isActive("/") ? "opacity-50" : "text-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-body text-sm uppercase tracking-[0.3em] transition-opacity hover:opacity-50 ${
                  isActive("/about") ? "opacity-50" : "text-foreground"
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`font-body text-sm uppercase tracking-[0.3em] transition-opacity hover:opacity-50 ${
                  isActive("/contact") ? "opacity-50" : "text-foreground"
                }`}
              >
                Contact
              </Link>
              <Link
                to="/booking"
                className={`font-body text-sm uppercase tracking-[0.3em] transition-opacity hover:opacity-50 ${
                  isActive("/booking") ? "opacity-50" : "text-foreground"
                }`}
              >
                Booking
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
