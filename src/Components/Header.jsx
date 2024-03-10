import React from 'react';

const Header = () => {
  return (
    <header className="bg-transparent text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* AllyLink on the left */}
        <div className="flex items-center">
          <h1 className="text-2xl font-extrabold text-black mr-4">AllyLink</h1>
        </div>

        {/* Navigation links in the center */}
        <nav className="flex flex-grow justify-center">
          <a href="#" className="text-black mx-4">Microaggression Detection</a>
          <a href="#" className="text-black mx-4">Anonymous Report</a>
          <a href="#" className="text-black mx-4">Legal Guidance Chatbot</a>
          <a href="#" className="text-black mx-4">Newsboard</a>
          <a href="#" className="text-black mx-4">Blog</a>
        </nav>

        {/* Login and Sign Up buttons on the right */}
        <div className="flex items-center">
          <button className=" text-black px-4 py-2 rounded-full mr-4">Login</button>
          <button className=" text-black px-4 py-2 rounded-full">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
