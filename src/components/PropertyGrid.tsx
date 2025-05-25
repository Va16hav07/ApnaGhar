import React from 'react';
import { Property } from '../types';
import PropertyCard from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
  title: string;
  subtitle?: string;
  featured?: boolean;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, title, subtitle, featured = false }) => {
  if (properties.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-600 mb-8">{subtitle}</p>}
        <p className="text-gray-500">No properties found.</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} featured={featured} />
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;