import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import tenderCoconut from "@/assets/01_TENDER-COCONUT.png";
import jackfruit from "@/assets/02_JACK-FRUIT.png";
import mango from "@/assets/03_MANGO.png";
import chikoo from "@/assets/04_CHIKOO.png";
import custardApple from "@/assets/05_CUSTARD-APPLE.png";
import roseCashew from "@/assets/06_ROSE-AND-CASHEW.png";
import fig from "@/assets/07_FIG.png";
import kalaJamun from "@/assets/08_KALA-JAMUN.png";
import blackGrapes from "@/assets/09_BLACK-GRAPES.png";

// Cloud assets for background animation
import cloud1 from "@/assets/img-2-3.png";
import cloud2 from "@/assets/img-14-3.png";
import cloud3 from "@/assets/img-15-3.png";
import cloud4 from "@/assets/img-17-3.png";
import cloud5 from "@/assets/img-21-3.png";
import cloud6 from "@/assets/footer-bg-4.png";

const products = [
  {
    id: "01",
    name: "Tender Coconut",
    fullName: "TENDER COCONUT ICECREAM",
    description: "Experience the natural goodness of fresh tender coconut in every scoop! Scoofi's Tender Coconut Ice Cream is made from pure coconut and soft coconut chunks giving you a refreshing, creamy, and tropical flavor that melts in your mouth.",
    tagline: "Natural tropical goodness",
    image: tenderCoconut,
    bgColor: "bg-[#fdf2e9]"
  },
  {
    id: "02",
    name: "Jackfruit",
    fullName: "JACKFRUIT ICECREAM",
    description: "Enjoy the exotic sweetness of real jackfruit! Our Jackfruit Ice Cream captures the unique, tropical aroma and rich flavor of fresh jackfruit pieces, blended into a smooth, creamy base for a truly authentic experience.",
    tagline: "Exotic tropical delight",
    image: jackfruit,
    bgColor: "bg-[#fdf2e9]"
  },
  {
    id: "03",
    name: "Mango",
    fullName: "MANGO ICECREAM",
    description: "Savor the 'King of Fruits' in its creamiest form! Made with the finest seasonal mangoes, Scoofi's Mango Ice Cream is packed with natural fruit pulp, delivering a burst of sunshine and sweetness in every bite.",
    tagline: "Pure mango magic",
    image: mango,
    bgColor: "bg-[#fdf2e9]"
  },
  {
    id: "04",
    name: "Chikoo",
    fullName: "CHIKOO ICECREAM",
    description: "Indulge in the earthy, caramel-like sweetness of fresh chikoo. Our Chikoo Ice Cream is crafted with real fruit chunks, offering a nostalgic and wholesome taste that's both creamy and naturally delicious.",
    tagline: "Earthy caramel sweetness",
    image: chikoo,
    bgColor: "bg-[#fdf2e9]"
  },
  {
    id: "05",
    name: "Custard Apple",
    fullName: "CUSTARD APPLE ICECREAM",
    description: "A seasonal favorite brought to life! Scoofi's Custard Apple (Sitaphal) Ice Cream is rich, creamy, and filled with the authentic grainy texture and delicate sweetness of fresh custard apple pulp.",
    tagline: "Creamy seasonal bliss",
    image: custardApple,
    bgColor: "bg-[#fdf2e9]"
  },
  {
    id: "06",
    name: "Rose & Cashew",
    fullName: "ROSE AND CASHEW ICECREAM",
    description: "A royal treat for your taste buds! This elegant blend features the floral aroma of real rose petals paired with the rich, buttery crunch of roasted cashews, creating a sophisticated and indulgent dessert.",
    tagline: "Royal floral indulgence",
    image: roseCashew,
    bgColor: "bg-[#fdf2e9]"
  },
  {
    id: "07",
    name: "Fig",
    fullName: "FIG ICECREAM",
    description: "Naturally sweet and delightfully chewy! Our Fig Ice Cream is made with real dried figs, offering a rich, earthy flavor and a unique texture that's both satisfying and wholesome.",
    tagline: "Naturally sweet fig delight",
    image: fig,
    bgColor: "bg-[#fdf2e9]"
  },
  {
    id: "08",
    name: "Kala Jamun",
    fullName: "KALA JAMUN ICECREAM",
    description: "The tangy-sweet essence of Indian summer! Made with real Java Plum (Kala Jamun) pulp, this refreshing ice cream is a perfect balance of sweet and tart, with a beautiful natural purple hue.",
    tagline: "Tangy-sweet summer refresh",
    image: kalaJamun,
    bgColor: "bg-[#fdf2e9]"
  },
  {
    id: "09",
    name: "Black Grapes",
    fullName: "BLACK GRAPES ICECREAM",
    description: "Bursting with the juicy flavor of fresh black grapes! This vibrant and refreshing ice cream is packed with real fruit goodness, delivering a clean, sweet, and slightly tangy taste.",
    tagline: "Juicy black grape burst",
    image: blackGrapes,
    bgColor: "bg-[#fdf2e9]"
  }
];

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section id="shop" className="py-8 bg-background overflow-hidden relative">
      {/* Edge Fades to smooth transition between sections */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

      {/* Floating Clouds on the sides */}
      <motion.img
        src={cloud1}
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-5%] top-[10%] w-48 md:w-64 opacity-20 pointer-events-none"
      />
      <motion.img
        src={cloud2}
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8%] top-[15%] w-40 md:w-56 opacity-15 pointer-events-none"
      />
      <motion.img
        src={cloud3}
        animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-[40%] w-56 md:w-80 opacity-20 pointer-events-none"
      />
      <motion.img
        src={cloud4}
        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-5%] top-[50%] w-32 md:w-48 opacity-15 pointer-events-none"
      />
      <motion.img
        src={cloud5}
        animate={{ y: [0, -40, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-5%] top-[70%] w-40 md:w-60 opacity-15 pointer-events-none"
      />
      <motion.img
        src={cloud6}
        animate={{ y: [0, 20, 0], x: [0, 25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-10%] top-[80%] w-64 md:w-96 opacity-20 pointer-events-none"
      />

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-yellow/10 to-transparent pointer-events-none" />
      
      {/* Dynamic Decorative Elements - matched with new brand colors */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -right-20 w-[20rem] h-[20rem] bg-brand-red/10 rounded-full blur-[80px]" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -left-20 w-[15rem] h-[15rem] bg-brand-lime/10 rounded-full blur-[60px]" 
      />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-brand-chocolate tracking-tight leading-none">
            Our <span className="text-brand-red drop-shadow-sm">Menu</span>
          </h2>
          <p className="text-brand-chocolate/70 max-w-xl mx-auto text-base font-bold leading-relaxed">
            Discover our full range of exotic and classic flavors, crafted for the ultimate dessert experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[2rem] bg-white overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500 border border-black/5 group-hover:border-primary/20 p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-full h-full relative z-10 flex items-center justify-center">
                   <motion.img
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-md transition-transform duration-700"
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[1px] z-20">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-primary text-white font-display text-xs md:text-sm font-black px-8 py-3.5 rounded-full shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-105 active:scale-95 uppercase tracking-widest"
                  >
                    Quick view
                  </button>
                </div>

                <div className="absolute top-6 left-6 z-20">
                    <span className="glass px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary border-primary/10">
                        {product.id}
                    </span>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors duration-300 uppercase tracking-tight">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-xl border-none rounded-[2rem] p-0 overflow-hidden shadow-lg">
            {selectedProduct && (
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 p-10 flex items-center justify-center bg-vanilla/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-pattern-dots opacity-5" />
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0, y: 15 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-auto object-contain max-h-[300px] drop-shadow-md relative z-10"
                  />
                </div>
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white relative">
                  <DialogHeader>
                    <div className="mb-4">
                        <span className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase bg-primary/5 px-3 py-1 rounded-full">
                            Premium Selection
                        </span>
                    </div>
                    <DialogTitle className="text-2xl font-black text-foreground leading-[1.1] mb-4 text-left uppercase tracking-tight">
                      {selectedProduct.fullName}
                    </DialogTitle>
                  </DialogHeader>
                  <p className="font-body text-base text-foreground/60 leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-0.5 w-10 bg-primary rounded-full" />
                    <p className="font-display text-base font-bold text-secondary italic">
                        {selectedProduct.tagline}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FeaturedProducts;
