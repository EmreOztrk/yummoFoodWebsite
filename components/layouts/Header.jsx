import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='container mx-auto flex justify-between items-center mt-2 bg-transparent relative z-40'>
        <div className='relative w-52 h-16'>
            <Image src={"/images/logo_.png"} alt="logo" layout='fill'/>
        </div>
        <div>
            <ul className='flex gap-x-5'>
                <li><a href="#" className='font-bold relative transition-all duration-300 after:content-[""] after:absolute after:-bottom-2 after:origin-left after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-[3px] after:bg-red after:transition after:duration-300 hover:text-red'>HOME</a></li>
                <li><a href="#" className='font-bold relative transition-all duration-300 after:content-[""] after:absolute after:-bottom-2 after:origin-left after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-[3px] after:bg-red after:transition after:duration-300 hover:text-red'>ABOUT US</a></li>
                <li><a href="#" className='font-bold relative transition-all duration-300 after:content-[""] after:absolute after:-bottom-2 after:origin-left after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-[3px] after:bg-red after:transition after:duration-300 hover:text-red'>MENU</a></li>
                <li><a href="#" className='font-bold relative transition-all duration-300 after:content-[""] after:absolute after:-bottom-2 after:origin-left after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-[3px] after:bg-red after:transition after:duration-300 hover:text-red'>RESERVATION</a></li>
                <li><a href="#" className='font-bold relative transition-all duration-300 after:content-[""] after:absolute after:-bottom-2 after:origin-left after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-[3px] after:bg-red after:transition after:duration-300 hover:text-red'>BLOG</a></li>
                <li><a href="#" className='font-bold relative transition-all duration-300 after:content-[""] after:absolute after:-bottom-2 after:origin-left after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-[3px] after:bg-red after:transition after:duration-300 hover:text-red'>CONTACT US</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header