
import React from 'react';

const Button = ({ label }) => {
  return (
    <button className='h-14 w-32 px-2 font-montserrat border text-lg bg-[#FF016D] rounded-[10%] text-white border-coral-red transition-all duration-300 hover:bg-white hover:text-[#FF016D]'>
      {label}
    </button>
  );
};

export default Button;
