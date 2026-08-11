/* All copy/content for Serif, extracted from the ColorLib "Sensive" live
   preview (https://preview.colorlib.com/theme/sensive/) on 2026-08-11.
   Text is kept close to the original kind of content; brand name replaced
   with "Serif". Two original typos fixed (noted in the PR): "Catgory" →
   "Category", duplicated widget title → "Tags", "Instragram Feed" →
   "Instagram Feed", "SUBCRIBE" → "SUBSCRIBE". */

export const siteName = 'Serif'
export const skipLabel = 'Skip to main content'
export const documentTitle = 'Serif — Blog'

/* Header — white bar, serif logo left, centered nav (Home active / Archive
   / Category / Pages dropdown / Contact), social icons + search icon right,
   mobile hamburger; turns solid with a shadow once the page scrolls. */
export interface NavItem {
  label: string
  href: string
  active?: boolean
  children?: readonly string[]
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'Archive', href: '#' },
  { label: 'Category', href: '#' },
  { label: 'Pages', href: '#', children: ['Blog Details', 'Single Post', 'Elements'] },
  { label: 'Contact', href: '#' },
]

export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const searchLabel = 'Search'
export const submenuLabel = 'Pages submenu'
export const socialNames: readonly string[] = ['Facebook', 'Twitter', 'Instagram', 'Pinterest']
export const socialLabel = (name: string) => `Visit ${name} profile`
export const stickyThreshold = 100

/* Hero banner — 550px full-width photo with a dark overlay and centered
   white serif text: category label, headline, date. */
export const heroCategory = 'Tours & Travels'
export const heroHeadline = 'Amazing Places on earth'
export const heroDate = 'December 12, 2018'
export const heroImageSeed = 'serif-hero'
export const heroAlt = 'Mountain landscape at dusk'
export const heroSectionLabel = 'Hero banner'

/* Featured slider — 6 editorial post cards, 3 visible at a time, each with
   a photo, a black uppercase label chip (orange text), a serif title, and
   meta text; auto-advances every 5s with prev/next notch arrows. */
export interface FeaturedPost {
  title: string
  label: string
  meta: string
  seed: string
}

export const featuredPosts: readonly FeaturedPost[] = [
  {
    title: "New york fashion week's continued the evolution",
    label: 'FASHION',
    meta: '2 days ago',
    seed: 'serif-slide-1',
  },
  {
    title: 'Best mountain trails to hike this autumn',
    label: 'TRAVEL',
    meta: '2 days ago',
    seed: 'serif-slide-2',
  },
  {
    title: 'A minimalist guide to slow mornings',
    label: 'LIFESTYLE',
    meta: '2 days ago',
    seed: 'serif-slide-3',
  },
  {
    title: "New york fashion week's continued the evolution",
    label: 'FASHION',
    meta: '2 days ago',
    seed: 'serif-slide-4',
  },
  {
    title: 'Coastal roads worth the detour this season',
    label: 'TRAVEL',
    meta: '2 days ago',
    seed: 'serif-slide-5',
  },
  {
    title: 'Small habits for a calmer workspace',
    label: 'LIFESTYLE',
    meta: '2 days ago',
    seed: 'serif-slide-6',
  },
]

export const sliderLabel = 'Featured posts'
export const sliderAutoplayMs = 5000
export const prevSlideLabel = 'Previous slides'
export const nextSlideLabel = 'Next slides'

/* Recent posts — 4 large posts, each with a photo + white meta bar overlay
   (Admin / date / comments), serif title, tag line, excerpt and a black
   READ MORE button that inverts to orange on hover. */
export interface RecentBlogPost {
  title: string
  meta: string
  tags: string
  excerpt: string
  seed: string
}

const postExcerpt =
  'Over yielding doesn\u2019t so moved green saw meat hath fish he him from given yielding lesser cattle were fruitful lights. Called bearing divide make which open fruitful own, every good their behold.'

export const recentPosts: readonly RecentBlogPost[] = [
  {
    title: 'Woman claims husband wants to name baby girl after his ex-lover',
    meta: 'Admin / January 12,2019 / 2 Comments',
    tags: 'travel, life style, technology, fashion',
    excerpt: postExcerpt,
    seed: 'serif-post-1',
  },
  {
    title: 'Tourist deaths in Costa Rica jeopardize safe destination reputation',
    meta: 'Admin / January 12,2019 / 2 Comments',
    tags: 'travel, life style, technology, fashion',
    excerpt: postExcerpt,
    seed: 'serif-post-2',
  },
  {
    title: 'Why the best travel writing is getting personal',
    meta: 'Admin / January 12,2019 / 2 Comments',
    tags: 'travel, life style, technology, fashion',
    excerpt: postExcerpt,
    seed: 'serif-post-3',
  },
  {
    title: 'Small towns worth visiting before everyone else does',
    meta: 'Admin / January 12,2019 / 2 Comments',
    tags: 'travel, life style, technology, fashion',
    excerpt: postExcerpt,
    seed: 'serif-post-4',
  },
]

export const postsLabel = 'Recent blog posts'
export const readMoreLabel = 'READ MORE'
export const postImageAlt = (index: number) => `Featured image for post ${index + 1}`

/* Pagination below the post list. */
export const paginationLabel = 'Blog pagination'
export const previousPageLabel = 'Previous'
export const nextPageLabel = 'Next'
export const pageLabel = (page: number) => `Page ${page}`

/* Sidebar widgets — four #f9f9ff boxes with orange-underlined titles. */
export const newsletterTitle = 'Newsletter'
export const newsletterTagline = 'Stay update with our latest'
export const emailPlaceholder = 'Enter email'
export const subscribeLabel = 'SUBSCRIBE'
export const subscribeSuccess = 'Thanks for subscribing!'

export const categoryTitle = 'Category'
export interface CategoryEntry {
  name: string
  count: string
}
export const categories: readonly CategoryEntry[] = [
  { name: 'Technology', count: '03' },
  { name: 'Software', count: '09' },
  { name: 'Lifestyle', count: '12' },
  { name: 'Shopping', count: '02' },
  { name: 'Food', count: '10' },
]

export const popularPostTitle = 'Popular Post'
export interface PopularPost {
  title: string
  author: string
  date: string
  seed: string
}
export const popularPosts: readonly PopularPost[] = [
  {
    title: 'Accused of assaulting flight attendant mid-flight',
    author: 'Admin',
    date: 'Dec 15',
    seed: 'serif-popular-1',
  },
  {
    title: 'Tennessee outback steakhouse worker diagnosed',
    author: 'Admin',
    date: 'Dec 15',
    seed: 'serif-popular-2',
  },
  {
    title: 'The best cities to visit in the new year',
    author: 'Admin',
    date: 'Dec 15',
    seed: 'serif-popular-3',
  },
]

export const tagsTitle = 'Tags'
export const tags: readonly string[] = [
  'project',
  'love',
  'technology',
  'travel',
  'software',
  'life style',
  'design',
  'illustration',
]

/* Footer — pure black #000000, four columns: About Us, Newsletter (input +
   orange arrow button), Instagram Feed (6 thumbs), Follow Us (social icons),
   then the copyright bar with the repo-standard credit. */
export const aboutTitle = 'About Us'
export const aboutText =
  'Serif is an editorial blog about travel, fashion, and slow living — long reads, beautiful photographs, and stories worth sharing.'
export const aboutLinkLabel = 'Learn more'
export const footerNewsletterTitle = 'Newsletter'
export const footerNewsletterTagline = 'Stay update with our latest'
export const footerEmailPlaceholder = 'Enter your email'
export const footerSubscribeLabel = 'Subscribe to newsletter'
export const instagramTitle = 'Instagram Feed'
export const instagramTileLabel = (index: number) => `Instagram feed image ${index + 1}`
export const followTitle = 'Follow Us'
export const followTagline = 'Let us be social'
export const copyright = `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`
export const footerCredit = 'Recreated from the ColorLib Sensive design'
