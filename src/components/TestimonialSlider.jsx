import React from "react";

//import testomonial data
import { testimonialData } from "../data.js";

//import swiper react components

import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";

import { Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper'>
      {testimonialData.map((slide, index) => {
        const { image, message, name, web } = slide;
        return (
          <SwiperSlide
            key={index}
            className='bg-white rounded-xl border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex!important items-start gap-x-[30px] shadow-xl'>
            {/* avatar images */}
            <img src={image} alt='' />
            {/* text */}
            <div>
              <div className='text-lg text-primary font-bold'>{name}</div>
              <div className='mb-4 font-semibold text-accent-primary'>
                {web}
              </div>
              <p className='max-w-[240px]'>{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
