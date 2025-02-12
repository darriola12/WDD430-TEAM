
<<<<<<< Updated upstream
import React from "react";
import Navbar from "./navbar"; // Adjust the import path.

export default function HomeContent() {
  const handleExploreClick = () => {
    // Handle the explore button click (e.g., navigate to another page, or show more content).
    console.log("Explore button clicked!");
};
=======
// import Navbar from "./ui/navbar";
import  Card from "./components/artistsRandom";
import { getArtists} from '@/app/lib/data';
import Hero from './components/hero';
>>>>>>> Stashed changes

export default  async function HomeContent() {
  const artists = await getArtists();
  return (
    <div className="flex flex-col">
      
      <div className="flex flex-wrap justify-center gap-4">
        <Hero />
        {artists.map((artist) => (
          <Card
            key={artist.id}  // Ensure the key is unique (id)
            nombre={artist.nombre}
            fecha_nacimiento={new Date(artist.fecha_nacimiento).toLocaleDateString()}  // Format the date
            pais_origen={artist.pais_origen}
            total_obras_pintadas={artist.total_obras_pintadas}
            obra_mas_destacada={artist.obra_mas_destacada}
          />
        ))}
      </div>
      
    </div>
  );
}
