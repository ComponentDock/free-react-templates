/** Copy + content data for the Settle furniture-shop landing (recreation of
    ColorLib "Aranoz"). Kept side-effect free so every entry is
    unit-testable. */

export const BRAND = 'Settle'

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [{ label: 'Home', href: '/' }]

export interface HeroSlide {
  seed: string
  headline: string
}

/* Source hero slider alternates "Wood & Cloth Sofa" / "Cloth & Wood Sofa"
   across 4 slides — kept as-is. */
export const HERO_SLIDES: HeroSlide[] = [
  { seed: 'settle-h1', headline: 'Wood & Cloth Sofa' },
  { seed: 'settle-h2', headline: 'Cloth & Wood Sofa' },
  { seed: 'settle-h3', headline: 'Wood & Cloth Sofa' },
  { seed: 'settle-h4', headline: 'Cloth & Wood Sofa' },
]
export const HERO_LEAD =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export const HERO_BUY_NOW = 'Buy Now'

export const FEATURED_TITLE = 'Featured Category'
export const FEATURED_EXPLORE = 'Explore Now'

export interface Category {
  seed: string
  title: string
}

export const CATEGORIES: Category[] = [
  { seed: 'settle-c1', title: 'Premium Quality' },
  { seed: 'settle-c2', title: 'Latest Foam Sofa' },
  { seed: 'settle-c3', title: 'Modern Lighting' },
  { seed: 'settle-c4', title: 'Cozy Bedding' },
]

export const SHOP_TITLE = 'awesome shop'
export const SHOP_LINK = 'shop'
export const ADD_TO_CART = '+ Add to cart'

export interface Product {
  seed: string
  name: string
  price: string
}

/* The source repeats the same product card (name + "$150.00") across the
   grid — give 12 distinct names, keep the same price like the original. */
export const PRODUCTS: Product[] = [
  { seed: 'settle-p1', name: 'Quartz Belt Watch', price: '$150.00' },
  { seed: 'settle-p2', name: 'Nordic Oak Chair', price: '$150.00' },
  { seed: 'settle-p3', name: 'Linen Throw Pillow', price: '$150.00' },
  { seed: 'settle-p4', name: 'Brass Table Lamp', price: '$150.00' },
  { seed: 'settle-p5', name: 'Ceramic Vase Set', price: '$150.00' },
  { seed: 'settle-p6', name: 'Walnut Coffee Table', price: '$150.00' },
  { seed: 'settle-p7', name: 'Velvet Accent Stool', price: '$150.00' },
  { seed: 'settle-p8', name: 'Marble Side Table', price: '$150.00' },
  { seed: 'settle-p9', name: 'Cotton Area Rug', price: '$150.00' },
  { seed: 'settle-p10', name: 'Rattan Storage Basket', price: '$150.00' },
  { seed: 'settle-p11', name: 'Steel Floor Lamp', price: '$150.00' },
  { seed: 'settle-p12', name: 'Leather Footstool', price: '$150.00' },
]

export const BEST_SELLERS_TITLE = 'Best Sellers'

export const BEST_SELLERS: Product[] = [
  { seed: 'settle-b1', name: 'Ivory Storage Cabinet', price: '$150.00' },
  { seed: 'settle-b2', name: 'Woven Pendant Light', price: '$150.00' },
  { seed: 'settle-b3', name: 'Oak Wall Shelf', price: '$150.00' },
  { seed: 'settle-b4', name: 'Wool Throw Blanket', price: '$150.00' },
]

export const OFFER_TITLE = 'Weekly Sale on 60% Off All Products'
export const OFFER_BUTTON = 'Book Now'

export const SUBSCRIBE_EYEBROW = 'Join Our Newsletter'
export const SUBSCRIBE_TITLE = 'Subscribe to get Updated with new offers'
export const SUBSCRIBE_BUTTON = 'Subscribe Now'
export const SUBSCRIBE_PLACEHOLDER = 'Enter email address'
export const SUBSCRIBE_SUCCESS = 'Thank you for subscribing!'

export const CLIENTS = ['Google', 'InVision', 'Nike', 'Microsoft', 'Airbnb']

export interface FooterColumn {
  title: string
  links: string[]
}

/* "Features" duplicates the "Quick Links" column in the source — kept. */
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Top Products',
    links: ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
  },
  {
    title: 'Quick Links',
    links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    title: 'Features',
    links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    title: 'Resources',
    links: ['Guides', 'Research', 'Experts', 'Agencies'],
  },
]

export const NEWSLETTER_TITLE = 'Newsletter'
export const NEWSLETTER_BLURB =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
export const NEWSLETTER_PLACEHOLDER = 'Enter email address'
export const NEWSLETTER_BUTTON = 'Subscribe'
export const NEWSLETTER_SUCCESS = 'Thank you for subscribing!'

export const COPYRIGHT = '© Settle. All rights reserved.'
