export const siteName = 'Guild'
export const siteSubtitle = 'Gaming Community Website'
export const skipLabel = 'Skip to content'

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Characters', href: '#blog' },
  { label: 'Games', href: '#blog-list' },
  { label: 'Reviews', href: '#blog' },
  { label: 'News', href: '#blog-list' },
  { label: 'Page', href: '#blog' },
] as const

export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

export const headerAd = {
  image: 'https://picsum.photos/seed/guild-ad/230/90',
  alt: 'Promotional banner — The best gaming collection',
}

export const heroSlides = [
  {
    title: 'Enter the Battle',
    blurb:
      'Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
    ctaLabel: 'Read More',
    ctaHref: '#blog',
    image: 'https://picsum.photos/seed/guild-hero1/1600/804',
  },
  {
    title: 'Enter the Battle',
    blurb:
      'Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
    ctaLabel: 'Read More',
    ctaHref: '#blog',
    image: 'https://picsum.photos/seed/guild-hero2/1600/804',
  },
]

export const heroLabel = 'Hero slides'
export const heroAutoplayMs = 5000
export const goToSlideLabel = (index: number) => `Go to slide ${index + 1}`

export interface BlogPost {
  title: string
  date: string
  category: string
  comments: string
  excerpt: string
  image: string
  featured?: boolean
}

export const posts: BlogPost[] = [
  {
    title: 'The best games of 2019',
    date: 'April 1, 2019',
    category: 'Games',
    comments: '3 Comments',
    excerpt:
      'Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: 'https://picsum.photos/seed/guild-featured/870/560',
    featured: true,
  },
  {
    title: 'The best games of 2019',
    date: 'April 1, 2019',
    category: 'Games',
    comments: '3 Comments',
    excerpt:
      'Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
    image: 'https://picsum.photos/seed/guild-post2/870/560',
  },
  {
    title: 'Tips to play a better game',
    date: 'April 1, 2019',
    category: 'Games',
    comments: '3 Comments',
    excerpt:
      'Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
    image: 'https://picsum.photos/seed/guild-post3/870/560',
  },
  {
    title: 'The best games of 2019',
    date: 'April 1, 2019',
    category: 'Games',
    comments: '3 Comments',
    excerpt:
      'Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
    image: 'https://picsum.photos/seed/guild-post4/870/560',
  },
  {
    title: 'Tips to play a better game',
    date: 'April 1, 2019',
    category: 'Games',
    comments: '3 Comments',
    excerpt:
      'Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
    image: 'https://picsum.photos/seed/guild-post5/870/560',
  },
]

export const readMoreLabel = 'Read More'
export const byLabel = 'By Admin'
export const searchLabel = 'Search'

export const categories = [
  { name: 'Games', count: 20 },
  { name: 'Gaming Tips & Tricks', count: 23 },
  { name: 'Online Games', count: 25 },
  { name: 'Team Games', count: 17 },
  { name: 'Community', count: 15 },
  { name: 'Uncategorized', count: 22 },
] as const

export const latestNews = [
  {
    title: 'The best games of 2019',
    date: 'April 1, 2019',
    meta: 'By Admin | 3 Comments',
    image: 'https://picsum.photos/seed/guild-news1/85/85',
  },
  {
    title: 'Tips to play a better game',
    date: 'April 1, 2019',
    meta: 'By Admin | 3 Comments',
    image: 'https://picsum.photos/seed/guild-news2/85/85',
  },
  {
    title: 'The best games of 2019',
    date: 'April 1, 2019',
    meta: 'By Admin | 3 Comments',
    image: 'https://picsum.photos/seed/guild-news3/85/85',
  },
  {
    title: 'Tips to play a better game',
    date: 'April 1, 2019',
    meta: 'By Admin | 3 Comments',
    image: 'https://picsum.photos/seed/guild-news4/85/85',
  },
]

export const sidebarAd = {
  image: 'https://picsum.photos/seed/guild-sidebar-ad/350/350',
  alt: 'Advertisement',
}

export const latestComments = [
  { name: 'Jane Smith', post: 'The best games of 2019', date: 'April 1, 2019' },
  { name: 'Michael Doe', post: 'Tips to play a better game', date: 'April 1, 2019' },
  { name: 'Emily Johnson', post: 'The best games of 2019', date: 'April 1, 2019' },
  { name: 'Chris Brown', post: 'Tips to play a better game', date: 'April 1, 2019' },
]

export const compactPosts = [
  {
    title: '10 Amazing new games',
    date: 'April 1, 2019',
    meta: 'By Admin | in Games | 3 Comments',
    excerpt:
      'Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh.',
    image: 'https://picsum.photos/seed/guild-compact1/166/166',
  },
  {
    title: '10 Amazing new games',
    date: 'April 1, 2019',
    meta: 'By Admin | in Games | 3 Comments',
    excerpt:
      'Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh.',
    image: 'https://picsum.photos/seed/guild-compact2/166/166',
  },
  {
    title: '10 Amazing new games',
    date: 'April 1, 2019',
    meta: 'By Admin | in Games | 3 Comments',
    excerpt:
      'Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh.',
    image: 'https://picsum.photos/seed/guild-compact3/166/166',
  },
  {
    title: '10 Amazing new games',
    date: 'April 1, 2019',
    meta: 'By Admin | in Games | 3 Comments',
    excerpt:
      'Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh.',
    image: 'https://picsum.photos/seed/guild-compact4/166/166',
  },
]

export const topFive = [
  { title: 'The best games of 2019', date: 'April 1, 2019', meta: 'By Admin | 3 Comments' },
  { title: 'Tips to play a better game', date: 'April 1, 2019', meta: 'By Admin | 3 Comments' },
  { title: 'The best games of 2019', date: 'April 1, 2019', meta: 'By Admin | 3 Comments' },
  { title: 'Tips to play a better game', date: 'April 1, 2019', meta: 'By Admin | 3 Comments' },
  { title: 'The best games of 2019', date: 'April 1, 2019', meta: 'By Admin | 3 Comments' },
]

export const videoTitle = "2018's Best Game"
export const videoImage = 'https://picsum.photos/seed/guild-video/1600/700'
export const videoUrl = 'https://www.youtube.com/watch?v=xzCEdSKMkdU'
export const playVideoLabel = 'Play video'
export const videoLogoImage = 'https://picsum.photos/seed/guild-video-logo/120/40'

export const footerAbout =
  'Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'

export const footerColumns = [
  {
    title: 'Useful Links',
    links: ['Games', 'Testimonials', 'Reviews', 'Characters', 'Latest news'],
  },
  {
    title: 'Services',
    links: ['About us', 'Services', 'Become a writer', 'Jobs', 'FAQ'],
  },
  {
    title: 'Careers',
    links: ['Donate', 'Services', 'Subscriptions', 'Careers', 'Our team'],
  },
]

export const footerLatestPosts = [
  { title: 'The best games of 2019', date: 'April 1, 2019', meta: 'By Admin | 3 Comments' },
  { title: 'Tips to play a better game', date: 'April 1, 2019', meta: 'By Admin | 3 Comments' },
]

export const componentDockUrl = 'https://www.componentdock.com/'
export const componentDockName = 'Component Dock'
