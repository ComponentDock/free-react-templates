/**
 * Griddle content — recreation of the ColorLib "Burger" restaurant template
 * (https://colorlib.com/wp/template/burger/). Paraphrased copy, seeded
 * picsum placeholders — never copied from the original.
 */

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pages', href: '#' },
  { label: 'Contact', href: '#contact' },
] as const

export const BLOG_MENU = {
  label: 'Blog',
  href: '#blog',
  children: [
    { label: 'Blog', href: '#blog' },
    { label: 'Blog Single', href: '#blog' },
  ],
} as const

export const PAGES_MENU = {
  label: 'Pages',
  href: '#',
  children: [{ label: 'Elements', href: '#menu' }],
} as const

export const HERO_SLIDES = [
  {
    kicker: 'Big Deal',
    title: 'Burger Bachelor',
    subtitle: 'Mexican',
  },
  {
    kicker: 'Big Deal',
    title: 'Burger Bachelor',
    subtitle: 'Mexican',
  },
] as const

export const MENU_ITEMS = [
  {
    seed: 'griddle-burger-1',
    name: 'Beefy Burgers',
    description: 'Great way to make your business appear trust and relevant.',
    price: '$5',
  },
  {
    seed: 'griddle-burger-2',
    name: 'Burger Boys',
    description: 'Great way to make your business appear trust and relevant.',
    price: '$5',
  },
  {
    seed: 'griddle-burger-3',
    name: 'Burger Bizz',
    description: 'Great way to make your business appear trust and relevant.',
    price: '$5',
  },
  {
    seed: 'griddle-burger-4',
    name: 'Crazy Burger',
    description: 'Great way to make your business appear trust and relevant.',
    price: '$5',
  },
] as const

export const ABOUT_TEXT = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`

export const TESTIMONIALS = [
  {
    text: 'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.',
    name: 'Kristiana Chouhan',
    stars: 4.5,
  },
  {
    text: 'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.',
    name: 'Arafath Hossain',
    stars: 4.5,
  },
  {
    text: 'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.',
    name: 'A.H Shemanto',
    stars: 4.5,
  },
] as const

export const INSTAGRAM_SEEDS = [
  'griddle-insta-1',
  'griddle-insta-2',
  'griddle-insta-3',
  'griddle-insta-4',
] as const

export const FOOTER_LOCATIONS = [
  {
    city: 'New York',
    address: '5th flora, 700/D kings road, green lane New York-1782',
    email: 'info@griddle.com',
    phone: '+10 378 483 6782',
  },
  {
    city: 'California',
    address: '5th flora, 700/D kings road, green lane California-1782',
    email: 'info@griddle.com',
    phone: '+10 378 483 6782',
  },
] as const

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#instagram' },
  { label: 'Twitter', href: '#twitter' },
  { label: 'Facebook', href: '#facebook' },
  { label: 'LinkedIn', href: '#linkedin' },
] as const
