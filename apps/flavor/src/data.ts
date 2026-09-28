export const brand = {
  name: 'Flavor',
  tagline: 'Restaurant',
}

export interface NavItem {
  label: string
  href: string
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reservation', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  heading: 'Special & Fresh Food',
  body: 'Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  cta: 'Book a table',
  image: 'https://picsum.photos/seed/flavor-hero/1600/900',
}

export const about = {
  heading: 'Welcome to Flavor',
  body: 'Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  images: [
    'https://picsum.photos/seed/flavor-about-1/600/400',
    'https://picsum.photos/seed/flavor-about-2/600/400',
  ] as const,
}

export interface InfoItem {
  icon: string
  title: string
  detail: string
}

export const infoItems: readonly InfoItem[] = [
  {
    icon: 'MapPin',
    title: 'Address',
    detail: '56/8, Los Angeles, Santa Monica, United States - 1205',
  },
  { icon: 'Clock', title: 'Opening Time', detail: 'Mon - Fri: 8:00 AM - 10:00 PM' },
  { icon: 'Phone', title: 'Phone', detail: '012-6532-568-9746' },
  { icon: 'Mail', title: 'Email', detail: 'info@flavor.com' },
]

export interface Dish {
  title: string
  image: string
}

export const specialties: readonly Dish[] = [
  { title: 'Spicy Chicken Wings', image: 'https://picsum.photos/seed/flavor-dish-1/600/400' },
  { title: 'Grilled Lamb Chops', image: 'https://picsum.photos/seed/flavor-dish-2/600/400' },
  { title: 'Shrimp Cocktail', image: 'https://picsum.photos/seed/flavor-dish-3/600/400' },
]

export const specialties2: readonly Dish[] = [
  { title: 'Beef Wellington', image: 'https://picsum.photos/seed/flavor-dish-4/600/400' },
  { title: 'Lobster Thermidor', image: 'https://picsum.photos/seed/flavor-dish-5/600/400' },
  { title: 'Duck Confit', image: 'https://picsum.photos/seed/flavor-dish-6/600/400' },
]

export const parallaxIntro = {
  heading: 'Foods you love to taste',
  body: 'Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  cta: 'Watch Video',
}

export interface Testimonial {
  quote: string
  author: string
}

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      'The food was absolutely incredible and the service was top notch. We will definitely be coming back again soon.',
    author: 'Martin Andrew',
  },
  {
    quote:
      'A wonderful dining experience from start to finish. The flavors were perfectly balanced and beautifully presented.',
    author: 'Carl Henderson',
  },
  {
    quote:
      'Best restaurant in town! The chef really knows how to bring out the natural flavors of every ingredient.',
    author: 'Thomas Henry',
  },
]

export interface MenuItem {
  name: string
  price: string
  image: string
  category: string
}

export const menuCategories = ['Main', 'Desserts', 'Drinks'] as const

export const menuItems: readonly MenuItem[] = [
  {
    name: 'Chicken Fried Rice',
    price: '$40',
    image: 'https://picsum.photos/seed/flavor-menu-1/600/400',
    category: 'Main',
  },
  {
    name: 'Tuna Roast',
    price: '$45',
    image: 'https://picsum.photos/seed/flavor-menu-2/600/400',
    category: 'Main',
  },
  {
    name: 'Meat Ball',
    price: '$35',
    image: 'https://picsum.photos/seed/flavor-menu-3/600/400',
    category: 'Main',
  },
  {
    name: 'Mushroom Pasta',
    price: '$38',
    image: 'https://picsum.photos/seed/flavor-menu-4/600/400',
    category: 'Main',
  },
  {
    name: 'Grilled Salmon',
    price: '$52',
    image: 'https://picsum.photos/seed/flavor-menu-5/600/400',
    category: 'Main',
  },
  {
    name: 'Caesar Salad',
    price: '$30',
    image: 'https://picsum.photos/seed/flavor-menu-6/600/400',
    category: 'Main',
  },
  {
    name: 'Chocolate Cake',
    price: '$18',
    image: 'https://picsum.photos/seed/flavor-dessert-1/600/400',
    category: 'Desserts',
  },
  {
    name: 'Fruit Parfait',
    price: '$15',
    image: 'https://picsum.photos/seed/flavor-dessert-2/600/400',
    category: 'Desserts',
  },
  {
    name: 'Ice Cream Sundae',
    price: '$12',
    image: 'https://picsum.photos/seed/flavor-dessert-3/600/400',
    category: 'Desserts',
  },
  {
    name: 'Tiramisu',
    price: '$20',
    image: 'https://picsum.photos/seed/flavor-dessert-4/600/400',
    category: 'Desserts',
  },
  {
    name: 'Cheesecake',
    price: '$16',
    image: 'https://picsum.photos/seed/flavor-dessert-5/600/400',
    category: 'Desserts',
  },
  {
    name: 'Creme Brulee',
    price: '$14',
    image: 'https://picsum.photos/seed/flavor-dessert-6/600/400',
    category: 'Desserts',
  },
  {
    name: 'Fresh Lemonade',
    price: '$8',
    image: 'https://picsum.photos/seed/flavor-drink-1/600/400',
    category: 'Drinks',
  },
  {
    name: 'Iced Coffee',
    price: '$6',
    image: 'https://picsum.photos/seed/flavor-drink-2/600/400',
    category: 'Drinks',
  },
  {
    name: 'Mango Smoothie',
    price: '$10',
    image: 'https://picsum.photos/seed/flavor-drink-3/600/400',
    category: 'Drinks',
  },
  {
    name: 'Green Tea',
    price: '$5',
    image: 'https://picsum.photos/seed/flavor-drink-4/600/400',
    category: 'Drinks',
  },
  {
    name: 'Espresso',
    price: '$4',
    image: 'https://picsum.photos/seed/flavor-drink-5/600/400',
    category: 'Drinks',
  },
  {
    name: 'Sparkling Water',
    price: '$3',
    image: 'https://picsum.photos/seed/flavor-drink-6/600/400',
    category: 'Drinks',
  },
]

export interface BlogPost {
  title: string
  date: string
  image: string
}

export const blogPosts: readonly BlogPost[] = [
  {
    title: 'Cooking Tips for Beginners',
    date: '15 Jan 2026',
    image: 'https://picsum.photos/seed/flavor-blog-1/200/200',
  },
  {
    title: 'Secrets of Perfect Pasta',
    date: '22 Jan 2026',
    image: 'https://picsum.photos/seed/flavor-blog-2/200/200',
  },
  {
    title: 'Seasonal Ingredients Guide',
    date: '28 Jan 2026',
    image: 'https://picsum.photos/seed/flavor-blog-3/200/200',
  },
]

export const instagramImages = [
  'https://picsum.photos/seed/flavor-insta-1/200/200',
  'https://picsum.photos/seed/flavor-insta-2/200/200',
  'https://picsum.photos/seed/flavor-insta-3/200/200',
  'https://picsum.photos/seed/flavor-insta-4/200/200',
] as const

export const footer = {
  about:
    'Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  newsletter: 'You can trust us. We only send promo offers, not a single spam.',
}
