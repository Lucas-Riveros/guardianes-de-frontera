import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/placeholder5.jpeg')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-lg font-['Oswald'] uppercase">
          Escuela de Entrenamiento Militar <br /> Guardianes de Frontera
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-3xl font-['Lora']">
          Forjando líderes con disciplina, resiliencia y fortaleza
        </p>
        <a
          href="/Contacto"
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-lg font-semibold rounded-lg shadow-md font-['Oswald'] uppercase"
        >
          Postúlate ahora
        </a>
      </div>
    </section>
  );
}