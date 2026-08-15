export const siteName = 'Boutique'
export const skipLabel = 'Skip to content'

export const navItems = [
  { label: 'HOME', href: '#home-section' },
  { label: 'WOMAN', href: '#products-section' },
  { label: 'MAN', href: '#products-section' },
  { label: 'LOOKBOOK', href: '#featured-section' },
  { label: 'BLOG', href: '#blog-section' },
  { label: 'CONTACT', href: '#contact-section' },
] as const
export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const searchLabel = 'Search'
export const cartLabel = 'Shopping cart, 2 items'
export const cartCount = '2'

/* Subject-screened placeholder images (picsum, deterministic seeds):
   hero1 = woman overlooking golden-hour cityscape (negative space top 2/3),
   hero2 = person on beach (summer vibe); intro = shoes close-up, blue-wall
   flat-lay, table still-life, white-wall minimal, green fabric texture;
   featured = editorial man-in-truck portrait, city-night bokeh; grid =
   umbrella walker, hiker, waterside figure, starry silhouette, red-coat
   boat, beach walker, warm facade, aerial park; blog = dock, concrete
   minimal, cityscape. */
export const heroSlides = [
  {
    eyebrow: 'from $19.90',
    title: '2018 summer collection',
    image: 'https://picsum.photos/seed/boutique-hero7/1600/1000',
  },
  {
    eyebrow: 'from $19.90',
    title: '2018 summer collection',
    image: 'https://picsum.photos/seed/boutique5/1600/1000',
  },
] as const
export const heroButtonLabel = 'Shop NOW!'
export const heroPreviousLabel = 'Previous slide'
export const heroNextLabel = 'Next slide'
export const heroSlideLabel = (index: number) => `Go to slide ${index + 1}`

export const introTitle = 'Premium products'
export const introSubtitle = 'We recommend'
export const introProducts = [
  {
    name: 'Pink Sunglasses',
    price: '$319.50',
    badge: null,
    image: 'https://picsum.photos/seed/boutique11/640/800',
  },
  {
    name: 'Black Nighty',
    price: '$319.50',
    badge: null,
    image: 'https://picsum.photos/seed/boutique-blog8/640/800',
  },
  {
    name: 'Yellow Shoulder bag',
    price: '$319.50',
    badge: 'NEW',
    image: 'https://picsum.photos/seed/boutique-blog10/640/800',
  },
  {
    name: 'Yellow Sunglasses',
    price: '$319.50',
    badge: null,
    image: 'https://picsum.photos/seed/boutique-hero3/640/800',
  },
  {
    name: 'Black Shoulder bag',
    price: '$319.50',
    badge: null,
    image: 'https://picsum.photos/seed/boutique-hero4/640/800',
  },
] as const
export const addToCartLabel = 'ADD TO CART'

export const featuredItems = [
  {
    image: 'https://picsum.photos/seed/boutique-feat8/800/1000',
    button: 'SEE MORE',
    href: '#products-section',
  },
  {
    image: 'https://picsum.photos/seed/boutique-hero10/800/1000',
    button: 'SEE MORE',
    href: '#products-section',
  },
] as const

type ProductCategory = 'new' | 'best'
export interface Product {
  name: string
  price?: string
  rrp?: string
  badge?: 'NEW' | 'SALE'
  categories: ProductCategory[]
  image: string
}
export const productFilters = [
  { id: 'all', label: 'Recommended' },
  { id: 'new', label: 'New arrivals' },
  { id: 'best', label: 'Best sellers' },
] as const
export type ProductFilterId = (typeof productFilters)[number]['id']
export const products: Product[] = [
  {
    name: 'Long red Shirt',
    price: '$39.90',
    categories: ['best'],
    image: 'https://picsum.photos/seed/boutique-hero5/640/800',
  },
  {
    name: 'Hype grey shirt',
    price: '$19.50',
    badge: 'NEW',
    categories: ['new'],
    image: 'https://picsum.photos/seed/boutique2/640/800',
  },
  {
    name: 'long sleeve jacket',
    price: '$59.90',
    categories: ['best'],
    image: 'https://picsum.photos/seed/boutique20/640/800',
  },
  {
    name: 'Denim men shirt',
    rrp: 'RRP $64.40',
    badge: 'SALE',
    categories: ['new', 'best'],
    image: 'https://picsum.photos/seed/boutique17/640/800',
  },
  {
    name: 'Long red Shirt',
    price: '$39.90',
    categories: ['best'],
    image: 'https://picsum.photos/seed/boutique-blog9/640/800',
  },
  {
    name: 'Hype grey shirt',
    price: '$19.50',
    badge: 'NEW',
    categories: ['new'],
    image: 'https://picsum.photos/seed/boutique5/640/800',
  },
  {
    name: 'long sleeve jacket',
    price: '$59.90',
    categories: ['best'],
    image: 'https://picsum.photos/seed/boutique-hero1/640/800',
  },
  {
    name: 'Denim men shirt',
    rrp: 'RRP $64.40',
    categories: ['best'],
    image: 'https://picsum.photos/seed/boutique-blog6/640/800',
  },
]
export const quickViewLabel = 'quick view'
export const saveLabel = 'save'
export const seeMoreLabel = 'SEE MORE'

export const blogTitle = 'From the blog'
export const blogPosts = [
  {
    title: '10 tips to dress like a queen',
    meta: 'July 02, 2018 | By maria deloreen',
    excerpt:
      'Donec vitae purus nunc. Morbi malesuada nunc ac nisl vulputate, vitae pretium arcu viverra. Nunc in justo tincidunt, sodales nunc id, finibus nibh.',
    image: 'https://picsum.photos/seed/boutique-blog4/640/420',
  },
  {
    title: 'Fashion Outlet products',
    meta: 'July 02, 2018 | By Jessica Smith',
    excerpt:
      'Donec vitae purus nunc. Morbi malesuada nunc ac nisl vulputate, vitae pretium arcu viverra. Nunc in justo tincidunt, sodales nunc id, finibus nibh.',
    image: 'https://picsum.photos/seed/boutique4/640/420',
  },
  {
    title: 'the little black dress just for you',
    meta: 'July 02, 2018 | By maria deloreen',
    excerpt:
      'Donec vitae purus nunc. Morbi malesuada nunc ac nisl vulputate, vitae pretium arcu viverra. Nunc in justo tincidunt, sodales nunc id, finibus nibh.',
    image: 'https://picsum.photos/seed/boutique9/640/420',
  },
] as const
export const readMoreLabel = 'Read More'

export const footerAbout =
  'Donec vitae purus nunc. Morbi malesuada nunc ac nisl vulputate, vitae pretium arcu viverra. Nunc in justo tincidunt, sodales nunc id, finibus nibh.'
export const footerColumns = [
  {
    title: 'Useful Links',
    links: ['Partners', 'Bloggers', 'Support', 'Terms of Use', 'Press'],
  },
  {
    title: 'Sitemap',
    links: ['Partners', 'Bloggers', 'Support', 'Terms of Use', 'Press'],
  },
  {
    title: 'Shipping & returns',
    links: ['About Us', 'Track Orders', 'Returns', 'Jobs', 'Shipping', 'Blog'],
  },
  {
    title: 'Contact',
    links: [
      'Your Company Ltd',
      '1481 Creekside Lane Avila Beach, CA 93424',
      '+53 345 7953 32453',
      'office@youremail.com',
    ],
  },
] as const
export const componentDockUrl = 'https://www.componentdock.com/'
export const componentDockName = 'Component Dock'
