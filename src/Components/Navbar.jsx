import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Button from './Button';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#000] font-bold '>
      <h1 className='w-full text-3xl font-bold text-[#000]'>ALLYLINK</h1>
      <ul className='hidden md:flex'>
        <a href="#"><li className='p-4'>Microagression Detection</li></a>
        <a href="#"><li className='p-4'>Anonymous Report</li></a>
        <a href="#"><li className='p-4'>Legal Guidance Chatbot</li></a>
        <a href="#"><li className='p-4'>Newsboard</li></a>
        <a href="#"><li className='p-4'>Blog</li></a>
        <a href="#"><li className='p-4'><Button label="HR Sign Up"/></li></a>
        <a href="#"><li className='p-4'><Button label="Employee Sign Up"/></li></a>

        
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#e4e4e4] m-4'>ALLYLINK</h1>
          <a href="#"><li className='p-4 border-b border-gray-600 text-[#e4e4e4]'>Microagression Detection</li></a>
          <a href="#"><li className='p-4 border-b border-gray-600 text-[#e4e4e4]'>Anonymous Report</li></a>
          <a href="#"><li className='p-4 border-b border-gray-600 text-[#e4e4e4]'>Legal Guidance Chatbot</li></a>
          <a href="#"><li className='p-4 border-b border-gray-600 text-[#e4e4e4]'>Newsboard</li></a>
          <a href="#"><li className='p-4 text-[#e4e4e4]'>Blog</li></a>
          
      </ul>
    </div>
  );
};

export default Navbar;