import React from "react";
import { heroData } from "../data.js";
//import components
import Header from "./Header.jsx";

function Hero() {
  //destructure hero data
  const { title, subtitle, btnText, image } = heroData;
  return (
    <section className='lg:h-[900px] py-12'>
      <Header />

      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
          <div
            className='text-center xl:text-left xl:ab
          '>
            <h1
              className='h1 xl:w-[700px] mb-6 lg:mb-12'
              data-aos='fade-down'
              data-aos-delay='400'>
              {title}
            </h1>
            <p
              className='xl:max-w-[380px] lg:mb-12 mb-4'
              data-aos='fade-down'
              data-aos-delay='500'>
              {subtitle}
            </p>
            <button
              className='btn btn-primary mb-8 xl:mb-0
            '
              data-aos='fade-down'
              data-aos-delay='600'>
              {btnText}
            </button>
            <div
              className='xl:absolute xl:-right-12 xl:bottom-16'
              data-aos='fade-up'
              data-aos-delay='600'>
              <img src={image} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
