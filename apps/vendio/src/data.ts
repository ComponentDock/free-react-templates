export interface NavItem {
  label: string
  href: string
  active?: boolean
}

export interface HeroSlide {
  image: string
  imageAlt: string
  title: string
  subtitle: string
}

export interface Product {
  name: string
  price: string
  badge?: 'NEW' | 'SALE' | 'HOT'
  image: string
  imageAlt: string
}

export interface IconBox {
  icon: 'truck' | 'rotate' | 'headphones'
  title: string
  text: string
}

export interface SocialLink {
  label: string
  href: string
  path: string
}

export const siteName = 'Vendio'

export const skipLabel = 'Skip to content'
export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const cartLabel = 'Shopping cart'
export const searchLabel = 'Open search'
export const searchCloseLabel = 'Close search'
export const searchInputLabel = 'Search products'
export const searchPlaceholder = 'Search'

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home-section', active: true },
  { label: 'Categories', href: '#products-section' },
  { label: 'Accessories', href: '#products-section' },
  { label: 'Offers', href: '#products-section' },
  { label: 'Contact', href: '#newsletter-section' },
]

export const cartCount = 0

export const heroLabel = 'Featured products'
export const heroPrevLabel = 'Previous slide'
export const heroNextLabel = 'Next slide'
export const heroDotLabel = (index: number) => `Go to slide ${index}`
export const heroCtaLabel = 'Shop Now'
const heroSlideAlt = (index: number) => `Featured product slide ${index}`

export const heroSlides: HeroSlide[] = [
  {
    image: 'https://picsum.photos/seed/vendio-hero-1/1920/1080',
    imageAlt: heroSlideAlt(1),
    title: 'A new Online Shop experience.',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum consequat mi, ac commodo est volutpat vitae.',
  },
  {
    image: 'https://picsum.photos/seed/vendio-hero-2/1920/1080',
    imageAlt: heroSlideAlt(2),
    title: 'A new Online Shop experience.',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum consequat mi, ac commodo est volutpat vitae.',
  },
  {
    image: 'https://picsum.photos/seed/vendio-hero-3/1920/1080',
    imageAlt: heroSlideAlt(3),
    title: 'A new Online Shop experience.',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum consequat mi, ac commodo est volutpat vitae.',
  },
]

export const adsLabel = 'Promotions'
export const adsSmallBadge = '20'
export const adsSmallBadgeUnit = '%'
export const adsSmallBadgeLabel = 'Discount'
export const adsSmallTitle = 'Smart Phones'
export const adsSmallImage = 'https://picsum.photos/seed/vendio-smart-phones/900/600'
export const adsSmallImageAlt = 'Smart phones promotion'
export const adsLargeTitle = 'Professional Cameras'
export const adsLargeText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sagittis velit, vitae tincidunt eros. Aenean porttitor, purus a porta malesuada, nunc nibh volutpat nulla.'
export const adsLargeImage = 'https://picsum.photos/seed/vendio-cameras/1400/600'
export const adsLargeImageAlt = 'Professional cameras promotion'
export const adsLinkLabel = 'See More'

export const productsLabel = 'Our products'
export const products: Product[] = [
  {
    name: 'Aurora Smartphone',
    price: '$670',
    badge: 'NEW',
    image: 'https://picsum.photos/seed/vendio-phone-1/600/600',
    imageAlt: 'Aurora Smartphone',
  },
  {
    name: 'Nebula Headphones',
    price: '$670',
    badge: 'SALE',
    image: 'https://picsum.photos/seed/vendio-headphones-1/600/600',
    imageAlt: 'Nebula Headphones',
  },
  {
    name: 'Pulse Smartwatch',
    price: '$670',
    image: 'https://picsum.photos/seed/vendio-watch-1/600/600',
    imageAlt: 'Pulse Smartwatch',
  },
  {
    name: 'Drift Tablet',
    price: '$670',
    image: 'https://picsum.photos/seed/vendio-tablet-1/600/600',
    imageAlt: 'Drift Tablet',
  },
  {
    name: 'Bolt Speaker',
    price: '$670',
    image: 'https://picsum.photos/seed/vendio-speaker-1/600/600',
    imageAlt: 'Bolt Speaker',
  },
  {
    name: 'Orbit Camera',
    price: '$670',
    badge: 'HOT',
    image: 'https://picsum.photos/seed/vendio-camera-1/600/600',
    imageAlt: 'Orbit Camera',
  },
  {
    name: 'Halo Laptop',
    price: '$670',
    image: 'https://picsum.photos/seed/vendio-laptop-1/600/600',
    imageAlt: 'Halo Laptop',
  },
  {
    name: 'Zenith Earbuds',
    price: '$670',
    badge: 'SALE',
    image: 'https://picsum.photos/seed/vendio-earbuds-1/600/600',
    imageAlt: 'Zenith Earbuds',
  },
]

export const xlAdTitle = 'Amazing Devices'
export const xlAdText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sagittis velit, vitae tincidunt eros. Aenean porttitor, purus a porta malesuada, nunc nibh volutpat nulla.'
export const xlAdImage = 'https://picsum.photos/seed/vendio-amazing/1920/700'
export const xlAdImageAlt = 'Amazing devices promotion'

export const iconBoxesLabel = 'Why shop with us'
export const iconBoxes: IconBox[] = [
  {
    icon: 'truck',
    title: 'Free Shipping Worldwide',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: 'rotate',
    title: 'Free Returns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: 'headphones',
    title: '24h Fast Support',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
]

export const newsletterTitle = 'Subscribe to our newsletter'
export const newsletterText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sagittis velit.'
export const newsletterEmailLabel = 'Email address'
export const newsletterEmailPlaceholder = 'your@email.com'
export const newsletterSubmitLabel = 'Subscribe'
export const newsletterError = 'Please enter a valid email address.'
export const newsletterSuccess = 'Thanks for subscribing!'
export const newsletterLabel = 'Newsletter'

export const footerBrand = 'Vendio.'
export const footerCopyrightPrefix = 'Copyright ©'
export const footerCopyrightSuffix = 'All rights reserved | Made with ♥ by'
export const componentDockName = 'Component Dock'
export const componentDockUrl = 'https://www.componentdock.com/'
export const footerSocialLabel = 'Follow us'

export const socialLinks: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  },
  {
    label: 'Pinterest',
    href: 'https://pinterest.com',
    path: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z',
  },
]
