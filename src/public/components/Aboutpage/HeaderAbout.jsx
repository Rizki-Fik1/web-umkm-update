import AboutTitle from '../../assets/image-menu/aboutus.png';
import AboutUs from '../../assets/image-menu/fotbar.png';
import groupOne from '../../assets/image-menu/group 73.png';
import groupTwo from '../../assets/image-menu/group 72.png';
import groupThree from '../../assets/image-menu/group 74.png';
import '../../../AddItem.css';

export default function HeaderAbout() {

  const descOne = `
  Berbagai varian makanan yang tentunya disajikan dengan 
  sensasi yang berbeda untuk setiap makanan yang beragam`

  const descTwo = `
  Tidak lupa kesegaran dari minuman yang dapat menjawab 
  pertanyaan atas rasa haus anda.`

  const descThree = `
  Camilan yang disediakan untuk menutup semua kesenangan 
  anda setelah makan.`

  return (
    <div className='md:px-40'>
      {/* IMAGE */}
      <div className='flex justify-center items-center pt-10 px-5 md:px-0'>
        <img src={AboutUs}/>
      </div>

      {/* Container Pertama */}
      <div className='flex flex-col px-8 md:px-0'>
        <img src={AboutTitle} className='md:w-72 pt-14'/>

        <div>
          <p className='montserrat flex text-xl md:text-5xl text-black font-semibold gap-x-0 md:gap-x-5 pt-8'>
            Memperkenalkan Warung
          </p>

          <p className='montserrat flex text-xl md:text-5xl font-bold text-orange-500 md:pt-2'>Ayam Geprek Bu Siti</p>
        </div>
        
        <div className='flex flex-col md:flex-row text-center md:text-start text-xs md:text-base text-pretty text-slate-600 gap-x-5 md:gap-x-24 pt-6 md:pt-12 gap-y-7 md:gap-y-0'>
          <p>{descOne}</p>
          <p>{descTwo}</p>
          <p>{descThree}</p>
        </div>

        {/* Container Kedua */}
        <div className='flex flex-col pt-10 md:pt-24'>
          <div className='flex flex-col md:flex-row  justify-center items-center gap-x-5 md:gap-x-10 gap-y-4 md:gap-y-0'>
            <img src={groupOne} className='h-20 md:h-auto'/>
            <img src={groupTwo} className='h-20 md:h-auto'/>
          </div>

          <div className='flex flex-row  justify-center items-center pt-4'>
            <img src={groupThree} className='h-20 md:h-auto'/>
          </div>
        </div>
      </div>

    </div>
  )
}