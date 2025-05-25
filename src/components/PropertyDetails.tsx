import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square as SquareFoot, Calendar, Tag, User, Phone, Mail, ArrowLeft, ArrowRight } from 'lucide-react';
import { Property } from '../types';
import ContactForm from './ContactForm';

interface PropertyDetailsProps {
  property: Property;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container-custom py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-96 rounded-lg overflow-hidden mb-6">
            <img 
              src={property.images[currentImageIndex]} 
              alt={`${property.title} - Image ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover"
            />
            
            {property.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition-all"
                  aria-label="Previous image"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition-all"
                  aria-label="Next image"
                >
                  <ArrowRight size={20} />
                </button>
              </>
            )}
            
            <div className="absolute bottom-4 left-4 flex gap-2">
              <div className="bg-primary-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                {property.type}
              </div>
              <div className="bg-accent-400 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <Tag size={14} className="mr-1" />
                <span>50% Less Brokerage</span>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
              <p className="text-2xl font-bold text-accent-600">₹{property.price.toLocaleString()}/month</p>
            </div>
            
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin size={18} className="mr-2" />
              <span>{property.address}</span>
            </div>
            
            <div className="bg-primary-50 p-4 rounded-lg mb-6">
              <p className="text-primary-800">
                <span className="font-medium">Distance from D Y Patil:</span> {property.distance}
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
                <Bed size={24} className="text-primary-700 mb-2" />
                <span className="text-sm text-gray-600">Rooms</span>
                <span className="font-semibold">{property.rooms}</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
                <Bath size={24} className="text-primary-700 mb-2" />
                <span className="text-sm text-gray-600">Bathrooms</span>
                <span className="font-semibold">{property.bathrooms}</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
                <SquareFoot size={24} className="text-primary-700 mb-2" />
                <span className="text-sm text-gray-600">Area</span>
                <span className="font-semibold">{property.area} sq.ft</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-gray-700">{property.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3">Suitable For</h2>
              <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                <User size={20} className="text-primary-700 mr-2" />
                <span>{property.gender === 'Any' ? 'All students' : `${property.gender} students only`}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Interested in this property?</h2>
            <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you shortly.</p>
            
            <ContactForm propertyId={property.id} propertyTitle={property.title} />
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-600 text-sm mb-4">You can also reach us directly:</p>
              <div className="flex items-center mb-3">
                <Phone size={18} className="text-primary-700 mr-2" />
                <a href="tel:+919876543210" className="text-primary-700 hover:underline">+91 98765 43210</a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-primary-700 mr-2" />
                <a href="mailto:contact@Apna Ghar.in" className="text-primary-700 hover:underline">contact@Apna Ghar.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;