import Image from 'next/image'
import React from 'react'
import {FaCalendarAlt,FaClock} from 'react-icons/fa'
import Title from '../ui/Title'

const Events = () => {
  return (
    <div>
        <div className='flex flex-col sm:flex-row gap-x-5 w-full justify-between mt-12 h-[318px] items-center'>
            <div className='relative w-[555px] h-full basis-2/4'>
                <Image src={"/images/ev1.jpg"} alt="" layout='fill'/>
            </div>
            <div className='basis-2/4 flex flex-col gap-y-5'>
                <div className='flex gap-x-5'>
                    <div className='flex items-center'>
                        <span className='text-red'><FaCalendarAlt/></span>
                        <span className='font-bold'>20 june 2018</span>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-red'><FaClock/></span>
                        <span className='font-bold'>12:45pm To 04:26pm</span>
                    </div>
                </div>
                <div>
                    <Title addClass={"text-3xl text-brown"}>Master Chife Best Competition</Title>
                </div>
                <div>
                    <p className='text-brown text-[17px] font-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod terempor incididunt ut re et dolore magna aliqua. Ut enim ad minim veniam, quis    nersostrud exercitation ullamco laboris nisi ut aliquip extea.
                    </p>
                </div>
                <div>
                    <button className='btn-secondary hover:text-brown'>Book Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events