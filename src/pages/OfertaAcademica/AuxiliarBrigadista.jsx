import React from "react";

export default function AuxiliarBrigadista() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-15 py-20">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold uppercase text-oliva font-['Oswald']">
          Auxiliar de Brigadista, Búsqueda y Rescate
        </h1>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto font-['Lora']">
          Formación enfocada en la preparación de brigadistas con conocimientos
          esenciales para actuar en situaciones de emergencia, búsqueda y
          rescate, priorizando la seguridad y el trabajo en equipo.
        </p>
      </div>

      {/* Contenido */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-musgo font-['Oswald'] mb-2">
            Objetivos
          </h2>
          <p className="text-gray-700 font-['Lora']">
            Desarrollar habilidades para intervenir en incendios, evacuaciones y
            rescates, aplicando protocolos de seguridad y primeros auxilios.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-musgo font-['Oswald'] mb-2">
            Contenidos
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 font-['Lora']">
            <li>Prevención y control de incendios.</li>
            <li>Técnicas de búsqueda en diferentes terrenos.</li>
            <li>Rescate en espacios confinados y altura.</li>
            <li>Coordinación en emergencias.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
