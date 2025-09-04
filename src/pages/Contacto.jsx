import { Phone, Mail, MapPin } from "lucide-react";
import Requisitos from "../components/Requisitos";

export default function Contacto() {
  return (
    <section id="contacto" className="py-30 scroll-mt-10 bg-blanco">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-musgo mb-3 font-['Oswald'] uppercase tracking-wide">
            Contacto
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto font-['Lora']">
            Unite a la <strong>Escuela de Entrenamiento Militar Guardianes de Frontera </strong>  
            y comenzá tu camino de disciplina, liderazgo y fortaleza.
          </p>
        </div>

        {/* Grid: Formulario + Datos */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Formulario */}
          <form className="bg-white shadow rounded-2xl p-8 space-y-6 border border-gray-200">
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-musgo mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre completo"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-mostaza focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-musgo mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-mostaza focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-musgo mb-1">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                placeholder="Escribe tu consulta aquí..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-mostaza focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-oliva hover:bg-musgo text-white font-semibold rounded-lg shadow-md transition-colors"
            >
              Enviar mensaje
            </button>
          </form>

          {/* Datos de contacto */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-moztaza" />
              <p className="text-gray-700 text-sm md:text-base">Clorinda-Formosa, Argentina</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-moztaza" />
              <a href="tel:+54-3718653578" className="text-gray-700 hover:text-oliva text-sm md:text-base">
                +54 3718653578
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-moztaza" />
              <a href="mailto:escuelaguardianesdefrontera@gmail.com" className="text-gray-700 hover:text-oliva text-sm md:text-base">
                escuelaguardianesdefrontera@gmail.com
              </a>
            </div>

            {/* Card destacada */}
            <div className="mt-6 bg-oliva text-blanco p-6 rounded-2xl shadow-lg">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2 font-['Oswald']">
                ¿Listo para unirte?
              </h3>
              <p className="text-white text-sm md:text-base mb-4 font-['Lora']">
                Postúlate y comenzá a forjar tu camino de liderazgo y disciplina.
              </p>
              <a
                href="https://wa.me/543718653578"
                target="_blank"
                className="inline-block bg-moztaza hover:bg-moztaza-dark text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors"
              >
                Consulta por WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <Requisitos />
      </div>
    </section>
  );
}
