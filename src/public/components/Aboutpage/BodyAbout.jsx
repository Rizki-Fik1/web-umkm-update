import OurTeam from '../../assets/image-menu/ourteam.png';
import Putra from '../../assets/about-us/putra.png';
import Akbar from '../../assets/about-us/akbar.png';
import Rifki from '../../assets/about-us/rifki.png';
import Fiko from '../../assets/about-us/fiko.png';
import '../../../AddItem.css';

export default function BodyAbout() {

  return (
    <div className='pt-14'>
      <div className='flex flex-col justify-center items-center'>
        <img src={OurTeam} className='w-[450px]'/>
        <p className='montserrat text-xl text-slate-500 font-semibold pt-6'>Memperkenalkan, kami selaku tim penjual dan</p>
        <p className='montserrat text-xl text-slate-500 font-semibold'>tim pembuat website ini.</p>
      </div>

      <div className='relative flex flex-col bottom-20'>
        <div className='flex flex-row justify-center items-center md:gap-x-32'>
          <img src={Akbar} className='h-52 md:h-auto relative top-[70px]'/>
          <img src={Putra}/>
        </div>

        <div className='flex flex-row justify-center items-center md:gap-x-32'>
          <img src={Rifki}/>
          <img src={Fiko}/>
        </div>
      </div>
    </div>
  )
}