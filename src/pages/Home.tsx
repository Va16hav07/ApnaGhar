import React from 'react';
import Hero from '../components/Hero';
import PropertyGrid from '../components/PropertyGrid';
import Testimonials from '../components/Testimonials';
import { properties, testimonials } from '../data/properties';
import { CheckCircle, Home as HomeIcon, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  // Get featured properties or use first 3 if none are marked as featured
  const featuredProperties = properties.filter(property => property.featured).length > 0 
    ? properties.filter(property => property.featured)
    : properties.slice(0, 3);
  
  return (
    <div>
      <Hero />
      
      <div className="container-custom py-16">
        <PropertyGrid 
          properties={featuredProperties}
          title="Featured Accommodations"
          subtitle="Handpicked properties near D Y Patil Educational Federation with reduced brokerage"
          featured={true}
        />
        
        <div className="text-center mt-8">
          <Link to="/properties" className="btn-primary">
            View All Properties
          </Link>
        </div>
      </div>
      
      <section className="py-16 bg-primary-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Apna Ghar?</h2>
            <p className="max-w-2xl mx-auto text-primary-100">
              We're students just like you, and we understand the struggle of finding good accommodation near campus.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-primary-700 p-6 rounded-lg text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">50% Less Brokerage</h3>
              <p className="text-primary-100">
                Pay only half the standard brokerage fees, saving you thousands on your accommodation.
              </p>
            </div>
            
            <div className="bg-primary-700 p-6 rounded-lg text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon size={32} className="text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Properties</h3>
              <p className="text-primary-100">
                All listings are verified by fellow students to ensure quality and accuracy.
              </p>
            </div>
            
            <div className="bg-primary-700 p-6 rounded-lg text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Student Community</h3>
              <p className="text-primary-100">
                Connect with other D Y Patil students looking for roommates or shared accommodations.
              </p>
            </div>
            
            <div className="bg-primary-700 p-6 rounded-lg text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} className="text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Campus Proximity</h3>
              <p className="text-primary-100">
                All properties are within convenient distance from the D Y Patil campus.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-gray-100 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                  <p className="text-gray-600 mb-8">
                    Finding your ideal student accommodation near D Y Patil is simple with our student-run platform.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="bg-primary-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Browse Properties</h3>
                        <p className="text-gray-600">Explore our listings of PGs, hostels, and flats near campus.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-primary-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Contact Us</h3>
                        <p className="text-gray-600">Reach out through the "Rent Now" button on any property you like.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-primary-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Visit and Confirm</h3>
                        <p className="text-gray-600">We'll arrange a visit, and you can secure your new home with 50% less brokerage.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Link to="/properties" className="btn-accent">
                      Find Your Accommodation
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="relative h-96 md:h-auto">
                <img 
                  src="https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg" 
                  alt="Students in accommodation" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-accent-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Student Accommodation?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join hundreds of D Y Patil students who found their ideal place to stay while saving on brokerage.
          </p>
          <Link to="/properties" className="btn-primary text-lg px-8 py-3">
            Browse Properties
          </Link>
        </div>
      </section>
      
      <Testimonials testimonials={testimonials} />
    </div>
  );
};

export default HomePage;