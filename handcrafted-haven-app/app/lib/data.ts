import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getArtists() {
  try {
    const data = await sql`
      SELECT nombre, fecha_nacimiento, pais_origen, total_obras_pintadas, obra_mas_destacada
      FROM artistas
      LIMIT 3
    `;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch artists data.');
  }
}
