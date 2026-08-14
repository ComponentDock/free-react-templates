/** Grocerly — fresh grocery storefront content model.
 *  Design-token notes: brand green #7fad39, ink #1c1c1c, muted #6f6f6f,
 *  top bar #f5f5f5, footer #F3F6FA, borders #ebebeb; Cairo typeface.
 *  Images are seeded picsum placeholders (screened for food subjects). */

export const topBar = {
  email: 'hello@grocerly.com',
  shipping: 'Free Shipping for all Order of $99',
  languages: ['English', 'Spanish'],
} as const

export const socials = ['facebook', 'twitter', 'pinterest', 'instagram'] as const

export type SocialName = (typeof socials)[number]

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  pinterest: 'Pinterest',
  instagram: 'Instagram',
}

export const cart = {
  wishlist: 1,
  bag: 3,
  itemTotal: 'item: $150.00',
} as const

export const navLinks = [
  { label: 'Home', href: '#home', active: true, children: [] as readonly string[] },
  { label: 'Shop', href: '#shop', active: false, children: [] as readonly string[] },
  {
    label: 'Pages',
    href: '#pages',
    active: false,
    children: ['Shop Details', 'Shoping Cart', 'Check Out', 'Blog Details'] as readonly string[],
  },
  { label: 'Blog', href: '#blog', active: false, children: [] as readonly string[] },
  { label: 'Contact', href: '#contact', active: false, children: [] as readonly string[] },
] as const

/** Departments in the green "All departments" dropdown. */
export const departments = [
  'Fresh Meat',
  'Vegetables',
  'Fruit & Nut Gifts',
  'Fresh Berries',
  'Ocean Foods',
  'Butter & Eggs',
  'Fastfood',
  'Fresh Onion',
  'Papayaya & Crisps',
  'Oatmeal',
  'Fresh Bananas',
] as const

export const heroBanner = {
  eyebrow: 'FRUIT FRESH',
  headline: 'Vegetable',
  headlineAccent: '100% Organic',
  support: 'Free Pickup and Delivery Available',
  cta: 'SHOP NOW',
  image: 'https://picsum.photos/id/292/1600/431',
} as const

export interface Category {
  label: string
  image: string
}

export const categories: readonly Category[] = [
  { label: 'Fresh Fruit', image: 'https://picsum.photos/id/1080/400/270' },
  { label: 'Dried Fruit', image: 'https://picsum.photos/id/312/400/270' },
  { label: 'Vegetables', image: 'https://picsum.photos/id/429/400/270' },
  { label: 'drink fruits', image: 'https://picsum.photos/id/431/400/270' },
  { label: 'drink fruits', image: 'https://picsum.photos/id/30/400/270' },
]

type ProductCategory = 'Oranges' | 'Fresh Meat' | 'Vegetables' | 'Fastfood'

export const productTabs = ['All', 'Oranges', 'Fresh Meat', 'Vegetables', 'Fastfood'] as const

export interface Product {
  name: string
  price: string
  category: ProductCategory
  image: string
}

export const featuredProducts: readonly Product[] = [
  {
    name: 'Valencia Oranges',
    price: '$30.00',
    category: 'Oranges',
    image: 'https://picsum.photos/id/1080/400/270',
  },
  {
    name: 'Navel Oranges',
    price: '$30.00',
    category: 'Oranges',
    image: 'https://picsum.photos/id/429/400/270',
  },
  {
    name: 'Grass-Fed Beef',
    price: '$30.00',
    category: 'Fresh Meat',
    image: 'https://picsum.photos/id/490/400/270',
  },
  {
    name: 'Free-Range Chicken',
    price: '$30.00',
    category: 'Fresh Meat',
    image: 'https://picsum.photos/id/42/400/270',
  },
  {
    name: 'Organic Tomatoes',
    price: '$30.00',
    category: 'Vegetables',
    image: 'https://picsum.photos/id/292/400/270',
  },
  {
    name: 'Baby Spinach',
    price: '$30.00',
    category: 'Vegetables',
    image: 'https://picsum.photos/id/425/400/270',
  },
  {
    name: 'Crispy Fries',
    price: '$30.00',
    category: 'Fastfood',
    image: 'https://picsum.photos/id/30/400/270',
  },
  {
    name: 'Veggie Burger',
    price: '$30.00',
    category: 'Fastfood',
    image: 'https://picsum.photos/id/312/400/270',
  },
]

export const banners = {
  first: 'https://picsum.photos/id/292/600/400',
  second: 'https://picsum.photos/id/1080/600/400',
} as const

export interface LatestColumn {
  header: string
  items: readonly { name: string; price: string; image: string }[]
}

export const latestColumns: readonly LatestColumn[] = [
  {
    header: 'Latest Products',
    items: [
      {
        name: 'Organic Strawberries',
        price: '$30.00',
        image: 'https://picsum.photos/id/1080/100/100',
      },
      { name: 'Rainbow Carrots', price: '$18.00', image: 'https://picsum.photos/id/292/100/100' },
      { name: 'Kale Bunches', price: '$12.00', image: 'https://picsum.photos/id/429/100/100' },
      {
        name: 'Heirloom Tomatoes',
        price: '$24.00',
        image: 'https://picsum.photos/id/1080/100/100',
      },
      { name: 'Zucchini Rack', price: '$15.00', image: 'https://picsum.photos/id/292/100/100' },
      { name: 'Fresh Herbs Box', price: '$9.00', image: 'https://picsum.photos/id/429/100/100' },
    ],
  },
  {
    header: 'Top Rated Products',
    items: [
      { name: 'Wildflower Honey', price: '$28.00', image: 'https://picsum.photos/id/312/100/100' },
      { name: 'Roasted Coffee', price: '$32.00', image: 'https://picsum.photos/id/425/100/100' },
      { name: 'Creamy Yogurt', price: '$8.00', image: 'https://picsum.photos/id/431/100/100' },
      { name: 'Artisan Cheese', price: '$26.00', image: 'https://picsum.photos/id/312/100/100' },
      { name: 'Stone-Ground Oats', price: '$11.00', image: 'https://picsum.photos/id/425/100/100' },
      { name: 'Cold-Pressed Oil', price: '$21.00', image: 'https://picsum.photos/id/431/100/100' },
    ],
  },
  {
    header: 'Review Products',
    items: [
      { name: 'Sourdough Loaf', price: '$14.00', image: 'https://picsum.photos/id/42/100/100' },
      { name: 'Espresso Blend', price: '$35.00', image: 'https://picsum.photos/id/30/100/100' },
      { name: 'Citrus Juice', price: '$10.00', image: 'https://picsum.photos/id/429/100/100' },
      { name: 'Granola Jar', price: '$16.00', image: 'https://picsum.photos/id/42/100/100' },
      { name: 'Matcha Powder', price: '$27.00', image: 'https://picsum.photos/id/30/100/100' },
      { name: 'Berry Compote', price: '$19.00', image: 'https://picsum.photos/id/429/100/100' },
    ],
  },
]

export interface BlogPost {
  title: string
  date: string
  comments: string
  excerpt: string
  image: string
}

export const blogPosts: readonly BlogPost[] = [
  {
    title: 'Cooking tips make cooking simple',
    date: 'May 4,2019',
    comments: '5',
    excerpt:
      'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus.',
    image: 'https://picsum.photos/id/42/400/270',
  },
  {
    title: '6 ways to prepare breakfast for 30',
    date: 'May 4,2019',
    comments: '5',
    excerpt:
      'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.',
    image: 'https://picsum.photos/id/431/400/270',
  },
  {
    title: 'Visit the farm in the French Alps',
    date: 'May 4,2019',
    comments: '5',
    excerpt:
      'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed.',
    image: 'https://picsum.photos/id/490/400/270',
  },
]

export const footerAbout = {
  address: 'Address: 60-49 Road 11378 New York',
  phone: 'Phone: +65 11.188.888',
  email: 'hello@grocerly.com',
} as const

export const usefulLinks = [
  [
    'About Us',
    'About Our Shop',
    'Secure Shopping',
    'Delivery infomation',
    'Privacy Policy',
    'Our Sitemap',
  ],
  ['Who We Are', 'Our Services', 'Projects', 'Contact', 'Innovation', 'Testimonials'],
] as const

export const newsletter = {
  title: 'Join Our Newsletter Now',
  text: 'Get E-mail updates about our latest shop and special offers.',
  placeholder: 'Enter your mail',
  cta: 'Subscribe',
} as const

export const componentDockUrl = 'https://www.componentdock.com/'
