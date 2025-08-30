import React, { useState } from "react";

export default function Hero() {
  // Lista de videos en orden descendente
  const videos = ["/videos/vid3.mp4", "/videos/vid2.mp4"]
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    // avanzar al siguiente video, si es el último vuelve al inicio
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Video de fondo dinámico */}
      <video
        key={videos[currentVideo]} // fuerza que se reinicie cada vez
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src={videos[currentVideo]} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* Texto superior */}
        <h2 className="text-2xl md:text-4xl font-semibold mb-2 drop-shadow-lg font-['Oswald'] uppercase tracking-wide">
          Escuela de Entrenamiento Militar
        </h2>

        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 font-['Oswald'] uppercase leading-tight drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
          Guardianes de Frontera
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-2xl mb-8 max-w-3xl font-['Lora'] italic">
          Forjando líderes con disciplina, resiliencia y fortaleza
        </p>

        {/* Botón */}
        <a
          href="/Contacto"
          className="px-8 py-4 bg-green-600 hover:bg-green-700 text-xl font-bold rounded-xl shadow-md font-['Oswald'] uppercase transition"
        >
          Postúlate ahora
        </a>
      </div>
    </section>
  );
}
