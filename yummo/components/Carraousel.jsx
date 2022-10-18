import Image from 'next/image'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const Carraousel = () => {
    function NextBtn({ onClick }) {
        return (
          <button
            className="absolute z-20 text-2xl top-2/4 right-16 hover:bg-primary cursor-pointer bg-secondary flex items-center justify-center w-16 h-16 rounded-full text-white"
            onClick={onClick}
          >
            <IoIosArrowForward />
          </button>
        );
      }
    
      function PrevBtn({ onClick }) {
        return (
          <button type='button'
            className="absolute text-2xl z-20 top-2/4 left-16 hover:bg-primary  bg-secondary flex items-center justify-center w-[70px] h-[70px] rounded-full text-white mr-2"
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
        <div className=' -mt-[72px] -z-10'>
            <Slider {...settings} className="">
                <div className='relative w-full h-screen'>
                        <Image src={"/images/slider1.jpg"} alt="" layout='fill'/>
                </div>
                <div className='relative w-full h-screen'>
                        <Image src={"/images/slider2.jpg"} alt="" layout='fill'/>
                </div>
                <div className='relative w-full h-screen'>
                        <Image src={"/images/slider3.jpg"} alt="" layout='fill'/>
                </div>
            </Slider>
        </div>
  )
}

export default Carraousel

