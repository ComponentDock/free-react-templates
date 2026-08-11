export const siteName = 'Typeface'

export const documentTitle = 'Typeface — Minimal Blog Template'

export const skipLabel = 'Skip to content'

export const navLabel = 'Main navigation'

/* Author + shared post meta (the reference repeats the same demo author,
   date, comment count and headline across the whole page). */
export const authorName = 'Mira Cole'
export const authorAvatar = 'https://picsum.photos/seed/typeface-4/60/60'
export const postDate = 'March 15, 2018'
export const commentCount = 3
export const postTitle = 'How to Find the Video Games of Your Youth'

export const imgUrl = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

/* --- Social icons ------------------------------------------------------- */

export type SocialName = 'twitter' | 'facebook' | 'instagram' | 'youtube' | 'vimeo'

export const socialLabels: Record<SocialName, string> = {
  twitter: 'Twitter',
  facebook: 'Facebook',
  instagram: 'Instagram',
  youtube: 'YouTube',
  vimeo: 'Vimeo',
}

/* Inline brand icon paths — lucide-react removed brand icons, so these are
   simple-icons (MIT) path data mirroring the reference's Font Awesome marks
   (fa-twitter, fa-facebook, fa-instagram, fa-youtube-play, fa-vimeo). */
export const socialPaths: Record<SocialName, string> = {
  twitter:
    'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  instagram:
    'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.336 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.65.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
  youtube:
    'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  vimeo:
    'M23.9765 6.4168c-.105 2.338-1.739 5.5429-4.894 9.6088-3.2679 4.247-6.0258 6.3699-8.2898 6.3699-1.409 0-2.578-1.294-3.553-3.881l-1.9179-7.1138c-.719-2.584-1.488-3.878-2.312-3.878-.179 0-.806.378-1.8809 1.132l-1.129-1.457a315.06 315.06 0 0 0 3.501-3.1279c1.579-1.368 2.765-2.085 3.5539-2.159 1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.5069.5389 2.45 1.1309 3.674 1.7759 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.8679 3.434-5.7568 6.7619-5.6368 2.4729.06 3.6279 1.664 3.4929 4.7969z',
}

/* --- Top utility bar ---------------------------------------------------- */

export const topBarSocials: SocialName[] = ['twitter', 'facebook', 'instagram', 'youtube']

export const topBarSearchPlaceholder = 'Type keyword to search...'

export const topBarSearchLabel = 'Search the site'

/* --- Logo + navigation -------------------------------------------------- */

export const menuOpenLabel = 'Open navigation menu'
export const menuCloseLabel = 'Close navigation menu'

interface NavItem {
  label: string
  href: string
}

export interface NavSection extends NavItem {
  children?: NavItem[]
}

export const navSections: NavSection[] = [
  { label: 'Home', href: '#' },
  { label: 'Business', href: '#' },
  {
    label: 'Travel',
    href: '#',
    children: [
      { label: 'Asia', href: '#' },
      { label: 'Europe', href: '#' },
      { label: 'Dubai', href: '#' },
      { label: 'Africa', href: '#' },
      { label: 'South America', href: '#' },
    ],
  },
  {
    label: 'Categories',
    href: '#',
    children: [
      { label: 'Lifestyle', href: '#' },
      { label: 'Food', href: '#' },
      { label: 'Adventure', href: '#' },
      { label: 'Travel', href: '#' },
      { label: 'Business', href: '#' },
    ],
  },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

/* --- Hero slider -------------------------------------------------------- */

export interface Slide {
  seed: string
  category: string
  title: string
  excerpt: string
}

export const heroSlides: Slide[] = [
  {
    seed: 'typeface-1',
    category: 'Food',
    title: postTitle,
    excerpt:
      'A close look at the cabinet games that shaped a generation — and where to find them again.',
  },
  {
    seed: 'typeface-2',
    category: 'Travel',
    title: postTitle,
    excerpt:
      'The long way home through valleys and vineyards, with nothing on the itinerary but curiosity.',
  },
  {
    seed: 'typeface-3',
    category: 'Sports',
    title: postTitle,
    excerpt:
      'What a year of training at dawn taught me about patience, injury, and starting again.',
  },
]

export const sliderLabel = 'Featured posts'
export const previousSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'
export const goToSlideLabel = (slide: number) => `Go to slide ${slide}`

/* --- Latest posts ------------------------------------------------------- */

export const latestHeading = 'Latest Posts'
export const blogGridLabel = 'Latest posts'

export interface PostCard {
  seed: string
  title: string
  excerpt: string
}

export const latestPosts: PostCard[] = [
  {
    seed: 'typeface-5',
    title: postTitle,
    excerpt:
      'A close look at the cabinet games that shaped a generation — and where to find them again.',
  },
  {
    seed: 'typeface-6',
    title: postTitle,
    excerpt:
      'The long way home through valleys and vineyards, with nothing on the itinerary but curiosity.',
  },
  {
    seed: 'typeface-7',
    title: postTitle,
    excerpt:
      'Notes from the kitchen: what happens when you stop following the recipe and start following the season.',
  },
  {
    seed: 'typeface-8',
    title: postTitle,
    excerpt:
      'Why the best adventures start with a blank page and a bus ticket with no return date.',
  },
  {
    seed: 'typeface-9',
    title: postTitle,
    excerpt:
      'Small rituals that make a house feel like home, from the coffee pot to the evening walk.',
  },
  {
    seed: 'typeface-10',
    title: postTitle,
    excerpt:
      'What a year of reading one poem a day taught me about attention, memory, and slow mornings.',
  },
  {
    seed: 'typeface-11',
    title: postTitle,
    excerpt:
      'Field notes from a weekend without a phone: boredom, birdsong, and a sudden appetite for paper maps.',
  },
  {
    seed: 'typeface-12',
    title: postTitle,
    excerpt:
      'The case for keeping a paper notebook in a world of notifications — and how it changes the writing.',
  },
]

export const paginationLabel = 'Page navigation'
export const previousPageLabel = 'Previous page'
export const nextPageLabel = 'Next page'
export const pageLabel = (page: number) => `Page ${page}`

/* --- Sidebar ------------------------------------------------------------ */

export const sidebarSearchPlaceholder = 'Type a keyword and hit enter'
export const sidebarSearchLabel = 'Search the blog'

export const bioName = 'David Craig'
export const bioText =
  'David Craig is a writer and photographer documenting slow travel, quiet meals, and the small rituals that make a place feel like home. He lives in Lisbon with a stack of half-finished notebooks.'
export const readBioLabel = 'Read my bio'
export const bioSocials: SocialName[] = ['facebook', 'twitter', 'instagram', 'youtube']

export const popularHeading = 'Popular Posts'
export const popularPosts: PostCard[] = [
  { seed: 'typeface-2', title: postTitle, excerpt: '' },
  { seed: 'typeface-4', title: postTitle, excerpt: '' },
  { seed: 'typeface-12', title: postTitle, excerpt: '' },
]

export const categoriesHeading = 'Categories'
export const categories: { name: string; count: number }[] = [
  { name: 'Food', count: 12 },
  { name: 'Travel', count: 22 },
  { name: 'Lifestyle', count: 37 },
  { name: 'Business', count: 42 },
  { name: 'Adventure', count: 14 },
]

export const tagsHeading = 'Tags'
export const tags = ['Travel', 'Adventure', 'Food', 'Lifestyle', 'Business', 'Freelancing']

/* --- Footer ------------------------------------------------------------- */

export const footerAboutHeading = 'About Us'
export const footerAboutText =
  'Typeface is a minimal journal for readers who like their words and images uncluttered — stories from the road, the kitchen, and everywhere in between.'
export const readMoreLabel = 'Read More'

export const footerLatestHeading = 'Latest Post'
export const footerPosts: PostCard[] = [
  { seed: 'typeface-6', title: postTitle, excerpt: '' },
  { seed: 'typeface-3', title: postTitle, excerpt: '' },
  { seed: 'typeface-4', title: postTitle, excerpt: '' },
]

export const quickLinksHeading = 'Quick Links'
export const quickLinks = ['About Us', 'Travel', 'Adventure', 'Courses', 'Categories']

export const socialHeading = 'Social'
export const footerSocials: SocialName[] = ['twitter', 'facebook', 'instagram', 'vimeo', 'youtube']

export const footerCopyright = (year: number) =>
  `Copyright © ${year} All Rights Reserved | Made with ♥ by Typeface`
