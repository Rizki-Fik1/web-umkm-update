import imageRight from '../../assets/rightImage.png';
import FonRend from '../../assets/font_rend.png';
import FonRend2 from '../../assets/font_rend2.png';
import Plate from '../../assets/plate.png';
import Explore from '../../assets/explore.png';

import { Link } from 'react-scroll';
import '../../../AddItem.css';
 
 export default function HeaderHome() {

  const descText = `
  Di Ayam Geprek Bu Siti, kami menawarkan makanan dengan kualitas 
  terbaik dan mengundang Anda untuk mencoba makanan lezat kami.`

  return (
    <>
    <div className="flex flex-col px-8 md:px-20">
      {/* Container Pertama */}
      <div className="flex flex-row justify-center items-center gap-x-2 md:gap-x-16 pt-14">
        <img src={FonRend} alt='Font' className='h-16 md:h-40'/>
        <img src={imageRight} alt='ImgRight' className='h-14 md:h-36'/>
      </div>

      <div className='flex flex-row justify-center items-center gap-x-2 md:gap-x-14 md:pl-12 pt-4'>
        {/* Container Kedua */}
        <div>
          <img src={Plate} alt='Plate' className='h-20 md:h-52'/>
        </div>

        <div>
          <img src={FonRend2} alt='Font2' className='h-16 md:h-40' />
        </div>
      </div>

      {/* Container Ketiga */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-x-5 md:gap-x-10 pt-20 md:pt-5 mb-10'>
        <p className='text-sm md:text-base text-center font-normal md:whitespace-pre-wrap px-8 md:px-0'>{descText}</p>
        <Link to='bodyhome' smooth={true} duration={500}>
          <img src={Explore} alt='Explore-Logo' className='cursor-pointer h-32 md:h-32 pt-10 md:pt-0 hover:transform hover:scale-125 transition-all duration-150'/>
        </Link>
      </div>
    </div>
    </>
  )
}