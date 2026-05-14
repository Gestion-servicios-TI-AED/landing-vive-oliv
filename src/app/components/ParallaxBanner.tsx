import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import bannerImage from "@/assets/0d3100e150f4dbd82c86b890b8f598b6d9d629ef.webp";

export const ParallaxBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[60vh] overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y }}
        className="absolute w-full h-[120%] -top-[10%] left-0 z-0"
      >
        <div className="absolute inset-0 bg-black/20 z-10" />
        <ImageWithFallback
          src={bannerImage}
          alt="Familia caminando en el jardín"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Text Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-serif text-white drop-shadow-lg"
        >
          Un refugio con visión para los tuyos.
        </motion.h2>
      </div>
    </section>
  );
};
