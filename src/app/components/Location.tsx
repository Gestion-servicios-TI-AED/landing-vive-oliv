import { motion } from "motion/react";
import mapImage from "@/assets/mapa-oliv-web.jpg";

const distances = [
  { icon: "⛽", minutes: 2,  label: "Estación de gasolina" },
  { icon: "🏖️", minutes: 6,  label: "Playas de Manzanillo" },
  { icon: "🎓", minutes: 5,  label: "Universidades y colegios" },
  { icon: "🏥", minutes: 7,  label: "Hospital Serena del Mar" },
  { icon: "✈️", minutes: 9,  label: "Aeropuerto" },
  { icon: "🛍️", minutes: 5,  label: "Centros comerciales" },
  { icon: "🍽️", minutes: 5,  label: "Restaurantes" },
  { icon: "🛒", minutes: 7,  label: "Supermercados" },
  { icon: "💊", minutes: 5,  label: "Droguerías" },
  { icon: "🐾", minutes: 5,  label: "Tienda de mascotas" },
  { icon: "🏛️", minutes: 12, label: "Centro Histórico" },
];

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
          <h2 className="text-3xl md:text-5xl font-serif text-[#1a7d7a] mb-4">
            Ubicado en la Zona Norte de Cartagena
          </h2>
          <div className="w-16 h-px bg-[#feb301] mx-auto mb-5" />
          <p className="text-[#1a7d7a]/70 font-sans italic text-lg">
            Cartagena lo tiene todo. Oliv te da un espacio para disfrutarlo mejor.
          </p>
        </motion.div>
      </div>

      {/* Desktop: full map image (includes legend overlay) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="hidden md:block w-full"
      >
        <img
          src={mapImage}
          alt="Mapa de ubicación OLIV Cartagena"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Mobile: map cropped + distances card */}
      <div className="md:hidden">
        {/* Map image panned to show the right side (poi markers), hiding the left legend */}
        <div className="w-full overflow-hidden" style={{ height: "340px" }}>
          <img
            src={mapImage}
            alt="Mapa de ubicación OLIV Cartagena"
            className="h-full w-auto max-w-none object-cover object-right"
            style={{ marginLeft: "auto" }}
          />
        </div>

        {/* Distances card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-4 -mt-6 relative z-10 bg-white rounded-2xl shadow-xl border border-[#1a7d7a]/10 p-6 mb-10"
        >
          <p className="font-serif text-[#1a7d7a] text-xl italic mb-1">
            El epicentro
          </p>
          <p className="font-serif text-[#1a7d7a] text-xl mb-1">
            del <span className="font-bold not-italic">nuevo epicentro.</span>
          </p>
          <p className="font-sans text-[#feb301] text-sm font-medium mb-5">
            Distancias en minutos.
          </p>

          <ul className="space-y-3">
            {distances.map(({ icon, minutes, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="text-lg w-6 text-center flex-shrink-0">{icon}</span>
                <span className="font-sans font-bold text-[#1a7d7a] text-sm w-14 flex-shrink-0">
                  {minutes} Min
                </span>
                <span className="font-sans text-[#4a4a4a] text-sm">{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
