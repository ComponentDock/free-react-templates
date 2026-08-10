export const brandName = 'Newsprint'

export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const searchLabel = 'Search'
export const siteSearchPlaceholder = 'Search...'

export const navLinks = ['Home', 'Categories', 'About', 'Contact'] as const

export const categoryLinks = ['Travel', 'Food', 'Technology', 'Business'] as const

export const socials: ReadonlyArray<{
  label: string
  name: 'facebook' | 'twitter' | 'linkedin' | 'youtube'
}> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'LinkedIn', name: 'linkedin' },
  { label: 'YouTube', name: 'youtube' },
]

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Post model ─────────────────────────────────────────────────────────── */

export interface Post {
  seed: string
  categories: string[]
  date: string
  title: string
  excerpt: string
  author: string
  avatar: string
}

/* ── Trending slider (large horizontal feature cards) ──────────────────── */

export const trendingPosts: Post[] = [
  {
    seed: 'newsprint-trend-1',
    categories: ['Business', 'Travel'],
    date: 'July 2, 2026',
    title: 'Your most unhappy customers are your greatest source of learning.',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    author: 'Sergy Campbell',
    avatar: 'newsprint-avatar-1',
  },
  {
    seed: 'newsprint-trend-2',
    categories: ['Technology'],
    date: 'July 1, 2026',
    title: 'Small companies are the best source of bold new ideas.',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    author: 'Sarah Whitmore',
    avatar: 'newsprint-avatar-2',
  },
  {
    seed: 'newsprint-trend-3',
    categories: ['Food'],
    date: 'June 28, 2026',
    title: 'The most important thing is to try and inspire people.',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
    author: 'Daniel Reeves',
    avatar: 'newsprint-avatar-3',
  },
]

/* ── Featured grid (3 vertical cards) ──────────────────────────────────── */

export const featuredPosts: Post[] = [
  {
    seed: 'newsprint-feat-1',
    categories: ['Business'],
    date: 'June 25, 2026',
    title: 'The art of growing a small business in a crowded market.',
    excerpt: 'Far far away, behind the word mountains, far from the countries.',
    author: 'Sergy Campbell',
    avatar: 'newsprint-avatar-1',
  },
  {
    seed: 'newsprint-feat-2',
    categories: ['Travel'],
    date: 'June 23, 2026',
    title: 'Wander further: hidden corners worth the long journey.',
    excerpt: 'A small river named Duden flows by their place and supplies it.',
    author: 'Sarah Whitmore',
    avatar: 'newsprint-avatar-2',
  },
  {
    seed: 'newsprint-feat-3',
    categories: ['Technology'],
    date: 'June 20, 2026',
    title: 'Why simple tools still win in a world of complex stacks.',
    excerpt: 'Even the all-powerful Pointing has no control about the blind texts.',
    author: 'Daniel Reeves',
    avatar: 'newsprint-avatar-3',
  },
]

/* ── Most popular slider (horizontal rows) ─────────────────────────────── */

export const popularPosts: Post[] = [
  {
    seed: 'newsprint-pop-1',
    categories: ['Business'],
    date: 'June 18, 2026',
    title: 'Lessons from a decade of building products people love.',
    excerpt: 'Far far away, behind the word mountains.',
    author: 'Sergy Campbell',
    avatar: 'newsprint-avatar-1',
  },
  {
    seed: 'newsprint-pop-2',
    categories: ['Travel'],
    date: 'June 16, 2026',
    title: 'A quiet morning in the old town of Lisbon.',
    excerpt: 'A small river named Duden flows by their place.',
    author: 'Sarah Whitmore',
    avatar: 'newsprint-avatar-2',
  },
  {
    seed: 'newsprint-pop-3',
    categories: ['Food'],
    date: 'June 14, 2026',
    title: 'Street food trails: eating your way through a city.',
    excerpt: 'Even the all-powerful Pointing has no control.',
    author: 'Daniel Reeves',
    avatar: 'newsprint-avatar-3',
  },
  {
    seed: 'newsprint-pop-4',
    categories: ['Technology'],
    date: 'June 12, 2026',
    title: 'The quiet return of the personal blog.',
    excerpt: 'One day however a small line of blind text by the name.',
    author: 'Maya Lindholm',
    avatar: 'newsprint-avatar-4',
  },
]

/* ── Sports + Business category lists ──────────────────────────────────── */

export interface CategoryBlock {
  heading: string
  posts: Post[]
}

export const categoryBlocks: CategoryBlock[] = [
  {
    heading: 'Sports',
    posts: [
      {
        seed: 'newsprint-sport-1',
        categories: ['Sports'],
        date: 'June 10, 2026',
        title: 'Marathon season: how to pace your first race.',
        excerpt: '',
        author: 'Maya Lindholm',
        avatar: 'newsprint-avatar-4',
      },
      {
        seed: 'newsprint-sport-2',
        categories: ['Sports'],
        date: 'June 8, 2026',
        title: 'Training smarter with heart-rate zones.',
        excerpt: '',
        author: 'Sergy Campbell',
        avatar: 'newsprint-avatar-1',
      },
      {
        seed: 'newsprint-sport-3',
        categories: ['Sports'],
        date: 'June 6, 2026',
        title: 'The strategy behind a winning relay team.',
        excerpt: '',
        author: 'Daniel Reeves',
        avatar: 'newsprint-avatar-3',
      },
    ],
  },
  {
    heading: 'Business',
    posts: [
      {
        seed: 'newsprint-biz-1',
        categories: ['Business'],
        date: 'June 9, 2026',
        title: 'Pricing your work without guessing.',
        excerpt: '',
        author: 'Sarah Whitmore',
        avatar: 'newsprint-avatar-2',
      },
      {
        seed: 'newsprint-biz-2',
        categories: ['Business'],
        date: 'June 7, 2026',
        title: 'Building a brand that outlives a founder.',
        excerpt: '',
        author: 'Maya Lindholm',
        avatar: 'newsprint-avatar-4',
      },
      {
        seed: 'newsprint-biz-3',
        categories: ['Business'],
        date: 'June 5, 2026',
        title: 'Why customer feedback beats intuition.',
        excerpt: '',
        author: 'Sergy Campbell',
        avatar: 'newsprint-avatar-1',
      },
    ],
  },
]

/* ── Footer ────────────────────────────────────────────────────────────── */

export const footerWidgetColumns: ReadonlyArray<{
  heading: string
  links: string[]
}> = [
  { heading: 'Categories', links: ['Business', 'Travel', 'Food', 'Technology'] },
  { heading: 'Company', links: ['About Us', 'Contact', 'Careers', 'Press'] },
  { heading: 'Legal', links: ['Terms & Conditions', 'Privacy Policy', 'Cookies'] },
]
