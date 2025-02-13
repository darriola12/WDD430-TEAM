export default function Card({
  nombre,
  fecha_nacimiento,
  pais_origen,
  total_obras_pintadas,
  obra_mas_destacada,
}: {
  nombre: string;
  fecha_nacimiento: string;
  pais_origen: string;
  total_obras_pintadas: number;
  obra_mas_destacada: string;
}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 w-80">
      <h2 className="text-xl font-bold text-gray-800">{nombre}</h2>
      <p className="text-gray-600">📅 Nacimiento: {fecha_nacimiento}</p>
      <p className="text-gray-600">🌎 País: {pais_origen}</p>
      <p className="text-gray-600">🎨 Obras pintadas: {total_obras_pintadas}</p>
      <p className="text-gray-700 font-semibold">
        🖼️ Obra destacada: {obra_mas_destacada}
      </p>
    </div>
  );
}
