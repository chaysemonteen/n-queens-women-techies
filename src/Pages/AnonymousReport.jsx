import React from 'react'

const AnonymousReport = () => {
  return (
    
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black border border-[#FF016D] focus:border-[#FF016D]'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#FF016D] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 transition-all duration-300 hover:bg-white hover:text-[#FF016D] border hover:border-[#FF016D]'>
                Notify HR
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#FF016D]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};


export default AnonymousReport
