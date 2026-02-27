import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Chefs", href: "#chefs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#booking" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-16 py-4">
        <a href="#home" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="CEEDD Restaurant" 
            className="h-20 w-auto object-contain drop-shadow-lg"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors text-sm tracking-widest uppercase font-body relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <a
          href="#booking"
          className="hidden md:inline-flex items-center px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 text-sm tracking-widest uppercase font-body"
        >
          Reserve Table
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-primary">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground hover:text-primary transition-colors text-sm tracking-widest uppercase relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all text-sm tracking-widest uppercase"
              >
                Reserve Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
