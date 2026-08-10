export const brandName = 'Newswire'

export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const searchLabel = 'Search'
export const siteSearchPlaceholder = 'Search...'
export const emailPlaceholder = 'Enter your email'

export const navLinks = [
  'Home',
  'Categories',
  'Politics',
  'Business',
  'Health',
  'Design',
  'Sport',
  'Contact',
] as const

export const socials: ReadonlyArray<{
  label: string
  name: 'facebook' | 'twitter' | 'instagram'
}> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Instagram', name: 'instagram' },
]

export const imgUrl = (seed: string, width: number, height: number): string =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

/* ── Post model ─────────────────────────────────────────────────────────── */

export interface Post {
  seed: string
  category: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
}

/* ── Hero carousel slides ──────────────────────────────────────────────── */

export const heroSlides: Post[] = [
  {
    seed: 'newswire-hero-1',
    category: 'Food',
    title: 'News Needs to Meet Its Audiences Where They Are',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus iusto. Aliquid aspernatur eos dolore magnam, accusamus praesentium, possimus laudantium.',
    author: 'Dave Rogers',
    date: 'Jun 14',
    readTime: '3 min read',
  },
  {
    seed: 'newswire-hero-2',
    category: 'Business',
    title: 'The Quiet Resurgence of Local Newsrooms',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    author: 'Sarah Whitmore',
    date: 'Jun 13',
    readTime: '4 min read',
  },
  {
    seed: 'newswire-hero-3',
    category: 'Design',
    title: 'Why Editorial Design Still Matters Online',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
    author: 'Marcus Bell',
    date: 'Jun 12',
    readTime: '5 min read',
  },
]

/* ── Editor's Pick section ─────────────────────────────────────────────── */

export const editorsPickMain: Post = {
  seed: 'newswire-edit-main',
  category: 'News',
  title: 'How a Single Question Can Carry a Whole Story',
  excerpt:
    'Eligendi temporibus praesentium neque, voluptatum quam quibusdam. Repellendus sed fugiat veritatis iure, aliquam non beatae eos accusamus error, itaque laborum.',
  author: 'Dave Rogers',
  date: 'Jun 14',
  readTime: '3 min read',
}

export const editorsPickRows: Post[] = [
  {
    seed: 'newswire-edit-row-1',
    category: 'News',
    title: 'The City Desk That Never Sleeps',
    excerpt: '',
    author: 'Elena Ruiz',
    date: 'Jun 13',
    readTime: '2 min read',
  },
  {
    seed: 'newswire-edit-row-2',
    category: 'Health',
    title: 'Reading Habits of a Post-Scroll Generation',
    excerpt: '',
    author: 'Marcus Bell',
    date: 'Jun 12',
    readTime: '4 min read',
  },
  {
    seed: 'newswire-edit-row-3',
    category: 'Politics',
    title: 'What Editors Learned From the Last Election',
    excerpt: '',
    author: 'Sarah Whitmore',
    date: 'Jun 11',
    readTime: '3 min read',
  },
]

/* ── Trending list (numbered 01–04) ────────────────────────────────────── */

export const trendingPosts: Post[] = [
  {
    seed: 'newswire-trend-1',
    category: 'News',
    title: 'News Needs to Meet Its Audiences Where They Are',
    excerpt: '',
    author: 'Dave Rogers',
    date: 'Jun 14',
    readTime: '3 min read',
  },
  {
    seed: 'newswire-trend-2',
    category: 'Business',
    title: 'The Quiet Resurgence of Local Newsrooms',
    excerpt: '',
    author: 'Sarah Whitmore',
    date: 'Jun 13',
    readTime: '4 min read',
  },
  {
    seed: 'newswire-trend-3',
    category: 'Design',
    title: 'Why Editorial Design Still Matters Online',
    excerpt: '',
    author: 'Marcus Bell',
    date: 'Jun 12',
    readTime: '5 min read',
  },
  {
    seed: 'newswire-trend-4',
    category: 'Business',
    title: 'Inside the Morning Briefing That Readers Love',
    excerpt: '',
    author: 'Elena Ruiz',
    date: 'Jun 11',
    readTime: '2 min read',
  },
]

/* ── Featured half-post panel ──────────────────────────────────────────── */

export const featuredPost: Post = {
  seed: 'newswire-featured',
  category: 'News',
  title: 'A Weekend With the Paper of Record',
  excerpt: '',
  author: 'Dave Rogers',
  date: 'Jun 11',
  readTime: '6 min read',
}

/* ── Politics + Business category columns ──────────────────────────────── */

export interface CategoryColumn {
  heading: string
  posts: Post[]
}

export const categoryColumns: CategoryColumn[] = [
  {
    heading: 'Politics',
    posts: [
      {
        seed: 'newswire-politics-1',
        category: 'Politics',
        title: 'The Vote That Changed the City Council',
        excerpt: '',
        author: 'Elena Ruiz',
        date: 'Jun 10',
        readTime: '3 min read',
      },
      {
        seed: 'newswire-politics-2',
        category: 'Politics',
        title: 'Debating the Future of Public Transit',
        excerpt: '',
        author: 'Marcus Bell',
        date: 'Jun 9',
        readTime: '4 min read',
      },
      {
        seed: 'newswire-politics-3',
        category: 'Politics',
        title: 'A Field Guide to the Coming Session',
        excerpt: '',
        author: 'Sarah Whitmore',
        date: 'Jun 8',
        readTime: '2 min read',
      },
    ],
  },
  {
    heading: 'Business',
    posts: [
      {
        seed: 'newswire-business-1',
        category: 'Business',
        title: 'Small Shops, Big Margins: The New Retail Playbook',
        excerpt: '',
        author: 'Elena Ruiz',
        date: 'Jun 10',
        readTime: '5 min read',
      },
      {
        seed: 'newswire-business-2',
        category: 'Business',
        title: 'What the Markets Are Watching This Quarter',
        excerpt: '',
        author: 'Dave Rogers',
        date: 'Jun 9',
        readTime: '3 min read',
      },
      {
        seed: 'newswire-business-3',
        category: 'Business',
        title: 'Founders on the Art of the Slow Pivot',
        excerpt: '',
        author: 'Marcus Bell',
        date: 'Jun 8',
        readTime: '4 min read',
      },
    ],
  },
]

/* ── Recent news rows ──────────────────────────────────────────────────── */

export const recentNews: Post[] = [
  {
    seed: 'newswire-recent-1',
    category: 'News',
    title: 'The City Desk That Never Sleeps',
    excerpt: '',
    author: 'Elena Ruiz',
    date: 'Jun 14',
    readTime: '2 min read',
  },
  {
    seed: 'newswire-recent-2',
    category: 'Health',
    title: 'Reading Habits of a Post-Scroll Generation',
    excerpt: '',
    author: 'Marcus Bell',
    date: 'Jun 13',
    readTime: '4 min read',
  },
  {
    seed: 'newswire-recent-3',
    category: 'Politics',
    title: 'What Editors Learned From the Last Election',
    excerpt: '',
    author: 'Sarah Whitmore',
    date: 'Jun 12',
    readTime: '3 min read',
  },
  {
    seed: 'newswire-recent-4',
    category: 'Design',
    title: 'The Morning Commute, Reimagined',
    excerpt: '',
    author: 'Dave Rogers',
    date: 'Jun 11',
    readTime: '2 min read',
  },
]

/* ── Popular posts (numbered 01–04) ────────────────────────────────────── */

export const popularPosts: Post[] = [
  {
    seed: 'newswire-popular-1',
    category: 'News',
    title: 'News Needs to Meet Its Audiences Where They Are',
    excerpt: '',
    author: 'Dave Rogers',
    date: 'Jun 14',
    readTime: '3 min read',
  },
  {
    seed: 'newswire-popular-2',
    category: 'Business',
    title: 'Small Shops, Big Margins: The New Retail Playbook',
    excerpt: '',
    author: 'Elena Ruiz',
    date: 'Jun 10',
    readTime: '5 min read',
  },
  {
    seed: 'newswire-popular-3',
    category: 'Business',
    title: 'The Quiet Resurgence of Local Newsrooms',
    excerpt: '',
    author: 'Sarah Whitmore',
    date: 'Jun 13',
    readTime: '4 min read',
  },
  {
    seed: 'newswire-popular-4',
    category: 'Politics',
    title: 'A Field Guide to the Coming Session',
    excerpt: '',
    author: 'Marcus Bell',
    date: 'Jun 8',
    readTime: '2 min read',
  },
]
