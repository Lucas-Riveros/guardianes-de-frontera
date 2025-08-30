import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'; // Íconos de redes sociales

export default function Footer() {
  // Obtenemos el año actual de forma dinámica
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Columna 1: Logo, Título y Descripción */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center space-x-3 mb-4">
            <img src="/images/icons/logoMilitar.png" alt="Logo Guardianes de Frontera" className="h-14 w-auto" />
            <span className="text-white font-extrabold text-2xl font-['Oswald'] uppercase">Guardianes de Frontera</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-gray-400 font-['Lora'] max-w-sm">
            Escuela de Entrenamiento Militar que promueve el liderazgo, la disciplina y la resiliencia en cada uno de sus aspirantes, cadetes y postulantes.
          </p>
        </div>

        {/* Columna 2: Contacto y Redes Sociales */}
        <div className="md:col-span-1">
          <h3 className="text-white font-bold text-lg mb-4 uppercase font-['Oswald'] tracking-wide">Contacto</h3>
          <ul className="space-y-3 text-sm font-['Lora']">
            <li className="flex items-center space-x-3">
              <MapPin size={20} className="text-green-400 flex-shrink-0" />
              <p>Clorinda - Formosa, Argentina</p>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={20} className="text-green-400 flex-shrink-0" />
              <a href="tel:+541100000000" className="hover:text-green-400 transition-colors">+54 11 0000-0000</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={20} className="text-green-400 flex-shrink-0" />
              <a href="mailto:info@guardianesdefrontera.com" className="hover:text-green-400 transition-colors">info@guardianesdefrontera.com</a>
            </li>
          </ul>

          {/* Redes Sociales */}
          <div className="mt-8">
            <h3 className="text-white font-bold text-lg mb-4 uppercase font-['Oswald'] tracking-wide">Síguenos</h3>
            <div className="flex space-x-5">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Derechos reservados (ajustados) */}
      <div className="border-t border-gray-800 mt-16 py-6 text-center text-xs text-gray-600">
        <p>© {currentYear} Guardianes de Frontera. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}