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
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/list-property" className="text-gray-400 hover:text-white transition-colors">
                  List Your Property
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?type=PG" className="text-gray-400 hover:text-white transition-colors">
                  PG Accommodations
                </Link>
              </li>
              <li>
                <Link to="/properties?type=Hostel" className="text-gray-400 hover:text-white transition-colors">
                  Hostels
                </Link>
              </li>
              <li>
                <Link to="/properties?type=Flat" className="text-gray-400 hover:text-white transition-colors">
                  Shared Flats
                </Link>
              </li>
              <li>
                <Link to="/properties?gender=Female" className="text-gray-400 hover:text-white transition-colors">
                  Girls Accommodation
                </Link>
              </li>
              <li>
                <Link to="/properties?gender=Male" className="text-gray-400 hover:text-white transition-colors">
                  Boys Accommodation
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
                <Phone size={18} className="text-accent-400 mr-2 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-accent-400 mr-2 flex-shrink-0" />
                <a href="mailto:contact@Apna Ghar.in" className="text-gray-400 hover:text-white transition-colors">
                  contact@Apna Ghar.in
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
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