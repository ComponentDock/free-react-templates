export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/**
 * The three category hues are theme tokens, not literals: a card names its
 * tone and the article element sets that one value as `--chip`, which the
 * chip's text, the avatar disc and the link's focus ring all read.
 */
export const CATEGORY_HUES = {
  blue: 'var(--color-chip-blue)',
  green: 'var(--color-chip-green)',
  magenta: 'var(--color-chip-magenta)',
} as const

export type CategoryTone = keyof typeof CATEGORY_HUES

export interface Article {
  id: string
  category: string
  tone: CategoryTone
  initials: string
  title: string
  excerpt: string
  author: string
  date: { iso: string; label: string }
  readTime: string
  photo: { src: string; alt: string }
}

export const JOURNAL = {
  id: 'journal',
  title: 'From the journal',
  allLabel: 'All articles',
} as const

export const ARTICLES: Article[] = [
  {
    id: 'post-1',
    category: 'Productivity',
    tone: 'blue',
    initials: 'HN',
    title: 'The two-hour morning: how we plan deep work around meetings',
    excerpt:
      'A simple calendar rule gave our team back ten focused hours a week. Here is the template we use and what we had to give up.',
    author: 'Hana Novak',
    date: { iso: '2026-09-18', label: '18 Sep 2026' },
    readTime: '6 min read',
    photo: {
      src: 'https://picsum.photos/seed/octavo-1/800/500',
      alt: 'Laptop, notebook and coffee cup on a wooden desk',
    },
  },
  {
    id: 'post-2',
    category: 'Development',
    tone: 'green',
    initials: 'JP',
    title: 'Container queries in production: what changed after six months',
    excerpt:
      'We rebuilt our card components to respond to their slot instead of the viewport. Fewer breakpoints, fewer bugs, one surprise.',
    author: 'Jonas Pereira',
    date: { iso: '2026-09-11', label: '11 Sep 2026' },
    readTime: '9 min read',
    photo: {
      src: 'https://picsum.photos/seed/octavo-2/800/500',
      alt: 'Laptop showing code next to a small plant',
    },
  },
  {
    id: 'post-3',
    category: 'Life outside work',
    tone: 'magenta',
    initials: 'EK',
    title: 'What a balcony garden taught me about shipping small',
    excerpt:
      'Tomatoes do not care about your roadmap. Notes from a season of planting, failing and trying again every weekend.',
    author: 'Elif Kaya',
    date: { iso: '2026-09-02', label: '2 Sep 2026' },
    readTime: '4 min read',
    photo: {
      src: 'https://picsum.photos/seed/octavo-3/800/500',
      alt: 'Garden trowel and fresh soil on a dark surface',
    },
  },
]
