/* ── Brand & chrome ─────────────────────────────────────────────────────── */

export const brandName = 'Journal'
export const brandTagline = 'Lifestyle Blog'

export const tickerLabel = 'Breaking News'
export const tickerHeadlines: ReadonlyArray<string> = [
  'Hello World!',
  'Hello Universe!',
  'Hello Journal!',
  'Hello Earth!',
  'Hello Colorlib!',
]
export const tickerRotateMs = 3000

export type SocialName = 'pinterest' | 'facebook' | 'twitter' | 'dribbble' | 'behance' | 'linkedin'

export interface SocialLink {
  label: string
  name: SocialName
}

/** Top bar + footer socials — mirror the original's six icons. */
export const headerSocials: ReadonlyArray<SocialLink> = [
  { label: 'Pinterest', name: 'pinterest' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Dribbble', name: 'dribbble' },
  { label: 'Behance', name: 'behance' },
  { label: 'Linkedin', name: 'linkedin' },
]

/* ── Nav ───────────────────────────────────────────────────────────────── */

export const navSubscribeLabel = 'Subscribe'
export const navSearchLabel = 'Search'
export const navSearchPlaceholder = 'Search something...'
export const navSearchCloseLabel = 'Close search'
export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

export const pagesMenuLabel = 'Pages'
export const pagesMenu: ReadonlyArray<string> = [
  'Home',
  'About Us',
  'Single Post',
  'Contact',
  'Coming Soon',
]

export interface CategoryMenuGroup {
  label: string
  items: ReadonlyArray<string>
}

export const categoryMenuLabel = 'Catagory'
export const categoryMenu: ReadonlyArray<CategoryMenuGroup> = [
  { label: 'Lifestyle', items: ['Fashion', 'Travel'] },
  { label: 'Music', items: ['Rock', 'Jazz'] },
]

export const megamenuLabel = 'Megamenu'
export const megamenu: ReadonlyArray<{ headline: string; items: ReadonlyArray<string> }> = [
  {
    headline: 'Headline 1',
    items: ['Breakfast Ideas', 'City Guides', 'Street Style', 'Music News', 'Film Reviews'],
  },
  {
    headline: 'Headline 2',
    items: ['Travel Diaries', 'Workout Plans', 'Photo Essays', 'Book Club', 'Podcast Picks'],
  },
  {
    headline: 'Headline 3',
    items: ['Gadget Watch', 'Recipe Box', 'Design Notes', 'Nightlife', 'Weekend Reads'],
  },
  {
    headline: 'Headline 4',
    items: ['Garden Talk', 'Market Finds', 'Studio Visit', 'Live Shows', 'New Arrivals'],
  },
]

export const navPlainLinks: ReadonlyArray<string> = ['Home', 'About Us', 'Contact']

/* ── Hero carousel (3 slides, center-active content) ────────────────────── */

export interface HeroSlide {
  seed: string
  tag: string
  headline: string
}

export const heroSlides: ReadonlyArray<HeroSlide> = [
  {
    seed: 'journal-hero-1',
    tag: 'lifestyle',
    headline: "Take a look at last night's party!",
  },
  { seed: 'journal-hero-2', tag: 'lifestyle', headline: 'We love colors in 2018' },
  { seed: 'journal-hero-3', tag: 'lifestyle', headline: '10 Tips to organize the perfect party' },
]
export const heroAutoAdvanceMs = 4000
export const heroPrevLabel = 'Previous slide'
export const heroNextLabel = 'Next slide'

/* ── Magazine intro row ─────────────────────────────────────────────────── */

export const introTag = 'Lifestyle'
export const introTitle = 'Welcome to this Lifestyle blog'
export const introText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
export const readMoreLabel = 'Read More'

export const introCategories: ReadonlyArray<{ title: string; seed: string }> = [
  { title: 'Lifestyle posts', seed: 'journal-cat-1' },
  { title: 'latest posts', seed: 'journal-cat-2' },
]

/* ── Blog post list (5 posts, alternating layout) ───────────────────────── */

export interface BlogPost {
  seed: string
  day: string
  month: string
  tag: string
  title: string
  excerpt: string
  author: string
  comments: string
  /** Third post spans the full column: image on top, content below. */
  fullWidth?: boolean
}

export const blogPosts: ReadonlyArray<BlogPost> = [
  {
    seed: 'journal-post-1',
    day: '12',
    month: 'march',
    tag: 'Lifestyle',
    title: 'Party people in the house',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    author: 'james smith',
    comments: '3 comments',
  },
  {
    seed: 'journal-post-2',
    day: '10',
    month: 'march',
    tag: 'Lifestyle',
    title: 'We love colors in 2018',
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    author: 'james smith',
    comments: '3 comments',
  },
  {
    seed: 'journal-post-3',
    day: '22',
    month: 'feb',
    tag: 'Lifestyle',
    title: '10 Tips to organize the perfect party',
    excerpt:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
    author: 'james smith',
    comments: '3 comments',
    fullWidth: true,
  },
  {
    seed: 'journal-post-4',
    day: '18',
    month: 'feb',
    tag: 'Lifestyle',
    title: 'The best rooftop bars in town',
    excerpt:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt, neque porro quisquam est.',
    author: 'james smith',
    comments: '3 comments',
  },
  {
    seed: 'journal-post-5',
    day: '05',
    month: 'jan',
    tag: 'Lifestyle',
    title: 'Five books to read this season',
    excerpt:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur, quis autem vel eum iure reprehenderit voluptate.',
    author: 'james smith',
    comments: '3 comments',
  },
]

export const loadMoreLabel = 'Read More'

/* ── Sidebar widgets ────────────────────────────────────────────────────── */

export const sidebarSearchPlaceholder = 'Search'
export const sidebarSearchLabel = 'Search the blog'

export const subscribeTitle = 'Subscribe to my newsletter'

export const advertisementTitle = 'Advertisement'
export const advertisementSeed = 'journal-ad'

export const latestPostsTitle = 'Latest Posts'
export interface LatestPost {
  seed: string
  tag: string
  title: string
  date: string
}
export const latestPosts: ReadonlyArray<LatestPost> = [
  {
    seed: 'journal-latest-1',
    tag: 'Lifestyle',
    title: 'Party people in the house',
    date: '12 March',
  },
  { seed: 'journal-latest-2', tag: 'Lifestyle', title: 'We love colors in 2018', date: '10 March' },
  {
    seed: 'journal-latest-3',
    tag: 'Lifestyle',
    title: '10 Tips to organize the perfect party',
    date: '22 Feb',
  },
  {
    seed: 'journal-latest-4',
    tag: 'Lifestyle',
    title: 'The best rooftop bars in town',
    date: '18 Feb',
  },
]

export const tagsTitle = 'Tags'
export const tags: ReadonlyArray<string> = [
  'design',
  'fashion',
  'travel',
  'music',
  'party',
  'video',
  'photography',
  'adventure',
]

/* ── Newsletter forms (sidebar + modal) ─────────────────────────────────── */

export const newsletterEmailLabel = 'Email address'
export const newsletterPlaceholder = 'Enter your email'
export const newsletterSubmitLabel = 'Subscribe'
export const newsletterInvalidEmailMessage = 'Please enter a valid email address.'
export const newsletterSuccessMessage = 'Thanks for subscribing! Please check your inbox.'

export const newsletterModalTitle = 'Subscribe to our newsletter'
export const newsletterModalText = 'Get the latest stories straight to your inbox.'
export const newsletterModalCloseLabel = 'Close newsletter'

/* ── Instagram feed ─────────────────────────────────────────────────────── */

export const instagramTitle = 'Follow us @ Instagram'
export const instagramSeeds: ReadonlyArray<string> = [
  'journal-ig-1',
  'journal-ig-2',
  'journal-ig-3',
  'journal-ig-4',
  'journal-ig-5',
  'journal-ig-6',
  'journal-ig-7',
]
export const instagramAutoAdvanceMs = 5000
export const instagramPrevLabel = 'Previous photos'
export const instagramNextLabel = 'Next photos'

/* ── Footer ─────────────────────────────────────────────────────────────── */

export const footerLinks: ReadonlyArray<string> = [
  'Home',
  'About Us',
  'Lifestyle',
  'Travel',
  'Music',
  'Contact',
]
export const footerCopyright = 'Copyright © 2026 All rights reserved | This template is made with'
export const footerCredit = 'Colorlib'
export const footerCreditUrl = 'https://colorlib.com'

/* ── Shared helpers ─────────────────────────────────────────────────────── */

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`
