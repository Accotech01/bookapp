import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
      const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#F19595] text-white">
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">reBuk</h3>
            <p className="text-white">Your Library on the internet</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-white hover:text-gray-200">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white hover:text-gray-200">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul>
              <li className="mb-2">
                <Link to="/faq" className="text-white hover:text-gray-200">FAQ</Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="text-white hover:text-gray-200">Terms</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" className="text-white hover:text-gray-200">Privacy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  <FaFacebook size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  <FaTwitter size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  <FaInstagram size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  <FaLinkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white">
          <p>&copy; {currentYear} reBuk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;