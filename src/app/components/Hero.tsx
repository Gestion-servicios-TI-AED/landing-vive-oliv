import { motion } from "motion/react";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/f210e3b6d6b278eb10dadb525684c3eb7aac40d8.webp";

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Familia caminando al atardecer en OLIV"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text contrast - increased opacity for better readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto md:mx-0"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6 drop-shadow-lg">
            OLIV: El lugar donde tu familia <br className="hidden md:block" />
            <span className="italic font-light">encuentra el Buen Vivir.</span>
          </h1>
          <p className="text-white/95 text-lg md:text-xl font-sans font-light mb-10 max-w-2xl mx-auto md:mx-0 tracking-wide drop-shadow-md">
            Mucho más que un proyecto; es la decisión consciente de habitar un entorno donde la vida respira y la naturaleza guía el crecimiento de tu familia.
          </p>

          <Link
            to="lead-form"
            smooth={true}
            duration={800}
            className="inline-block px-8 py-4 bg-[#00857c] text-white font-sans font-medium tracking-wide hover:bg-[#006e67] transition-all transform hover:scale-105 rounded-full cursor-pointer shadow-lg hover:shadow-xl"
          >
            Quiero mi Acceso al Plan Fundadores
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest mb-2 opacity-90 drop-shadow-md">Descubre más</span>
        <ChevronDown className="animate-bounce w-6 h-6 opacity-90 drop-shadow-md" />
      </motion.div>
    </section>
  );
};
