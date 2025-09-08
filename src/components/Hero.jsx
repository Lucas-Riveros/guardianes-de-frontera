import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Video de fondo único */}
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/vid16.mp4" type="video/mp4" />
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

        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 font-['Oswald'] text-moztaza uppercase leading-tight]">
          Guardianes de Frontera
        </h1>

        {/* Subtítulo */}
        <p className="text-m md:text-2xl mb-8 max-w-3xl font-['Lora'] italic">
          Forjando carácter, disciplina y liderazgo para el futuro
        </p>

        {/* Botón */}
        <a
          href="/Contacto"
          className="px-8 py-4 bg-oliva hover:bg-musgo text-xl font-bold rounded-xl shadow-md font-['Oswald'] uppercase transition"
        >
          Postúlate ahora
        </a>
      </div>
    </section>
  );
}
