export interface BlogPost {
  seed: string
  date: string
  title: string
  tags: string[]
  excerpt: string
  comments: number
}

export const topBar = {
  greeting: 'Hello world, My name is Ivory',
  email: 'Contactme@email.com',
  searchPlaceholder: 'Search...',
} as const

export const navLinks = ['Home', 'Features', 'Portfolio', 'Blog', 'About Me', 'Contact'] as const

export const socialLinks = [
  'pinterest',
  'facebook',
  'twitter',
  'dribbble',
  'behance',
  'linkedin',
] as const

export const socialLabels: Record<
  (typeof socialLinks)[number] | (typeof shareLinks)[number],
  string
> = {
  pinterest: 'Pinterest',
  facebook: 'Facebook',
  twitter: 'Twitter',
  dribbble: 'Dribbble',
  behance: 'Behance',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
}

export const heroSlides = [
  { seed: 'ivory-hero-1', alt: 'Golden hour landscape' },
  { seed: 'ivory-hero-2', alt: 'Mountain valley at dusk' },
  { seed: 'ivory-hero-3', alt: 'Rocky outcrop overlook' },
] as const

export const subscribe = {
  title: 'Subscribe',
  caption: 'To my Youtube Channel',
  seed: 'ivory-avatar',
} as const

export const blogPosts: BlogPost[] = [
  {
    seed: 'ivory-post-1',
    date: 'January 30, 2018',
    title: 'Why I love Winter: A short story',
    tags: ['#winter', '#love', '#snow', '#january'],
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    comments: 2,
  },
  {
    seed: 'ivory-post-2',
    date: 'January 21, 2018',
    title: 'A weekend in the mountains',
    tags: ['#mountains', '#weekend', '#hiking'],
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    comments: 5,
  },
  {
    seed: 'ivory-post-3',
    date: 'January 12, 2018',
    title: 'Finding stillness in a busy city',
    tags: ['#city', '#mindfulness', '#mornings'],
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
    comments: 8,
  },
] as const

export const pages = ['01.', '02.', '03.'] as const

export const sidebar = {
  author: "I'm Amelia Smith",
  blurb:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
  adSeed: 'ivory-ad',
} as const

export const recentPosts: BlogPost[] = [
  {
    seed: 'ivory-recent-1',
    date: 'January 30, 2018',
    title: 'Why I love Winter: A short story',
    tags: ['#winter'],
    excerpt: '',
    comments: 2,
  },
  {
    seed: 'ivory-recent-2',
    date: 'January 21, 2018',
    title: 'A weekend in the mountains',
    tags: ['#mountains'],
    excerpt: '',
    comments: 5,
  },
  {
    seed: 'ivory-recent-3',
    date: 'January 12, 2018',
    title: 'Finding stillness in a busy city',
    tags: ['#city'],
    excerpt: '',
    comments: 8,
  },
  {
    seed: 'ivory-recent-4',
    date: 'January 4, 2018',
    title: 'Five books that shaped my year',
    tags: ['#books'],
    excerpt: '',
    comments: 3,
  },
] as const

export const tagPills = ['Music', 'Love', 'Car', 'Stories', 'Photography', 'Music', 'Car'] as const

export const footerPosts = [
  { seed: 'ivory-footer-1', date: 'January 30, 2018', title: 'My fall in love story' },
  { seed: 'ivory-footer-2', date: 'January 21, 2018', title: "Man's best friend" },
  { seed: 'ivory-footer-3', date: 'January 12, 2018', title: 'Writing on a budget' },
  { seed: 'ivory-footer-4', date: 'January 4, 2018', title: 'My fall in love story' },
] as const

export const instagramImages = [
  'ivory-ig-1',
  'ivory-ig-2',
  'ivory-ig-3',
  'ivory-ig-4',
  'ivory-ig-5',
  'ivory-ig-6',
  'ivory-ig-7',
] as const

export const shareLinks = ['pinterest', 'linkedin', 'instagram', 'facebook', 'twitter'] as const
