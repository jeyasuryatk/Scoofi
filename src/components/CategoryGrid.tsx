import { motion } from "framer-motion";
import kalaJamun from "@/assets/kala-jamun.png";
import blackGrapes from "@/assets/black-grapes.png";
import mango from "@/assets/mango.jpg";

const categories = [
  { 
    id: "01",
    name: "Kala Jamun", 
    image: kalaJamun,
    bgColor: "bg-[#e2d1c3]"
  },
  { 
    id: "02",
    name: "Black Grapes", 
    image: blackGrapes,
    bgColor: "bg-[#d8c3a5]"
  },
  { 
    id: "03",
    name: "Mango", 
    image: mango,
    bgColor: "bg-[#eac67a]"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-8 bg-background overflow-hidden relative" id="categories">
      {/* Edge Fades to smooth transition between sections */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-lime/10 to-transparent pointer-events-none" />
      
      {/* Pattern with Fade Mask */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
      
      <div className="absolute top-0 left-0 w-60 h-60 bg-brand-red/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-brand-yellow/20 rounded-full translate-x-1/2 translate-y-1/2 blur-[80px]" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-brand-chocolate tracking-tight leading-none">
            Freshly <span className="text-brand-red drop-shadow-sm">Crafted</span>
          </h2>
          <p className="text-brand-chocolate/70 max-w-xl mx-auto text-base font-bold leading-relaxed">
            Explore our curated selection of natural flavors, each made with love and the finest ingredients.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative z-10 glass rounded-[2rem] p-8 flex flex-col items-center transition-all duration-500 group-hover:shadow-md overflow-hidden border-white/40 shadow-sm">
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-5xl font-black text-foreground/5 italic leading-none">
                    {cat.id}
                  </span>
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="relative w-44 h-44 mb-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-contain relative z-10 drop-shadow-md" 
                  />
                </motion.div>
                
                <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors uppercase tracking-tight">
                  {cat.name}
                </h3>
                
                <div className="h-1 w-10 bg-primary/10 rounded-full group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
