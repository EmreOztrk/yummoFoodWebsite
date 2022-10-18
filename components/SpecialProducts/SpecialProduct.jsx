import Image from 'next/image'
import React from 'react'
import {GiKnifeFork} from 'react-icons/gi'

const SpecialProduct = () => {
  return (
    <div>
        <div className='w-72 h-[360px] flex flex-col gap-y-2 mt-12'>
            <div className='relative w-64 h-44'>
                <Image src={"/images/special1.jpg"} alt="special1" layout='fill'/>
            </div>
            <div>
                <p className='text-brown font-bold text-sm'>LOREM IPSUM DOLOR</p>
            </div>
            <div>
                <p className='leading-4 text-brown'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis..</p>
            </div>
            <div>
                <button className='flex items-center font-bold hover:text-red transition-all duration-300'>ORDER NOW <span><GiKnifeFork/></span></button>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct