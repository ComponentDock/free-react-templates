export const brandName = 'Lede'

export const phoneNumber = '+440 012 3654 896'
export const emailAddress = 'support@lede.example'

export const navLinks = ['Home', 'Archive', 'Category', 'Post Types', 'About', 'Contact'] as const

export const postTypeLinks = [
  'Standard Post',
  'Image Post',
  'Gallery Post',
  'Video Post',
  'Audio Post',
] as const

export const searchLabel = 'Search'
export const searchPlaceholder = 'Search Keyword'
export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

export const adLabel = 'Advertisement'

/* ── Top bar ──────────────────────────────────────────────────────────── */

export const socialLinks = [
  { label: 'Facebook', href: '#facebook' },
  { label: 'Twitter', href: '#twitter' },
  { label: 'Dribbble', href: '#dribbble' },
  { label: 'Behance', href: '#behance' },
] as const

/* ── Top posts hero ───────────────────────────────────────────────────── */

export interface PostMeta {
  author: string
  date: string
  comments: number
}

const featureMeta: PostMeta = {
  author: 'Mark wiens',
  date: '03 April, 2018',
  comments: 6,
}

export interface TopPost {
  seed: string
  tag: string
  title: string
  meta: PostMeta
}

export const featurePost: TopPost = {
  seed: 'lede-hero-1',
  tag: 'Food Habit',
  title: 'A Discount Toner Cartridge Is Better Than Ever.',
  meta: featureMeta,
}

export const stackedPosts: TopPost[] = [
  {
    seed: 'lede-hero-2',
    tag: 'Food Habit',
    title: 'A Discount Toner Cartridge Is Better Than Ever.',
    meta: featureMeta,
  },
  {
    seed: 'lede-hero-3',
    tag: 'Food Habit',
    title: 'A Discount Toner Cartridge Is Better Than Ever.',
    meta: featureMeta,
  },
]

/* ── Breaking news ticker ─────────────────────────────────────────────── */

export const breakingNewsLabel = 'Breaking News:'
export const breakingNewsHeadline = 'Astronomy Binoculars A Great Alternative'

/* ── Latest news / relevant stories rows ──────────────────────────────── */

export interface PostRow {
  seed: string
  tag: string
  title: string
  meta: PostMeta
  excerpt: string
}

export const latestNewsTitle = 'Latest News'

export const latestNewsRows: PostRow[] = [
  {
    seed: 'lede-news-1',
    tag: 'Lifestyle',
    title: 'A Discount Toner Cartridge Is Better Than Ever.',
    meta: featureMeta,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    seed: 'lede-news-2',
    tag: 'Science',
    title: 'A Discount Toner Cartridge Is Better Than Ever.',
    meta: featureMeta,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    seed: 'lede-news-3',
    tag: 'Travel',
    title: 'A Discount Toner Cartridge Is Better Than Ever.',
    meta: featureMeta,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    seed: 'lede-news-4',
    tag: 'Fashion',
    title: 'A Discount Toner Cartridge Is Better Than Ever.',
    meta: featureMeta,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export const popularPostsTitle = 'Popular Posts'

export const popularFeature: TopPost = {
  seed: 'lede-pop-1',
  tag: 'Food Habit',
  title: 'A Discount Toner Cartridge Is Better Than Ever.',
  meta: featureMeta,
}

export const popularGrid: PostRow[] = [
  {
    seed: 'lede-pop-2',
    tag: 'Travel',
    title: 'A Discount Toner Cartridge Is Better Than Ever.',
    meta: featureMeta,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    seed: 'lede-pop-3',
    tag: 'Travel',
    title: 'A Discount Toner Cartridge Is Better Than Ever.',
    meta: featureMeta,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export const relevantStoriesTitle = 'Relavent Stories'

export const relevantStoriesRows: PostRow[] = [
  {
    seed: 'lede-rel-1',
    tag: 'Lifestyle',
    title: 'A Discount Toner Cartridge Is Better Than Ever.',
    meta: featureMeta,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    seed: 'lede-rel-2',
    tag: 'Science',
    title: 'A Discount Toner Cartridge Is Better Than Ever.',
    meta: featureMeta,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    seed: 'lede-rel-3',
    tag: 'Travel',
    title: 'A Discount Toner Cartridge Is Better Than Ever.',
    meta: featureMeta,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

/* ── Sidebar ──────────────────────────────────────────────────────────── */

export const editorsPickTitle = "Editor's Pick"

export const editorsPickFeature: PostRow = {
  seed: 'lede-side-1',
  tag: 'Food Habit',
  title: 'A Discount Toner Cartridge Is Better Than Ever.',
  meta: featureMeta,
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}

export interface MiniPost {
  seed: string
  title: string
  meta: PostMeta
}

export const editorsPickMini: MiniPost[] = [
  {
    seed: 'lede-side-2',
    title: 'Help Finding Information Online is so easy',
    meta: featureMeta,
  },
  {
    seed: 'lede-side-3',
    title: 'Compatible Inkjet Cartr world famous',
    meta: featureMeta,
  },
  {
    seed: 'lede-side-4',
    title: '5 Tips For Offshore Soft Development',
    meta: featureMeta,
  },
]

export const newsletterTitle = 'Newsletter'
export const newsletterIntro =
  'Here, I focus on a range of items and features that we use in life without giving them a second thought.'
export const newsletterPlaceholder = 'Email Address'
export const newsletterSubmitLabel = 'Subcribe'
export const newsletterNote = 'You can unsubscribe us at any time'
export const newsletterSuccess = 'Thanks! You are now subscribed.'

export const mostPopularTitle = 'Most Popular'

export const mostPopularRows: MiniPost[] = [
  {
    seed: 'lede-pop-4',
    title: 'Help Finding Information Online is so easy',
    meta: featureMeta,
  },
  {
    seed: 'lede-pop-5',
    title: 'Compatible Inkjet Cartr world famous',
    meta: featureMeta,
  },
  {
    seed: 'lede-pop-6',
    title: '5 Tips For Offshore Soft Development',
    meta: featureMeta,
  },
  {
    seed: 'lede-pop-7',
    title: '5 Tips For Offshore Soft Development',
    meta: featureMeta,
  },
]

export const socialNetworksTitle = 'Social Networks'

export interface SocialRow {
  label: string
  count: string
  cta: string
  tone: 'fb' | 'tw' | 'yt' | 'rss'
}

export const socialRows: SocialRow[] = [
  { label: 'Facebook', count: '983 Likes', cta: 'Like our page', tone: 'fb' },
  { label: 'Twitter', count: '983 Followers', cta: 'Follow Us', tone: 'tw' },
  { label: 'Youtube', count: '983 Subscribers', cta: 'Subscribe', tone: 'yt' },
  { label: 'RSS', count: '983 Subscriber', cta: 'Subscribe', tone: 'rss' },
]

/* ── Footer ───────────────────────────────────────────────────────────── */

export const footerWidgets = [
  {
    title: 'Top Products',
    links: ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
  },
  {
    title: 'Quick Links',
    links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    title: 'Features',
    links: ['Jobs', 'Brand Assets', 'Investor Relations', 'Terms of Service'],
  },
  {
    title: 'Resources',
    links: ['Guides', 'Research', 'Experts', 'Agencies'],
  },
] as const

export const instagramFeedTitle = 'Instragram Feed'
export const instagramTiles = Array.from({ length: 8 }, (_, index) => ({
  seed: `lede-ig-${index + 1}`,
}))

export const copyrightPrefix = 'Copyright ©'
export const copyrightLine = 'All rights reserved | This template is made with'
export const copyrightBrand = 'Lede'
