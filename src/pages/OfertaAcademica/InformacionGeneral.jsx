import React from 'react';
import { ShieldCheck, Target, Users, BookOpen, HeartPulse, Sparkles, Scale, Handshake, Waves } from 'lucide-react';

export default function InformacionGeneral() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-30 md:py-30 text-gray-800">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-4 text-gray-900 font-['Oswald']">
          Formación Integral: Nuestro Compromiso
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Lora']">
          En la Escuela de Entrenamiento Militar "Guardianes de Frontera", nuestra oferta no es solo educativa, es un proyecto de vida. Te invitamos a conocer el camino que te transformará en un líder con disciplina, carácter y un profundo sentido de servicio.
        </p>
      </div>

      {/* Sección 1: Quiénes Somos y a Quiénes nos Dirigimos */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase text-gray-800 font-['Oswald']">
            Una Experiencia de Transformación
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg font-['Lora'] mb-6">
            Nuestra escuela es una sociedad dedicada a fortalecer el carácter a través de actividades de alto impacto, circuitos de entrenamiento y orden cerrado. Cada desafío está diseñado para llevarte a tus límites, forjando una personalidad resiliente, entregada y fuerte. Los entrenamientos se clasifican por niveles, aumentando progresivamente en intensidad y resistencia, promoviendo el crecimiento constante del alumno.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg font-['Lora']">
            Esta experiencia está dirigida a:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 font-['Lora'] mt-2">
            <li>Niños de 6 a 12 años (Categoría Aspirantes)</li>
            <li>Adolescentes de 13 a 17 años (Categoría Cadetes)</li>
            <li>Jóvenes de 18 a 25 años (Categoría Postulantes)</li>
            <li>Adultos (Curso de Auxiliar Instructor)</li>
          </ul>
        </div>
        <div className="order-first md:order-last">
          <img src="/images/placeholder1.jpg" alt="Cadetes en una actividad de entrenamiento" className="rounded-xl shadow-lg w-full" />
        </div>
      </div>

      {/* Sección 2: Oportunidades y Certificaciones */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <img src="/images/placeholder2.jpg" alt="Cadetes recibiendo diplomas de certificación" className="rounded-xl shadow-lg w-full" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase text-gray-800 font-['Oswald']">
            Certificados con Validez Nacional
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg font-['Lora'] mb-6">
            Nuestra formación no solo se enfoca en el desarrollo personal, sino también en brindar herramientas profesionales con respaldo oficial. Al culminar el proceso, nuestros alumnos pueden obtener certificaciones que potencian su futuro:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 font-['Lora']">
            <li>Auxiliar Brigadista</li>
            <li>RCP y Primeros Auxilios Tácticos</li>
            <li>Instructor de Full Contact (por la C.A.T., Confederación Argentina de Taekwondo)</li>
          </ul>
          <p className="text-sm text-gray-500 italic mt-4 font-['Lora']">
            *La Escuela otorga títulos certificados en RCP y Primeros Auxilios Tácticos, y la C.A.T. respalda el título de Instructor en Full Contact.*
          </p>
        </div>
      </div>

      {/* Sección 3: Objetivos y Contenido Académico */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-center mb-10 text-gray-800 font-['Oswald']">
          Un Plan de Estudios para la Vida
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Objetivos */}
          <div className="bg-green-50 p-8 rounded-xl shadow-lg border-l-4 border-green-700">
            <h3 className="text-xl font-semibold text-green-900 font-['Oswald'] flex items-center mb-4">
              <Target size={24} className="mr-2" />
              Nuestros Objetivos
            </h3>
            <ul className="text-gray-700 space-y-3 font-['Lora'] text-sm">
              <li className="flex items-start">
                <span className="text-green-700 mr-2 mt-1">✓</span>
                <p>
                  <span className="font-bold text-gray-900">Fomentar el liderazgo:</span>{" "}
                  Capacitamos para la toma de decisiones bajo presión y con precisión.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 mr-2 mt-1">✓</span>
                <p>
                  <span className="font-bold text-gray-900">Promover la educación:</span>{" "}
                  Complementamos la formación obligatoria con una educación integral.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 mr-2 mt-1">✓</span>
                <p>
                  <span className="font-bold text-gray-900">Incentivar el servicio:</span>{" "}
                  Fomentamos la vocación y el servicio a la sociedad o a las fuerzas de seguridad.
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
                <li className="flex items-center"><ShieldCheck size={18} className="text-green-700 mr-2" /> Orden Cerrado</li>
                <li className="flex items-center"><Users size={18} className="text-green-700 mr-2" /> Tácticas y Defensa Personal</li>
                <li className="flex items-center"><Waves size={18} className="text-green-700 mr-2" /> Natación</li>
                <li className="flex items-center"><HeartPulse size={18} className="text-green-700 mr-2" /> RCP y Primeros Auxilios</li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center"><Sparkles size={18} className="text-green-700 mr-2" /> Supervivencia</li>
                <li className="flex items-center"><Scale size={18} className="text-green-700 mr-2" /> Taekwondo</li>
                <li className="flex items-center"><Handshake size={18} className="text-green-700 mr-2" /> Lengua de Señas</li>
                <li className="flex items-center"><ShieldCheck size={18} className="text-green-700 mr-2" /> Tiro</li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center"><ShieldCheck size={18} className="text-green-700 mr-2" /> Entrenamiento con Canes</li>
                <li className="flex items-center"><ShieldCheck size={18} className="text-green-700 mr-2" /> Orientación Vocacional</li>
                <li className="flex items-center"><ShieldCheck size={18} className="text-green-700 mr-2" /> Inglés</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}