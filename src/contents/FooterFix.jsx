import React from "react";
import '../AddItem.css';
import { Link } from "react-router-dom";
import Logo from '../public/assets/Logo.png';

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

export default function FooterFix() {

  return (
    <div className="pb-5 px-7 md:px-14">
      <div className="w-full flex flex-col-reverse text-center md:text-start md:flex-row justify-between pb-10 md:pb-16">
        <p className="montserrat text-sm md:text-3xl text-black font-semibold">Makan Sedap, Makan Murah</p>
        <p className="montserrat text-2xl md:text-3xl text-orange-500 font-bold md:font-semibold">Ayam Geprek Bu Siti</p>
      </div>

      {/* COMPONENT FOOTER */}
      <div className="flex flex-row justify-center md:justify-between items-center pb-5 md:pb-8">
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-32">
          {/* COMPONENT : 'ONE' */}
          <div className="list-one flex flex-row md:flex-col">
            <p className="montserrat hidden md:flex text-2xl font-semibold pb-5">Page of Contents</p>
            <ul className="w-full md:w-1/2 flex flex-row md:flex-col justify-center items-center md:justify-start md:items-start montserrat md:space-y-2 text-base font-normal space-x-5 md:space-x-0">
              <Link to={'/'} className="text-sm md:text-base text-slate-600 hover:opacity-80 md:underline underline-offset-4">
                Home
              </Link>

              <Link to={'/menu'} className="text-sm md:text-base text-slate-600 hover:opacity-80 md:underline underline-offset-4">
                Menu
              </Link>

              <Link to={'/rate'} className="text-sm md:text-base text-slate-600 hover:opacity-80 md:underline underline-offset-4">
                Rate
              </Link>

              <Link to={'/about'} className="text-sm md:text-base text-slate-600 hover:opacity-80 md:underline underline-offset-4">
                About Us
              </Link>
            </ul>
          </div>

          {/* COMPONENT : 'TWO' */}
          <div className="list-two flex flex-row md:flex-col">
            <p className="montserrat hidden md:flex text-2xl font-semibold pb-5">Social</p>
            <ul className="w-full md:w-1/3 flex flex-row justify-center md:justify-normal md:flex-col montserrat space-x-5 md:space-x-0 md:space-y-2 text-base font-normal pt-2 md:pt-0">
              <a href="https://www.instagram.com/geprek_bu_siti?igsh=eTN5aTZhYWd6bTZm" target="_blank" className="text-2xl text-orange-500 md:hidden">
                <FaInstagram />
              </a>
              <a href="https://www.instagram.com/geprek_bu_siti?igsh=eTN5aTZhYWd6bTZm"  target="_blank" className="hidden md:flex text-slate-600 hover:opacity-80">
                Instagram
              </a>

              <a href="#" target="_blank" className="text-2xl text-orange-500 md:hidden">
                <RiFacebookCircleLine />
              </a>
              <a href="#" className="hidden md:flex text-slate-600 hover:opacity-80">
                Facebook
              </a>

              <a href="https://wa.me/6281228075577" target="_blank" className="text-2xl text-orange-500 md:hidden">
                <FaWhatsapp />
              </a>
              <a href="https://wa.me/6281228075577" target="_blank" className="hidden md:flex text-slate-600 hover:opacity-80">
                WhatsApp
              </a>
            </ul>
          </div>
        </div>

        <img src={Logo} alt="Logo" className="hidden md:flex h-16 md:h-40 md:relative right-14 bottom-8"/>
      </div>

      {/* EXTRA CONTENT */}
      <div className="flex flex-row justify-center md:justify-end space-x-1 md:space-x-40">
        <a href="#" className="montserrat hidden md:flex font-semibold">Back to top</a>
        <p className="montserrat text-sm md:text-base">Copyright©AyamGeprekBuSiti</p>
      </div>
    </div>
  )
}