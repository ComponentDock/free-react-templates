/* ── Brand & chrome ─────────────────────────────────────────────────────── */

export const brandName = 'Pressly'
export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

export const navLinks: ReadonlyArray<string> = [
  'Home',
  'Lifestyle',
  'Food',
  'Review',
  'Sports',
  'Movie',
  'Fitness',
  'Fashion',
]

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Social icons ───────────────────────────────────────────────────────── */

export type SocialName = 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'tumblr'

export const socials: ReadonlyArray<{ label: string; name: SocialName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'LinkedIn', name: 'linkedin' },
  { label: 'Tumblr', name: 'tumblr' },
]

/* ── Category badge colors ──────────────────────────────────────────────── */

export type CategoryColor = 'teal' | 'blue' | 'orange' | 'yellow' | 'purple'

export const categoryColorMap: Record<CategoryColor, string> = {
  teal: 'bg-badge-teal',
  blue: 'bg-badge-blue',
  orange: 'bg-badge-orange',
  yellow: 'bg-badge-yellow',
  purple: 'bg-badge-purple',
}

export const categoryTextMap: Record<CategoryColor, string> = {
  teal: 'text-white',
  blue: 'text-white',
  orange: 'text-white',
  yellow: 'text-heading',
  purple: 'text-white',
}

/* ── Hero carousel ──────────────────────────────────────────────────────── */

export interface HeroSlide {
  seed: string
  category: string
  categoryColor: CategoryColor
  title: string
  date: string
  author: string
}

export const heroSlides: ReadonlyArray<HeroSlide> = [
  {
    seed: 'pressly-hero-1',
    category: 'Lifestyle',
    categoryColor: 'teal',
    title: '10 Ways to Transform Your Living Space This Season',
    date: 'September 20, 2026',
    author: 'Olivia Reed',
  },
  {
    seed: 'pressly-hero-2',
    category: 'Food',
    categoryColor: 'orange',
    title: 'The Ultimate Guide to Farm-to-Table Dining Experiences',
    date: 'September 18, 2026',
    author: 'Marcus Chen',
  },
  {
    seed: 'pressly-hero-3',
    category: 'Fashion',
    categoryColor: 'purple',
    title: 'Runway Trends That Are Shaping Street Style This Fall',
    date: 'September 15, 2026',
    author: 'Sarah Kim',
  },
]

export const previousSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'

/* ── Trending Now ───────────────────────────────────────────────────────── */

export const trendingTitle = 'TRENDING NOW'
export const viewAllLabel = 'View All'

export interface Article {
  seed: string
  category: string
  categoryColor: CategoryColor
  title: string
  date: string
}

export const trendingFeatured: Article = {
  seed: 'pressly-trend-1',
  category: 'Sports',
  categoryColor: 'blue',
  title: 'Championship Highlights: The Best Moments of the Season',
  date: 'September 22, 2026',
}

export const trendingArticles: ReadonlyArray<Article> = [
  {
    seed: 'pressly-trend-2',
    category: 'Technology',
    categoryColor: 'teal',
    title: 'New AI Tools Are Reshaping How We Create Content',
    date: 'September 21, 2026',
  },
  {
    seed: 'pressly-trend-3',
    category: 'Movie',
    categoryColor: 'purple',
    title: 'Behind the Scenes of the Most Anticipated Film of 2026',
    date: 'September 20, 2026',
  },
  {
    seed: 'pressly-trend-4',
    category: 'Fitness',
    categoryColor: 'orange',
    title: 'Morning Routines That Boost Productivity and Energy',
    date: 'September 19, 2026',
  },
  {
    seed: 'pressly-trend-5',
    category: 'Review',
    categoryColor: 'yellow',
    title: 'The Best Budget Gadgets You Can Buy Right Now',
    date: 'September 18, 2026',
  },
  {
    seed: 'pressly-trend-6',
    category: 'Food',
    categoryColor: 'orange',
    title: 'Easy Weeknight Dinners Ready in Under 30 Minutes',
    date: 'September 17, 2026',
  },
]

/* ── What's New ─────────────────────────────────────────────────────────── */

export const whatsNewTitle = "What's New"

export type WhatsNewTabId = 'all' | 'lifestyle' | 'travel' | 'fashion' | 'photography'

export interface WhatsNewTab {
  id: WhatsNewTabId
  label: string
}

export const whatsNewTabs: ReadonlyArray<WhatsNewTab> = [
  { id: 'all', label: 'All' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'travel', label: 'Travel' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'photography', label: 'Photography' },
]

export const whatsNewFeatured: Article = {
  seed: 'pressly-new-1',
  category: 'Travel',
  categoryColor: 'teal',
  title: 'Hidden Gems: Underrated Destinations for Your Next Adventure',
  date: 'September 23, 2026',
}

export const whatsNewSide: ReadonlyArray<Article> = [
  {
    seed: 'pressly-new-2',
    category: 'Lifestyle',
    categoryColor: 'teal',
    title: 'How to Create a Morning Routine That Actually Sticks',
    date: 'September 22, 2026',
  },
  {
    seed: 'pressly-new-3',
    category: 'Fashion',
    categoryColor: 'purple',
    title: 'Sustainable Fashion Brands Worth Supporting This Year',
    date: 'September 21, 2026',
  },
  {
    seed: 'pressly-new-4',
    category: 'Photography',
    categoryColor: 'blue',
    title: 'Mastering Golden Hour: Tips for Stunning Outdoor Shots',
    date: 'September 20, 2026',
  },
]

/* ── Technology ─────────────────────────────────────────────────────────── */

export const technologyTitle = 'Technology'
export const playVideoLabel = 'Play featured video'

export const techLeft: ReadonlyArray<Article> = [
  {
    seed: 'pressly-tech-1',
    category: 'Gadgets',
    categoryColor: 'blue',
    title: 'Top 5 Smart Home Devices You Need in 2026',
    date: 'September 22, 2026',
  },
  {
    seed: 'pressly-tech-2',
    category: 'Apps',
    categoryColor: 'teal',
    title: 'Productivity Apps That Will Change Your Workflow',
    date: 'September 21, 2026',
  },
]

export const techCenter: Article = {
  seed: 'pressly-tech-center',
  category: 'Innovation',
  categoryColor: 'orange',
  title: 'The Future of Wearable Technology: What to Expect Next',
  date: 'September 23, 2026',
}

export const techRight: ReadonlyArray<Article> = [
  {
    seed: 'pressly-tech-3',
    category: 'Security',
    categoryColor: 'purple',
    title: 'How to Protect Your Privacy in the Digital Age',
    date: 'September 20, 2026',
  },
  {
    seed: 'pressly-tech-4',
    category: 'Software',
    categoryColor: 'blue',
    title: 'Open Source Tools Every Developer Should Know',
    date: 'September 19, 2026',
  },
]

/* ── Instagram strip ────────────────────────────────────────────────────── */

export const instagramImages: ReadonlyArray<string> = [
  'pressly-insta-1',
  'pressly-insta-2',
  'pressly-insta-3',
  'pressly-insta-4',
  'pressly-insta-5',
  'pressly-insta-6',
]

/* ── Footer ─────────────────────────────────────────────────────────────── */

export const footerBlurb =
  'Pressly is your daily source for the latest in lifestyle, technology, fashion, and more. Stay informed and inspired.'

export const usefulLinks: ReadonlyArray<string> = [
  'About Us',
  'Contact',
  'Advertise',
  'Privacy Policy',
  'Terms of Service',
]

export const topCategories: ReadonlyArray<string> = [
  'Lifestyle',
  'Technology',
  'Fashion',
  'Food',
  'Sports',
  'Movie',
]

export const newsletterTitle = 'Subscribe Newsletter'
export const newsletterPlaceholder = 'Your email address'
export const subscribeLabel = 'Subscribe'
export const emailLabel = 'Email address'
export const invalidEmailMessage = 'Please enter a valid email address.'
export const successMessage = 'Thanks for subscribing!'
export const copyrightYear = new Date().getFullYear()
