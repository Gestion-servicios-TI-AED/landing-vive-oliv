import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  investmentRange: string;
  privacy: boolean;
};

export const LeadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Lead captured:", data);
    toast.success("¡Gracias por tu interés! Un asesor se pondrá en contacto pronto.");
    reset();
    setIsSubmitting(false);
  };

  const investmentOptions = [
    "Menos de $500M COP",
    "$500M - $800M COP",
    "$800M - $1.200M COP",
    "Más de $1.200M COP"
  ];

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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-sans text-gray-500 mb-2 uppercase tracking-widest font-medium">
                  Nombre
                </label>
                <input
                  {...register("firstName", { required: "El nombre es obligatorio" })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a7d7a] focus:ring-1 focus:ring-[#1a7d7a] transition-colors text-[#333] font-sans text-sm placeholder:text-gray-400"
                  placeholder="Tu nombre"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-[10px] mt-1 block uppercase font-medium">{errors.firstName.message}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-sans text-gray-500 mb-2 uppercase tracking-widest font-medium">
                  Apellido
                </label>
                <input
                  {...register("lastName", { required: "El apellido es obligatorio" })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a7d7a] focus:ring-1 focus:ring-[#1a7d7a] transition-colors text-[#333] font-sans text-sm placeholder:text-gray-400"
                  placeholder="Tu apellido"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-[10px] mt-1 block uppercase font-medium">{errors.lastName.message}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-sans text-gray-500 mb-2 uppercase tracking-widest font-medium">
                  Teléfono
                </label>
                <input
                  {...register("phone", { required: "El teléfono es obligatorio" })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a7d7a] focus:ring-1 focus:ring-[#1a7d7a] transition-colors text-[#333] font-sans text-sm placeholder:text-gray-400"
                  placeholder="+57 300 000 0000"
                />
                {errors.phone && (
                  <span className="text-red-500 text-[10px] mt-1 block uppercase font-medium">{errors.phone.message}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-sans text-gray-500 mb-2 uppercase tracking-widest font-medium">
                  Rango de Inversión
                </label>
                <div className="relative">
                  <select
                    {...register("investmentRange", { required: "Selecciona un rango" })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a7d7a] focus:ring-1 focus:ring-[#1a7d7a] transition-colors text-[#333] font-sans text-sm appearance-none cursor-pointer"
                  >
                    <option value="">Selecciona una opción</option>
                    {investmentOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
                {errors.investmentRange && (
                  <span className="text-red-500 text-[10px] mt-1 block uppercase font-medium">{errors.investmentRange.message}</span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-sans text-gray-500 mb-2 uppercase tracking-widest font-medium">
                Correo Electrónico
              </label>
              <input
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido",
                  },
                })}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a7d7a] focus:ring-1 focus:ring-[#1a7d7a] transition-colors text-[#333] font-sans text-sm placeholder:text-gray-400"
                placeholder="tucorreo@ejemplo.com"
              />
              {errors.email && (
                <span className="text-red-500 text-[10px] mt-1 block uppercase font-medium">{errors.email.message}</span>
              )}
            </div>

            <div className="pt-2">
              <label className="flex items-start space-x-3 cursor-pointer group">
                <div className="relative flex items-center mt-0.5">
                  <input
                    type="checkbox"
                    {...register("privacy", { required: "Debes aceptar la política" })}
                    className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm checked:border-[#1a7d7a] checked:bg-[#1a7d7a] focus:ring-1 focus:ring-[#1a7d7a]/20 transition-all"
                  />
                  <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3.5 6 5 8.5 9.5 3.5"></polyline>
                  </svg>
                </div>
                <span className="text-xs text-gray-500 font-sans leading-tight group-hover:text-gray-700 transition-colors uppercase tracking-wider">
                  Acepto la política de tratamiento de datos y privacidad.
                </span>
              </label>
              {errors.privacy && (
                <span className="text-red-500 text-[10px] mt-1 block uppercase font-medium">{errors.privacy.message}</span>
              )}
            </div>

            <div className="pt-6 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto inline-flex items-center justify-center px-20 py-4 bg-[#00857c] text-white font-sans text-sm font-medium tracking-wide hover:bg-[#006e67] transition-all transform hover:scale-[1.02] rounded-full shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-3 h-4 w-4" /> Procesando...
                  </>
                ) : (
                  "Solicitar Información"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
