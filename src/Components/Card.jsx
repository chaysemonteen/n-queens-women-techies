import React from 'react';
import styles from '../index.css';
import { IoTimeOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IconContext } from 'react-icons';

const Card = (props) => {
  return (
    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover dark:bg-[hsl(324,100%,89%)] dark:border-gray-700 dark:hover:bg-[hsl(324,100%,85%)] transition ease-in-out duration-0.5s transform hover:-translate-y-1">
      <img src={props.imageurl} alt="image"/>
      <p className="font-normal text-[#000] text-lg font-semibold">{props.title}</p>
      <p className="font-normal text-[#000]">{props.value}</p>
      <hr className="my-2 border-t border-gray-300 dark:border-gray-600" />
      <div className='flex w-full items-center'>
        <IconContext.Provider value={{ color: "#000"}}>
          <IoTimeOutline/>
        </IconContext.Provider>
        <div className='ml-1 text-[#000]'>
          {props.year}
        </div>
        <IconContext.Provider value={{color: "#000"}}>
          <IoHeartOutline className='ml-[150px]'/>
        </IconContext.Provider>
        <div className='ml-1 text-[#000]'>
          {props.likes}
        </div>
      </div>
    </a>
  );
}

export default Card;

