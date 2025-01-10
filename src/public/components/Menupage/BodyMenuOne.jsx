import imageOne from '../../assets/website-umkm/Group 1.png';
import imageTwo from '../../assets/website-umkm/Group 3.png';
import imageThree from '../../assets/website-umkm/Group 5.png';
import Cover from '../../assets/coverimg.png';
import { Link } from 'react-scroll';
import '../../../AddItem.css';

export default function BodyMenuOne() {

  return (
    <>
    <div className="bg-white flex flex-col pt-40 px-10 md:flex-row md:pt-0 md:px-5">
      {/* LEFT DIV */}
      <div className="w-full justify-center items-center relative bottom-6 md:w-1/2 flex md:bottom-5">
        <img src={imageThree} className='h-32 md:h-80 absolute left-24 bottom-[0.5px] z-30 md:bottom-44 md:left-[300px]'/>
        <img src={imageOne} className='h-36 md:h-96 absolute right-10 z-20 md:top-[135px] md:left-14'/>
        <img src={imageTwo} className='h-[150px] absolute left-40 z-10 md:h-[470px] md:top-[135px] md:left-[320px]'/>
      </div>

      <div className="w-full pl-0 pt-20 px-0 md:w-1/2 md:pl-16 md:px-24">
        <p className='radley tracking-widest text-2xl font-light md:text-8xl'>MENU</p>
        <ul className='flex flex-row space-x-1 text-sm pt-1 pb-7 md:space-x-3 md:text-xl md:pt-5 md:pb-10'>
          <Link to='makan' smooth={true} duration={500} className='font-light hover:text-orange-500 cursor-pointer'>MAKANAN</Link>
          <section>/</section>
          <Link to='minum' smooth={true} duration={500} className='font-light hover:text-orange-500 cursor-pointer'>MINUMAN</Link>
          <section>/</section>
          <Link to='camil' smooth={true} duration={500} className='font-light hover:text-orange-500 cursor-pointer'>CAMILAN</Link>
        </ul>

        <div className='w-full h-[0.5px] bg-black shadow-2xl'></div>
        <div className='flex justify-between items-center pt-2 pb-2 md:pt-5 md:pb-5'>
          <p className='playfair text-base md:text-3xl font-semibold'>Ayam Geprek Sambal Matah</p>
          <p className='poppins text-base md:text-3xl font-semibold'>12K</p>
        </div>

        <div className='w-full h-[0.5px] bg-black shadow-2xl'></div>
        <div className='flex justify-between items-center pt-2 pb-2 md:pt-5 md:pb-5'>
          <p className='playfair text-base md:text-3xl font-semibold'>Es Dawet</p>
          <p className='poppins text-base md:text-3xl font-semibold'>7K</p>
        </div>

        <div className='w-full h-[0.5px] bg-black shadow-2xl'></div>
        <div className='flex justify-between items-center pt-2 pb-2 md:pt-5 md:pb-5'>
          <p className='playfair text-base md:text-3xl font-semibold'>Ceker Mercon</p>
          <p className='poppins text-base md:text-3xl font-semibold'>10K</p>
        </div>
        <div className='w-full h-[0.5px] bg-black shadow-2xl'></div>
      </div>
    </div>

    <div className='flex flex-col justify-center items-center pt-8 px-10 space-y-10 md:pt-16 md:px-28 md:space-y-28'>
      <img src={Cover} className=''/>
      <div className='flex flex-row justify-between w-full'>
        <div className='w-1/3 h-[0.5px] bg-black shadow-2xl'></div>
        <div className='w-1/3 h-[0.5px] bg-black shadow-2xl'></div>
      </div>
    </div>
  </>
  )
}