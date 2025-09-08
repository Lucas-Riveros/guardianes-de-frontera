import React from "react";

export default function PrimerosAuxilios() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-15 py-20">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold uppercase text-oliva font-['Oswald']">
          Primeros Auxilios Tácticos
        </h1>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto font-['Lora']">
          Capacitación práctica en atención médica inmediata en situaciones de
          riesgo, diseñada para contextos tácticos y de campo.
        </p>
      </div>

      {/* Contenido */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-musgo font-['Oswald'] mb-2">
            Objetivos
          </h2>
          <p className="text-gray-700 font-['Lora']">
            Enseñar a los participantes a actuar de forma rápida y eficaz frente
            a emergencias, estabilizando al herido hasta la llegada de
            profesionales de la salud.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-musgo font-['Oswald'] mb-2">
            Contenidos
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 font-['Lora']">
            <li>Evaluación inicial de la víctima.</li>
            <li>Control de hemorragias.</li>
            <li>Reanimación cardiopulmonar (RCP).</li>
            <li>Atención de heridas y fracturas.</li>
            <li>Traslado seguro del herido.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}