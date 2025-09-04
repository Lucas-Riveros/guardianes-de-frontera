import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Nosotros() {
    return (
        <main>
            {/* Sección principal de Quiénes Somos */}
            <section id="quienes-somos" className="py-10 md:py-10 mt-20">
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
                            <p className="text-gray-700 leading-relaxed text-lg font-['Lora'] text-justify">
                                La Escuela de Entrenamiento Militar <strong>Guardianes de Frontera</strong> es más que un centro de formación; es un espacio donde se moldea el carácter y se forja el liderazgo. Nuestro compromiso es educar a hombres y mujeres para que sean ciudadanos íntegros, disciplinados y profundamente comprometidos con los valores de nuestra nación. A través de un enfoque que equilibra la excelencia académica con la formación física y moral, preparamos a nuestros cadetes para enfrentar los desafíos del futuro con honor y responsabilidad.
                            </p>
                        </div>
                        <div>
                            <img src="/images/img13.jpg" alt="Cadetes en formación" className="rounded-xl shadow-lg w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Misión, Visión y Valores (con cambios) */}
            <section id="mision-vision-valores" className="py-10 md:py-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    {/* Contenedor del Swiper */}
                    <div className="order-2 md:order-1 w-full h-full overflow-hidden">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            loop
                            spaceBetween={20}
                            slidesPerView={1}
                        >
                            <SwiperSlide>
                                <img
                                    src="/images/img10.jpg"
                                    alt="Imagen 1"
                                    className="w-full h-auto object-cover rounded-xl shadow-md"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="/images/img15.jpg"
                                    alt="Imagen 2"
                                    className="w-full h-auto object-cover rounded-xl shadow-md"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="/images/img12.jpg"
                                    alt="Imagen 3"
                                    className="w-full h-auto object-cover rounded-xl shadow-md"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="/images/img17.jpg"
                                    alt="Imagen 4"
                                    className="w-full h-auto object-cover rounded-xl shadow-md"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="/images/img14.jpg"
                                    alt="Imagen 5"
                                    className="w-full h-auto object-cover rounded-xl shadow-md"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    {/* Texto de Misión, Visión y Valores */}
                    <div className="order-1 md:order-2 text-justify">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase text-gray-800 font-['Oswald']">
                            Nuestros Pilares Fundamentales
                        </h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-green-700 mb-2 font-['Oswald']">Misión: Nuestro Propósito</h3>
                            <p className="text-lg text-justify leading-relaxed text-gray-700 font-['Lora']">
                                Formar cadetes con la más alta excelencia académica y militar, inculcando liderazgo, disciplina y compromiso con la patria.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-green-700 mb-2 font-['Oswald']">Visión: Nuestro Futuro</h3>
                            <p className="text-lg leading-relaxed text-gray-700 font-['Lora']">
                                Ser una institución referente en la formación de líderes militares, reconocida a nivel nacional por excelencia académica y disciplina.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-green-700 mb-2 font-['Oswald']">Valores: Lo Que Nos Define</h3>
                            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg text-gray-700 font-['Lora']">
                                <li className="flex items-center space-x-2"><span className="text-green-700 font-bold">✓</span><span>Disciplina</span></li>
                                <li className="flex items-center space-x-2"><span className="text-green-700 font-bold">✓</span><span>Liderazgo</span></li>
                                <li className="flex items-center space-x-2"><span className="text-green-700 font-bold">✓</span><span>Compromiso</span></li>
                                <li className="flex items-center space-x-2"><span className="text-green-700 font-bold">✓</span><span>Honestidad</span></li>
                                <li className="flex items-center space-x-2"><span className="text-green-700 font-bold">✓</span><span>Respeto</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* Sección de Historia */}
            <section
                id="historia"
                className="py-20 md:py-15 relative bg-gray-100 bg-fixed bg-cover bg-center"
            >

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase font-['Oswald']">
                        Nuestra Trayectoria: Un Legado de Honor
                    </h2>
                    <p className="text-lg text-justify leading-relaxed mb-4 font-['Lora']">
                        Nacimos con el firme propósito de fortalecer los valores patrióticos y preparar a las nuevas generaciones para servir a la nación con el más alto honor.
                    </p>
                    <p className="text-lg text-justify leading-relaxed font-['Lora']">
                        Cada cadete que pasa por nuestras filas se convierte en parte de un legado de disciplina, sacrificio y vocación de servicio. Continuamos adaptándonos a los desafíos modernos sin perder la esencia que nos define.
                    </p>
                </div>
            </section>
        </main>
    );
}