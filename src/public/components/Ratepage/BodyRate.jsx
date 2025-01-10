import '../../../AddItem.css';

export default function BodyRate() {

  return (
    <div className="px-32 pt-5">
      <div className="flex flex-row justify-center items-center gap-x-20">
        <div className='flex flex-row items-center gap-x-5'>
          <p className="montserrat text-orange-500 text-8xl font-bold">1000++</p>
          <p className='montserrat text-base'>
            Lebih dari 
            <span className='font-bold'> 1000 </span>
            Ayam Geprek Bu Siti telah terjual.</p>
        </div>

        <div className='flex flex-row items-center gap-x-5'>
          <p className="montserrat text-orange-500 text-8xl font-bold">100++</p>
          <p className='montserrat text-base'>
            Lebih dari 
            <span className='font-bold'> 100 </span>
            pembeli mengatakan enak.</p>
        </div>
      </div>
    </div>
  )
}