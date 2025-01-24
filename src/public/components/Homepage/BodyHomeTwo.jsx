import { useEffect } from 'react';
import Sejarah from '../../assets/sejarah.png';
import titleSejarah from '../../assets/titleSejarah.png'
import '../../../AddItem.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function BodyHomeTwo() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const titleText = `
  5 tahun Ayam Geprek Bu Siti berkomitmen menyajikan menu makanan dengan cita rasa terbaik.`

  const descText = `
  Berdiri sejak tahun 2019, kami telah berkomitmen menyajikan ayam geprek 
  dengan cita rasa terbaik, pedas menggugah selera, dan kualitas bahan terbaik. 
  Dari dapur kecil hingga berkembang menjadi pilihan favorit pelanggan, kepercayaan 
  Anda adalah semangat kami untuk terus berinovasi.`

  return(
    <div className="md:px-16 pt-20"  data-aos="fade-up">
      <div className="flex flex-col justify-center items-center">
        <img src={titleSejarah} alt='judul' className='h-12 flex md:hidden'/>
        <p className="montserrat text-xl md:text-5xl font-bold md:font-semibold text-center px-9 pt-5 md:pt-0 md:px-40">{titleText}</p>
        <p className='montserrat text-xs md:text-xl text-justify md:text-center px-10 md:px-72 pt-10 md:pt-12'>{descText}</p>
        <img src={Sejarah} alt='Logo' className='px-5 pt-20 md:px-0 md:pt-32'/>
      </div>
    </div>
  )
}