import Image from 'next/image'
import React from 'react'
import Title from '../ui/Title'
import {FaFacebookF,FaTwitter,FaYoutube,FaLinkedinIn,FaPaperPlane,FaPhoneAlt} from 'react-icons/fa'
import {MdLocalPostOffice} from 'react-icons/md';

const Footer = () => {
  return (
    <div className='relative'>
        <div className='relative w-full h-[620px]'>
            <div  className='absolute -z-10 w-full h-[620px] pb-[150px] after:w-full after:h-full after:bg-black after:absolute after:top-0 after:opacity-40'>
                <Image src={"/images/footer.jpg"} alt ="footerBanner" className='mt-10' height={"760px"} width="100%" layout='fill' objectFit='cover'/>
            </div>
            <div className='relative  container flex mx-auto items-center h-full py-[70px]'>
                <div className='flex gap-x-10'>
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
                    <div className='text-white basis-1/3 flex flex-col gap-y-10'>
                        <h1 className='text-2xl font-bold'>Opening Hours</h1>
                        <ul className='flex flex-col gap-y-4'>
                            <li className='flex justify-between'><div className='opacity-80 w-20'>Mon-Fri</div> <div className='text-red'>---------------</div> <div className='text-red'>10Am-8Pm</div></li>
                            <li className='flex justify-between'><div className='opacity-80 w-20'>Saturday</div> <div className='text-red'>---------------</div> <div className='text-red'>10Am-8Pm</div></li>
                            <li className='flex justify-between'><div className='opacity-80 w-20'>Wendsday</div> <div className='text-red'>---------------</div> <div className='text-red'>10Am-8Pm</div></li>
                        </ul>
                        <h1 className='text-2xl font-bold'>Coffee Bar Opening Hours</h1>
                        <ul className='flex flex-col gap-y-4'>
                            <li className='flex justify-between'><div className='opacity-80 w-20'>Mon-Fri</div> <div className='text-red'>---------------</div> <div className='text-red'>10Am-8Pm</div></li>
                            <li className='flex justify-between'><div className='opacity-80 w-20'>Saturday</div> <div className='text-red'>---------------</div> <div className='text-red'>10Am-8Pm</div></li>
                        </ul>
                    </div>
                    <div className='text-white basis-1/3 flex flex-col gap-y-10'>
                        <h1 className='text-2xl font-bold'>Contact</h1>
                        <ul className='flex flex-col gap-y-4'>
                            <li className='flex items-center gap-x-3'><span className='text-red'><FaPaperPlane/></span><span className='opacity-80'>British Columbia, Canada 512B</span></li>
                            <li className='flex items-center gap-x-3'><span className='text-red'><FaPhoneAlt/></span><span className='opacity-80'>+91 9876 543 210</span></li>
                            <li className='flex items-center gap-x-3'><span className='text-red'><MdLocalPostOffice/></span><span className='opacity-80'>demo@gmail.com</span></li>
                        </ul>
                    </div>
                </div>
                <hr className='text-white'></hr>
            </div>
        </div>
    </div>
  )
}

export default Footer