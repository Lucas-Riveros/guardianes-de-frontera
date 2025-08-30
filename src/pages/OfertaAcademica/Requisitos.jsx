import React from 'react';
import { FileText, User, HeartPulse, ClipboardCheck } from 'lucide-react';

export default function Requisitos() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-30 text-gray-800">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-4 text-gray-900 font-['Oswald']">
          Requisitos de Ingreso
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-['Lora']">
          Para incorporarte a la Escuela de Entrenamiento Militar 
          <span className="font-semibold"> "Guardianes de Frontera"</span>, 
          deberás presentar la siguiente documentación obligatoria.
        </p>
      </div>

      <div className="space-y-8">
        {/* DNI Alumno */}
        <div className="flex items-start bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full mr-4">
            <User size={28} className="text-gray-700" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 font-['Oswald'] mb-1">
              Fotocopia del DNI (Alumno)
            </h2>
            <p className="text-gray-700 font-['Lora']">
              Documento Nacional de Identidad actualizado y en buenas condiciones.
            </p>
          </div>
        </div>

        {/* DNI Padre/Madre/Tutor */}
        <div className="flex items-start bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full mr-4">
            <FileText size={28} className="text-gray-700" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 font-['Oswald'] mb-1">
              Fotocopia del DNI (Padre, Madre o Tutor)
            </h2>
            <p className="text-gray-700 font-['Lora']">
              Requisito obligatorio en caso de que el aspirante sea menor de edad.
            </p>
          </div>
        </div>

        {/* Certificado de Salud */}
        <div className="flex items-start bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full mr-4">
            <HeartPulse size={28} className="text-gray-700" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 font-['Oswald'] mb-1">
              Certificado de Buena Salud (Alumno)
            </h2>
            <p className="text-gray-700 font-['Lora']">
              Emitido por un profesional médico matriculado, acreditando aptitud para la actividad física.
            </p>
          </div>
        </div>

        {/* Electrocardiograma */}
        <div className="flex items-start bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full mr-4">
            <ClipboardCheck size={28} className="text-gray-700" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 font-['Oswald'] mb-1">
              Electrocardiograma (Alumno)
            </h2>
            <p className="text-gray-700 font-['Lora']">
              Estudio médico reciente para certificar la aptitud cardíaca del postulante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
