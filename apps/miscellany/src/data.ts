export const siteName = 'Miscellany'

export const navLabel = 'Primary'

export interface NavItem {
  label: string
  href: string
  active?: boolean
  children?: string[]
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home', active: true },
  {
    label: 'Blog',
    href: '#blog',
    children: ['Blog Single', 'Video', 'Read', 'Lifestyle'],
  },
  { label: 'Event', href: '#event' },
  { label: 'Travel', href: '#travel' },
  { label: 'About Me', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const blogDropdownLabel = 'Blog dropdown'
export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const darkToggleLabel = (dark: boolean) =>
  dark ? 'Switch to light mode' : 'Switch to dark mode'

export interface HeroSlide {
  category: string
  date: string
  author: string
  title: string
  seed: string
}

export const heroSlides: HeroSlide[] = [
  {
    category: 'Events',
    date: '20 March 2018',
    author: 'Rich',
    title: 'How a website designer began customizing and designing',
    seed: 'miscellany-hero-1',
  },
  {
    category: 'Events',
    date: '20 March 2018',
    author: 'Rich',
    title: 'Top 5 Places To Start Your Vacation This Summer',
    seed: 'miscellany-hero-2',
  },
  {
    category: 'Events',
    date: '20 March 2018',
    author: 'Rich',
    title: 'Recipe for your site',
    seed: 'miscellany-hero-3',
  },
  {
    category: 'Events',
    date: '20 March 2018',
    author: 'Rich',
    title: 'The making of a modern magazine layout',
    seed: 'miscellany-hero-4',
  },
]

export const heroPrevLabel = 'Previous slide'
export const heroNextLabel = 'Next slide'
export const heroDotLabel = (index: number) => `Go to slide ${index + 1}`

export interface BlogCard {
  category: string
  date: string
  author: string
  title: string
  seed: string
  wide?: boolean
  video?: boolean
  slider?: boolean
}

/** 13 cards laid out in the reference rows: 3-3-3 / 3-3-3 / 8-4 / 3-3-3 / 4-8. */
export const blogCards: BlogCard[] = [
  {
    category: 'Events',
    date: '20 March 2018',
    author: 'Rich',
    title: 'Recipe for your site',
    seed: 'miscellany-1',
    slider: true,
  },
  {
    category: 'Read',
    date: '20 March 2018',
    author: 'Rich',
    title: 'Read our latest magazine issue',
    seed: 'miscellany-2',
  },
  {
    category: 'Travel',
    date: '20 March 2018',
    author: 'Rich',
    title: 'Top places to start your vacation',
    seed: 'miscellany-3',
  },
  {
    category: 'Lifestyle',
    date: '20 March 2018',
    author: 'Rich',
    title: 'Living the lifestyle blog life',
    seed: 'miscellany-4',
  },
  {
    category: 'Events',
    date: '20 March 2018',
    author: 'Rich',
    title: 'Events worth attending this spring',
    seed: 'miscellany-5',
  },
  {
    category: 'Events',
    date: '20 March 2018',
    author: 'Rich',
    title: 'Behind the scenes at the studio',
    seed: 'miscellany-6',
  },
  {
    category: 'Watch',
    date: '20 March 2018',
    author: 'Rich',
    title: 'Watch our video how to make website',
    seed: 'miscellany-7',
    wide: true,
    video: true,
  },
  {
    category: 'Events',
    date: '20 March 2018',
    author: 'Rich',
    title: 'How a website designer began designing',
    seed: 'miscellany-8',
  },
  {
    category: 'Events',
    date: '20 March 2018',
    author: 'Rich',
    title: 'Designing a website from scratch',
    seed: 'miscellany-9',
  },
  {
    category: 'Events',
    date: '20 March 2018',
    author: 'Rich',
    title: 'How to build website',
    seed: 'miscellany-10',
  },
  {
    category: 'Events',
    date: '20 March 2018',
    author: 'Rich',
    title: 'Create website the easy way',
    seed: 'miscellany-11',
  },
  {
    category: 'Events',
    date: '20 March 2018',
    author: 'Rich',
    title: 'Be a designer',
    seed: 'miscellany-12',
  },
  {
    category: 'Events',
    date: '20 March 2018',
    author: 'Rich',
    title: 'Recipe for your site',
    seed: 'miscellany-13',
    wide: true,
  },
]

export const cardExcerpt =
  'A small river named Duden flows by their place and supplies it with the necessary regelialia.'

export const sliderCardLabel = 'Photo slider card'
export const sliderPrevLabel = 'Previous photo'
export const sliderNextLabel = 'Next photo'
export const videoPlayLabel = 'Play video'
export const readMoreLabel = 'Read more'

export const paginationPages = [1, 2, 3, 4]
export const paginationPrevLabel = 'Previous page'
export const paginationNextLabel = 'Next page'

export const instagramHeading = 'Instagram'
export const instagramTiles = Array.from({ length: 8 }, (_, i) => `miscellany-instagram-${i + 1}`)
export const instagramTileLabel = (index: number) => `Instagram photo ${index + 1}`

export interface FooterRecentPost {
  title: string
  date: string
  seed: string
}

export const footerNavigational = [
  'Home',
  'About Me',
  'Blog',
  'Travel',
  'Lifestyle',
  'Fashion',
  'Health',
]

export const footerRecentPosts: FooterRecentPost[] = [
  { title: 'Be a designer', date: '25 March 2018', seed: 'miscellany-recent-1' },
  { title: 'How to build website', date: '24 March 2018', seed: 'miscellany-recent-2' },
  { title: 'Create website', date: '23 March 2018', seed: 'miscellany-recent-3' },
]

export const footerArchive = [
  'February 2018',
  'January 2018',
  'December 2017',
  'November 2017',
  'October 2017',
  'September 2017',
]

export const footerTags = [
  'Modeling',
  'Fashion',
  'Life',
  'Blog',
  'Workout',
  'Vacation',
  'Travel',
  'Exercise',
  'Health',
  'News',
  'Model',
  'Women',
  'Animals',
  'Nature',
  'Art',
  'Sea',
  'Ocean',
  'Office',
  'Home',
]

export const footerCopyright = 'All rights reserved | Made with ♥ by Miscellany'

export const skipLabel = 'Skip to content'
export const documentTitle = 'Miscellany — Blog Template'
export const heroSectionLabel = 'Featured posts slider'
export const blogSectionLabel = 'Blog posts'
export const instagramSectionLabel = 'Instagram feed'
