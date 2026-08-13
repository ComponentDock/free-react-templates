/* Sneakly — eCommerce shoe-store landing data.
   Copy kinds mirror the reference preview (minishop landing): topbar
   contacts, nav labels + catalog dropdown, hero slider slides, service
   benefits, product cards (name/category/price/sale/ribbon), choose
   category cards, deal-of-the-month product + countdown, testimonials,
   Instagram gallery tiles, footer widgets. Placeholder photos are seeded
   picsum URLs (deterministic per template). */

export const brand = {
  name: 'Sneakly',
}

export const topbarItems = [
  { id: 'phone', text: '+ 1235 2355 98' },
  { id: 'email', text: 'youremail@email.com' },
] as const

export const topbarPromo = '3-5 Business days delivery & Free Returns'

export const navLinks = ['Home', 'About', 'Blog', 'Contact'] as const

export const catalogItems = ['Shop', 'Single Product', 'Cart', 'Checkout'] as const

export interface Slide {
  subheading: string
  headline: string
  paragraph: string
  image: string
}

export const slides: Slide[] = [
  {
    subheading: '#New Arrival',
    headline: 'Shoes Collection 2019',
    paragraph:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    image: 'https://picsum.photos/seed/sneakly-hero-1/900/1200',
  },
  {
    subheading: '#New Arrival',
    headline: 'New Shoes Winter Collection',
    paragraph:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    image: 'https://picsum.photos/seed/sneakly-hero-2/900/1200',
  },
]

export interface Service {
  title: string
  description: string
  icon: 'bag' | 'support' | 'payment'
}

export const services: Service[] = [
  {
    title: 'Free Shipping',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: 'bag',
  },
  {
    title: 'Support Customer',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: 'support',
  },
  {
    title: 'Secure Payments',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: 'payment',
  },
]

export interface Product {
  name: string
  category: string
  price: string
  oldPrice?: string
  ribbon?: string
  image: string
}

export const products: Product[] = [
  {
    name: 'Nike Free RN 2019 iD',
    category: 'Lifestyle',
    price: '$120.00',
    image: 'https://picsum.photos/seed/sneakly-prod-1/600/800',
  },
  {
    name: 'Nike Air Max 270',
    category: 'Lifestyle',
    price: '$80.00',
    oldPrice: '$120.00',
    ribbon: '50% Off',
    image: 'https://picsum.photos/seed/sneakly-prod-2/600/800',
  },
  {
    name: 'Nike Zoom Pegasus 36',
    category: 'Lifestyle',
    price: '$120.00',
    image: 'https://picsum.photos/seed/sneakly-prod-3/600/800',
  },
  {
    name: 'Nike React Element 55',
    category: 'Lifestyle',
    price: '$95.00',
    oldPrice: '$140.00',
    ribbon: '50% Off',
    image: 'https://picsum.photos/seed/sneakly-prod-4/600/800',
  },
  {
    name: 'Nike Blazer Mid 77',
    category: 'Lifestyle',
    price: '$120.00',
    image: 'https://picsum.photos/seed/sneakly-prod-5/600/800',
  },
  {
    name: 'Nike Court Royale',
    category: 'Lifestyle',
    price: '$75.00',
    oldPrice: '$100.00',
    image: 'https://picsum.photos/seed/sneakly-prod-6/600/800',
  },
  {
    name: 'Nike Daybreak',
    category: 'Lifestyle',
    price: '$120.00',
    image: 'https://picsum.photos/seed/sneakly-prod-7/600/800',
  },
  {
    name: 'Nike Tailwind 79',
    category: 'Lifestyle',
    price: '$120.00',
    image: 'https://picsum.photos/seed/sneakly-prod-8/600/800',
  },
]

export interface ChooseCard {
  subheading: string
  title: string
  paragraph: string
  image?: string
  /** Dark-image cards use white text; the light card uses black text. */
  dark: boolean
}

export const chooseCards: ChooseCard[] = [
  {
    subheading: "Men's Shoes",
    title: "Men's Collection",
    paragraph:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/sneakly-choose-1/800/1000',
    dark: true,
  },
  {
    subheading: "Women's Shoes",
    title: "Women's Collection",
    paragraph:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/sneakly-choose-2/1200/600',
    dark: true,
  },
  {
    subheading: 'Summer Sale',
    title: 'Extra 50% Off',
    paragraph:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    dark: false,
  },
  {
    subheading: 'Shoes',
    title: 'Best Sellers',
    paragraph:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/sneakly-choose-3/600/600',
    dark: true,
  },
]

export const deal = {
  subheading: 'Deal of the month',
  heading: 'Deal of the month',
  name: 'Nike Free RN 2019 iD',
  price: '$80.00',
  oldPrice: '$120.00',
  image: 'https://picsum.photos/seed/sneakly-deal/800/800',
  thumbnails: [
    'https://picsum.photos/seed/sneakly-thumb-1/200/200',
    'https://picsum.photos/seed/sneakly-thumb-2/200/200',
    'https://picsum.photos/seed/sneakly-thumb-3/200/200',
  ],
  /** Countdown target: a rolling 30 days from first paint. */
  targetDays: 30,
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Garreth Smith',
    role: 'Marketing Manager',
    image: 'https://picsum.photos/seed/sneakly-face-1/200/200',
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Garreth Smith',
    role: 'Interface Designer',
    image: 'https://picsum.photos/seed/sneakly-face-2/200/200',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'Garreth Smith',
    role: 'UI Designer',
    image: 'https://picsum.photos/seed/sneakly-face-3/200/200',
  },
  {
    quote:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Garreth Smith',
    role: 'Web Developer',
    image: 'https://picsum.photos/seed/sneakly-face-4/200/200',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    name: 'Garreth Smith',
    role: 'System Analyst',
    image: 'https://picsum.photos/seed/sneakly-face-5/200/200',
  },
]

export const galleryImages = [
  'https://picsum.photos/seed/sneakly-gallery-1/400/270',
  'https://picsum.photos/seed/sneakly-gallery-2/400/270',
  'https://picsum.photos/seed/sneakly-gallery-3/400/270',
  'https://picsum.photos/seed/sneakly-gallery-4/400/270',
  'https://picsum.photos/seed/sneakly-gallery-5/400/270',
  'https://picsum.photos/seed/sneakly-gallery-6/400/270',
]

export const menuLinks = ['Shop', 'About', 'Journal', 'Contact Us'] as const

export const helpLinks = [
  'Shipping Information',
  'Returns & Exchange',
  'Terms & Conditions',
  'Privacy Policy',
  'FAQs',
  'Contact',
] as const

export const contactInfo = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
} as const
