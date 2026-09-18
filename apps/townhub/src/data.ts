import { BedDouble, Compass, MapPin, Search, ShoppingBag, Utensils } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const brandName = 'Town Hub'

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Categories', href: '#categories' },
  { label: 'Listing', href: '#listing' },
  { label: 'Page', href: '#page' },
  { label: 'Contact', href: '#contact' },
]

export const heroScriptText = 'Explore the city'
export const heroHeading = 'Discover Great Places'
export const searchPlaceholder = 'What are you looking for?'

export const searchCategories = [
  'All Categories',
  'Restaurants',
  'Hotels',
  'Shopping',
  'Attractions',
  'Health & Beauty',
]

export interface Location {
  name: string
  image: string
}

export const popularLocations: Location[] = [
  { name: 'Tokyo', image: 'https://picsum.photos/seed/townhub-tokyo/600/400' },
  { name: 'Paris', image: 'https://picsum.photos/seed/townhub-paris/600/400' },
  { name: 'Rome', image: 'https://picsum.photos/seed/townhub-rome/600/400' },
]

export const howItWorksSteps = [
  {
    number: '01',
    title: 'Search Location',
    description: 'Enter your city or neighborhood to find nearby listings and attractions.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Select Place',
    description: 'Browse through curated listings and pick the perfect spot for your needs.',
    icon: MapPin,
  },
  {
    number: '03',
    title: 'Explore & Enjoy',
    description: 'Visit the place, enjoy your experience, and share it with the community.',
    icon: Compass,
  },
]

export interface Category {
  name: string
  count: number
  icon: LucideIcon
}

export const categories: Category[] = [
  { name: 'Restaurants', count: 245, icon: Utensils },
  { name: 'Hotels', count: 182, icon: BedDouble },
  { name: 'Shopping', count: 318, icon: ShoppingBag },
  { name: 'Attractions', count: 127, icon: Compass },
]

export interface Testimonial {
  quote: string
  name: string
  title: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Town Hub has been an incredible resource for discovering hidden gems in my city. The listings are comprehensive and always up to date.',
    name: 'Sarah Johnson',
    title: 'Food Blogger',
    avatar: 'https://picsum.photos/seed/townhub-sarah/80/80',
  },
  {
    quote:
      'As a traveler, this directory helped me find authentic local spots instead of tourist traps. Highly recommended!',
    name: 'Mike Chen',
    title: 'Travel Writer',
    avatar: 'https://picsum.photos/seed/townhub-mike/80/80',
  },
  {
    quote:
      'The quality of listings and the ease of use make Town Hub my go-to directory whenever I explore a new area.',
    name: 'Emma Davis',
    title: 'Local Explorer',
    avatar: 'https://picsum.photos/seed/townhub-emma/80/80',
  },
]

export const subscribeHeading = 'Subscribe For Newsletter'
export const subscribeText =
  'Get the latest listings, events, and city guides delivered straight to your inbox every week.'

export interface BlogPost {
  title: string
  category: string
  date: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Top 10 Cafés You Must Visit This Summer',
    category: 'Food & Drinks',
    date: 'Sep 12, 2026',
    image: 'https://picsum.photos/seed/townhub-cafe/600/400',
  },
  {
    title: 'A Guide to the Best Nightlife in Town',
    category: 'Entertainment',
    date: 'Sep 08, 2026',
    image: 'https://picsum.photos/seed/townhub-night/600/400',
  },
  {
    title: 'Hidden Parks and Green Spaces to Explore',
    category: 'Outdoors',
    date: 'Sep 03, 2026',
    image: 'https://picsum.photos/seed/townhub-park/600/400',
  },
]

export const footerAbout =
  'Town Hub is your go-to city directory for finding the best places to eat, shop, stay, and explore.'

export const footerColumns = [
  {
    title: 'Quick Links',
    links: ['Home', 'About', 'Listing', 'Blog', 'Contact'],
  },
  {
    title: 'Categories',
    links: ['Restaurants', 'Hotels', 'Shopping', 'Attractions', 'Health'],
  },
  {
    title: 'Download App',
    links: ['iOS App', 'Android App', 'Mobile Web'],
  },
]

export const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
]

export const contactAddress = '123 Main St, San Francisco, CA 94102'
export const contactPhone = '+1 (415) 555-0123'
export const contactEmail = 'hello@townhub.com'

export const dockHref = 'https://www.componentdock.com/'
