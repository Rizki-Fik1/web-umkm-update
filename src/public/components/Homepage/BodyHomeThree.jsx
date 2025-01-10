import React from "react";
import '../../../AddItem.css';

import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function BodyHomeThree() {

  const descTitle = `
  Jangan ragu untuk menghubungi kami jika ada pertanyaan atau bantuan, kami siap membantu Anda.`;

  return (
    <div className="flex flex-col min-h-screen pt-10">
      {/* ELEMENT TOP */}
      <div className="flex flex-col md:flex-row justify-center px-10 md:px-24 pb-12">
        {/* LEFT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <p className="montserrat text-base md:text-4xl text-black font-bold pr-14 pb-2">Butuh bantuan? Hubungi Kami!</p>
          <p className="montserrat hidden md:flex md:text-lg text-slate-500 font-semibold text-justify pr-32 pt-2">{descTitle}</p>
        </div>

        {/* RIGHT */}
        <div className="w-1/2 pl-10 md:pl-40">
          <div className="flex flex-col pb-5">
            <div className="flex flex-row gap-x-5 items-center">
              <MdEmail size="1.5em" />
              <p className="montserrat text-lg font-bold">Contact</p>
            </div>
            <div className="montserrat text-base text-slate-600">
              0812-2807-5577
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row gap-x-5 items-center">
              <FaLocationDot size="1.5em" />
              <p className="montserrat text-lg font-bold">Address</p>
            </div>
            <div className="montserrat text-base text-slate-600">
              Jl. Sambiroto Raya No. 3, Kec. Tembalang, Kota Semarang
            </div>
          </div>
        </div>
      </div>
      {/* ELEMENT TOP : END */}

      {/* ELEMENT MID */}
      <div className="mapswrapper">
        <iframe
          className="w-full h-[650px]"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Ayam%20Geprek%20Bu%20Siti%20Jl%20Sambiroto&zoom=14&maptype=roadmap"
        ></iframe>
      </div>
    </div>
  );
}
