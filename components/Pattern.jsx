import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Title from "./ui/Title";

const Pattern = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div className="w-full bg-cream_dark pb-[70px]">
        <div className="container mx-auto">
      <div className="flex flex-col items-center mb-12 pt-12">
        <Title addClass={"text-brown text-[40px]"}>Our Patner’s</Title>
        <div className="relative w-40 h-5">
          <Image src={"/images/heading-dark.png"} alt="" layout="fill" />
        </div>
      </div>
      <div>
        <Slider {...settings}>
          <div>
            <div className="relative w-[186px] h-36">
              <Image
                src={"/images/special1.jpg"}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div>
            <div className="relative w-[186px] h-36">
              <Image
                src={"/images/special1.jpg"}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div>
            <div className="relative w-[186px] h-36">
              <Image
                src={"/images/special1.jpg"}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div>
            <div className="relative w-[186px] h-36">
              <Image
                src={"/images/special1.jpg"}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div>
            <div className="relative w-[186px] h-36">
              <Image
                src={"/images/special1.jpg"}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div>
            <div className="relative w-[186px] h-36">
              <Image
                src={"/images/special1.jpg"}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div>
            <div className="relative w-[186px] h-36">
              <Image
                src={"/images/special1.jpg"}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div>
            <div className="relative w-[186px] h-36">
              <Image
                src={"/images/special1.jpg"}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div>
            <div className="relative w-[186px] h-36">
              <Image
                src={"/images/special1.jpg"}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default Pattern;
