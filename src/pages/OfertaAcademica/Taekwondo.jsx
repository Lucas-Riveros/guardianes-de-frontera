import React from "react";
import {
  Check,
  Shield,
  GraduationCap,
  Target,
  Activity,
  Dumbbell,
  Sword,
  ShieldCheck,
  StretchHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Taekwondo() {
  return (
    <main className="text-gray-800">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/img49.jpg"
          alt="Taekwondo en acción"
          className="absolute mt-20 inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-hueso px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold font-['Oswald'] uppercase drop-shadow-lg text-moztaza">
            Taekwondo
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-['Lora'] italic text-white">
            “El arte de los pies y las manos, forjando cuerpo, mente y espíritu”
          </p>
        </div>
      </section>

      {/* Filosofía y Origen */}
      <section className="py-10 mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-['Oswald'] uppercase mb-6 text-musgo-dark">
            Filosofía y Origen
          </h2>
          {/* Separador visual */}
          <div className="w-20 h-1 bg-gray-400 mx-auto mb-10"></div>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 italic">
            El Taekwondo, cuyo nombre significa "El Arte de los Pies y Las Manos", es una disciplina de origen coreano. Más que un deporte, busca fortalecer la mente y el espíritu de sus practicantes, inculcando una filosofía de vida basada en la superación, el perfeccionamiento, el trabajo duro y la humildad.
          </p>
          <a
            href="/actividades"
            className="block mt-10 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
          >
            <video
              src="/videos/vid18.mp4"
              className="w-full h-100 object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </a>
        </div>
      </section>

      {/* Principios Fundamentales */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-['Oswald'] uppercase mb-12 text-moztaza-dark">
            Principios Fundamentales
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 italic mb-10">
            Esta disciplina se rige por cinco principios heredados de la cultura asiática, que son de conocimiento y práctica obligatoria para todos los estudiantes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Cortesía",
              "Integridad",
              "Perseverancia",
              "Autocontrol",
              "Espíritu Indomable",
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-oliva text-hueso p-6 rounded-2xl shadow-md font-bold text-lg uppercase flex items-center justify-center text-center"
              >
                {p}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programa de Entrenamiento */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-['Oswald'] uppercase mb-12 text-center text-musgo-dark">
            Nuestro Programa de Entrenamiento
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-700 mb-10">
            El entrenamiento en la Escuela “Guardianes de Frontera” es integral, combinando la disciplina con el acondicionamiento físico y las técnicas de combate.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Saludo y Cierre",
                desc: "Cada sesión de entrenamiento inicia y finaliza con un saludo ceremonial, una reverencia de 70 grados que fomenta el respeto y la disciplina.",
              },
              {
                icon: Dumbbell,
                title: "Acondicionamiento Físico",
                desc: "Ejercicios pliométricos como Jumping Jacks, Box Jumps y Jumping Lunges que desarrollan movimientos explosivos, potencia y agilidad.",
              },
              {
                icon: ShieldCheck,
                title: "Fuerza y Resistencia",
                desc: "Rutinas con abdominales para fortalecer el 'core' y flexiones de brazo para el tren superior. También se incluye carrera con trote ligero y rápido para mejorar la capacidad cardiovascular.",
              },
              {
                icon: Sword,
                title: "Técnicas de Combate",
                desc: "Se practican golpes de puño (Apchumok, dobles y con giro) y patadas básicas (Ap, Yop, Dollyo, Bandal, Dwit Chagui) con un enfoque en la técnica y la potencia.",
              },
              {
                icon: Shield,
                title: "Defensa Personal",
                desc: "Los estudiantes aprenden técnicas defensivas contra golpes de puño, con contraataques controlados y lances al suelo, siempre con seguridad y sin contacto real.",
              },
              {
                icon: StretchHorizontal,
                title: "Elongación",
                desc: "Se realizan estiramientos dinámicos y estáticos antes y después de cada clase para mejorar la flexibilidad y prevenir lesiones, especialmente en caderas e isquiotibiales.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 text-center"
              >
                <item.icon className="mx-auto w-10 h-10 text-moztaza mb-4" />
                <h3 className="font-bold text-xl mb-3 text-musgo">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sistema de Graduación */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-['Oswald'] uppercase mb-6 text-musgo-dark">
            Sistema de Graduación
          </h2>
          <div className="w-20 h-1 bg-moztaza mx-auto mb-10"></div>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 italic">
            La progresión en el Taekwondo se divide en grados <strong>GUP </strong> (cinturones de colores) y grados <strong>DAN </strong> (cinturón negro).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <h3 className="font-bold text-xl mb-3 text-musgo">Cinturones de Colores (GUP)</h3>
              <p className="text-gray-700 leading-relaxed">
                Representan el inicio y el desarrollo de los fundamentos del Taekwondo. Los estudiantes avanzan a través de exámenes que demuestran su dominio de las técnicas básicas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <h3 className="font-bold text-xl mb-3 text-musgo">Cinturón Negro (DAN)</h3>
              <p className="text-gray-700 leading-relaxed">
                Simboliza la madurez y maestría en la disciplina. Los exámenes de graduación son tomados por maestros de 4º Dan o superior, con la presencia de padres y representantes de la federación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-['Oswald'] uppercase mb-6 text-musgo-dark">
            Requisitos para la Práctica
          </h2>
          <div className="w-20 h-1 bg-moztaza mx-auto mb-10"></div>
          <ul className="space-y-4 text-lg text-gray-700">
            {[
              "Certificación médica obligatoria",
              "Autorización de padres/tutores si es menor de edad",
              "Uso de uniforme o equipo reglamentario",
            ].map((req, i) => (
              <li
                key={i}
                className="flex items-center p-4 bg-white rounded-xl shadow-md gap-3"
              >
                <Check className="text-moztaza w-6 h-6" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Beneficios y Objetivos */}
      <section className="py-16 bg-musgo text-hueso">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-['Oswald'] uppercase mb-10 text-center">
            Beneficios y Objetivos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Formación Integral",
                desc: "El taekwondo busca formar a sus practicantes para que sean “hombres y mujeres de bien”, inculcando valores sólidos para la vida.",
                icon: GraduationCap,
              },
              {
                title: "Defensa Personal",
                desc: "Los practicantes adquieren destrezas físicas y una formación psicológica para manejar situaciones de agresión de manera segura y controlada.",
                icon: Shield,
              },
              {
                title: "Preparación para la Vida",
                desc: "La disciplina y perseverancia que se desarrollan en el Taekwondo preparan a los jóvenes para enfrentar los desafíos y forjarse un futuro mejor.",
                icon: Target,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-oliva p-6 rounded-2xl shadow-md text-center"
              >
                <item.icon className="mx-auto w-10 h-10 text-moztaza mb-4" />
                <h3 className="font-bold text-xl mb-4 font-['Oswald'] uppercase">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}