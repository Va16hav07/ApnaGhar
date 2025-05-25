import React from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../types';

interface PropertyGridProps {
  properties: Property[];
  title?: string;
  subtitle?: string;
  featured?: boolean;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ 
  properties, 
  title, 
  subtitle,
  featured = false
}) => {
  return (
    <section className="py-12">
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>}
          {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard 
            key={property.id} 
            property={property} 
            featured={featured ? property.featured : false}
          />
        ))}
      </div>
    </section>
  );
};

export default PropertyGrid;