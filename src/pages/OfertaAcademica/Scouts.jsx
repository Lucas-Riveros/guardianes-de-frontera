import { motion } from "framer-motion";
import { Users, HeartHandshake, BookOpenCheck, Handshake, Mountain } from "lucide-react";

export default function Scouts() {
  return (
    <main className="mt-20 text-black">
      {/* Hero con video de fondo */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        <video
          src="/videos/vid11.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-moztaza text-5xl md:text-6xl font-['Oswald'] font-bold uppercase mb-6 drop-shadow-lg">
            Scouts
          </h1>
          <p className="text-lg md:text-xl leading-relaxed drop-shadow-md">
            Un movimiento juvenil internacional que forma líderes, fomenta la amistad y enseña a vivir en armonía con la naturaleza.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['Oswald'] uppercase mb-12 text-musgo-dark">
            Objetivos y Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Desarrollo Personal" },
              { icon: HeartHandshake, title: "Servicio Comunitario" },
              { icon: BookOpenCheck, title: "Educación No Formal" },
              { icon: Handshake, title: "Amistad y Camaradería" },
            ].map(({ icon: Icon, title }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white border-2 border-oliva text-musgo-dark p-8 rounded-2xl shadow-md flex flex-col items-center gap-4 hover:shadow-xl transition"
              >
                <Icon className="w-12 h-12 text-oliva" />
                <h3 className="font-bold uppercase text-lg">{title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Actividades */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-['Oswald'] uppercase text-musgo-dark">
              Actividades Scouts
            </h2>
            <p className="leading-relaxed text-lg">
              Los Scouts disfrutan de experiencias únicas al aire libre,
              desarrollando trabajo en equipo y liderazgo a través de actividades variadas.
            </p>
            <ul className="space-y-3 font-semibold text-gray-700">
              <li>🌲 Campamentos y excursiones en la naturaleza</li>
              <li>⛰️ Actividades de aventura como escalada o kayak</li>
              <li>🤝 Servicio comunitario</li>
              <li>🎉 Reuniones y eventos sociales</li>
            </ul>
          </div>

          {/* Video o imagen */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src="/images/img69.jpg" // Cambia esta ruta por la de tu imagen
              alt="Imagen de actividades scouts"
              className="w-full h-100 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Grupos de Edad */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-['Oswald'] uppercase mb-12 text-oliva">
            Grupos de Edad
          </h2>
          <div className="bg-white grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Lobatos", range: "7-10 años", desc: "Actividades divertidas que fomentan la curiosidad." },
              { title: "Scouts", range: "11-14 años", desc: "Retos que promueven el desarrollo personal y la amistad." },
              { title: "Caminantes", range: "15-17 años", desc: "Actividades avanzadas que desarrollan independencia." },
              { title: "Rovers", range: "18-25 años", desc: "Formación en liderazgo y servicio comunitario." },
            ].map((g, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl shadow-md border-2 border-musgo flex flex-col items-center"
              >
                <h3 className="font-bold text-xl text-musgo-dark">{g.title}</h3>
                <span className="text-m text-gray-600">{g.range}</span>
                <p className="mt-4 text-m">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="relative py-20 text-hueso text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/img24.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-['Oswald'] uppercase mb-6">
            Más que un grupo, una hermandad
          </h2>
          <p className="text-lg">
            El movimiento Scout forma a los jóvenes para que sean ciudadanos comprometidos,
            responsables y solidarios. Una experiencia que deja huella para toda la vida.
          </p>
        </div>
      </section>
    </main >
  );
}