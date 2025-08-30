import React from 'react';

export default function Autoridades() {
  // Datos de ejemplo para la estructura organizacional.
  // Reemplaza esta información con los datos reales cuando estén disponibles.
  const autoridades = {
    liderazgo: [
      {
        cargo: "Director General",
        nombre: "Coronel Juan Pérez",
        descripcion: "Responsable de la dirección estratégica y la administración general de la Escuela, asegurando el cumplimiento de la misión institucional.",
        imagen: "/images/placeholder1.jpg" // Reemplaza con la imagen real
      },
      {
        cargo: "Subdirector Académico",
        nombre: "Teniente María López",
        descripcion: "Supervisa el plan de estudios, la calidad educativa y el rendimiento académico de los cadetes.",
        imagen: "/images/placeholder2.jpg" // Reemplaza con la imagen real
      },
      {
        cargo: "Jefe de Formación Militar",
        nombre: "Mayor Carlos Gómez",
        descripcion: "Encargado de la instrucción, disciplina y desarrollo físico-militar de los cadetes.",
        imagen: "/images/placeholder3.jpg"// Reemplaza con la imagen real
      }
    ],
    areas: [
      {
        area: "Departamento de Admisiones",
        responsable: "Capitán Ana Torres",
        funcion: "Gestiona el proceso de selección y matriculación de nuevos aspirantes.",
      },
      {
        area: "Departamento de Logística",
        responsable: "Sargento Mayor Luis Ruiz",
        funcion: "Maneja los recursos, el equipamiento y la infraestructura de la Escuela.",
      },
      {
        area: "Comité de Bienestar Estudiantil",
        responsable: "Oficial Laura Fernández",
        funcion: "Provee apoyo psicológico y social a los cadetes.",
      },
    ]
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-30 md:py-30 text-gray-800">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-4 text-gray-900 font-['Oswald']">
          Nuestras Autoridades
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Lora']">
          Conoce a los líderes que dirigen nuestra institución y la estructura que guía
          el camino de nuestros futuros oficiales.
        </p>
      </div>

      {/* Sección de Liderazgo Principal */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-center mb-10 text-gray-800 font-['Oswald']">
          Liderazgo Institucional
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {autoridades.liderazgo.map((persona, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={persona.imagen}
                  alt={`Foto de ${persona.nombre}`}
                  className="w-32 h-32 rounded-full object-cover border-4 border-green-700"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-700 font-['Oswald'] uppercase">
                  {persona.cargo}
                </h3>
                <p className="text-lg font-['Lora'] mt-1">{persona.nombre}</p>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  {persona.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Estructura Organizacional */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-center mb-10 text-gray-800 font-['Oswald']">
          Estructura Organizacional
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {autoridades.areas.map((area, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-xl shadow-md border-l-4 border-green-700"
            >
              <h3 className="text-xl font-semibold text-green-900 font-['Oswald'] uppercase">
                {area.area}
              </h3>
              <p className="text-gray-700 font-bold mt-2 font-['Lora']">
                {area.responsable}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong className="font-semibold">Función:</strong> {area.funcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}