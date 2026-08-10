export const brandName = 'Petal'
export const tagline = 'PERSONAL BLOG'
export const welcomeMessage = 'Hello nice people, welcome to my blog'
export const contactEmail = 'contact@juliblog.com'

export const navLinks = ['Home', 'Featured', 'About', 'Categories', 'Contact'] as const
export const homeDropdown = ['Travel', 'Fashion', 'Lifestyle', 'Design'] as const

export const searchLabel = 'Search'
export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Hero slider ─────────────────────────────────────────────────────── */

export interface HeroSlide {
  category: string
  title: string
  date: string
  seed: string
  alt: string
}

export const heroSlides: HeroSlide[] = [
  {
    category: 'TRAVEL',
    title: 'Travel, Love, Live',
    date: 'Sept. 10, 2019',
    seed: 'petal-hero-1',
    alt: 'Flat-lay of travel gear on a soft background',
  },
  {
    category: 'FASHION',
    title: 'Style Is What You Make of It',
    date: 'Aug. 28, 2019',
    seed: 'petal-hero-2',
    alt: 'A neatly styled outfit hanging on a rail',
  },
  {
    category: 'LIFESTYLE',
    title: 'Slow Mornings, Honest Coffee',
    date: 'Aug. 12, 2019',
    seed: 'petal-hero-3',
    alt: 'A cup of coffee beside an open journal',
  },
]

/* ── Blog posts ──────────────────────────────────────────────────────── */

export interface BlogPost {
  category: string
  title: string
  date: string
  excerpt: string
  comments: number
  seed: string
  sideBySide?: boolean
}

const makePost = (
  category: string,
  title: string,
  date: string,
  excerpt: string,
  comments: number,
  seed: string,
  sideBySide = false,
): BlogPost => ({ category, title, date, excerpt, comments, seed, sideBySide })

export const posts: BlogPost[] = [
  makePost(
    'TRAVEL',
    'Ten Places Worth the Detour',
    'Sept. 10, 2019',
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    3,
    'petal-post-1',
  ),
  makePost(
    'FASHION',
    'The Capsule Wardrobe Experiment',
    'Aug. 28, 2019',
    'Even the all-powerful Pointing has no control about the blind texts; an almost unorthographic life one day together a still more distant world.',
    6,
    'petal-post-2',
    true,
  ),
  makePost(
    'LIFESTYLE',
    'Notes on Keeping a Paper Journal',
    'Aug. 12, 2019',
    'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place.',
    2,
    'petal-post-3',
  ),
  makePost(
    'DESIGN',
    'Whitespace Is Not Empty Space',
    'July 30, 2019',
    'The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin.',
    9,
    'petal-post-4',
  ),
  makePost(
    'TRAVEL',
    'How to Pack for a Month Away',
    'July 18, 2019',
    'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.',
    5,
    'petal-post-5',
  ),
]

/* ── Sidebar ─────────────────────────────────────────────────────────── */

export const authorName = 'Cristine Smith'
export const authorBio =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
export const newsletterHeading = 'Subscribe to our newsletter'
export const newsletterLabel = 'Email address'
export const newsletterPlaceholder = 'Enter your email address'
export const newsletterSubmitLabel = 'Subscribe'
export const newsletterSuccess = 'Thanks! Please check your inbox.'

export interface SidebarCategory {
  name: string
  count: number
  seed: string
}

export const sidebarCategories: SidebarCategory[] = [
  { name: 'TRAVEL', count: 12, seed: 'petal-cat-travel' },
  { name: 'FASHION', count: 8, seed: 'petal-cat-fashion' },
  { name: 'LIFESTYLE', count: 10, seed: 'petal-cat-lifestyle' },
  { name: 'DESIGN', count: 5, seed: 'petal-cat-design' },
]

export interface LatestPost {
  category: string
  title: string
  date: string
  seed: string
}

export const latestPosts: LatestPost[] = [
  {
    category: 'TRAVEL',
    title: 'Ten Places Worth the Detour',
    date: 'Sept. 10, 2019',
    seed: 'petal-latest-1',
  },
  {
    category: 'FASHION',
    title: 'The Capsule Wardrobe Experiment',
    date: 'Aug. 28, 2019',
    seed: 'petal-latest-2',
  },
  {
    category: 'LIFESTYLE',
    title: 'Notes on Keeping a Paper Journal',
    date: 'Aug. 12, 2019',
    seed: 'petal-latest-3',
  },
]

export const instagramThumbs: ReadonlyArray<{ seed: string; alt: string }> = [
  { seed: 'petal-ig-1', alt: 'Instagram photo one' },
  { seed: 'petal-ig-2', alt: 'Instagram photo two' },
  { seed: 'petal-ig-3', alt: 'Instagram photo three' },
  { seed: 'petal-ig-4', alt: 'Instagram photo four' },
  { seed: 'petal-ig-5', alt: 'Instagram photo five' },
  { seed: 'petal-ig-6', alt: 'Instagram photo six' },
]

export const tags = ['Travel', 'Fashion', 'Lifestyle', 'Design', 'Food', 'Photography'] as const

/* ── Footer instagram strip ──────────────────────────────────────────── */

export const stripImages: ReadonlyArray<{ seed: string; alt: string }> = [
  { seed: 'petal-strip-1', alt: 'Instagram strip photo one' },
  { seed: 'petal-strip-2', alt: 'Instagram strip photo two' },
  { seed: 'petal-strip-3', alt: 'Instagram strip photo three' },
  { seed: 'petal-strip-4', alt: 'Instagram strip photo four' },
  { seed: 'petal-strip-5', alt: 'Instagram strip photo five' },
  { seed: 'petal-strip-6', alt: 'Instagram strip photo six' },
  { seed: 'petal-strip-7', alt: 'Instagram strip photo seven' },
]

/* ── Footer ──────────────────────────────────────────────────────────── */

export const footerColumns: ReadonlyArray<{
  heading: string
  links: ReadonlyArray<{ label: string; href: string }>
}> = [
  {
    heading: 'Discover',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Featured', href: '#featured' },
      { label: 'About', href: '#about' },
      { label: 'Categories', href: '#categories' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Categories',
    links: [
      { label: 'Travel', href: '#travel' },
      { label: 'Fashion', href: '#fashion' },
      { label: 'Lifestyle', href: '#lifestyle' },
      { label: 'Design', href: '#design' },
    ],
  },
]

export const creditPrefix = 'Petal © 2018. All rights reserved.'
export const creditLine = 'This template is made with ♥ by Colorlib'
