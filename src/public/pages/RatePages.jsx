import Navbar from "../../contents/Navbar";
import Footer from "../components/Aboutpage/FooterAbt";
import BodyRate from "../components/Ratepage/BodyRate";
import BodyRateTwo from "../components/Ratepage/BodyRateTwo";
import HeaderRate from "../components/Ratepage/HeaderRate";

 export default function RatePages() {

  return (
    <div>
      <div className="bg-white">
        <Navbar/>
        <HeaderRate/>
      </div>

      <div className="bg-white min-h-screen">
        <BodyRate/>
      </div>

      <div className="min-h-screen">
        <BodyRateTwo/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
 }