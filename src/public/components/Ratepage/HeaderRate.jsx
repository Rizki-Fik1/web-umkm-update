import ImgRate from '../../assets/rate/bgrate.png';
import ImgGroup from '../../assets/rate/grouprate.png';
import '../../../AddItem.css';

export default function HeaderRate() {

  const descText = `geprek adalah makanan ayam goreng tepung 
  khas Indonesia yang diulek atau dilumatkan bersama sambal`;

  return (
    <div className='px-10 pt-10 pb-20'>
      <div className='relative flex justify-center items-center'>
        <img src={ImgRate} alt="Background Rate" className="z-0" />
        <img src={ImgGroup} alt="Group Rate" className="absolute z-10 top-7 right-24" />
        <div className='flex flex-col absolute z-20 bottom-0 left-20 gap-y-5'>
          <p className='montserrat text-2xl font-semibold'>Makanan</p>
          <p className='montserrat text-7xl font-bold'>AYAM GEPREK</p>
          <p className='montserrat text-base font-normal pr-[750px]'>
            <span className='font-semibold'>Ayam</span> {descText}
          </p>
        </div>
      </div>
    </div>
  );
}
