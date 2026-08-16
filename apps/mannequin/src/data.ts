/** Mannequin — fashion e-commerce content (recreated design copy).
 *  All images are deterministic picsum placeholders (no source assets).
 *  Hero/banner seeds were screened via pixel metrics + browser vision:
 *  editorial lifestyle subjects (no fashion models available on picsum). */

export interface Product {
  id: string
  name: string
  price: number
  category: 'women' | 'men' | 'bag' | 'shoes' | 'watches'
  image: string
  description: string
}

export const topbarLinks = ['Help & FAQs', 'My Account', 'EN', 'USD'] as const

export const navLinks = ['Home', 'Shop', 'Features', 'Blog', 'About', 'Contact'] as const

export interface Slide {
  label: string
  headline: string
  image: string
}

export const heroSlides: Slide[] = [
  {
    label: 'Women Collection 2030',
    headline: 'New Season',
    image: 'https://picsum.photos/id/64/1920/1080',
  },
  {
    label: 'New Season',
    headline: 'Jackets & Coats',
    image: 'https://picsum.photos/id/996/1920/1080',
  },
  {
    label: 'New Collection',
    headline: 'New arrivals',
    image: 'https://picsum.photos/id/823/1920/1080',
  },
] as const

export const filters = ['All Products', 'Women', 'Men', 'Bag', 'Shoes', 'Watches'] as const

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Cropped Wool Coat',
    price: 75.0,
    category: 'women',
    image: 'https://picsum.photos/seed/mannequin-p1/400/500',
    description:
      'A cropped wool-blend coat with a clean collar line — the layering piece for transitional weather.',
  },
  {
    id: 'p2',
    name: 'Relaxed Oxford Shirt',
    price: 35.31,
    category: 'men',
    image: 'https://picsum.photos/seed/mannequin-p2/400/500',
    description:
      'An easy-fit oxford in breathable cotton, cut to wear tucked or untucked with equal ease.',
  },
  {
    id: 'p3',
    name: 'Mini Leather Tote',
    price: 93.2,
    category: 'bag',
    image: 'https://picsum.photos/seed/mannequin-p3/400/500',
    description:
      'A structured mini tote in full-grain leather with a magnetic closure and an interior pocket.',
  },
  {
    id: 'p4',
    name: 'Court Sneakers',
    price: 52.66,
    category: 'shoes',
    image: 'https://picsum.photos/seed/mannequin-p4/400/500',
    description:
      'Low-profile court sneakers in smooth white leather with tonal stitching and a cushioned sole.',
  },
  {
    id: 'p5',
    name: 'Minimal Mesh Watch',
    price: 86.85,
    category: 'watches',
    image: 'https://picsum.photos/seed/mannequin-p5/400/500',
    description: 'A slim mesh-strap watch with a sunray dial — quiet sophistication for every day.',
  },
  {
    id: 'p6',
    name: 'Silk Slip Dress',
    price: 63.16,
    category: 'women',
    image: 'https://picsum.photos/seed/mannequin-p6/400/500',
    description:
      'A bias-cut slip dress in washed silk with adjustable straps and a fluid, flattering drape.',
  },
  {
    id: 'p7',
    name: 'Chino Work Pants',
    price: 54.79,
    category: 'men',
    image: 'https://picsum.photos/seed/mannequin-p7/400/500',
    description:
      'Structured chinos with a tapered leg, reinforced seams and a touch of stretch for comfort.',
  },
  {
    id: 'p8',
    name: 'Canvas Weekender',
    price: 25.5,
    category: 'bag',
    image: 'https://picsum.photos/seed/mannequin-p8/400/500',
    description:
      'A roomy canvas weekender with leather handles, a detachable shoulder strap and a shoe pocket.',
  },
  {
    id: 'p9',
    name: 'Riding Boots',
    price: 29.64,
    category: 'shoes',
    image: 'https://picsum.photos/seed/mannequin-p9/400/500',
    description:
      'Sleek tall riding boots in polished faux leather with an elastic side panel for a clean fit.',
  },
  {
    id: 'p10',
    name: 'Chronograph Steel',
    price: 18.49,
    category: 'watches',
    image: 'https://picsum.photos/seed/mannequin-p10/400/500',
    description: 'A sporty chronograph in brushed steel with three subdials and a date window.',
  },
  {
    id: 'p11',
    name: 'Cashmere Crewneck',
    price: 34.75,
    category: 'women',
    image: 'https://picsum.photos/seed/mannequin-p11/400/500',
    description:
      'A feather-light cashmere crewneck with ribbed trims — polished, warm and endlessly wearable.',
  },
  {
    id: 'p12',
    name: 'Denim Trucker Jacket',
    price: 18.96,
    category: 'men',
    image: 'https://picsum.photos/seed/mannequin-p12/400/500',
    description:
      'A classic trucker jacket in rigid denim with chest pockets and a versatile medium wash.',
  },
  {
    id: 'p13',
    name: 'Shoulder Sling Bag',
    price: 25.85,
    category: 'bag',
    image: 'https://picsum.photos/seed/mannequin-p13/400/500',
    description:
      'A compact sling bag in pebbled leather with an adjustable strap and zip compartments.',
  },
  {
    id: 'p14',
    name: 'Slip-On Loafers',
    price: 16.64,
    category: 'shoes',
    image: 'https://picsum.photos/seed/mannequin-p14/400/500',
    description:
      'Penny loafers in soft leather with a stacked heel and leather lining — slip on and go.',
  },
  {
    id: 'p15',
    name: 'Bicolor Dress Watch',
    price: 42.1,
    category: 'watches',
    image: 'https://picsum.photos/seed/mannequin-p15/400/500',
    description:
      'A bicolor case and bracelet dress watch with a champagne dial and sapphire crystal.',
  },
  {
    id: 'p16',
    name: 'Pleated Midi Skirt',
    price: 44.75,
    category: 'women',
    image: 'https://picsum.photos/seed/mannequin-p16/400/500',
    description:
      'A knife-pleated midi skirt with a concealed waistband and a graceful, fluid movement.',
  },
] as const

export interface BannerCard {
  name: string
  info: string
  image: string
}

export const bannerCards: BannerCard[] = [
  { name: 'Women', info: 'Spring 2030', image: 'https://picsum.photos/id/1027/600/800' },
  { name: 'Men', info: 'Spring 2030', image: 'https://picsum.photos/id/453/600/800' },
  { name: 'Accessories', info: 'New Trend', image: 'https://picsum.photos/id/1081/600/800' },
] as const

export const footerCategories = ['Women', 'Men', 'Shoes', 'Watches'] as const

export const footerHelp = ['Track Order', 'Returns', 'Shipping', 'FAQs'] as const

export const footerAddress = '8th floor, 379 Hudson St, New York, NY 10018'

export const footerPhone = '+1 967 1668 79'

export const sizes = ['S', 'M', 'L', 'XL'] as const
