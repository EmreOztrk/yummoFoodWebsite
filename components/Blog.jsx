import Image from 'next/image'
import React from 'react'
import BlogProduct from './BlogProducts/BlogProduct'
import Title from './ui/Title'



const Blog = () => {
  return (
    <div className='container mx-auto mt-20 mb-[700px]'>
       <div className={`cursor-pointer`}>
            <div className='text-center flex flex-col items-center'>
                <div>
                    <Title addClass={"text-brown text-[40px]"}>From the Blog</Title>
                </div>
                <div className='relative w-40 h-5'>
                    <Image src={"/images/heading-dark.png"} alt="" layout='fill'/>
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-y-10 gap-x-5 mt-12'>
                <BlogProduct/>
                <BlogProduct/>
                <BlogProduct/>
            </div>
       </div>
    </div>
  )
}

export default Blog