export const siteName = 'Saffron'
export const tagline = 'Personal Blog'
export const skipLabel = 'Skip to main content'
export const welcomeText = 'Hello nice people, welcome to my blog'
export const contactEmail = 'hello@saffron.blog'
export const searchPlaceholder = 'Search'

export const navLinks = ['Home', 'Featured', 'About', 'Categories', 'Contact'] as const

export interface NavLink {
  label: string
  href: string
}

export const homeMenu: NavLink[] = [
  { label: 'Featured', href: '#blog' },
  { label: 'About', href: '#about' },
  { label: 'Categories', href: '#categories' },
]

export const categoriesSubmenu: NavLink[] = [
  { label: 'Travel', href: '#categories' },
  { label: 'Fashion', href: '#categories' },
  { label: 'Lifestyle', href: '#categories' },
]

export type SocialBrand = 'facebook' | 'twitter' | 'instagram' | 'vimeo' | 'pinterest'

export interface SocialLink {
  brand: SocialBrand
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { brand: 'facebook', label: 'Facebook', href: '#' },
  { brand: 'twitter', label: 'Twitter', href: '#' },
  { brand: 'instagram', label: 'Instagram', href: '#' },
  { brand: 'vimeo', label: 'Vimeo', href: '#' },
  { brand: 'pinterest', label: 'Pinterest', href: '#' },
]

export interface HeroSlide {
  seed: string
  category: string
  headline: string
  date: string
}

export const heroSlides: HeroSlide[] = [
  {
    seed: 'saffron-slide-1',
    category: 'Travel',
    headline: 'Travel, Love, Live',
    date: '29 October, 2026',
  },
  {
    seed: 'saffron-slide-2',
    category: 'Travel',
    headline: 'Wander Far, Remember More',
    date: '2 November, 2026',
  },
]

export interface BlogPost {
  seed: string
  category: string
  title: string
  date: string
  excerpt: string
  likes: string
  comments: string
}

const post = (
  seed: string,
  title: string,
  date: string,
  excerpt: string,
  likes: string,
  comments: string,
): BlogPost => ({ seed, category: 'Travel', title, date, excerpt, likes, comments })

export const featuredPosts: BlogPost[] = [
  post(
    'saffron-post-1',
    'This is post about travel, adventure and fun',
    'Monday, 13 October 2026',
    'Some mornings begin with a map spread across the kitchen table and a train ticket that goes one stop too far. This is the story of a week spent following the river instead of the itinerary.',
    '03',
    '06',
  ),
  post(
    'saffron-post-2',
    'This is post for the ones that love to travel',
    'Monday, 13 October 2026',
    'For everyone who keeps a packed bag by the door: a short field guide to the small rituals of leaving — the playlist, the notebook, and the window seat you always ask for.',
    '12',
    '04',
  ),
]

export const gridPosts: BlogPost[] = [
  post(
    'saffron-post-3',
    'How to paint the wall and street',
    'Monday, 13 October 2026',
    'A morning with the muralists of the old quarter, where colour arrives one roller at a time.',
    '08',
    '02',
  ),
  post(
    'saffron-post-4',
    'One more night in the local clubs',
    'Monday, 13 October 2026',
    'The basement venues that still book the bands nobody has heard of yet — and why they matter.',
    '21',
    '09',
  ),
  post(
    'saffron-post-5',
    'A new festival in your town',
    'Monday, 13 October 2026',
    'Three days of street food, slow music and paper lanterns, all within walking distance of home.',
    '15',
    '07',
  ),
  post(
    'saffron-post-6',
    'How to make your home modern',
    'Monday, 13 October 2026',
    'Warm minimalism without the showroom feel: linen, clay, one good lamp and a lot of daylight.',
    '33',
    '11',
  ),
]

export const splitPost: BlogPost = post(
  'saffron-post-7',
  'How to throw the best engagement party',
  'Monday, 13 October 2026',
  'A long table under the lemon trees, handwritten place cards, and a guest list that fits on one page — the small party we keep coming back to.',
  '27',
  '08',
)

export const posts: BlogPost[] = [...featuredPosts, ...gridPosts, splitPost]

export const authorName = 'Cristine Smith'
export const authorBio =
  'Travel writer and slow-morning enthusiast. I collect train timetables, corner bakeries and the stories that happen between two cities.'
export const authorSeed = 'saffron-author'
export const authorSignature = 'Cristine'
export const authorReadMore = 'READ MORE'

export interface CategoryCard {
  name: string
  seed: string
}

export const categoryCards: CategoryCard[] = [
  { name: 'Travel', seed: 'saffron-cat-1' },
  { name: 'Fashion', seed: 'saffron-cat-2' },
  { name: 'Lifestyle', seed: 'saffron-cat-3' },
  { name: 'Design', seed: 'saffron-cat-4' },
]

export interface LatestPost {
  seed: string
  category: string
  title: string
  date: string
}

export const latestPosts: LatestPost[] = [
  {
    seed: 'saffron-latest-1',
    category: 'Travel',
    title: 'One more night in the clubs',
    date: 'Monday, 13 October 2026',
  },
  {
    seed: 'saffron-latest-2',
    category: 'Travel',
    title: 'Travel lights in winter',
    date: 'Monday, 13 October 2026',
  },
  {
    seed: 'saffron-latest-3',
    category: 'Travel',
    title: 'How to travel with no money',
    date: 'Monday, 13 October 2026',
  },
  {
    seed: 'saffron-latest-4',
    category: 'Travel',
    title: 'Smile 10 times a day',
    date: 'Monday, 13 October 2026',
  },
]

export const tags = [
  'design',
  'fashion',
  'travel',
  'music',
  'video',
  'photography',
  'adventure',
] as const

export const instagramSideSeeds = [
  'saffron-side-1',
  'saffron-side-2',
  'saffron-side-3',
  'saffron-side-4',
  'saffron-side-5',
  'saffron-side-6',
]

export const instagramStripSeeds = [
  'saffron-strip-1',
  'saffron-strip-2',
  'saffron-strip-3',
  'saffron-strip-4',
  'saffron-strip-5',
  'saffron-strip-6',
  'saffron-strip-7',
]

export const newsletterHeading = 'Subscribe to our newsletter'
export const newsletterPlaceholder = 'Your email here'
export const newsletterConfirmation = 'Thanks for subscribing — check your inbox to confirm.'

export const sideTitles = {
  categories: 'Categories',
  latest: 'Latest Posts',
  advertisement: 'Advertisement',
  instagram: 'Instagram',
  tags: 'Tags',
} as const

export const advertisementSeed = 'saffron-ad'
export const advertisementLabel = 'DISCOVER'

export const instagramStripTitle = 'Follow me © instagram'
export const footerNote = 'All rights reserved.'
export const creditLabel = 'Component Dock'
export const creditUrl = 'https://www.componentdock.com/'
export const copyrightYear = new Date().getFullYear()
