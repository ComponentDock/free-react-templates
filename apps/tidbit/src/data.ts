/* ── Brand & chrome ─────────────────────────────────────────────────────── */

export const brandName = 'Tidbit'

export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const searchToggleLabel = 'Open search'
export const searchCloseLabel = 'Close search'
export const searchFieldLabel = 'Search the site'
export const searchPlaceholder = 'Search...'
export const searchSubmitLabel = 'Submit search'

export const navLinks = ['Home', 'Politics', 'Tech', 'Entertainment', 'Travel', 'Sports'] as const

/* ── Post model ─────────────────────────────────────────────────────────── */

export type PillColor = 'primary' | 'danger' | 'success' | 'warning' | 'secondary'

interface PostCategory {
  label: string
  color: PillColor
}

export interface Post {
  seed: string
  title: string
  date: string
  categories: ReadonlyArray<PostCategory>
}

export interface RecentPost extends Post {
  author: string
  avatar: string
  excerpt: string
}

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Hero featured grid (asymmetric 3 columns) ──────────────────────────── */

const aiTitle = 'The AI magically removes moving objects from videos.'
const fintechTitle = 'The 20 Biggest Fintech Companies In America 2019'

export const heroColumns: readonly [ReadonlyArray<Post>, ReadonlyArray<Post>, ReadonlyArray<Post>] =
  [
    [
      { seed: 'tidbit-hero-1', title: aiTitle, date: 'July 19, 2019', categories: [] },
      { seed: 'tidbit-hero-2', title: aiTitle, date: 'July 19, 2019', categories: [] },
    ],
    [
      {
        seed: 'tidbit-hero-3',
        title: aiTitle,
        date: 'July 19, 2019',
        categories: [
          { label: 'Travel', color: 'danger' },
          { label: 'Food', color: 'primary' },
        ],
      },
    ],
    [
      { seed: 'tidbit-hero-4', title: fintechTitle, date: 'July 19, 2019', categories: [] },
      { seed: 'tidbit-hero-5', title: fintechTitle, date: 'July 19, 2019', categories: [] },
    ],
  ]

/* ── Recent Posts (3×3 grid) ────────────────────────────────────────────── */

export const recentPosts: ReadonlyArray<RecentPost> = [
  {
    seed: 'tidbit-post-1',
    title: 'The AI magically removes moving objects from videos.',
    date: 'July 19, 2019',
    categories: [{ label: 'Politics', color: 'secondary' }],
    author: 'Carrol Atkinson',
    avatar: 'tidbit-author-1',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae!',
  },
  {
    seed: 'tidbit-post-2',
    title: 'Five quiet habits of the most productive teams',
    date: 'July 19, 2019',
    categories: [{ label: 'Nature', color: 'success' }],
    author: 'Carrol Atkinson',
    avatar: 'tidbit-author-2',
    excerpt:
      'Illo, aliquid, dicta beatae quia porro id est. A small team that masters focus can outrun a large one that never stops churning.',
  },
  {
    seed: 'tidbit-post-3',
    title: 'Why slow travel is the fastest way to unwind',
    date: 'July 19, 2019',
    categories: [{ label: 'Travel', color: 'warning' }],
    author: 'Carrol Atkinson',
    avatar: 'tidbit-author-3',
    excerpt:
      'Consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae!',
  },
  {
    seed: 'tidbit-post-4',
    title: 'A beginner guide to urban vegetable gardens',
    date: 'July 19, 2019',
    categories: [{ label: 'Politics', color: 'secondary' }],
    author: 'Carrol Atkinson',
    avatar: 'tidbit-author-4',
    excerpt:
      'Aliquid, dicta beatae quia porro id est. Even a small balcony can grow tomatoes, herbs and a little peace of mind.',
  },
  {
    seed: 'tidbit-post-5',
    title: 'Inside the studio of an indie game developer',
    date: 'July 19, 2019',
    categories: [{ label: 'Nature', color: 'success' }],
    author: 'Carrol Atkinson',
    avatar: 'tidbit-author-5',
    excerpt:
      'Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae.',
  },
  {
    seed: 'tidbit-post-6',
    title: 'What marathon runners eat on race day',
    date: 'July 19, 2019',
    categories: [{ label: 'Sports', color: 'danger' }],
    author: 'Carrol Atkinson',
    avatar: 'tidbit-author-6',
    excerpt:
      'Sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.',
  },
  {
    seed: 'tidbit-post-7',
    title: 'The comeback of the printed newspaper',
    date: 'July 19, 2019',
    categories: [{ label: 'Nature', color: 'success' }],
    author: 'Carrol Atkinson',
    avatar: 'tidbit-author-7',
    excerpt:
      'Dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.',
  },
  {
    seed: 'tidbit-post-8',
    title: 'Protecting wild rivers one cleanup at a time',
    date: 'July 19, 2019',
    categories: [{ label: 'Sports', color: 'danger' }],
    author: 'Carrol Atkinson',
    avatar: 'tidbit-author-8',
    excerpt:
      'Explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.',
  },
  {
    seed: 'tidbit-post-9',
    title: 'How to photograph city lights after dark',
    date: 'July 19, 2019',
    categories: [{ label: 'Tech', color: 'secondary' }],
    author: 'Carrol Atkinson',
    avatar: 'tidbit-author-9',
    excerpt:
      'Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.',
  },
]

/* ── Pagination ─────────────────────────────────────────────────────────── */

export const paginationPages: ReadonlyArray<number | string> = [1, 2, 3, 4, '…', 15]
export const currentPage = 1

/* ── Retro layout section ───────────────────────────────────────────────── */

export const retroPosts: readonly [Post, Post, Post, Post] = [
  {
    seed: 'tidbit-retro-1',
    title: fintechTitle,
    date: 'February 12, 2019',
    categories: [{ label: 'Travel', color: 'danger' }],
  },
  {
    seed: 'tidbit-retro-2',
    title: fintechTitle,
    date: 'February 12, 2019',
    categories: [{ label: 'Nature', color: 'success' }],
  },
  {
    seed: 'tidbit-retro-3',
    title: fintechTitle,
    date: 'February 12, 2019',
    categories: [{ label: 'Sports', color: 'danger' }],
  },
  {
    seed: 'tidbit-retro-4',
    title: fintechTitle,
    date: 'February 12, 2019',
    categories: [{ label: 'Lifestyle', color: 'warning' }],
  },
]

/* ── Newsletter ─────────────────────────────────────────────────────────── */

export const subscribeHeading = 'Subscribe to our newsletter'
export const subscribeDescription =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nesciunt error illum a explicabo, ipsam nostrum.'
export const emailPlaceholder = 'Enter your email address'
export const emailLabel = 'Email address'
export const subscribeButtonLabel = 'Subscribe'
export const invalidEmailMessage = 'Please enter a valid email address.'
export const successMessage = 'Thanks for subscribing! Please check your inbox.'

/* ── Footer ─────────────────────────────────────────────────────────────── */

export const footerAboutHeading = 'About Us'
export const footerAboutText =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat reprehenderit magnam deleniti quasi saepe, consequatur atque sequi delectus dolore veritatis obcaecati quae, repellat eveniet omnis, voluptatem in. Soluta, eligendi, architecto.'
export const footerNavLinks = ['About Us', 'Advertise', 'Careers', 'Subscribes'] as const
export const footerCategoryLinks = ['Travel', 'Lifestyle', 'Sports', 'Nature'] as const
export const connectHeading = 'Connect With Us'

export type SocialName = 'facebook' | 'twitter' | 'instagram' | 'rss' | 'envelope'

export const socials: ReadonlyArray<{ label: string; name: SocialName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'RSS', name: 'rss' },
  { label: 'Email', name: 'envelope' },
]
