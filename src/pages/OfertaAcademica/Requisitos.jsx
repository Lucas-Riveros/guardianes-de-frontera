import React from 'react';
import { User, GraduationCap, HeartHandshake, CheckCircle } from 'lucide-react';

export default function Requisitos() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-30 text-gray-800">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-4 text-gray-900 font-['Oswald']">
          Requisitos de Ingreso
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Lora']">
          Para unirte a la Escuela de Entrenamiento Militar "Guardianes de Frontera", es necesario cumplir con una serie de requisitos diseñados para garantizar la excelencia y el compromiso de nuestros futuros cadetes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sección 1: Requisitos Personales y Legales */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-4 border-gray-400">
          <h2 className="text-xl font-semibold text-gray-900 font-['Oswald'] flex items-center mb-4">
            <User size={24} className="mr-2 text-gray-700" />
            Personales y Legales
          </h2>
          <ul className="list-none space-y-3 text-gray-700 font-['Lora'] text-base">
            <li className="flex items-start">
              <span className="text-green-700 mr-2 mt-1">✔</span>
              Ser argentino/a nativo/a o por opción.
            </li>
            <li className="flex items-start">
              <span className="text-green-700 mr-2 mt-1">✔</span>
              Estado civil soltero/a.
            </li>
            <li className="flex items-start">
              <span className="text-green-700 mr-2 mt-1">✔</span>
              Tener DNI actualizado y en buenas condiciones.
            </li>
            <li className="flex items-start">
              <span className="text-green-700 mr-2 mt-1">✔</span>
              Contar con consentimiento de padres o representante legal si es menor de 18 años.
            </li>
          </ul>
        </div>

        {/* Sección 2: Requisitos Académicos y de Edad */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-4 border-gray-400">
          <h2 className="text-xl font-semibold text-gray-900 font-['Oswald'] flex items-center mb-4">
            <GraduationCap size={24} className="mr-2 text-gray-700" />
            Académicos y de Edad
          </h2>
          <ul className="list-none space-y-3 text-gray-700 font-['Lora'] text-base">
            <li className="flex items-start">
              <span className="text-green-700 mr-2 mt-1">✔</span>
              <span>
                <span className="font-bold">Edad:</span> Máximo 24 años al 1 de marzo del año de incorporación.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-700 mr-2 mt-1">✔</span>
              <span>
                <span className="font-bold">Estudios:</span> Título de enseñanza secundaria finalizado. Se permite la inscripción para quienes estén cursando el último año, con un máximo de <span className="font-bold">dos materias adeudadas</span> al momento del Examen Definitivo.
              </span>
            </li>

          </ul>
        </div>

        {/* Sección 3: Requisitos de Salud y Aptitud */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-4 border-gray-400">
          <h2 className="text-xl font-semibold text-gray-900 font-['Oswald'] flex items-center mb-4">
            <HeartHandshake size={24} className="mr-2 text-gray-700" />
            Salud y Aptitud
          </h2>
          <ul className="list-none space-y-3 text-gray-700 font-['Lora'] text-base">
            <li className="flex items-start">
              <span className="text-green-700 mr-2 mt-1">✔</span>
              <span>
                <span className="font-bold">Aptitud psicofisiológica:</span> Debes tener la aptitud física y mental para cumplir con las exigencias del servicio.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-700 mr-2 mt-1">✔</span>
              <span>
                <span className="font-bold">Vacunación:</span> Presentar el Plan Nacional de Vacunación completo.
              </span>
            </li>
          </ul>
        </div>

        {/* Sección 4: Proceso de Admisión y Exámenes */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-4 border-gray-400 lg:col-span-3">
          <h2 className="text-xl font-semibold text-gray-900 font-['Oswald'] flex items-center mb-4">
            <CheckCircle size={24} className="mr-2 text-gray-700" />
            Proceso de Admisión
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700 font-['Lora'] text-base">
            <div>
              <p className="font-bold mb-2">Exámenes requeridos:</p>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <span className="text-green-700 mr-2 mt-1">✔</span>
                  Examen Intelectual (para todos los aspirantes).
                </li>
                <li className="flex items-start">
                  <span className="text-green-700 mr-2 mt-1">✔</span>
                  Examen Definitivo: Incluye pruebas psicotécnicas, médicas, de aptitud física, entrevista personal y una junta de admisión.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2">Consideraciones especiales para candidatas:</p>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <span className="text-green-700 mr-2 mt-1">✔</span>
                  Las candidatas embarazadas o en período de lactancia pueden rendir el Examen Intelectual y, si aprueban, su promedio tendrá una validez de dos años para presentarse a las pruebas físicas una vez finalizado el período de gestación/lactancia.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}