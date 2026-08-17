import {
  BedDouble,
  Building2,
  Clapperboard,
  Compass,
  Dumbbell,
  FerrisWheel,
  Gamepad2,
  GlassWater,
  HeartPulse,
  Map,
  MapPin,
  Search,
  ShoppingBag,
  Sparkles,
  Trophy,
  Utensils,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const brandName = 'Borough'
export const brandTagline = 'Directory and Listing'

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Listing', href: '#listing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const heroTitle = "Let's Explore Your Awesome City"
export const heroSubtitle = 'Find great places to stay, eat, shop, or visit from local experts.'

export const searchFieldPlaceholder = 'What are you looking for?'
export const searchLocationPlaceholder = 'Search Location'

export const searchOptions = [
  'All Categories',
  'Food & Drinks',
  'Hotel',
  'Shopping',
  'Beauty',
  'Fitness',
  'Bar & Club',
  'Games',
  'Places',
  'Circus',
  'Theater',
  'Sports',
  'Health',
]

export interface Category {
  name: string
  count: number
  icon: LucideIcon
  active?: boolean
}

export const categories: Category[] = [
  { name: 'Food & Drink', count: 103, icon: Utensils },
  { name: 'Hotels', count: 40, icon: BedDouble, active: true },
  { name: 'Shopping', count: 100, icon: ShoppingBag },
  { name: 'Beauty', count: 36, icon: Sparkles },
  { name: 'Fitness', count: 30, icon: Dumbbell },
  { name: 'Bar & Club', count: 12, icon: GlassWater },
  { name: 'Games', count: 103, icon: Gamepad2 },
  { name: 'Places', count: 40, icon: MapPin },
  { name: 'Circus', count: 100, icon: FerrisWheel },
  { name: 'Theater', count: 36, icon: Clapperboard },
  { name: 'Sports', count: 30, icon: Trophy },
  { name: 'Health', count: 12, icon: HeartPulse },
]

export interface Listing {
  title: string
  category: string
  icon: LucideIcon
  image: string
  address: string
  phone: string
  review: string
  reviewCount: number
}

const cover = (n: number): string => `https://picsum.photos/seed/borough-${n}/600/400`

export const popularListings: Listing[] = [
  {
    title: 'Japanese Restaurant',
    category: 'Food & Drinks',
    icon: Utensils,
    image: cover(5),
    address: 'Suite 721 New York NY 10016',
    phone: '+00 123 456 7890',
    review: '5.0/5',
    reviewCount: 100,
  },
  {
    title: 'Harbor Lights Hotel',
    category: 'Hotel',
    icon: BedDouble,
    image: cover(6),
    address: 'Suite 721 New York NY 10016',
    phone: '+00 123 456 7890',
    review: '5.0/5',
    reviewCount: 100,
  },
  {
    title: 'MS Center Mall of Asia',
    category: 'Shopping',
    icon: ShoppingBag,
    image: cover(7),
    address: 'Suite 721 New York NY 10016',
    phone: '+00 123 456 7890',
    review: '5.0/5',
    reviewCount: 100,
  },
  {
    title: 'Maxout Fitness Gym',
    category: 'Gym Fitness',
    icon: Dumbbell,
    image: cover(8),
    address: 'Suite 721 New York NY 10016',
    phone: '+00 123 456 7890',
    review: '5.0/5',
    reviewCount: 100,
  },
]

export const ourListings: Listing[] = [
  {
    title: 'Lumière Beauty Spa',
    category: 'Beauty',
    icon: Sparkles,
    image: cover(9),
    address: 'Suite 721 New York NY 10016',
    phone: '+00 123 456 7890',
    review: '5.0/5',
    reviewCount: 100,
  },
  {
    title: 'The Velvet Lounge',
    category: 'Bar & Club',
    icon: GlassWater,
    image: cover(10),
    address: 'Suite 721 New York NY 10016',
    phone: '+00 123 456 7890',
    review: '5.0/5',
    reviewCount: 100,
  },
  {
    title: 'Starlight Circus Tent',
    category: 'Circus',
    icon: FerrisWheel,
    image: cover(11),
    address: 'Suite 721 New York NY 10016',
    phone: '+00 123 456 7890',
    review: '5.0/5',
    reviewCount: 100,
  },
  {
    title: 'Grand Broadway Theater',
    category: 'Theater',
    icon: Clapperboard,
    image: cover(12),
    address: 'Suite 721 New York NY 10016',
    phone: '+00 123 456 7890',
    review: '5.0/5',
    reviewCount: 100,
  },
  {
    title: 'Royal Crown Theater',
    category: 'Theater',
    icon: Clapperboard,
    image: cover(13),
    address: 'Suite 721 New York NY 10016',
    phone: '+00 123 456 7890',
    review: '5.0/5',
    reviewCount: 100,
  },
  {
    title: 'Summit Sports Center',
    category: 'Sports',
    icon: Trophy,
    image: cover(14),
    address: 'Suite 721 New York NY 10016',
    phone: '+00 123 456 7890',
    review: '5.0/5',
    reviewCount: 100,
  },
  {
    title: 'Pixel Arcade',
    category: 'Games',
    icon: Gamepad2,
    image: cover(15),
    address: 'Suite 721 New York NY 10016',
    phone: '+00 123 456 7890',
    review: '5.0/5',
    reviewCount: 100,
  },
  {
    title: 'Central Gardens Park',
    category: 'Places',
    icon: MapPin,
    image: cover(16),
    address: 'Suite 721 New York NY 10016',
    phone: '+00 123 456 7890',
    review: '5.0/5',
    reviewCount: 100,
  },
]

export const offersSubheading = 'Special Offers'
export const offersTitle = 'We Have Special Offers Every Now and Then'
export const offersCta = 'Show Special Offers'

export const aboutSubheading = 'Welcome to Borough'
export const aboutTitle = 'Borough — A Directory & Listing'
export const aboutParagraphs = [
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
]

export interface Counter {
  value: number
  label: string
}

export const counters: Counter[] = [
  { value: 50, label: 'Years of Experienced' },
  { value: 210, label: 'Total Listing' },
  { value: 450, label: 'Company Staf' },
  { value: 100, label: 'Happy People' },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    name: 'Roger Scott',
    role: 'Marketing Manager',
    avatar: 'https://picsum.photos/seed/borough-avatar-1/160/160',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Roger Scott',
    role: 'Marketing Manager',
    avatar: 'https://picsum.photos/seed/borough-avatar-2/160/160',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
    name: 'Roger Scott',
    role: 'Marketing Manager',
    avatar: 'https://picsum.photos/seed/borough-avatar-3/160/160',
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. It is a paradisematic country, in which roasted parts of sentences fly.',
    name: 'Roger Scott',
    role: 'Marketing Manager',
    avatar: 'https://picsum.photos/seed/borough-avatar-4/160/160',
  },
  {
    quote:
      "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen.",
    name: 'Roger Scott',
    role: 'Marketing Manager',
    avatar: 'https://picsum.photos/seed/borough-avatar-5/160/160',
  },
]

export const howItWorksSubheading = "Let's Find Out"
export const howItWorksTitle = 'How It Works'
export const videoUrl = 'https://vimeo.com/115041822'
export const videoPoster = 'https://picsum.photos/seed/borough-video/1200/600'

export interface Step {
  title: string
  copy: string
  icon: LucideIcon
}

export const steps: Step[] = [
  {
    title: '1. Choose A Category',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    icon: Compass,
  },
  {
    title: '2. Find What You Want',
    copy: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    icon: Search,
  },
  {
    title: '3. Select The Best Place',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    icon: Building2,
  },
  {
    title: '4. Explore The Place',
    copy: 'One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    icon: Map,
  },
]

export interface BlogPost {
  metaDate: string
  comments: string
  title: string
  excerpt: string
  author: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    metaDate: 'Dec. 05, 2020',
    comments: '3 Comments',
    title: 'Explore The Best Restaurant in New York',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    author: 'John Dorf',
    image: 'https://picsum.photos/seed/borough-blog-1/600/400',
  },
  {
    metaDate: 'Dec. 05, 2020',
    comments: '3 Comments',
    title: 'Explore The Best Restaurant in New York',
    excerpt:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    author: 'John Dorf',
    image: 'https://picsum.photos/seed/borough-blog-2/600/400',
  },
  {
    metaDate: 'Dec. 05, 2020',
    comments: '3 Comments',
    title: 'Explore The Best Restaurant in New York',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    author: 'John Dorf',
    image: 'https://picsum.photos/seed/borough-blog-3/600/400',
  },
  {
    metaDate: 'Dec. 05, 2020',
    comments: '3 Comments',
    title: 'Explore The Best Restaurant in New York',
    excerpt:
      'One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
    author: 'John Dorf',
    image: 'https://picsum.photos/seed/borough-blog-4/600/400',
  },
]

export const footerBlurb =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export interface SocialLink {
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { label: 'Twitter', href: '#twitter' },
  { label: 'Facebook', href: '#facebook' },
  { label: 'Instagram', href: '#instagram' },
]

export interface LinkColumn {
  title: string
  links: string[]
}

export const linkColumns: LinkColumn[] = [
  {
    title: 'Explore',
    links: ['About Us', 'Account', 'Listing', 'Pricing Packages'],
  },
  {
    title: 'Quick Links',
    links: ['Contact Us', 'Terms & Conditions', 'Privacy', 'Feedbacks'],
  },
  {
    title: 'Categories',
    links: ['Food & Drinks', 'Hotels', 'Shopping', 'Beauty', 'Fitness', 'Bar & Club'],
  },
]

export const contactAddress = '203 Fake St. Mountain View, San Francisco, California, USA'
export const contactPhone = '+2 392 3929 210'
export const contactEmail = 'info@yourdomain.com'

export const dockHref = 'https://www.componentdock.com/'
