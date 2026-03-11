import { motion } from "motion/react";
import { Trees, ShieldCheck, MapPin, Users } from "lucide-react";

const features = [
  {
    icon: <Users strokeWidth={1.5} className="w-8 h-8 text-[#feb301]" />,
    title: "Espacio para crecer",
    desc: "Aquí los niños tienen aire, las mascotas tienen caminos y tú tienes calma.",
  },
  {
    icon: <Trees strokeWidth={1.5} className="w-8 h-8 text-[#feb301]" />,
    title: "Naturaleza Real",
    desc: "La vegetación no es decoración, es parte de tu hogar y de tu día a día.",
  },
  {
    icon: <ShieldCheck strokeWidth={1.5} className="w-8 h-8 text-[#feb301]" />,
    title: "Inversión Sólida",
    desc: "Un activo con visión a largo plazo que se disfruta hoy y se valoriza mañana.",
  },
  {
    icon: <MapPin strokeWidth={1.5} className="w-8 h-8 text-[#feb301]" />,
    title: "Ubicación estratégica",
    desc: "Cerca de todo, lejos del ruido: lo mejor de Cartagena a pocos minutos.",
  },
];

export const WhyOliv = () => {
  return (
    <section className="py-24 bg-[#f5f5f0]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a7d7a] mb-6">
            ¿Por qué OLIV?
          </h2>
          <div className="w-16 h-px bg-[#feb301] mx-auto mb-6"></div>
          <p className="text-[#1a7d7a]/80 font-sans text-lg max-w-2xl mx-auto italic">
            OLIV no Improvisa, OLIV decide. <br className="hidden md:block" />
            Entendemos que buscas un hogar que sea coherente con tus valores y seguro para tu patrimonio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="mb-8 relative group">
                <div className="w-16 h-16 rounded-full bg-[#1a7d7a]/5 flex items-center justify-center transition-all duration-500 group-hover:bg-[#feb301]/10 relative z-10">
                  {feature.icon}
                </div>
                {/* Sutil halo de luz al hover */}
                <div className="absolute inset-0 bg-[#feb301]/5 rounded-full scale-125 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700" />
              </div>
              <h3 className="text-xl font-serif text-[#1a7d7a] mb-4">
                {feature.title}
              </h3>
              <p className="font-sans font-light text-[#1a7d7a]/70 text-sm max-w-[240px] mx-auto leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
