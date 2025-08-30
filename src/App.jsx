import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Nosotros from "./pages/Institucion/Nosotros";
import Autoridades from "./pages/Institucion/Autoridades";

import InformacionGeneral from "./pages/OfertaAcademica/InformacionGeneral";
import Requisitos from "./pages/OfertaAcademica/Requisitos";
import Actividades from "./pages/OfertaAcademica/Actividades";

import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop/>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Institución/Nosotros" element={<Nosotros />} />
          <Route path="/Institución/Autoridades" element={<Autoridades />} />

          <Route path="/Oferta-Académica/Informacion-General" element={<InformacionGeneral />} />
          <Route path="/Oferta-Académica/Requisitos" element={<Requisitos />} />
          <Route path="/Oferta-Académica/Actividades" element={<Actividades />} />

          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
