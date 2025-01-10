import BodyAbout from "../components/Aboutpage/BodyAbout";
import Footer from "../components/Aboutpage/Footer";
import FooterAbout from "../components/Aboutpage/FooterAbout";
import HeaderAbout from "../components/Aboutpage/HeaderAbout";
import NavbarAbout from "../components/Aboutpage/NavbarAbout";


export default function AboutPage() {

  return (
    <>
      <div className="bg-white pb-24">
        <NavbarAbout/>
        <HeaderAbout/>
      </div>

      <div className="bg-white">
        <BodyAbout/>
      </div>

      <div className="bg-white pb-20">
        <FooterAbout/>
      </div>

      <div className="w-full h-[0.5px] bg-black"></div>

      <div className="bg-white">
        <Footer/>
      </div>
    </>
  )
}