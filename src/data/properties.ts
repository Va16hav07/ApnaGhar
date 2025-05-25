import { Property, TestimonialType } from '../types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Sunshine PG for Boys',
    type: 'PG',
    description: 'Modern PG accommodation with spacious rooms and all essential amenities. Located in a quiet neighborhood close to D Y Patil campus. Features high-speed internet, power backup, and common recreation area.',
    price: 8500,
    address: '123 College Road, Near Main Gate, Pune',
    distance: '0.5 km from campus',
    amenities: ['WiFi', 'Power Backup', 'Laundry', 'Meals', 'Security', 'Study Table'],
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'
    ],
    featured: true,
    rooms: 1,
    bathrooms: 1,
    area: 150,
    gender: 'Male'
  },
  {
    id: '2',
    title: 'Girls Hostel Complex',
    type: 'Hostel',
    description: 'Safe and secure hostel for female students with 24/7 security. Features comfortable beds, study areas, and common dining. Regular cleaning service included.',
    price: 7500,
    address: '45 University Lane, East Campus, Pune',
    distance: '0.8 km from campus',
    amenities: ['WiFi', 'Security', 'Meals', 'Cleaning', 'Common Room', 'Hot Water'],
    images: [
      'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg',
      'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg'
    ],
    featured: true,
    rooms: 1,
    bathrooms: 1,
    area: 120,
    gender: 'Female'
  },
  {
    id: '3',
    title: 'College View Apartment',
    type: 'Flat',
    description: 'Spacious 2BHK apartment perfect for sharing. Recently renovated with modern furnishings and a fully equipped kitchen. Walking distance to campus.',
    price: 15000,
    address: '78 Scholar Avenue, West Block, Pune',
    distance: '1.2 km from campus',
    amenities: ['Furnished', 'Kitchen', 'Balcony', 'Parking', 'Security', 'WiFi Ready'],
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg'
    ],
    rooms: 2,
    bathrooms: 2,
    area: 850,
    gender: 'Any'
  },
  {
    id: '4',
    title: 'Student Haven PG',
    type: 'PG',
    description: 'Comfortable PG accommodation with all basic amenities. Clean and well-maintained rooms with daily housekeeping services.',
    price: 7000,
    address: '15 Campus Corner, South Wing, Pune',
    distance: '0.7 km from campus',
    amenities: ['WiFi', 'Meals', 'Cleaning', 'TV Room', 'Laundry'],
    images: [
      'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg'
    ],
    rooms: 1,
    bathrooms: 1,
    area: 130,
    gender: 'Any'
  },
  {
    id: '5',
    title: 'Scholar\'s Residence',
    type: 'Hostel',
    description: 'Premium hostel facility with air-conditioned rooms and private bathrooms. Features dedicated study halls and recreation areas.',
    price: 10000,
    address: '92 Academic Street, East Block, Pune',
    distance: '1.5 km from campus',
    amenities: ['AC', 'Private Bathroom', 'WiFi', 'Study Hall', 'Gym', 'Cafeteria'],
    images: [
      'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg'
    ],
    featured: true,
    rooms: 1,
    bathrooms: 1,
    area: 200,
    gender: 'Male'
  },
  {
    id: '6',
    title: 'Campus Edge 3BHK',
    type: 'Flat',
    description: 'Spacious 3BHK apartment ideal for group of friends. Fully furnished with modern amenities and a large balcony overlooking the park.',
    price: 22000,
    address: '34 University Heights, North Gate, Pune',
    distance: '1.0 km from campus',
    amenities: ['Fully Furnished', 'Modular Kitchen', 'Balcony', 'Power Backup', 'Lift', 'Parking'],
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg'
    ],
    rooms: 3,
    bathrooms: 2,
    area: 1200,
    gender: 'Any'
  }
];

export const testimonials: TestimonialType[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    course: 'Computer Engineering',
    year: 'Third Year',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    testimonial: 'I found my PG through this website and saved over ₹5000 in brokerage! The process was smooth and the team was very helpful.'
  },
  {
    id: '2',
    name: 'Priya Patel',
    course: 'Mechanical Engineering',
    year: 'Second Year',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    testimonial: 'As a girl, safety was my top concern. The hostel I found through this platform has excellent security and is close to campus.'
  },
  {
    id: '3',
    name: 'Aditya Verma',
    course: 'MBA',
    year: 'First Year',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    testimonial: 'Finding accommodation in a new city is challenging, but this website made it so much easier. I got a great flat with amazing roommates!'
  }
];