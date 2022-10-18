import Image from 'next/image'
import React from 'react'
import SpecialProduct from './SpecialProducts/SpecialProduct'
import Title from './ui/Title'

const Special = () => {
  return (
    <div className='mt-[70px] container mx-auto'>
        <div className='text-center flex flex-col items-center'>
            <div>
                <Title addClass={"text-[40px] text-brown"}>Catch Of The Day</Title>
            </div>
            <div className='relative w-40 h-5'>
                <Image src={"/images/heading-dark.png"} alt="" layout='fill'/>
            </div>
        </div>
        <div className='flex flex-wrap justify-center'>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
        </div>
    </div>
  )
}

export default Special