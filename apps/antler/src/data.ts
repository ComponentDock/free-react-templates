/* ── Brand & chrome ─────────────────────────────────────────────────────── */

/** Navbar wordmark (lowercase, per the reference). */
export const brandName = 'antler'
/** Footer logo / hero wordmark (capitalized). */
export const brandTitle = 'Antler'

export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

export const navLinks = ['Home', 'Articles', 'About', 'Contact'] as const

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Hero ───────────────────────────────────────────────────────────────── */

export const heroName = 'Avery Antler'
export const heroHeadline = "Hello! I'm Avery Antler, I Provide Newest News Update About Digital"
export const heroIntro =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
export const heroBio =
  'A digital news editor covering technology, design and the people building the web.'

/* ── Article rows ───────────────────────────────────────────────────────── */

export interface Post {
  seed: string
  title: string
  date: string
  comments: string
  author: string
  role: string
  avatar: string
}

/* Six full-width rows, alternating white / ink (#313b44). Image seeds skip
   "4" to mirror the source (image_1..image_8 minus image_4). */
export const posts: ReadonlyArray<Post> = [
  {
    seed: 'antler-1',
    title: 'Turning a digital brand into a real world experience',
    date: 'Sept. 27, 2020',
    comments: '3',
    author: 'Mara Quinn',
    role: 'CEO, Product Designer',
    avatar: 'antler-a1',
  },
  {
    seed: 'antler-2',
    title: 'Ten ideas to grow a small brand into a giant one',
    date: 'Sept. 27, 2020',
    comments: '3',
    author: 'Eli Hart',
    role: 'Creative Director',
    avatar: 'antler-a2',
  },
  {
    seed: 'antler-3',
    title: 'A first look at the new all-in-one content platform',
    date: 'Sept. 27, 2020',
    comments: '3',
    author: 'Nia Brooks',
    role: 'Editor-in-Chief',
    avatar: 'antler-a3',
  },
  {
    seed: 'antler-5',
    title: 'Why remote-first teams ship better digital products',
    date: 'Sept. 27, 2020',
    comments: '3',
    author: 'Owen Reyes',
    role: 'Lead Developer',
    avatar: 'antler-a4',
  },
  {
    seed: 'antler-6',
    title: 'Designing interfaces that feel invisible to users',
    date: 'Sept. 27, 2020',
    comments: '3',
    author: 'Mara Quinn',
    role: 'CEO, Product Designer',
    avatar: 'antler-a1',
  },
  {
    seed: 'antler-7',
    title: 'The quiet rise of the independent online magazine',
    date: 'Sept. 27, 2020',
    comments: '3',
    author: 'Eli Hart',
    role: 'Creative Director',
    avatar: 'antler-a2',
  },
]

export const viewAllArticlesLabel = 'View all articles'

/* ── Newsletter ─────────────────────────────────────────────────────────── */

export const newsletterHeading = 'Subscribe to our Newsletter'
export const emailPlaceholder = 'Enter email address'
export const emailLabel = 'Email address'
export const subscribeButtonLabel = 'Subscribe'
export const invalidEmailMessage = 'Please enter a valid email address.'
export const successMessage = 'Thanks for subscribing! Please check your inbox.'

/* ── Footer ─────────────────────────────────────────────────────────────── */

export const footerBlurb =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
export const infoHeading = 'Info'
export const infoLinks = ['Blog', 'Career', 'Team', 'Team'] as const
export const questionsHeading = 'Have a Questions?'
export const contactAddress = '203 Fake St. Mountain View, San Francisco, California, USA'
export const contactPhone = '+2 392 3929 210'
export const contactEmail = 'info@yourdomain.com'
export const copyrightText = 'All rights reserved | This template is made with'

export type SocialName = 'twitter' | 'facebook' | 'instagram'

export const socials: ReadonlyArray<{ label: string; name: SocialName }> = [
  { label: 'Twitter', name: 'twitter' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
]
