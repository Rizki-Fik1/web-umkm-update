import OurTeam from '../../assets/image-menu/ourteam.png';
import Putra from '../../assets/about-us/putra.png';
import Akbar from '../../assets/about-us/akbar.png';
import Rifki from '../../assets/about-us/rifki.png';
import Fiko from '../../assets/about-us/fiko.png';
import '../../../AddItem.css';

export default function BodyAbout() {

  return (
    <div className='md:pt-14'>
      <div className='flex flex-col justify-center items-center px-5'>
        <img src={OurTeam} className='w-[280px] md:w-[450px]'/>
        <p className='montserrat text-center md:text-start text-sm md:text-xl text-slate-500 font-semibold pt-6'>Memperkenalkan, kami selaku tim penjual dan</p>
        <p className='montserrat text-sm md:text-xl text-slate-500 font-semibold'>tim pembuat website ini.</p>
      </div>

      <div className='relative flex flex-col bottom-10 md:bottom-20'>
        <div className='flex flex-row justify-center items-center md:gap-x-32'>
          <img src={Akbar} className='h-44 md:h-auto relative top-[70px]'/>
          <img src={Putra} className='h-52 md:h-auto relative top-[70px]'/>
        </div>

        <div className='flex flex-row justify-center items-center md:gap-x-32'>
          <img src={Rifki} className='h-44 md:h-auto relative top-[70px]'/>
          <img src={Fiko} className='h-44 md:h-auto relative top-[70px]'/>
        </div>
      </div>
    </div>
  )
}