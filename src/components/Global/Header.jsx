import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span id="Header_3" className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>DreamHome</span>
          </Link>

          {/* Desktop Navigation */}
          <div id="Header_4" className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'text-blue-600' : isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600 transition-colors duration-300`}
            >Home</Link>
            <Link
              to="/propertysearchpage"
              className={`nav-link ${location.pathname === '/propertysearchpage' ? 'text-blue-600' : isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600 transition-colors duration-300`}
            >Search Properties</Link>
            <Link
              to="/authenticationpage"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >Login/Register</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="Header_5"
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div id="Header_6" className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <Link
              to="/"
              className="block py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >Home</Link>
            <Link
              to="/propertysearchpage"
              className="block py-2 text-gray-800 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >Search Properties</Link>
            <Link
              to="/authenticationpage"
              className="block py-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >Login/Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;