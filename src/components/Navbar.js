import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Anasayfa', to: 'home' },
    { title: 'Ben Kimim?', to: 'about' },
    { title: 'Neler Yapabilirim', to: 'skills' },
    { title: 'Portfolyo', to: 'portfolio' },
    { title: 'İletişim', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-gray-900 shadow-lg z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Sol: Logo ve İsim */}
          <div className="flex items-center space-x-3">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-16 w-16 object-contain"
              />
            </Link>
            <span className="text-2xl md:text-3xl font-bold text-white select-none" style={{ fontFamily: 'Dancing Script, cursive', fontWeight: 500 }}>
              BARIŞ BOZKURT
            </span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 