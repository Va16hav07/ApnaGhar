import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { Property } from '../types';
import PropertyDetails from '../components/PropertyDetails';
import PropertyGrid from '../components/PropertyGrid';
import { ChevronLeft } from 'lucide-react';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [similarProperties, setSimilarProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Find the property with the matching ID
      const foundProperty = properties.find(p => p.id === id) || null;
      setProperty(foundProperty);
      
      // Find similar properties (same type, exclude current property)
      if (foundProperty) {
        const similar = properties
          .filter(p => p.type === foundProperty.type && p.id !== foundProperty.id)
          .slice(0, 3);
        setSimilarProperties(similar);
      }
      
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="pt-24 pb-16 flex justify-center items-center h-96">
        <div className="animate-pulse text-primary-700">Loading property details...</div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="pt-24 pb-16 container-custom">
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Property Not Found</h3>
          <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/properties" className="btn-primary">
            Browse All Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom mb-6">
        <Link to="/properties" className="inline-flex items-center text-primary-700 hover:underline">
          <ChevronLeft size={16} className="mr-1" />
          Back to Properties
        </Link>
      </div>
      
      <PropertyDetails property={property} />
      
      {similarProperties.length > 0 && (
        <div className="container-custom mt-16">
          <PropertyGrid 
            properties={similarProperties}
            title="Similar Properties"
            subtitle={`Other ${property.type} accommodations you might like`}
          />
        </div>
      )}
    </div>
  );
};

export default PropertyDetailPage;