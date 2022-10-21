import Image from 'next/image'
import React from 'react'
import Title from './ui/Title'

const Menu = () => {
  return (
    <div className='relative w-full h-[595px]'>
        <div className='absolute w-full h-[595px] bg-gradient-to-r from-black to-brown -z-20'>
            <div className='absolute w-full h-[595px] sm:opacity-30 opacity-10 -z-10'>
                <Image src={"/images/menu_bg.jpg"} alt="menu_bg.jpg" layout='fill' objectFit='content'/>
            </div>
        </div>
        <div className='sm:container w-full mx-auto h-full sm:px-0 px-6'>
                <div className='sm:w-[625px] w-full h-full'>
                    <ul className='text-white h-full w-full flex flex-col justify-center relative sm:text-3xl text-lg font-yeseva '>
                      <li className='mb-8'><Title addClass={"text-[35px]"}>Special Menu</Title></li>
                      <li className='flex justify-between items-center mb-2'><div><span>Berry Trifl</span></div> <div className='text-[25px] text-red font-bold'><span className='sm:inline hidden'>--------------</span> <span>$70.00</span></div></li>
                      <li className='flex justify-between items-center mb-2'><div><span>Chocolate Crepes</span></div> <div className='text-[25px] text-red font-bold'><span className='sm:inline hidden'>--------------</span> <span>$70.00</span></div></li>
                      <li className='flex justify-between items-center mb-2'><div><span>Double Chocolate Pie</span></div> <div className='text-[25px] text-red font-bold'><span className='sm:inline hidden'>--------------</span> <span>$70.00</span></div></li>
                      <li className='flex justify-between items-center mb-2'><div><span>Wheat caprese slice</span></div> <div className='text-[25px] text-red font-bold'><span className='sm:inline hidden'>--------------</span> <span>$70.00</span></div></li>
                      <li className='flex justify-between items-center mb-2'><div><span>Wheat caprese slice</span></div> <div className='text-[25px] text-red font-bold'><span className='sm:inline hidden'>--------------</span> <span>$70.00</span></div></li>
                      <button className='btn-secondary mt-10 text-base'>See All Menu</button>  
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Menu