import React from "react";
import { Fade } from "react-awesome-reveal";
import { Dumbbell, Flame, Mountain, HeartPulse, Languages, Dog, Crosshair } from "lucide-react";

export default function PlanEstudio() {
  const contenidos = [
    { title: "Orden Cerrado", icon: <Dumbbell className="h-10 w-10 text-green-600" /> },
    { title: "Circuitos", icon: <Dumbbell className="h-10 w-10 text-green-600" /> },
    { title: "Tácticas y Defensa Personal", icon: <Dumbbell className="h-10 w-10 text-green-600" /> },
    { title: "Taekwondo", icon: <Dumbbell className="h-10 w-10 text-green-600" /> },
    { title: "Incendio", icon: <Flame className="h-10 w-10 text-green-600" /> },
    { title: "Supervivencia", icon: <Mountain className="h-10 w-10 text-green-600" /> },
    { title: "Andinismo y Tirolesa", icon: <Mountain className="h-10 w-10 text-green-600" /> },
    { title: "RCP y Primeros Auxilios Tácticos", icon: <HeartPulse className="h-10 w-10 text-green-600" /> },
    { title: "Inglés", icon: <Languages className="h-10 w-10 text-green-600" /> },
    { title: "Orientación Vocacional", icon: <Languages className="h-10 w-10 text-green-600" /> },
    { title: "Lengua de Señas", icon: <Languages className="h-10 w-10 text-green-600" /> },
    { title: "Natación", icon: <Dumbbell className="h-10 w-10 text-green-600" /> },
    { title: "Entrenamiento con Canes", icon: <Dog className="h-10 w-10 text-green-600" /> },
    { title: "Tiro", icon: <Crosshair className="h-10 w-10 text-green-600" /> },
  ];

  return (
    <section id="contenido" className="py-20 mt-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-['Oswald'] font-bold text-gray-800 mb-4">
          Plan de Estudios
        </h2>
        <p className="text-gray-600 font-['Lora'] max-w-3xl mx-auto mb-12">
          Los entrenamientos abarcan desde la formación física y táctica, hasta
          competencias académicas y habilidades de supervivencia.
          Cada bloque de aprendizaje está diseñado para desarrollar fortaleza integral.
        </p>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contenidos.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all"
            >
              {item.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
