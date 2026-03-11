import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/LOGO-01-email-removebg-preview.svg";

const Footer = () => {
  const socialLinks = [
    { 
      Icon: Facebook, 
      href: "https://www.facebook.com/people/Scoofi/61584230421273/",
      label: "Facebook"
    },
    { 
      Icon: Instagram, 
      href: "https://www.instagram.com/scoofiicecream?igsh=M25iaDhhdTZnbG9r",
      label: "Instagram"
    },
    { 
      Icon: MessageCircle, 
      href: "https://api.whatsapp.com/send/?phone=919840740991&text&type=phone_number&app_absent=0",
      label: "WhatsApp"
    }
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <footer className="bg-background text-foreground pt-12 pb-12 border-t border-black/5">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-4 flex justify-center md:justify-start">
              <img src={logo} alt="Scoofi" className="h-20 md:h-24 w-auto object-contain" />
            </div>
            <p className="font-body text-base md:text-lg text-foreground/60 leading-relaxed max-w-sm mx-auto md:mx-0 text-center md:text-left">
              Crafting nature's finest ingredients into extraordinary frozen delights. Experience the pure essence of taste.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-base font-bold uppercase tracking-[0.3em] text-foreground mb-4 md:mb-6">Links</h4>
            <div className="flex flex-col gap-1 md:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-base font-bold uppercase tracking-[0.3em] text-foreground mb-4 md:mb-6">Connect</h4>
            <div className="flex flex-col gap-1 md:gap-2">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <motion.a 
                  key={i} 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5, color: "var(--primary)" }}
                  className="flex items-center justify-center md:justify-start gap-4 text-lg font-medium text-foreground/60 transition-colors"
                >
                  <Icon size={20} className="text-primary" />
                  {label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-base font-bold uppercase tracking-[0.3em] text-foreground mb-4 md:mb-6">Contact</h4>
            <div className="space-y-4 md:space-y-6 text-lg font-medium text-foreground/60 leading-relaxed">
              <div>
                <span className="block text-primary font-bold text-sm uppercase tracking-[0.2em] mb-1">Location</span>
                <p className="text-base">57/77, Bazullah Rd, T. Nagar,<br />Chennai, Tamil Nadu 600017</p>
              </div>
              <div>
                <span className="block text-primary font-bold text-sm uppercase tracking-[0.2em] mb-1">Enquiries</span>
                <p className="text-base">+91 9363200003</p>
                <a href="mailto:info@aparajithagrafoodproducts.com" className="hover:text-primary transition-colors lowercase tracking-normal text-sm block mt-1">
                  info@aparajithagrafoodproducts.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-10 text-center">
          <p className="text-base font-medium text-foreground/40 uppercase tracking-[0.4em]">
            © 2026 Scoofi. All rights reserved.
          </p>
          <div className="flex gap-8">
             <a href="#" className="text-base font-medium text-foreground/40 uppercase tracking-[0.4em] hover:text-primary transition-colors">Privacy</a>
             <a href="#" className="text-base font-medium text-foreground/40 uppercase tracking-[0.4em] hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
