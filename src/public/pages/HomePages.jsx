import FooterFix from "../../contents/FooterFix";
import Navbar from "../../contents/Navbar";
import BodyHome from "../components/Homepage/BodyHome";
import BodyHomeThree from "../components/Homepage/BodyHomeThree";
import BodyHomeTwo from "../components/Homepage/BodyHomeTwo";
import HeaderHome from "../components/Homepage/HeaderHome";

export default function HomePages() {

  return (
    <>
    {/* NAVBAR */}
      <div className="bg-white min-h-[80vh] md:min-h-screen">
        <Navbar/>
        <HeaderHome/>
      </div>

    {/* BODY */}
      <div className="bg-white min-h-[80vh] md:min-h-screen">
        <BodyHome/>
      </div>

      <div className="bg-white min-h-[80vh] md:min-h-screen">
        <BodyHomeTwo/>
      </div>

      <div className="min-h-screen">
        <BodyHomeThree/>
      </div>

      <div>
        <FooterFix/>
      </div>
    </>
  )
}