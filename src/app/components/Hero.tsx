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
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
            className="mb-10 max-w-2xl mx-auto md:mx-0 space-y-3"
          >
            {[
              "El proyecto con más verde de la Zona Norte",
              "7 hectáreas · 9 torres · Amenidades",
              "Baja densidad por diseño, no por accidente",
              "Con un corredor biológico natural que llega al mar",
            ].map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, x: -14 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
                }}
                className="flex items-center gap-3 text-white/90 text-base md:text-lg font-sans font-light tracking-wide drop-shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-[#2dc4bb] shrink-0 shadow-[0_0_6px_2px_rgba(45,196,187,0.45)]" />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
          >
            <Link
              to="lead-form"
              smooth={true}
              duration={800}
              className="inline-block px-8 py-4 bg-[#2e3f22] text-white font-sans font-medium tracking-wide hover:bg-[#2e3f22] transition-all transform hover:scale-105 rounded-full cursor-pointer shadow-lg hover:shadow-xl"
            >
              Registrarme al Plan Fundadores
            </Link>
          </motion.div>
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
