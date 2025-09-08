import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom"; // 👈 Importar Link

import {
  Dumbbell,
  Flame,
  Mountain,
  HeartPulse,
  Languages,
  Dog,
  Crosshair,
  Route,
  Sword,
  Footprints,
  Tent,
  Map,
  Hand,
  Waves,
} from "lucide-react";

export default function Carreras() {
  const carreras = [
    {
      title: "Auxiliar de Brigadista",
      desc: "Capacitación integral en búsqueda, rescate y apoyo en situaciones de emergencia. Aprenderás técnicas de intervención rápida, uso de equipamiento y trabajo en equipo en contextos de riesgo.",
      img: "/images/img23.jpg",
      link: "/oferta-académica/auxiliar-brigadista",
    },
    {
      title: "Primeros Auxilios Tácticos",
      desc: "Entrenamiento especializado en atención médica inmediata en situaciones críticas. Ideal para quienes desean actuar en escenarios de riesgo con protocolos de asistencia rápida y eficaz.",
      img: "/images/img57.jpg",
      link: "/oferta-académica/primeros-auxilios",
    },
    {
      title: "Auxiliar Instructor",
      desc: "Formación en pedagogía, liderazgo y coordinación de entrenamientos. Preparación para guiar y motivar grupos en actividades físicas, tácticas y de supervivencia.",
      img: "/images/img1.jpg",
      link: "/oferta-académica/auxiliar-instructor",
    },
  ];

  const contenidos = [
    { title: "Orden Cerrado", icon: <Dumbbell className="h-10 w-10 text-oliva" /> },
    { title: "Circuitos", icon: <Route className="h-10 w-10 text-gray-800" /> },
    { title: "Tácticas y Defensa Personal", icon: <Sword className="h-10 w-10 text-gray-800" /> },
    { title: "Taekwondo", icon: <Footprints className="h-10 w-10 text-gray-800" /> },
    { title: "Incendio", icon: <Flame className="h-10 w-10 text-gray-800" /> },
    { title: "Supervivencia", icon: <Tent className="h-10 w-10 text-gray-800" /> },
    { title: "Andinismo y Tirolesa", icon: <Mountain className="h-10 w-10 text-gray-800" /> },
    { title: "RCP y Primeros Auxilios", icon: <HeartPulse className="h-10 w-10 text-gray-800" /> },
    { title: "Inglés", icon: <Languages className="h-10 w-10 text-gray-800" /> },
    { title: "Orientación Vocacional", icon: <Map className="h-10 w-10 text-gray-800" /> },
    { title: "Lengua de Señas", icon: <Hand className="h-10 w-10 text-gray-800" /> },
    { title: "Natación", icon: <Waves className="h-10 w-10 text-gray-800" /> },
    { title: "Entrenamiento con Canes", icon: <Dog className="h-10 w-10 text-gray-800" /> },
    { title: "Tiro", icon: <Crosshair className="h-10 w-10 text-gray-800" /> },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 mt-10 text-center">
        {/* Carreras - Flyers */}
        <h2 className="text-xxl md:text-4xl font-['Oswald'] font-bold text-oliva mb-10">
          Carreras y Disciplinas
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {carreras.map((c) => (
            <Link
              key={c.title}
              to={c.link}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={c.img}
                alt={c.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-oliva font-['Oswald'] group-hover:text-musgo transition">
                  {c.title}
                </h3>
                <p className="mt-2 text-gray-600 font-['Lora']">{c.desc}</p>
                <span className="mt-6 inline-block text-musgo font-semibold group-hover:text-oliva transition">
                  Ver más →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Tabla de datos */}
        <h3 className="text-3xl font-bold text-gray-800 mb-6 font-['Oswald']">Requisitos y Detalles</h3>
        <div className="bg-white overflow-x-auto mb-20 rounded-xl shadow-lg">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 border-b text-center font-semibold">Carrera</th>
                <th className="px-6 py-3 border-b text-center font-semibold">Duración</th>
                <th className="px-6 py-3 border-b text-center font-semibold">Edad</th>
                <th className="px-6 py-3 border-b text-center font-semibold">Requisitos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 border-b">Auxiliar de Brigadista</td>
                <td className="px-6 py-4 border-b">1 año</td>
                <td className="px-6 py-4 border-b">16+</td>
                <td className="px-6 py-4 border-b">Apto físico</td>
              </tr>
              <tr>
                <td className="px-6 py-4 border-b">Primeros Auxilios Tácticos</td>
                <td className="px-6 py-4 border-b">6 meses</td>
                <td className="px-6 py-4 border-b">16+</td>
                <td className="px-6 py-4 border-b">Secundario en curso</td>
              </tr>
              <tr>
                <td className="px-6 py-4 border-b">Auxiliar Instructor</td>
                <td className="px-6 py-4 border-b">1 año</td>
                <td className="px-6 py-4 border-b">18+</td>
                <td className="px-6 py-4 border-b">Experiencia previa</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Contenidos - Slider con loop infinito */}
        <h3 className="text-3xl font-bold text-gray-800 mb-6 font-['Oswald']">Contenidos de Formación</h3>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 750, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {contenidos.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="bg-hueso rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                {item.icon}
                <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
