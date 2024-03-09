import React from 'react';
import styles from '../index.css';
import { CiCalendar } from "react-icons/ci";
import { IconContext } from 'react-icons';

const Card = (props) => {
  return (
    <a href={props.url} className="card block w-[30vw] max-w-[65vw] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover dark:bg-[hsl(324,100%,89%)] dark:border-gray-700 dark:hover:bg-[hsl(324,100%,85%)] transition ease-in-out duration-0.5s transform hover:-translate-y-1">
      <div className='flex w-full justify-center items-center'>
        <img src={props.imageurl} alt="Cannot display image."/>
      </div>
      <p className="text-[#000] text-lg font-semibold mt-3">{props.title}</p>
      <p className="font-normal text-[#000] mt-1">{props.value}</p>
      <hr className="my-2 border-t border-gray-300 dark:border-gray-600" />
      <div className='flex w-full items-center'>
        <IconContext.Provider value={{ color: "#000"}}>
          <CiCalendar/>
        </IconContext.Provider>
        <div className='ml-1 text-[#000]'>
          {props.year}
        </div>
      </div>
    </a>
  );
}

export default Card;

