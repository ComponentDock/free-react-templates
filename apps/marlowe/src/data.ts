/**
 * Marlowe data — recreated from the ColorLib "Callie" preview DOM
 * (https://preview.colorlib.com/theme/callie/): same content kinds
 * (categories, titles, meta, counts), paraphrased where useful. All
 * imagery uses seeded picsum placeholders.
 */

export const socialLinks = ['facebook', 'twitter', 'googleplus', 'instagram'] as const

export type SocialName = (typeof socialLinks)[number]

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  googleplus: 'Google+',
  instagram: 'Instagram',
}

export const navLinks = ['Home', 'Lifestyle', 'Fashion', 'Technology', 'Health', 'Travel'] as const

export const dropdownLinks = {
  Lifestyle: ['Fashion', 'Health'],
  Fashion: ['Travel', 'Technology'],
} as const

export const searchPlaceholder = 'Search…'

export const siteName = 'Marlowe'

export const siteDescription =
  'Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nibh venenatis cras sed felis eget velit aliquet. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi.'

export interface Post {
  seed: string
  category: string
  title: string
  meta: string
  excerpt: string
}

const meta = (date: string) => `John Doe • ${date}`

const lorem =
  'Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nibh venenatis cras sed felis eget velit aliquet. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi.'

export const hotFeature: Post = {
  seed: 'marlowe-hot-feature',
  category: 'Lifestyle',
  title: 'The Quiet Art of Slow Mornings',
  meta: meta('20 April 2018'),
  excerpt: lorem,
}

export const hotStacked: Post[] = [
  {
    seed: 'marlowe-hot-1',
    category: 'Fashion',
    title: 'Minimal Wardrobes That Actually Work',
    meta: meta('19 April 2018'),
    excerpt: lorem,
  },
  {
    seed: 'marlowe-hot-2',
    category: 'Travel',
    title: 'Four Days in a City Built on Water',
    meta: meta('18 April 2018'),
    excerpt: lorem,
  },
]

export interface PostSection {
  id: string
  title: string
  posts: Post[]
}

export const postSections: PostSection[] = [
  {
    id: 'recent',
    title: 'Recent Posts',
    posts: [
      {
        seed: 'marlowe-recent-1',
        category: 'Lifestyle',
        title: 'The Quiet Art of Slow Mornings',
        meta: meta('20 April 2018'),
        excerpt: lorem,
      },
      {
        seed: 'marlowe-recent-2',
        category: 'Fashion',
        title: 'Minimal Wardrobes That Actually Work',
        meta: meta('19 April 2018'),
        excerpt: lorem,
      },
      {
        seed: 'marlowe-recent-3',
        category: 'Travel',
        title: 'Four Days in a City Built on Water',
        meta: meta('18 April 2018'),
        excerpt: lorem,
      },
      {
        seed: 'marlowe-recent-4',
        category: 'Technology',
        title: 'Small Gadgets That Save Real Time',
        meta: meta('17 April 2018'),
        excerpt: lorem,
      },
      {
        seed: 'marlowe-recent-5',
        category: 'Health',
        title: 'Why Rest Is Part of the Routine',
        meta: meta('16 April 2018'),
        excerpt: lorem,
      },
    ],
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle',
    posts: [
      {
        seed: 'marlowe-life-1',
        category: 'Lifestyle',
        title: 'A Simpler Kitchen, a Calmer Week',
        meta: meta('15 April 2018'),
        excerpt: lorem,
      },
      {
        seed: 'marlowe-life-2',
        category: 'Lifestyle',
        title: 'Evening Rituals for Better Focus',
        meta: meta('14 April 2018'),
        excerpt: lorem,
      },
      {
        seed: 'marlowe-life-3',
        category: 'Lifestyle',
        title: 'Reading Lists for Rainy Weekends',
        meta: meta('13 April 2018'),
        excerpt: lorem,
      },
    ],
  },
  {
    id: 'fashion-travel',
    title: 'Fashion & Travel',
    posts: [
      {
        seed: 'marlowe-ft-1',
        category: 'Fashion',
        title: 'Layering Light Fabrics in Spring',
        meta: meta('12 April 2018'),
        excerpt: lorem,
      },
      {
        seed: 'marlowe-ft-2',
        category: 'Travel',
        title: 'Train Journeys Worth the Detour',
        meta: meta('11 April 2018'),
        excerpt: lorem,
      },
      {
        seed: 'marlowe-ft-3',
        category: 'Fashion',
        title: 'Neutral Palettes That Never Date',
        meta: meta('10 April 2018'),
        excerpt: lorem,
      },
    ],
  },
  {
    id: 'tech-health',
    title: 'Technology & Health',
    posts: [
      {
        seed: 'marlowe-th-1',
        category: 'Technology',
        title: 'The Tools Behind Our Weekly Flow',
        meta: meta('09 April 2018'),
        excerpt: lorem,
      },
      {
        seed: 'marlowe-th-2',
        category: 'Health',
        title: 'Morning Walks, Measured Simply',
        meta: meta('08 April 2018'),
        excerpt: lorem,
      },
      {
        seed: 'marlowe-th-3',
        category: 'Technology',
        title: 'Why Analog Still Wins Sometimes',
        meta: meta('07 April 2018'),
        excerpt: lorem,
      },
    ],
  },
]

export const loadMoreLabel = 'Load More'

export const socialWidgetTitle = 'Social Media'

export interface SocialTile {
  name: SocialName
  followers: string
}

export const socialTiles: SocialTile[] = [
  { name: 'facebook', followers: '21.2K Followers' },
  { name: 'twitter', followers: '10.2K Followers' },
  { name: 'googleplus', followers: '5K Followers' },
]

export const categoriesTitle = 'Categories'

export interface CategoryItem {
  name: string
  count: number
}

export const categories: CategoryItem[] = [
  { name: 'Lifestyle', count: 451 },
  { name: 'Fashion', count: 230 },
  { name: 'Technology', count: 40 },
  { name: 'Travel', count: 38 },
  { name: 'Health', count: 24 },
]

export const newsletterTitle = 'Newsletter'

export const newsletterPlaceholder = 'Enter your email'

export const subscribeLabel = 'Subscribe'

export const popularTitle = 'Popular Posts'

export const popularPosts: Post[] = [
  {
    seed: 'marlowe-pop-1',
    category: 'Lifestyle',
    title: 'The Quiet Art of Slow Mornings',
    meta: meta('20 April 2018'),
    excerpt: lorem,
  },
  {
    seed: 'marlowe-pop-2',
    category: 'Fashion',
    title: 'Minimal Wardrobes That Actually Work',
    meta: meta('19 April 2018'),
    excerpt: lorem,
  },
  {
    seed: 'marlowe-pop-3',
    category: 'Travel',
    title: 'Four Days in a City Built on Water',
    meta: meta('18 April 2018'),
    excerpt: lorem,
  },
  {
    seed: 'marlowe-pop-4',
    category: 'Health',
    title: 'Why Rest Is Part of the Routine',
    meta: meta('16 April 2018'),
    excerpt: lorem,
  },
]

export const adLabel = 'Sample Ad 728x90'

export const instagramTitle = 'Instagram'

export const instagramTiles = Array.from({ length: 6 }, (_, i) => ({
  seed: `marlowe-insta-${i + 1}`,
  label: `Instagram post ${i + 1}`,
}))

export const footerTags = [
  'Social',
  'Lifestyle',
  'Blog',
  'Travel',
  'Technology',
  'Fashion',
  'Life',
  'News',
  'Magazine',
  'Food',
  'Health',
] as const

export const footerLinks = ['Home', 'About Us', 'Contacts', 'Advertise', 'Privacy'] as const

/** Build a deterministic picsum placeholder URL for a seed. */
export function imgUrl(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`
}
