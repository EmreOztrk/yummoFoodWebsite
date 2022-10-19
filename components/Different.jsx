import Image from 'next/image'
import React from 'react'
import Title from './ui/Title'

const Different = () => {
  
  return (
    <div className=''>
        <div style={{clipPath: 'inset(0 0 0 0)'}} className='relative w-full h-[408px]'>
            <div className='fixed w-full h-full left-0 top-0'>
                <Image className='' src={"/images/fixed-img.jpg"} alt="diffrent" layout='fill' objectFit='cover'/>
            </div>
            <div className='absolute text-white w-full h-full flex justify-center items-center'>
                <div className='container text-center flex flex-col gap-y-6'>
                  <Title addClass={"text-[45px]"}>MAKE TASTE DIFFERENT</Title>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                  <div>
                    <button className='btn-third'>View More</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Different