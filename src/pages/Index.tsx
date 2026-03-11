import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FloatingElements from "@/components/FloatingElements";
import ScoopIntoNature from "@/components/ScoopIntoNature";
import VideoSection from "@/components/VideoSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <VideoSection />
      <Testimonials />
      
      <div className="relative">
        {/* Fade In */}
        
        
        <div className="bg-primary py-4 md:py-6 overflow-hidden relative shadow-md">
          <div className="absolute inset-0 bg-secondary opacity-15" />
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap relative z-10"
          >
            <span className="font-display text-xl md:text-3xl font-black text-white uppercase tracking-tight mx-8 drop-shadow-sm">
              EXPERIENCE THE TRUE TASTE OF NATURE – ONLY AT SCOOFI  
            </span>
            <span className="font-display text-xl md:text-3xl font-black text-white uppercase tracking-tight mx-8 drop-shadow-sm">
              EXPERIENCE THE TRUE TASTE OF NATURE – ONLY AT SCOOFI  
            </span>
            <span className="font-display text-xl md:text-3xl font-black text-white uppercase tracking-tight mx-8 drop-shadow-sm">
              EXPERIENCE THE TRUE TASTE OF NATURE – ONLY AT SCOOFI  
            </span>
            <span className="font-display text-xl md:text-3xl font-black text-white uppercase tracking-tight mx-8 drop-shadow-sm">
              EXPERIENCE THE TRUE TASTE OF NATURE – ONLY AT SCOOFI  
            </span>
          </motion.div>
        </div>

        {/* Fade Out */}
      
      </div>

      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
