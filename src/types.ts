export interface Room {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  size: string; // e.g. "350 sq ft"
  bedType: string; // e.g. "King Size Bed"
  images: string[];
  features: string[];
  amenities: string[];
}

export interface Amenity {
  id: string;
  name: string;
  iconName: string; // matches lucide icon name
  category: 'accommodation' | 'leisure' | 'convenience';
  description: string;
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  description: string;
  image: string;
  travelTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  roomType: string;
  specialRequests?: string;
  status: 'pending' | 'confirmed';
  totalPrice?: number;
  createdAt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'stay' | 'facilities';
}
