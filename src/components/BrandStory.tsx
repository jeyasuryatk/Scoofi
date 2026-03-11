import { motion } from "framer-motion";

const BrandStory = () => {
  return (
    <section id="our-story" className="py-20 bg-background">
      <div className="container max-w-4xl text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-8 tracking-tight uppercase">
            Rooted in memory, elevated by craft
          </h2>
          <p className="text-foreground/80 font-body text-sm md:text-base leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
            Scoofi began with a memory — of our mother making homemade chocolate ice cream, 
            rich with love, with no preservatives. We're here to pass that legacy on, one 
            scoop at a time. Real ingredients. Real stories. Real goodness.
          </p>
          
          <div className="flex justify-center gap-2 mb-16">
            <div className="w-8 h-8 rounded-full bg-[#ffb7c5] flex items-center justify-center">🍦</div>
            <div className="w-8 h-8 rounded-full bg-[#ffb7c5] flex items-center justify-center">🍦</div>
            <div className="w-8 h-8 rounded-full bg-[#ffb7c5] flex items-center justify-center">🍦</div>
          </div>

          <hr className="border-border/50 mb-16" />

          <div className="grid grid-cols-3 gap-8 md:gap-20">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <span className="font-display text-3xl md:text-5xl font-bold text-foreground mb-2">12L+</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/60">Happy Customers</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <span className="font-display text-3xl md:text-5xl font-bold text-foreground mb-2">5M+</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/60">Scoops Sold</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <span className="font-display text-3xl md:text-5xl font-bold text-foreground mb-2">20</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/60">Our Branches</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
