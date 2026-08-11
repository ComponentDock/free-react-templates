export const siteName = 'Lantern'
export const skipLabel = 'Skip to main content'

export const searchLabel = 'Search'
export const searchPlaceholder = 'Search here'

export const navLinks = [
  'Home',
  'Sport',
  'Travel',
  'Beauty',
  'Music',
  'Art',
  'Fashion',
  'Contact',
] as const

export const sportLabel = 'Sport'
export const sportDropdown = ['PAGE 1', 'PAGE 2'] as const

const categories = [
  'ART',
  'FASHION',
  'MUSIC',
  'TRAVEL',
  'BEAUTY',
  'SPORT',
  'DESIGN',
  'FOOD',
] as const

export type Category = (typeof categories)[number]

/** Decorative category-tag accents from the preview (color-ash base replaced
    by per-category hues: #E14A3D / #58ADEE / #36D98A / #365B99). */
export const categoryColors: Record<Category, string> = {
  ART: 'text-tag-red',
  FASHION: 'text-tag-blue',
  MUSIC: 'text-tag-green',
  TRAVEL: 'text-tag-indigo',
  BEAUTY: 'text-tag-red',
  SPORT: 'text-tag-blue',
  DESIGN: 'text-tag-green',
  FOOD: 'text-tag-indigo',
}

export interface HeroPost {
  seed: string
  category: Category
  title: string
}

export const heroPost: HeroPost = {
  seed: 'lantern-hero',
  category: 'ART',
  title: 'The Shoddy Science Behind Most Pregnancy Advice',
}
export const continueReadingLabel = 'Continue Reading'
export const hotNewsTitle = 'HOT NEWS'

export interface MiniPost {
  seed: string
  category: Category
  title: string
  likes: number
  comments: number
}

export const hotNews: MiniPost[] = [
  {
    seed: 'lantern-hot-1',
    category: 'ART',
    title: 'I Got Off Adderall and Xanax Using Psilocybin',
    likes: 15,
    comments: 105,
  },
  {
    seed: 'lantern-hot-2',
    category: 'FASHION',
    title: 'The Winter Coat You Will Never Want to Take Off',
    likes: 27,
    comments: 88,
  },
  {
    seed: 'lantern-hot-3',
    category: 'MUSIC',
    title: 'Inside the Studio of a Lo-Fi Legend',
    likes: 19,
    comments: 64,
  },
  {
    seed: 'lantern-hot-4',
    category: 'TRAVEL',
    title: 'The Quiet Villages of the Amalfi Coast',
    likes: 33,
    comments: 121,
  },
  {
    seed: 'lantern-hot-5',
    category: 'BEAUTY',
    title: 'Five Skincare Ingredients That Actually Work',
    likes: 41,
    comments: 96,
  },
  {
    seed: 'lantern-hot-6',
    category: 'SPORT',
    title: 'The Marathon Runners of the Sahara',
    likes: 12,
    comments: 47,
  },
]

export interface Article {
  seed: string
  category: Category
  title: string
  likes: number
  comments: number
}

export const articles: Article[] = [
  {
    seed: 'lantern-article-1',
    category: 'DESIGN',
    title: 'The Rise of Brutalist Web Design',
    likes: 24,
    comments: 31,
  },
  {
    seed: 'lantern-article-2',
    category: 'FOOD',
    title: 'A Field Guide to Fermented Foods',
    likes: 18,
    comments: 22,
  },
  {
    seed: 'lantern-article-3',
    category: 'TRAVEL',
    title: 'The Grand Bazaar Through a Local\u2019s Eyes',
    likes: 35,
    comments: 58,
  },
  {
    seed: 'lantern-article-4',
    category: 'MUSIC',
    title: 'Vinyl Pressing Plants Are Running at Full Capacity',
    likes: 29,
    comments: 44,
  },
  {
    seed: 'lantern-article-5',
    category: 'BEAUTY',
    title: 'Why Hair Salons Are Booking Out for Weeks',
    likes: 16,
    comments: 27,
  },
  {
    seed: 'lantern-article-6',
    category: 'SPORT',
    title: 'The Tactics Behind the Comeback Season',
    likes: 21,
    comments: 39,
  },
]

export const trendingTitle = 'Whats trending'

export const trendingFeatured: Article = {
  seed: 'lantern-trending-featured',
  category: 'ART',
  title: 'As an Alcoholic, Your Company \u201CParks\u201D Are Killing Me',
  likes: 47,
  comments: 132,
}

export const trendingSmall: Article[] = [
  {
    seed: 'lantern-trending-1',
    category: 'FASHION',
    title: 'The Suit Is Back \u2014 and It\u2019s Uncomfortable',
    likes: 22,
    comments: 41,
  },
  {
    seed: 'lantern-trending-2',
    category: 'DESIGN',
    title: 'Posters That Stopped the City',
    likes: 14,
    comments: 19,
  },
  {
    seed: 'lantern-trending-3',
    category: 'FOOD',
    title: 'The Humble Sandwich, Reimagined',
    likes: 31,
    comments: 52,
  },
]

export const videosTitle = 'Most Popular Videos'

export const videosFeatured: Article = {
  seed: 'lantern-video-featured',
  category: 'FASHION',
  title: 'Inside the Atelier of a Couture House',
  likes: 58,
  comments: 143,
}

export const videoList: Article[] = [
  {
    seed: 'lantern-video-1',
    category: 'MUSIC',
    title: 'Drummers of the City \u2014 A Documentary',
    likes: 26,
    comments: 38,
  },
  {
    seed: 'lantern-video-2',
    category: 'TRAVEL',
    title: 'Catching the First Train to Nowhere',
    likes: 19,
    comments: 25,
  },
  {
    seed: 'lantern-video-3',
    category: 'SPORT',
    title: 'The Last Minute of the Final',
    likes: 44,
    comments: 87,
  },
  {
    seed: 'lantern-video-4',
    category: 'ART',
    title: 'Restoring a Renaissance Fresco',
    likes: 12,
    comments: 17,
  },
]

export const loadMoreLabel = 'LOAD MORE'

export const playLabel = (title: string) => `Play video: ${title}`

export const topStoriesTitle = 'TOP STORIES'

export interface Story {
  seed: string
  title: string
}

export const topStories: Story[] = [
  {
    seed: 'lantern-story-1',
    title: 'I Got Off Adderall and Xanax Using Psilocybin',
  },
  {
    seed: 'lantern-story-2',
    title: 'As an Alcoholic, Your Company \u201CParks\u201D Are Killing Me',
  },
  {
    seed: 'lantern-story-3',
    title: 'The Shoddy Science Behind Most Pregnancy Advice',
  },
  {
    seed: 'lantern-story-4',
    title: 'Inside the Atelier of a Couture House',
  },
]

export const newestVideoTitle = 'NEWEST VIDEO'

export const newestVideos: Story[] = [
  {
    seed: 'lantern-newest-1',
    title: 'I Got Off Adderall and Xanax Using Psilocybin',
  },
  {
    seed: 'lantern-newest-2',
    title: 'As an Alcoholic, Your Company \u201CParks\u201D Are Killing Me',
  },
  {
    seed: 'lantern-newest-3',
    title: 'The Shoddy Science Behind Most Pregnancy Advice',
  },
  {
    seed: 'lantern-newest-4',
    title: 'Inside the Atelier of a Couture House',
  },
]

export const adLabel = 'Ad'

export const footerBlurb =
  'Lantern brings you sharp reporting, long reads and the stories behind the headlines \u2014 fresh perspectives on art, culture, travel and style.'

export const newsletterLabel = 'Email address'
export const newsletterPlaceholder = 'Your Email'
export const newsletterSubmitLabel = 'SUBSCRIBE'
export const newsletterError = 'Please enter a valid email address.'
export const newsletterSuccess = 'Thank you for subscribing!'

export const copyright = 'Copyright \u00A9 2026 All rights reserved'
export const credit = 'Template made with \u2665 by Colorlib'
