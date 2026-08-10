export const navLinks = ['Home', 'Categories', 'Features'] as const

export const searchPlaceholder = 'Type of search'

export interface NormalPost {
  seed: string
  avatarSeed: string
  title: string
  likes: string
  comments: string
  views: string
}

export const normalPosts: NormalPost[] = [
  {
    seed: 'morsel-normal-1',
    avatarSeed: 'morsel-avatar-1',
    title: "How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
    likes: '57',
    comments: '6',
    views: '138',
  },
  {
    seed: 'morsel-normal-2',
    avatarSeed: 'morsel-avatar-1',
    title: 'A Quiet Morning in the Old Market District',
    likes: '42',
    comments: '9',
    views: '201',
  },
  {
    seed: 'morsel-normal-3',
    avatarSeed: 'morsel-avatar-2',
    title: 'The Science of a Perfect Loaf of Bread',
    likes: '31',
    comments: '4',
    views: '97',
  },
  {
    seed: 'morsel-normal-4',
    avatarSeed: 'morsel-avatar-2',
    title: 'Why We Crave Comfort Food in Winter',
    likes: '64',
    comments: '11',
    views: '240',
  },
  {
    seed: 'morsel-normal-5',
    avatarSeed: 'morsel-avatar-3',
    title: 'Five Small Kitchens That Feel Enormous',
    likes: '18',
    comments: '2',
    views: '76',
  },
]

export interface DetailedPost {
  seed: string
  category: string
  title: string
  excerpt: string
  avatarSeed: string
  author: string
  date: string
  likes: string
  comments: string
  views: string
}

export const bigPosts: DetailedPost[] = [
  {
    seed: 'morsel-big-1',
    category: 'Health',
    title: 'The Daily Habits of People Who Sleep Well',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    avatarSeed: 'morsel-avatar-4',
    author: 'Lora Palmer',
    date: 'on Sep 29, 2017 at 9:48am',
    likes: '57',
    comments: '6',
    views: '138',
  },
  {
    seed: 'morsel-big-2',
    category: 'Travel',
    title: 'A Slow Boat Down the River at Dusk',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    avatarSeed: 'morsel-avatar-5',
    author: 'Lora Palmer',
    date: 'on Sep 28, 2017 at 4:12pm',
    likes: '49',
    comments: '8',
    views: '180',
  },
]

export const mediumPost: DetailedPost = {
  seed: 'morsel-medium-1',
  category: 'Design',
  title: 'Grids That Guide the Eye Without Shouting',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  avatarSeed: 'morsel-avatar-3',
  author: 'Lora Palmer',
  date: 'on Sep 27, 2017 at 11:03am',
  likes: '38',
  comments: '5',
  views: '119',
}

export interface SmallPost {
  seed: string
  title: string
  likes: string
  comments: string
  views: string
}

export const smallPosts: SmallPost[] = [
  {
    seed: 'morsel-small-1',
    title: 'The Best Markets Open Before Sunrise',
    likes: '22',
    comments: '3',
    views: '88',
  },
  {
    seed: 'morsel-small-2',
    title: 'What a Single Herb Can Do to a Dish',
    likes: '27',
    comments: '1',
    views: '64',
  },
]

export const footerCategories = ['Beauty', 'Health', 'Music', 'Sport', 'Design', 'Travel'] as const

export const subscribePlaceholder = 'Enter your email'

export const socialLinks = ['facebook', 'twitter', 'instagram', 'vimeo', 'pinterest'] as const

export type SocialName = (typeof socialLinks)[number]

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
  vimeo: 'Vimeo',
  pinterest: 'Pinterest',
}

export const bannerImage = {
  src: 'https://picsum.photos/seed/morsel-banner/1920/300',
  alt: 'Abstract blue ink-marble art banner',
} as const
