import Dawet from '../../assets/website-umkm/dawet.png';

export default function BodyMenuThree() {

  return(
    <>
      <div id='minum' className="flex flex-col justify-center items-center pt-5 md:pt-7">
        <img src={Dawet} className='w-40 md:w-80'/>
        <p className='kurale text-4xl md:text-7xl text-cyan-500 pt-5 md:pt-10 md:pb-10'>MINUMAN</p>
      </div>
    </>
  )
}