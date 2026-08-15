export interface NavLink {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Categories', href: '#latest' },
  { label: 'About', href: '#featured' },
  {
    label: 'Pages',
    href: '#latest',
    children: [
      { label: 'Login', href: '#latest' },
      { label: 'Cart', href: '#latest' },
      { label: 'Checkout', href: '#latest' },
      { label: 'Book Details', href: '#latest' },
      { label: 'Blog Details', href: '#latest' },
      { label: 'Element', href: '#latest' },
    ],
  },
  { label: 'Blog', href: '#latest' },
  { label: 'Contact', href: '#contact' },
]

export const header = {
  brand: 'Spine',
  searchPlaceholder: 'Search book by author or publisher',
  searchLabel: 'Search',
  faqLabel: 'FAQ',
  trackOrderLabel: 'Track Order',
  cartLabel: 'Cart',
  cartCount: '0',
  signInLabel: 'Sign in',
}

export interface HeroSlide {
  tag: string
  headlineFirst: string
  headlineSecond: string
  buttonLabel: string
  image: string
}

export const heroSlides: HeroSlide[] = [
  {
    tag: 'Science Fiction',
    headlineFirst: 'The History',
    headlineSecond: ' of Phipino',
    buttonLabel: 'Browse Store',
    image: 'https://picsum.photos/seed/spine-hero-1/1600/900',
  },
  {
    tag: 'Science Fiction',
    headlineFirst: 'The History',
    headlineSecond: ' of Phipino',
    buttonLabel: 'Browse Store',
    image: 'https://picsum.photos/seed/spine-hero-2b/1600/900',
  },
  {
    tag: 'Science Fiction',
    headlineFirst: 'The History',
    headlineSecond: ' of Phipino',
    buttonLabel: 'Browse Store',
    image: 'https://picsum.photos/seed/spine-hero-3/1600/900',
  },
]

export interface Book {
  title: string
  author: string
  price: string
  reviews: string
  rating: number
  cover: string
}

export const bestSellingTitle = 'Best Selling Books Ever'

export const bestSellingBooks: Book[] = [
  {
    title: 'Moon Dance',
    author: 'J. R Rain',
    price: '$50',
    reviews: '(120 Review)',
    rating: 4.5,
    cover: 'https://picsum.photos/seed/spine-book-1/300/450',
  },
  {
    title: 'Moon Dance',
    author: 'J. R Rain',
    price: '$50',
    reviews: '(120 Review)',
    rating: 4.5,
    cover: 'https://picsum.photos/seed/spine-book-2/300/450',
  },
  {
    title: 'Moon Dance',
    author: 'J. R Rain',
    price: '$50',
    reviews: '(120 Review)',
    rating: 4.5,
    cover: 'https://picsum.photos/seed/spine-book-3/300/450',
  },
  {
    title: 'Moon Dance',
    author: 'J. R Rain',
    price: '$50',
    reviews: '(120 Review)',
    rating: 4.5,
    cover: 'https://picsum.photos/seed/spine-book-4/300/450',
  },
  {
    title: 'Moon Dance',
    author: 'J. R Rain',
    price: '$50',
    reviews: '(120 Review)',
    rating: 4.5,
    cover: 'https://picsum.photos/seed/spine-book-5/300/450',
  },
  {
    title: 'Moon Dance',
    author: 'J. R Rain',
    price: '$50',
    reviews: '(120 Review)',
    rating: 4.5,
    cover: 'https://picsum.photos/seed/spine-book-6/300/450',
  },
  {
    title: 'Moon Dance',
    author: 'J. R Rain',
    price: '$50',
    reviews: '(120 Review)',
    rating: 4.5,
    cover: 'https://picsum.photos/seed/spine-book-7/300/450',
  },
  {
    title: 'Moon Dance',
    author: 'J. R Rain',
    price: '$50',
    reviews: '(120 Review)',
    rating: 4.5,
    cover: 'https://picsum.photos/seed/spine-book-8/300/450',
  },
]

export const featured = {
  title: 'Featured This Week',
  viewAllLabel: 'View All',
  publisher: 'Spine',
  bookTitle: 'The Rage of Dragons',
  author: 'By Evan Winter',
  price: '$50.00',
  reviews: '(120 Review)',
  rating: 4.5,
  viewDetailsLabel: 'View Details',
  cover: 'https://picsum.photos/seed/spine-featured-1/600/450',
}

export const latestTitle = 'Latest Published items'
export const latestTabs = ['All', 'Horror', 'Thriller', 'Science Fiction', 'History'] as const
export const browseMoreLabel = 'Browse More'

export const latestBooks: Book[] = [
  {
    title: 'Moon Dance',
    author: 'J. R Rain',
    price: '$50',
    reviews: '(120 Review)',
    rating: 4.5,
    cover: 'https://picsum.photos/seed/spine-latest-1/300/450',
  },
  {
    title: 'Moon Dance',
    author: 'J. R Rain',
    price: '$50',
    reviews: '(120 Review)',
    rating: 4.5,
    cover: 'https://picsum.photos/seed/spine-latest-2/300/450',
  },
  {
    title: 'Moon Dance',
    author: 'J. R Rain',
    price: '$50',
    reviews: '(120 Review)',
    rating: 4.5,
    cover: 'https://picsum.photos/seed/spine-latest-3/300/450',
  },
  {
    title: 'Moon Dance',
    author: 'J. R Rain',
    price: '$50',
    reviews: '(120 Review)',
    rating: 4.5,
    cover: 'https://picsum.photos/seed/spine-latest-4/300/450',
  },
  {
    title: 'Moon Dance',
    author: 'J. R Rain',
    price: '$50',
    reviews: '(120 Review)',
    rating: 4.5,
    cover: 'https://picsum.photos/seed/spine-latest-5/300/450',
  },
]

export interface CtaBanner {
  headlineFirst: string
  headlineSecond?: string
  buttonLabel: string
  image: string
}

export const ctaBanners: CtaBanner[] = [
  {
    headlineFirst: 'The History',
    headlineSecond: ' of Phipino',
    buttonLabel: 'View Details',
    image: 'https://picsum.photos/seed/spine-banner-1/600/188',
  },
  {
    headlineFirst: 'Wilma Mumduya',
    buttonLabel: 'View Details',
    image: 'https://picsum.photos/seed/spine-banner-2/600/188',
  },
]

export const subscribe = {
  heading: 'Join Newsletter',
  copy: 'Get the latest books, deals and reading lists delivered straight to your inbox.',
  placeholder: 'Enter your email',
  buttonLabel: 'Subscribe',
  image: 'https://picsum.photos/seed/spine-subscribe-2/1600/500',
}

interface FooterColumn {
  heading?: string
  links: string[]
}

export const footer = {
  blurb: "Get the breathing space now, and we'll extend your term at the other end year for go.",
  columns: [
    {
      heading: 'Book Category',
      links: ['History', 'Horror - Thriller', 'Love Stories', 'Science Fiction', 'Business'],
    },
    {
      links: ['Biography', 'Astrology', 'Digital Marketing', 'Software Development', 'Ecommerce'],
    },
    {
      heading: 'Site Map',
      links: ['Home', 'About Us', 'FAQs', 'Blog', 'Contact'],
    },
  ] as FooterColumn[],
  socials: ['facebook', 'instagram', 'linkedin', 'youtube'] as const,
  componentDockHref: 'https://www.componentdock.com/',
  componentDockLabel: 'More templates at Component Dock',
}

export const scrollLeftLabel = 'Previous slide'
export const scrollRightLabel = 'Next slide'
