import { motion } from "motion/react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import logo from "@/assets/e70c42e76d8f373f7319be198453a0d6dc47133e.png";

export const ThankYou = () => {
  return (
    <div className="bg-[#fcfcfb] min-h-screen font-sans selection:bg-[#1a7d7a] selection:text-white flex flex-col">
      {/* Minimal Top Bar */}
      <header className="w-full py-6 px-6 flex justify-center bg-[#125755] rounded-b-2xl">
        <a href="/">
          <img src={logo} alt="OLIV Cartagena" className="h-10 md:h-12 w-auto" />
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center">
          {/* Animated Check Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="mx-auto mb-8"
          >
            <div className="relative inline-flex items-center justify-center">
              {/* Pulse ring */}
              <motion.div
                className="absolute w-24 h-24 rounded-full bg-[#00857c]/10"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00857c] to-[#125755] flex items-center justify-center shadow-lg">
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <CheckCircle className="w-10 h-10 text-white" strokeWidth={2} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#125755] leading-tight mb-5"
          >
            Ya haces parte de la
            <br />
            <span className="italic font-light text-[#1a7d7a]">Lista 0 de OLIV.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl font-sans font-light text-[#4a4a4a] mb-8 max-w-lg mx-auto leading-relaxed"
          >
            Muy pronto te contactaremos para compartirte los primeros detalles del proyecto y tu acceso al Plan Fundadores.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-2xl font-serif italic text-[#1a7d7a] mb-12"
          >
            Esto es solo el inicio del buen vivir. 🌿
          </motion.p>


          {/* CTA Back */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00857c] text-white font-sans font-medium tracking-wide hover:bg-[#006e67] transition-all transform hover:scale-105 rounded-full shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al sitio principal
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="mt-8 text-xs font-sans font-light text-[#999] tracking-wide"
          >
            Tu información está segura. Respetamos tu privacidad y nunca compartiremos tus datos con terceros.
          </motion.p>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-6 text-center border-t border-[#125755]/5">
        <p className="text-xs font-sans font-light text-[#999]">
          © {new Date().getFullYear()} OLIV Cartagena. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};
