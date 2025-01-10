import BodyRate from "../components/Ratepage/BodyRate";
import HeaderRate from "../components/Ratepage/HeaderRate";
import NavbarRate from "../components/Ratepage/NavbarRate";

 export default function RatePages() {

  return (
    <div>
      <div className="bg-white">
        <NavbarRate/>
        <HeaderRate/>
      </div>

      <div className="bg-white h-screen">
        <BodyRate/>
      </div>
    </div>
  )
 }