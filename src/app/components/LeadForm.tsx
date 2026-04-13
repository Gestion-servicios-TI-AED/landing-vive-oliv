import { motion } from "motion/react";
import { HubSpotForm } from "./HubSpotForm";

export const LeadForm = () => {
  return (
    <section id="lead-form" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#1a7d7a] mb-8 leading-snug">
            Asegura tu legado en el <br />
            <span className="block mt-3">Plan Fundadores</span>
          </h2>
          <p className="text-gray-500 font-sans max-w-3xl mx-auto leading-relaxed">
            Al registrarte hoy, obtienes precios de Lista 0 y la tranquilidad de ser parte de un proyecto que asegura la coherencia entre el buen vivir de tu familia y la solidez que tu patrimonio merece.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100"
        >
          <HubSpotForm />
        </motion.div>
      </div>
    </section>
  );
};
