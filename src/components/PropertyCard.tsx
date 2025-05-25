import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square as SquareFoot, Tag } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, featured = false }) => {
  return (
    <div 
      className={`card card-hover group animate-fade-in ${
        featured || property.featured
          ? 'border-2 border-accent-400' 
          : 'border border-gray-200'
      }`}
    >
      {(featured || property.featured) && (
        <div className="absolute top-3 left-3 z-10 bg-accent-400 text-white px-3 py-1 rounded-full text-xs font-medium">
          Featured
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 bg-white rounded-full py-1 px-3 text-sm font-medium text-primary-700">
          {property.type}
        </div>
        <div className="absolute bottom-3 right-3 bg-primary-700 rounded-full py-1 px-3 text-sm font-medium text-white flex items-center">
          <Tag size={14} className="mr-1" />
          <span>50% Less Brokerage</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-700 transition-colors">
            {property.title}
          </h3>
          <p className="text-accent-600 font-bold">₹{property.price}</p>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <MapPin size={14} className="mr-1" />
          <span>{property.address}</span>
        </div>
        
        <div className="text-gray-500 text-sm mt-1">
          <span>{property.distance}</span>
        </div>
        
        <div className="flex items-center gap-3 mt-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" />
            <span>{property.rooms} {property.rooms > 1 ? 'Rooms' : 'Room'}</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>{property.bathrooms} {property.bathrooms > 1 ? 'Baths' : 'Bath'}</span>
          </div>
          <div className="flex items-center">
            <SquareFoot size={16} className="mr-1" />
            <span>{property.area}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex flex-wrap gap-1">
            {property.amenities.slice(0, 3).map((amenity, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {amenity}
              </span>
            ))}
            {property.amenities.length > 3 && (
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                +{property.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex">
          <Link 
            to={`/property/${property.id}`} 
            className="btn-primary flex-1 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;