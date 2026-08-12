export const shopGroups = [
  {
    title: "Women's Collection",
    links: ['Dresses', 'Blouses & Shirts', 'T-shirts', 'Rompers', 'Bras & Panties'],
  },
  {
    title: "Men's Collection",
    links: ['T-Shirts', 'Polo', 'Shirts', 'Jackets', 'Trench'],
  },
  {
    title: "Kid's Collection",
    links: ['Dresses', 'Shirts', 'T-shirts', 'Jackets', 'Trench'],
  },
] as const

export const pagesLinks = ['Home', 'Product Details', 'Checkout', 'Regular Page'] as const

export const plainNavLinks = ['Blog', 'Contact'] as const

export interface Product {
  name: string
  price: string
  oldPrice?: string
  badge?: 'offer' | 'new'
  badgeText?: string
  image: string
}

export const products: Product[] = [
  {
    name: 'Knot Front Mini Dress',
    price: '$80.00',
    image: 'https://picsum.photos/id/64/400/500',
  },
  {
    name: 'Poplin Displaced Wrap Dress',
    price: '$80.00',
    image: 'https://picsum.photos/id/65/400/500',
  },
  {
    name: 'PETITE Crepe Wrap Mini Dress',
    price: '$55.00',
    oldPrice: '$75.00',
    badge: 'offer',
    badgeText: '-30%',
    image: 'https://picsum.photos/id/338/400/500',
  },
  {
    name: 'PETITE Belted Jumper Dress',
    price: '$80.00',
    badge: 'new',
    badgeText: 'New',
    image: 'https://picsum.photos/id/838/400/500',
  },
] as const

export const categories = [
  { label: 'Clothing', image: 'https://picsum.photos/id/338/600/480' },
  { label: 'Shoes', image: 'https://picsum.photos/id/1005/600/480' },
  { label: 'Accessories', image: 'https://picsum.photos/id/838/600/480' },
] as const

export const brands = ['Mango', 'Topshop', 'Zara', 'H&M', 'Gucci', 'Prada'] as const

export const cartItems = [
  {
    name: 'Button Through Strap Mini Dress',
    size: 'S',
    color: 'Red',
    price: '$45.00',
    image: 'https://picsum.photos/id/64/100/120',
  },
  {
    name: 'Button Through Strap Mini Dress',
    size: 'S',
    color: 'Red',
    price: '$45.00',
    image: 'https://picsum.photos/id/64/100/120',
  },
  {
    name: 'Button Through Strap Mini Dress',
    size: 'S',
    color: 'Red',
    price: '$45.00',
    image: 'https://picsum.photos/id/64/100/120',
  },
] as const

export const cartSummary = {
  subtotal: '$274.00',
  delivery: 'Free',
  discount: '-15%',
  total: '$232.00',
} as const

export const footerLinkGroups = [
  { title: 'Shop', links: ['Shop', 'Blog', 'Contact'] },
  {
    title: 'Help',
    links: [
      'Order Status',
      'Payment Options',
      'Shipping and Delivery',
      'Guides',
      'Privacy Policy',
      'Terms of Use',
    ],
  },
] as const

export const socialLinks = [
  { label: 'Facebook', href: '#facebook' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'Twitter', href: '#twitter' },
  { label: 'Pinterest', href: '#pinterest' },
  { label: 'YouTube', href: '#youtube' },
] as const
