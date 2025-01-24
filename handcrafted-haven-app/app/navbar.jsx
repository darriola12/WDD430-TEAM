"use client"; // Mark this file as a client component

import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Handcrafted Haven</div>

        {/* Hamburger Menu (Visible on small screens) */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-gray-800 sm:static sm:flex sm:space-x-4 sm:w-auto transition-all duration-300 ease-in-out`}
        >
          <li className="border-b border-gray-700 sm:border-none">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-700 sm:hover:bg-transparent sm:hover:underline"
            >
              Home
            </a>
          </li>
          <li className="border-b border-gray-700 sm:border-none">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-700 sm:hover:bg-transparent sm:hover:underline"
            >
              Sellers
            </a>
          </li>
          <li className="border-b border-gray-700 sm:border-none">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-700 sm:hover:bg-transparent sm:hover:underline"
            >
              Products
            </a>
          </li>
          <li className="border-b border-gray-700 sm:border-none">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-700 sm:hover:bg-transparent sm:hover:underline"
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
