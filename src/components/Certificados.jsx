import { ClipboardCheck, Ambulance, ShieldCheck, GraduationCap } from "lucide-react";

export default function Certificados() {
  const certificados = [
    {
      title: "Auxiliar Brigadista",
      desc: "Formación en disciplina, orden cerrado y primeros pasos en tácticas de brigadista.",
      icon: <ClipboardCheck className="h-12 w-12 text-green-700" />,
    },
    {
      title: "RCP y Primeros Auxilios Tácticos",
      desc: "Certificación en reanimación cardiopulmonar y protocolos de emergencia táctica.",
      icon: <Ambulance className="h-12 w-12 text-green-700" />,
    },
    {
      title: "Instructor en Combat Taekwondo ",
      desc: "Título avalado por la Confederación Argentina de Taekwondo (C.A.T.) y por Kombat Taekwondo.",
      icon: <ShieldCheck className="h-12 w-12 text-green-700" />,
    },
    {
      title: "Instructor Auxiliar",
      desc: "Formación en pedagogía, liderazgo y coordinación de grupos de entrenamiento.",
      icon: <GraduationCap className="h-12 w-12 text-green-700" />,
    },
  ];

  return (
    <section id="certificados" className="py-20 mt-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-['Oswald'] uppercase">
          Nuestros Certificados
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-justify font-['Lora'] text-lg">
          La Escuela de Entrenamiento Militar <strong>Guardianes de Frontera</strong> otorga títulos con <span className="text-green-700 font-semibold">validez nacional</span>, avalados por instituciones oficiales y reconocidos en el ámbito militar y de emergencias.
        </p>

        {/* Grid de certificados */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {certificados.map((cert) => (
            <div
              key={cert.title}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all flex items-center text-left"
            >
              <div className="flex-shrink-0 mr-6">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 font-['Oswald']">{cert.title}</h3>
                <p className="mt-2 text-gray-600 text-sm font-['Lora']">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Logos institucionales */}
        <div className="mt-16 flex justify-center items-center gap-8 flex-wrap">
          {/* Logo 1: Conf. Argentina de Taekwondo */}
          <img
            src="/images/icons/logoCat.webp"
            alt="Logo de la Confederación Argentina de Taekwondo"
            className="w-32 h-32 rounded-full object-contain bg-white p-1 shadow-md"
          />

          {/* Logo 2: Kombat Taekwondo (con fondo negro y aro blanco) */}
          <div className="w-32 h-32 rounded-full overflow-hidden bg-white p-1 shadow-md flex justify-center items-center">
            {/* Contenedor interno para el fondo negro y la imagen */}
            <div className="w-full h-full rounded-full overflow-hidden bg-black flex justify-center items-center">
              <img
                src="/images/icons/logoKombat.jpg"
                alt="Logo de Kombat Taekwondo"
                className="w-full h-auto object-contain transform scale-118"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}