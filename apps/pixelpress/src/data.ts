/**
 * Pixelpress data — recreated from the ColorLib "Endgam" preview DOM
 * (https://preview.colorlib.com/theme/endgam/): same content kinds and
 * structure (social row, navy nav, giant hero headline, story teasers,
 * latest-news cards, trending/categories sidebar, video promo, newsletter,
 * footer), paraphrased where useful. All imagery uses seeded picsum
 * placeholders.
 */

export const siteName = 'Pixelpress'

export const followUsLabel = 'Follow us:'

export const socials = ['pinterest', 'facebook', 'twitter', 'dribbble', 'behance'] as const

export const socialLabels: Record<string, string> = {
  pinterest: 'Pinterest',
  facebook: 'Facebook',
  twitter: 'Twitter',
  dribbble: 'Dribbble',
  behance: 'Behance',
}

export const loginLabel = 'Login / Register'
export const openMenuLabel = 'Open menu'
export const closeMenuLabel = 'Close menu'

export const navItems = ['Home', 'Games', 'Reviews', 'News', 'Contact'] as const
export const gameSingleLabel = 'Game Single'

export const heroTitle = 'Game on!'
export const heroSubtext =
  'Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor, sit amet elementum lorem. Ut cursus tempor turpis.'
export const readMoreLabel = 'Read More'
export const previousSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'

export interface HeroSlide {
  seed: string
}

export const heroSlides: readonly HeroSlide[] = [
  { seed: 'pixelpress-hero-1' },
  { seed: 'pixelpress-hero-2' },
]

export interface Teaser {
  date: string
  category: string
  title: string
  excerpt: string
}

export const introTeasers: readonly Teaser[] = [
  {
    date: '11.11.18',
    category: 'Games',
    title: 'The best online game is out now!',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida...',
  },
  {
    date: '11.11.18',
    category: 'Playstation',
    title: 'Top 5 best games in november',
    excerpt:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum labore suspendisse ultrices gravida...',
  },
  {
    date: '11.11.18',
    category: 'Reviews',
    title: 'Get this game at a promo price',
    excerpt:
      'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida ncididunt ut labore...',
  },
]

export const blogTitle = 'Latest News'
export const blogFilters = ['Racing', 'Shooters', 'Strategy', 'Online'] as const

export interface Article {
  seed: string
  date: string
  category: string
  title: string
  excerpt: string
}

export const blogCards: readonly Article[] = [
  {
    seed: 'pixelpress-blog-1',
    date: '11.11.18',
    category: 'Games',
    title: 'The best online game is out now!',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....',
  },
  {
    seed: 'pixelpress-blog-2',
    date: '11.11.18',
    category: 'Games',
    title: 'The best online game is out now!',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....',
  },
  {
    seed: 'pixelpress-blog-3',
    date: '11.11.18',
    category: 'Games',
    title: 'The best online game is out now!',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....',
  },
]

export const trendingTitle = 'Trending'

export interface TrendingItem {
  seed: string
  date: string
  category: string
  title: string
}

export const trendingItems: readonly TrendingItem[] = [
  {
    seed: 'pixelpress-trend-1',
    date: '11.11.18',
    category: 'Games',
    title: 'The best online game is out now!',
  },
  {
    seed: 'pixelpress-trend-2',
    date: '11.11.18',
    category: 'Games',
    title: 'The best online game is out now!',
  },
  {
    seed: 'pixelpress-trend-3',
    date: '11.11.18',
    category: 'Games',
    title: 'The best online game is out now!',
  },
  {
    seed: 'pixelpress-trend-4',
    date: '11.11.18',
    category: 'Games',
    title: 'The best online game is out now!',
  },
]

export const categoriesTitle = 'categories'
export const categoryLinks = [
  'Games',
  'Gaming Tips & Tricks',
  'Online Games',
  'Team Games',
  'Community',
  'Uncategorized',
] as const

export const videoTitle = 'Promo video of the game'
export const videoParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
export const videoUrl = 'https://www.youtube.com/embed/uFsGy5x_fyQ?autoplay=1'
export const playVideoLabel = 'Play promo video'
export const closeVideoLabel = 'Close video'

export const featured = {
  seed: 'pixelpress-featured',
  date: '11.11.18',
  category: 'Games',
  title: "The game you've been waiting for is out now",
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum posuere porttitor justo id pellentesque. Proin id lacus feugiat, posuere erat sit amet, commodo ipsum. Donec pellentesque vestibulum metus...',
}

export const newsletterTitle = 'Subscribe to our newsletter'
export const newsletterPlaceholder = 'ENTER YOUR E-MAIL'
export const newsletterError = 'Please enter a valid email address.'
export const newsletterSuccess = 'Thanks for subscribing!'
export const subscribeLabel = 'subscribe'
export const emailLabel = 'Email address'

export const footerMenu = ['Home', 'Games', 'Reviews', 'News', 'Contact'] as const
export const copyrightPrefix = 'Copyright ©'
export const copyrightSuffix = 'Pixelpress — Game news template'

export function imgUrl(seed: string, w: number, h: number): string {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`
}
