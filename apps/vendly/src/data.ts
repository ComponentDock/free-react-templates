import type { LucideIcon } from 'lucide-react'
import { HelpCircle, RotateCcw, Truck } from 'lucide-react'

/* Vendly — single-page e-commerce / fashion-store template (recreation of
   the "Shoppers" demo): top utility bar → nav → hero → perks → collections
   → featured products → big sale → footer. Brand palette: violet #7971ea
   primary, ink #25262a headings/logo, body #8c92a0. */

export const BRAND = 'Vendly'

export const IMAGES = {
  hero: 'https://picsum.photos/id/996/1600/900',
  women: 'https://picsum.photos/id/823/800/600',
  children: 'https://picsum.photos/id/1025/800/600',
  men: 'https://picsum.photos/id/1027/800/600',
  bigSale: 'https://picsum.photos/seed/vendly-10/900/600',
  promo: 'https://picsum.photos/seed/vendly-11/400/300',
} as const

/* Uppercase nav links (Home and About carry dropdowns — see NAV_DROPDOWNS). */
export const NAV_LINKS = [
  { label: 'Shop', href: '#shop' },
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Contact', href: '#contact' },
] as const

export const NAV_DROPDOWNS = [
  { label: 'Home', href: '#home', items: ['Menu One', 'Menu Two', 'Menu Three', 'Sub Menu'] },
  { label: 'About', href: '#about', items: ['Menu One', 'Menu Two', 'Menu Three'] },
] as const

export const PERKS: ReadonlyArray<{
  heading: string
  blurb: string
  icon: LucideIcon
}> = [
  {
    heading: 'Free Shipping',
    icon: Truck,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.',
  },
  {
    heading: 'Free Returns',
    icon: RotateCcw,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.',
  },
  {
    heading: 'Customer Support',
    icon: HelpCircle,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.',
  },
]

export const COLLECTIONS = [
  { label: 'Women', image: IMAGES.women, href: '#catalogue' },
  { label: 'Children', image: IMAGES.children, href: '#catalogue' },
  { label: 'Men', image: IMAGES.men, href: '#catalogue' },
] as const

export const PRODUCTS = [
  {
    name: 'Tank Top',
    tagline: 'Finding perfect t-shirt',
    price: '$50',
    image: 'https://picsum.photos/seed/vendly-5/400/500',
  },
  {
    name: 'Corater',
    tagline: 'Finding perfect products',
    price: '$50',
    image: 'https://picsum.photos/seed/vendly-6/400/500',
  },
  {
    name: 'Polo Shirt',
    tagline: 'Finding perfect products',
    price: '$50',
    image: 'https://picsum.photos/seed/vendly-7/400/500',
  },
  {
    name: 'T-Shirt Mockup',
    tagline: 'Finding perfect products',
    price: '$50',
    image: 'https://picsum.photos/seed/vendly-8/400/500',
  },
  {
    name: 'Corater',
    tagline: 'Finding perfect products',
    price: '$50',
    image: 'https://picsum.photos/seed/vendly-9/400/500',
  },
] as const

export const BIG_SALE = {
  heading: '50% less in all items',
  meta: 'By Carl Smith • September 3, 2018',
  blurb:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?',
} as const

export const FOOTER_NAV = [
  ['Sell online', 'Features', 'Shopping cart', 'Store builder'],
  ['Mobile commerce', 'Dropshipping', 'Website development'],
  ['Point of sale', 'Hardware', 'Software'],
] as const

export const PROMO = {
  heading: 'Finding Your Perfect Shoes',
  range: 'Promo from January 15 — 25, 2019',
} as const

export const CONTACT = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'emailaddress@domain.com',
} as const
