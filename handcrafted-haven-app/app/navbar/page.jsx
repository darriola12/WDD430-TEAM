"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center bg-black bg-opacity-30 text-white p-6 backdrop-blur-md shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide">Handcrafted Haven</h1>
        <div className="space-x-8">
          <Link href="/" className="hover:text-gray-300 transition-colors duration-200">
            Home
          </Link>
          <Link href="/sellers" className="hover:text-gray-300 transition-colors duration-200">
            Sellers
          </Link>
          <Link href="/products" className="hover:text-gray-300 transition-colors duration-200">
            Products
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors duration-200">
            About Us
          </Link>
        </div>
      </nav>

      {/* Main Content (Welcome Text, Cards & Button) */}
      <div className="flex flex-grow flex-col justify-center items-center text-center p-8">
        {/* Welcome Message */}
        <h2 className="text-4xl font-bold text-white mb-8">
          Welcome to Handcrafted Haven!
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="text-gray-200 text-lg">
              War creativiteit tot leven komt
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="text-gray-200 text-lg">
              Discover the beauty of handcrafted art, made with love and creativity
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="text-gray-200 text-lg">
              Hecho para Ti No lo dudes
            </p>
          </div>
        </div>

        {/* Explore Button (Closer to Cards) */}
        <div className="mt-10">
          <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors duration-200 shadow-lg">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}