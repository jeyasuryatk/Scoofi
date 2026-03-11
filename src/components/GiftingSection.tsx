import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import giftImg from "@/assets/gifting.jpg";

const GiftingSection = () => {
  return (
    <section id="gifting" className="py-20 md:py-28 bg-blush/40">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            className="w-full  aspect-[4/5] mx-auto md:mx-0 rounded-[3rem] overflow-hidden shadow-1xl transition-all duration-500"
          >
            <img 
              src={giftImg} 
              alt="Gelato gift box" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[#d32f2f] mb-4 font-black">Special Occasions</p>
            <h2 className="font-display text-4xl md:text-6xl font-black text-[#1a365d] mb-8 leading-[0.9] uppercase tracking-tighter">
              Give the Gift of Gelato
            </h2>
            <p className="text-[#1a365d]/60 font-body text-lg leading-relaxed mb-10 max-w-md font-bold uppercase tracking-widest">
              Delight your loved ones with our beautifully curated gelato gift boxes. Perfect for birthdays, anniversaries, or just because. Each box is handpacked with care and elegance.
            </p>
            <Button size="lg" className="bg-[#1a365d] hover:bg-[#0d1b2e] rounded-full px-12 py-7 text-sm tracking-[0.2em] uppercase font-black transition-all hover:scale-105 active:scale-95 shadow-xl">
              Explore Gifting
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GiftingSection;
