import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Search, User, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/LOGO-01-email-removebg-preview.svg";
import cloudSplash from "@/assets/footer-bg-4.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact us", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleNavClick = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header className={`sticky top-0 z-[100] glass-header transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container flex items-center justify-between h-16 md:h-16 px-6">
        {/* Logo Section */}
        <div className="flex items-center group">
          <Link 
            to="/" 
            onClick={handleHomeClick}
            className="transition-transform duration-300 group-hover:scale-105 flex items-center"
          >
            <div className="flex flex-col items-start">
               <img src={logo} alt="Scoofi" className="h-24 md:h-20 w-auto object-contain" />
              
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 bg-white/80 p-1.5 rounded-full border border-black/5 shadow-sm">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] font-black transition-all px-4 py-2 rounded-full tracking-widest uppercase ${
                  isActive 
                    ? "bg-primary text-white shadow-md scale-105" 
                    : "text-foreground/70 hover:text-primary hover:bg-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Icon */}
        <div className="flex items-center">
          <button className="lg:hidden p-2.5 rounded-xl bg-primary/5 text-primary hover:bg-primary/10 transition-colors" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Cloud Splash - Reduced for mobile to avoid "bump" feel */}
      <div className="absolute bottom-[-1px] left-0 w-full translate-y-full pointer-events-none overflow-hidden">
        <img src={cloudSplash} alt="" className="w-full h-8 md:h-16 object-cover object-top opacity-60 rotate-180" />
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-t border-border"
          >
            <nav className="flex flex-col p-6 gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-base font-bold text-[#1a365d] hover:text-primary transition-colors tracking-widest"
                  onClick={handleNavClick}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
