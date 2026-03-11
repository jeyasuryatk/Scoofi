import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Heart, Flower2, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Pista Ice Cream",
    desc: "Supports heart health, rich in protein and fiber.",
    color: "text-green-600",
    sideImage: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=100&q=80"
  },
  {
    icon: Flower2,
    title: "Rose Ice Cream",
    desc: "Cools the body, refreshes mood, enhances skin glow.",
    color: "text-rose-500",
    sideImage: "https://images.unsplash.com/photo-1594631252845-29fc458695d7?w=100&q=80"
  },
  {
    icon: Zap,
    title: "Cashew Ice Cream",
    desc: "Boosts energy levels, rich in healthy natural fats.",
    color: "text-amber-600",
    sideImage: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=100&q=80"
  },
  {
    icon: ShieldCheck,
    title: "Custard Apple Ice Cream",
    desc: "Improves digestion, strengthens immunity, and is rich in antioxidants.",
    color: "text-emerald-600",
    sideImage: "https://images.unsplash.com/photo-1615485500704-8e990f3900f7?w=100&q=80"
  }
];

const points = [
  "Made from pure ingredients & processed hygienically",
  "No Chemicals added",
  "Rated 5 stars by our happy customers",
  "In-house production for guaranteed freshness",
  "100+ delivery points serving creamy happiness daily"
];

const ScoopIntoNature = () => {
  return (
    <section className="py-8 bg-[#fdf2e9] overflow-hidden">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-lg">
            <motion.h2 
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-3xl md:text-5xl font-black text-[#1a365d] mb-6 leading-[0.95] uppercase tracking-tighter"
            >
              We craft the finest natural ice creams just for you
            </motion.h2>
            
            <ul className="space-y-2 mb-8">
              {points.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2.5 group"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#d32f2f] shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                  <span className="font-body text-sm md:text-base text-[#1a365d] font-bold uppercase tracking-tight">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                asChild
                className="bg-[#1a365d] hover:bg-[#d32f2f] text-white font-black px-8 py-3 text-sm rounded-full shadow-md transition-all hover:scale-105 active:scale-95 uppercase tracking-widest"
              >
                <Link to="/products">GET SCOOFI</Link>
              </Button>
            </motion.div>
          </div>

          <div className="grid gap-4 md:gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  x: 15, 
                  backgroundColor: "rgba(255,255,255,0.8)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="flex items-center gap-6 p-5 rounded-[2.5rem] transition-all duration-300 border-2 border-transparent hover:border-white shadow-sm"
              >
                <div className="flex gap-4 shrink-0">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                    className={`p-4 rounded-2xl bg-white shadow-lg ${benefit.color}`}
                  >
                    <benefit.icon className="w-8 h-8" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 rounded-2xl overflow-hidden shadow-md border-2 border-white"
                  >
                    <img src={benefit.sideImage} alt="" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black text-[#1a365d] mb-1 uppercase tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-[#1a365d]/70 font-bold uppercase text-xs tracking-widest leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoopIntoNature;
