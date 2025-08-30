import Carreras from "../components/Carreras";

export default function Home() {
  return (
    <main className="text-gray-900">
      {/* Hero */}
      <section id="hero" className="relative h-screen overflow-hidden">
        {/* Video de fondo único */}
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          src="/videos/vid3.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          {/* Texto superior */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-2 drop-shadow-lg font-['Oswald'] uppercase tracking-wide">
            Escuela de Entrenamiento Militar
          </h2>

          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 font-['Oswald'] uppercase leading-tight drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            Guardianes de Frontera
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-2xl mb-8 max-w-3xl font-['Lora'] italic">
            Forjando carácter, disciplina y liderazgo para el futuro
          </p>

          {/* Botón */}
          <a
            href="/Contacto"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-xl font-bold rounded-xl shadow-md font-['Oswald'] uppercase transition"
          >
            Postúlate ahora
          </a>
        </div>
      </section>

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