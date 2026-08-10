export const brandName = 'Flamingo'

export const navLinks = ['Home', 'Category', 'Archive', 'Pages', 'Contact'] as const

export const pagesDropdown = [
  { label: 'Blog Details', href: '#' },
  { label: 'Elements', href: '#' },
] as const

export const searchLabel = 'Search'
export const menuToggleLabel = 'Toggle menu'

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

export interface FeaturedCard {
  seed: string
  category: string
  headline: string
  excerpt: string
  date: string
  comments: string
}

export const featuredPosts: FeaturedCard[] = [
  {
    seed: 'flamingo-hero-1',
    category: 'Gadgets',
    headline: 'Nest Protect: 2nd Gen Smoke + CO Alarm',
    excerpt:
      'Smart sensors meet quiet design — the second generation keeps an eye on the air while you sleep.',
    date: 'March 14, 2018',
    comments: '05',
  },
  {
    seed: 'flamingo-hero-2',
    category: 'Travel',
    headline: 'Coastlines That Refuse to Be Photographed',
    excerpt:
      'Some shores are best kept off the feed — wind, salt and perfect light you can only stand in.',
    date: 'March 12, 2018',
    comments: '04',
  },
  {
    seed: 'flamingo-hero-3',
    category: 'Food',
    headline: 'The Quiet Art of a Slow Breakfast',
    excerpt:
      'Pastries from the corner oven, coffee that takes its time, and a table by the window.',
    date: 'March 10, 2018',
    comments: '07',
  },
  {
    seed: 'flamingo-hero-4',
    category: 'Design',
    headline: 'Why Great Interfaces Stay Out of the Way',
    excerpt:
      'The best tools disappear the moment you start using them — a short note on restraint.',
    date: 'March 8, 2018',
    comments: '03',
  },
]

export interface BlogPost {
  seed: string
  category: string
  headline: string
  excerpt: string
  date: string
  comments: string
  small?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    seed: 'flamingo-post-1',
    category: 'Gadgets',
    headline: 'Nest Protect: 2nd Gen Smoke + CO Alarm',
    excerpt:
      'When the lights are off and the house goes quiet, the second-generation alarm listens for more than smoke. It checks the air, the battery and the wiring, then speaks in plain English instead of beeping in panic.',
    date: 'March 14, 2018',
    comments: '05',
  },
  {
    seed: 'flamingo-post-2',
    category: 'Gadgets',
    headline: 'A Field Guide to Charging Cables That Last',
    excerpt:
      'Braided, reinforced, tested to the breaking point — the small decisions that keep your desk tidy and your devices alive.',
    date: 'March 12, 2018',
    comments: '04',
  },
  {
    seed: 'flamingo-post-3',
    category: 'Lifestyle',
    headline: 'Mornings Belong to the Window Seat',
    excerpt:
      'A short essay on daylight, coffee cups and the ten minutes that set the tone for the whole day.',
    date: 'March 10, 2018',
    comments: '06',
    small: true,
  },
  {
    seed: 'flamingo-post-4',
    category: 'Lifestyle',
    headline: 'The Lost Art of the Handwritten List',
    excerpt: 'Paper beats pixels when the goal is remembering — and forgetting on purpose.',
    date: 'March 8, 2018',
    comments: '03',
    small: true,
  },
  {
    seed: 'flamingo-post-5',
    category: 'Travel',
    headline: 'Train Windows and the Cities That Slide By',
    excerpt:
      'There is no better editor than a train window. Every station cuts the story, every tunnel adds suspense, and the ending is always a coastline.',
    date: 'March 6, 2018',
    comments: '08',
  },
  {
    seed: 'flamingo-post-6',
    category: 'Design',
    headline: 'Typography Is the Voice of the Page',
    excerpt:
      'Before a single word is read, the typeface has already spoken. A look at how weights, widths and whitespace set the tone.',
    date: 'March 4, 2018',
    comments: '02',
  },
]

export const paginationPages = ['01', '02', '03', '04', '09'] as const
export const previousLabel = 'Previous'
export const nextLabel = 'Next'

export const searchPlaceholder = 'Search Posts'

export const author = {
  name: 'Charlie Barber',
  role: 'Senior blog writer',
  bio: 'If you are looking for a blog that covers gadgets, travel and the small rituals of daily life, you are in the right place.',
  avatar: 'https://picsum.photos/seed/flamingo-author/120/120',
}

export const authorSocials = ['facebook', 'twitter', 'github', 'behance'] as const

export const popularPosts = [
  {
    seed: 'flamingo-popular-1',
    title: 'Space The Final Frontier',
    time: '02 Hours ago',
  },
  {
    seed: 'flamingo-popular-2',
    title: 'The Amazing Hubble',
    time: '02 Hours ago',
  },
  {
    seed: 'flamingo-popular-3',
    title: 'Astronomy Or Astrology',
    time: '03 Hours ago',
  },
  {
    seed: 'flamingo-popular-4',
    title: 'Asteroids telescope',
    time: '01 Hours ago',
  },
] as const

export const adImage = 'https://picsum.photos/seed/flamingo-ad/300/250'
export const adAlt = 'Advertisement banner'

export const categories = [
  { label: 'Technology', count: 37 },
  { label: 'Lifestyle', count: 24 },
  { label: 'Fashion', count: 59 },
  { label: 'Art', count: 29 },
  { label: 'Food', count: 15 },
  { label: 'Architecture', count: 9 },
  { label: 'Adventure', count: 44 },
] as const

export const tags = [
  'Technology',
  'Fashion',
  'Architecture',
  'Fashion',
  'Food',
  'Technology',
  'Lifestyle',
  'Art',
  'Adventure',
  'Food',
  'Lifestyle',
  'Adventure',
] as const

export const aboutText =
  'Flamingo is a journal about gadgets, travel, food and the small rituals that make a day worth repeating.'

export const newsletterHeading = 'Stay updated with our latest trends'
export const emailPlaceholder = 'Email Address'
export const subscribeLabel = 'Subscribe'

export const instagramSeeds = Array.from({ length: 8 }, (_, i) => `flamingo-instagram-${i + 1}`)

export const followHeading = 'Let us be social'
export const footerSocials = ['facebook', 'twitter', 'dribbble', 'behance'] as const
export type SocialName = (typeof footerSocials)[number] | 'github'

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  github: 'GitHub',
  dribbble: 'Dribbble',
  behance: 'Behance',
}

export const copyrightText = '© 2026 Flamingo. All rights reserved.'
export const creditText = 'Crafted with warmth and a little noise.'
