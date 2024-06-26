import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import './App.css'; // Add your custom CSS here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-700 text-white p-4 fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold"><a href="https://www.ilearningscareer.com/">iLearnings</a></div>
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="hover:underline underline-offset-2">About</a>
          <a href="#program" className="hover:underline underline-offset-2">Program</a>
          <a href="#admissions" className="hover:underline underline-offset-2">Admissions</a>
          <a href="#contact" className="hover:underline underline-offset-2">Contact</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center">
          <a href="#about" className="block py-2 px-4 text-sm hover:bg-sky-900">About</a>
          <a href="#program" className="block py-2 px-4 text-sm hover:bg-sky-900">Programs</a>
          <a href="#admissions" className="block py-2 px-4 text-sm hover:bg-sky-900">Admissions</a>
          <a href="#contact" className="block py-2 px-4 text-sm hover:bg-sky-900">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
