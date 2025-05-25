import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Search, Heart, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center text-primary-800">
            <Home size={24} className="mr-2" />
            <span className="font-bold text-xl md:text-2xl">Apna Ghar</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <div className="text-center">
            <p className="text-sm text-primary-800 font-semibold">Initiative by D Y PATIL EDUCATIONAL FEDERATION Students</p>
            <p className="text-xs text-accent-600">By the students, for the students</p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-primary-700' : 'text-gray-600 hover:text-primary-700'}`}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className={`text-sm font-medium transition-colors ${isActive('/properties') ? 'text-primary-700' : 'text-gray-600 hover:text-primary-700'}`}
            >
              Properties
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-primary-700' : 'text-gray-600 hover:text-primary-700'}`}
            >
              Contact
            </Link>
          </nav>
        </div>

        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <div className="text-center py-2 border-b border-gray-100">
              <p className="text-sm text-primary-800 font-semibold">Initiative by D Y PATIL EDUCATIONAL FEDERATION Students</p>
              <p className="text-xs text-accent-600">By the students, for the students</p>
            </div>
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-md ${isActive('/') ? 'bg-primary-50 text-primary-700' : 'text-gray-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className={`px-4 py-2 rounded-md ${isActive('/properties') ? 'bg-primary-50 text-primary-700' : 'text-gray-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-md ${isActive('/about') ? 'bg-primary-50 text-primary-700' : 'text-gray-600'}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-md ${isActive('/contact') ? 'bg-primary-50 text-primary-700' : 'text-gray-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button className="btn-accent w-full">
              List Property
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;