import BodyHome from "../components/Homepage/BodyHome";
import BodyHomeThree from "../components/Homepage/BodyHomeThree";
import BodyHomeTwo from "../components/Homepage/BodyHomeTwo";
import FooterHome from "../components/Homepage/FooterHome";
import HeaderHome from "../components/Homepage/HeaderHome";
import NavbarHome  from "../components/Homepage/NavbarHome";

export default function HomePages() {

  return (
    <>
    {/* NAVBAR */}
      <div className="bg-white min-h-screen">
        <NavbarHome/>
        <HeaderHome/>
      </div>

    {/* BODY */}
      <div className="bg-white min-h-screen">
        <BodyHome/>
      </div>

      <div className="bg-white min-h-screen">
        <BodyHomeTwo/>
      </div>

      <div className="min-h-screen">
        <BodyHomeThree/>
      </div>

      <div>
        <FooterHome/>
      </div>
    </>
  )
}