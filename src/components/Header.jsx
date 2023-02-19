import React, { useState } from "react";
import Logo from "../assets/img/logo.png";

//import components
import Nav from "./Nav.jsx";
import NavMobile from "./NavMobile";

//import react icons
import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header
      className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0'
      data-aos='fade-down'
      data-aos-delay='600'
      data-aos-duration='1000'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-[120px]'>
            {/* Logo */}
            <a href='#'>
              <img src={Logo} alt='' />
            </a>

            <div className='hidden lg:flex'>
              {/* nav initially hidden, only show on large screens */}
              <Nav />
            </div>
          </div>
          <div
            className={`${
              navMobile ? "max-h-52" : "max-h-0"
            } lg:hidden absolute top-24 bg-accent-teriary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden
            `}>
            {/* Mobile nav - Initially is showing / hidden on large screens */}
            <NavMobile />
          </div>
          {/* Button */}
          <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>
            Request Demo
            <BsArrowRight className='text-2xl text-accent-primary group-hover:text-white transition' />
          </button>
          {/* Nav Trigger Button - Only shows on mobile view  */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className='lg:hidden text-2xl text-primary cursor-pointer'>
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
