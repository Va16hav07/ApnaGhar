import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/properties?search=${searchQuery}`);
  };

  return (
    <div className="relative h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg)',
          filter: 'brightness(0.7)'
        }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg animate-fade-in">
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-accent-500 mb-2">Initiative by D Y PATIL EDUCATIONAL FEDERATION Students</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">Find Your Perfect Student Accommodation</h1>
              <p className="text-gray-700 text-lg mb-2">Pay 50% Less Brokerage - By Students, For Students</p>
              <p className="text-gray-600">PGs, Hostels, and Flats near your campus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;