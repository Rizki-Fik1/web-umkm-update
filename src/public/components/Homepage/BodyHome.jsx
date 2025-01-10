import FonRend from '../../assets/font_rend3.png';
import FonRend2 from '../../assets/font_rend 4.png';
import Sugeng from '../../assets/sugeng.png';
import Nasi from '../../assets/nasi.png';
import '../../../AddItem.css';

export default function BodyHome() {

  const descText = `
  "Ide ini lahir dari dapur saya, di sana saya mendapatkan banyak masakan-makanan 
  yang sudah terlahir dari keahlian saya. Ini adalah kesempatan untuk memperkenalkan 
  kepada banyak orang melalui bisnis ini."`

  return (
    <div name='bodyhome' className="px-5 md:px-12 pt-16 md:pt-5">
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-16 px-8">
        <img src={FonRend} alt='Font-rend3' className='h-10 relative top-24 right-14 md:top-0 md:right-0 md:h-28 md:relative md:pt-0'/>
        <img src={Sugeng} alt='Sugeng' className='h-20 md:h-24 relative left-2 bottom-16 md:left-0 md:bottom-4'/>
      </div>

      <div className='flex flex-row justify-center pt-4 md:pt-0 md:gap-x-5 md:px-8'>
        <img src={FonRend2} alt='Font-rend4' className='h-10 md:h-28 absolute right-[0px] md:right-72 pr-3 md:pr-10'/>
        <img src={Nasi} alt='Nasi' className='w-80 md:w-auto md:h-[500px]'/>
      </div>

      <div className='flex justify-center text-center px-2.5 pt-5 md:text-center md:whitespace-pre-wrap md:px-0 md:pt-0'>
        <p className='text-base md:text-sm font-normal italic'>{descText}</p>
      </div>
    </div>
  )
}