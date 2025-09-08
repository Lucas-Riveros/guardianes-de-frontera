import React from 'react';
import { BookOpen, Waves, HeartPulse, ClipboardList, Sword, Tent, Footprints, Hand, Crosshair, Dog, Compass, Languages, Target } from "lucide-react";
import Certificados from './Certificados';

export default function InformacionGeneral() {
  return (
    <>
      {/* Sección 1: Introducción y Quiénes Somos */}
      <section className="max-w-6xl mx-auto px-6 py-5 md:py-5 mt-15 text-gray-800">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-4 text-gray-900 font-['Oswald']">
            Formación Integral: Nuestro Compromiso
          </h1>
          <p className="text-lg md:text-xl text-justify text-gray-600 max-w-3xl mx-auto font-['Lora']">
            En la Escuela de Entrenamiento Militar "Guardianes de Frontera", nuestra oferta no es solo educativa, es un proyecto de vida. Te invitamos a conocer el camino que te transformará en un líder con disciplina, carácter y un profundo sentido de servicio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase text-gray-800 font-['Oswald']">
              Una Experiencia de Transformación
            </h2>
            <p className="text-gray-700 text-justify leading-relaxed text-lg font-['Lora'] mb-6">
              Nuestra escuela es una sociedad dedicada a fortalecer el carácter a través de actividades de alto impacto, circuitos de entrenamiento y orden cerrado. Cada desafío está diseñado para llevarte a tus límites, forjando una personalidad resiliente, entregada y fuerte. Los entrenamientos se clasifican por niveles, aumentando progresivamente en intensidad y resistencia, promoviendo el crecimiento constante del alumno.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg font-['Lora']">
              Esta experiencia está dirigida a:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 font-['Lora'] mt-2">
              <li>Niños de 6 a 12 años (Categoría Aspirantes)</li>
              <li>Adolescentes de 13 a 17 años (Categoría Cadetes)</li>
              <li>Jóvenes de 18 a 25 años (Categoría Postulantes)</li>
              <li>Adultos (Curso de Auxiliar Instructor)</li>
            </ul>
          </div>
          <div className="order-first md:order-last">
            <img
              src="/images/img22.jpg"
              alt="Cadetes en una actividad de entrenamiento"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Sección 2: Objetivos y Contenido Académico */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-10">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-center mb-12 text-gray-800 font-['Oswald']">
          Un Plan de Estudios para la Vida
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Objetivos */}
          <div className="bg-green-50 p-8 rounded-xl shadow-lg border-l-4 border-oliva">
            <h3 className="text-xl font-semibold text-oliva font-['Oswald'] flex items-center mb-4">
              <Target size={24} className="mr-2" />
              Nuestros Objetivos
            </h3>
            <ul className="text-gray-700 space-y-3 font-['Lora'] text-sm">
              <li className="flex items-start">
                <span className="text-green-700 mr-2 mt-1">✓</span>
                <p>
                  <span className="font-bold text-gray-900">Fomentar el liderazgo:</span> Capacitamos para la toma de decisiones bajo presión y con precisión.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 mr-2 mt-1">✓</span>
                <p>
                  <span className="font-bold text-gray-900">Promover la educación:</span> Complementamos la formación obligatoria con una educación integral.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 mr-2 mt-1">✓</span>
                <p>
                  <span className="font-bold text-gray-900">Incentivar el servicio:</span> Fomentamos la vocación y el servicio a la sociedad o a las fuerzas de seguridad.
                </p>
              </li>
            </ul>
          </div>

          {/* Contenido Académico */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-gray-400">
            <h3 className="text-xl font-semibold text-gray-900 font-['Oswald'] flex items-center mb-4">
              <BookOpen size={24} className="mr-2" />
              Áreas de Formación
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 font-['Lora'] text-sm">
              <ul className="space-y-2">
                <li className="flex items-center"><ClipboardList size={18} className="text-oliva mr-2" /> Orden Cerrado</li>
                <li className="flex items-center"><Sword size={18} className="text-oliva mr-2" /> Tácticas y Defensa Personal</li>
                <li className="flex items-center"><Waves size={18} className="text-oliva mr-2" /> Natación</li>
                <li className="flex items-center"><HeartPulse size={18} className="text-oliva mr-2" /> RCP y Primeros Auxilios</li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center"><Tent size={18} className="text-oliva mr-2" /> Supervivencia</li>
                <li className="flex items-center"><Footprints size={18} className="text-oliva mr-2" /> Taekwondo</li>
                <li className="flex items-center"><Hand size={18} className="text-oliva mr-2" /> Lengua de Señas</li>
                <li className="flex items-center"><Crosshair size={18} className="text-oliva mr-2" /> Tiro</li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center"><Dog size={18} className="text-oliva mr-2" /> Entrenamiento con Canes</li>
                <li className="flex items-center"><Compass size={18} className="text-oliva mr-2" /> Orientación Vocacional</li>
                <li className="flex items-center"><Languages size={18} className="text-oliva mr-2" /> Inglés</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Certificados a ancho completo */}
      <section>
        <Certificados />
      </section>
    </>
  );
}
