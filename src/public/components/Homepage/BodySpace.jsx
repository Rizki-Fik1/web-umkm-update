export default function BodySpace({ padding }) {

  return(
    <div className={`flex flex-row justify-between ${padding}`}>
      <div className='w-1/3 h-0.5 bg-slate-500'></div>
      <div className='w-1/3 h-0.5 bg-slate-500'></div>
    </div>
  )
}