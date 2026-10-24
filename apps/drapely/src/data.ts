export const brand = {
  name: 'Drapely',
  tagline: 'Everyday pieces, cut to fall just right.',
}

export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#popular' },
  { label: 'Catalog', href: '#collections' },
  { label: 'New Arrivals', href: '#new-shoes' },
  { label: 'Contact', href: '#contact' },
]

export const cartCount = 2

export interface Collection {
  name: string
  count: number
  seed: string
}

/** Category collage: index 0 is the large left tile, 1 and 2 stack right. */
export const collections: Collection[] = [
  { name: 'Women', count: 25, seed: 'drapely-collections-women' },
  { name: 'Men', count: 25, seed: 'drapely-collections-men' },
  { name: 'Shoes', count: 25, seed: 'drapely-collections-shoes' },
]

export interface Product {
  name: string
  price: number
  wasPrice?: number
  rating?: number
  seed: string
}

export const popularProducts: Product[] = [
  { name: 'Fog Runner', price: 20, seed: 'drapely-fog-runner' },
  { name: 'Cobalt Heels', price: 28, wasPrice: 46, seed: 'drapely-cobalt-heels' },
  {
    name: 'Washed Denim Jacket',
    price: 28,
    wasPrice: 46,
    rating: 5,
    seed: 'drapely-denim-jacket',
  },
  { name: 'Olive Leather Tote', price: 28, wasPrice: 46, seed: 'drapely-leather-tote' },
  { name: 'Stone Linen Shirt', price: 28, wasPrice: 46, seed: 'drapely-linen-shirt' },
  { name: 'Amber Puffer', price: 58, seed: 'drapely-amber-puffer' },
]

export const ratedProducts: Product[] = [
  { name: 'Stone Linen Shirt', price: 28, wasPrice: 46, rating: 5, seed: 'drapely-linen-shirt' },
  { name: 'Cobalt Heels', price: 28, wasPrice: 46, rating: 5, seed: 'drapely-cobalt-heels' },
  {
    name: 'Washed Denim Jacket',
    price: 28,
    wasPrice: 46,
    rating: 5,
    seed: 'drapely-denim-jacket',
  },
  { name: 'Olive Leather Tote', price: 28, wasPrice: 46, rating: 5, seed: 'drapely-leather-tote' },
  { name: 'Amber Puffer', price: 58, rating: 5, seed: 'drapely-amber-puffer' },
]

export const hero = {
  eyebrow: '#New Summer Collection 2019',
  primary: { title: 'Arrivals Sales', seed: 'drapely-hero-arrivals' },
  secondary: { title: 'New Shoes', seed: 'drapely-hero-shoes' },
  cta: 'Shop Now',
}

export const promo = {
  title: 'Finding Your Perfect Shirts This Summer',
  dates: 'Promo from July 15 — 25, 2019',
  seed: 'drapely-promo-shirt',
}

/** Footer quick links, rendered as three sub-columns. */
export const quickLinkColumns: string[][] = [
  ['Sell online', 'Features', 'Shopping cart', 'Store builder'],
  ['Mobile commerce', 'Dropshipping', 'Website development'],
  ['Point of sale', 'Hardware', 'Software'],
]

export const contactInfo = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'hello@drapely.store',
}

/** Deterministic placeholder photography (seeded, never a copied asset). */
export function photo(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`
}

export function formatPrice(value: number): string {
  return `$${value.toFixed(2)}`
}
