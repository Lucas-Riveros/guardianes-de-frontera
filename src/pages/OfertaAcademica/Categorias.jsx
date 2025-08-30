import { Users, Shield, Award, UserCheck } from "lucide-react";

export default function Categorias() {
  const categorias = [
    {
      title: "Aspirantes",
      rango: "Niños de 6 a 12 años",
      icon: <Users className="h-10 w-10 text-green-600" />,
      desc: "Primeros pasos en disciplina, trabajo en equipo y resiliencia. Formación inicial con actividades adaptadas a su edad."
    },
    {
      title: "Cadetes",
      rango: "Adolescentes de 13 a 17 años",
      icon: <Shield className="h-10 w-10 text-green-600" />,
      desc: "Entrenamiento de mayor intensidad, circuitos tácticos y formación en liderazgo juvenil."
    },
    {
      title: "Postulantes",
      rango: "Jóvenes de 18 a 25 años",
      icon: <Award className="h-10 w-10 text-green-600" />,
      desc: "Entrenamiento avanzado, tácticas militares, supervivencia y preparación para el ingreso a fuerzas."
    },
    {
      title: "Auxiliar Instructor",
      rango: "Adultos",
      icon: <UserCheck className="h-10 w-10 text-green-600" />,
      desc: "Formación pedagógica y técnica para dirigir grupos y coordinar actividades de entrenamiento."
    },
  ];

  return (
    <section id="categorias" className="py-10 scroll-mt-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Categorías
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          La Escuela de Entrenamiento Militar <strong>Guardianes de Frontera </strong> 
          organiza a sus alumnos en categorías según la edad y el nivel de preparación.
        </p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((cat) => (
            <div
              key={cat.title}
              className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{cat.title}</h3>
              <p className="text-green-700 font-medium mb-3">{cat.rango}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
