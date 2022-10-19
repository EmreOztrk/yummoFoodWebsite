import Image from 'next/image'
import React from 'react'

const Different = () => {
  
  return (
    <div className='mb-[650px]'>
        <div style={{clipPath: 'inset(0 0 0 0)'}} className='relative w-full h-[408px]'>
            <div className='fixed w-full h-full left-0 top-40'>
                <Image className='bg-fixed' src={"/images/fixed-img.jpg"} alt="diffrent" layout='fill' objectFit='cover' sizes="100vh"/>
            </div>
            <div className='absolute'>
              <p className='text-white'> deneme</p>
            </div>
        </div>
    </div>
  )
}

export default Different