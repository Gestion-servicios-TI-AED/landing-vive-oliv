import { motion } from "motion/react";
import { HubSpotForm } from "./HubSpotForm";

export const Concept = () => {

  return (
    <section id="concept" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <div className="max-w-xl">
              
              <h2 className="text-4xl md:text-5xl font-serif text-[#1a7d7a] leading-tight mb-8">
                La ciudad crece. <br /><span className="italic font-light">¿Tu calidad de vida también?</span>
              </h2>
              <div className="prose prose-lg text-gray-600 font-sans font-light leading-relaxed">
                <p className="mb-6">
                  Cartagena no se detiene, pero tu calidad de vida no debería quedarse atrás. Sientes que existe otra forma de vivir: con más espacio, más calma y más coherencia con lo que quieres para tu familia.
                </p>
                <p className="mb-6">
                  No se trata solo de cambiar de hogar. Se trata de no improvisar el futuro, de elegir con intención y tranquilidad.
                </p>
                <p>
                  Esta vez quieres decidir bien. Porque el buen vivir de tu familia debe ir de la mano con la solidez de tu patrimonio.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full order-1 lg:order-2"
          >
             <div className="relative z-10 bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-gray-100 w-full">
               <div className="mb-8">
                 <h3 className="text-2xl font-serif text-[#1a7d7a] mb-2">Sé parte de los Fundadores</h3>
                 <p className="text-gray-500 font-sans text-sm">Déjanos tus datos para recibir información exclusiva y prioritaria.</p>
               </div>
               <HubSpotForm />
             </div>
             
             {/* Decorative background element behind the card */}
             <div className="absolute top-10 right-10 w-full h-full bg-[#f5f5f0] -z-10 rounded-xl hidden lg:block transform translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
