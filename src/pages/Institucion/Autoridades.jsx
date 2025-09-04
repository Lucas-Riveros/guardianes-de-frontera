import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Importamos un icono de silueta de persona

export default function Autoridades() {
  const autoridades = {
    liderazgo: [
      {
        cargo: "Administradora Titular / Directora",
        nombre: "Paez, Patricia Noemí",
        imagen: "" 
      },
      {
        cargo: "Instructor General",
        nombre: "Cabo Primero Acosta, Claudia",
        imagen: ""
      },
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

      {/* Sección de Liderazgo Principal con 2 columnas */}
      <div className="mb-16">
        {/* Cambiado de 3 columnas a 2 en desktop: `md:grid-cols-2` */}
        <div className="grid md:grid-cols-2 gap-8">
          {autoridades.liderazgo.map((persona, index) => (
            <div
              key={index}
              className="bg-blanco p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                {persona.imagen ? (
                  // Si hay una imagen real, la muestra
                  <img
                    src={persona.imagen}
                    alt={`Foto de ${persona.nombre}`}
                    className="w-32 h-32 rounded-full object-cover border-4 border-oliva"
                  />
                ) : (
                  // Si no hay imagen, muestra el icono de la silueta
                  <FaUserCircle className="w-32 h-32 text-gray-400 border-4 border-oliva rounded-full p-2" />
                )}
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