import React from 'react';
import { useNavbar } from './navbarContext';

const Navbar = () => {
  const { isOpen, toggleNavbar } = useNavbar();
  console.log(isOpen);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="#" className="text-white font-bold text-xl">Logo</a>
        </div>
        <div className="hidden md:flex md:items-center">
          <a href="#" className="text-white px-3 py-2">Link 1</a>
          <a href="#" className="text-white px-3 py-2">Link 2</a>
          <a href="#" className="text-white px-3 py-2">Link 3</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col">
          <a href="#" className="text-white px-3 py-2">Link 1</a>
          <a href="#" className="text-white px-3 py-2">Link 2</a>
          <a href="#" className="text-white px-3 py-2">Link 3</a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;