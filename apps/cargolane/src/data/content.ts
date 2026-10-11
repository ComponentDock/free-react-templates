import {
  Archive,
  ClipboardList,
  CreditCard,
  Globe,
  Navigation,
  Plane,
  Ship,
  Truck,
  Warehouse,
} from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../components/icons'

export interface NavLink {
  label: string
  id: string
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Our Team', id: 'team' },
  { label: 'Services', id: 'services' },
  { label: 'Industries', id: 'industries' },
  { label: 'Blog', id: 'blog' },
  { label: 'Contact', id: 'contact' },
]

export const HERO_SLIDES = [
  {
    image: 'https://picsum.photos/seed/cargolane-hero-1/1600/900',
    alt: 'Freight containers stacked at a shipping terminal',
  },
  {
    image: 'https://picsum.photos/seed/cargolane-hero-2/1600/900',
    alt: 'Cargo aircraft being loaded on the runway',
  },
  {
    image: 'https://picsum.photos/seed/cargolane-hero-3/1600/900',
    alt: 'Warehouse team preparing pallets for dispatch',
  },
] as const

export const ABOUT_IMAGE = {
  image: 'https://picsum.photos/seed/cargolane-about-1/800/600',
  alt: 'Logistics crew coordinating a freight shipment',
}

export const ABOUT_CHECKS = [
  'Real-time shipment tracking on every lane',
  'Licensed customs brokerage in 40+ countries',
  'Transparent pricing with no surprise surcharges',
] as const

export interface Step {
  title: string
  blurb: string
  Icon: typeof ClipboardList
}

export const HOW_IT_WORKS_STEPS: readonly Step[] = [
  {
    title: 'Make An Order',
    blurb: 'Tell us what moves where, and we quote the best lane within one business day.',
    Icon: ClipboardList,
  },
  {
    title: 'Make A Payment',
    blurb: 'Settle securely online with transparent rates and itemised invoices.',
    Icon: CreditCard,
  },
  {
    title: 'Track Your Order',
    blurb: 'Follow every pallet from pickup to delivery in one live dashboard.',
    Icon: Navigation,
  },
]

export const TEAM = [
  {
    name: 'Marcus Reid',
    role: 'Co-Founder & President',
    blurb: 'Twenty years moving freight across ocean, air, and rail networks.',
    image: 'https://picsum.photos/seed/cargolane-team-1/600/600',
  },
  {
    name: 'Elena Voss',
    role: 'Co-Founder & COO',
    blurb: 'Runs operations and keeps every handoff on schedule and on budget.',
    image: 'https://picsum.photos/seed/cargolane-team-2/600/600',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Marketing',
    blurb: 'Connects shippers with the right lanes through clear, honest communication.',
    image: 'https://picsum.photos/seed/cargolane-team-3/600/600',
  },
] as const

export interface Service {
  title: string
  blurb: string
  Icon: typeof Plane
}

export const SERVICES: readonly Service[] = [
  {
    title: 'Air Freight',
    blurb: 'Priority air cargo with airport-to-door handling on every major trade lane.',
    Icon: Plane,
  },
  {
    title: 'Ocean Freight',
    blurb: 'FCL and LCL sea freight with full container visibility from port to port.',
    Icon: Ship,
  },
  {
    title: 'Land Transportation',
    blurb: 'Reliable road and rail coverage with scheduled departures nationwide.',
    Icon: Truck,
  },
  {
    title: 'Warehousing',
    blurb: 'Modern distribution hubs with picking, packing, and inventory control.',
    Icon: Warehouse,
  },
  {
    title: 'Storage',
    blurb: 'Secure short- and long-term storage with climate-controlled options.',
    Icon: Archive,
  },
  {
    title: 'Worldwide Delivery',
    blurb: 'Door-to-door delivery coordinated through one global partner network.',
    Icon: Globe,
  },
]

export interface Industry {
  title: string
  image: string
}

export const INDUSTRIES: readonly Industry[] = [
  { title: 'Storage', image: 'https://picsum.photos/seed/cargolane-industry-1/800/600' },
  { title: 'Air Transports', image: 'https://picsum.photos/seed/cargolane-industry-2/800/600' },
  { title: 'Cargo Transports', image: 'https://picsum.photos/seed/cargolane-industry-3/800/600' },
  { title: 'Cargo Ship', image: 'https://picsum.photos/seed/cargolane-industry-4/800/600' },
  { title: 'Ware Housing', image: 'https://picsum.photos/seed/cargolane-industry-5/800/600' },
  { title: 'Road Freight', image: 'https://picsum.photos/seed/cargolane-industry-6/800/600' },
]

export const TESTIMONIALS = [
  {
    quote:
      'Cargolane moved our seasonal inventory across three continents without a single missed window. Their tracking is the clearest we have used.',
    author: 'Daniel Weber',
    role: 'Supply Chain Director, Northwind Retail',
    avatar: 'https://picsum.photos/seed/cargolane-avatar-1/200/200',
  },
  {
    quote:
      'Quotes come back fast and the invoice matches the quote, every time. That kind of predictability is rare in freight.',
    author: 'Sofia Marin',
    role: 'Operations Lead, Helio Foods',
    avatar: 'https://picsum.photos/seed/cargolane-avatar-2/200/200',
  },
  {
    quote:
      'Their team rerouted a stranded shipment overnight and still delivered on the original date. Truly proactive partners.',
    author: 'James Okafor',
    role: 'Founder, Lumen Electronics',
    avatar: 'https://picsum.photos/seed/cargolane-avatar-3/200/200',
  },
  {
    quote:
      'From warehousing to last-mile, one team owns the whole journey. Our claims dropped to zero after switching.',
    author: 'Hannah Lindqvist',
    role: 'Logistics Manager, Vireo Home',
    avatar: 'https://picsum.photos/seed/cargolane-avatar-4/200/200',
  },
] as const

export const BLOG_POSTS = [
  {
    title: 'How Logistics Companies Improve Spendings',
    excerpt: 'Practical levers for cutting freight spend without cutting service quality.',
    date: 'Aug 12, 2025',
    category: 'News',
    image: 'https://picsum.photos/seed/cargolane-blog-1/800/500',
  },
  {
    title: 'Five Signs Your Warehouse Is Ready To Automate',
    excerpt: 'The operational signals that say your floor is ready for smarter tooling.',
    date: 'Sep 3, 2025',
    category: 'News',
    image: 'https://picsum.photos/seed/cargolane-blog-2/800/500',
  },
  {
    title: 'What Shippers Should Ask Before Peak Season',
    excerpt: 'A short checklist that keeps peak-season freight on time and on budget.',
    date: 'Oct 21, 2025',
    category: 'News',
    image: 'https://picsum.photos/seed/cargolane-blog-3/800/500',
  },
] as const

export const CONTACT_CARDS = [
  { label: 'Address', value: '203 Freight Ave, Mountain View, San Francisco, California, USA' },
  { label: 'Phone', value: '+1 232 3235 324' },
  { label: 'Email Address', value: 'hello@cargolane.example' },
] as const

export const FOOTER_QUICK_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
] as const

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
] as const
