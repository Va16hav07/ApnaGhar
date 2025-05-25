import { Property, TestimonialType } from '../types';

export const properties: Property[] = [
  {
    id: '1',
    title: ' Society : Palaash Sadaphuli',
    type: 'Flat',
    description: 'Spacious 2BHK apartment.',
    price: '11000 including Maintenance',
    address: 'Varale, Talegaon Dabade, Pune',
    distance: '1.5 km from campus',
     amenities: ['Parking', "It is a Semifernished Flat"],
    images: [
      'https://ucarecdn.com/3df08c78-00c3-45d3-b645-cdfcb51ec0bd/WhatsAppImage20250525at75936PM.jpeg',
      'https://ucarecdn.com/c9c6ab5d-9d1c-4501-a5f5-7b0b69635f70/WhatsAppImage20250525at75937PM1.jpeg',
      'https://ucarecdn.com/8ad94dd8-35a5-4b01-b845-ef5d0c5086d3/WhatsAppImage20250525at75938PM1.jpeg',
      'https://ucarecdn.com/57d3d671-6432-4ae0-8ea6-5af183ab8dbd/WhatsAppImage20250525at75937PM.jpeg',
      'https://ucarecdn.com/b3ea75bf-2b52-4f7c-be8f-8e45713f8e0f/WhatsAppImage20250525at75938PM.jpeg',
      'https://ucarecdn.com/f1bd6e2d-8c7d-468c-af21-9cdabc965dd3/WhatsAppImage20250525at75935PM.jpeg'
    ],
    rooms: 1,
    bathrooms: 2,
    area: '2BHK',
    gender: 'Any',
    featured: true
  },
  {
    id: '2',
    title: ' Society : Palaash Sadaphuli',
    type: 'Flat',
    description: 'Spacious 2BHK apartment.',
    price: '12000 including Maintenance',
    address: 'Varale, Talegaon Dabade, Pune',
    distance: '1.5 km from dy patil college',
     amenities: ['Parking', "It is a Semifernished Flat"],
    images: [
      'https://ucarecdn.com/3df08c78-00c3-45d3-b645-cdfcb51ec0bd/WhatsAppImage20250525at75936PM.jpeg',
      'https://ucarecdn.com/c9c6ab5d-9d1c-4501-a5f5-7b0b69635f70/WhatsAppImage20250525at75937PM1.jpeg',
      'https://ucarecdn.com/8ad94dd8-35a5-4b01-b845-ef5d0c5086d3/WhatsAppImage20250525at75938PM1.jpeg',
      'https://ucarecdn.com/57d3d671-6432-4ae0-8ea6-5af183ab8dbd/WhatsAppImage20250525at75937PM.jpeg',
      'https://ucarecdn.com/b3ea75bf-2b52-4f7c-be8f-8e45713f8e0f/WhatsAppImage20250525at75938PM.jpeg',
      'https://ucarecdn.com/f1bd6e2d-8c7d-468c-af21-9cdabc965dd3/WhatsAppImage20250525at75935PM.jpeg'
    ],
    rooms: 1,
    bathrooms: 2,
    area: '2BHK',
    gender: 'Any',
    featured: false
  },
  {
    id: '3',
    title: 'Rio Vista society ',
    type: 'Flat',
    description: 'Spacious 2BHK apartment.',
    price: '12000 including Maintenance',
    address: 'near DY patil College of engineering Opposite to Eco city, varale , Talegaon dabhade, Pune',
    distance: '500m from campus',
    amenities: ['Parking', "It is a Semifernished Flat"],
    images: [
      'https://ucarecdn.com/7921f14d-3e19-4e3b-9fc1-90d77f8e4fb8/WhatsAppImage20250525at80233PM.jpeg',
      'https://ucarecdn.com/15591976-912b-4ce8-a5e9-659deb07f82c/WhatsAppImage20250525at80234PM1.jpeg',
      'https://ucarecdn.com/739e6804-e9c2-482b-ad95-1f9c858eec02/WhatsAppImage20250525at80234PM.jpeg'
    ],
    rooms: 1,
    bathrooms: 2,
    area: '2BHK',
    gender: 'Any',
    featured: true
  },
  {
    id: '4',
    title: 'Happy city PG',
    type: 'Flat',
    description: 'Comfortable PG accommodation with all basic amenities. Clean and well-maintained rooms with daily housekeeping services.',
    price: '13000 including Maintenance',
    address: 'near varale fata, talegaon dabhade, Pune',
    distance: '1 km from campus',
    amenities: ['Parking', "It is a Semifernished Flat"],
    images: [
      'https://ucarecdn.com/24523aaf-5c04-45e5-bc82-12b35aa7623b/WhatsAppImage20250525at80518PM.jpeg',
      'https://ucarecdn.com/865c6457-3df5-4804-b20a-5111f5aef4e7/WhatsAppImage20250525at80517PM.jpeg',
      'https://ucarecdn.com/8ae47558-74e8-4232-9491-2a3b443e0de6/WhatsAppImage20250525at80516PM.jpeg'
    ],
    rooms: 1,
    bathrooms: 2,
    area: '2BHK',
    gender: 'Any',
    featured: true
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