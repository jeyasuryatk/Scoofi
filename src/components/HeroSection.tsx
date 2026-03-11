import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import img1 from "@/assets/034A5232-scaled.webp";
import img2 from "@/assets/Pista-And-Rose-1-scaled.webp";
import img3 from "@/assets/Seetha.png";
import cloud from "@/assets/img-22-3.png";
import bg1 from "@/assets/034A5232.jpg";
import bg2 from "@/assets/034A5171.jpg";

const heroImages = [
  {
    url: img1,
    name: "Classic Natural"
  },
  {
    url: img2,
    name: "Pista & Rose"
  },
  {
    url: img3,
    name: "Seetha"
  }
];

const backgroundSliderImages = [bg1, bg2];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundSliderImages.length);
    }, 5000);
    return () => clearInterval(bgTimer);
  }, []);

  return (
    <section className="relative w-full flex flex-col bg-background overflow-hidden">
      {/* Background Slider Section - Now a direct child to take up vertical space */}
      <div className="relative w-full aspect-[21/9] md:h-[80vh] z-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${backgroundSliderImages[currentBg]}')` }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Buttons on top of the Background Slider */}
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 flex flex-wrap gap-4 z-50">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#shop" className="group relative overflow-hidden bg-brand-red text-white font-display text-xs md:text-sm font-black px-8 py-3.5 rounded-full shadow-lg hover:shadow-brand-red/20 transition-all duration-500 hover:-translate-y-0.5 active:scale-95 block">
              <span className="relative z-10 uppercase tracking-widest">Explore Shop</span>
              <div className="absolute inset-0 bg-brand-chocolate translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="#categories" className="bg-white/90 backdrop-blur-sm text-brand-chocolate font-display text-xs md:text-sm font-black px-8 py-3.5 rounded-full shadow-lg hover:bg-white transition-all duration-500 hover:-translate-y-0.5 active:scale-95 uppercase tracking-widest border border-white/50 block">
              Categories
            </a>
          </motion.div>
        </div>
      </div>

      {/* Hero Content Section - Moved vertically below the background slider */}
      <div className="relative w-full bg-white/50 backdrop-blur-sm z-10">
        {/* Decorative Background Elements */}
        <div className="absolute top-[-20%] left-[-10%] w-[40%] aspect-square bg-brand-red/10 rounded-full blur-[100px] animate-pulse -z-10" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] aspect-square bg-brand-lime/20 rounded-full blur-[100px] animate-pulse -z-10" style={{ animationDelay: '3s' }} />
        
        {/* Original Content */}
        <div className="container py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between px-6 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-md lg:text-left flex flex-col lg:items-start items-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-4"
          >
            <span className="px-3 py-1 rounded-full glass text-brand-chocolate font-black text-[7px] md:text-[9px] tracking-[0.3em] uppercase border-brand-red/10 shadow-sm bg-white/60">
              Goddess of Taste
            </span>
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-4xl md:text-7xl font-black leading-[0.95] mb-6 tracking-tight text-brand-chocolate drop-shadow-sm"
          >
            Scoop into <br className="hidden lg:block" /> <span className="text-brand-red">Nature</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-body text-sm md:text-lg text-brand-chocolate/80 leading-relaxed mb-8 max-w-md drop-shadow-none"
          >
            Experience the <span className="text-brand-red font-bold underline decoration-brand-yellow decoration-2 underline-offset-4">pure, fresh, and irresistibly creamy</span> goodness of nature's finest ingredients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap lg:justify-start justify-center gap-4"
          >
            <a href="#shop" className="group relative overflow-hidden bg-primary text-white font-display text-xs md:text-sm font-black px-8 py-3.5 rounded-full shadow-md hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-0.5 active:scale-95">
              <span className="relative z-10 uppercase tracking-widest">Explore Shop</span>
              <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a href="#categories" className="glass text-foreground font-display text-xs md:text-sm font-black px-8 py-3.5 rounded-full shadow-sm hover:bg-white transition-all duration-500 hover:-translate-y-0.5 active:scale-95 uppercase tracking-widest border-white/50">
              Categories
            </a>
          </motion.div>
        </motion.div>

        {/* Bumping Cloud in the middle */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-0 pointer-events-none opacity-60"
        >
          <img src={cloud} alt="" className="w-full h-full object-contain filter blur-[1px]" />
        </motion.div>

        {/* Dynamic Image on the right */}
        <div className="relative w-full lg:w-[45%] aspect-[4/3] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 0.95, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.4, rotate: 20 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                className="relative w-full h-full"
              >
                {/* Product Card Effect (Image 2) */}
                <div className="absolute inset-0 bg-transparent rounded-[2.5rem] overflow-hidden group p-10">
                  <div className="absolute top-6 left-6 z-10">
                    <h3 className="font-display text-2xl md:text-3xl font-black text-brand-red uppercase tracking-tight leading-none drop-shadow-md">
                      {heroImages[currentImage].name} <br />
                      <span className="text-sm md:text-base opacity-80 font-medium">Natural Ice Cream</span>
                    </h3>
                  </div>
                  <img
                    src={heroImages[currentImage].url}
                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110"
                    alt={heroImages[currentImage].name}
                  />
                  
                  {/* Floating elements to mimic Image 2 style */}
                  <div className="absolute inset-0 pointer-events-none opacity-40">
                    <div className="absolute top-1/4 right-8 w-6 h-6 bg-brand-chocolate/20 rounded-full blur-lg" />
                    <div className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-brand-red/10 rounded-full blur-lg" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
        </div>

        {/* Slider Controls/Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {heroImages.map((_, i) => (
            <motion.div 
              key={i}
              initial={false}
              animate={{ 
                scale: currentImage === i ? 1.2 : 1,
                opacity: currentImage === i ? 1 : 0.3,
                backgroundColor: currentImage === i ? "var(--primary)" : "rgba(0,0,0,0.2)"
              }}
              className="w-3 h-3 rounded-full cursor-pointer transition-all duration-300"
              onClick={() => setCurrentImage(i)}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);
};

export default HeroSection;
