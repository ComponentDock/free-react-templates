import { CakeSlice, Coffee, CupSoda, UtensilsCrossed } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#news' },
  { label: 'Contact Us', href: '#contact' },
]

/* The source's Blog entry expands into a small dropdown. */
export const blogSubLinks: NavLink[] = [
  { label: 'Blog Details', href: '#news' },
  { label: 'Elements', href: '#news' },
]

export const hero = {
  before: 'Handmade',
  accent: 'Cookies',
  after: 'and Coffee Delights',
  text: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  image: 'https://picsum.photos/id/431/1600/900',
}

export const about = {
  heading:
    'A boutique and fun cafe that brought together coffee cultures of the whole world in California.',
  paragraph:
    'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; at Beanery we roast small batches, pour slowly and welcome everyone — from first sip to last drop.',
  signature: 'The Beanery Family',
  image: 'https://picsum.photos/seed/beanery-about-full/1800/600',
}

export interface HoursBlock {
  title: string
  days: string
  time: string
}

export const hoursBlocks: HoursBlock[] = [
  { title: 'Hours', days: 'Monday — Sunday', time: '7:00 am – 8:00 pm' },
  { title: 'Dinner', days: 'Friday & Saturday', time: '6:00 pm – 11:00 pm' },
  { title: 'Lunch', days: 'Weekdays', time: '11:30 am – 3:00 pm' },
]

interface MenuItem {
  name: string
  price: string
  description: string
}

export interface MenuCategory {
  title: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    title: 'Coffee',
    items: [
      {
        name: 'Espresso Single Origin',
        price: '$3.50',
        description: 'A short, rich pull with notes of dark chocolate and orange peel.',
      },
      {
        name: 'Flat White',
        price: '$4.20',
        description: 'Double ristretto with velvety steamed milk, poured slow.',
      },
      {
        name: 'Cold Brew Tonic',
        price: '$4.80',
        description: 'Slow-steeped coffee over ice with a bright tonic top.',
      },
      {
        name: 'Mocha Rouge',
        price: '$5.00',
        description: 'Espresso, dark cocoa and a whisper of chilli.',
      },
      {
        name: 'Pour Over House',
        price: '$4.50',
        description: 'Our rotating single origin, brewed to your cup.',
      },
    ],
  },
  {
    title: 'Drinks',
    items: [
      {
        name: 'Iced Matcha Latte',
        price: '$5.20',
        description: 'Ceremonial matcha shaken with oat milk over ice.',
      },
      {
        name: 'Hibiscus Cooler',
        price: '$4.60',
        description: 'Floral hibiscus tea, lime and a touch of honey.',
      },
      {
        name: 'Spiced Chai',
        price: '$4.00',
        description: 'House chai blend steamed with your choice of milk.',
      },
      {
        name: 'Vanilla Bean Shake',
        price: '$5.50',
        description: 'Vanilla bean ice cream blended extra thick.',
      },
      {
        name: 'Fresh Lemonade',
        price: '$3.80',
        description: 'Squeezed to order with a sprig of mint.',
      },
    ],
  },
  {
    title: 'Fast Food',
    items: [
      {
        name: 'Butter Croissant',
        price: '$6.00',
        description: 'Baked at dawn, flaky layers and a golden crumb.',
      },
      {
        name: 'Avocado Toast',
        price: '$7.50',
        description: 'Sourdough, smashed avocado, chili flakes and lime.',
      },
      {
        name: 'Baked Pretzel',
        price: '$4.20',
        description: 'Warm, salty and served with smoked cheese dip.',
      },
      {
        name: 'Ham & Cheese Panini',
        price: '$6.80',
        description: 'Pressed hot with Dijon and aged cheddar.',
      },
      {
        name: 'Berry Parfait',
        price: '$5.90',
        description: 'Greek yogurt, granola and seasonal berries.',
      },
    ],
  },
]

export interface Service {
  icon: LucideIcon
  text: string
}

export const services: Service[] = [
  {
    icon: Coffee,
    text: 'Freshly roasted single-origin beans, ground to order for every cup.',
  },
  {
    icon: CupSoda,
    text: 'Slow-brewed pour overs, pressed espresso and daily specials.',
  },
  {
    icon: UtensilsCrossed,
    text: 'House-baked pastries, sandwiches and light plates all day.',
  },
  {
    icon: CakeSlice,
    text: 'Seasonal desserts and specialty drinks worth the queue.',
  },
]

export const servicesImage = 'https://picsum.photos/id/292/1600/900'

export const gallery: string[] = [
  'https://picsum.photos/id/1080/800/600',
  'https://picsum.photos/id/292/800/600',
  'https://picsum.photos/id/425/800/600',
  'https://picsum.photos/id/431/800/600',
]

export interface Testimonial {
  quote: string
  name: string
  role: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'The flat white here ruined coffee elsewhere for me — smooth, rich and never bitter.',
    name: 'Mara Ellison',
    role: 'Regular at the window seat',
    image: 'https://picsum.photos/id/64/300/300',
  },
  {
    quote: 'Their pastries are baked every morning and it shows. The almond croissant is a must.',
    name: 'June Whitfield',
    role: 'Weekend visitor',
    image: 'https://picsum.photos/id/823/300/300',
  },
  {
    quote:
      'A cozy corner with books, good music and the best matcha in town. My second living room.',
    name: 'Priya Raman',
    role: 'Remote worker',
    image: 'https://picsum.photos/id/1027/300/300',
  },
]

export const instagramImages: string[] = [
  'https://picsum.photos/id/425/500/500',
  'https://picsum.photos/id/431/500/500',
  'https://picsum.photos/id/1080/500/500',
  'https://picsum.photos/id/292/500/500',
  'https://picsum.photos/id/425/500/500',
]

export const instagramHandle = '@beanery_coffee'

export interface Social {
  name: string
  label: string
  href: string
  path: string
}

export const socials: Social[] = [
  {
    name: 'Facebook',
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'Instagram',
    label: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    name: 'LinkedIn',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  },
]

export const footerLinks: NavLink[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const address = '88/A, Green lane, Monaka CA 92032'

export const phoneDisplay = '+10 (88) 237 3782'
export const phoneHref = 'tel:' + phoneDisplay.replace(/[^\d+]/g, '')
