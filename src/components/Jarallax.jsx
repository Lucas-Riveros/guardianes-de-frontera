import { useEffect } from "react";
import { jarallax } from "jarallax";

export default function JarallaxSection() {
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.4,
    });
  }, []);

  return (
    <section className="relative h-[400px] overflow-hidden">
      <div
        className="jarallax h-full w-full"
        data-jarallax
        data-speed="0.4"
        style={{ height: "100%" }}
      >
        <img
          className="jarallax-img object-cover"
          src="/images/placeholder1.jpg"
          alt="Parallax fondo militar"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-4xl md:text-6xl text-white font-bold drop-shadow-lg">
          Liderazgo y Disciplina
        </h2>
      </div>
    </section>
  );
}
