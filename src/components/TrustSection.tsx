import { motion } from "framer-motion";
import { useState } from "react";
import { Truck, Headphones, ShieldCheck, Mail, Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import kalaJamun from "@/assets/kala-jamun.png";
import mango from "@/assets/mango.jpg";
import blackGrapes from "@/assets/black-grapes.png";

const trustItems = [
  { icon: Truck, title: "SHIPPING", desc: "Pan India shipping and returns" },
  { icon: Headphones, title: "CUSTOMER SERVICE", desc: "We are available all days from 9:00 a.m to 10:00 p.m to answer your questions." },
  { icon: ShieldCheck, title: "SECURE PAYMENT", desc: "Your payment information is processed securely." },
  { icon: Mail, title: "CONTACT US", desc: "Need to contact us? Just send us an e-mail at hello@scoofi.co" },
];

const faqs = [
  {
    question: "ARE ICE CREAMS SAFE FOR KIDS AND ELDERS?",
    answer: "Yes, Scoofi ice creams are made from natural ingredients and are safe for everyone, including kids and elders."
  },
  {
    question: "WHAT MAKES THESE ICE CREAMS DIFFERENT FROM OTHERS?",
    answer: "Scoofi focuses on fresh, natural, and healthy ingredients. Every ice cream is made without chemicals ensuring a creamy, delicious, and wholesome treat."
  },
  {
    question: "WHERE ARE THE ICE CREAMS MADE?",
    answer: "Our Scoofi outlets feature a modern, state-of-the-art design and are maintained with impeccable hygiene standards."
  },
  {
    question: "DO THE ICE CREAMS USE REAL FRUITS AND NUTS?",
    answer: "Yes, we use real fruits and premium nuts to ensure the most authentic and natural taste in every scoop."
  },
  {
    question: "ARE THE ICE CREAMS LOW IN SUGAR OR FAT?",
    answer: "We offer various options including lower sugar and healthy fat profiles without compromising on the creamy texture you love."
  }
];

const mediaLogos = ["VOGUE INDIA", "The Telegraph", "GQ", "Traveller", "The Print"];

const TrustSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const circleImages = [
    img1,
    img2,
    img3,
    img4,
    kalaJamun,
    mango,
    blackGrapes,
    img4
  ];

  return (
    <section className="bg-background overflow-hidden relative">
      {/* Edge Fades to smooth transition between sections */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-lime/10 to-transparent pointer-events-none" />
      
      {/* Pattern with Fade Mask */}
      <div className="absolute inset-0 bg-pattern-dots opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
      
      {/* FAQ Section (Image 5) */}
      <div className="py-6 relative z-10">
        <div className="container px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 border-b border-brand-red/10 pb-4 gap-6">
            <h2 className="font-display text-2xl md:text-4xl font-black text-brand-chocolate tracking-tight leading-none">
              Scoop It <span className="text-brand-red drop-shadow-lg">Fresh</span>
            </h2>
            <p className="max-w-md md:text-right text-xs md:text-sm font-bold text-brand-chocolate/70 leading-relaxed">
              Our Scoofi outlets feature a modern, state-of-the-art design and are maintained with impeccable hygiene standards, offering a pleasant, refreshing, and royal experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center py-6">
          <motion.div 
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1, type: "spring" }}
  className="relative aspect-square w-full max-w-[320px] md:max-w-[450px] mx-auto lg:mx-0 bg-white rounded-[2rem] p-6 md:p-10 shadow-lg border border-black/5"
>
  <div 
    className="relative z-10 w-full h-full flex items-center justify-center scale-[0.85] md:scale-100"
  >

    {/* ROTATING CIRCLE */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute inset-0 origin-center"
    >
      {circleImages.map((img, i) => (
          <motion.div
            key={i}
             className="absolute w-12.5 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-md border border-black/5 flex items-center justify-center overflow-hidden p-1 transition-transform duration-300"
            style={{
             top: `${50 + 38 * Math.sin(i * Math.PI / 4)}%`,
            left: `${50 + 38 * Math.cos(i * Math.PI / 4)}%`,
              transform: "translate(-50%, -50%)"
            }}
          >
          <img
            src={img}
            className="w-full h-full object-contain"
            alt=""
          />
        </motion.div>
      ))}
    </motion.div>

    {/* CENTER TEXT */}
    <motion.div 
      className="relative z-20 font-display text-2xl md:text-5xl font-black tracking-tighter drop-shadow-sm text-primary"
    >
      FAQ
    </motion.div>

  </div>
</motion.div>

<Accordion type="single" collapsible className="w-full space-y-2">
  {faqs.map((faq, index) => (
    <AccordionItem key={index} value={`item-${index}`} className="border-b border-brand-red/10 py-1">
      <AccordionTrigger className="text-base md:text-lg font-black text-brand-chocolate hover:text-brand-red text-left decoration-transparent transition-colors uppercase tracking-tight leading-none">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-xs md:text-sm text-brand-chocolate/70 leading-relaxed font-bold pt-1">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
            </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-8 border-t border-secondary/20 pt-6 gap-6">
             <h2 className="font-display text-2xl md:text-4xl font-black text-foreground tracking-tight leading-none">
              Taste the <span className="text-secondary">Chill</span>
            </h2>
             <p className="max-w-md md:text-right text-xs md:text-sm font-bold text-foreground/60 leading-relaxed">
              Scoofi focuses on fresh, natural, and healthy ingredients. Every ice cream is made without chemicals ensuring a creamy, delicious, and wholesome treat.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TrustSection;
