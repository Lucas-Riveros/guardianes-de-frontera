import React from 'react';

export default function Autoridades() {
  const autoridades = {
    liderazgo: [
      {
        cargo: "Administradora Titular / Directora",
        nombre: "Paez, Patricia Noemí",
        imagen: "/images/icons/logoMilitar.png" // reemplaza con la foto real
      },
      {
        cargo: "Administradora Suplente",
        nombre: "Juan, Shaira Oriana",
        imagen: "/images/icons/logoMilitar.png" // reemplaza con la foto real
      },
      {
        cargo: "Instructor General",
        nombre: "Cabo Primero Acosta, Claudia",
        imagen: "/images/icons/logoMilitar.png" // reemplaza con la foto real
      }
    ],
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 md:py-30 text-gray-800">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-4 text-gray-950 font-['Oswald']">
          Nuestras Autoridades
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-['Lora']">
          Conoce al equipo de liderazgo que guía nuestra institución con dedicación y compromiso.
        </p>
      </div>

      {/* Sección de Liderazgo Principal */}
      <div className="mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {autoridades.liderazgo.map((persona, index) => (
            <div
              key={index}
              className="bg-blanco p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={persona.imagen}
                  alt={`Foto de ${persona.nombre}`}
                  className="w-32 h-32 rounded-full object-cover border-4 border-oliva"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-mostaza font-['Oswald'] uppercase">
                  {persona.cargo}
                </h3>
                <p className="text-lg font-['Lora'] mt-1">{persona.nombre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
