/* ── Brand & chrome ─────────────────────────────────────────────────────── */

export const brandName = 'Glyph'

export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const pagesToggleLabel = 'Toggle pages menu'
export const pagesSubmenuLabel = 'Pages'

export const topNavLinks = ['Home', 'Category', 'Archive', 'Contact'] as const
export const pagesSubmenu = ['Single Blog', 'Elements'] as const

export type SocialName = 'facebook' | 'twitter' | 'behance' | 'dribbble' | 'github'

export interface SocialLink {
  label: string
  name: SocialName
}

/** Header socials (right of the nav) — mirror the original top bar. */
export const headerSocials: ReadonlyArray<SocialLink> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Behance', name: 'behance' },
  { label: 'Dribbble', name: 'dribbble' },
]

/** Author + footer socials — the original repeats facebook/twitter/github/behance. */
export const authorSocials: ReadonlyArray<SocialLink> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'GitHub', name: 'github' },
  { label: 'Behance', name: 'behance' },
]

export const footerSocials: ReadonlyArray<SocialLink> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'GitHub', name: 'github' },
  { label: 'Behance', name: 'behance' },
]

/* ── Post model ─────────────────────────────────────────────────────────── */

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Hero banner slider (3 slides, auto-advancing) ──────────────────────── */

export interface HeroSlide {
  seed: string
  category: string
  date: string
  comments: string
  title: string
  excerpt: string
}

const heroCategory = 'Gadgets'
const heroDate = 'March 14, 2018'
const heroComments = '05'
export const heroReadMoreLabel = 'Read More'
export const heroPrevLabel = 'Previous slide'
export const heroNextLabel = 'Next slide'

export const heroSlides: ReadonlyArray<HeroSlide> = [
  {
    seed: 'glyph-hero-1',
    category: heroCategory,
    date: heroDate,
    comments: heroComments,
    title: 'Nest Protect: 2nd Gen Smoke Alarm + Carbon Monoxide Detector',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    seed: 'glyph-hero-2',
    category: heroCategory,
    date: heroDate,
    comments: heroComments,
    title: 'Space The Final Frontier — telescopes that changed astronomy',
    excerpt:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    seed: 'glyph-hero-3',
    category: heroCategory,
    date: heroDate,
    comments: heroComments,
    title: 'The Amazing Hubble — a decade of deep-space photography',
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
]

export const heroAutoAdvanceMs = 4000

/* ── Blog grid (3 × 3 overlapping cards) ────────────────────────────────── */

export interface BlogPost {
  seed: string
  category: string
  date: string
  comments: string
  title: string
  excerpt: string
}

export const blogGridLabel = 'Latest posts'

const gridDate = 'March 14, 2018'
const gridComments = '05'

export const blogPosts: ReadonlyArray<BlogPost> = [
  {
    seed: 'glyph-post-1',
    category: 'Gadgets',
    date: gridDate,
    comments: gridComments,
    title: 'Nest Protect: 2nd Gen Smoke Alarm + Carbon Monoxide Detector',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    seed: 'glyph-post-2',
    category: 'Lifestyle',
    date: gridDate,
    comments: gridComments,
    title: 'Space The Final Frontier — telescopes that changed astronomy',
    excerpt:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    seed: 'glyph-post-3',
    category: 'Travel',
    date: gridDate,
    comments: gridComments,
    title: 'The Amazing Hubble — a decade of deep-space photography',
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    seed: 'glyph-post-4',
    category: 'Gadgets',
    date: gridDate,
    comments: gridComments,
    title: 'Astronomy Or Astrology — what the stars actually tell us',
    excerpt:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    seed: 'glyph-post-5',
    category: 'Food',
    date: gridDate,
    comments: gridComments,
    title: 'Asteroids telescope — hunting near-Earth objects at home',
    excerpt:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    seed: 'glyph-post-6',
    category: 'Art',
    date: gridDate,
    comments: gridComments,
    title: 'Why minimalism took over the modern photo blog',
    excerpt:
      'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    seed: 'glyph-post-7',
    category: 'Architecture',
    date: gridDate,
    comments: gridComments,
    title: 'Brutalist buildings worth a detour in Eastern Europe',
    excerpt:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
  },
  {
    seed: 'glyph-post-8',
    category: 'Adventure',
    date: gridDate,
    comments: gridComments,
    title: 'The comeback of the printed newspaper, explained',
    excerpt:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
  },
  {
    seed: 'glyph-post-9',
    category: 'Technology',
    date: gridDate,
    comments: gridComments,
    title: 'How to photograph city lights after dark',
    excerpt:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.',
  },
]

/* ── Pagination ─────────────────────────────────────────────────────────── */

export const paginationPages: ReadonlyArray<string> = ['01', '02', '03', '04', '09']
export const activePage = '01'
export const paginationLabel = 'Blog pagination'

/* ── Sidebar widgets ────────────────────────────────────────────────────── */

export const searchPlaceholder = 'Search Keyword'
export const searchFieldLabel = 'Search the blog'
export const searchSubmitLabel = 'Submit search'
export const searchWidgetTitle = 'Search'

export const authorName = 'Charlie Barber'
export const authorRole = 'Senior blog writer'
export const authorBio =
  'If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.'
export const authorWidgetTitle = 'About author'

export interface PopularPost {
  seed: string
  title: string
  time: string
}

export const popularPostsTitle = 'Popular Posts'
export const popularPosts: ReadonlyArray<PopularPost> = [
  { seed: 'glyph-pop-1', title: 'Space The Final Frontier', time: '02 Hours ago' },
  { seed: 'glyph-pop-2', title: 'The Amazing Hubble', time: '02 Hours ago' },
  { seed: 'glyph-pop-3', title: 'Astronomy Or Astrology', time: '03 Hours ago' },
  { seed: 'glyph-pop-4', title: 'Asteroids telescope', time: '01 Hours ago' },
]

export interface PostCategory {
  label: string
  count: string
}

export const postCategoriesTitle = 'Post Categories'
export const postCategories: ReadonlyArray<PostCategory> = [
  { label: 'Technology', count: '37' },
  { label: 'Lifestyle', count: '24' },
  { label: 'Fashion', count: '59' },
  { label: 'Art', count: '29' },
  { label: 'Food', count: '15' },
  { label: 'Architecture', count: '09' },
  { label: 'Adventure', count: '44' },
]

/* ── Newsletter form (sidebar + footer) ─────────────────────────────────── */

export const newsletterTitle = 'Newsletter'
export const newsletterEmailLabel = 'Email address'
export const newsletterPlaceholder = 'Email Address'
export const newsletterSubscribeLabel = 'Subscribe'
export const newsletterInvalidEmailMessage = 'Please enter a valid email address.'
export const newsletterSuccessMessage = 'Thanks for subscribing! Please check your inbox.'

/* ── Footer ─────────────────────────────────────────────────────────────── */

export const footerAboutTitle = 'About Us'
export const footerAboutText =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.'
export const footerNewsletterTagline = 'Stay updated with our latest trends'
export const footerInstagramTitle = 'Instagram Feed'
export const footerFollowTitle = 'Follow Us'
export const footerFollowTagline = 'Let us be social'
export const footerInstagramSeeds: ReadonlyArray<string> = [
  'glyph-ig-1',
  'glyph-ig-2',
  'glyph-ig-3',
  'glyph-ig-4',
  'glyph-ig-5',
  'glyph-ig-6',
]
export const footerCopyright = 'Copyright © All rights reserved'
export const footerMadeWith = 'This template is made with ♥ by'
export const footerCredit = 'Colorlib'
