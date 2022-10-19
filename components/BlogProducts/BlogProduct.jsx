import Image from 'next/image'
import React from 'react'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FaComments} from 'react-icons/fa'

const BlogProduct = () => {
  return (
    <div>
        <div className='w-[360px] h-[434px] bg-cream'>
            <div className='relative w-[360px] h-[235px]'>
                <Image src={"/images/news-img1.jpg"} alt="blog" layout='fill'/>
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