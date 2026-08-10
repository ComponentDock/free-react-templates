export const brandName = 'Feast'
export const tagline = 'RECIPES & MORE'

export const navLinks = ['Home', 'Features', 'Recipes', 'Reviews', 'Contact'] as const

export const socialLinks = [
  'pinterest',
  'facebook',
  'twitter',
  'dribbble',
  'behance',
  'linkedin',
] as const
export type SocialName = (typeof socialLinks)[number]

export const socialLabels: Record<SocialName, string> = {
  pinterest: 'Pinterest',
  facebook: 'Facebook',
  twitter: 'Twitter',
  dribbble: 'Dribbble',
  behance: 'Behance',
  linkedin: 'LinkedIn',
}

export const registerLabel = 'Register'
export const loginLabel = 'Login'
export const searchLabel = 'Search'
export const darkModeLabel = 'Toggle dark mode'
export const menuToggleLabel = 'Toggle menu'

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Hero ─────────────────────────────────────────────────────────────── */

export const heroSlides = ['feast-hero-1', 'feast-hero-2'] as const

export const heroStickers = [
  { text: 'Healthy Recipes', color: 'pink', rotate: true },
  { text: 'from the best chefs', color: 'yellow', rotate: false },
  { text: 'for all the foodies', color: 'lime', rotate: false },
] as const

export const previousSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'

/* ── Ad banner ────────────────────────────────────────────────────────── */

export const adHeading = 'Amazing deserts'
export const adPoints = [
  'Easy to make',
  'Step by Step Video Tutorial',
  'Gluten Free',
  'Healthy Ingredients',
] as const
export const adSeeds = ['feast-ad-1', 'feast-ad-2', 'feast-ad-3'] as const

/* ── Latest recipes ───────────────────────────────────────────────────── */

export const latestRecipesHeading = 'Latest recipes'

export interface Recipe {
  name: string
  seed: string
}

export const recipes: Recipe[] = [
  { name: 'Traditional Pizza', seed: 'feast-recipe-1' },
  { name: 'Italian Home-Made Pasta', seed: 'feast-recipe-2' },
  { name: 'Cheese Cake Tart', seed: 'feast-recipe-3' },
  { name: 'Roasted Tomato Soup', seed: 'feast-recipe-4' },
  { name: 'Herb Butter Salmon', seed: 'feast-recipe-5' },
  { name: 'Citrus Berry Parfait', seed: 'feast-recipe-6' },
]

/* 4 filled stars + 1 faded star, matching the original `.is-fade` pattern */
export const ratingStars = [0, 1, 2, 3, 4] as const

/* ── Bottom widgets ───────────────────────────────────────────────────── */

export const topRatedHeading = 'Top rated recipes'
export const mostLikedHeading = 'Most liked recipes'

export interface RecipeListEntry {
  name: string
  date: string
  seed: string
}

export const topRated: RecipeListEntry[] = [
  { name: 'Italian Pasta', date: 'March 14, 2018', seed: 'feast-top-1' },
  { name: 'French Onion Soup', date: 'March 12, 2018', seed: 'feast-top-2' },
  { name: 'Homemade Pasta', date: 'March 10, 2018', seed: 'feast-top-3' },
  { name: 'Onion Soup Gratinee', date: 'March 8, 2018', seed: 'feast-top-4' },
  { name: 'Feta Cheese Burgers', date: 'March 6, 2018', seed: 'feast-top-5' },
]

export const mostLiked: RecipeListEntry[] = [
  { name: 'Traditional Food', date: 'March 14, 2018', seed: 'feast-like-1' },
  { name: 'Baked Salmon', date: 'March 12, 2018', seed: 'feast-like-2' },
  { name: 'Deep Fried Fish', date: 'March 10, 2018', seed: 'feast-like-3' },
  { name: 'Raw Tomato Soup', date: 'March 8, 2018', seed: 'feast-like-4' },
  { name: 'Vegan Food', date: 'March 6, 2018', seed: 'feast-like-5' },
]

export const blogCard = {
  title: 'Italian restaurant Review',
  author: 'By Maria Williams',
  excerpt:
    'A quiet table by the window, service that never hurries, and a pasta course worth crossing town for.',
  comments: '2 Comments',
  date: 'May 04, 2018',
  seed: 'feast-blog',
}
export const readmoreLabel = 'Read more'

/* ── Reviews ──────────────────────────────────────────────────────────── */

export interface Review {
  name: string
  dateLine: string
  badge: string
  author: string
  seed: string
}

export const reviews: Review[] = [
  {
    name: 'Feta Cheese Burgers',
    dateLine: 'March 14, 2018',
    badge: 'May 04, 2018',
    author: 'By Janice Smith',
    seed: 'feast-review-1',
  },
  {
    name: 'Mozarella Pasta',
    dateLine: 'March 14, 2018',
    badge: 'May 04, 2018',
    author: 'By Leo Grant',
    seed: 'feast-review-2',
  },
]

/* ── Gallery ──────────────────────────────────────────────────────────── */

export const gallerySeeds = Array.from({ length: 6 }, (_, i) => `feast-gallery-${i + 1}`)
export const galleryLabel = 'Gallery'
export const scrollLeftLabel = 'Scroll gallery left'
export const scrollRightLabel = 'Scroll gallery right'

/* ── Footer ───────────────────────────────────────────────────────────── */

export const footerCopyright = '© 2026 Feast. All rights reserved.'
export const footerCredit = 'Cooked with care and a pinch of paprika.'
