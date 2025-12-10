import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For hamburger icon

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <span className="text-2xl font-bold text-[#F19595]">reBuk</span>

        {/* Hamburger button (mobile only) */}
        <button 
          className="md:hidden text-gray-600" 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link to="/" className="text-gray-600 hover:text-[#F19595]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-600 hover:text-[#F19595]">
              About
            </Link>
          </li>
          <button className="bg-[#F19595] hover:bg-[#F19595]/80 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col mt-4 space-y-4 md:hidden">
          <li>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-[#F19595]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-[#F19595]"
            >
              About
            </Link>
          </li>
          <button className="bg-[#F19595] hover:bg-[#F19595]/80 text-white font-bold py-2 px-4 rounded w-fit">
            Get Started
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Header;