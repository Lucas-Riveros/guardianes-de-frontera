import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Carreras() {
  const carreras = [
    {
      title: "Formación Básica",
      desc: "Desarrolla las competencias esenciales de disciplina, liderazgo y resiliencia.",
    },
    {
      title: "Entrenamiento Avanzado",
      desc: "Preparación táctica y estratégica para escenarios exigentes.",
    },
    {
      title: "Especializaciones",
      desc: "Programas enfocados en áreas específicas de seguridad y defensa.",
    },
  ];

  return (
    <section id="carreras" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase font-['Oswald'] text-gray-900">
          Carreras Destacadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {carreras.map((carrera, index) => (
            <Fade
              key={index}
              direction="up"
              delay={index * 200}
              triggerOnce
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 text-center">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 font-['Oswald'] text-gray-800">
                  {carrera.title}
                </h3>
                <p className="font-['Lora'] text-gray-700">{carrera.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
