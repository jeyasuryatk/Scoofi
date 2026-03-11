import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { Store, UtensilsCrossed, Users, PartyPopper, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-gelato.jpg";
import giftingImg from "@/assets/gifting.jpg";
import cloudCenter from "@/assets/img-15-3.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-brand-red selection:text-white relative">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 md:pt-6 md:pb-6 relative overflow-hidden bg-gradient-to-b from-brand-vanilla/40 to-white">
        {/* Edge Fades */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
        
        {/* Large Center Cloud Animation */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[450px] md:w-[600px] opacity-1 pointer-events-none z-0"
        >
          <img src={cloudCenter} alt="" className="w-full h-full object-contain filter blur-[1px]" />
        </motion.div>
        
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 -skew-x-12 translate-x-1/4" />
        <div className="container px-6 relative z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-none text-brand-chocolate tracking-tighter">
              Scoofi – <br/>Healthy <br/><span className="text-brand-red">Scoops</span>
            </h1>
            <p className="max-w-3xl font-body text-sm md:text-lg text-brand-chocolate/60 font-medium leading-relaxed mb-8">
              Scoofi is a leading ice cream brand known for its pure and natural ingredients. Our ice creams are made without any chemicals, ensuring freshness, health, and great taste in every scoop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scoop into Nature Section */}
      <section className="py-8 relative bg-white">
        {/* Edge Fades */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
        
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-brand-yellow/20 rounded-[2rem] blur-3xl" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-md aspect-square border-4 border-white">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src={heroImg} 
                  alt="Scoop into Nature" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-brand-chocolate tracking-tight uppercase leading-tight">
                Scoop <br/><span className="text-brand-red">into</span> <br/>Nature
              </h2>
              <div className="font-body text-sm md:text-lg text-brand-chocolate/70 font-medium leading-relaxed space-y-4">
                <p>
                  At <span className="text-brand-red font-bold underline decoration-brand-yellow decoration-2 underline-offset-4">Scoofi</span>, we believe ice cream should taste just the way nature intended—pure, fresh, and irresistibly creamy.
                </p>
                <p>
                  We don’t believe in artificial flavors, synthetic colors, or preservatives. Each flavor is carefully churned in small batches to capture nature’s true essence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flavors & Philosophy Section */}
      <section className="py-10 bg-brand-vanilla/10 relative">
        {/* Edge Fades */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
        
        <div className="absolute inset-0 bg-pattern-dots opacity-20" />
        <div className="container px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-[2rem] border-l-[8px] border-brand-red shadow-md"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-chocolate mb-5">
                Flavors Inspired by Nature
              </h2>
              <p className="font-body text-sm md:text-lg text-brand-chocolate/60 leading-relaxed font-medium">
                Whether it’s the freshness of Tender coconut, Jack fruit, Alphonso mango, chikoo, custard apple, fig, jamun and grapes etc, the comfort of these fruits is there in every flavor at Scoofi which is crafted to capture the essence of nature.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-[2rem] border-l-[8px] border-brand-chocolate shadow-md"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-chocolate mb-5">
                Our Philosophy
              </h2>
              <p className="font-body text-sm md:text-lg text-brand-chocolate/60 leading-relaxed font-medium">
                We keep it simple: natural tastes better. That’s why our ice creams are made the old-fashioned way—with care, patience, and 100% natural ingredients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Age Banner */}
       
        <div className="bg-primary py-4 md:py-6 overflow-hidden relative shadow-md">
          <div className="absolute inset-0 bg-secondary opacity-15" />
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <span className="text-3xl md:text-3xl font-bold text-white uppercase tracking-tight mx-8">
            Happiness for Every Age • 
          </span>
          <span className="text-3xl md:text-3xl font-bold text-white uppercase tracking-tight mx-8">
            Happiness for Every Age • 
          </span>
          <span className="text-3xl md:text-3xl font-bold text-white uppercase tracking-tight mx-8">
            Happiness for Every Age • 
          </span>
        </motion.div>
      </div>

      {/* Freshness Section */}
      <section className="py-16 overflow-hidden bg-white relative">
        {/* Edge Fades */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
        
        <div className="container px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-yellow/30 rounded-full blur-3xl animate-pulse" />
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={giftingImg} 
                alt="Scoofi Freshness" 
                className="relative z-10 w-full h-[300px] md:h-[700px] object-cover rounded-[2rem] shadow-md border-4 border-white"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 space-y-8"
            >
              <h2 className="text-3xl md:text-6xl font-bold text-brand-chocolate leading-[1] uppercase tracking-tight">
                Freshness <br/><span className="text-brand-red">You Feel</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Enjoy the taste of nature in every scoop. At Scoofi, we serve ice creams made with purity.",
                  "Scoofi brings you health and happiness together. Fresh, natural, and delicious ice creams.",
                  "Pure ingredients. Real flavors. Scoofi makes every scoop a joyful, healthy treat.",
                  "Scoofi – where freshness meets flavor. Experience creamy, chemical-free ice creams.",
                ].map((text, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start group"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center shrink-0 mt-1 shadow-md group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-body text-sm md:text-lg text-brand-chocolate/70 font-bold leading-tight tracking-tight">
                      {text}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-10 border-t border-black/5 bg-brand-lime/10 relative">
        {/* Edge Fades */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
        
        <div className="absolute inset-0 bg-pattern-dots opacity-20" />
        <div className="container px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-brand-chocolate mb-6 tracking-tight">
              Occasions
            </h2>
            <p className="max-w-2xl mx-auto font-body text-sm text-brand-chocolate/40 font-bold uppercase tracking-widest leading-relaxed">
              Scoofi infuses a dose of classic sweetness into every event, from private parties to special gatherings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Franchise", icon: Store, color: "bg-brand-red" },
              { name: "Catering", icon: UtensilsCrossed, color: "bg-brand-chocolate" },
              { name: "Private Parties", icon: Users, color: "bg-brand-yellow" },
              { name: "Special Events", icon: PartyPopper, color: "bg-brand-lime" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2rem] flex flex-col items-center text-center shadow-md border border-black/5 transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:rotate-6 transition-transform`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-chocolate uppercase tracking-tight">
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;