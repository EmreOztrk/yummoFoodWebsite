import Image from 'next/image'
import React from 'react'
import {FaFacebookF,FaTwitter,FaLinkedin,FaInstagram} from 'react-icons/fa'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Chefs = () => {
    const [cursorCheck, setCursorCheck] = useState(false);


    const variants = {
        true: {y: -100, opacity:0.4},
        false: {y: 0, opacity:1},
    }
    const variantSecond = {
        true: {y: -100, opacity:1},
        false: {y: 0, opacity:0},
    }
  return (
    <div>
        <div className='relative w-[360px] h-[426px] bg-white rounded-2xl overflow-hidden' onMouseMove={() => setCursorCheck(true)} onMouseOut={() => setCursorCheck(false)}>
            <motion.div 
            className='absolute'
            animate={cursorCheck == true ? "true" : "false"}
            variants={variants}
            transition={{duration:1}}>
                <Image src={`/images/t2.png`} alt="" width={"360px"} height="400px"/>
            </motion.div>
            <div className='absolute bottom-10 left-1/4 w-full'>
                <ul className='flex gap-x-2 text-2xl'>
                    <motion.li className=''
                    animate={cursorCheck == true ? "true" : "false"}
                    variants= {variantSecond}
                    transition={{duration:1.4}}
                    ><motion.div className='p-2 bg-white rounded-full grid place-content-center'
                    whileHover={{rotateY:360}}
                    whileTap={{rotateY:0}}
                    transition={{duration:0.5}}
                    ><a href="#"><FaFacebookF/></a></motion.div></motion.li>
                    <motion.li className=''
                    animate={cursorCheck == true ? "true" : "false"}
                    variants= {variantSecond}
                    transition={{duration:1.4}}
                    ><motion.div className='p-2 bg-white rounded-full grid place-content-center'
                    whileHover={{rotateY:360}}
                    whileTap={{rotateY:0}}
                    transition={{duration:0.5}}
                    ><a href="#"><FaTwitter/></a></motion.div></motion.li>
                    <motion.li className=''
                    animate={cursorCheck == true ? "true" : "false"}
                    variants= {variantSecond}
                    transition={{duration:1.4}}
                    ><motion.div className='p-2 bg-white rounded-full grid place-content-center'
                    whileHover={{rotateY:360}}
                    whileTap={{rotateY:0}}
                    transition={{duration:0.5}}
                    ><a href="#"><FaLinkedin/></a></motion.div></motion.li>
                    <motion.li className=''
                    animate={cursorCheck == true ? "true" : "false"}
                    variants= {variantSecond}
                    transition={{duration:1.4}}
                    ><motion.div className='p-2 bg-white rounded-full grid place-content-center'
                    whileHover={{rotateY:360}}
                    whileTap={{rotateY:0}}
                    transition={{duration:0.5}}
                    ><a href="#"><FaInstagram/></a></motion.div></motion.li>
                </ul>
            </div>
            <div className={`absolute bottom-10 flex flex-col items-center  transition-all duration-700  w-full ${cursorCheck == true ? "z-20" : "-z-10"}`}>
                <h1 className='text-brown text-2xl font-bold'>Ajay S.</h1>
                <h1 className='text-brown text-xl'>(Senior Chef)</h1>
            </div>
        </div>
    </div>
  )
}

export default Chefs