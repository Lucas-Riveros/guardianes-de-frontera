import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Landing() {
  return (
    <div className="w-full bg-gray-50">

      {/* 1. Intro con swiper */}
      <section className="relative h-screen">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop
          className="h-full"
        >
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: "url('/images/placeholder1.jpg')" }}
            >
              <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase drop-shadow-lg font-['Oswald']">
                Guardianes de Frontera
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full flex items-center justify-center bg-black">
              <h2 className="text-white text-4xl md:text-6xl font-bold font-['Lora']">
                Disciplina, Resiliencia y Liderazgo
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* 2. Video 1 */}
      <section className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/VID1.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h2 className="text-white text-5xl font-bold uppercase font-['Oswald']">
            Disciplina en cada paso
          </h2>
        </div>
      </section>

      {/* 3. Galería de imágenes */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-['Oswald']">
            Actividades que Transforman
          </h2>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <img
                src="/images/placeholder2.jpg"
                alt="Actividad 1"
                className="rounded-xl shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/placeholder3.jpg"
                alt="Actividad 2"
                className="rounded-xl shadow-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* 4. Video 2 */}
      <section className="relative h-[80vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/VID2.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase font-['Oswald']">
            Superando los límites
          </h2>
        </div>
      </section>

      {/* 5. Frases motivadoras con parallax */}
      <section
        className="h-[70vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/images/placeholder1.jpg')" }}
      >
        <h2 className="text-white text-5xl font-extrabold uppercase font-['Oswald'] drop-shadow-lg">
          Formando Guardianes para la Vida
        </h2>
      </section>

      {/* 6. Video 3 */}
      <section className="relative h-[80vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/VID3.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase font-['Oswald']">
            Convertite en un Guardián
          </h2>
        </div>
      </section>

      {/* 7. CTA final */}
      <section className="py-20 bg-green-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6 font-['Oswald']">
          ¿Listo para dar el siguiente paso?
        </h2>
        <button className="px-8 py-4 bg-white text-green-900 font-bold rounded-xl hover:bg-gray-200 transition">
          Inscribite Ahora
        </button>
      </section>
    </div>
  );
}
