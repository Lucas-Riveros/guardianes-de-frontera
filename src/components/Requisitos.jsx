import React from 'react';
import { FileText, User, HeartPulse, ClipboardCheck } from 'lucide-react';

export default function Requisitos() {
  return (
    <section className="mt-16 text-gray-800">
      {/* Encabezado */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-3 text-gray-900 font-['Oswald']">
          Requisitos de Ingreso
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto font-['Lora']">
          Para incorporarte deberás presentar la siguiente documentación obligatoria.
        </p>
      </div>

      {/* Grid de requisitos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* DNI Alumno */}
        <div className="flex items-start bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
          <div className="flex-shrink-0 bg-gray-100 p-2.5 rounded-full mr-4">
            <User size={22} className="text-gray-700" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 font-['Oswald'] mb-1">
              Fotocopia del DNI (Alumno)
            </h3>
            <p className="text-sm text-gray-700 font-['Lora']">
              Documento Nacional de Identidad actualizado y en buenas condiciones.
            </p>
          </div>
        </div>

        {/* DNI Padre/Madre/Tutor */}
        <div className="flex items-start bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
          <div className="flex-shrink-0 bg-gray-100 p-2.5 rounded-full mr-4">
            <FileText size={22} className="text-gray-700" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 font-['Oswald'] mb-1">
              Fotocopia del DNI (Padre, Madre o Tutor)
            </h3>
            <p className="text-sm text-gray-700 font-['Lora']">
              Requisito obligatorio en caso de que el aspirante sea menor de edad.
            </p>
          </div>
        </div>

        {/* Certificado de Salud */}
        <div className="flex items-start bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
          <div className="flex-shrink-0 bg-gray-100 p-2.5 rounded-full mr-4">
            <HeartPulse size={22} className="text-gray-700" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 font-['Oswald'] mb-1">
              Certificado de Buena Salud (Alumno)
            </h3>
            <p className="text-sm text-gray-700 font-['Lora']">
              Emitido por un profesional médico matriculado, acreditando aptitud para la actividad física.
            </p>
          </div>
        </div>

        {/* Electrocardiograma */}
        <div className="flex items-start bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
          <div className="flex-shrink-0 bg-gray-100 p-2.5 rounded-full mr-4">
            <ClipboardCheck size={22} className="text-gray-700" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 font-['Oswald'] mb-1">
              Electrocardiograma (Alumno)
            </h3>
            <p className="text-sm text-gray-700 font-['Lora']">
              Estudio médico reciente para certificar la aptitud cardíaca del postulante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
