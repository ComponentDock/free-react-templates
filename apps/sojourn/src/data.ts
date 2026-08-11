/* All copy/content for Sojourn, extracted from the ColorLib "Sasha" live
   preview (https://preview.colorlib.com/theme/sasha/index-01.html) on
   2026-08-11. Text is kept close to the original kind of content; brand name
   replaced with "Sojourn". */

export const siteName = 'Sojourn'
export const skipLabel = 'Skip to main content'

/* Header — header-top (light, logo + hamburger) + header-bottom (dark
   #171717 nav bar); the slide-in panel reuses the same links. */
export interface NavItem {
  label: string
  href: string
  active?: boolean
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'Features', href: '#' },
  { label: 'Categories', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

export const menuTriggerLabel = 'Open navigation menu'
export const menuCloseLabel = 'Close navigation menu'
export const slideMenuLabel = 'Slide-in navigation'
export const slideMenuId = 'sojourn-slide-menu'

/* Banner slider — 50vh, dark overlay rgba(0,0,0,0.25), centered white
   content: bordered category tag, white uppercase Poppins title, white
   "Read More" button. */
export interface BannerSlide {
  title: string
  category: string
  seed: string
}

export const bannerSlides: readonly BannerSlide[] = [
  { title: 'Natural summer', category: 'Lifestyle', seed: 'sojourn-banner-1' },
  { title: 'Cruise to Alaska', category: 'Travel', seed: 'sojourn-banner-2' },
]
export const bannerLabel = 'Featured slides'
export const bannerAutoplayMs = 5000
export const prevSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'
export const slideIndicatorLabel = (index: number) => `Go to slide ${index + 1}`
export const readMoreLabel = 'Read More'

/* Post grid — 2-column centered grid; first and sixth cards are full-width
   (titles from the live DOM). */
export interface GridPost {
  title: string
  category: string
  date: string
  comments: string
  excerpt: string
  seed: string
  fullWidth?: boolean
}

const postExcerpt =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'

export const gridPosts: readonly GridPost[] = [
  {
    title: 'Cruise to Alaska',
    category: 'Travel',
    date: 'May 12, 2017',
    comments: '3 Comments',
    excerpt: postExcerpt,
    seed: 'sojourn-post-1',
    fullWidth: true,
  },
  {
    title: 'Russian River',
    category: 'Travel',
    date: 'May 10, 2017',
    comments: '1 Comment',
    excerpt: postExcerpt,
    seed: 'sojourn-post-2',
  },
  {
    title: 'Workout for the Road',
    category: 'Fitness',
    date: 'May 8, 2017',
    comments: '2 Comments',
    excerpt: postExcerpt,
    seed: 'sojourn-post-3',
  },
  {
    title: "California 'Tunnel Tree'",
    category: 'Nature',
    date: 'May 5, 2017',
    comments: '0 Comments',
    excerpt: postExcerpt,
    seed: 'sojourn-post-4',
  },
  {
    title: 'Hawaiian Prints',
    category: 'Style',
    date: 'May 2, 2017',
    comments: '4 Comments',
    excerpt: postExcerpt,
    seed: 'sojourn-post-5',
  },
  {
    title: 'What to Explore in Key West',
    category: 'Travel',
    date: 'Apr 28, 2017',
    comments: '6 Comments',
    excerpt: postExcerpt,
    seed: 'sojourn-post-6',
    fullWidth: true,
  },
  {
    title: 'ROAD TRIP TRAVEL GEAR',
    category: 'Gear',
    date: 'Apr 24, 2017',
    comments: '2 Comments',
    excerpt: postExcerpt,
    seed: 'sojourn-post-7',
  },
  {
    title: 'Cruising into Spring',
    category: 'Lifestyle',
    date: 'Apr 20, 2017',
    comments: '3 Comments',
    excerpt: postExcerpt,
    seed: 'sojourn-post-8',
  },
]

export const gridLabel = 'Blog posts'
export const continueReadingLabel = 'Read more'
export const postMetaLabel = 'Post meta'

/* Sidebar widgets. */
export const aboutWidgetLabel = 'About the author'
export const aboutName = 'Emily Hart'
export const aboutRole = 'Travel writer & photographer'
export const aboutBio =
  'I write about slow travel, coastal roads, and the small towns most guidebooks skip. Join me for the detours worth taking.'

export const newsletterTitle = 'Newsletter'
export const newsletterTagline = 'Get fresh stories in your inbox, once a month.'
export const emailPlaceholder = 'Email Address'
export const subscribeLabel = 'Subscribe'
export const subscribeSuccess = 'Thanks for subscribing!'
export const subscribeError = 'Please enter a valid email address.'

export const instagramTitle = 'Instagram'
export const instagramTileLabel = (index: number) => `Instagram feed image ${index + 1}`
export const sidebarInstaCount = 6

export interface RecentPost {
  title: string
  date: string
  seed: string
}
export const recentPostsTitle = 'Recent Posts'
export const recentPosts: readonly RecentPost[] = [
  { title: 'Cruise to Alaska', date: 'May 12, 2017', seed: 'sojourn-recent-1' },
  { title: 'Russian River', date: 'May 10, 2017', seed: 'sojourn-recent-2' },
  { title: 'Workout for the Road', date: 'May 8, 2017', seed: 'sojourn-recent-3' },
  { title: "California 'Tunnel Tree'", date: 'May 5, 2017', seed: 'sojourn-recent-4' },
]

export const adLabel = 'Advertisement'
export const adAlt = 'Advertisement placeholder'

/* Full-width Instagram strip. */
export const stripLabel = 'Instagram strip'
export const stripCount = 6
export const stripTileLabel = (index: number) => `Instagram strip image ${index + 1}`

/* Footer — logo left, copyright center, socials right (monorepo credit). */
export const socialNames: readonly string[] = ['Instagram', 'Facebook', 'Twitter', 'Pinterest']
export const socialLabel = (name: string) => `Visit ${name} profile`
export const copyright = `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`
export const footerCredit = 'Recreated from the ColorLib Sasha design'
