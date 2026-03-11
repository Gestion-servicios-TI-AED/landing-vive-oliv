import { motion } from "motion/react";
import { Plus } from "lucide-react";

// Importing specific gallery images
import img1 from "@/assets/24f0cbc70e74c25c9499d5af51ef48642fc6e71d.png";
import img2 from "@/assets/2f9ae18fc947bec354c5b8689cbd4bd6ed95cdc5.png";
import img3 from "@/assets/4c62c95b6a44466c93ff928caebde05091f3cbb1.png";
import img4 from "@/assets/6c54e51edc3a6295aed8d9f46d17d46b011bdbbf.png";
import img5 from "@/assets/46d1721f9b01f42b713e78528dea0c805fde04fd.png";
import img6 from "@/assets/685202cb36a929d95b2f5d55dbf3dd08d5674cf1.png";

const images = [img1, img2, img3, img4, img5, img6];

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

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative group cursor-pointer overflow-hidden h-[400px]"
          >
            <img
              src={image}
              alt={`Detalle OLIV ${index + 1}`}
              className="w-full h-full object-cover block transform transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-[#1a7d7a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                <Plus size={32} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
