import { motion } from "motion/react";

// Importing specific gallery images
import img1 from "@/assets/Gemini Oliv Sala.webp";
import img2 from "@/assets/Gemini_canchatenis.webp";
import img3 from "@/assets/Gemini_Liva_Vista_Botanica.webp";
import img4 from "@/assets/Gemini_Pilates.webp";
import img5 from "@/assets/Gemini_Piscina.webp";
import img6 from "@/assets/Gemini_senderos_ caminata.webp";

const images = [
  { src: img1, label: "Sala" },
  { src: img2, label: "Cancha de tenis" },
  { src: img3, label: "Vista botánica" },
  { src: img4, label: "Pilates" },
  { src: img5, label: "Piscina" },
  { src: img6, label: "Senderos" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="bg-[#fcfcfb]">
      <div className="py-24 container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-[#1a7d7a] mb-4">
          Esencia Visual
        </h2>
        <p className="text-gray-500 font-sans max-w-2xl mx-auto">
          Un recorrido por la atmósfera que define a OLIV.
        </p>
      </div>

      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-0.5 lg:gap-0">
        {images.map(({ src, label }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative group cursor-pointer overflow-hidden h-[220px] md:h-[300px] lg:h-[400px]"
          >
            <img
              src={src}
              alt={label}
              className="w-full h-full object-cover block transform transition-transform duration-700 group-hover:scale-105"
            />
            {/* Mobile + tablet: overlay siempre visible. Desktop: sube al hover */}
            <div className="absolute inset-x-0 bottom-0 h-28 lg:h-40 bg-gradient-to-t from-black/65 to-transparent lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-end px-3 lg:px-6 pb-3 lg:pb-6">
              <span className="text-white font-serif text-sm md:text-base lg:text-xl italic lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 lg:delay-150 drop-shadow-md leading-snug">
                {label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
