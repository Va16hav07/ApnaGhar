export interface Property {
  id: string;
  title: string;
  type: string; // Changed from enum to string to match actual data
  description: string;
  price: string; // Changed from number to string to match actual data
  address: string;
  distance: string; // Distance from D Y Patil
  amenities: string[];
  images: string[];
  featured?: boolean;
  rooms: number;
  bathrooms: number;
  area: string; // Changed from String to string for consistency
  gender: 'Male' | 'Female' | 'Any';
}

export interface TestimonialType {
  id: string;
  name: string;
  course: string;
  year: string;
  avatar: string;
  testimonial: string;
}

export interface FilterOptions {
  type: string;
  priceRange: [number, number];
  gender: string;
}