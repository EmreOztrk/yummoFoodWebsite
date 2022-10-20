import Image from 'next/image'
import React from 'react'
import HeaderLinkItem from '../Links/HeaderLinkItem'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
  return (
    <div className='container sm:mx-auto flex justify-between items-center mt-2 sm:px-0 px-10 bg-transparent relative z-40'>
        <div className='relative w-52 h-16 cursor-pointer'>
            <Image src={"/images/logo_.png"} alt="logo" layout='fill'/>
        </div>
        <div className='flex '>
            <ul className='sm:flex gap-x-5 hidden'>
                <li><HeaderLinkItem linkItem={"#"}>Home</HeaderLinkItem></li>
                <li><HeaderLinkItem linkItem={"#"}>About Us</HeaderLinkItem></li>
                <li><HeaderLinkItem linkItem={"#"}>Menu</HeaderLinkItem></li>
                <li><HeaderLinkItem linkItem={"#"}>Reservation</HeaderLinkItem></li>
                <li><HeaderLinkItem linkItem={"#"}>Blog</HeaderLinkItem></li>
                <li><HeaderLinkItem linkItem={"#"}>Contact Us</HeaderLinkItem></li>
            </ul>
            <button className='sm:hidden display-block text-4xl cursor-pointer text-brown'>
              <GiHamburgerMenu/>
            </button>
        </div>
    </div>
  )
}

export default Header