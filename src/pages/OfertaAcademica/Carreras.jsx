export default function Carreras() {
  const carreras = [
    { nombre: "Oficial de Infantería", duracion: "4 años", perfil: "Liderazgo en operaciones terrestres." },
    { nombre: "Oficial de Comunicaciones", duracion: "4 años", perfil: "Gestión de sistemas de telecomunicaciones." },
    { nombre: "Oficial de Logística", duracion: "4 años", perfil: "Administración de recursos estratégicos." },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 uppercase tracking-wide text-center">
        Carreras
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {carreras.map((carrera, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{carrera.nombre}</h2>
            <p className="text-gray-600"><strong>Duración:</strong> {carrera.duracion}</p>
            <p className="text-gray-700 mt-2">{carrera.perfil}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
