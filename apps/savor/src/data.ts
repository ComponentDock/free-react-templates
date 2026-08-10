export const brandName = 'Savor'

export const navLinks = ['Home', 'Recipes', 'Dinner', 'Desserts', 'Pages'] as const
export const pagesDropdown = [
  'Categories Grid',
  'Categories List',
  'Single Post',
  'About',
  'Contact',
] as const

export const socialLinks = [
  'facebook',
  'twitter',
  'pinterest',
  'instagram',
  'google-plus',
  'youtube',
] as const
export type SocialName = (typeof socialLinks)[number]

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  pinterest: 'Pinterest',
  instagram: 'Instagram',
  'google-plus': 'Google Plus',
  youtube: 'YouTube',
}

export const searchLabel = 'Search'
export const searchPlaceholder = 'Search'
export const subscribeButtonLabel = 'Subscribe'
export const menuToggleLabel = 'Open menu'
export const closeMenuLabel = 'Close menu'
export const mobileMenuLabel = 'Mobile menu'
export const pagesDropdownLabel = 'Pages'
export const dropdownToggleLabel = 'Toggle pages dropdown'

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Hero slider ─────────────────────────────────────────────────────── */

export interface HeroSlide {
  title: string
  day: string
  month: string
  category: string
  byline: string
  seed: string
}

export const heroSlides: readonly HeroSlide[] = [
  {
    title: 'Vegan White Peach Mug Cobbler With Cardamom',
    day: '08',
    month: 'Aug',
    category: 'Vegan Desserts',
    byline: 'by Admin · 3 min read · 20 Comment',
    seed: 'savor-hero-1',
  },
  {
    title: 'How to Make a Milkshake With Any Ice Cream, Any Toppings',
    day: '07',
    month: 'Aug',
    category: 'Desserts',
    byline: 'by Admin · 4 min read · 14 Comment',
    seed: 'savor-hero-2',
  },
  {
    title: 'Vintage Copper Preserve Pan with Brass Handles, Mid 19th Century',
    day: '06',
    month: 'Aug',
    category: 'Kitchen Finds',
    byline: 'by Admin · 2 min read · 9 Comment',
    seed: 'savor-hero-3',
  },
  {
    title: 'Marinated Lentil Salad with Zucchini and Tomatoes',
    day: '05',
    month: 'Aug',
    category: 'Vegan',
    byline: 'by Admin · 5 min read · 26 Comment',
    seed: 'savor-hero-4',
  },
]

export const heroLabel = 'Featured stories'
export const previousSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'

/* ── Category tiles ──────────────────────────────────────────────────── */

export interface CategoryTile {
  name: string
  posts: string
  seed: string
}

export const categories: readonly CategoryTile[] = [
  { name: 'Dinner', posts: '128 Posts', seed: 'savor-cat-1' },
  { name: 'Desserts', posts: '96 Posts', seed: 'savor-cat-2' },
  { name: 'Vegan', posts: '74 Posts', seed: 'savor-cat-3' },
  { name: 'Breakfast', posts: '52 Posts', seed: 'savor-cat-4' },
]

export const categoriesLabel = 'Categories'

/* ── Blog grid ───────────────────────────────────────────────────────── */

type PostVariant = 'standard' | 'plain' | 'small'

export interface BlogPost {
  title: string
  date: string
  category: string
  excerpt: string
  byline: string
  variant: PostVariant
  seed: string
}

export const blogPosts: readonly BlogPost[] = [
  {
    title: 'The Absolute Best Way to Cook Steak Perfectly, According to Wayyy Too Many Tests',
    date: 'Aug 08, 2018',
    category: 'Dinner',
    excerpt:
      'Salted, rested, and seared hard — after dozens of tests, this is the method we keep coming back to.',
    byline: 'by Admin',
    variant: 'standard',
    seed: 'savor-post-1',
  },
  {
    title: 'The Best Weeknight Baked Potatoes, 3 Creative Ways',
    date: 'Aug 07, 2018',
    category: 'Dinner',
    excerpt:
      'Crispy skins, fluffy insides, and three toppings that turn a humble potato into dinner.',
    byline: 'by Admin',
    variant: 'plain',
    seed: 'savor-post-2',
  },
  {
    title: 'This Summer Snacking Cake Is the Sweetest Excuse to Turn On the Oven',
    date: 'Aug 06, 2018',
    category: 'Desserts',
    excerpt:
      'One bowl, no mixer, and a mountain of ripe summer fruit — this snacking cake disappears fast.',
    byline: 'by Admin',
    variant: 'standard',
    seed: 'savor-post-3',
  },
  {
    title: 'This 2-Ingredient Spread Makes Any Egg Sandwich So Much Better',
    date: 'Aug 05, 2018',
    category: 'Breakfast',
    excerpt: 'Butter whipped with honey — that is the whole trick, and it changes everything.',
    byline: 'by Admin',
    variant: 'small',
    seed: 'savor-post-4',
  },
  {
    title: '17 Perfect Gifts for Your Vegan Friend Because Sometimes Tofu Is Not Enough',
    date: 'Aug 04, 2018',
    category: 'Vegan',
    excerpt:
      'From smoked paprika to a really good cast-iron pan, seventeen gifts any plant-based cook will love.',
    byline: 'by Admin',
    variant: 'standard',
    seed: 'savor-post-5',
  },
  {
    title: 'A 5-Minute Peach Mug Cobbler That Just So Happens to Be Vegan',
    date: 'Aug 03, 2018',
    category: 'Desserts',
    excerpt: 'Peaches, oats, and five minutes in the microwave — dessert has never been faster.',
    byline: 'by Admin',
    variant: 'small',
    seed: 'savor-post-6',
  },
]

export const blogLabel = 'Blog posts'
export const shareLabel = 'Share this post'
export const loadMoreLabel = 'Load More'

/* ── Sidebar ─────────────────────────────────────────────────────────── */

export const aboutHeading = 'About Me'
export const aboutBlurb = 'Hi every one! I’m Lena Mollein.'
export const aboutPhotoAlt = 'Portrait of Lena Mollein, the Savor author'

export const followHeading = 'Follow'
export const featuredHeading = 'Featured Posts'
export const featuredLarge = {
  title: 'The Best Grass Stain Remover Is Already In Your Pantry',
  date: 'Aug 08, 2018',
  seed: 'savor-featured-large',
}
export const featuredList = [
  {
    title: 'Fresh Herb Polenta with Parsnip Chips and Maple Butter',
    date: 'Aug 06, 2018',
    seed: 'savor-featured-1',
  },
  {
    title: 'The Best Weeknight Baked Potatoes, 3 Creative Ways',
    date: 'Aug 05, 2018',
    seed: 'savor-featured-2',
  },
  {
    title: 'This 2-Ingredient Spread Makes Any Egg Sandwich So Much Better',
    date: 'Aug 04, 2018',
    seed: 'savor-featured-3',
  },
  {
    title: 'A 5-Minute Peach Mug Cobbler That Just So Happens to Be Vegan',
    date: 'Aug 03, 2018',
    seed: 'savor-featured-4',
  },
] as const

export const sidebarCategories = [
  { name: 'Dinner', count: '128' },
  { name: 'Desserts', count: '96' },
  { name: 'Vegan', count: '74' },
  { name: 'Breakfast', count: '52' },
] as const

export const subscribeHeading = 'Subscribe'
export const subscribeText = 'Get the latest recipes and stories delivered straight to your inbox.'
export const subscribePlaceholder = 'Enter your email'
export const subscribeSuccess = 'Thanks for subscribing!'

/* ── Footer ──────────────────────────────────────────────────────────── */

export const instagramHeading = 'Instagram'
export const instagramHandle = '@savorblog'
export const instagramFollowers = '128k Followers'
export const instagramTiles = Array.from({ length: 6 }, (_, i) => `savor-ig-${i + 1}`)

export const footerCopyright = 'All rights reserved.'
