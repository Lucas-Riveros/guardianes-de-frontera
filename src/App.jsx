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
  return (
    <div className="min-h-screen flex flex-col relative">
      <div 
        className="fixed inset-0 -z-10 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: "url('/images/icons/logoMilitar.png')",
          backgroundSize: '30%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

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