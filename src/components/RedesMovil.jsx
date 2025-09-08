import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaShareAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function RedesMovil() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden flex flex-col items-center">
      {/* Menú de redes */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            className="mb-4 flex flex-col items-center space-y-3"
          >
            <a
              href="https://wa.me/543718653578"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="https://www.facebook.com/guardianes%20de%20frontera"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/Guardianesdefrontera"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white p-3 rounded-full shadow-lg hover:opacity-90 transition"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://www.youtube.com/Guardianesdefrontera"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition"
            >
              <FaYoutube size={22} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-oliva text-white p-4 rounded-full shadow-lg focus:outline-none hover:bg-moztaza transition"
      >
        <FaShareAlt size={24} />
      </button>
    </div>
  );
}
