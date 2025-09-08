import React from "react";
import { FaUserCircle, FaHandsHelping, FaChalkboardTeacher, FaComments } from "react-icons/fa";

export default function Autoridades() {
  const autoridades = {
    liderazgo: [
      {
        cargo: "Administradora Titular / Directora",
        nombre: "Paez, Patricia Noemí",
      },
      {
        cargo: "Instructor General",
        nombre: "Cabo Primero Acosta, Claudia",
      },
    ],
  };

  const asesoramiento = [
    {
      icono: <FaHandsHelping className="w-12 h-12 text-oliva mb-4" />,
      titulo: "Acompañamiento Constante",
      descripcion:
        "Brindamos apoyo cercano a padres y tutores en todo el proceso de formación de los alumnos.",
      imagen: "/images/img68.jpg",
    },
    {
      icono: <FaChalkboardTeacher className="w-12 h-12 text-oliva mb-4" />,
      titulo: "Orientación Educativa",
      descripcion:
        "Se ofrecen charlas y talleres que ayudan a comprender mejor el desarrollo académico y personal.",
      imagen: "/images/img36.jpg",
    },
    {
      icono: <FaComments className="w-12 h-12 text-oliva mb-4" />,
      titulo: "Comunicación Abierta",
      descripcion:
        "Espacios de diálogo para escuchar inquietudes, resolver dudas y construir confianza mutua.",
      imagen: "/images/img27.jpg",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 md:py-30 text-gray-800">
      {/* Autoridades */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-4 text-gray-950 font-['Oswald']">
          Nuestras Autoridades
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-['Lora']">
          Conoce al equipo de liderazgo que guía nuestra institución con dedicación y compromiso.
        </p>
      </div>

      <div className="mb-16 bg-white">
        <div className="grid md:grid-cols-2 gap-8">
          {autoridades.liderazgo.map((persona, index) => (
            <div
              key={index}
              className="bg-blanco p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                {persona.imagen ? (
                  <img
                    src={persona.imagen}
                    alt={`Foto de ${persona.nombre}`}
                    className="w-32 h-32 rounded-full object-cover border-4 border-oliva"
                  />
                ) : (
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

      {/* Asesoramiento a Padres y Tutores */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-oliva font-['Oswald'] mb-4">
          Asesoramiento a Padres y Tutores
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto font-['Lora']">
          Entendemos que la formación de los alumnos es un camino compartido. Por eso ofrecemos espacios de acompañamiento para las familias.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {asesoramiento.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={item.imagen}
              alt={item.titulo}
              className="w-full h-40 object-cover"
            />
            <div className="p-6 text-center">
              {item.icono}
              <h3 className="text-xl font-bold text-oliva font-['Oswald'] mb-2">
                {item.titulo}
              </h3>
              <p className="text-gray-600 text-sm">{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
