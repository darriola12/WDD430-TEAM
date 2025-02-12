import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';

const client = await db.connect();

// Nueva función para obtener todos los artistas
async function getArtists() {
  const data = await client.sql`
    SELECT nombre, fecha_nacimiento, pais_origen, total_obras_pintadas, obra_mas_destacada
    FROM artistas
  `;
  return data.rows;
}


