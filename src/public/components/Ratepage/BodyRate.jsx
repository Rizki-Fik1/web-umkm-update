import React from 'react';
import Ourfood from '../../assets/ourfood.png'
import '../../../AddItem.css';
import Comment from '../../../contents/Comment';
import CommentOne from '../../assets/commentOne.png';
import CommentTwo from '../../assets/commentTwo.png';
import CommentThree from '../../assets/commentThree.png';

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

      <div className='flex flex-col'>
        <div className='flex flex-row items-center gap-x-20 mt-10'>
          <p className='montserrat text-black text-6xl font-bold'>Review</p>
          <img src={Ourfood}></img>
        </div>

        <p className='montserrat text-base font-semibold text-gray-500 mt-5'>Apa kata pelanggan terhadap makanan Kita..</p>
      </div>

      <div className='flex flex-col gap-y-5 mt-10 mb-14 px-20'>
        <Comment Image={CommentOne}/>
        <Comment Image={CommentTwo}/>
        <Comment Image={CommentThree}/>
      </div>
    </div>
  )
}