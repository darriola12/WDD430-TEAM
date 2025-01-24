"use client"; // Mark this file as a client component

import React from "react";
import Navbar from "./navbar"; // Adjust the import path.

export default function HomeContent() {
  const handleExploreClick = () => {
    // Handle the explore button click (e.g., navigate to another page, or show more content).
    console.log("Explore button clicked!");
  };

  return (
    <div
      style={{
        backgroundImage: "url('/DALL·E 2025-01-24 06.02.41 - A beautiful, handcrafted wooden sculpture of a tree, with intricate details on the bark and branches, showcasing natural textures and patterns. The sc.webp  ')", // Background image for the page.
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="flex flex-col"
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow p-8">
        <h1 className="text-center text-3xl font-bold text-white mb-8">
          Welcome to Handcrafted Haven!
        </h1>

        {/* Horizontal Works Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-5xl">
          {/* Work 1 */}
          <div className="p-6 text-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md">
            <p className="text-white mt-2">
             waar creativiteit tot leven komt
            </p>
          </div>

          {/* Work 2 */}
          <div className="p-6 text-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md">
            <p className="text-white mt-2">              
            discover the beauty of handcrafted at, made with love and ceactivity
            </p>
          </div>

          {/* Work 3 */}
          <div className="p-6 text-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md">
            <p className="text-white mt-2">
              Hecho para Ti, No lo dues
            </p>
          </div>
        </div>

        {/* Explore Button with Light Background */}
        <div className="mt-8">
          <button
            onClick={handleExploreClick}
            className="text-4xl font-bold text-black bg-white bg-opacity-70 hover:bg-opacity-100 px-8 py-4 rounded-lg shadow-md transition duration-300"
          >
            Explore
          </button>
        </div>
      </main>
    </div>
  );
}
