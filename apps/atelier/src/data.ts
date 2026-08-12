/* Atelier — content data for the fashion e-commerce storefront, recreated
   from ColorLib "Ashion" (https://colorlib.com/wp/template/ashion/).
   Copy types mirror the original (category tiles, product names, banner
   headlines, service rows, footer columns); all images are seeded picsum
   placeholders. */

export const BRAND = 'Atelier'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Categories', href: '#categories' },
  { label: 'New Products', href: '#new-products' },
  { label: 'Trend', href: '#trend' },
  { label: 'Contact', href: '#contact' },
]

export interface Category {
  name: string
  large?: boolean
  seed: string
}

/** One large "Women's fashion" tile + 2x2 grid of smaller tiles. */
export const CATEGORIES: Category[] = [
  { name: "Women's fashion", large: true, seed: 'atelier-cat-1' },
  { name: "Men's fashion", seed: 'atelier-cat-2' },
  { name: "Kid's fashion", seed: 'atelier-cat-3' },
  { name: 'Cosmetics', seed: 'atelier-cat-4' },
  { name: 'Accessories', seed: 'atelier-cat-5' },
]

export type Badge = 'new' | 'sale' | 'sold' | null

export interface Product {
  name: string
  badge: Badge
  rating: number
  price: number
  oldPrice?: number
  seed: string
}

/** The eight NEW PRODUCT cards — badges mirror the original (NEW / SALE /
   OUT OF STOCK / none). */
export const NEW_PRODUCTS: Product[] = [
  {
    name: 'Buttons tweed blazer',
    badge: 'new',
    rating: 5,
    price: 59,
    oldPrice: 75,
    seed: 'atelier-p-1',
  },
  { name: 'Flowy striped skirt', badge: 'sold', rating: 4, price: 39, seed: 'atelier-p-2' },
  { name: 'Cotton T-Shirt', badge: null, rating: 4, price: 19, seed: 'atelier-p-3' },
  { name: 'Slim striped pocket shirt', badge: null, rating: 5, price: 29, seed: 'atelier-p-4' },
  {
    name: 'Fit micro corduroy shirt',
    badge: 'sale',
    rating: 4,
    price: 35,
    oldPrice: 49,
    seed: 'atelier-p-5',
  },
  {
    name: 'Tropical Kimono',
    badge: 'sale',
    rating: 5,
    price: 45,
    oldPrice: 68,
    seed: 'atelier-p-6',
  },
  {
    name: 'Contrasting sunglasses',
    badge: 'sale',
    rating: 4,
    price: 25,
    oldPrice: 38,
    seed: 'atelier-p-7',
  },
  { name: 'Water resistant backpack', badge: null, rating: 5, price: 55, seed: 'atelier-p-8' },
]

export interface BannerSlide {
  headline: string
  tagline: string
  seed: string
}

/** The three banner slides ("The Project Jacket" / "Linen Breeze Dress" /
   "Urban Street Style"). */
export const BANNER_SLIDES: BannerSlide[] = [
  {
    headline: 'The Project Jacket',
    tagline: 'Premium outerwear built for the modern city.',
    seed: 'atelier-b-1',
  },
  {
    headline: 'Linen Breeze Dress',
    tagline: 'Lightweight summer essentials, made to move.',
    seed: 'atelier-b-2',
  },
  {
    headline: 'Urban Street Style',
    tagline: 'Bold looks for every sidewalk.',
    seed: 'atelier-b-3',
  },
]

export const TREND_TABS = ['Hot Trend', 'Best Seller', 'Feature'] as const

export type TrendTab = (typeof TREND_TABS)[number]

/** Three product cards per tab, mirroring the original's trend section. */
export const TREND_PRODUCTS: Record<TrendTab, Product[]> = {
  'Hot Trend': [
    { name: 'Chain bucket bag', badge: 'new', rating: 5, price: 49, seed: 'atelier-t-1' },
    {
      name: 'Pendant earrings',
      badge: 'sale',
      rating: 4,
      price: 22,
      oldPrice: 30,
      seed: 'atelier-t-2',
    },
    { name: 'Cotton T-Shirt', badge: null, rating: 4, price: 19, seed: 'atelier-t-3' },
  ],
  'Best Seller': [
    { name: 'Cotton T-Shirt', badge: null, rating: 5, price: 19, seed: 'atelier-t-4' },
    {
      name: 'Zip-pockets pebbled tote briefcase',
      badge: 'new',
      rating: 5,
      price: 89,
      seed: 'atelier-t-5',
    },
    {
      name: 'Round leather bag',
      badge: 'sale',
      rating: 4,
      price: 65,
      oldPrice: 82,
      seed: 'atelier-t-6',
    },
  ],
  Feature: [
    { name: 'Bow wrap skirt', badge: 'new', rating: 4, price: 42, seed: 'atelier-t-7' },
    { name: 'Metallic earrings', badge: null, rating: 5, price: 18, seed: 'atelier-t-8' },
    {
      name: 'Flap cross-body bag',
      badge: 'sale',
      rating: 4,
      price: 72,
      oldPrice: 90,
      seed: 'atelier-t-9',
    },
  ],
}

export const DISCOUNT_HEADLINE = 'Summer 2030'
export const DISCOUNT_LABEL = 'SALE 50%'

/** Countdown target — June 1, 2030 (matches the "Summer 2030" campaign). */
export const DISCOUNT_TARGET = Date.UTC(2030, 5, 1)

export type ServiceIcon = 'truck' | 'shield' | 'headphones' | 'card'

export interface Service {
  title: string
  icon: ServiceIcon
}

export const SERVICES: Service[] = [
  { title: 'Free Shipping', icon: 'truck' },
  { title: 'Money Back Guarantee', icon: 'shield' },
  { title: 'Online Support 24/7', icon: 'headphones' },
  { title: 'Payment Secure', icon: 'card' },
]

export const INSTAGRAM_TILES = [
  { alt: 'Summer dress styling', seed: 'atelier-i-1' },
  { alt: 'Leather handbag detail', seed: 'atelier-i-2' },
  { alt: 'Street style outfit', seed: 'atelier-i-3' },
  { alt: 'Sunglasses on display', seed: 'atelier-i-4' },
  { alt: 'Minimal sneakers', seed: 'atelier-i-5' },
  { alt: 'Cozy knitwear look', seed: 'atelier-i-6' },
]

export const ABOUT_TEXT =
  'Atelier is a curated fashion destination — modern silhouettes, timeless fabrics and everyday staples for every wardrobe.'

export const PAYMENT_METHODS = [
  'Visa',
  'Mastercard',
  'Google Pay',
  'PayPal',
  'Apple Pay',
  'Stripe',
] as const

export interface FooterLink {
  label: string
  href: string
}

export const QUICK_LINKS: FooterLink[] = [
  { label: 'About', href: '#home' },
  { label: 'Blogs', href: '#trend' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#contact' },
]

export const ACCOUNT_LINKS: FooterLink[] = [
  { label: 'My Account', href: '#contact' },
  { label: 'Orders Tracking', href: '#contact' },
  { label: 'Checkout', href: '#contact' },
  { label: 'Wishlist', href: '#new-products' },
]

export const SOCIAL_LINKS = [
  { name: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
  { name: 'x', label: 'X', href: 'https://x.com' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
  { name: 'skype', label: 'Skype', href: 'https://skype.com' },
] as const
