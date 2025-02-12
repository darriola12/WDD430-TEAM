import { db } from "@vercel/postgres";

const client = await db.connect();

export  async function getRandomArtists() {
    const data = await client.sql`
    SELECT fecha_nacimiento, nombre, obra_mas_destacada 
    FROM artistas
    ORDER BY RANDOM() 
    LIMIT 3;
    `;

    return data.rows;
}

export async function GET() {
    try {
      
      const artists = await getRandomArtists(); // Obtener todos los artistas
  
      return Response.json({
        message: 'Database seeded successfully',
        artists, // Enviar los artistas en la respuesta
      });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error: error.message }, { status: 500 });
    }
}