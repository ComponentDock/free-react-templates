export const siteName = 'Chrono'
export const brandStart = 'Chron'
export const brandEnd = 'o'
export const skipLabel = 'Skip to content'

export interface NavItem {
  label: string
  href: string
  badge?: string
}
export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'Shop', href: '#popular-section' },
  { label: 'About', href: '#watch-section' },
  { label: 'Latest', href: '#arrivals-section', badge: 'HOT' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Pages', href: '#gallery-section' },
  { label: 'Contact', href: '#footer-section' },
]
export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const searchLabel = 'Search'
export const userLabel = 'Account'
export const cartLabel = 'Shopping cart'

export const heroPreviousLabel = 'Previous slide'
export const heroNextLabel = 'Next slide'
export interface HeroSlide {
  title: string
  paragraph: string
  image: string
}
export const heroSlides: readonly HeroSlide[] = [
  {
    title: 'Select Your New Perfect Style',
    paragraph:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
    image: 'https://picsum.photos/id/250/1000/1000',
  },
  {
    title: 'Select Your New Perfect Style',
    paragraph:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
    image: 'https://picsum.photos/id/460/1000/1000',
  },
] as const
export const heroButtonLabel = 'Shop Now'

export const arrivalsTitle = 'New Arrivals'
export const arrivalsProducts = [
  {
    name: 'Heritage Chronograph',
    price: '$45,743',
    image: 'https://picsum.photos/id/160/700/800',
  },
  {
    name: 'Minimal Steel Automatic',
    price: '$32,190',
    image: 'https://picsum.photos/id/306/700/800',
  },
  {
    name: 'Vintage Leather Classic',
    price: '$28,450',
    image: 'https://picsum.photos/id/60/700/800',
  },
] as const

export const galleryImages = [
  {
    image: 'https://picsum.photos/id/570/900/690',
    label: 'Mechanical movement close-up',
    big: true,
  },
  {
    image: 'https://picsum.photos/id/267/900/690',
    label: 'Luxury timepiece collection',
    big: true,
  },
  {
    image: 'https://picsum.photos/id/349/700/330',
    label: 'Crafted dial details',
    big: false,
  },
  {
    image: 'https://picsum.photos/id/620/700/330',
    label: 'Boutique showcase',
    big: false,
  },
] as const

export const popularTitle = 'Popular Items'
export const popularIntro =
  'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'
export const sortOptions = [
  'Default sorting',
  'Popularity',
  'Price: low to high',
  'Price: high to low',
] as const
export const sortLabel = 'Sort products'
export const popularProducts = [
  {
    name: 'Thermo Ball Etip Gloves',
    price: '$45,743',
    image: 'https://picsum.photos/id/250/700/800',
  },
  {
    name: 'Minimal Chronograph',
    price: '$35,900',
    image: 'https://picsum.photos/id/160/700/800',
  },
  {
    name: 'Navy Diver Automatic',
    price: '$52,400',
    image: 'https://picsum.photos/id/306/700/800',
  },
  {
    name: 'Rose Gold Dress Watch',
    price: '$61,250',
    image: 'https://picsum.photos/id/460/700/800',
  },
  {
    name: 'Sport Steel Quartz',
    price: '$24,680',
    image: 'https://picsum.photos/id/60/700/800',
  },
  {
    name: 'Heritage Leather Strap',
    price: '$38,120',
    image: 'https://picsum.photos/id/250/700/800',
  },
] as const
export const addToCartLabel = 'Add to cart'
export const favoriteLabel = 'Add to favorites'
export const viewMoreLabel = 'View More Products'

export const videoTitle = 'Next Video'
export const videoPlayLabel = 'Play video'
export const videoImage = 'https://picsum.photos/id/349/1600/700'

export const watchRows = [
  {
    title: 'Watch of Choice',
    paragraph:
      'Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://picsum.photos/id/250/700/800',
    button: 'Show Watches',
  },
  {
    title: 'Watch of Choice',
    paragraph:
      'Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://picsum.photos/id/460/700/800',
    button: 'Show Watches',
  },
] as const

export const methods = [
  {
    title: 'Free Shipping Method',
    paragraph: 'aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.',
  },
  {
    title: 'Secure Payment System',
    paragraph: 'aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.',
  },
  {
    title: 'Return & Exchange Policy',
    paragraph: 'aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.',
  },
] as const

export const footerAbout =
  'Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation amco laboris nisi ut aliquip ex ea.'
export const footerColumns = [
  {
    title: 'Quick Links',
    links: ['About', 'Offers & Discounts', 'Get Coupon', 'Contact Us'],
  },
  {
    title: 'New Products',
    links: ['Woman Cloth', 'Fashion Accessories', 'Man Accessories', 'Rubber made Toys'],
  },
  {
    title: 'Support',
    links: [
      'Frequently Asked Questions',
      'Terms & Conditions',
      'Privacy Policy',
      'Report a Payment Issue',
    ],
  },
] as const
export const copyrightPrefix =
  'Copyright © 2026 All rights reserved | This template is made with ♥ by'
export const componentDockUrl = 'https://www.componentdock.com/'
export const componentDockName = 'Component Dock'
export const socialLabel = 'Social media'
