import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RedesMovil from "./components/RedesMovil";

import Home from "./pages/Home";
import Nosotros from "./pages/Institucion/Nosotros";
import Autoridades from "./pages/Institucion/Autoridades";
import PlanEstudio from "./pages/OfertaAcademica/PlanEstudio";
import Certificados from "./components/Certificados";
import Actividades from "./pages/OfertaAcademica/Actividades";
import Contacto from "./pages/Contacto";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1680);

  // Responsive listener
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1680);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const palabras = `
    Honor Esfuerzo Dedicación Carácter Disciplina Liderazgo Valor Coraje Lealtad Compromiso
    Sacrificio Perseverancia Integridad Responsabilidad Excelencia Firmeza Resiliencia Vocación Patria Servicio
  `;

  const createSvg = (text) => {
    const fontFamily = "Oswald, sans-serif";
    const fontSize = 20;
    const lineHeight = 28;
    const words = text
      .toUpperCase()
      .trim()
      .split(/\s+/)
      .map((w, i) => (i % 3 === 2 ? w + " ✦" : w));

    const lines = words.reduce((acc, word, i) => {
      if (i % 5 === 0) acc.push([]);
      acc[acc.length - 1].push(word);
      return acc;
    }, []);

    let tspans = "";
    lines.forEach((line, i) => {
      tspans += `<tspan x="0" dy="${i === 0 ? 0 : lineHeight}">${line.join(" ")}</tspan>`;
    });

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="500" height="${lines.length * lineHeight}">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:rgba(0,0,0,0.25);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(0,0,0,0.05);stop-opacity:1" />
          </linearGradient>
        </defs>
        <text 
          x="0" 
          y="20" 
          font-family="${fontFamily}" 
          font-size="${fontSize}" 
          fill="url(#grad)"
          letter-spacing="3"
          font-weight="600"
        >
          ${tspans}
        </text>
      </svg>
    `;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  };

  return (
    <div className="min-h-screen flex flex-col relative"
      style={{ minWidth: "363px" }}>
      {/* Marca de agua central (independiente) */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          backgroundImage: "url('/images/icons/logoMilitar.png')",
          backgroundSize: "clamp(200px, 90vw, 800px)", // mínimo 200px, ideal 30% de viewport, máximo 500px
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.04,
        }}
      ></div>

      {/* Laterales SOLO en desktop ancho */}
      {isDesktop && (
        <>
          {/* Lateral izquierdo */}
          <div
            className="fixed inset-y-0 left-0 w-[15vw] -z-10 overflow-hidden"
            style={{
              backgroundImage: `url("${createSvg(palabras)}")`,
              backgroundSize: "500px auto",
              backgroundRepeat: "repeat",
              backgroundPosition: "0 0",
              opacity: "0.25",
            }}
          ></div>

          {/* Lateral derecho */}
          <div
            className="fixed inset-y-0 right-0 w-[15vw] -z-10 overflow-hidden"
            style={{
              backgroundImage: `url("${createSvg(palabras)}")`,
              backgroundSize: "500px auto",
              backgroundRepeat: "repeat",
              backgroundPosition: "0 0",
              opacity: "0.25",
            }}
          ></div>
        </>
      )}

      <ScrollToTop />

      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/institución/nosotros" element={<Nosotros />} />
          <Route path="/institución/autoridades" element={<Autoridades />} />

          <Route path="/oferta-académica/plan-de-estudios" element={<PlanEstudio />} />
          <Route path="/oferta-académica/certificados" element={<Certificados />} />
          <Route path="/oferta-académica/actividades" element={<Actividades />} />

          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <RedesMovil />

      <Footer />

    </div>
  );
}

export default App;
