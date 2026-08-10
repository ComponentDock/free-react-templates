export const brandName = 'Ochre'

export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const toggleDarkLabel = 'Toggle dark mode'
export const searchLabel = 'Search'

export const navLinks = ['Home', 'Archive', 'Category', 'Contact'] as const

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Banner (3 posts) ─────────────────────────────────────────────────── */

export interface BannerPost {
  seed: string
  category: string
  title: string
  date: string
}

export const bannerPosts: BannerPost[] = [
  {
    seed: 'ochre-banner-1',
    category: 'Fashion / Life style',
    title: 'All said replenish years void kind say void',
    date: 'Posted on April 15, 2026',
  },
  {
    seed: 'ochre-banner-2',
    category: 'Fashion / Life style',
    title: 'Your life is a product of the choices you keep',
    date: 'Posted on April 14, 2026',
  },
  {
    seed: 'ochre-banner-3',
    category: 'Fashion / Life style',
    title: 'Winged lesser beasts and fruitful days ahead',
    date: 'Posted on April 13, 2026',
  },
]

/* ── Blog grid (8 posts) ──────────────────────────────────────────────── */

export interface BlogPost {
  seed: string
  category: string
  title: string
  date: string
}

export const posts: BlogPost[] = [
  {
    seed: 'ochre-p1',
    category: 'Culture',
    title: 'All said replenish years void kind say void',
    date: 'Posted on April 12, 2026',
  },
  {
    seed: 'ochre-p2',
    category: 'Creative Design',
    title: 'Your life is a product your choices make',
    date: 'Posted on April 11, 2026',
  },
  {
    seed: 'ochre-p3',
    category: 'Illustration',
    title: 'Subdue lesser beast winged fruitful days',
    date: 'Posted on April 10, 2026',
  },
  {
    seed: 'ochre-p4',
    category: 'Production',
    title: 'Heaven fruitful does not appear creeping',
    date: 'Posted on April 9, 2026',
  },
  {
    seed: 'ochre-p5',
    category: 'Management',
    title: 'Gathering seasons under one steady light',
    date: 'Posted on April 8, 2026',
  },
  {
    seed: 'ochre-p6',
    category: 'Branding',
    title: 'The slow craft of a well-worn identity',
    date: 'Posted on April 7, 2026',
  },
  {
    seed: 'ochre-p7',
    category: 'Lifestyle',
    title: 'Small rituals that keep a day in order',
    date: 'Posted on April 6, 2026',
  },
  {
    seed: 'ochre-p8',
    category: 'Culture',
    title: 'Notes from a studio by the river',
    date: 'Posted on April 5, 2026',
  },
]

/* ── Sidebar ──────────────────────────────────────────────────────────── */

export const categories = [
  'Culture',
  'Creative Design',
  'Illustration',
  'Production',
  'Management',
  'Branding',
] as const

export interface FeedItem {
  seed: string
  title: string
  date: string
}

export const popularFeeds: FeedItem[] = [
  {
    seed: 'ochre-feed-1',
    title: 'Subdue lesser beast winged fruitful',
    date: 'April 3, 2026',
  },
  {
    seed: 'ochre-feed-2',
    title: 'Gathering seasons one steady light',
    date: 'March 28, 2026',
  },
  {
    seed: 'ochre-feed-3',
    title: 'Heaven fruitful creeping days',
    date: 'March 19, 2026',
  },
]

export const sidebarSearchLabel = 'Search posts'
export const emailLabel = 'Email address'
export const subscribeLabel = 'Subscribe'
export const categoriesHeading = 'Categories'
export const feedsHeading = 'Popular Feeds'

/* ── Social strip ─────────────────────────────────────────────────────── */

export const socialTileLabel = (n: number): string => `Instagram tile ${n}`

export const socialTiles = Array.from({ length: 6 }, (_, i) => ({
  seed: `ochre-social-${i + 1}`,
}))

/* ── Footer ───────────────────────────────────────────────────────────── */

export const aboutHeading = 'About Us'
export const aboutText =
  "Heaven fruitful doesn't over the lesser days appear creeping. The seasons turn and the work stays honest, one small post at a time."
export const contactHeading = 'Contact Info'
export const contactAddress = 'Address : Your address goes here'
export const contactPhone = 'Phone : +8880 44338899'
export const contactEmail = 'Email : info@colorlib.com'
export const linksHeading = 'Important Link'
export const importantLinks = [
  'WHMCS-bridge',
  'Search Domain',
  'My Account',
  'Shopping Cart',
  'Our Main Shop',
] as const
export const newsletterHeading = 'Newsletter'
export const newsletterText =
  "Heaven fruitful doesn't over lesser in days. Appear creeping seasons under one light."
export const newsletterLabel = 'Newsletter email'
export const creditPrefix = 'All rights reserved | This template is made with'
export const creditBrand = 'Colorlib'
