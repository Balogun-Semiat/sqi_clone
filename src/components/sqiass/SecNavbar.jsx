import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const SecNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">MyNavbar</div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
        <ul className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} `}>
          <li className="md:ml-4 mt-4 md:mt-0">
            <a href="#home" className="hover:text-gray-300">Home</a>
          </li>
          <li className="md:ml-4 mt-4 md:mt-0">
            <a href="#about" className="hover:text-gray-300">About</a>
          </li>
          <li className="md:ml-4 mt-4 md:mt-0">
            <a href="#services" className="hover:text-gray-300">Services</a>
          </li>
          <li className="md:ml-4 mt-4 md:mt-0">
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SecNavbar;
