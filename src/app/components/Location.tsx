import { motion } from "motion/react";
import mapDesktop from "@/assets/mapa-desktop-oliv.webp";
import mapMobile from "@/assets/mapa-mobile-oliv.webp";


export const Location = () => {
  return (
    <section id="location" className="bg-white">
      {/* Header */}
      <div className="py-16 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#2e3f22] mb-4">
            Ubicado en la Zona Norte de Cartagena
          </h2>
          <div className="w-16 h-px bg-[#feb301] mx-auto mb-5" />
          <p className="text-[#2e3f22]/70 font-sans italic text-lg">
            Cartagena lo tiene todo. Oliv te da un espacio para disfrutarlo mejor.
          </p>
        </motion.div>
      </div>

      {/* Desktop: map contained with padding and rounded corners */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="hidden md:block container mx-auto px-6 pb-16"
      >
        <img
          src={mapDesktop}
          alt="Mapa de ubicación OLIV Cartagena"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Mobile: mapa */}
      <div className="md:hidden">
        <div className="mx-4 mb-6 overflow-hidden rounded-2xl shadow-lg">
          <img
            src={mapMobile}
            alt="Mapa de ubicación OLIV Cartagena"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
