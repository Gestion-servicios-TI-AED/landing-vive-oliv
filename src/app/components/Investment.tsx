import { motion } from "motion/react";
import { Check } from "lucide-react";

export const Investment = () => {
  const steps = [
    {
      title: "Paso 1: Únete a la Lista 0",
      description: "Regístrate hoy para ser parte de nuestro selecto grupo de fundadores."
    },
    {
      title: "Paso 2: Elige con Prioridad",
      description: "Selecciona la ubicación y vista perfecta para tu familia antes del lanzamiento oficial."
    },
    {
      title: "Paso 3: Asegura el Buen Vivir",
      description: "Garantiza tu inversión en un entorno que respira al ritmo de la naturaleza."
    }
  ];

  return (
    <section id="investment" className="py-32 bg-[#2e3f22] text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#feb301] opacity-5 transform skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-16 leading-tight">
            Tu camino hacia una <br />
            <span className="text-[#feb301] opacity-90 italic">forma consciente de vivir</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-start group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#feb301] flex items-center justify-center text-[#2e3f22]">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <h3 className="text-xl font-serif text-[#feb301]">
                    {step.title.split(':')[0]}
                  </h3>
                </div>
                <h4 className="text-lg font-sans font-medium mb-3 text-white">
                  {step.title.split(': ')[1]}
                </h4>
                <p className="text-[#f5f5f0] font-sans opacity-80 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
