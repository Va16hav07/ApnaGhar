import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyGrid from '../components/PropertyGrid';
import { properties } from '../data/properties';
import { Property, FilterOptions } from '../types';
import { Filter, SlidersHorizontal, Search } from 'lucide-react';

const PropertiesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [filters, setFilters] = useState<FilterOptions>({
    type: '',
    priceRange: [0, 50000],
    gender: '',
  });

  // Initialize filters from URL parameters
  useEffect(() => {
    const typeParam = searchParams.get('type');
    const genderParam = searchParams.get('gender');
    const searchParam = searchParams.get('search');
    
    if (typeParam) {
      setFilters(prev => ({ ...prev, type: typeParam }));
    }
    
    if (genderParam) {
      setFilters(prev => ({ ...prev, gender: genderParam }));
    }
    
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  // Apply filters when they change
  useEffect(() => {
    let results = properties;
    
    // Filter by type
    if (filters.type) {
      results = results.filter(property => property.type === filters.type);
    }
    
    // Filter by price range
    results = results.filter(property => 
      property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1]
    );
    
    // Filter by gender
    if (filters.gender) {
      results = results.filter(property => 
        property.gender === filters.gender || property.gender === 'Any'
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(property => 
        property.title.toLowerCase().includes(query) ||
        property.address.toLowerCase().includes(query) ||
        property.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProperties(results);
  }, [filters, searchQuery]);

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, type: e.target.value });
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, gender: e.target.value });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [min, max] = e.target.value.split(',').map(Number);
    setFilters({ ...filters, priceRange: [min, max] });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Already updating in real-time, but could add additional logic here
  };

  const resetFilters = () => {
    setFilters({
      type: '',
      priceRange: [0, 50000],
      gender: '',
    });
    setSearchQuery('');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Accommodations</h1>
            <p className="text-gray-600">
              Find the perfect PG, hostel, or flat near D Y Patil with 50% less brokerage
            </p>
          </div>
          
          <button 
            className="mt-4 md:mt-0 flex items-center text-primary-700 font-medium"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center">
                <SlidersHorizontal size={18} className="mr-2" />
                Filter Properties
              </h2>
              <button 
                className="text-sm text-primary-700 hover:underline"
                onClick={resetFilters}
              >
                Reset All
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Property Type
                </label>
                <select
                  id="type"
                  className="select"
                  value={filters.type}
                  onChange={handleTypeChange}
                >
                  <option value="">All Types</option>
                  <option value="PG">PG</option>
                  <option value="Hostel">Hostel</option>
                  <option value="Flat">Flat</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                  Gender Preference
                </label>
                <select
                  id="gender"
                  className="select"
                  value={filters.gender}
                  onChange={handleGenderChange}
                >
                  <option value="">Any</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range: ₹{filters.priceRange[0].toLocaleString()} - ₹{filters.priceRange[1].toLocaleString()}
                </label>
                <input
                  type="range"
                  id="price"
                  min="0"
                  max="50000"
                  step="1000"
                  value={`${filters.priceRange[0]},${filters.priceRange[1]}`}
                  onChange={handlePriceChange}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹0</span>
                  <span>₹25,000</span>
                  <span>₹50,000</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    className="input pl-10"
                    placeholder="Search by property name, address or description"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        )}
        
        <div className="mb-6">
          <p className="text-gray-600">
            <span className="font-medium">{filteredProperties.length}</span> properties found
            {filters.type && ` • Type: ${filters.type}`}
            {filters.gender && ` • Gender: ${filters.gender}`}
            {searchQuery && ` • Search: "${searchQuery}"`}
          </p>
        </div>
        
        {filteredProperties.length > 0 ? (
          <PropertyGrid properties={filteredProperties} />
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">No properties found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search criteria</p>
            <button 
              className="btn-primary"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;