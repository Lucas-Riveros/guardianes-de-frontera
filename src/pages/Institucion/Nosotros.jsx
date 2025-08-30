import React from 'react';

export default function Nosotros() {
  return (
    <main>
      {/* Sección principal de Quiénes Somos */}
      <section id="quienes-somos" className="py-30 md:py-30 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-4 text-gray-900 font-['Oswald']">
              Nosotros
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Lora']">
              Conoce el corazón de nuestra institución: su historia, sus principios y el compromiso que nos define.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase text-gray-800 font-['Oswald']">Forjando Carácter y Liderazgo</h2>
              <p className="text-gray-700 leading-relaxed text-lg font-['Lora']">
                La Escuela de Entrenamiento Militar <strong>Guardianes de Frontera</strong> es más que un centro de formación; es un espacio donde se moldea el carácter y se forja el liderazgo. Nuestro compromiso es educar a hombres y mujeres para que sean ciudadanos íntegros, disciplinados y profundamente comprometidos con los valores de nuestra nación. A través de un enfoque que equilibra la excelencia académica con la formación física y moral, preparamos a nuestros cadetes para enfrentar los desafíos del futuro con honor y responsabilidad.
              </p>
            </div>
            <div>
              <img src="/images/placeholder3.jpg" alt="Cadetes en formación" className="rounded-xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Misión, Visión y Valores */}
      <section id="mision-vision-valores" className="py-20 md:py-15 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img src="/images/placeholder2.jpg" alt="Ceremonia militar" className="rounded-xl shadow-lg w-full" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase text-gray-800 font-['Oswald']">Nuestros Pilares Fundamentales</h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-700 mb-2 font-['Oswald']">Misión: Nuestro Propósito</h3>
              <p className="text-lg leading-relaxed text-gray-700 font-['Lora']">
                Formar cadetes con la más alta excelencia académica y militar, inculcando un fuerte sentido de liderazgo, disciplina y un inquebrantable compromiso con la patria.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-700 mb-2 font-['Oswald']">Visión: Nuestro Futuro</h3>
              <p className="text-lg leading-relaxed text-gray-700 font-['Lora']">
                Convertirnos en una institución referente en la formación de líderes militares, reconocida a nivel nacional por la excelencia de su calidad académica, su férrea disciplina y su profunda vocación de servicio.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-green-700 mb-2 font-['Oswald']">Valores: Lo Que Nos Define</h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg text-gray-700 font-['Lora']">
                <li className="flex items-center space-x-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>Disciplina</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>Liderazgo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>Compromiso</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>Honestidad</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-700 font-bold">✓</span>
                  <span>Respeto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Historia */}
      <section id="historia" className="py-20 md:py-15 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase text-gray-800 font-['Oswald']">Nuestra Trayectoria: Un Legado de Honor</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4 font-['Lora']">
            La Escuela de Entrenamiento Militar <strong>Guardianes de Frontera</strong> nació con el firme propósito de fortalecer los valores patrióticos y preparar a las nuevas generaciones para servir a la nación con el más alto honor. A lo largo de su historia, nuestra institución ha evolucionado y se ha consolidado como un referente en la formación militar, contribuyendo al desarrollo de oficiales altamente capacitados y comprometidos.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 font-['Lora']">
            Cada cadete que pasa por nuestras filas se convierte en parte de un legado de disciplina, sacrificio y vocación de servicio. Continuamos adaptándonos a los desafíos modernos sin perder la esencia que nos define.
          </p>
        </div>
      </section>
    </main>
  );
}