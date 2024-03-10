import React from 'react';
import signupimg from '../images/login.png';
import Header from './Header';  
import googlesvg from '../images/google.svg';

const LoginHR = () => {
  return (
    <div>
      {/* Include the Header component */}
      <Header />

      {/* Main Login content */}
      <div className="min-h-screen bg-4F3E04 text-white flex justify-center items-center ml-60">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white flex justify-center flex-1">
          {/* Left Side */}
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 shadow-md">
            <div className=" mt-auto flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabol text-black">
                Welcome HR
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="w-full px-8 py-4 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  />
                  <button
                    className="mt-5 tracking-wide font-semibold bg-black text-white w-full py-4 hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-3">Login In</span>
                  </button>
                  <div className="mt-6 text-xs text-gray-600 text-center">
                    Don't have an account?
                  </div>
                  <button
                    className="mt-5 tracking-wide font-semibold bg-black text-white w-full py-4 hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-3">Sign Up</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by AllyLink's 
                    <a href="#" className="border-b border-gray-500 border-dotted">
                    {' '} Terms of Service
                    </a>
                    {' '} and its 
                    <a href="#" className="border-b border-gray-500 border-dotted">
                    {' '} Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${signupimg})` }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoginHR;
