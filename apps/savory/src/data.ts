export interface Post {
  tag: string
  title: string
  date: string
  author: string
  seed: number
  alt: string
}

export interface HeroSlide extends Post {
  excerpt?: string
}

export interface Category {
  tag: string
  title: string
  seed: number
  alt: string
}

export interface BigPost {
  tag: string
  title: string
  date: string
  author: string
  excerpt: string
  seed: number
  alt: string
}

export interface RecentPost {
  title: string
  date: string
  seed: number
  alt: string
}

export const navLinks = ['Home', 'About Us', 'Pages', 'Recipes', 'Blog', 'Contact'] as const

export const recipeCategories = [
  'Recipe',
  'Bread',
  'Breakfast',
  'Meat',
  'Fastfood',
  'Salad',
  'Soup',
] as const

export const heroSlides: HeroSlide[] = [
  {
    tag: 'Healthy Food',
    title: 'Chicken Salad',
    date: 'July 11, 2018',
    author: 'Julia Stiles',
    seed: 101,
    alt: 'Chicken salad bowl with fresh greens',
  },
  {
    tag: 'The Best',
    title: 'Mushrooms with pork chop',
    date: 'July 08, 2018',
    author: 'Mark Cooper',
    seed: 102,
    alt: 'Mushrooms with pork chop on a plate',
  },
  {
    tag: 'Vegetarian',
    title: 'Friend eggs with ham',
    date: 'July 03, 2018',
    author: 'Julia Stiles',
    seed: 103,
    alt: 'Fried eggs with ham breakfast',
  },
  {
    tag: 'Organic Cuisine',
    title: 'Birthday cake with chocolate',
    date: 'June 28, 2018',
    author: 'Anna Reyes',
    seed: 104,
    alt: 'Chocolate birthday cake',
  },
]

export const categories: Category[] = [
  { tag: 'The Best', title: 'Healthy Food', seed: 201, alt: 'Healthy food bowl' },
  { tag: 'The Best', title: 'Organic Cuisine', seed: 202, alt: 'Organic cuisine plate' },
  { tag: 'The Best', title: 'Vegetarian Food', seed: 203, alt: 'Vegetarian food spread' },
]

export const bigPosts: BigPost[] = [
  {
    tag: 'Healthy',
    title: 'Friend eggs with ham',
    date: 'July 11, 2018',
    author: 'Julia Stiles',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor auctor aliquet. Sed nec ex vitae lacus porttitor tincidunt. Pellentesque habitant morbi tristique senectus et netus.',
    seed: 301,
    alt: 'Fried eggs with ham on a rustic plate',
  },
  {
    tag: 'The Best',
    title: 'Steak with boiled vegetables',
    date: 'July 04, 2018',
    author: 'Mark Cooper',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor auctor aliquet. Sed nec ex vitae lacus porttitor tincidunt. Pellentesque habitant morbi tristique senectus et netus.',
    seed: 302,
    alt: 'Steak with boiled vegetables',
  },
]

export const gridPosts: Post[] = [
  {
    tag: 'The Best',
    title: 'Mushrooms with pork chop',
    date: 'July 11, 2018',
    author: 'Julia Stiles',
    seed: 401,
    alt: 'Mushrooms with pork chop',
  },
  {
    tag: 'Healthy',
    title: 'Fresh pasta with basil',
    date: 'July 10, 2018',
    author: 'Mark Cooper',
    seed: 402,
    alt: 'Fresh pasta with basil',
  },
  {
    tag: 'The Best',
    title: 'Birthday cake with chocolate',
    date: 'July 09, 2018',
    author: 'Anna Reyes',
    seed: 403,
    alt: 'Chocolate birthday cake',
  },
  {
    tag: 'Organic',
    title: 'Roasted tomato soup',
    date: 'July 08, 2018',
    author: 'Julia Stiles',
    seed: 404,
    alt: 'Roasted tomato soup',
  },
  {
    tag: 'Vegetarian',
    title: 'Honey glazed carrots',
    date: 'July 07, 2018',
    author: 'Mark Cooper',
    seed: 405,
    alt: 'Honey glazed carrots',
  },
  {
    tag: 'The Best',
    title: 'Lemon herb quinoa',
    date: 'July 06, 2018',
    author: 'Anna Reyes',
    seed: 406,
    alt: 'Lemon herb quinoa bowl',
  },
  {
    tag: 'Healthy',
    title: 'Berry overnight oats',
    date: 'July 05, 2018',
    author: 'Julia Stiles',
    seed: 407,
    alt: 'Berry overnight oats jar',
  },
  {
    tag: 'Organic',
    title: 'Garlic butter shrimp',
    date: 'July 04, 2018',
    author: 'Mark Cooper',
    seed: 408,
    alt: 'Garlic butter shrimp skillet',
  },
  {
    tag: 'The Best',
    title: 'Avocado toast with egg',
    date: 'July 03, 2018',
    author: 'Anna Reyes',
    seed: 409,
    alt: 'Avocado toast with egg',
  },
]

export const trendingPosts: Post[] = [
  {
    tag: 'The Best',
    title: 'Chicken Salad',
    date: 'July 11, 2018',
    author: 'Julia Stiles',
    seed: 501,
    alt: 'Chicken salad bowl',
  },
  {
    tag: 'The Best',
    title: 'Mushrooms with pork chop',
    date: 'July 10, 2018',
    author: 'Mark Cooper',
    seed: 502,
    alt: 'Mushrooms with pork chop',
  },
  {
    tag: 'The Best',
    title: 'Birthday cake with chocolate',
    date: 'July 09, 2018',
    author: 'Anna Reyes',
    seed: 503,
    alt: 'Chocolate birthday cake',
  },
  {
    tag: 'The Best',
    title: 'Friend eggs with ham',
    date: 'July 08, 2018',
    author: 'Julia Stiles',
    seed: 504,
    alt: 'Fried eggs with ham',
  },
  {
    tag: 'The Best',
    title: 'Steak with boiled vegetables',
    date: 'July 07, 2018',
    author: 'Mark Cooper',
    seed: 505,
    alt: 'Steak with vegetables',
  },
  {
    tag: 'The Best',
    title: 'Roasted tomato soup',
    date: 'July 06, 2018',
    author: 'Julia Stiles',
    seed: 506,
    alt: 'Roasted tomato soup',
  },
]

export const recentPosts: RecentPost[] = [
  { title: 'Chicken Salad', date: 'July 11, 2018', seed: 601, alt: 'Chicken salad bowl' },
  {
    title: 'Mushrooms with pork chop',
    date: 'July 10, 2018',
    seed: 602,
    alt: 'Mushrooms with pork chop',
  },
  {
    title: 'Birthday cake with chocolate',
    date: 'July 09, 2018',
    seed: 603,
    alt: 'Chocolate birthday cake',
  },
  { title: 'Friend eggs with ham', date: 'July 08, 2018', seed: 604, alt: 'Fried eggs with ham' },
  {
    title: 'Steak with boiled vegetables',
    date: 'July 07, 2018',
    seed: 605,
    alt: 'Steak with vegetables',
  },
]

export const instaTiles = [
  { seed: 701, alt: 'Instagram post of a fresh salad' },
  { seed: 702, alt: 'Instagram post of a berry tart' },
  { seed: 703, alt: 'Instagram post of a pasta dish' },
  { seed: 704, alt: 'Instagram post of a soup bowl' },
  { seed: 705, alt: 'Instagram post of grilled vegetables' },
  { seed: 706, alt: 'Instagram post of a chocolate cake' },
  { seed: 707, alt: 'Instagram post of a smoothie' },
  { seed: 708, alt: 'Instagram post of a burger' },
  { seed: 709, alt: 'Instagram post of a fruit platter' },
  { seed: 710, alt: 'Instagram post of a toast breakfast' },
]

export const socialLinks = [
  { name: 'Pinterest', seed: 'pinterest', href: 'https://pinterest.com' },
  { name: 'Facebook', seed: 'facebook', href: 'https://facebook.com' },
  { name: 'Twitter', seed: 'x', href: 'https://x.com' },
  { name: 'Instagram', seed: 'instagram', href: 'https://instagram.com' },
] as const

export const footerNav = ['Home', 'Recipes', 'About Us', 'Blog', 'Contact'] as const

export const adImage = { seed: 900, alt: 'Advertisement placeholder' }

export function postImage(seed: number, width: number, height: number): string {
  return `https://picsum.photos/seed/savory-${seed}/${width}/${height}`
}
