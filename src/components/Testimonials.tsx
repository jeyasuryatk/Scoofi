import { motion } from "framer-motion";
import { Star, Instagram } from "lucide-react";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import cloud1 from "@/assets/img-14-3.png";
import cloud2 from "@/assets/img-15-3.png";
import cloud3 from "@/assets/img-22-3.png";

const testimonials = [
  {
    name: "Renuka R.",
    text: "Scoofi keeps it real! Every scoop feels homemade, with no added colors or preservatives. The taste is so unique and different from other ice cream brands — truly natural and fresh!",
    stars: 5
  },
  {
    name: "Rahul M.",
    text: "I love Scoofi because it's healthy and tasty at the same time. My kids enjoy it without me worrying about chemicals.",
    stars: 5
  },
  {
    name: "Meena S.",
    text: "Rose and Cashew Ice Cream is my favorite! It's so creamy and full of natural flavor — totally worth it.",
    stars: 5
  },
  {
    name: "Anand K.",
    text: "The best ice cream I've had in years. The texture is perfect and the flavors are incredibly authentic. Highly recommend!",
    stars: 5
  },
  {
    name: "Priya V.",
    text: "Natural ingredients make such a difference. You can really taste the fresh fruit in every bite. My new favorite spot!",
    stars: 5
  },
];

const galleryItems = [
  { image: img1, color: "bg-yellow-400" },
  { image: img2, color: "bg-[#d8c3a5]" },
  { image: img3, color: "bg-rose-500" },
  { image: img4, color: "bg-purple-600" },
];

const Testimonials = () => {
  return (
    <section className="py-8 bg-background overflow-hidden relative">
      {/* Background Floating Clouds */}
      <motion.img
        src={cloud1}
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-5%] w-48 md:w-80 opacity-[0.08] pointer-events-none z-0 blur-[1px]"
      />
      <motion.img
        src={cloud2}
        animate={{ 
          x: [0, -40, 0],
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[-10%] w-64 md:w-[500px] opacity-[0.08] pointer-events-none z-0 blur-[2px]"
      />
      <motion.img
        src={cloud3}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 opacity-10 pointer-events-none z-0"
      />

      {/* Edge Fades to smooth transition between sections */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-red/5 to-transparent pointer-events-none" />
      
      {/* Pattern with Fade Mask */}
      <div className="absolute inset-0 bg-pattern-wavy opacity-15 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
      
      <div className="container px-4 relative z-10">
        {/* Customer Feedback Marquee */}
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold text-brand-chocolate text-center mb-8 tracking-tight"
          >
            Love from <span className="text-brand-red drop-shadow-sm">Scoofiers</span>
          </motion.h2>
          
          <div className="relative flex overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: [0, "-50%"] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 py-10 px-8"
            >
              {[...testimonials, ...testimonials].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="min-w-[280px] md:min-w-[320px] p-6 rounded-[1.5rem] bg-white shadow-sm flex flex-col items-center text-center relative border border-black/5 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-body text-[13px] text-foreground/70 italic leading-relaxed mb-4 whitespace-normal font-medium px-1">
                    "{item.text}"
                  </p>
                  <p className="font-display text-sm font-bold text-foreground uppercase tracking-tight">
                    {item.name}
                  </p>
                  <span className="absolute top-3 right-5 text-4xl text-primary/5 font-bold leading-none">”</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Creamy Scoofi's Clicks */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-8 tracking-tight"
          >
            Scoofi's <span className="text-secondary">Clicks</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-8">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`aspect-[3/4] rounded-[1.5rem] bg-white p-2.5 shadow-sm overflow-hidden group relative border border-black/5`}
              >
                <div className="w-full h-full rounded-[1.2rem] overflow-hidden flex items-center justify-center relative">
                   <img 
                    src={item.image} 
                    alt="Scoofi Click" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Star className="text-white w-8 h-8 fill-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/scoofiicecream?igsh=M25iaDhhdTZnbG9r" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-base font-bold text-foreground hover:text-primary transition-colors group uppercase tracking-tight bg-white px-6 py-2.5 rounded-full shadow-sm border border-black/5"
            >
              @Scoofiicecream
              <Instagram className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
