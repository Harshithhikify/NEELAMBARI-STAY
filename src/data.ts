import { Room, Amenity, Attraction, Testimonial, FAQItem } from './types';

export const ROOMS_DATA: Room[] = [
  {
    id: 'standard-room',
    name: 'Standard Heritage Room',
    description: 'A cozy sanctuary featuring traditional Coorg wooden furnishings, private sit-out, and beautiful garden vistas. Perfect for solo travelers or couples seeking a quiet retreat.',
    pricePerNight: 4500,
    maxGuests: 2,
    size: '280 sq ft',
    bedType: 'Queen Bed',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFvA_uELwMuGANushtO23jSD7kmX7p4so17jpT6lRguxwUkirG9KjNvFS71ni313-7lny7e-bBpcMwumCtSFe5kawecAO1Dk5srcbuiKRrIYiFOp_kobJ_n5WNXuR5lqLHVPbC9UX8q0jhX=w1200',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH-9kIS-hV8vt_-l0RtiukIMSI04jVyjWpvrIiH0TBWpXldA3nciNzXIDepzCeGCeHMc4t3uW-Ss0xVUIXDGo_BmNwHjZ1V7E2CIhhdH9WJDQn7sAwP7cOEVcJGzfZB5yHVSW_l=w1200',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGNeQQpqhQmLrQ4FrVM63Lr7OCSwWIPN_tuzmLwIhEijEGh2zAbhzH_LtA_PtvplzfJYw0ijEkHCjkn8WpuaGtPxv9NlC5gunt0yGXyAw4TdE7qib-kZs4U7KUPKfG4V0XD8jdK=w1200'
    ],
    features: [
      'Spacious Room',
      'Garden Access',
      'Free High-Speed Wi-Fi',
      'Non-Smoking Room',
      'Premium Bedding',
      'Attached Modern Bathroom',
      'Heritage Interiors'
    ],
    amenities: [
      'Wi-Fi', 'Air Conditioning', 'Attached Bathroom', 'Comfortable Bedding', 'Toiletries', 'Teal/Coffee Maker'
    ]
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Forest View Suite',
    description: 'Wake up to panoramic views of dense valleys and mist-laden hills. Our Deluxe Suite blends luxury with local design, offering a private balcony, custom teak accents, and extra spaciousness.',
    pricePerNight: 6500,
    maxGuests: 3,
    size: '420 sq ft',
    bedType: 'King Size Bed',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEHeC3L_wtQqYt54WwrUyR19p19xRVyrIuta26AmqaCMn1EM_egPrgpg85SaKt8bYvZMYLCnkfDJ1JQqzPziJAeONwLyqFsyqNRqzQgJ3SZ5jfAl00eo4rWmcERxn_l7rSJZNwy=w1200',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGGhm7G2RyYi90hA36b5NGDVZPtLQZpo5BkSmkcx96_OYCBTXvQe_ZoV4S266FM0wPG9lmZX0yMuacZGb_YyaFk-46aN1NmIkz8VrFmtP0knRQSDGkWjb8dxzcOLmrne6OjjtS8tCHFq1mY=w1200',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHwQz5IbObXPkl-f9lfGHmRRT3jAgXSCv2MksFHM7WICMU1RlObZkIITdg1iE_hrY4UbAJ9tPwQiII72ZqrIR8WzLVuS-4znL1ujc70E6lnCDtJH7WH0PQwQflDUF3fg1snRtv8=w1200'
    ],
    features: [
      'Private Scenic Balcony',
      'Air Conditioning',
      'Free High-Speed Wi-Fi',
      'Plush Sofa Seating Area',
      'Pristine Forest & Pool View',
      'Luxury Teak Furniture',
      'Spacious Wardrobes'
    ],
    amenities: [
      'Wi-Fi', 'Air Conditioning', 'Private Balcony', 'Smart TV', 'Mini Fridge', 'Tea/Coffee Maker', 'Premium Linens'
    ]
  },
  {
    id: 'family-suite',
    name: 'Neelambari Premium Family Villa',
    description: 'An expansive private sanctuary designed for families and groups. Includes a separate lounge area, two bedrooms, private veranda, and direct access to the manicured lawns and campfire zone.',
    pricePerNight: 12000,
    maxGuests: 6,
    size: '850 sq ft',
    bedType: '2 King Beds + Rollaway',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHJnB78pvoIu4MK_OXrIfWb4E7-lJLELtjH2E5yVT2bn8Cq6EX2i0tLhzEcLNrWDIyLF_XoN8Y-vQrDqQGS-cr6d6Hx1BP0TWX-QPVjyasumximYlDLfanhN0tNuwyKMw2n5SY2ON4d5DYd=w1200',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGAWMzGpoX7gnSQvaOX1fEvAa7xpURsqDvN_53G5HdUcdMO6oVQfxAdD7izP52xz3NXVZfSPdBP4evnk9GFjFe7mTdE8pIVVHxmZvu4Y93ZF7VY4pcynrideg6S6jX_YigNrWXzhg9xYAPi=w1200',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGHRZFlxZLepyPL9ts1DzsVsUxmZuqTCSapHwo1dIVg4AngD5_8XWqVbEyS_pk94HFwxLyOntEVCJ-m1cubbQ8A6Z9nC9xWO5OIYUN2gzeZk3mfFqz4I6qvIyfh1ArUgKQ5vJQI=w1200'
    ],
    features: [
      'Entire Multi-Room Suite',
      'Living Room / Dining Area',
      'Free Premium Wi-Fi',
      'Direct Lawn & Pool Access',
      'Ideal for Families of 4-6',
      'Luxury Bathrooms with Bathtub',
      'Traditional Coorg Architecture'
    ],
    amenities: [
      'Wi-Fi', 'Air Conditioning', 'Kitchenette', 'Bathtub', 'Private Veranda', 'Living Area', 'Coffee Station', 'Microwave'
    ]
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: 'pool',
    name: 'Swimming Pool',
    iconName: 'Waves',
    category: 'leisure',
    description: 'A sparkling crystal-clear pool overlooking pristine valleys.'
  },
  {
    id: 'parking',
    name: 'Free Secured Parking',
    iconName: 'ParkingCircle',
    category: 'convenience',
    description: 'Ample private and secure parking inside the estate.'
  },
  {
    id: 'wifi',
    name: 'Free High-Speed Wi-Fi',
    iconName: 'Wifi',
    category: 'convenience',
    description: 'Stay connected smoothly even in the peaceful mountains.'
  },
  {
    id: 'ac',
    name: 'Air Conditioning',
    iconName: 'Wind',
    category: 'accommodation',
    description: 'Climate-controlled rooms to ensure your perfect temperature.'
  },
  {
    id: 'family',
    name: 'Family Friendly',
    iconName: 'Users',
    category: 'accommodation',
    description: 'Spacious lawns, board games, and campfire areas for everyone.'
  },
  {
    id: 'nature',
    name: 'Scenic Nature View',
    iconName: 'Compass',
    category: 'leisure',
    description: 'Stunning viewpoints of Coorg mountains and lush forests.'
  },
  {
    id: 'campfire',
    name: 'Campfire & BBQ Zone',
    iconName: 'Flame',
    category: 'leisure',
    description: 'Warm, memorable evenings with a cracking bonfire.'
  },
  {
    id: 'coffee',
    name: 'Coffee Estate Walk',
    iconName: 'TreePine',
    category: 'leisure',
    description: 'Guided walks through our lush surrounding coffee plantations.'
  },
  {
    id: 'assistance',
    name: '24/7 Warm Assistance',
    iconName: 'HeartHandshake',
    category: 'convenience',
    description: 'Hospitable staff always ready to assist your local travel plans.'
  }
];

export const COORG_ATTRACTIONS: Attraction[] = [
  {
    id: 'rajas-seat',
    name: "Raja's Seat",
    distance: '4.5 km',
    travelTime: '12 mins drive',
    description: 'A gorgeous seasonal garden perched on a hill, offering stunning panoramic sunset views once favored by Coorg kings.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEuDuQgGn5sZlK2N-5TtMEUMiCIQz7FycJrxqOXZjnp9wtTw8vALqHe6yl2BD3QV4VhpptahaKFkK36SBtFKKC_yG0PHMIE70wA1hb7KD9HTIqTnFbbSe-jnn7_VAhtK-UC4UHvzg=w1200'
  },
  {
    id: 'madikeri-fort',
    name: 'Madikeri Fort',
    distance: '3.8 km',
    travelTime: '10 mins drive',
    description: 'A historic 17th-century fort featuring life-sized stone elephants, a museum, and grand stone battlements with commanding town views.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEhaPFbVVgkTQY12yTPQFHmFMasSeOwTx9Q0arh6jfdJ-mamEyCxBQrSjnB7YbQn-2jOuq6BBmEc3WVp7rOrXyTwDzCFXxbZnKsStDDVzYu7s3uPqRlPzE1emMXuFY7sIbR6ByZmQya6dBb=w1200'
  },
  {
    id: 'abbey-falls',
    name: 'Abbey Falls',
    distance: '8.2 km',
    travelTime: '20 mins drive',
    description: 'A spectacular waterfall nested amidst private coffee plantations and spice estates, accessible via a short nature walk.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFuAkjiPTw-Eig31ArhwVYxkQ6DsVFfuGQdn4p9YIOE5V7SopRpAs1XkGhhqzg8LgK1vf1_V8iz7JSSkJ6Ep4juhHrZZxX6kvrbv2nHbAWn4ryYiFmfk8VRdhv7w1_B14vU_gEy=w1200'
  },
  {
    id: 'omkareshwara-temple',
    name: 'Omkareshwara Temple',
    distance: '4.0 km',
    travelTime: '11 mins drive',
    description: 'Built in 1820, this unique temple features an Islamic and Gothic style architecture with a serene central pool of holy water.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAF-PPuQ8Db44GJIpS87IfgvDgl2X74DhBRkMvR5B0C4eUpkP7cmACg9d1NE8Gk1uxeswLPfYvrIreD4z94UW0A8i7ul841BYZNPdTrNZAgt1eg9MVJ2pM_7kCe8C9CtoeTEi7Gk4SxTnAoh=w1200'
  },
  {
    id: 'mandalpatti',
    name: 'Mandalpatti View Point',
    distance: '21 km',
    travelTime: '55 mins drive',
    description: 'An breathtaking hilltop offering panoramic views above the clouds. Accessible via a thrilling 4x4 open-jeep forest safari.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEkCDTu3bKXR2umu8fcrqGXuhsKTQP1IMEOdQc5fk6UZ0mGuPgrZVtoEMQMrTMsrX8Y26RTJov87Tc7nvU55ds83uRRYdYt8l2TB_R8DVa7dyMBXfTxxlr7bOrKc6z4WIabrouNVu8d-VyY=w1200'
  },
  {
    id: 'dubare',
    name: 'Dubare Elephant Camp',
    distance: '28 km',
    travelTime: '45 mins drive',
    description: 'An eco-tourism site on the banks of River Kaveri where visitors can watch, bathe, and feed trained elephants in their natural habitat.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFotxS2BAs3XpoGoQNma-sM1HHbEmA4CYclwJf5f7aNWrgJDCCZr60jAkYd3z5eZmwHIUhDgNA0rMksiRnIOauYP35AGvD3144rAgqiM13gap0RYGDaBt0syZYTKOL9LfzPCGthd4FlwEFI=w1200'
  },
  {
    id: 'talacauvery',
    name: 'Talacauvery & Bhagamandala',
    distance: '43 km',
    travelTime: '1 hour 10 mins',
    description: 'The sacred birthplace of the River Kaveri, located on the Brahmagiri hills surrounded by beautiful spiritual shrines.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFF5QyMNkcGemAtEO0p9AFPgx14ca3J-I7zG05SP-9O03nx70GhO35692jx3DCG-fuAxhoAX7zdESs6kTPfNAXzSjoxFRGQUq3Oa3J72blAXiN33pvC3_-tywOzVnCeDM8tx2AztvzUUbyS=w1200'
  },
  {
    id: 'coffee-plantations',
    name: 'Coffee Estate Walkways',
    distance: 'Steps away',
    travelTime: 'Instant walk',
    description: 'Immerse yourself directly into the aromatic estate tracks. Learn about organic Arabica/Robusta coffee growing, and pepper vines.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAF-8lEykykGMmgbcJwZabSGJLQ7yK_xmLvYZwa3hur6e2jmRXtp1XM1BmY2EsKCixoUAusuJy6fbYmFbVaHGW4yCwH71QCy6B5PQjVh58nlyvodlNLuEg-b0PrIRzfSepRQGuXC5Wjqnmyx=w1200'
  }
];

export const GALLERY_IMAGES = [
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGGhm7G2RyYi90hA36b5NGDVZPtLQZpo5BkSmkcx96_OYCBTXvQe_ZoV4S266FM0wPG9lmZX0yMuacZGb_YyaFk-46aN1NmIkz8VrFmtP0knRQSDGkWjb8dxzcOLmrne6OjjtS8tCHFq1mY=w1200',
    category: 'Exterior',
    alt: 'Luxury Neelambari stay heritage villa exterior design'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAF-8lEykykGMmgbcJwZabSGJLQ7yK_xmLvYZwa3hur6e2jmRXtp1XM1BmY2EsKCixoUAusuJy6fbYmFbVaHGW4yCwH71QCy6B5PQjVh58nlyvodlNLuEg-b0PrIRzfSepRQGuXC5Wjqnmyx=w1200',
    category: 'Swimming Pool',
    alt: 'Shimmering private swimming pool nestled in coffee estate'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGAWMzGpoX7gnSQvaOX1fEvAa7xpURsqDvN_53G5HdUcdMO6oVQfxAdD7izP52xz3NXVZfSPdBP4evnk9GFjFe7mTdE8pIVVHxmZvu4Y93ZF7VY4pcynrideg6S6jX_YigNrWXzhg9xYAPi=w1200',
    category: 'Coffee Estate',
    alt: 'Organic robust coffee plants growing tall on the shade plantation'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAE97Y3U-5_bLujCqX5-DTW-Kbg3W-JxxN1l_Qn6MLBbXqbRfuHetUoTdeOz-m0ugd9QsASFdZ-QnFI0zYcB5GMMHW4CIJUbYy0Ewg7xZp8H9zcoxYTWhj9ZYTMxWpWtLcz41qg=w1200',
    category: 'Scenic Views',
    alt: 'Beautiful morning mist over the lush green valleys of Madikeri'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFvA_uELwMuGANushtO23jSD7kmX7p4so17jpT6lRguxwUkirG9KjNvFS71ni313-7lny7e-bBpcMwumCtSFe5kawecAO1Dk5srcbuiKRrIYiFOp_kobJ_n5WNXuR5lqLHVPbC9UX8q0jhX=w1200',
    category: 'Garden',
    alt: 'Green manicured lawns and vibrant botanical species surrounding the stay'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEkCDTu3bKXR2umu8fcrqGXuhsKTQP1IMEOdQc5fk6UZ0mGuPgrZVtoEMQMrTMsrX8Y26RTJov87Tc7nvU55ds83uRRYdYt8l2TB_R8DVa7dyMBXfTxxlr7bOrKc6z4WIabrouNVu8d-VyY=w1200',
    category: 'Rooms',
    alt: 'Polished deluxe wooden suite interiors with high ceilings'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFotxS2BAs3XpoGoQNma-sM1HHbEmA4CYclwJf5f7aNWrgJDCCZr60jAkYd3z5eZmwHIUhDgNA0rMksiRnIOauYP35AGvD3144rAgqiM13gap0RYGDaBt0syZYTKOL9LfzPCGthd4FlwEFI=w1200',
    category: 'Family Areas',
    alt: 'Warm indoor wooden recreational lounge and common area'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEhaPFbVVgkTQY12yTPQFHmFMasSeOwTx9Q0arh6jfdJ-mamEyCxBQrSjnB7YbQn-2jOuq6BBmEc3WVp7rOrXyTwDzCFXxbZnKsStDDVzYu7s3uPqRlPzE1emMXuFY7sIbR6ByZmQya6dBb=w1200',
    category: 'Scenic Views',
    alt: 'Scenic mountain ridges surrounding Neelambari Stay homestay'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFuAkjiPTw-Eig31ArhwVYxkQ6DsVFfuGQdn4p9YIOE5V7SopRpAs1XkGhhqzg8LgK1vf1_V8iz7JSSkJ6Ep4juhHrZZxX6kvrbv2nHbAWn4ryYiFmfk8VRdhv7w1_B14vU_gEy=w1200',
    category: 'Exterior',
    alt: 'Charming view of the tiled heritage architecture'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH-9kIS-hV8vt_-l0RtiukIMSI04jVyjWpvrIiH0TBWpXldA3nciNzXIDepzCeGCeHMc4t3uW-Ss0xVUIXDGo_BmNwHjZ1V7E2CIhhdH9WJDQn7sAwP7cOEVcJGzfZB5yHVSW_l=w1200',
    category: 'Family Areas',
    alt: 'Outdoor campfire setup overlooking the aromatic trees'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGhZ0Oxhu0dRK5OW-yPFlyHoYcCmnvZOur8vDLLBDFqiP1RLtY_XV80MwGDYlBfiOp4TUGpfdrUx-5MRtCURWkhaZhbdUdGMV3nwgXygGfKZXI7LNt9l_FQdCYhNjk_yTzR3pyBG3R29xs=w1200',
    category: 'Coffee Estate',
    alt: 'Winding pathways through the shade-grown coffee plantation'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGHRZFlxZLepyPL9ts1DzsVsUxmZuqTCSapHwo1dIVg4AngD5_8XWqVbEyS_pk94HFwxLyOntEVCJ-m1cubbQ8A6Z9nC9xWO5OIYUN2gzeZk3mfFqz4I6qvIyfh1ArUgKQ5vJQI=w1200',
    category: 'Garden',
    alt: 'Fresh high altitude flowers in bloom at Neelambari estate'
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFF5QyMNkcGemAtEO0p9AFPgx14ca3J-I7zG05SP-9O03nx70GhO35692jx3DCG-fuAxhoAX7zdESs6kTPfNAXzSjoxFRGQUq3Oa3J72blAXiN33pvC3_-tywOzVnCeDM8tx2AztvzUUbyS=w1200',
    category: 'Scenic Views',
    alt: 'Cloud-kissed mountain peak landscapes visible from Neelambari deck'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Anjali Sharma',
    location: 'Bangalore, Karnataka',
    rating: 5,
    comment: 'Neelambari is an absolute gem! The villa sits in the middle of a stunning forest with the sounds of chirping birds. The pool is pristine, and the rooms have this beautiful warm teakwood aesthetic that instantly feels luxurious yet homely.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150'
  },
  {
    id: '2',
    name: 'Vikram & Meera',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    comment: 'Perfect place for families looking to relax in Coorg. We booked the Premium Family Villa, and our kids absolutely loved the wide manicured lawns and the evening campfire. The hosts were incredibly polite and guided us on short estate walks.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150'
  },
  {
    id: '3',
    name: 'Rohan Deshmukh',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    comment: 'Comfortable rooms, good ambience, and convenient location near Madikeri. The Wi-Fi was surprisingly fast, allowing me to take some work calls in peace before stepping out to Abbey Falls. Strongly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150'
  }
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: 'Peaceful Environment',
    description: 'Tucked away from modern traffic noises. Wake up to natural mountain fog, rustling leaves, and soft tropical bird songs.',
    icon: 'Compass',
    bgTheme: 'bg-emerald-50 text-emerald-800'
  },
  {
    title: 'Affordable Luxury',
    description: 'High-end plush beds, clean private balconies, custom local wood details, and premium services at pricing that feels exceptional.',
    icon: 'Sparkles',
    bgTheme: 'bg-amber-50 text-amber-800'
  },
  {
    title: 'Near Madikeri Town',
    description: 'Located exactly on Kadagadal-Boikeri Road, giving you instant access to Madikeri Fort, Raja\'s Seat, and Abbey Falls in under 15 mins.',
    icon: 'MapPin',
    bgTheme: 'bg-blue-50 text-blue-800'
  },
  {
    title: 'Comfortable Family Stay',
    description: 'A private retreat with dedicated kid areas, customized rooms, and campfire services to make your family feel fully safe and sound.',
    icon: 'Home',
    bgTheme: 'bg-rose-50 text-rose-800'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'How do I reach Neelambari Stay from Madikeri?',
    answer: 'We are located on the beautiful Kadagadal-Boikeri Road, just about 3.8 km (10-12 minutes drive) from the main Madikeri KSRTC Bus Stand. Taxis and auto-rickshaws are easily available, and we can also arrange a pick-up for you.'
  },
  {
    id: 'faq-2',
    category: 'booking',
    question: 'What is the check-in and check-out timing?',
    answer: 'Standard check-in is at 12:00 PM (Noon), and check-out is at 11:00 AM. Early check-in or late check-out is subject to room availability and can be coordinated with our team.'
  },
  {
    id: 'faq-3',
    category: 'facilities',
    question: 'Is the swimming pool open to all guests?',
    answer: 'Yes, our beautiful luxury pool is open to all staying guests from 7:00 AM to 7:00 PM. We request guests to wear appropriate swimwear. Pool towels are provided near the deck.'
  },
  {
    id: 'faq-4',
    category: 'stay',
    question: 'Are meals included in the package?',
    answer: 'Every room stay includes a traditional Coorg-style home-cooked breakfast. Traditional homemade lunch and dinner (Veg & Non-Veg) can be prepared fresh on-demand. Simply let us know a few hours in advance.'
  },
  {
    id: 'faq-5',
    category: 'stay',
    question: 'Is there mobile signal and Wi-Fi available?',
    answer: 'Yes, we provide high-speed, estate-wide Wi-Fi free of charge. Mobile networks like Airtel and Jio have good 4G/5G reception at the property.'
  }
];
