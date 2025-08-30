import { ClipboardCheck, Ambulance, ShieldCheck, GraduationCap } from "lucide-react";

export default function Certificados() {
  const certificados = [
    {
      title: "Auxiliar Brigadista",
      desc: "Formación en disciplina, orden cerrado y primeros pasos en tácticas de brigadista.",
      icon: <ClipboardCheck className="h-12 w-12 text-green-600" />,
    },
    {
      title: "RCP y Primeros Auxilios Tácticos",
      desc: "Certificación en reanimación cardiopulmonar y protocolos de emergencia táctica.",
      icon: <Ambulance className="h-12 w-12 text-green-600" />,
    },
    {
      title: "Instructor Full Contact",
      desc: "Título avalado por la Confederación Argentina de Taekwondo (C.A.T.).",
      icon: <ShieldCheck className="h-12 w-12 text-green-600" />,
    },
    {
      title: "Instructor Auxiliar",
      desc: "Formación en pedagogía, liderazgo y coordinación de grupos de entrenamiento.",
      icon: <GraduationCap className="h-12 w-12 text-green-600" />,
    },
  ];

  return (
    <section id="certificados" className="py-30 scroll-mt-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Nuestros Certificados
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          La Escuela de Entrenamiento Militar <strong>Guardianes de Frontera</strong> otorga títulos con <span className="text-green-700 font-semibold">validez nacional</span>, avalados por instituciones oficiales y reconocidos en el ámbito militar y de emergencias.
        </p>

        {/* Grid de certificados con diseño de lista */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {certificados.map((cert) => (
            <div
              key={cert.title}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all flex items-start text-left"
            >
              <div className="flex-shrink-0 mr-6">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}