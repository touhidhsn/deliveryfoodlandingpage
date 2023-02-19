import React from "react";

//import footer Data

import { footerData } from "../data.js";

//import copyright
import Copyright from "./Copyright";

const Footer = () => {
  const { logo, address, email, phone, list1, list2, socialist } = footerData;
  return (
    <footer>
      <div className='container mx-auto' data-aos='fade-down'>
        <div className='flex flex-col text-center xl:flex-row xl:text-left gap-y-12'>
          <div className='w-[45%] mx-auto flex flex-col items-start'>
            {/* Logo */}
            <a className=' mx-auto xl:mx-0' href='#'>
              <img className='mb-[65px]' src={logo} alt='' />
            </a>
            {/* address */}
            <div className='max-w-[260px] mb-5 text-primary font-bold mx-auto xl:mx-0'>
              {address}
            </div>
            {/* email */}
            <div className='font-light text-italic mx-auto xl:mx-0'>
              {email}
            </div>
            {/* phone */}
            <div className='font-light text-italic mx-auto xl:mx-0'>
              {phone}
            </div>
          </div>
          {/* Lists */}

          <div className='flex flex-1 flex-col gap-y-14 xl:flex-row justify-between'>
            {/* List1 */}
            <div>
              <div className='font-extrabold text-primary mb-8'>About</div>
              <ul className='flex flex-col gap-y-4'>
                {list1.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className='text-primary' href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* List2 */}
            <div>
              <div className='font-extrabold text-primary mb-8'>Help</div>
              <ul className='flex flex-col gap-y-4'>
                {list2.map((item, index) => {
                  return (
                    <li key={index} className='text-primary'>
                      <a href={item.href}>{item.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Social Media */}
            <div>
              <div className='font-extrabold text-primary mb-8'>
                Social Media
              </div>
              <ul className='flex gap-y-4 gap-x-4 justify-center'>
                {socialist.map((item, index) => {
                  return (
                    <li
                      className='w-10 h-10 bg-primary/10 rounded-full flex justify-center cursor-pointer hover:bg-accent-secondary transition-all '
                      key={index}>
                      <a
                        className='text-white text-xl hover:text-white flex items-center'
                        href={item.href}>
                        {item.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
