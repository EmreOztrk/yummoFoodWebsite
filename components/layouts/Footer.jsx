import Image from 'next/image'
import React from 'react'
import Title from '../ui/Title'
import {FaFacebookF,FaTwitter,FaYoutube,FaLinkedinIn} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='relative'>
        <div className='relative w-full h-[320px] '>
            <div  className='absolute -z-10 w-full h-[150px] pb-[150px]'>
                <Image style={{clipPath: 'inset(150px 150px 150px 150px )'}}  src={"/images/footer.jpg"} alt ="footerBanner" className='mt-10' height={"760px"} width="100%" layout='fill' objectFit=''/>
            </div>
            <div className='relative container flex mx-auto items-center h-full py-[70px]'>
                <div className='flex'>
                    <div className='text-white basis-1/3 flex flex-col gap-y-10'>
                        <h1 className='text-2xl font-bold'>About Us</h1>
                        <p className='opacity-80'>Lorem ipsum dolor sit amet, consectetur adigio eiusmod tempor incididunt ut labore et doloire magna Ut enim ad minim veniam.</p>
                        <ul className='flex gap-3'>
                            <li><FaFacebookF className='bg-red text-white flex justify-center items-center rounded-full w-11 h-11 p-3    transition-all duration-500 cursor-pointer hover:bg-white hover:text-brown'/></li>
                            <li><FaTwitter className='bg-red text-white flex justify-center items-center rounded-full w-11 h-11 p-3   transition-all duration-500 cursor-pointer hover:bg-white hover:text-brown'/></li>
                            <li><FaYoutube className='bg-red text-white flex justify-center items-center rounded-full w-11 h-11 p-3  transition-all duration-500 cursor-pointer hover:bg-white hover:text-brown'/></li>
                            <li><FaLinkedinIn className='bg-red text-white flex justify-center items-center rounded-full w-11 h-11 p-3 transition-all duration-500 cursor-pointer hover:bg-white hover:text-brown'/></li>
                        </ul>
                        <div>
                            <button className='text-[18px] btn-third'>View More</button>
                        </div>
                    </div>
                    <div className='basis1/3'></div>
                    <div className='basis1/3'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer