import Image from 'next/image'
import React from 'react'
import Chefs from './ChefList/Chefs'
import Title from './ui/Title'

const Chef = () => {
  return (
    <div>
        <div className='relative'>
            <div className='absolute w-full h-[1700px] sm:h-[736px] before:content-[""] before:absolute before:w-full before:h-full before:bg-black before:opacity-90 before:z-20'>
                <Image src={"/images/team_bg.jpg"} alt="" layout='fill' objectFit='content'/>
            </div>
            <div className='relative z-40 py-20 flex flex-col'>
                <div className='flex items-center flex-col gap-y-5'>
                    <div>
                        <Title addClass={"text-white text-[40px]"}>Our Best Chef</Title>
                    </div>
                    <div className='relative w-40 h-5'>
                        <Image src={"/images/heading-dark.png"} alt="" layout='fill'/>
                    </div>
                </div>
                <div className='flex container mx-auto gap-x-5 py-20 flex-col gap-y-5 sm:flex-row items-center sm:justify-center flex-wrap'>
                    <Chefs/>
                    <Chefs/>
                    <Chefs/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chef