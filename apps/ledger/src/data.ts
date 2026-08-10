/**
 * Ledger data — recreated from the ColorLib "Daren" preview DOM
 * (https://preview.colorlib.com/theme/daren/): same content kinds
 * (category label, serif headline, meta "By Michal / March 30, 2019",
 * comment/like/share row), titles kept close to the original placeholder
 * copy. All imagery uses seeded picsum placeholders.
 */

export const siteName = 'Ledger.'

export const searchPlaceholder = 'Search here'
export const sidebarSearchPlaceholder = 'Search Keyword'
export const newsletterPlaceholder = 'Enter email address'

export interface NavItem {
  label: string
  active?: boolean
  dropdown?: readonly string[]
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', active: true },
  { label: 'Archive' },
  { label: 'Category' },
  { label: 'Contact' },
  { label: 'Pages', dropdown: ['Single blog', 'elements'] },
]

export const socialNames = ['facebook', 'twitter', 'instagram'] as const

export const socialLabels: Record<string, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
}

export interface Post {
  category: string
  title: string
  meta: string
  seed: string
}

export function imgUrl(seed: string, w: number, h: number): string {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`
}

const authorMeta = 'By Michal / March 30, 2019'

export interface BannerPost extends Post {
  width: number
  height: number
}

export const bannerPosts: readonly BannerPost[] = [
  {
    category: 'Creative & Design',
    title: 'All said replenish years void kind say void',
    meta: authorMeta,
    seed: 'ledger-banner-1',
    width: 900,
    height: 810,
  },
  {
    category: 'Creative & Design',
    title: 'Behold given land one first face fish which all said male fruit void king saying',
    meta: authorMeta,
    seed: 'ledger-banner-2',
    width: 1600,
    height: 810,
  },
]

export const featuredPosts: readonly Post[] = [
  {
    category: 'creative design',
    title: 'Subdue lesser beast winged bearing meat tree one',
    meta: authorMeta,
    seed: 'ledger-feature-1',
  },
  {
    category: 'Art & illustration',
    title: 'Hath form you given fac one under behold night give',
    meta: authorMeta,
    seed: 'ledger-feature-2',
  },
  {
    category: 'creative design',
    title: 'Greater whales morning firsts you moveth morning',
    meta: authorMeta,
    seed: 'ledger-feature-3',
  },
]

export interface CategoryPost {
  pill: string
  title: string
  meta: string
  seed: string
}

export const categoryPosts: readonly CategoryPost[] = [
  {
    pill: 'abstract design',
    title: 'Called face there light this said wherein replenish sadin made green grass',
    meta: authorMeta,
    seed: 'ledger-category-1',
  },
  {
    pill: 'illustration',
    title: 'Called face there light this said wherein replenish sadin made green grass',
    meta: authorMeta,
    seed: 'ledger-category-2',
  },
  {
    pill: 'brand identity',
    title: 'Called face there light this said wherein replenish sadin made green grass',
    meta: authorMeta,
    seed: 'ledger-category-3',
  },
]

export interface ListPost {
  pill: string
  title: string
  meta: string
  seed: string
}

export const listPosts: readonly ListPost[] = [
  {
    pill: 'Tours & travel',
    title: 'Subdue lesser beast winged bearing meat tree one',
    meta: authorMeta,
    seed: 'ledger-list-1',
  },
  {
    pill: 'branding',
    title: 'Subdue lesser beast winged bearing meat tree one',
    meta: authorMeta,
    seed: 'ledger-list-2',
  },
  {
    pill: 'digital art',
    title: 'Subdue lesser beast winged bearing meat tree one',
    meta: authorMeta,
    seed: 'ledger-list-3',
  },
  {
    pill: 'abstract design',
    title: 'Subdue lesser beast winged bearing meat tree one',
    meta: authorMeta,
    seed: 'ledger-list-4',
  },
  {
    pill: 'illustration',
    title: 'Subdue lesser beast winged bearing meat tree one',
    meta: authorMeta,
    seed: 'ledger-list-5',
  },
]

export const loadingMoreLabel = 'LOADING MORE'

export const feedPosts: readonly Post[] = [
  {
    category: 'creative design',
    title: 'Subdue lesser beast winged bearing meat tree one',
    meta: authorMeta,
    seed: 'ledger-feed-1',
  },
  {
    category: 'creative design',
    title: 'Subdue lesser beast winged bearing meat tree one',
    meta: authorMeta,
    seed: 'ledger-feed-2',
  },
  {
    category: 'creative design',
    title: 'Subdue lesser beast winged bearing meat tree one',
    meta: authorMeta,
    seed: 'ledger-feed-3',
  },
]

export interface CategoryLink {
  name: string
  count: number
}

export const sidebarCategories: readonly CategoryLink[] = [
  { name: 'Culture', count: 12 },
  { name: 'Creative Design', count: 15 },
  { name: 'Illustration', count: 25 },
  { name: 'Production', count: 16 },
  { name: 'Mangement', count: 10 },
  { name: 'Branding', count: 15 },
]

export const popularTags = ['Nature', 'business', 'tech', 'News', 'html'] as const

export const postIconRow = ['2 Comment', '0 Like', 'Share'] as const

export const footerAbout =
  'Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you will get. Realize that things will be hard at first, but the rewards will be worth it.'

export interface ContactRow {
  heading: string
  detail: string
  icon: 'home' | 'headphones'
}

export const contactRows: readonly ContactRow[] = [
  {
    heading: 'Los angeles, United States',
    detail: '659, Rocky beach bullevard, santa monica, Rocky beach, USA.',
    icon: 'home',
  },
  {
    heading: '+44 6532 986 652',
    detail: 'Mon to Fri 9am to 6 pm.',
    icon: 'headphones',
  },
]

export const newsletterIntro =
  'Stay updated with our latest trends The more effort you put into improving your skills.'
