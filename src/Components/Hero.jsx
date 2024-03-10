import { TypeAnimation } from 'react-type-animation';
import React from 'react';
const Hero = () => {
  return (


     <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
    <TypeAnimation className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
      sequence={[


 "A woman is the full circle. Within her is the power to create, nurture, and transform.",

"The most courageous act is still to think for yourself. Aloud.",

"I am not afraid of storms, for I am learning how to sail my ship.",

"You are more powerful than you know; you are beautiful just as you are.",

"The question isn't who's going to let me; it's who is going to stop me.",

"Women are like tea bags – you never know how strong they are until they get in hot water.",

"I am no bird; and no net ensnares me: I am a free human being with an independent will.",

"The most effective way to do it, is to do it.",

"I am not a has-been. I am a will be.",

"We need to reshape our own perception of how we view ourselves. We have to step up as women and take the lead."
      ]}
      wrapper="span"
      // speed={100}
      deletionSpeedpeed={100}
      style={{ fontSize: '2em', display: 'inline-block',color:'#000'}}
      repeat={Infinity}
    />
    </div>
  );
};
export default Hero;