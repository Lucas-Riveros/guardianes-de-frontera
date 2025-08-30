import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimer = useRef(null);
  const institucionRef = useRef(null);
  const ofertaRef = useRef(null);

  const openMenu = (menu) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(menu);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => {
    const onScroll = () => {
      setOpenDropdown(null);
      setIsOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (openDropdown === "Institucion" && institucionRef.current && !institucionRef.current.contains(event.target)) ||
        (openDropdown === "OfertaAcademica" && ofertaRef.current && !ofertaRef.current.contains(event.target))
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo y título */}
          <Link
            to="/"
            className="flex items-center gap-2 py-4"
            onClick={() => {
              setIsOpen(false);
              setOpenDropdown(null);
            }}
          >
            <img
              src="/images/icons/logoMilitar.svg"
              alt="Logo Guardianes de Frontera"
              className="h-10 w-auto"
            />
            <span className="font-extrabold text-xl text-white tracking-wide font-['Oswald'] uppercase whitespace-nowrap">
              Guardianes de Frontera
            </span>
          </Link>

          {/* Contenedor principal de la navegación de escritorio */}
          <div className="hidden lg:flex items-center space-x-6 font-['Oswald'] text-white">
            {/* Menú de navegación */}
            <nav className="h-full flex items-center space-x-6">
              <Link
                to="/"
                className="h-full flex items-center hover:text-green-400 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                Inicio
              </Link>
              {/* Dropdown Institución */}
              {/* MODIFICADO: className de "h-full flex items-center" a solo "relative" */}
              <div
                className="relative"
                onMouseEnter={() => openMenu("Institucion")}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={`h-20 flex items-center gap-1 transition-colors ${openDropdown === "Institucion" ? "text-green-400" : "hover:text-green-400"
                    }`}
                >
                  Institución <ChevronDown size={16} className={`${openDropdown === "Institucion" ? "rotate-180" : ""} transition-transform duration-200`} />
                </button>
                <div
                  ref={institucionRef}
                  className={`absolute left-0 top-[100%] w-48 text-sm rounded-b-lg border-t-2 border-green-700 bg-black/95 backdrop-blur-md shadow-lg py-2
                    transition-all ease-out duration-200 origin-top
                    ${openDropdown === "Institucion" ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
                >
                  <Link to="/Institución/Nosotros" className="block px-4 py-2 hover:bg-green-700/30" onClick={() => setOpenDropdown(null)}>Nosotros</Link>
                  <Link to="/Institución/Autoridades" className="block px-4 py-2 hover:bg-green-700/30" onClick={() => setOpenDropdown(null)}>Autoridades</Link>
                </div>
              </div>
              {/* Dropdown Oferta Académica */}
              {/* MODIFICADO: className de "h-full flex items-center" a solo "relative" */}
              <div
                className="relative"
                onMouseEnter={() => openMenu("OfertaAcademica")}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={`h-20 flex items-center gap-1 transition-colors ${openDropdown === "OfertaAcademica" ? "text-green-400" : "hover:text-green-400"
                    }`}
                >
                  Oferta Académica <ChevronDown size={16} className={`${openDropdown === "OfertaAcademica" ? "rotate-180" : ""} transition-transform duration-200`} />
                </button>
                <div
                  ref={ofertaRef}
                  className={`absolute left-0 top-[100%] w-56 text-sm rounded-b-lg border-t-2 border-green-700 bg-black/95 backdrop-blur-md shadow-lg py-2
                    transition-all ease-out duration-200 origin-top
                    ${openDropdown === "OfertaAcademica" ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
                >
                  <Link to="/Oferta-Académica/Informacion-General" className="block px-4 py-2 hover:bg-green-700/30" onClick={() => setOpenDropdown(null)}>Información General</Link>
                  <Link to="/Oferta-Académica/Contenidos" className="block px-4 py-2 hover:bg-green-700/30" onClick={() => setOpenDropdown(null)}>Contenidos</Link>
                  <Link to="/Oferta-Académica/Requisitos" className="block px-4 py-2 hover:bg-green-700/30" onClick={() => setOpenDropdown(null)}>Requisitos</Link>
                  <Link to="/Oferta-Académica/Certificaciones" className="block px-4 py-2 hover:bg-green-700/30" onClick={() => setOpenDropdown(null)}>Certificaciones</Link>
                </div>
              </div>
              <Link to="/galeria" className="h-full flex items-center hover:text-green-400 transition-colors" onClick={() => setOpenDropdown(null)}>Galería</Link>
              <Link to="/noticias" className="h-full flex items-center hover:text-green-400 transition-colors" onClick={() => setOpenDropdown(null)}>Noticias</Link>
              <Link to="/redes" className="h-full flex items-center hover:text-green-400 transition-colors" onClick={() => setOpenDropdown(null)}>Redes</Link>
              <Link to="/contacto" className="h-full flex items-center hover:text-green-400 transition-colors" onClick={() => setOpenDropdown(null)}>Contacto</Link>
            </nav>

            {/* Íconos de redes sociales */}
            <div className="flex items-center space-x-4 ml-6">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors">
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Botón de menú móvil */}
          <div className="-mr-2 flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md px-2 pt-2 pb-3 space-y-1 font-['Oswald'] text-white">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700/30" onClick={() => setIsOpen(false)}>Inicio</Link>
          <details className="w-full group">
            <summary className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700/30 cursor-pointer list-none flex justify-between items-center">
              Institución
              <ChevronDown size={16} className="transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="flex flex-col pl-4 mt-1 space-y-1">
              <Link to="/Institución/Nosotros" className="block px-3 py-2 text-sm rounded-md hover:bg-green-700/30" onClick={() => setIsOpen(false)}>Nosotros</Link>
              <Link to="/Institución/Autoridades" className="block px-3 py-2 text-sm rounded-md hover:bg-green-700/30" onClick={() => setIsOpen(false)}>Autoridades</Link>
            </div>
          </details>
          <details className="w-full group">
            <summary className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700/30 cursor-pointer list-none flex justify-between items-center">
              Oferta Académica
              <ChevronDown size={16} className="transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="flex flex-col pl-4 mt-1 space-y-1">
              <Link to="/Oferta-Académica/Informacion-General" className="block px-3 py-2 text-sm rounded-md hover:bg-green-700/30" onClick={() => setIsOpen(false)}>Información General</Link>
              <Link to="/Oferta-Académica/Contenidos" className="block px-3 py-2 text-sm rounded-md hover:bg-green-700/30" onClick={() => setIsOpen(false)}>Contenidos</Link>
              <Link to="/Oferta-Académica/Requisitos" className="block px-3 py-2 text-sm rounded-md hover:bg-green-700/30" onClick={() => setIsOpen(false)}>Requisitos</Link>
              <Link to="/Oferta-Académica/Certificaciones" className="block px-3 py-2 text-sm rounded-md hover:bg-green-700/30" onClick={() => setIsOpen(false)}>Certificaciones</Link>
            </div>
          </details>
          <Link to="/galeria" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700/30" onClick={() => setIsOpen(false)}>Galería</Link>
          <Link to="/noticias" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700/30" onClick={() => setIsOpen(false)}>Noticias</Link>
          <Link to="/redes" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700/30" onClick={() => setIsOpen(false)}>Redes</Link>
          <Link to="/contacto" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700/30" onClick={() => setIsOpen(false)}>Contacto</Link>
        </div>
      )}
    </header>
  );
}