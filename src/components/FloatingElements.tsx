import { motion } from "framer-motion";
import { IceCream, Star, Heart, Sparkles, Cherry, Cookie } from "lucide-react";

const FloatingElements = () => {
  const elements = [
    { Icon: IceCream, color: "text-brand-red", size: 24, top: "10%", left: "5%", delay: 0 },
    { Icon: Star, color: "text-brand-yellow", size: 20, top: "20%", left: "85%", delay: 1 },
    { Icon: Heart, color: "text-brand-red", size: 18, top: "70%", left: "10%", delay: 2 },
    { Icon: Sparkles, color: "text-brand-lime", size: 22, top: "60%", left: "90%", delay: 0.5 },
    { Icon: Cherry, color: "text-brand-red", size: 24, top: "40%", left: "3%", delay: 1.5 },
    { Icon: Cookie, color: "text-brand-chocolate", size: 20, top: "85%", left: "80%", delay: 2.5 },
    { Icon: Star, color: "text-brand-yellow", size: 16, top: "15%", left: "45%", delay: 3 },
    { Icon: Sparkles, color: "text-brand-lime", size: 18, top: "75%", left: "35%", delay: 1.2 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className={`absolute ${el.color} opacity-20`}
          style={{ top: el.top, left: el.left }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          <el.Icon size={el.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
