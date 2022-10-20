import Image from 'next/image'
import React from 'react'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FaComments} from 'react-icons/fa'
import {GiHouse} from 'react-icons/gi'
import { useState } from 'react';

const BlogProduct = () => {
    const [isHoverModal, setIsHoverModal] = useState(false);
  return (
    <div>
        <div className='w-[360px] h-[434px] bg-cream' onMouseMove={() => setIsHoverModal(true)} onMouseOut={() => setIsHoverModal(false)}>
            <div className='relative w-[360px] h-[235px] bg-red'>
                <div className={`absolute w-[360px] h-[235px] transition-all duration-300 ${isHoverModal === true && "opacity-20"}`}>
                    <Image src={"/images/news-img1.jpg"} alt="blog" layout='fill'/>
                </div>
                <span className={`text-white flex justify-center items-center w-full h-full text-5xl transition-all ${isHoverModal === true && 'duration-400 -translate-y-4'}`}>
                    <GiHouse/>
                </span>
            </div>
            
                <div className='px-10 py-7 flex flex-col gap-y-5'>
                <h4 className='text-brown font-bold text-2xl'>Hot Cake</h4>
                <p className='text-brown'>Lorem ipsum dolor sit amet, consectetur adipiscing elit eros...</p>
                <div className='flex justify-between'>
                    <div className='flex items-center text-brown font-bold'>
                        <span><AiOutlineClockCircle/></span>
                        <span>Apr 22.2016</span>
                    </div>
                    <div className='flex items-center text-brown font-bold'>
                        <span><FaComments/></span>
                        <span>Comments</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogProduct

