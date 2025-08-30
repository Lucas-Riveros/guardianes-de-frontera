import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Nosotros from "./pages/Institucion/Nosotros";
import Autoridades from "./pages/Institucion/Autoridades";


import InformacionGeneral from "./pages/OfertaAcademica/InformacionGeneral";
import Requisitos from "./pages/OfertaAcademica/Requisitos";
import Contenidos from "./pages/OfertaAcademica/Contenidos";
import Certificados from "./pages/OfertaAcademica/Certificados";

import Galeria from "./pages/Galeria";
import Noticias from "./pages/Noticias";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Institución/Nosotros" element={<Nosotros />} />
          <Route path="/Institución/Autoridades" element={<Autoridades />} />

          <Route path="/Oferta-Académica/Informacion-General" element={<InformacionGeneral />} />
          <Route path="/Oferta-Académica/Requisitos" element={<Requisitos />} />
          <Route path="/Oferta-Académica/Contenidos" element={<Contenidos />} />
          <Route path="/Oferta-Académica/Certificaciones" element={<Certificados />} />

          <Route path="/galeria" element={<Galeria />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
