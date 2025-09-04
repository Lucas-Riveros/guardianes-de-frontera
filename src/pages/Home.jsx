import Hero from "../components/Hero";
import InformacionGeneral from "../components/InformacionGeneral";

export default function Home() {
  return (
    <main className="text-gray-900">
      {/* Hero */}
      <Hero />

      {/* Bienvenida */}
      <section id="bienvenida" className="mt-20 relative">
        <div className="max-w-5xl mx-auto text-center px-6">
          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-wide text-gray-900 font-['Oswald']">
            Bienvenidos a Guardianes de Frontera
          </h1>

          {/* Subtítulo */}
          <h2 className="text-xl md:text-2xl font-medium mb-8 text-oliva italic font-['Lora']">
            Forjamos hombres y mujeres preparados para los desafíos del futuro
          </h2>

          {/* Divider estético */}
          <div className="w-24 h-1 bg-moztaza mx-auto mb-10 rounded-full"></div>

          {/* Texto principal */}
          <p className="text-lg text-justify leading-relaxed text-gray-800 max-w-4xl mx-auto font-['Lora']">
            Somos una Sociedad que busca promover el espíritu, fortaleciendo el caracter a través de actividades de <span className="font-semibold">alto impacto, de Circuitos y Orden Cerrado. </span>
            Cada una de las actividades van dirigidas a desafiarse uno mismo, llevando al alumno a limites antes desconocidos.
            Los entrenamientos se clasifican en niveles, aumentando en intensidad y resistencia promoviendo la fortaleza del alumno.
            <span className="font-semibold"> Resiliencia, entrega y fortaleza</span>, son pilares de construcción para promover una personalidad fuerte y sólida.
            Cada desafío es un bloque en construcción de un espíritu fuerte y aguerrido.
            Cada experiencia una nueva oportunidad para someterse a prueba y llegar a niveles impensados.
          </p>
        </div>
      </section>

      {/* Información General */}
      <InformacionGeneral />

      {/* CTA final con imagen parallax */}
      <section
        id="cta"
        className="relative h-[30vh] bg-fixed bg-center bg-cover flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/img15.jpg')" }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Contenido */}
        <div className="relative z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-['Oswald'] text-moztaza uppercase drop-shadow-lg">
            ¿Listo para dar el siguiente paso?
          </h2>
          <a
            href="/Contacto"
            className="px-8 py-4 bg-oliva hover:bg-musgo rounded-lg shadow-md text-lg font-semibold uppercase text-white font-['Oswald'] transition"
          >
            Postúlate ahora
          </a>
        </div>
      </section>
    </main>
  );
}