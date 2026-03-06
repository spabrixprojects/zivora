import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/zivora-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/collections", label: "Collections" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-0 shadow-sm"
          : "bg-transparent border-b-transparent py-2"
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Zivora" className="h-40 w-auto object-contain" />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-10">
              {links.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="relative group font-body text-sm tracking-[0.2em] uppercase transition-colors duration-300 py-2"
                  >
                    <span className={isActive ? "text-gold" : "text-foreground group-hover:text-gold transition-colors duration-300"}>
                      {link.label}
                    </span>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1px] bg-gold transform origin-left transition-transform duration-300 ease-out ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-6">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden text-foreground hover:text-gold transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Modern Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] sm:w-[350px] bg-background border-l border-border z-50 lg:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 h-20 border-b border-border">
                <img src={logo} alt="Zivora" className="h-40 w-auto object-contain" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-gold transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-10 px-8 flex flex-col gap-8">
                {links.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`block font-display text-3xl transition-colors ${location.pathname === link.to ? "text-gold" : "text-foreground hover:text-gold"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>


            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
