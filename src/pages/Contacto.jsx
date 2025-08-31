import { Phone, Mail, MapPin } from "lucide-react";

export default function Contacto() {
  return (
    <section id="contacto" className="py-30 scroll-mt-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contacto
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unite a la <strong>Escuela de Entrenamiento Militar Guardianes de Frontera </strong>
            y comenzá tu camino de disciplina, liderazgo y fortaleza.
          </p>
        </div>

        {/* Grid: Formulario + Datos */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Formulario */}
          <form className="bg-white shadow-md rounded-2xl p-8 space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre completo"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                placeholder="Escribe tu consulta aquí..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors"
            >
              Enviar mensaje
            </button>
          </form>

          {/* Datos de contacto */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-green-600" />
              <p className="text-gray-700">Formosa, Argentina</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-green-600" />
              <a href="tel:+54-3718653578" className="text-gray-700 hover:text-green-600">
                +54 3718653578
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-green-600" />
              <a href="mailto:escuelaguardianesdefrontera@gmail.com" className="text-gray-700 hover:text-green-600">
                escuelaguardianesdefrontera@gmail.com

              </a>
            </div>

            <div className="mt-6 bg-green-600 text-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">¿Listo para unirte?</h3>
              <p className="text-sm mb-4">
                Postúlate y comenzá a forjar tu camino de liderazgo y disciplina.
              </p>
              <a
                href="https://wa.me/543718653578"
                target="_blank"
                className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
              >
                Consulta por WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Mapa */}
        <div className="mt-16">
          <iframe
            title="Ubicación Escuela Guardianes de Frontera"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57720.18060077442!2d-57.7466699!3d-25.2870205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945d08c471ba6e83%3A0x8d775f5d68bae58c!2sClorinda%2C%20Formosa!5e0!3m2!1ses!2sar!4v1756574417274!5m2!1ses!2sar"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl shadow-lg"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
