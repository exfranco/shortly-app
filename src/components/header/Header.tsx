"use client";

import React, { useState } from 'react';
import './Header.scss';
import Button from '../button/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container flex items-center justify-between p-10">
        <div className="logo font-bold">
          Shortly
        </div>

        <div className="md:hidden">
          <div 
            className={`menu-icon ${isMenuOpen ? 'change' : ''}`} 
            id="menu-btn" 
            onClick={toggleMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>

        <div 
          id="right_header" 
          className={`md:flex items-center justify-between w-full ${isMenuOpen ? 'menu-activo' : 'hidden md:flex'}`}
        >
          <nav className="md:flex-1 pl-0 md:pl-20">
            <ul className="md:flex md:justify-start md:space-x-8">
              <li>
                <a href="#" className="md:text-gray-500">Features</a>
              </li>
              <li>
                <a href="#" className="md:text-gray-500">Pricing</a>
              </li>
              <li>
                <a href="#" className="md:text-gray-500">Resources</a>
              </li>
            </ul>
          </nav>
          <div className="user_side md:flex md:space-x-4 items-center">
            <div className="btn_login cursor-pointer p-2 md:text-gray-500 text-center">
              Login
            </div>
            <Button label="Sign Up" width="w-149" alignment="center" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
