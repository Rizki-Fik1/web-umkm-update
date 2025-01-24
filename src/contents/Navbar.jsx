import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../public/assets/LogoBaru.png';

import { AiFillHome } from "react-icons/ai";
import { IoFastFood } from "react-icons/io5";
import { FaSquarePen } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white w-full h-16 flex items-center px-5 md:px-14 md:h-24">
      {/* Logo di kiri */}
      <Link to={'/'} className="flex">
        <img src={Logo} alt="Logo" className="relative h-16 md:h-32" />
      </Link>

      {/* Menu Navigasi Desktop - Posisi Tengah */}
      <div className="hidden md:flex md:gap-x-10 flex-grow justify-center">
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
        className={`absolute top-16 left-1/2 transform -translate-x-1/2 h-48 w-80 rounded-b-lg bg-orange-500 p-5 
        ${isMenuOpen ? 'flex flex-col' : 'hidden'} md:hidden`}
      >
        <Link
          to={'/'}
          onClick={toggleMenu}
          className="flex gap-x-3 items-center text-base font-sans text-white hover:text-black mb-4"
        >
          <AiFillHome className='text-white text-xl' />
          Home
        </Link>
        <Link
          to={'/menu'}
          onClick={toggleMenu}
          className="flex gap-x-3 text-base font-sans text-white hover:text-black mb-4"
        >
          <IoFastFood className='text-white text-xl' />
          Menu
        </Link>
        <Link
          to={'/rate'}
          onClick={toggleMenu}
          className="flex gap-x-3 text-base font-sans text-white hover:text-black mb-4"
        >
          <FaSquarePen className='text-white text-xl' />
          Rate
        </Link>
        <Link
          to={'/about'}
          onClick={toggleMenu}
          className="flex gap-x-3 text-base font-sans text-white hover:text-black"
        >
          <FaUsers className='text-white text-xl' />
          About Us
        </Link>
      </div>

      {/* Tombol Hamburger (Posisi di kanan mobile) */}
      <button
        className="text-slate-700 md:hidden focus:outline-none absolute right-5"
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
