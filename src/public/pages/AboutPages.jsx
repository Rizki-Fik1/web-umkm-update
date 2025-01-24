import Navbar from "../../contents/Navbar";
import BodyAbout from "../components/Aboutpage/BodyAbout";
import FooterAbout from "../components/Aboutpage/FooterAbout";
import HeaderAbout from "../components/Aboutpage/HeaderAbout";
import FooterFix from "../../contents/FooterFix";


export default function AboutPage() {

  return (
    <>
      <div className="bg-white pb-24">
        <Navbar/>
        <HeaderAbout/>
      </div>

      <div className="bg-white">
        <BodyAbout/>
      </div>

      <div className="bg-white pb-10">
        <FooterAbout/>
      </div>

      <div className="bg-white">
        <FooterFix/>
      </div>
    </>
  )
}