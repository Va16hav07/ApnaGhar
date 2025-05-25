import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { properties } from '../data/properties';
import { Property, FilterOptions } from '../types';
import PropertyGrid from '../components/PropertyGrid';
import { Filter } from 'lucide-react';

const PropertiesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    type: '',
    priceRange: [0, 100000],
    gender: '',
  });

  // Filter properties based on search query and filters
  useEffect(() => {
    let result = [...properties];
    
    // Apply search filter if search query exists
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(property => 
        property.title.toLowerCase().includes(query) ||
        property.description.toLowerCase().includes(query) ||
        property.address.toLowerCase().includes(query) ||
        property.type.toLowerCase().includes(query)
      );
    }
    
    // Apply type filter
    if (filters.type) {
      result = result.filter(property => property.type === filters.type);
    }
    
    // Apply price filter - extract numeric part from price strings
    result = result.filter(property => {
      // Extract numbers from price string
      const priceMatch = property.price.match(/\d+/);
      const priceValue = priceMatch ? parseInt(priceMatch[0]) : 0;
      return priceValue >= filters.priceRange[0] && priceValue <= filters.priceRange[1];
    });
    
    // Apply gender filter
    if (filters.gender) {
      result = result.filter(property => 
        property.gender === filters.gender || property.gender === 'Any'
      );
    }
    
    setFilteredProperties(result);
  }, [searchQuery, filters]);

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      type: '',
      priceRange: [0, 100000],
      gender: '',
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Accommodations</h1>
            <p className="text-gray-600">Find your perfect place near D Y Patil Educational Federation</p>
          </div>
          
          <div className="flex mt-4 md:mt-0">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter size={18} />
              <span>Filters</span>
            </button>
          </div>
        </div>
        
        {showFilters && (
          <div className="bg-gray-50 p-4 rounded-lg mb-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                >
                  <option value="">All Types</option>
                  <option value="PG">PG</option>
                  <option value="Hostel">Hostel</option>
                  <option value="Flat">Flat</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={filters.gender}
                  onChange={(e) => handleFilterChange('gender', e.target.value)}
                >
                  <option value="">Any</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <button 
                onClick={resetFilters}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
        
        <PropertyGrid 
          properties={filteredProperties}
          title={searchQuery ? `Search Results for "${searchQuery}"` : "All Accommodations"}
          subtitle={`${filteredProperties.length} properties found`}
        />
      </div>
    </div>
  );
};

export default PropertiesPage;