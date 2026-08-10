/**
 * Chronicle data — recreated from the ColorLib "Content" preview DOM
 * (https://preview.colorlib.com/theme/content/): same content kinds
 * (category, serif title, excerpt, meta "May 10, 2020 • 5 mins read"),
 * paraphrased where useful. All imagery uses seeded picsum placeholders.
 */

export const siteName = 'Chronicle.'

export const searchPlaceholder = 'Enter keyword and hit enter...'

export interface NavItem {
  label: string
  active?: boolean
  dropdown?: readonly string[]
}

export const navItems: readonly NavItem[] = [
  { label: 'Food and Drinks', active: true },
  { label: 'Categories', dropdown: ['Menu One', 'Menu Two', 'Menu Three'] },
  { label: 'Travel' },
  { label: 'Elements' },
  { label: 'Inner Page' },
  { label: 'Contact us' },
]

/** Nested submenu under "Menu Two" in the Categories dropdown. */
export const subMenuLinks = ['Sub Menu One', 'Sub Menu Two', 'Sub Menu Three'] as const

export const shareNames = ['facebook', 'twitter', 'pinterest'] as const

export const footerSocials = ['facebook', 'twitter', 'linkedin', 'youtube'] as const

export const socialLabels: Record<string, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  pinterest: 'Pinterest',
  linkedin: 'Linkedin',
  youtube: 'YouTube',
}

export interface Post {
  seed: string
  category: string
  title: string
  excerpt: string
  meta: string
}

export function imgUrl(seed: string, w: number, h: number): string {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`
}

const heroCopy =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export const heroSlides: Post[] = [
  {
    seed: 'chronicle-hero-1',
    category: 'Food and Drink',
    title: 'Far far away behind the Word Mountains far from Away',
    excerpt: heroCopy,
    meta: 'May 10, 2020 • 5 mins read',
  },
  {
    seed: 'chronicle-hero-2',
    category: 'Food and Drink',
    title: 'A little taste of the mountains, quiet and bright',
    excerpt: heroCopy,
    meta: 'May 8, 2020 • 4 mins read',
  },
  {
    seed: 'chronicle-hero-3',
    category: 'Food and Drink',
    title: 'Golden hours for slow mornings and warm bread',
    excerpt: heroCopy,
    meta: 'May 5, 2020 • 6 mins read',
  },
]

export const highlightVertical: Post[] = [
  {
    seed: 'chronicle-v1',
    category: 'Lifestyle',
    title: 'Slow living, one quiet morning at a time',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    meta: 'May 10, 2020 • 5 mins read',
  },
  {
    seed: 'chronicle-v2',
    category: 'Food and Drink',
    title: 'A table set for the ones we love',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    meta: 'May 9, 2020 • 4 mins read',
  },
]

export const highlightHorizontal: Post[] = [
  {
    seed: 'chronicle-h1',
    category: 'Lifestyle',
    title: 'Far far away behind the Word Mountains far from Away',
    excerpt: heroCopy,
    meta: 'May 10, 2020 • 5 mins read',
  },
  {
    seed: 'chronicle-h2',
    category: 'Food and Drink',
    title: 'Warm bread, good coffee and nowhere to be',
    excerpt: heroCopy,
    meta: 'May 8, 2020 • 4 mins read',
  },
  {
    seed: 'chronicle-h3',
    category: 'Travel',
    title: 'Beyond the mountains, the rivers sing',
    excerpt: heroCopy,
    meta: 'May 5, 2020 • 6 mins read',
  },
]

export const lifestylePosts: Post[] = [
  {
    seed: 'chronicle-l1',
    category: 'Lifestyle',
    title: 'Slow mornings start the day right',
    excerpt: heroCopy,
    meta: 'May 10, 2020 • 5 mins read',
  },
  {
    seed: 'chronicle-l2',
    category: 'Lifestyle',
    title: 'A quiet corner for reading and tea',
    excerpt: heroCopy,
    meta: 'May 8, 2020 • 4 mins read',
  },
  {
    seed: 'chronicle-l3',
    category: 'Lifestyle',
    title: 'Small habits, calmer weeks',
    excerpt: heroCopy,
    meta: 'May 5, 2020 • 6 mins read',
  },
]

export const travelPosts: Post[] = [
  {
    seed: 'chronicle-t1',
    category: 'Travel',
    title: 'Far from the cities, near the clouds',
    excerpt: heroCopy,
    meta: 'May 10, 2020 • 5 mins read',
  },
  {
    seed: 'chronicle-t2',
    category: 'Travel',
    title: 'Winding roads and mountain towns',
    excerpt: heroCopy,
    meta: 'May 8, 2020 • 4 mins read',
  },
  {
    seed: 'chronicle-t3',
    category: 'Travel',
    title: 'A river walk in the early light',
    excerpt: heroCopy,
    meta: 'May 5, 2020 • 6 mins read',
  },
]

export const foodDrinkPosts: Post[] = [
  {
    seed: 'chronicle-f1',
    category: 'Food and Drink',
    title: 'Bread, butter and the Sunday table',
    excerpt: heroCopy,
    meta: 'May 10, 2020 • 5 mins read',
  },
  {
    seed: 'chronicle-f2',
    category: 'Food and Drink',
    title: 'A bowl of soup for rainy days',
    excerpt: heroCopy,
    meta: 'May 8, 2020 • 4 mins read',
  },
  {
    seed: 'chronicle-f3',
    category: 'Food and Drink',
    title: 'Coffee notes from the highlands',
    excerpt: heroCopy,
    meta: 'May 5, 2020 • 6 mins read',
  },
  {
    seed: 'chronicle-f4',
    category: 'Food and Drink',
    title: 'The orchard at golden hour',
    excerpt: heroCopy,
    meta: 'May 3, 2020 • 7 mins read',
  },
]

export const newsletterTitle = 'Subscribe to Newsletter'

export const newsletterCopy =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export const newsletterPlaceholder = 'Enter your email'

export const subscribeLabel = 'Subscribe'

export const footerLegalLinks = ['Terms & Conditions', 'Privacy Policy'] as const
