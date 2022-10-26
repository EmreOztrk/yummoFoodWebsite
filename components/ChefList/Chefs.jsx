import Image from 'next/image'
import React from 'react'
import {FaFacebookF,FaTwitter,FaLinkedin,FaInstagram} from 'react-icons/fa'

const Chefs = () => {
  return (
    <div>
        <div className='relative w-[360px] h-[426px] bg-white rounded-2xl cursor-pointer'>
            <div className='absolute'>
                <Image src={"/images/t2.png"} alt="" width={"360px"} height="400px"/>
            </div>
            <div className='absolute bottom-10 left-1/4 w-full'>
                <ul className='flex gap-x-2 text-2xl'>
                    <li className='p-2 bg-white rounded-full grid place-content-center'><FaFacebookF/></li>
                    <li className='p-2 bg-white rounded-full grid place-content-center'><FaTwitter/></li>
                    <li className='p-2 bg-white rounded-full grid place-content-center'><FaLinkedin/></li>
                    <li className='p-2 bg-white rounded-full grid place-content-center'><FaInstagram/></li>
                </ul>
            </div>
            <div>
                <h1>Ajay S.</h1>
            </div>
        </div>
    </div>
  )
}

export default Chefs