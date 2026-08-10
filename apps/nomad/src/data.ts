interface NavChild {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '#home',
    children: [
      { label: 'Home with slider', href: '#home' },
      { label: 'Home with full slider', href: '#home' },
      { label: 'Home with parallax', href: '#home' },
    ],
  },
  {
    label: 'Post',
    href: '#blog',
    children: [
      { label: 'Post with right sidebar', href: '#blog' },
      { label: 'Post with left sidebar', href: '#blog' },
      { label: 'Post no sidebar', href: '#blog' },
    ],
  },
  {
    label: 'Archives',
    href: '#blog',
    children: [
      { label: 'Destination', href: '#sidebar' },
      { label: 'Tag', href: '#sidebar' },
      { label: 'Authors Post', href: '#blog' },
    ],
  },
  {
    label: 'Pages',
    href: '#blog',
    children: [
      { label: 'Right Sidebar', href: '#sidebar' },
      { label: 'Left Sidebar', href: '#blog' },
      { label: 'Authors Page', href: '#blog' },
    ],
  },
  { label: 'Contact', href: '#footer' },
]

export interface Slide {
  id: number
  watermark: string
  headline: string
  excerpt: string
  image: string
  avatar: string
}

export const slides: Slide[] = [
  {
    id: 1,
    watermark: 'Europe',
    headline: 'Switzerland famous for chocolate making',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/nomad-hero-1/900/1200',
    avatar: 'https://picsum.photos/seed/nomad-avatar-1/160/160',
  },
  {
    id: 2,
    watermark: 'USA',
    headline: 'Hawaii known as the Big Island',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/nomad-hero-2/900/1200',
    avatar: 'https://picsum.photos/seed/nomad-avatar-2/160/160',
  },
]

export interface Post {
  id: number
  watermark: string
  title: string
  excerpt: string
  image: string
}

export const posts: Post[] = [
  {
    id: 1,
    watermark: 'South America',
    title: 'Hawaii known as the Big Island',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text decided to leave for the far World of Grammar.',
    image: 'https://picsum.photos/seed/nomad-blog-1/1200/800',
  },
  {
    id: 2,
    watermark: 'Europe',
    title: 'Switzerland famous for chocolate making',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    image: 'https://picsum.photos/seed/nomad-blog-2/1200/800',
  },
  {
    id: 3,
    watermark: 'Asia',
    title: 'Kyoto temples hidden in the mist',
    excerpt:
      'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.',
    image: 'https://picsum.photos/seed/nomad-blog-3/1200/800',
  },
  {
    id: 4,
    watermark: 'Africa',
    title: 'Sahara dunes at golden hour',
    excerpt:
      'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village.',
    image: 'https://picsum.photos/seed/nomad-blog-4/1200/800',
  },
  {
    id: 5,
    watermark: 'USA',
    title: 'National parks worth the hike',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place.',
    image: 'https://picsum.photos/seed/nomad-blog-5/1200/800',
  },
]

export interface DestinationLink {
  label: string
  count: number
}

export const destinations: DestinationLink[] = [
  { label: 'Africa', count: 6 },
  { label: 'Asia', count: 8 },
  { label: 'Australia', count: 2 },
  { label: 'Europe', count: 2 },
  { label: 'North America', count: 7 },
  { label: 'South America', count: 5 },
]

export interface PopularArticle {
  id: number
  title: string
  thumb: string
  meta: string
}

export const popularArticles: PopularArticle[] = [
  {
    id: 1,
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    thumb: 'https://picsum.photos/seed/nomad-pop-1/160/160',
    meta: 'Oct. 04, 2018 Dave Lewis 19',
  },
  {
    id: 2,
    title: 'A small river named Duden flows by their place',
    thumb: 'https://picsum.photos/seed/nomad-pop-2/160/160',
    meta: 'Oct. 04, 2018 Dave Lewis 19',
  },
  {
    id: 3,
    title: 'The Big Oxmox advised her not to do so',
    thumb: 'https://picsum.photos/seed/nomad-pop-3/160/160',
    meta: 'Oct. 04, 2018 Dave Lewis 19',
  },
]

export const tags = ['dish', 'menu', 'food', 'sweet', 'tasty', 'delicious', 'desserts', 'drinks']

export const archives = [
  { label: 'September 2018', count: 6 },
  { label: 'August 2018', count: 8 },
  { label: 'July 2018', count: 2 },
  { label: 'June 2018', count: 7 },
  { label: 'May 2018', count: 5 },
  { label: 'April 2018', count: 3 },
]

export const author = {
  name: 'Dave Lewis',
  date: 'October 04, 2018',
  avatar: 'https://picsum.photos/seed/nomad-author/160/160',
}

export const counters = [
  { icon: 'heart', value: 3 },
  { icon: 'eye', value: 100 },
  { icon: 'comment', value: 5 },
] as const

export const socials = [
  { name: 'twitter', label: 'Twitter' },
  { name: 'facebook', label: 'Facebook' },
  { name: 'instagram', label: 'Instagram' },
] as const

export const contact = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
}
