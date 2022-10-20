import React from 'react'

const HeaderLinkItem = ({children,linkItem}) => {
  return (
    <a href={`${linkItem}`} className='font-bold relative transition-all duration-300 uppercase after:content-[""] after:absolute after:-bottom-2 after:origin-left after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-[3px] after:bg-red after:transition after:duration-300 hover:text-red'>{children}</a>
  )
}

export default HeaderLinkItem