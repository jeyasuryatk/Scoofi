import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import whatsappIcon from "@/assets/WhatsApp.svg";
import cloud1 from "@/assets/img-2-3.png";
import cloud2 from "@/assets/img-14-3.png";
import cloud3 from "@/assets/img-15-3.png";
import cloud4 from "@/assets/img-17-3.png";
import cloud5 from "@/assets/img-21-3.png";

const queryClient = new QueryClient();

const GlobalClouds = () => (
  <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-20">
    {/* Corner Clouds */}
    <motion.img
      src={cloud1}
      animate={{ 
        scale: [1, 1.15, 1],
        rotate: [0, 8, 0],
        x: [-30, 30, -30]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-5%] left-[-5%] w-80 md:w-[600px] blur-[2px]"
    />
    <motion.img
      src={cloud2}
      animate={{ 
        scale: [1.1, 1.25, 1.1],
        rotate: [0, -12, 0],
        x: [20, -20, 20]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-10%] right-[-10%] w-64 md:w-[500px] blur-[3px]"
    />
    <motion.img
      src={cloud4}
      animate={{ 
        scale: [1, 1.3, 1],
        rotate: [0, 5, 0],
        y: [20, -20, 20]
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[-10%] left-[-10%] w-60 md:w-[450px] blur-[2px]"
    />
    <motion.img
      src={cloud5}
      animate={{ 
        scale: [1.1, 1.2, 1.1],
        rotate: [0, -7, 0],
        x: [15, -15, 15]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[-5%] right-[-5%] w-72 md:w-[600px] blur-[1px]"
    />

    {/* Side Decor - Vertical Milk Splashes */}
    <div className="fixed top-0 left-0 w-20 md:w-40 h-screen overflow-hidden opacity-30 z-[-1] pointer-events-none [mask-image:linear-gradient(to_right,black_50%,transparent)]">
       <motion.img 
        src={cloud2} 
        animate={{ y: ["0%", "-50%", "0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="h-[200%] w-full object-cover object-left blur-[1px]"
      />
    </div>
    <div className="fixed top-0 right-0 w-20 md:w-40 h-screen overflow-hidden opacity-30 z-[-1] pointer-events-none [mask-image:linear-gradient(to_left,black_50%,transparent)]">
       <motion.img 
        src={cloud2} 
        animate={{ y: ["0%", "-50%", "0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        className="h-[200%] w-full object-cover object-right scale-x-[-1] blur-[1px]"
      />
    </div>

    {/* Moving Background Clouds - More of them for "Fully Cloud" */}
    <motion.img
      src={cloud3}
      animate={{ 
        x: [-200, window.innerWidth + 200],
        y: [100, 150, 100]
      }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      className="absolute w-[400px] opacity-10"
    />
    <motion.img
      src={cloud1}
      animate={{ 
        x: [window.innerWidth + 200, -200],
        y: [400, 350, 400]
      }}
      transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      className="absolute w-[350px] opacity-10"
    />
    <motion.img
      src={cloud2}
      animate={{ 
        x: [-200, window.innerWidth + 200],
        y: [700, 750, 700]
      }}
      transition={{ duration: 130, repeat: Infinity, ease: "linear" }}
      className="absolute w-[500px] opacity-10"
    />
    
    {/* Floating center clouds */}
    <motion.img
      src={cloud4}
      animate={{ 
        x: [window.innerWidth * 0.2, window.innerWidth * 0.3, window.innerWidth * 0.2],
        y: [window.innerHeight * 0.4, window.innerHeight * 0.5, window.innerHeight * 0.4],
        opacity: [0.05, 0.1, 0.05]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-96 blur-[5px]"
    />
    <motion.img
      src={cloud5}
      animate={{ 
        x: [window.innerWidth * 0.7, window.innerWidth * 0.6, window.innerWidth * 0.7],
        y: [window.innerHeight * 0.2, window.innerHeight * 0.3, window.innerHeight * 0.2],
        opacity: [0.05, 0.1, 0.05]
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-80 blur-[4px]"
    />
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
    
    // Fallback for some mobile browsers
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
    }, 10);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Index />
          </motion.div>
        } />
        <Route path="/products" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Products />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <About />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div
            initial={{ opacity: 0, rotateY: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, rotateY: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, rotateY: -10, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Contact />
          </motion.div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const WhatsAppButton = () => (
  <motion.a
    href="https://api.whatsapp.com/send/?phone=919840740991&text&type=phone_number&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0, x: 20 }}
    animate={{ scale: 1, opacity: 1, x: 0 }}
    whileHover={{ scale: 1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-[9999] flex items-center group cursor-pointer"
  >
    <div className="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-lg shadow-xl border border-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
      <p className="text-sm font-bold text-brand-chocolate">Chat with us!</p>
    </div>
    <img 
      src={whatsappIcon} 
      alt="WhatsApp" 
      className="w-12 h-12 md:w-14 md:h-14 object-contain transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12"
    />
  </motion.a>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <GlobalClouds />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <WhatsAppButton />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
