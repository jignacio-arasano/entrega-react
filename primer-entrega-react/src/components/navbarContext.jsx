// NavbarContext.js
import React, { createContext, useState, useContext } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContext.Provider value={{ isOpen, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);