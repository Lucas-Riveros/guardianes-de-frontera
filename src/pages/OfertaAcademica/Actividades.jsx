import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Actividades() {
  return (
    <div className="text-gray-900">
      {/* Hero Parallax */}
      <section
        className="relative h-[70vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/images/img7.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white font-['Oswald'] uppercase drop-shadow-lg text-center">
          Actividades de los Cadetes
        </h1>
      </section>

      {/* Collage de imágenes */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-['Oswald'] uppercase">
          Entrenamiento Integral
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/images/img1.jpg" alt="Orden Cerrado" className="rounded-xl shadow-md object-cover h-48 w-full" />
          <img src="/images/img20.jpg" alt="Circuitos" className="rounded-xl shadow-md object-cover h-48 w-full" />
          <img src="/images/img12.jpg" alt="Defensa Personal" className="rounded-xl shadow-md object-cover h-48 w-full" />
          <img src="/images/img13.jpg" alt="Taekwondo" className="rounded-xl shadow-md object-cover h-48 w-full" />
        </div>
      </section>

      {/* Bloque Parallax con frase */}
      <section
        className="relative h-[50vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/images/img22.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <p className="relative z-10 text-2xl md:text-4xl font-semibold text-white font-['Lora'] italic text-center px-6">
          "Crecimiento personal con fortaleza, ética y vocación."
        </p>
      </section>

      {/* Swiper de imágenes/videos */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 font-['Oswald'] uppercase">
            Experiencias en Acción
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
          >
            <SwiperSlide>
              <video
                className="w-full h-[300px] md:h-[500px] object-cover rounded-xl shadow-md"
                src="/videos/vid5.mp4"
                autoPlay
                muted
                loop
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/img7.jpg"
                alt="Incendio"
                className="w-full h-[300px] md:h-[500px] object-cover rounded-xl shadow-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <video
                className="w-full h-[300px] md:h-[500px] object-cover rounded-xl shadow-md"
                src="/videos/vid6.mp4"
                autoPlay
                muted
                loop
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/img8.jpg"
                alt="Supervivencia"
                className="w-full h-[300px] md:h-[500px] object-cover rounded-xl shadow-md"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Cards informativas */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "RCP y Primeros Auxilios", desc: "Entrenamiento táctico vital para salvar vidas.", img: "/images/img23.jpg" },
          { title: "Andinismo y Tirolesa", desc: "Superando desafíos en la naturaleza.", img: "/images/img19.jpg" },
          { title: "Natación y Rescate", desc: "Preparación para situaciones acuáticas de riesgo.", img: "/images/img11.jpg" },
        ].map((card, i) => (
          <div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
            <img src={card.img} alt={card.title} className="h-48 w-full object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2 font-['Oswald']">{card.title}</h3>
              <p className="font-['Lora'] text-gray-700">{card.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA final con parallax */}
      <section
        className="relative h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/images/img2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-['Oswald'] text-moztaza uppercase drop-shadow-lg">
            ¿Listo para formar parte?
          </h2>
          <a
            href="/contacto"
            className="px-8 py-4 bg-oliva hover:bg-musgo rounded-lg shadow-md text-lg font-semibold uppercase text-white font-['Oswald'] transition"
          >
            Postúlate ahora
          </a>
        </div>
      </section>
    </div>
  );
}
