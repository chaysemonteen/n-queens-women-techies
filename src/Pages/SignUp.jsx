import React from 'react';
import signupimg from '../images/signup2.jpg';
import googlesvg from '../images/google.svg';
import Header from '../Components/Header';


const SignUp = () => {
  return (
    <div>
        <Header/>
    <div className="min-h-screen bg-4F3E04 text-white flex justify-center items-center ml-60 mt-4">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white flex justify-center flex-1">
        {/* Left Side */}
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 shadow-md">
          <div className=" mt-auto flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabol text-black">
              Sign up
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm py-3 bg-black text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <img className="w-6" src={googlesvg} alt="Google" />
                  <span className="ml-4">Sign Up with Google</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with e-mail
                </div>
              </div>

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
                  <img className="w-6" src={googlesvg} alt="Google" />
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
        <div className=" hidden lg:block w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${signupimg})` }}></div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
