import Image from 'next/image'
import React from 'react'

const Menu = () => {
  return (
    <div>
        <div className='relative w-full h-[595px] bg-gradient-to-r from-black to-crown -z-20'>
            <div className='absolute w-full h-[595px] opacity-50 -z-10'>
                <Image src={"/images/menu_bg.jpg"} alt="menu_bg.jpg" layout='fill'/>
            </div>
            <p className='text-white'>deneme</p>
        </div>
    </div>
  )
}

export default Menu