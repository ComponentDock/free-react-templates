export const brand = {
  name: 'Sizzle',
  tagline: 'Restaurant',
}

export interface NavItem {
  label: string
  href: string
  children?: readonly string[]
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#blog', children: ['Blog Home', 'Blog Single'] },
  { label: 'Pages', href: '#pages', children: ['Elements', 'Item One', 'Item Two'] },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Wide Options of Choice',
  heading: 'Delicious Recipes',
  body: 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women.',
  cta: 'Check Our Menu',
  image: 'https://picsum.photos/id/292/1600/900',
}

export const about = {
  heading: 'About Our Story',
  body: 'Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat.',
  cta: 'view full menu',
  image: 'https://picsum.photos/id/1080/560/480',
}

export interface MenuItem {
  name: string
  price: string
  description: string
  category: string
  image: string
}

export const menuCategories = [
  'All Menu',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Budget Meal',
  'Buffet',
] as const

export const menuItems: readonly MenuItem[] = [
  {
    name: 'Cappuccino',
    price: '$49',
    description: 'Rich espresso topped with velvety steamed milk and a dusting of cocoa.',
    category: 'Breakfast',
    image: 'https://picsum.photos/id/431/560/480',
  },
  {
    name: 'Americano',
    price: '$39',
    description: 'Bold double shot of espresso lengthened with hot water for a smooth finish.',
    category: 'Lunch',
    image: 'https://picsum.photos/id/425/560/480',
  },
  {
    name: 'Macchiato',
    price: '$45',
    description: 'Espresso stained with a spoonful of frothy milk — short, strong and sweet.',
    category: 'Dinner',
    image: 'https://picsum.photos/id/431/480/560',
  },
  {
    name: 'Mocha',
    price: '$52',
    description: 'Dark chocolate blended with espresso and steamed milk, crowned with cream.',
    category: 'Budget Meal',
    image: 'https://picsum.photos/id/425/480/560',
  },
  {
    name: 'Piccolo Latte',
    price: '$35',
    description: 'A small, milky espresso in a tulip cup — perfect after a long lunch.',
    category: 'Buffet',
    image: 'https://picsum.photos/id/431/560/400',
  },
  {
    name: 'Ristretto',
    price: '$28',
    description: 'A short, concentrated espresso extraction with a golden crema layer.',
    category: 'Breakfast',
    image: 'https://picsum.photos/id/425/560/400',
  },
]

export const reservation = {
  heading: 'Reserve Your Seats to Confirm if You Come with Your Family',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  events: ['Event One', 'Event Two', 'Event Three', 'Event Four'] as const,
  cta: 'Make Reservation',
  image: 'https://picsum.photos/id/431/1600/900',
}

export const galleryCategories = [
  'All Menu',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Budget Meal',
  'Buffet',
] as const

export interface GalleryImage {
  src: string
  alt: string
  category: string
}

export const galleryImages: readonly GalleryImage[] = [
  {
    src: 'https://picsum.photos/id/292/560/480',
    alt: 'Plated breakfast dish',
    category: 'Breakfast',
  },
  {
    src: 'https://picsum.photos/id/1080/560/480',
    alt: 'Lunch bowl with greens',
    category: 'Lunch',
  },
  { src: 'https://picsum.photos/id/431/560/480', alt: 'Evening dinner plate', category: 'Dinner' },
  {
    src: 'https://picsum.photos/id/425/560/480',
    alt: 'Budget meal special',
    category: 'Budget Meal',
  },
  { src: 'https://picsum.photos/id/292/480/560', alt: 'Buffet spread', category: 'Buffet' },
  {
    src: 'https://picsum.photos/id/431/480/560',
    alt: 'Morning pastry tray',
    category: 'Breakfast',
  },
]

export interface Review {
  quote: string
  name: string
  avatar: string
}

export const reviews: readonly Review[] = [
  {
    quote:
      'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory.',
    name: 'Hulda Sutton',
    avatar: 'https://picsum.photos/seed/sizzle-review-1/80/80',
  },
  {
    quote:
      'The flavors here are unlike anything else in the city — every plate arrives warm, fragrant and beautifully plated.',
    name: 'Marta Reyes',
    avatar: 'https://picsum.photos/seed/sizzle-review-2/80/80',
  },
  {
    quote:
      'We booked a table for our anniversary and the staff made the whole evening feel effortless and special.',
    name: 'Daniel Okafor',
    avatar: 'https://picsum.photos/seed/sizzle-review-3/80/80',
  },
  {
    quote:
      'The weekend brunch is our family ritual now — the coffee menu alone is worth the trip across town.',
    name: 'Priya Nair',
    avatar: 'https://picsum.photos/seed/sizzle-review-4/80/80',
  },
]

export interface BlogPost {
  title: string
  date: string
  image: string
  excerpt: string
  likes: string
  comments: string
}

export const blogPosts: readonly BlogPost[] = [
  {
    title: 'Cooking Perfect Fried Rice in minutes',
    date: '10 Jan 2026',
    image: 'https://picsum.photos/id/292/560/480',
    excerpt: 'A quick guide to crisp, fragrant fried rice with whatever the fridge has left.',
    likes: '15 Likes',
    comments: '02 Comments',
  },
  {
    title: 'Secret of making Heart Shaped eggs',
    date: '24 Jan 2026',
    image: 'https://picsum.photos/id/1080/560/480',
    excerpt: 'A tiny trick turns an everyday breakfast into something worth sharing.',
    likes: '23 Likes',
    comments: '07 Comments',
  },
  {
    title: 'How to check steak if it is tender or not',
    date: '08 Feb 2026',
    image: 'https://picsum.photos/id/425/560/480',
    excerpt: 'Learn the touch test that butchers use to judge doneness before the pan.',
    likes: '31 Likes',
    comments: '12 Comments',
  },
  {
    title: 'Seaseme and black seed Flavored Bun Rocks',
    date: '19 Feb 2026',
    image: 'https://picsum.photos/id/431/560/480',
    excerpt: 'A soft, seeded bun recipe that turns any burger into a bakery-grade affair.',
    likes: '09 Likes',
    comments: '04 Comments',
  },
]

export const footer = {
  address: '56/8, los angeles, rochy beach, Santa monica, United states of america - 1205',
  phones: ['012-6532-568-9746', '012-6532-569-9748'],
  hours: [
    { days: 'Monday - Friday', time: '08.00 am - 10.00 pm' },
    { days: 'Saturday', time: '08.00 am - 10.00 pm' },
    { days: 'Sunday', time: '08.00 am - 10.00 pm' },
  ] as const,
  newsletter: 'You can trust us. we only send promo offers, not a single spam.',
  bottom: 'Copyright ©2026 All rights reserved | This template is made with',
}
