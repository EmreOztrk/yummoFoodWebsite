import Image from 'next/image'
import React from 'react'
import Title from './ui/Title'

const Story = () => {
  return (
    <div className='container mx-auto flex items-center py-20'>
        <div className='basis-2/4 text-center w-full flex flex-col gap-y-2'>
          <div className='flex flex-col'>
            <span><Title addClass={"text-red text-[50px] relative top-8"}>Discover</Title></span>
            <span><Title addClass={"text-brown text-[55px]"}>Our Story</Title></span>
          </div>
          <div className='relative w-40 h-5 mx-auto'>
            <Image src={"/images/heading-dark.png"} alt="" layout='fill'/>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tortor at tellus feugiat congue quis ut nunc. Semper ac dolor vitae accumsan. interdum hendrerit lacinia.</p>
          </div>
          <div>
            <button className='btn-primary'>View Full Story</button>
          </div>
        </div>
        <div className='basis-2/4'>
          <div className='relative w-[555px] h-[433px]'>
            <Image src={"/images/our-story.jpg"} alt="" layout='fill'/>
          </div>
        </div>
    </div>
  )
}

export default Story