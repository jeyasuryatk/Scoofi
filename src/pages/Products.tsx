import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import tenderCoconut from "@/assets/01_TENDER-COCONUT.png";
import jackFruit from "@/assets/02_JACK-FRUIT.png";
import mango from "@/assets/03_MANGO.png";
import chikoo from "@/assets/04_CHIKOO.png";
import custardApple from "@/assets/05_CUSTARD-APPLE.png";
import roseCashew from "@/assets/06_ROSE-AND-CASHEW.png";
import fig from "@/assets/07_FIG.png";
import kalaJamun from "@/assets/08_KALA-JAMUN.png";
import blackGrapes from "@/assets/09_BLACK-GRAPES.png";

const products = [
  {
    name: "Tender Coconut Icecream",
    desc: "Experience the natural goodness of fresh tender coconut in every scoop! Scoofi's Tender Coconut Ice Cream is made from pure coconut and soft coconut chunks giving you a refreshing, creamy, and tropical flavor that melts in your mouth.",
    image: tenderCoconut,
    bgColor: "bg-white",
    tagline: "Natural tropical goodness",
    accentColor: "var(--brand-red)"
  },
  {
    name: "Jack Fruit Icecream",
    desc: "Enjoy the rich taste of real jackfruit with every creamy scoop! Scoofi's Jackfruit Ice Cream is made from fresh, natural jackfruit pulp, giving a sweet, fruity, and tropical flavor that melts in your mouth.",
    image: jackFruit,
    bgColor: "bg-white",
    tagline: "Authentic tropical sweetness",
    accentColor: "var(--brand-chocolate)"
  },
  {
    name: "Mango Icecream",
    desc: "All mango ice creams may taste similar, but Scoofi's Mango Ice Cream is truly special. Made from real, fresh mangoes with no chemicals or artificial flavors, it delivers the pure and original mango taste you'll adore.",
    image: mango,
    bgColor: "bg-white",
    tagline: "The king of flavors",
    accentColor: "var(--brand-yellow)"
  },
  {
    name: "Chikoo Icecream",
    desc: "Scoofi's Chikoo Ice Cream brings you the natural sweetness of fresh chikoo in every creamy scoop. Made with real chikoo pulp and no chemicals or artificial flavors, it's a healthy and delicious treat for everyone.",
    image: chikoo,
    bgColor: "bg-white",
    tagline: "Pure chikoo goodness in every scoop — only at Scoofi",
    accentColor: "var(--brand-red)"
  },
  {
    name: "Custard apple Ice Cream",
    desc: "Scoofi's Custard Apple Ice Cream is made from ripe, natural custard apples to give you a creamy, sweet, and fruity delight in every scoop. With no chemicals or artificial flavors, it delivers the true taste of nature.",
    image: custardApple,
    bgColor: "bg-white",
    tagline: "Rich, naturally sweet, and irresistibly creamy — only at Scoofi",
    accentColor: "var(--brand-chocolate)"
  },
  {
    name: "Rose and cashew Ice cream",
    desc: "Indulge in the luxurious blend of fragrant rose and crunchy cashews with Scoofi's Rose & Cashew Ice Cream. Crafted from natural ingredients with no artificial flavors or chemicals, it delivers a creamy, aromatic, and richly textured treat.",
    image: roseCashew,
    bgColor: "bg-white",
    tagline: "Delicate, creamy, and delightfully unique — only at Scoofi",
    accentColor: "var(--brand-yellow)"
  },
  {
    name: "Fig Ice cream",
    desc: "Scoofi's most special creations, the Fig Ice Cream offers a smooth, long-lasting taste that is truly unique. Made with natural ingredients and carefully crafted for health and flavor, this ice cream is a signature treat exclusive to Scoofi.",
    image: fig,
    bgColor: "bg-white",
    tagline: "Smooth, healthy, and uniquely delightful — only at Scoofi",
    accentColor: "var(--brand-red)"
  },
  {
    name: "Kala Jamun Ice cream",
    desc: "Experience the perfect blend of sweet and tangy delight with our Kala Jamun Ice Cream! Made from real jamun fruit, it offers a refreshing burst of natural flavor in every bite. No artificial colors or chemicals.",
    image: kalaJamun,
    bgColor: "bg-white",
    tagline: "Naturally smooth, healthfully delicious, uniquely Scoofi",
    accentColor: "var(--brand-chocolate)"
  },
  {
    name: "Black Grapes Ice Cream",
    desc: "Experience the refreshing and naturally sweet flavor of black grapes in every creamy scoop! Made with real grapes and no artificial colors or chemicals, this ice cream is smooth, healthy, and bursting with fruity goodness.",
    image: blackGrapes,
    bgColor: "bg-white",
    tagline: "Purely fruity, perfectly creamy — only at Scoofi",
    accentColor: "var(--brand-yellow)"
  }
];

const Products = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background selection:bg-brand-red selection:text-white"
    >
      <Header />
      
      <section className="py-10 md:py-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-vanilla/20 -skew-y-6 origin-top-left" />
        <div className="container px-6 relative z-10 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-bold text-brand-chocolate mb-6 leading-none tracking-tighter uppercase"
          >
            The <span className="text-brand-red drop-shadow-sm">Catalog</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-brand-chocolate/40 mb-12"
          >
            <span>Home</span>
            <div className="w-8 h-0.5 bg-brand-red" />
            <span className="text-brand-red">Products</span>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:mt-16' : ''} group`}
              >
                <div className="relative mb-8">
                  <div className="absolute -inset-10 bg-brand-yellow/10 blur-3xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 3 : -3 }}
                    className="relative aspect-square overflow-hidden bg-white p-8 rounded-[2rem] border border-black/5 shadow-md"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold tracking-[0.3em] text-brand-red uppercase"></span>
                    <div className="h-0.5 flex-grow bg-brand-chocolate/5" />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-brand-chocolate leading-none uppercase tracking-tight">
                    {product.name}
                  </h2>
                  <p className="font-body text-sm md:text-lg text-brand-chocolate/60 font-medium leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="pt-3">
                    <p className="text-sm font-bold text-brand-red tracking-widest uppercase italic">
                      {product.tagline}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Products;
