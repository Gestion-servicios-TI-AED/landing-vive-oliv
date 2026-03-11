import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

type FormData = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  investmentRange: string;
  privacy: boolean;
};

export const Concept = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    toast.success("¡Gracias por tu interés! Nos pondremos en contacto pronto.");
    reset();
    setIsSubmitting(false);
  };

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
             <div className="relative z-10 bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-gray-100 max-w-md mx-auto">
               <div className="mb-8">
                 <h3 className="text-2xl font-serif text-[#1a7d7a] mb-2">Sé parte de los Fundadores</h3>
                 <p className="text-gray-500 font-sans text-sm">Déjanos tus datos para recibir información exclusiva y prioritaria.</p>
               </div>
               
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                 <div className="space-y-4">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                       <input
                         {...register("name", { required: "El nombre es obligatorio" })}
                         className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a7d7a] focus:ring-1 focus:ring-[#1a7d7a] transition-colors text-[#333] font-sans text-sm placeholder:text-gray-400"
                         placeholder="Nombre"
                       />
                       {errors.name && (
                         <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>
                       )}
                     </div>

                     <div>
                       <input
                         {...register("lastName", { required: "El apellido es obligatorio" })}
                         className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a7d7a] focus:ring-1 focus:ring-[#1a7d7a] transition-colors text-[#333] font-sans text-sm placeholder:text-gray-400"
                         placeholder="Apellido"
                       />
                       {errors.lastName && (
                         <span className="text-red-500 text-xs mt-1 block">{errors.lastName.message}</span>
                       )}
                     </div>
                   </div>

                   <div>
                     <input
                       {...register("email", {
                         required: "El email es obligatorio",
                         pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           message: "Email inválido",
                         },
                       })}
                       className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a7d7a] focus:ring-1 focus:ring-[#1a7d7a] transition-colors text-[#333] font-sans text-sm placeholder:text-gray-400"
                       placeholder="Correo electrónico"
                     />
                     {errors.email && (
                       <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>
                     )}
                   </div>

                   <div>
                     <input
                       {...register("phone", { required: "El teléfono es obligatorio" })}
                       className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a7d7a] focus:ring-1 focus:ring-[#1a7d7a] transition-colors text-[#333] font-sans text-sm placeholder:text-gray-400"
                       placeholder="Teléfono"
                     />
                     {errors.phone && (
                       <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>
                     )}
                   </div>

                   <div>
                     <select
                       {...register("investmentRange", { required: "Selecciona un rango de inversión" })}
                       className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a7d7a] focus:ring-1 focus:ring-[#1a7d7a] transition-colors text-[#333] font-sans text-sm appearance-none cursor-pointer"
                       defaultValue=""
                     >
                        <option value="" disabled className="text-gray-400">¿En qué rango de inversión te gustaría explorar en OLIV?</option>
                        <option value="300-500">Entre $300M y $500M</option>
                        <option value="500-800">Entre $500M y $800M</option>
                        <option value="800+">Más de $800M</option>
                     </select>
                     {errors.investmentRange && (
                       <span className="text-red-500 text-xs mt-1 block">{errors.investmentRange.message}</span>
                     )}
                   </div>
                 </div>

                 <div className="pt-2">
                   <label className="flex items-start space-x-3 cursor-pointer group">
                     <div className="relative flex items-center">
                       <input
                         type="checkbox"
                         {...register("privacy", { required: "Debes aceptar la política" })}
                         className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm checked:border-[#1a7d7a] checked:bg-[#1a7d7a] focus:ring-1 focus:ring-[#1a7d7a]/20 transition-all"
                       />
                       <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                         <polyline points="3.5 6 5 8.5 9.5 3.5"></polyline>
                       </svg>
                     </div>
                     <span className="text-xs text-gray-500 font-sans leading-tight group-hover:text-gray-700 transition-colors">
                       Acepto las condiciones y tratamiento de datos personales.
                     </span>
                   </label>
                   {errors.privacy && (
                     <span className="text-red-500 text-xs mt-1 block">{errors.privacy.message}</span>
                   )}
                 </div>

                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="w-full flex items-center justify-center px-6 py-3 bg-[#00857c] text-white font-sans font-medium tracking-wide hover:bg-[#006e67] transition-all rounded-full shadow-lg disabled:opacity-70 disabled:cursor-not-allowed text-sm mt-2"
                 >
                   {isSubmitting ? (
                     <>
                       <Loader2 className="animate-spin mr-2 h-4 w-4" /> Procesando...
                     </>
                   ) : (
                     "Quiero ser fundador"
                   )}
                 </button>
               </form>
             </div>
             
             {/* Decorative background element behind the card */}
             <div className="absolute top-10 right-10 w-full h-full bg-[#f5f5f0] -z-10 rounded-xl hidden lg:block transform translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
