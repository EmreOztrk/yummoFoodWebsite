import React from 'react'
import Title from './ui/Title'
import Image from 'next/image'
import Events from './Eventss/Events'
import Events_Two from './Eventss/Events_Two'


const Event = () => {
  return (
    <div className='container mx-auto mb-16'>
      <div className='w-full flex flex-col items-center'>
        <Title addClass={"text-brown text-[40px]"}>Recent Events</Title>
        <div className='relative w-40 h-5'>
        <Image src={"/images/heading-dark.png"} alt="" layout='fill'/>
        </div>
      </div>
      <div>
        <Events/>
        <Events_Two/>
      </div>
    </div>
  )
}

export default Event 