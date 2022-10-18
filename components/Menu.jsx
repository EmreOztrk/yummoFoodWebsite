import Image from 'next/image'
import React from 'react'
import Title from './ui/Title'

const Menu = () => {
  return (
    <div className='relative w-full h-[595px]'>
        <div className='absolute w-full h-[595px] bg-gradient-to-r from-black to-brown -z-20'>
            <div className='absolute w-full h-[595px] opacity-30 -z-10'>
                <Image src={"/images/menu_bg.jpg"} alt="menu_bg.jpg" layout='fill'/>
            </div>
        </div>
        <div className='container mx-auto h-full'>
                <div className='w-[625px] h-full'>
                    <ul className='text-white h-full w-full flex flex-col justify-center relative'>
                      <li className='mb-4'><Title addClass={"text-[35px]"}>Special Menu</Title></li>
                      <li className='flex justify-between items-center mb-2'><div><span className='text-[30px]'>Berry Trifl</span></div> <div className='text-[25px] text-red font-bold'><span>--------------</span> <span>$70.00</span></div></li>
                      <li className='flex justify-between items-center mb-2'><div><span className='text-[30px]'>Chocolate Crepes</span></div> <div className='text-[25px] text-red font-bold'><span>--------------</span> <span>$70.00</span></div></li>
                      <li className='flex justify-between items-center mb-2'><div><span className='text-[30px]'>Double Chocolate Pie</span></div> <div className='text-[25px] text-red font-bold'><span>--------------</span> <span>$70.00</span></div></li>
                      <li className='flex justify-between items-center mb-2'><div><span className='text-[30px]'>Wheat caprese slice</span></div> <div className='text-[25px] text-red font-bold'><span>--------------</span> <span>$70.00</span></div></li>
                      <li className='flex justify-between items-center mb-2'><div><span className='text-[30px]'>Wheat caprese slice</span></div> <div className='text-[25px] text-red font-bold'><span>--------------</span> <span>$70.00</span></div></li>
                      <button className='btn-secondary mt-10'>See All Menu</button>  
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Menu