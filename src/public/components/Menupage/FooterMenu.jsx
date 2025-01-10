import React from "react"
import '../../../AddItem.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png'

export default function FooterMenu() {

  return (
    <div className="pb-5 px-14">
      <div className="flex flex-row justify-between pb-16">
        <p className="montserrat text-3xl text-black font-semibold">Makan Sedap, Makan Murah</p>
        <p className="montserrat text-3xl text-orange-500 font-semibold">Ayam Geprek Bu Siti</p>
      </div>

      {/* COMPONENT FOOTER */}
      <div className="flex flex-row justify-between items-center pb-8">
        <div className="flex flex-row space-x-32">
          {/* COMPONENT : 'ONE' */}
          <div className="list-one flex flex-col">
            <p className="montserrat text-2xl font-semibold pb-5">Page of Contents</p>
            <ul className="w-1/2 flex flex-col montserrat space-y-2 text-base font-normal">
              <Link to={'/'} className="text-slate-600 hover:opacity-80 underline underline-offset-4">
                Home
              </Link>

              <Link to={'/menu'} className="text-slate-600 hover:opacity-80 underline underline-offset-4">
                Menu
              </Link>

              <Link to={'/rate'} className="text-slate-600 hover:opacity-80 underline underline-offset-4">
                Rate
              </Link>

              <Link to={'/about'} className="text-slate-600 hover:opacity-80 underline underline-offset-4">
                About Us
              </Link>
            </ul>
          </div>

          {/* COMPONENT : 'TWO' */}
          <div className="list-two flex flex-col">
            <p className="montserrat text-2xl font-semibold pb-5">Social</p>
            <ul className="w-1/3 flex flex-col montserrat space-y-2 text-base font-normal">
              <Link to={''} className="text-slate-600 hover:opacity-80">
                Instagram
              </Link>

              <Link to={''} className="text-slate-600 hover:opacity-80">
                Facebook
              </Link>

              <Link to={''} className="text-slate-600 hover:opacity-80">
                WhatsApp
              </Link>
            </ul>
          </div>
        </div>

        <img src={Logo} alt="Logo" className="h-40 relative right-14 bottom-8"/>
      </div>

      {/* EXTRA CONTENT */}
      <div className="flex flex-row justify-end space-x-40">
        <Link to={'/'} className="montserrat font-semibold">Back to top</Link>
        <p className="montserrat">Copyright©AyamGeprekBuSiti</p>
      </div>
    </div>
  )
}