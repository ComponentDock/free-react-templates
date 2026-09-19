export interface Property {
  id: number
  image: string
  address: string
  location: string
  description: string
  price: string
  type: string
  status: 'Sale' | 'Rent'
  beds: number
  baths: number
  sqft: number
}

export interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  avatar: string
}

export interface Stat {
  label: string
  value: number
  suffix: string
}

export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Property', href: '#property' },
  { label: 'Agents', href: '#agents' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const properties: Property[] = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/homefront-1/800/500',
    address: 'Florida 5, Pinecrest, FL',
    location: 'Miami, FL 33156',
    description:
      'A charming property nestled in a quiet neighborhood with modern amenities and beautiful landscaping.',
    price: '$485,000',
    type: 'House',
    status: 'Sale',
    beds: 3,
    baths: 2,
    sqft: 2200,
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/homefront-2/800/500',
    address: '3015 Grand Avenue, CocoWalk',
    location: 'Coconut Grove, FL 33133',
    description:
      'Luxury apartment in the heart of Coconut Grove with stunning city views and premium finishes.',
    price: '$320,000',
    type: 'Apartment',
    status: 'Sale',
    beds: 2,
    baths: 2,
    sqft: 1400,
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/homefront-3/800/500',
    address: '88 Ocean Drive',
    location: 'South Beach, FL 33139',
    description:
      'Beachfront condo with panoramic ocean views, rooftop pool, and concierge service.',
    price: '$2,800/mo',
    type: 'Condo',
    status: 'Rent',
    beds: 2,
    baths: 1,
    sqft: 1100,
  },
]

export const featuredProperties: Property[] = [
  {
    id: 4,
    image: 'https://picsum.photos/seed/homefront-4/600/400',
    address: 'North Parchmore Street',
    location: 'Downtown',
    description: 'Far far away, behind the word mountains, far from the countries.',
    price: '$20,000',
    type: 'Apartment',
    status: 'Sale',
    beds: 3,
    baths: 4,
    sqft: 250,
  },
  {
    id: 5,
    image: 'https://picsum.photos/seed/homefront-5/600/400',
    address: 'North Parchmore Street',
    location: 'Downtown',
    description: 'Far far away, behind the word mountains, far from the countries.',
    price: '$2,000/mo',
    type: 'Apartment',
    status: 'Rent',
    beds: 3,
    baths: 4,
    sqft: 250,
  },
  {
    id: 6,
    image: 'https://picsum.photos/seed/homefront-6/600/400',
    address: 'North Parchmore Street',
    location: 'Downtown',
    description: 'Far far away, behind the word mountains, far from the countries.',
    price: '$20,000',
    type: 'Apartment',
    status: 'Sale',
    beds: 3,
    baths: 4,
    sqft: 250,
  },
  {
    id: 7,
    image: 'https://picsum.photos/seed/homefront-7/600/400',
    address: 'North Parchmore Street',
    location: 'Downtown',
    description: 'Far far away, behind the word mountains, far from the countries.',
    price: '$20,000',
    type: 'Apartment',
    status: 'Sale',
    beds: 3,
    baths: 4,
    sqft: 250,
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Roger Scott',
    role: 'Marketing Manager',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    avatar: 'https://picsum.photos/seed/homefront-avatar-1/100/100',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Real Estate Agent',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    avatar: 'https://picsum.photos/seed/homefront-avatar-2/100/100',
  },
  {
    id: 3,
    name: 'Mark Wilson',
    role: 'Property Developer',
    text: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    avatar: 'https://picsum.photos/seed/homefront-avatar-3/100/100',
  },
]

export const stats: Stat[] = [
  { label: 'Properties', value: 1200, suffix: '+' },
  { label: 'Clients', value: 500, suffix: '+' },
  { label: 'Awards', value: 85, suffix: '+' },
  { label: 'Agents', value: 200, suffix: '+' },
]
