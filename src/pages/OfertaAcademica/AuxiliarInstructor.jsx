import React from "react";

export default function AuxiliarInstructor() {
    return (
        <section className="max-w-6xl mx-auto px-6 mt-15 py-20">
            {/* Encabezado */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold uppercase text-oliva font-['Oswald']">
                    Auxiliar Instructor
                </h1>
                <p className="mt-4 text-gray-700 max-w-3xl mx-auto font-['Lora']">
                    Formación destinada a preparar futuros auxiliares en la enseñanza,
                    brindando herramientas pedagógicas y técnicas para guiar a grupos en
                    diferentes disciplinas.
                </p>
            </div>

            {/* Contenido */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-bold text-musgo font-['Oswald'] mb-2">
                        Objetivos
                    </h2>
                    <p className="text-gray-700 font-['Lora']">
                        Desarrollar competencias en liderazgo, comunicación y didáctica,
                        apoyando al instructor principal en las actividades de formación.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-musgo font-['Oswald'] mb-2">
                        Contenidos
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 font-['Lora']">
                        <li>Metodología de la enseñanza.</li>
                        <li>Planificación de clases.</li>
                        <li>Gestión de grupos.</li>
                        <li>Apoyo en prácticas y entrenamientos.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
