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
      <div className='flex justify-center items-center pt-10'>
        <img src={AboutUs}/>
      </div>

      {/* Container Pertama */}
      <div className='flex flex-col'>
        <img src={AboutTitle} className='w-72 pt-14'/>

        <div>
          <p className='montserrat flex text-5xl text-black font-semibold gap-x-5 pt-8'>
            Memperkenalkan Warung <section className='text-orange-500 font-bold'>Ayam</section>
          </p>

          <p className='montserrat flex text-5xl font-bold text-orange-500 pt-2'>Geprek Bu Siti</p>
        </div>
        
        <div className='flex flex-row text-base text-pretty text-slate-600 gap-x-24 pt-12'>
          <p>{descOne}</p>
          <p>{descTwo}</p>
          <p>{descThree}</p>
        </div>

        {/* Container Kedua */}
        <div className='pt-24'>
          <div className='flex flex-row  justify-center items-center gap-x-10'>
            <img src={groupOne}/>
            <img src={groupTwo}/>
          </div>

          <div className='flex flex-row  justify-center items-center pt-4'>
            <img src={groupThree}/>
          </div>
        </div>
      </div>

    </div>
  )
}