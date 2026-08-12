/* Riviera content data — the single-page hotel & spa content (brand, nav,
   booking options, facilities, guestbook, about photos, footer widgets).
   Text is paraphrased but keeps the same kinds of content. */

export const BRAND = 'Riviera'
export const TAGLINE = 'Hotel & Spa'

export const NAV_LINKS = ['Home', 'About', 'Rooms', 'Pages', 'News', 'Contact'] as const
export const PAGES_DROPDOWN = ['About Us', 'Rooms', 'Services'] as const

export const ROOM_TYPES = [
  'Eg. Master suite',
  'Double Room',
  'Single Room',
  'Special Room',
] as const

export const GUEST_STEPPERS = [
  { name: 'adults', label: 'Adults' },
  { name: 'children', label: 'Children' },
  { name: 'rooms', label: 'Rooms' },
] as const

export const FACILITIES = [
  {
    title: 'Luxury Suite Room',
    subtitle: 'From $399',
    features: ['Smart TV', 'High Wi-fii', 'AC', 'Parking', 'Pool'],
    image: 'https://picsum.photos/seed/riviera-2/1600/796',
    flipped: false,
  },
  {
    title: 'Infinity Pool',
    subtitle: 'For all our guests',
    features: [],
    image: 'https://picsum.photos/seed/riviera-3/1600/796',
    flipped: true,
  },
] as const

export const TESTIMONIALS = [
  {
    date: '02 / 02 / 2019',
    quote: 'We loved our stay',
    name: 'JOHN DOE',
    location: 'Madrid',
    avatar: 'https://picsum.photos/seed/riviera-10/108/108',
  },
  {
    date: '02 / 02 / 2019',
    quote: 'I will come back again',
    name: 'Maria Smith',
    location: 'Madrid',
    avatar: 'https://picsum.photos/seed/riviera-11/108/108',
  },
] as const

export const ABOUT_PHOTOS = [
  'https://picsum.photos/seed/riviera-6/600/600',
  'https://picsum.photos/seed/riviera-7/600/600',
  'https://picsum.photos/seed/riviera-8/600/600',
  'https://picsum.photos/seed/riviera-9/600/600',
] as const

export const FOOTER_LINKS = ['Home', 'About', 'Rooms', 'Facilities', 'News', 'Contact'] as const

export const CONTACT_INFO = [
  { icon: 'MapPin', text: '1525 Boring Lane, Los Angeles, CA' },
  { icon: 'Phone', text: '+1 (603)535-4592' },
] as const
