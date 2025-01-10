import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LogoBaru.png';

export default function NavbarRate() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white w-full h-16 flex justify-between items-center px-5 md:px-14 md:h-24">
      {/* Logo di kiri */}
      <div className="flex">
        <img src={Logo} alt="Logo" className="relative h-16 md:h-32" />
      </div>

      {/* Menu Navigasi Desktop */}
      <div className="hidden md:flex md:gap-x-10">
        <Link
          to={'/'}
          className="text-xs md:text-xl font-sans text-slate-700 hover:text-black"
        >
          Home
        </Link>
        <Link
          to={'/menu'}
          className="text-xs md:text-xl font-sans text-slate-700 hover:text-black"
        >
          Menu
        </Link>
        <Link
          to={'/rate'}
          className="text-xs md:text-xl font-sans text-slate-700 hover:text-black"
        >
          Rate
        </Link>
        <Link
          to={'/about'}
          className="text-xs md:text-xl font-sans text-slate-700 hover:text-black"
        >
          About Us
        </Link>
      </div>

      {/* Menu Navigasi Mobile */}
      <div
        className={`absolute top-16 left-1/2 transform -translate-x-1/2 h-60 w-80 rounded-b-lg bg-orange-500 p-5 
        ${isMenuOpen ? 'flex flex-col' : 'hidden'} md:hidden`}
      >
        <Link
          to={'/'}
          onClick={toggleMenu}
          className="text-base font-sans text-white hover:text-black mb-2"
        >
          Home
        </Link>
        <Link
          to={'/menu'}
          onClick={toggleMenu}
          className="text-base font-sans text-white hover:text-black mb-2"
        >
          Menu
        </Link>
        <Link
          to={'/rate'}
          onClick={toggleMenu}
          className="text-base font-sans text-white hover:text-black mb-2"
        >
          Rate
        </Link>
        <Link
          to={'/about'}
          onClick={toggleMenu}
          className="text-base font-sans text-white hover:text-black"
        >
          About Us
        </Link>
        <Link
          to={'/login'}
          onClick={toggleMenu}
          className="mt-8 flex justify-center relative left-10 w-3/4 bg-yellow-500 text-white text-lg font-semibold rounded-md px-3 py-1 shadow-lg active:opacity-80"
        >
          Login
        </Link>
      </div>

      {/* Tombol Login di Desktop */}
      <Link
        to={'/login'}
        className="hidden md:block bg-orange-500 text-white text-xs md:text-lg font-semibold rounded-lg px-3 py-1 hover:bg-orange-700 md:px-5 md:py-1"
      >
        Login
      </Link>

      {/* Tombol Hamburger */}
      <button
        className="text-slate-700 md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  );
}
