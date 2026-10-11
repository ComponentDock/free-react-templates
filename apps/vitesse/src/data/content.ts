import { Clock, MapPin, Phone, Plane, Ship, Truck } from 'lucide-react'

export const UTILITY = {
  phone: '+1 555-010-0142',
  email: 'hello@example.com',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
]

export const BLOG_DROPDOWN = [
  { label: 'Blog', href: '#blog' },
  { label: 'Blog Details', href: '#blog' },
  { label: 'Elements', href: '#blog' },
]

export const NAV_TAIL_LINKS = [{ label: 'Contact', href: '#contact' }]

export const INFO_ITEMS = [
  { icon: Phone, label: 'Call Us Anytime', value: '+1 555-010-0142' },
  { icon: Clock, label: 'Sunday CLOSED', value: 'Mon - Sat 8.00 - 18.00' },
  { icon: MapPin, label: '1200 Example Harbor Road', value: 'Newark, NJ 07114' },
]

export const SERVICES = [
  {
    icon: Truck,
    title: 'Land Transport',
    blurb:
      'Full and part truckloads across the country, with a named driver and live tracking on every run.',
  },
  {
    icon: Ship,
    title: 'Ship Transport',
    blurb:
      'Container and break-bulk freight on the main ocean lanes, booked, documented and cleared for you.',
  },
  {
    icon: Plane,
    title: 'Air Transport',
    blurb:
      'Time-critical cargo on scheduled flights, from a single box to a chartered pallet load.',
  },
]

export const ABOUT_PARAGRAPHS = [
  'Every shipment gets a tracking ID, a named coordinator and an honest delivery date. We plan the route, book the capacity and keep you posted from pickup to proof of delivery.',
  'From a single pallet to full truckloads, our road, sea and air network moves freight on schedule — with customs paperwork, insurance and packaging handled in one place.',
]

export const QUOTE_FREIGHT_OPTIONS = [
  'General Freight',
  'Express Delivery',
  'Refrigerated Goods',
  'Hazardous Materials',
]

export const QUOTE_EXTRA_SERVICES = ['Freight', 'Express Delivery', 'Insurance', 'Packaging']

export const TEAM = [
  {
    name: 'Daniel Reyes',
    role: 'Operations Manager',
    image: 'https://picsum.photos/seed/vitesse-team-1/600/700',
  },
  {
    name: 'Omar Haddad',
    role: 'Freight Coordinator',
    image: 'https://picsum.photos/seed/vitesse-team-2/600/700',
  },
  {
    name: 'Lucas Moretti',
    role: 'Customs Specialist',
    image: 'https://picsum.photos/seed/vitesse-team-3/600/700',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'They moved our busiest season without a single late container. The tracking updates meant our warehouse always knew what was coming.',
    initials: 'SW',
    name: 'Sarah Whitfield',
    role: 'Import manager, home goods retailer',
  },
  {
    quote:
      'Quotes come back the same day and the price never drifts. Our machine parts workshop finally has a freight partner we can plan around.',
    initials: 'VL',
    name: 'Victor Lindqvist',
    role: 'Owner, machine parts workshop',
  },
  {
    quote:
      'Customs used to be the scary part of importing. Their team handles the paperwork and explains exactly what is happening at every step.',
    initials: 'MK',
    name: 'Mara Kowalski',
    role: 'Founder, boutique wine importer',
  },
]

export const BLOG_POSTS = [
  {
    image: 'https://picsum.photos/seed/vitesse-blog-1/700/460',
    day: '01',
    month: 'OCT',
    author: 'Omar Haddad',
    comments: '03',
    title: 'What to Know Before Your First Pallet Shipment',
    excerpt:
      'Packaging, labels and paperwork — the three things that decide whether a pallet moves fast or sits still.',
  },
  {
    image: 'https://picsum.photos/seed/vitesse-blog-2/700/460',
    day: '21',
    month: 'SEP',
    author: 'Lucas Moretti',
    comments: '03',
    title: 'How Container Consolidation Cuts Freight Costs',
    excerpt:
      'Sharing a container with other shippers is cheaper than you think, if you can live with a slightly longer transit.',
  },
  {
    image: 'https://picsum.photos/seed/vitesse-blog-3/700/460',
    day: '14',
    month: 'SEP',
    author: 'Marco Bellini',
    comments: '03',
    title: 'From Quay to Truck: How a Container Clears the Port',
    excerpt:
      'A walk through the handoffs between terminal, customs and haulier that every import passes through.',
  },
]

export const FOOTER_COLUMNS = [
  {
    title: 'COMPANY',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Press & Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Open hour',
    links: [
      { label: 'Monday-Friday 8am-6pm', href: '#contact' },
      { label: 'Saturday 8am-6pm', href: '#contact' },
      { label: 'Sunday closed', href: '#contact' },
      { label: 'Online tracking 24/7', href: '#quote' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { label: 'Track a Shipment', href: '#top' },
      { label: 'Request a Quote', href: '#quote' },
      { label: 'Service Areas', href: '#services' },
      { label: 'Customs Help', href: '#contact' },
      { label: 'Shipping Guides', href: '#blog' },
    ],
  },
]

export const FOOTER_BLURB =
  'Road, sea and air freight with live tracking, handled by one team from pickup to delivery.'
