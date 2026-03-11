import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import finalZoomed from "@/assets/videos/Final-Zoomed-SM.mp4";
import reels from "@/assets/videos/reels.mp4";
import reels2 from "@/assets/videos/reels2.mp4";
import reels3 from "@/assets/videos/reels3.mp4";
import reel4 from "@/assets/videos/reel4.mp4";
import droplet from "@/assets/img-21-3.png";
import { Play } from "lucide-react";

const videoList = [
  { id: 0, src: finalZoomed, title: "Scoofi Experience" },
  { id: 1, src: reels, title: "Scoofi Special" },
  { id: 2, src: reels2, title: "Crafted Joy" },
  { id: 3, src: reels3, title: "Pure Nature" },
  { id: 4, src: reel4, title: "Healthy Scoops" },
];

const VideoSection = () => {
  const [centerIndex, setCenterIndex] = useState(0); // Start with first video
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });

  // Scatter droplet data with fixed movement paths for better performance
  const droplets = [
    { top: "10%", left: "15%", scale: 1.2, x: [0, 40, 0], y: [0, -30, 0], delay: 0 },
    { top: "20%", left: "80%", scale: 1, x: [0, -30, 0], y: [0, 40, 0], delay: 0.2 },
    { top: "40%", left: "5%", scale: 1.5, x: [0, 50, 0], y: [0, 20, 0], delay: 0.4 },
    { top: "60%", left: "90%", scale: 1.3, x: [0, -40, 0], y: [0, -50, 0], delay: 0.6 },
    { top: "80%", left: "15%", scale: 0.8, x: [0, 20, 0], y: [0, 30, 0], delay: 0.8 },
    { top: "15%", left: "45%", scale: 1.1, x: [0, -20, 0], y: [0, -40, 0], delay: 1.0 },
    { top: "75%", left: "55%", scale: 1.4, x: [0, 30, 0], y: [0, -20, 0], delay: 1.2 },
    { top: "50%", left: "85%", scale: 0.9, x: [0, -50, 0], y: [0, 10, 0], delay: 1.4 },
    { top: "30%", left: "25%", scale: 1.3, x: [0, 60, 0], y: [0, 40, 0], delay: 1.6 },
    { top: "70%", left: "75%", scale: 1.1, x: [0, -40, 0], y: [0, -30, 0], delay: 1.8 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Pause current video if section is not visible
            if (videoRefs.current[centerIndex]) {
              videoRefs.current[centerIndex]?.pause();
            }
          } else {
            // Play current video if section becomes visible
            if (videoRefs.current[centerIndex]) {
              videoRefs.current[centerIndex]?.play().catch(() => {});
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [centerIndex]);

  useEffect(() => {
    // Only play the center (selected) video, pause all others
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === centerIndex) {
          // Playmuted initially, unmute only after user interaction
          video.muted = !userInteracted;
          
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(err => {
              if (err.name !== "AbortError") {
                console.log("Autoplay blocked:", err);
              }
            });
          }
        } else {
          video.pause();
          video.muted = true;
          video.currentTime = 0;
        }
      }
    });
    setIsPlaying(true);
  }, [centerIndex, userInteracted]);

  const handleVideoEnded = () => {
    setCenterIndex((prev) => (prev + 1) % videoList.length);
  };

  const handleCardClick = (idx: number) => {
    setUserInteracted(true);
    if (idx !== centerIndex) {
      setCenterIndex(idx);
    }
  };

  const meltingVariants = {
    initial: { scaleY: 1, originY: 0 },
    animate: {
      scaleY: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const letterVariants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [0, 10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut"
      }
    })
  };

  const getCardStyle = (idx: number) => {
    let diff = idx - centerIndex;
    
    // Infinite loop correction: ensure the shortest distance is used
    const half = videoList.length / 2;
    if (diff > half) diff -= videoList.length;
    if (diff < -half) diff += videoList.length;
    
    // Curvy Semi-Round Slider Logic
    // Cards move in a circular arc (Radius based)
    const radius = 600; 
    const angleStep = 25; // Degrees between cards
    const angle = diff * angleStep;
    
    const radian = (angle * Math.PI) / 180;
    const xOffset = Math.sin(radian) * radius;
    const zOffset = (Math.cos(radian) - 1) * radius;
    
    const scale = 1 - Math.abs(diff) * 0.12;
    const zIndex = 30 - Math.abs(diff) * 10;
    const opacity = 1 - Math.abs(diff) * 0.25;

    return {
      x: xOffset,
      z: zOffset,
      scale,
      rotateY: angle * -1.2, // Stronger rotation for curvy look
      zIndex,
      opacity: opacity < 0 ? 0 : opacity,
    };
  };

  const title = "SCOOFI";

  return (
    <section ref={sectionRef} className="relative z-0 py-8 bg-background overflow-hidden">
      {/* Scattered Droplets Animation */}
      <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden">
        <AnimatePresence>
          {isInView && (
            <>
              {droplets.map((d, i) => (
                <motion.img
                  key={`droplet-${i}`}
                  src={droplet}
                  initial={{ 
                    opacity: 0, 
                    scale: 0, 
                    x: 0, 
                    y: 0 
                  }}
                  animate={{ 
                    opacity: [0, 0.5, 0], 
                    scale: [0, d.scale, 0], 
                    x: d.x, 
                    y: d.y
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ 
                    duration: 3, 
                    delay: d.delay, 
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute"
                  style={{ top: d.top, left: d.left, width: '60px' }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Edge Fades to smooth transition between sections */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-vanilla/10 to-transparent pointer-events-none" />
      
      <div className="container px-6 text-center">
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-red mb-3 block">Process</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-brand-chocolate uppercase tracking-tighter italic"
          >
            The Art of <span className="text-brand-red not-italic">Scoofing</span>
          </motion.h2>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-xs md:text-sm font-medium text-brand-chocolate/60 mb-12 uppercase tracking-[0.3em] max-w-xl mx-auto leading-relaxed"
        >
          Witness the meticulous journey from farm-fresh ingredients to the world's most exquisite ice cream.
        </motion.p>
        
        <div 
          className="relative flex justify-center items-center h-[400px] md:h-[550px] perspective-2000"
        >
          {videoList.map((video, idx) => {
            const isActive = idx === centerIndex;
            
            return (
              <motion.div
                key={video.id}
                animate={getCardStyle(idx)}
                transition={{ type: "spring", stiffness: 150, damping: 30 }}
                onClick={() => handleCardClick(idx)}
                className={`absolute w-48 md:w-64 aspect-[9/16] overflow-hidden shadow-xl cursor-pointer border transition-all duration-700 ${isActive ? 'border-primary shadow-primary/20 scale-105' : 'border-white/5 scale-95 opacity-40'}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <video 
                  ref={el => videoRefs.current[idx] = el}
                  src={video.src} 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                  onEnded={isActive ? handleVideoEnded : undefined}
                  muted={!isActive || !userInteracted}
                  playsInline 
                />
                
                {/* Visual depth for background cards */}
                {!isActive && (
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] transition-opacity" />
                )}

                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none p-6 flex flex-col justify-end text-left"
                  >
                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-primary mb-1">Episode 0{video.id}</span>
                    <h3 className="text-xl font-display font-bold text-white uppercase tracking-widest">{video.title}</h3>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
