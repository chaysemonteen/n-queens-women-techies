import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Button from './Button';

const Header = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  
  return (
    <header className="bg-transparent text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* AllyLink on the left */}
        <div className="flex items-center">
          <h1 className="text-2xl font-extrabold text-black mr-4">AllyLink</h1>
        </div>

        
        {/* Navigation links in the center */}
        <nav className="flex flex-grow justify-center">
        <ul className='hidden md:flex text-white'>
        <a href="#"><li className='p-4'>Microagression Detection</li></a>
        <a href="#"><li className='p-4'>Anonymous Report</li></a>
        <a href="#"><li className='p-4'>Legal Guidance Chatbot</li></a>
        <a href="#"><li className='p-4'>Newsboard</li></a>
        <a href="#"><li className='p-4'>Blog</li></a>
        <div className="flex items-center">
        <a href="#"><button className=" text-black px-4 py-2 rounded-full ">Login</button></a>
        <a href="#"><button className=" text-black px-4 py-2 rounded-full">Sign Up</button></a>
    
        </div>
        
      </ul>
        </nav>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#fff] m-4'>Allylink</h1>
          <a href="#"><li className='p-4 border-b border-gray-600 text-[#e4e4e4]'>Microagression Detection</li></a>
          <a href="#"><li className='p-4 border-b border-gray-600 text-[#e4e4e4]'>Anonymous Report</li></a>
          <a href="#"><li className='p-4 border-b border-gray-600 text-[#e4e4e4]'>Legal Guidance Chatbot</li></a>
          <a href="#"><li className='p-4 border-b border-gray-600 text-[#e4e4e4]'>Newsboard</li></a>
          <a href="#"><li className='p-4 text-[#e4e4e4]'>Blog</li></a>
          
      </ul>
    </div>

       
     
    </header>
  );
};

export default Header;
