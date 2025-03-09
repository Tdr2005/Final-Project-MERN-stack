import React, { useState, useEffect } from 'react';
import { FaCaretDown } from "react-icons/fa";
import { BiPhoneCall, BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from '../Navbar/ResponsiveMenu';

const Nav = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const [showMenu, setShowMenu] = useState(false);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]); // Added theme as a dependency

  return (
    <>
      <nav className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white fixed top-0 w-full border-b border-gray-300'>
        <div className="container mx-auto p-4">
          <div className='flex items-center justify-between'>
            {/* Logo Section */}
            <div className='text-3xl font-bold'>
              <a href="#">
                Change <span className='text-yellow-300'>Makers</span>
              </a>
            </div>
            {/* Desktop Section */}
            <div className='hidden md:flex items-center space-x-8'>
              <ul className='flex items-center space-x-6'>
                <li className='group relative'>
                  <a href="#home" className='flex items-center gap-1'>
                    Home
                    <FaCaretDown className='transition-transform duration-200 group-hover:rotate-180' />
                  </a>
                  {/* Dropdown */}
                  <div className='absolute left-0 mt-2 w-48 bg-white shadow-lg text-black rounded-md hidden group-hover:block z-10'>
                    <ul className='space-y-2 p-2'>
                      <li className='px-4 py-2 hover:bg-gray-200'>Service</li>
                      <li className='px-4 py-2 hover:bg-gray-200'>About Us</li>
                      <li className='px-4 py-2 hover:bg-gray-200'>Privacy Policy</li>
                    </ul>
                  </div>
                </li>
                <li>About Us</li>
                <li>
                  <div className='flex items-center gap-2'>
                    <BiPhoneCall className='text-2xl bg-yellow-600 p-2 rounded-full' />
                    <div>
                      <p>Talk To Us</p>
                      <p>+91 9322313234</p>
                    </div>
                  </div>
                </li>
              </ul>
              {/* Light and Dark Mode */}
              {theme === "dark" ? (
                <BiSolidSun className='text-2xl cursor-pointer' onClick={() => setTheme("light")} aria-label="Switch to Light Mode" />
              ) : (
                <BiSolidMoon className='text-2xl cursor-pointer' onClick={() => setTheme("dark")} aria-label="Switch to Dark Mode" />
              )}
              {/* Search Bar */}
              <input
                type="text"
                placeholder="Search..."
                className='px-4 py-2 rounded-full bg-gray-200 text-black'
                aria-label="Search"
              />
            </div>
            {/* Mobile Section */}
            <div className='md:hidden flex items-center space-x-4'>
              {theme === "dark" ? (
                <BiSolidSun className='text-2xl cursor-pointer' onClick={() => setTheme("light")} aria-label="Switch to Light Mode" />
              ) : (
                <BiSolidMoon className='text-2xl cursor-pointer' onClick={() => setTheme("dark")} aria-label="Switch to Dark Mode" />
              )}
              {showMenu ? (
                <HiMenuAlt1 onClick={toggleMenu} className="text-2xl cursor-pointer" />
              ) : (
                <HiMenuAlt3 onClick={toggleMenu} className="text-2xl cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Side Menu */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
}

export default Nav;
