export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
]

export const shopDropdown: NavLink[] = [
  { label: 'Product Page', href: '#' },
  { label: 'Shopping Card', href: '#' },
  { label: 'Check out', href: '#' },
]

export const promos: string[] = [
  'Free shipping on orders over $30 in USA',
  '20% Student Discount',
  '30% off on dresses. Use code: 30OFF',
]

export interface HeroSlide {
  image: string
  eyebrow: string
  title: string
  cta: string
}

const hero = (n: number) => `https://picsum.photos/seed/vogue-hero-${n}/1920/1080`

export const heroSlides: HeroSlide[] = [1, 2, 3].map((n) => ({
  image: hero(n),
  eyebrow: '2019',
  title: 'Lookbook.',
  cta: 'See More',
}))

export interface Feature {
  icon: 'truck' | 'coins' | 'headset'
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: 'truck',
    title: 'Free shipping',
    description:
      'Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus.',
  },
  {
    icon: 'coins',
    title: '100% Money back',
    description:
      'Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus.',
  },
  {
    icon: 'headset',
    title: 'Online support 24/7',
    description:
      'Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus.',
  },
]

export interface CollageBox {
  id: 'first' | 'second' | 'large'
  image: string
  alt: string
  captions: { text: string; tone: 'year' | 'heading' | 'alert' }[]
  cta?: string
  align: 'left' | 'right'
}

const collage = (n: number) => `https://picsum.photos/seed/vogue-collage-${n}/900/440`

export const collageBoxes: CollageBox[] = [
  {
    id: 'first',
    image: collage(1),
    alt: 'Jewelry lookbook editorial photo',
    align: 'right',
    captions: [
      { text: '2019 Party', tone: 'year' },
      { text: 'Jewelry', tone: 'heading' },
      { text: 'Trend Allert', tone: 'alert' },
    ],
    cta: 'See More',
  },
  {
    id: 'second',
    image: collage(2),
    alt: 'Footwear lookbook editorial photo',
    align: 'left',
    captions: [
      { text: '2019 Trend', tone: 'year' },
      { text: 'Footwear', tone: 'heading' },
      { text: 'Bold & Black', tone: 'alert' },
    ],
  },
]

export const largeBox: CollageBox = {
  id: 'large',
  image: 'https://picsum.photos/seed/vogue-collage-3/900/1100',
  alt: 'Collection lookbook editorial photo',
  align: 'left',
  captions: [
    { text: '2019 Party', tone: 'year' },
    { text: 'Collection', tone: 'heading' },
    { text: 'Trend Allert', tone: 'alert' },
  ],
}

export type ProductStatus = 'new' | 'sale' | 'popular'
type ProductCategory = 'dresses' | 'bags' | 'shoes' | 'accesories'

export interface Product {
  name: string
  price: string
  category: ProductCategory
  status: ProductStatus
  image: string
}

const product = (n: number) => `https://picsum.photos/seed/vogue-product-${n}/600/800`

export const productTabs = ['All', 'Dresses', 'Bags', 'Shoes', 'Accesories'] as const
export type ProductTab = (typeof productTabs)[number]

export const products: Product[] = [
  {
    name: 'Green Dress with details',
    price: '$22.90',
    category: 'dresses',
    status: 'new',
    image: product(1),
  },
  {
    name: 'Yellow Maxi Dress',
    price: '$25.90',
    category: 'dresses',
    status: 'sale',
    image: product(2),
  },
  {
    name: 'One piece bodysuit',
    price: '$19.90',
    category: 'accesories',
    status: 'new',
    image: product(3),
  },
  {
    name: 'Blue Dress with details',
    price: '$35.50',
    category: 'dresses',
    status: 'popular',
    image: product(4),
  },
  {
    name: 'Green Dress with details',
    price: '$22.90',
    category: 'shoes',
    status: 'new',
    image: product(5),
  },
  {
    name: 'Yellow Maxi Dress',
    price: '$25.90',
    category: 'bags',
    status: 'sale',
    image: product(6),
  },
  {
    name: 'One piece bodysuit',
    price: '$19.90',
    category: 'accesories',
    status: 'new',
    image: product(7),
  },
  {
    name: 'Blue Dress with details',
    price: '$35.50',
    category: 'bags',
    status: 'popular',
    image: product(8),
  },
]

export const logoWordmarks: string[] = ['Vogue', 'Maison', 'Atelier', 'Runway', 'Boutique']

export interface FooterColumn {
  heading: string
  links: string[]
}

export const footerColumns: FooterColumn[] = [
  {
    heading: 'About us',
    links: ['About Us', 'Community', 'Jobs', 'Shipping', 'Contact Us'],
  },
  {
    heading: 'Customer Care',
    links: ['Search', 'Privacy Policy', '2019 Lookbook', 'Shipping & Delivery', 'Gallery'],
  },
  {
    heading: 'Our Services',
    links: [
      'Free Shipping',
      'Free Returnes',
      'Our Franchising',
      'Terms and conditions',
      'Privacy Policy',
    ],
  },
  {
    heading: 'Information',
    links: [
      'Payment methods',
      'Times and shipping costs',
      'Product Returns',
      'Shipping methods',
      'Conformity of the products',
    ],
  },
]

export const socialLinks: string[] = [
  'instagram',
  'pinterest',
  'facebook',
  'twitter',
  'youtube',
  'tumblr',
]
