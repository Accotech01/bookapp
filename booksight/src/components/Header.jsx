import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div>
        <span className="text-2xl font-bold" style={{ color: '#F19595' }}>reBuk</span>
      </div>
      <ul className="flex items-center space-x-4">
        <li>  
            <Link to="/" className="text-gray-600 hover:text-[#F19595] cursor-pointer">
            Home
            </Link>
        </li>
        <li>
            <Link to="/about" className="text-gray-600 hover:text-[#F19595] cursor-pointer">About
            </Link></li>
        <button className="bg-[#F19595] hover:bg-[#F19595]/80 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </ul>
    </nav>
  );
};

export default Header;