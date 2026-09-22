// Sovereign content — hotel booking one-pager.
// Image slots use deterministic picsum placeholders.

export const BRAND = 'Sovereign'

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO = {
  heading: 'Welcome to Sovereign Hotel',
  subheading: 'Experience luxury and comfort in the heart of the city',
  image: 'https://picsum.photos/seed/sovereign-hero/1600/900',
}

export interface BookingField {
  label: string
  type: string
  placeholder: string
}

export const BOOKING_FIELDS: readonly BookingField[] = [
  { label: 'Check In', type: 'date', placeholder: 'Select date' },
  { label: 'Check Out', type: 'date', placeholder: 'Select date' },
  { label: 'Room Type', type: 'select', placeholder: 'Select room' },
  { label: 'Guests', type: 'select', placeholder: '2 Adults' },
] as const

export const ROOM_TYPES = ['Standard', 'Deluxe', 'Suite', 'Penthouse'] as const
export const GUEST_OPTIONS = ['1 Adult', '2 Adults', '3 Adults', '4 Adults'] as const

export const ABOUT = {
  heading: 'About Our Hotel',
  paragraph:
    'Sovereign Hotel offers an unparalleled luxury experience in the heart of the city. With world-class amenities, exquisite dining, and personalized service, we ensure every guest enjoys a memorable stay. Our commitment to excellence has earned us recognition as one of the finest hospitality destinations.',
  image: 'https://picsum.photos/seed/sovereign-about/800/500',
}

export interface Room {
  name: string
  description: string
  price: string
  image: string
  features: readonly string[]
}

export const ROOMS: Room[] = [
  {
    name: 'Standard Room',
    description: 'Comfortable rooms with modern amenities and city views.',
    price: '$199/night',
    image: 'https://picsum.photos/seed/sovereign-room1/600/400',
    features: ['Wi-Fi', 'TV', 'Minibar'],
  },
  {
    name: 'Deluxe Room',
    description: 'Spacious rooms with premium furnishings and balcony access.',
    price: '$299/night',
    image: 'https://picsum.photos/seed/sovereign-room2/600/400',
    features: ['Wi-Fi', 'TV', 'Balcony', 'Minibar'],
  },
  {
    name: 'Executive Suite',
    description: 'Luxurious suites with separate living area and panoramic views.',
    price: '$449/night',
    image: 'https://picsum.photos/seed/sovereign-room3/600/400',
    features: ['Wi-Fi', 'TV', 'Living Room', 'Balcony'],
  },
  {
    name: 'Presidential Suite',
    description: 'The ultimate luxury experience with private butler service.',
    price: '$799/night',
    image: 'https://picsum.photos/seed/sovereign-room4/600/400',
    features: ['Wi-Fi', 'TV', 'Butler', 'Jacuzzi'],
  },
] as const

export interface Amenity {
  name: string
  icon: string
  description: string
}

export const AMENITIES: Amenity[] = [
  { name: 'Swimming Pool', icon: 'waves', description: 'Heated indoor and outdoor pools' },
  {
    name: 'Spa & Wellness',
    icon: 'heart-pulse',
    description: 'Full-service spa and wellness center',
  },
  { name: 'Restaurant', icon: 'utensils', description: 'Fine dining with international cuisine' },
  { name: 'Fitness Center', icon: 'dumbbell', description: 'State-of-the-art gym equipment' },
  { name: 'Free Wi-Fi', icon: 'wifi', description: 'High-speed internet throughout' },
  { name: 'Airport Transfer', icon: 'plane', description: 'Complimentary airport shuttle' },
] as const

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/sovereign-gal1/400/300',
  'https://picsum.photos/seed/sovereign-gal2/400/300',
  'https://picsum.photos/seed/sovereign-gal3/400/300',
  'https://picsum.photos/seed/sovereign-gal4/400/300',
  'https://picsum.photos/seed/sovereign-gal5/400/300',
  'https://picsum.photos/seed/sovereign-gal6/400/300',
  'https://picsum.photos/seed/sovereign-gal7/400/300',
  'https://picsum.photos/seed/sovereign-gal8/400/300',
] as const

export interface Testimonial {
  name: string
  role: string
  quote: string
  rating: number
  avatar: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Business Traveler',
    quote:
      'An absolutely stunning hotel with impeccable service. The rooms are luxurious and the staff made us feel like royalty.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/sovereign-avatar1/100/100',
  },
  {
    name: 'James Anderson',
    role: 'Family Vacation',
    quote:
      'The best hotel experience we have ever had. The amenities are world-class and the location is perfect.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/sovereign-avatar2/100/100',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Couple Retreat',
    quote:
      'From the moment we arrived, everything was perfect. The dining was exceptional and the spa was heavenly.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/sovereign-avatar3/100/100',
  },
] as const

export const BOOKING_CTA = {
  heading: 'Book Your Stay Today',
  text: 'Experience the luxury and comfort of Sovereign Hotel. Reserve your room now and enjoy exclusive rates.',
  buttonLabel: 'Book Now',
  image: 'https://picsum.photos/seed/sovereign-cta/1600/600',
}

export const FOOTER = {
  about: {
    heading: 'About Sovereign',
    text: 'Sovereign Hotel is a premier destination for luxury hospitality, offering world-class amenities and personalized service.',
  },
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
  contact: {
    heading: 'Contact Info',
    lines: ['123 Grand Avenue', 'Downtown District', 'New York, NY 10001', '+1 (212) 555-0199'],
  },
  socialIcons: [
    { name: 'Facebook', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
  ],
  copyright: '© 2026 Sovereign Hotel — All rights reserved',
  dockLink: {
    href: 'https://www.componentdock.com/',
    label: 'More templates at Component Dock',
  },
} as const
