import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Home size={24} className="text-accent-400 mr-2" />
              <span className="font-bold text-xl">Apna Ghar</span>
            </div>
            <p className="text-gray-400 mb-4">
              Initiative by D Y PATIL EDUCATIONAL FEDERATION Students. Finding affordable accommodation made easy.
            </p>
            <p className="text-accent-400 font-medium">By the students, for the students</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-accent-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  D Y Patil Educational Complex, Sector 29, Nigdi, Pimpri-Chinchwad, Maharashtra 411044
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-accent-400 mr-2 flex-shrink-0" />
                <a href="mailto:contact@Apna Ghar.in" className="text-gray-400 hover:text-white transition-colors">
                  contact@Apna Ghar.in
                </a>
              </li>
            </ul>
            
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Apna Ghar - Initiative by D Y PATIL EDUCATIONAL FEDERATION Students. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;