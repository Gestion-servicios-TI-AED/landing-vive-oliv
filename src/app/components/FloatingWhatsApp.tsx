import { motion } from "motion/react";
import whatsappIcon from "@/assets/2eb802af3311ce96aede3ca65f73d64872f41439.png";

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/573000000000" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#feb301] rounded-full shadow-lg hover:bg-[#e5a000] transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-[#feb301] opacity-30 z-[-1]"
      />

      {/* WhatsApp Icon */}
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-8 h-8 object-contain"
      />
    </motion.a>
  );
};
