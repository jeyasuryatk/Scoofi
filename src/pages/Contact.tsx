import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";
import contactImg from "@/assets/contactus.webp";

const Contact = () => {
  useEffect(() => {
    emailjs.init("fPU9uFTwpVWfsMLug");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
    

      // User Confirmation Email
      const userParams = {
        to_name: formData.name,
        from_name: "Aparajitha Agro Food Products",
        from_email: "info@aparajithagrafoodproducts.com",
        to_email: formData.email,
        email: formData.email,
        user_email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
        reply_to: "info@aparajithagrafoodproducts.com"
      };

      await emailjs.send(
        "service_7zb36v9",
        "template_z39is6h",
        userParams
      );
      
      setSubmitted(true);
      setFormData({ name: "", email: "", mobile: "", message: "" });
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background selection:bg-brand-red selection:text-white"
    >
      <Header />
      
      {/* Header Section */}
      <section className="bg-brand-vanilla/20 pt-16 md:pt-2  pb-12 md:pb-8 relative overflow-hidden">
        {/* Edge Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
        
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-red/10 via-transparent to-brand-yellow/10" />
        <div className="container px-6 relative z-10 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="text-4xl md:text-6xl font-bold text-brand-chocolate mb-6 uppercase tracking-tighter leading-none"
          >
            Contact <span className="text-brand-red">Us</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-brand-chocolate/40"
          >
            <span>Home</span>
            <div className="w-8 h-0.5 bg-brand-red" />
            <span className="text-brand-red">Contact</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-16 bg-white relative overflow-hidden">
        {/* Edge Fade */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

        <div className="absolute top-0 left-0 w-full h-full bg-pattern-dots opacity-5" />
        <div className="container px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Form & Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-brand-chocolate mb-8 uppercase tracking-tighter leading-none">
                Visit <br/><span className="text-brand-red">Our</span> <br/>Space
              </h2>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-base font-bold uppercase tracking-tight text-brand-chocolate/60"
              >
                <div className="space-y-3">
                    <p className="text-brand-red">The Address</p>
                    <p className="text-brand-chocolate leading-relaxed">APARAJITH Agro Food Products<br />57/77, Bazullah Rd, T. Nagar,<br />Chennai, TN 600017</p>
                </div>
                <div className="space-y-3">
                    <p className="text-brand-chocolate">Direct Lines</p>
                    <p className="text-brand-chocolate leading-relaxed">Call: +91 93632 00003<br />+91 98407 40991</p>
                    <p className="text-brand-chocolate lowercase tracking-normal font-medium text-sm">info@aparajithagrafoodproducts.com</p>
                </div>
              </motion.div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-red/5 border border-brand-red/20 p-8 rounded-[2rem] flex flex-col items-center text-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white shadow-lg">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-chocolate uppercase tracking-tight mb-1">
                      Message Sent
                    </h3>
                    <p className="text-sm text-brand-chocolate/60 font-medium">
                      We'll be in touch with you very shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <Input 
                        required
                        placeholder="NAME" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-brand-vanilla/30 border-none rounded-xl h-14 px-6 text-brand-chocolate placeholder:text-brand-chocolate/20 font-bold tracking-widest focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:bg-white transition-all uppercase text-sm"
                        />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <Input 
                        required
                        placeholder="E-MAIL" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-brand-vanilla/30 border-none rounded-xl h-14 px-6 text-brand-chocolate placeholder:text-brand-chocolate/20 font-bold tracking-widest focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:bg-white transition-all uppercase text-sm"
                        />
                    </motion.div>
                  </div>
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <Input 
                      required
                      placeholder="MOBILE" 
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="bg-brand-vanilla/30 border-none rounded-xl h-14 px-6 text-brand-chocolate placeholder:text-brand-chocolate/20 font-bold tracking-widest focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:bg-white transition-all uppercase text-sm"
                    />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <Textarea 
                      required
                      placeholder="MESSAGE" 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-brand-vanilla/30 border-none rounded-xl min-h-[150px] p-6 text-brand-chocolate placeholder:text-brand-chocolate/20 font-bold tracking-widest focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:bg-white transition-all uppercase resize-none text-sm"
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-brand-red hover:bg-brand-chocolate text-white font-bold uppercase tracking-[0.2em] px-10 py-4 rounded-full transition-all w-full shadow-md text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting && <Loader2 className="animate-spin" size={18} />}
                      {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    </button>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* Right Column: Poster Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-auto md:h-[700px] overflow-hidden group shadow-md rounded-[2rem] border-4 border-white"
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 2 }}
                src={contactImg} 
                alt="Scoofi Contact Us" 
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-brand-chocolate/10 group-hover:opacity-0 transition-opacity duration-1000" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Contact;