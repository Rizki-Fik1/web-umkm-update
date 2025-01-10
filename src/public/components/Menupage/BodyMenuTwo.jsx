import Geprek from '../../assets/website-umkm/geprek.png';

export default function BodyMenuTwo() {

  return(
    <>
      <div id='makan' className="flex flex-col justify-center items-center pt-5 md:pt-7">
        <img src={Geprek} className='w-40 md:w-80'/>
        <p className='kurale text-4xl md:text-7xl text-orange-500 pt-5 md:pt-10'>MAKANAN</p>
      </div>
    </>
  )
}