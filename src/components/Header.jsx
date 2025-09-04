import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const closeTimer = useRef(null);
    const institucionRef = useRef(null);
    const ofertaRef = useRef(null);

    const location = useLocation();
    const navigate = useNavigate();

    // Handler para todos los links del header
    const handleNavClick = (path) => {
        setIsOpen(false);
        setOpenDropdown(null);
        if (location.pathname === path) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate(path);
        }
    };

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
                            src="/images/icons/logoMilitar.png"
                            alt="Logo Guardianes de Frontera"
                            className="h-15 w-auto"
                        />
                        <span className="font-extrabold text-xl text-white tracking-wide font-['Oswald'] uppercase whitespace-nowrap">
                            Guardianes de Frontera
                        </span>
                    </Link>

                    {/* Contenedor principal de la navegación de escritorio */}
                    <div className="hidden lg:flex items-center space-x-6 font-['Oswald'] text-white">
                        {/* Menú de navegación */}
                        <nav className="h-full flex items-center space-x-6">
                            <button
                                className="h-full flex items-center hover:text-moztaza transition-colors bg-transparent border-none outline-none"
                                onClick={() => handleNavClick("/")}
                            >
                                Inicio
                            </button>
                            {/* Dropdown Institución */}
                            <div
                                className="relative"
                                onMouseEnter={() => openMenu("Institucion")}
                                onMouseLeave={scheduleClose}
                            >
                                <button
                                    className={`h-20 flex items-center gap-1 transition-colors ${openDropdown === "Institucion" ? "text-moztaza" : "hover:text-moztaza"}`}
                                    type="button"
                                >
                                    Institución <ChevronDown size={16} className={`${openDropdown === "Institucion" ? "rotate-180" : ""} transition-transform duration-200`} />
                                </button>
                                <div
                                    ref={institucionRef}
                                    className={`absolute left-0 top-[100%] w-48 text-sm rounded-b-lg border-t-2 border-moztaza bg-black/95 backdrop-blur-md shadow-lg py-2
                transition-all ease-out duration-200 origin-top
                ${openDropdown === "Institucion" ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
                                >
                                    <button className="block px-4 py-2 hover:bg-moztaza/30 w-full text-left bg-transparent border-none outline-none"
                                        onClick={() => handleNavClick("/institución/nosotros")}>
                                        Nosotros
                                    </button>
                                    <button className="block px-4 py-2 hover:bg-moztaza/30 w-full text-left bg-transparent border-none outline-none"
                                        onClick={() => handleNavClick("/institución/autoridades")}>
                                        Autoridades
                                    </button>
                                </div>
                            </div>
                            {/* Dropdown Oferta Académica */}
                            <div
                                className="relative"
                                onMouseEnter={() => openMenu("OfertaAcademica")}
                                onMouseLeave={scheduleClose}
                            >
                                <button
                                    className={`h-20 flex items-center gap-1 transition-colors ${openDropdown === "OfertaAcademica" ? "text-moztaza" : "hover:moztaza"}`}
                                    type="button"
                                >
                                    Oferta Académica <ChevronDown size={16} className={`${openDropdown === "OfertaAcademica" ? "rotate-180" : ""} transition-transform duration-200`} />
                                </button>
                                <div
                                    ref={ofertaRef}
                                    className={`absolute left-0 top-[100%] w-56 text-sm rounded-b-lg border-t-2 border-moztaza bg-black/95 backdrop-blur-md shadow-lg py-2
                transition-all ease-out duration-200 origin-top
                ${openDropdown === "OfertaAcademica" ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
                                >
                                    <button className="block px-4 py-2 hover:bg-moztaza/30 w-full text-left bg-transparent border-none outline-none"
                                        onClick={() => handleNavClick("/oferta-académica/plan-de-estudios")}>
                                        Plan de Estudios
                                    </button>
                                    <button className="block px-4 py-2 hover:bg-moztaza/30 w-full text-left bg-transparent border-none outline-none"
                                        onClick={() => handleNavClick("/oferta-académica/certificados")}>
                                        Certificados
                                    </button>
                                    <button className="block px-4 py-2 hover:bg-moztaza/30 w-full text-left bg-transparent border-none outline-none"
                                        onClick={() => handleNavClick("/oferta-académica/actividades")}>
                                        Actividades
                                    </button>
                                </div>
                            </div>
                            <button
                                className="h-full flex items-center hover:text-moztaza transition-colors bg-transparent border-none outline-none"
                                onClick={() => handleNavClick("/contacto")}
                            >
                                Contacto
                            </button>
                        </nav>

                        {/* Íconos de redes sociales */}
                        <div className="flex items-center space-x-4 ml-6">
                            <a href="https://www.facebook.com/guardianes%20de%20frontera" target="_blank" rel="noopener noreferrer" className="text-white hover:text-moztaza transition-colors">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.instagram.com/Guardianesdefrontera" target="_blank" rel="noopener noreferrer" className="text-white hover:text-moztaza transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.youtube.com/Guardianesdefrontera" target="_blank" rel="noopener noreferrer" className="text-white hover:text-moztaza transition-colors">
                                <FaYoutube size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Botón de menú móvil */}
                    <div className="-mr-2 flex lg:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-moztaza focus:outline-none focus:ring-2 focus:ring-inset focus:ring-moztaza"
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
                    <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-moztaza/30" onClick={() => setIsOpen(false)}>Inicio</Link>
                    <details className="w-full group">
                        <summary className="block px-3 py-2 rounded-md text-base font-medium hover:bg-moztaza/30 cursor-pointer list-none flex justify-between items-center">
                            Institución
                            <ChevronDown size={16} className="transition-transform duration-200 group-open:rotate-180" />
                        </summary>
                        <div className="flex flex-col pl-4 mt-1 space-y-1">
                            <Link to="/institución/nosotros" className="block px-3 py-2 text-sm rounded-md hover:bg-moztaza/30" onClick={() => setIsOpen(false)}>Nosotros</Link>
                            <Link to="/institución/autoridades" className="block px-3 py-2 text-sm rounded-md hover:bg-moztaza/30" onClick={() => setIsOpen(false)}>Autoridades</Link>
                        </div>
                    </details>
                    <details className="w-full group">
                        <summary className="block px-3 py-2 rounded-md text-base font-medium hover:bg-moztaza/30 cursor-pointer list-none flex justify-between items-center">
                            Oferta Académica
                            <ChevronDown size={16} className="transition-transform duration-200 group-open:rotate-180" />
                        </summary>
                        <div className="flex flex-col pl-4 mt-1 space-y-1">
                            <Link to="/oferta-académica/plan-de-estudios" className="block px-3 py-2 text-sm rounded-md hover:bg-moztaza/30" onClick={() => setIsOpen(false)}>Plan de Estudios</Link>
                            <Link to="/oferta-académica/certificados" className="block px-3 py-2 text-sm rounded-md hover:bg-moztaza/30" onClick={() => setIsOpen(false)}>Certificados</Link>
                            <Link to="/oferta-académica/actividades" className="block px-3 py-2 text-sm rounded-md hover:bg-moztaza/30" onClick={() => setIsOpen(false)}>Actividades</Link>

                        </div>
                    </details>
                    <Link to="/contacto" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-moztaza/30" onClick={() => setIsOpen(false)}>Contacto</Link>
                </div>
            )}
        </header>
    );
}