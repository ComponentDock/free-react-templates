// Regent content — hotel & resort one-pager.
// Image slots use deterministic picsum placeholders.

export const BRAND = 'Regent'

export interface NavLink {
  label: string
  href: string
  children?: readonly { readonly label: string }[]
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'Rooms',
    href: '#rooms',
    children: [{ label: 'Standard' }, { label: 'Family' }, { label: 'Suite' }],
  },
  { label: 'Events', href: '#events' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO_SLIDES = [
  {
    heading: 'Welcome To Regent',
    subheading: 'Hotel & Resort',
    image: 'https://picsum.photos/seed/regent-hero1/1600/900',
  },
  {
    heading: 'Unique Experience',
    subheading: 'Enjoy With Us',
    image: 'https://picsum.photos/seed/regent-hero2/1600/900',
  },
  {
    heading: 'Relaxing Stay',
    subheading: 'Your Room, Your Suite',
    image: 'https://picsum.photos/seed/regent-hero3/1600/900',
  },
] as const

export interface Room {
  name: string
  price: string
  image: string
}

export const ROOMS: Room[] = [
  {
    name: 'Standard Room',
    price: '$350/night',
    image: 'https://picsum.photos/seed/regent-room1/600/400',
  },
  {
    name: 'Family Room',
    price: '$400/night',
    image: 'https://picsum.photos/seed/regent-room2/600/400',
  },
  {
    name: 'Single Room',
    price: '$255/night',
    image: 'https://picsum.photos/seed/regent-room3/600/400',
  },
  {
    name: 'Deluxe Suite',
    price: '$450/night',
    image: 'https://picsum.photos/seed/regent-room4/600/400',
  },
  {
    name: 'Luxury Suite',
    price: '$600/night',
    image: 'https://picsum.photos/seed/regent-room5/600/400',
  },
  {
    name: 'Penthouse',
    price: '$850/night',
    image: 'https://picsum.photos/seed/regent-room6/600/400',
  },
] as const

export const ABOUT = {
  heading: 'About Us',
  paragraph:
    'Regent Hotel & Resort offers an unparalleled luxury experience in the heart of the city. With world-class amenities, exquisite dining, and personalized service, we ensure every guest enjoys a memorable stay. Our commitment to excellence has earned us recognition as one of the finest hospitality destinations.',
  image: 'https://picsum.photos/seed/regent-about/800/500',
  videoLabel: 'Watch Video',
}

export interface Feature {
  name: string
  icon: string
}

export const FEATURES: Feature[] = [
  { name: 'Swimming Pool', icon: 'waves' },
  { name: 'Reception', icon: 'bell-concierge' },
  { name: 'Fire Exit', icon: 'shield-check' },
  { name: 'Parking', icon: 'car' },
  { name: 'Hair Dryer', icon: 'wind' },
  { name: 'Minibar', icon: 'wine' },
  { name: 'Drinks', icon: 'wine-off' },
  { name: 'Airport Transfer', icon: 'plane' },
] as const

export const PROMO = {
  heading: 'Summer Special — 50% Off All Suites',
  buttonLabel: 'Book Now',
  countdown: 'Hurry! Offer ends in 30 days',
  image: 'https://picsum.photos/seed/regent-promo/1600/600',
}

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/regent-gal1/400/300',
  'https://picsum.photos/seed/regent-gal2/400/300',
  'https://picsum.photos/seed/regent-gal3/400/300',
  'https://picsum.photos/seed/regent-gal4/400/300',
  'https://picsum.photos/seed/regent-gal5/400/300',
  'https://picsum.photos/seed/regent-gal6/400/300',
  'https://picsum.photos/seed/regent-gal7/400/300',
  'https://picsum.photos/seed/regent-gal8/400/300',
] as const

export interface Event {
  title: string
  date: string
  description: string
  image: string
}

export const EVENTS: Event[] = [
  {
    title: 'Wine Tasting Evening',
    date: 'October 15, 2026',
    description:
      'Join us for an exclusive wine tasting featuring rare vintages from around the world.',
    image: 'https://picsum.photos/seed/regent-event1/600/400',
  },
  {
    title: 'Live Jazz Night',
    date: 'November 8, 2026',
    description: 'Enjoy smooth jazz performances by renowned artists in our elegant ballroom.',
    image: 'https://picsum.photos/seed/regent-event2/600/400',
  },
  {
    title: 'Holiday Gala Dinner',
    date: 'December 24, 2026',
    description: 'Celebrate the season with a spectacular gala dinner featuring gourmet cuisine.',
    image: 'https://picsum.photos/seed/regent-event3/600/400',
  },
] as const

export interface Testimonial {
  name: string
  quote: string
  avatar: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    quote:
      'An absolutely stunning hotel with impeccable service. The rooms are luxurious and the staff made us feel like royalty.',
    avatar: 'https://picsum.photos/seed/regent-avatar1/100/100',
  },
  {
    name: 'James Anderson',
    quote:
      'The best hotel experience we have ever had. The amenities are world-class and the location is perfect.',
    avatar: 'https://picsum.photos/seed/regent-avatar2/100/100',
  },
  {
    name: 'Elena Rodriguez',
    quote:
      'From the moment we arrived, everything was perfect. The dining was exceptional and the spa was heavenly.',
    avatar: 'https://picsum.photos/seed/regent-avatar3/100/100',
  },
] as const

export const FOOTER = {
  about: {
    heading: 'About Regent',
    text: 'Regent Hotel & Resort is a premier destination for luxury hospitality, offering world-class amenities and personalized service.',
    readMoreLabel: 'Read More',
  },
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Contact', href: '#contact' },
  ],
  contact: {
    heading: 'Contact Info',
    lines: ['123 Resort Boulevard', 'Downtown District', 'New York, NY 10001', '+1 (212) 555-0199'],
  },
  socialIcons: [
    { name: 'Facebook', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
  ],
  copyright: '© 2026 Regent Hotel & Resort — All rights reserved',
  dockLink: {
    href: 'https://www.componentdock.com/',
    label: 'More templates at Component Dock',
  },
} as const
