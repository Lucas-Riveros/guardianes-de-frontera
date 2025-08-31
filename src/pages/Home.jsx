import Carreras from "../components/Carreras";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="text-gray-900">
      {/* Hero */}
      <Hero />

      {/* Bienvenida */}
      <section id="bienvenida" className="py-20 bg-gray-100 relative">
        <div className="max-w-5xl mx-auto text-center px-6">
          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-wide text-gray-900 font-['Oswald']">
            Bienvenidos a Guardianes de Frontera
          </h1>

          {/* Subtítulo */}
          <h2 className="text-xl md:text-2xl font-medium mb-8 text-gray-700 italic font-['Lora']">
            Forjamos hombres y mujeres preparados para los desafíos del futuro
          </h2>

          {/* Divider estético */}
          <div className="w-24 h-1 bg-green-700 mx-auto mb-10 rounded-full"></div>

          {/* Texto principal */}
          <p className="text-lg leading-relaxed text-gray-800 max-w-4xl mx-auto font-['Lora']">
            Es un honor darles la bienvenida a la <span className="font-semibold">Escuela de Entrenamiento Militar Guardianes de Frontera</span>,
            un espacio dedicado a la formación integral de nuestros futuros líderes.
            Aquí se cultivan la <span className="font-semibold">disciplina, el espíritu de equipo y el amor a la Patria</span>,
            valores que constituyen los pilares de nuestra institución.
            <br /><br />
            Nuestra misión es brindar una <span className="font-semibold">preparación académica y profesional de excelencia</span>,
            complementada con un entrenamiento militar riguroso. De este modo, cada cadete adquiere las competencias necesarias
            para enfrentar con determinación y resiliencia los retos de un mundo en constante transformación,
            manteniendo siempre el honor y la tradición que caracterizan a nuestras Fuerzas.
          </p>
        </div>
      </section>

      {/* Carreras */}
      <Carreras />

      {/* Sección Redes Sociales */}
      <section id="redes" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-wide text-center font-['Oswald']">
            Nuestras Redes
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto font-['Lora']">
            Seguinos en nuestras redes sociales para estar al día con las últimas actividades, noticias y logros de nuestros cadetes.
          </p>

          {/* Grid 2 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Columna Instagram */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 font-['Oswald']">Instagram</h3>
              <div className="w-full flex justify-center">
                <iframe
                  src="https://www.instagram.com/galacticboy_21/embed"
                  width="8000"
                  height="500"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  className="rounded-xl shadow-lg"
                ></iframe>
              </div>
            </div>

            {/* Columna Facebook */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 font-['Oswald']">Facebook</h3>
              <div className="w-full flex justify-center">
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flucasgonzalo.riveros%2Fposts%2F1320881204620390%3A800194651236953&show_text=false&width=1500"
                  height="500"
                  width="1500"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="rounded-xl shadow-lg"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-['Oswald'] text-white uppercase drop-shadow-lg">
            ¿Listo para dar el siguiente paso?
          </h2>
          <a
            href="/Contacto"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg shadow-md text-lg font-semibold uppercase font-['Oswald'] transition"
          >
            Postúlate ahora
          </a>
        </div>
      </section>
    </main>
  );
}