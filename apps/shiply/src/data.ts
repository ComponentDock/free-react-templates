import { BadgeDollarSign, Boxes, Car, Phone, Plane, Ship, Truck, Warehouse } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const brand = {
  name: 'Shiply',
  tagline: 'Freight Services',
}

export interface NavLink {
  label: string
  href: string
  active?: boolean
  children?: readonly string[]
}

export const navLinks: readonly NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About Us', href: '#offer', active: false },
  {
    label: 'Services',
    href: '#services',
    active: false,
    children: ['Air Freight', 'Ocean Freight', 'Ground Shipping', 'Warehousing', 'Storage'],
  },
  { label: 'Industries', href: '#more-services', active: false },
  { label: 'Blog', href: '#blog', active: false },
  { label: 'Contact', href: '#contact', active: false },
]

export const hero = {
  image: 'https://picsum.photos/seed/shiply-hero/1920/1080',
  heading: 'Worldwide Freight Services',
  cta: 'Get Started!',
}

export const overlap = {
  cards: [
    {
      icon: BadgeDollarSign as LucideIcon,
      title: 'Best Prices',
      body: 'Competitive rates on every shipment, quoted up front with no hidden fees.',
    },
    {
      icon: Phone as LucideIcon,
      title: '24/7 Support',
      body: 'Our dispatch team is on call around the clock to keep your cargo moving.',
    },
  ],
  quote: {
    title: 'Get Free Quote',
    fields: [
      { label: 'Name', placeholder: 'Enter Name' },
      { label: 'Email', placeholder: 'Enter Email' },
    ],
    button: 'Get Quote',
    success: 'Thanks! We will email your quote shortly.',
  },
}

export const offers = [
  {
    icon: Plane as LucideIcon,
    title: 'Air Freight',
    body: 'Time-critical shipments flown on scheduled and charter services worldwide.',
  },
  {
    icon: Ship as LucideIcon,
    title: 'Ocean Freight',
    body: 'Full and part container loads on major deep-sea and short-sea routes.',
  },
  {
    icon: Truck as LucideIcon,
    title: 'Ground Shipping',
    body: 'Reliable road haulage with real-time tracking from depot to door.',
  },
] as const

export const services = [
  { title: 'Storage', image: 'https://picsum.photos/seed/shiply-service-1/800/600' },
  { title: 'Air Transports', image: 'https://picsum.photos/seed/shiply-service-2/800/600' },
  { title: 'Cargo Transports', image: 'https://picsum.photos/seed/shiply-service-3/800/600' },
  { title: 'Cargo Ship', image: 'https://picsum.photos/seed/shiply-service-4/800/600' },
  { title: 'Ware Housing', image: 'https://picsum.photos/seed/shiply-service-5/800/600' },
] as const

export const moreServices = [
  {
    icon: Plane as LucideIcon,
    title: 'Air Freight',
    body: 'Express air cargo for urgent and high-value consignments.',
  },
  {
    icon: Ship as LucideIcon,
    title: 'Ocean Freight',
    body: 'Cost-effective sea freight for bulk and containerized cargo.',
  },
  {
    icon: Truck as LucideIcon,
    title: 'Ground Shipping',
    body: 'Nationwide trucking with dedicated and shared loads.',
  },
  {
    icon: Warehouse as LucideIcon,
    title: 'Warehousing',
    body: 'Secure storage with inventory management and order fulfillment.',
  },
  {
    icon: Boxes as LucideIcon,
    title: 'Storage',
    body: 'Flexible short- and long-term storage for every load size.',
  },
  {
    icon: Car as LucideIcon,
    title: 'Delivery Van',
    body: 'Fast last-mile delivery for retail, food, and e-commerce.',
  },
] as const

export const video = {
  image: 'https://picsum.photos/seed/shiply-video/1920/1080',
  heading: 'View Our Services By Watching This Short Video',
}

export const testimonials = [
  {
    name: 'John Smith',
    image: 'https://picsum.photos/seed/shiply-avatar-1/200/200',
    quote:
      'Shiply moved our entire production line on schedule — flawless from pickup to delivery.',
  },
  {
    name: 'Christine Aguilar',
    image: 'https://picsum.photos/seed/shiply-avatar-2/200/200',
    quote: 'The quote process took minutes and the rate beat every competitor we asked.',
  },
  {
    name: 'Robert Spears',
    image: 'https://picsum.photos/seed/shiply-avatar-3/200/200',
    quote: 'Real-time tracking and a support team that actually answers at 2am.',
  },
  {
    name: 'Bruce Rogers',
    image: 'https://picsum.photos/seed/shiply-avatar-4/200/200',
    quote: 'Our warehouse-to-port runs have never been this dependable.',
  },
] as const

export const posts = [
  {
    title: 'Warehousing Your Packages',
    meta: 'by Theresa Winston • Jan 18, 2019 at 2:00 pm • News',
    body: 'How modern warehousing keeps your goods safe, organized, and ready to ship the moment you need them.',
    image: 'https://picsum.photos/seed/shiply-blog-1/800/500',
  },
  {
    title: 'Warehousing Your Packages',
    meta: 'by Theresa Winston • Jan 18, 2019 at 2:00 pm • News',
    body: 'Five tips for choosing a logistics partner that scales with your business.',
    image: 'https://picsum.photos/seed/shiply-blog-2/800/500',
  },
] as const

export const cta = {
  heading: 'Try Our Services',
  button: 'Get Started',
}

export const footer = {
  widgets: [
    { heading: 'Quick Links', links: ['About Us', 'Services', 'Testimonials', 'Contact Us'] },
    { heading: 'Products', links: ['About Us', 'Services', 'Testimonials', 'Contact Us'] },
    { heading: 'Features', links: ['About Us', 'Services', 'Testimonials', 'Contact Us'] },
  ],
  newsletter: 'Subscribe Newsletter',
  newsletterPlaceholder: 'Enter Email',
  newsletterButton: 'Send',
  newsletterSuccess: 'Thanks for subscribing!',
  copyright: 'All rights reserved',
}
