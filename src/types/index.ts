export interface Property {
  id: string;
  title: string;
  type: 'PG' | 'Hostel' | 'Flat';
  description: string;
  price: number;
  address: string;
  distance: string; // Distance from D Y Patil
  amenities: string[];
  images: string[];
  featured?: boolean;
  rooms: number;
  bathrooms: number;
  area: number; // in sq.ft.
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