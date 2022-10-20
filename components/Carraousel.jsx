import Image from 'next/image'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const Carraousel = () => {
    function NextBtn({ onClick }) {
        return (
          <button
            className="absolute hidden z-20 text-2xl top-2/4 right-16 hover:bg-primary cursor-pointer bg-secondary sm:flex items-center justify-center w-[70px] h-[70px]  rounded-full text-white"
            onClick={onClick}
          >
            <IoIosArrowForward />
          </button>
        );
      }
    
      function PrevBtn({ onClick }) {
        return (
          <button type='button'
            className="absolute hidden text-2xl z-20 top-2/4 left-16 hover:bg-primary  bg-secondary sm:flex items-center justify-center w-[70px] h-[70px] rounded-full text-white mr-2"
            onClick={onClick}
          >
            
            <IoIosArrowBack />
          </button>
        );
      }
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
  return (
        <div className=' sm:-mt-[72px] mt-2 -z-10'>
            <Slider {...settings} className="">
                <div className='relative sm:w-full sm:h-screen w-full h-[231px]'>
                        <Image src={"/images/slider1.jpg"} alt="" layout='fill' objectFit='cover'/>
                </div>
                <div className='relative sm:w-full sm:h-screen w-full h-[231px]'>
                        <Image src={"/images/slider2.jpg"} alt="" layout='fill' objectFit='cover'/>
                </div>
                <div className='relative sm:w-full sm:h-screen w-full h-[231px]'>
                        <Image src={"/images/slider3.jpg"} alt="" layout='fill' objectFit='cover'/>
                </div>
            </Slider>
        </div>
  )
}

export default Carraousel

