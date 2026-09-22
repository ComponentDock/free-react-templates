// GrandStay content — hotel/hospitality one-pager.
// Image slots use deterministic picsum placeholders.

export const BRAND = 'GrandStay'

export interface NavLink {
  label: string
  href: string
  children?: readonly { readonly label: string }[]
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  {
    label: 'Facilities',
    href: '#facilities',
    children: [
      { label: 'Junior Suite' },
      { label: 'Double Room' },
      { label: 'Senior Suite' },
      { label: 'Single Room' },
    ],
  },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO = {
  heading: "We hope you'll enjoy your stay.",
  thumbnails: [
    { label: 'Pool', image: 'https://picsum.photos/seed/grandstay-pool/200/150' },
    { label: 'Sauna', image: 'https://picsum.photos/seed/grandstay-sauna/200/150' },
    { label: 'Gym', image: 'https://picsum.photos/seed/grandstay-gym/200/150' },
  ],
  bgImage: 'https://picsum.photos/id/164/1600/900',
} as const

export const ROOM = {
  title: 'Junior Suite',
  price: '$252',
  image: 'https://picsum.photos/seed/grandstay-room/600/400',
  features: [
    { label: '350 sq ft', icon: 'ruler' as const },
    { label: '2 Guests', icon: 'users' as const },
    { label: 'King Bed', icon: 'bed' as const },
    { label: 'City View', icon: 'eye' as const },
  ],
}

export const CHECK_FORM = {
  arrivalLabel: 'Date Arrival',
  departureLabel: 'Date Departure',
  roomTypeLabel: 'Room Type',
  roomTypes: ['Junior Suite', 'Double Room', 'Senior Suite', 'Single Room'] as const,
  quantityLabel: 'Room Quantity',
  submitLabel: 'Check Availability',
}

export const ABOUT = {
  quote: 'Customers may forget what you said but they will never forget how you made them feel.',
  paragraph1:
    'GrandStay is a boutique hotel nestled in the heart of the city, offering a blend of modern luxury and timeless charm. Every detail — from the hand-selected linens to the locally sourced breakfast — is designed to make your stay unforgettable.',
  paragraph2:
    'Our dedicated team anticipates your needs before you even think to ask. Whether you are here for business or pleasure, GrandStay promises an experience that goes beyond accommodation.',
}

export const FACILITIES = [
  {
    title: 'Wellness Center',
    description:
      'Unwind in our spa with therapeutic treatments, a heated pool, and a steam room designed to rejuvenate body and mind after a long journey.',
    image: 'https://picsum.photos/seed/grandstay-wellness/800/500',
    cta: 'Visit Center',
  },
  {
    title: 'Fitness Center',
    description:
      'State-of-the-art equipment, personal trainers, and yoga sessions every morning — all complimentary for hotel guests.',
    image: 'https://picsum.photos/seed/grandstay-fitness/800/500',
    cta: 'Visit Center',
  },
] as const

export interface Testimonial {
  name: string
  date: string
  rating: number
  title: string
  text: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    date: 'March 15, 2026',
    rating: 5,
    title: 'An exceptional stay from start to finish',
    text: 'The Junior Suite was immaculate, the staff were warm and attentive, and the Wellness Center was the perfect way to unwind after a long flight. We will definitely be back.',
  },
  {
    name: 'James Patterson',
    date: 'February 28, 2026',
    rating: 5,
    title: 'The best hotel experience we have had',
    text: 'From the moment we walked in, everything was perfect. The room overlooked the city skyline, breakfast was outstanding, and the concierge went above and beyond for our anniversary dinner.',
  },
  {
    name: 'Elena Rodriguez',
    date: 'January 10, 2026',
    rating: 5,
    title: 'Luxury without the pretension',
    text: 'GrandStay strikes the perfect balance between upscale and welcoming. The fitness center is fantastic, the bed is cloud-like, and the city view from the room is breathtaking.',
  },
] as const

export const INSTAGRAM = {
  heading: 'Follow us on Instagram @grandstayhotel',
}

export const ROOM_PICS = [
  'https://picsum.photos/seed/grandstay-rp1/400/300',
  'https://picsum.photos/seed/grandstay-rp2/400/300',
  'https://picsum.photos/seed/grandstay-rp3/400/300',
  'https://picsum.photos/seed/grandstay-rp4/400/300',
] as const

export const FOOTER = {
  columns: [
    {
      title: 'Location',
      icon: 'map-pin' as const,
      lines: ['123 Grand Avenue', 'Downtown District', 'New York, NY 10001'],
    },
    {
      title: 'Reception',
      icon: 'phone' as const,
      lines: ['+1 (212) 555-0199', 'reception@grandstay.example', 'Open 24/7'],
    },
    {
      title: 'Shuttle Service',
      icon: 'bus' as const,
      lines: ['Airport transfers daily', 'City center shuttle', 'Booking at reception'],
    },
    {
      title: 'Restaurant',
      icon: 'utensils' as const,
      lines: ['Breakfast 6:30 – 10:00', 'Lunch 12:00 – 14:30', 'Dinner 18:00 – 22:00'],
    },
  ],
  copyright: '© 2026 GrandStay — All rights reserved',
  dockLink: {
    href: 'https://www.componentdock.com/',
    label: 'More templates at Component Dock',
  },
} as const
