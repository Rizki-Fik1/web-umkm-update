import bgImg from '../../assets/imageMenu.png';
import '../../../AddItem.css';

export default function HeaderMenu() {

  const textHome = `
  Cita rasa auntentik dari  keaslian resep yang sudah ada turun-temurun dengan sentuhan kecil sebagai inovasinya`

  return (
    <div className="flex justify-center items-center md:relative bg-orange-500 h-screen">
      {/* KOMPONEN ATAS */}
      <div className='w-full flex flex-row justify-between absolute top-20 md:top-10 px-7 md:px-32'>
        <ul className='flex flex-col'>
          <li className='text-white text-lg md:text-2xl font-light italic'>KOKI</li>
          <li className='arizonia text-white text-2xl md:text-4xl font-normal'>Siti</li>
        </ul>

        <p className='text-white text-lg md:text-2xl font-light italic'>AUTENTIK</p>
      </div>
      {/* KOMPONEN ATAS : END */}
      
      {/* KOMPONEN TENGAH */}
      <img src={bgImg} alt="bgImage" className="h-48 md:h-96 relative right-0 bottom-20 md:bottom-0 md:right-12" />

      <div className='flex flex-col absolute'>
        <p className='kurale text-3xl md:text-8xl text-white font-normal relative bottom-14 md:bottom-16 -left-20 md:left-72'>BERBEDA</p>
        <p className='kurale text-3xl md:text-8xl text-white font-normal relative bottom-14 md:bottom-10 right-11 md:right-36'>SENSASI</p>
      </div>

      <div className='absolute md:px-96'>
        <p className='kurale md:text-2xl text-justify md:text-center text-white px-7 md:px-[255px] relative md:left-[360px] top-20 md:top-16'>{textHome}</p>
      </div>
      {/* KOMPONEN TENGAH : END */}

      {/* KOMPONEN BAWAH */}
      <div className='w-full flex flex-row justify-between absolute bottom-10 px-7 md:px-32'>
        <ul className='flex flex-col'>
          <li className='text-white text-sm md:text-2xl font-light italic'>EST</li>
          <li className='text-white text-sm md:text-2xl font-light italic'>SINCE / 2019</li>
        </ul>

        <p className='text-white text-sm md:text-2xl font-light italic'>INOVASI BARU</p>
      </div>
      {/* KOMPONEN BAWAH : END */}
    </div>
  );
}
