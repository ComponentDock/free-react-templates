export interface HeroSlide {
  image: string
  category: string
  title: string
}

export interface Article {
  title: string
  category: string
  image?: string
  variant: 'image' | 'background' | 'text'
  size?: 'large' | 'small'
}

export interface Video {
  title: string
  views: string
  date: string
  image: string
}

export interface Story {
  title: string
  author: string
  date: string
  image: string
}

export interface EventItem {
  day: string
  month: string
  title: string
}

const img = (n: number, w: number, h: number) =>
  `https://picsum.photos/seed/dispatch-${n}/${w}/${h}`

export const navLinks = ['Home', 'Fashion', 'Gadgets', 'Lifestyle', 'Video', 'Contact'] as const

export const tagPills = ['all', 'style hunter', 'vogue', 'health & fitness', 'travel'] as const

export const morePills = [
  'new look 2018',
  'street fashion',
  'business',
  'recipes',
  'sport',
  'celebrities',
] as const

export const heroSlides: HeroSlide[] = [
  {
    image: img(1, 1600, 900),
    category: 'sport',
    title:
      'How Did van Gogh\u2019s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
  },
  {
    image: img(2, 1600, 900),
    category: 'lifestyle',
    title: 'The Simple Art of Slow Living: Why Less Really Is More in a Busy World',
  },
  {
    image: img(3, 1600, 900),
    category: 'fashion',
    title: 'Street Style Diaries: What the Runways of Tomorrow Look Like Today',
  },
]

export const similarPosts = [
  '6 Amazing Reasons to Start Your Own Creative Project Today',
  'The Best Travel Photography Spots You Have Never Heard Of',
  'Quiet Luxury: The Fashion Movement That Whispers Instead of Shouts',
] as const

export const dontMissArticles: Article[] = [
  {
    title:
      'How Did van Gogh\u2019s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
    category: 'vogue',
    image: img(4, 555, 325),
    variant: 'image',
    size: 'large',
  },
  {
    title: 'The Best Hotels to Book in the City for a Weekend Escape',
    category: 'travel',
    image: img(5, 263, 200),
    variant: 'image',
  },
  {
    title: 'Healthy Eating Habits That Will Change the Way You Cook',
    category: 'health & fitness',
    image: img(6, 263, 200),
    variant: 'image',
  },
  {
    title: 'Five Street Style Looks That Dominated the Last Fashion Week',
    category: 'style hunter',
    image: img(7, 263, 200),
    variant: 'background',
  },
  {
    title: 'The Hidden Cafés Every Coffee Lover Should Visit Once',
    category: 'travel',
    image: img(8, 263, 200),
    variant: 'background',
  },
  {
    title: 'Inside the Studio: A Conversation with a Modern Sculptor',
    category: 'vogue',
    variant: 'text',
  },
  {
    title: 'Why Slow Mornings Are the Secret to a Productive Day',
    category: 'health & fitness',
    variant: 'text',
  },
]

export const trendingArticles: Article[] = [
  {
    title: 'The Unexpected Science Behind Why We Love Horror Movies',
    category: 'health & fitness',
    image: img(9, 555, 325),
    variant: 'background',
    size: 'large',
  },
  {
    title: 'How Minimalist Wardrobes Are Redefining Modern Fashion',
    category: 'style hunter',
    image: img(10, 555, 325),
    variant: 'image',
    size: 'large',
  },
  {
    title: 'Off the Beaten Path: A Guide to Secret European Trails',
    category: 'travel',
    image: img(11, 263, 200),
    variant: 'image',
  },
  {
    title: 'The Morning Rituals of Highly Creative People',
    category: 'vogue',
    image: img(12, 263, 200),
    variant: 'background',
  },
  {
    title: 'Gadgets That Actually Make Life Easier in 2026',
    category: 'vogue',
    image: img(13, 263, 200),
    variant: 'background',
  },
  {
    title: 'Reading Lists: The Books Everyone Will Be Talking About',
    category: 'style hunter',
    variant: 'text',
  },
  {
    title: 'The Rise of Rooftop Farming in Busy City Centres',
    category: 'health & fitness',
    variant: 'text',
  },
]

export const latestArticles: Article[] = [
  {
    title: 'The Best Hotels to Book in the City for a Weekend Escape',
    category: 'travel',
    image: img(14, 263, 200),
    variant: 'image',
  },
  {
    title: 'Five Street Style Looks That Dominated the Last Fashion Week',
    category: 'style hunter',
    image: img(15, 263, 200),
    variant: 'image',
  },
  {
    title: 'Healthy Eating Habits That Will Change the Way You Cook',
    category: 'health & fitness',
    image: img(16, 263, 200),
    variant: 'image',
  },
  {
    title: 'Inside the Studio: A Conversation with a Modern Sculptor',
    category: 'vogue',
    image: img(17, 263, 200),
    variant: 'image',
  },
  {
    title: 'The Hidden Cafés Every Coffee Lover Should Visit Once',
    category: 'travel',
    image: img(18, 263, 200),
    variant: 'image',
  },
  {
    title: 'Why Slow Mornings Are the Secret to a Productive Day',
    category: 'health & fitness',
    image: img(19, 263, 200),
    variant: 'image',
  },
  {
    title: 'The Unexpected Science Behind Why We Love Horror Movies',
    category: 'vogue',
    image: img(20, 263, 200),
    variant: 'image',
  },
  {
    title: 'How Minimalist Wardrobes Are Redefining Modern Fashion',
    category: 'style hunter',
    variant: 'text',
  },
  {
    title: 'Off the Beaten Path: A Guide to Secret European Trails',
    category: 'travel',
    variant: 'text',
  },
  {
    title: 'The Morning Rituals of Highly Creative People',
    category: 'vogue',
    variant: 'text',
  },
  {
    title: 'Gadgets That Actually Make Life Easier in 2026',
    category: 'vogue',
    variant: 'text',
  },
  {
    title: 'Reading Lists: The Books Everyone Will Be Talking About',
    category: 'style hunter',
    variant: 'text',
  },
  {
    title: 'The Rise of Rooftop Farming in Busy City Centres',
    category: 'health & fitness',
    variant: 'text',
  },
  {
    title: 'A Beginner\u2019s Guide to Picking Your First Film Camera',
    category: 'travel',
    variant: 'text',
  },
]

export const videos: Video[] = [
  {
    title:
      'How Did van Gogh\u2019s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
    views: '1.2M',
    date: 'Sep 29',
    image: img(21, 300, 200),
  },
  {
    title: 'The Simple Art of Slow Living in a Busy World',
    views: '864K',
    date: 'Sep 27',
    image: img(22, 300, 200),
  },
  {
    title: 'Street Style Diaries: Runways of Tomorrow Today',
    views: '532K',
    date: 'Sep 24',
    image: img(23, 300, 200),
  },
  {
    title: 'Why We Love Horror Movies: The Science of Fear',
    views: '2.1M',
    date: 'Sep 20',
    image: img(24, 300, 200),
  },
]

export const topStories: Story[] = [
  {
    title:
      'How Did van Gogh\u2019s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
    author: 'Katy Liu',
    date: 'Sep 29',
    image: img(25, 150, 100),
  },
  {
    title: 'The Best Hotels to Book in the City for a Weekend Escape',
    author: 'Katy Liu',
    date: 'Sep 28',
    image: img(26, 150, 100),
  },
  {
    title: 'Healthy Eating Habits That Will Change the Way You Cook',
    author: 'James Cole',
    date: 'Sep 27',
    image: img(27, 150, 100),
  },
  {
    title: 'Five Street Style Looks That Dominated the Last Fashion Week',
    author: 'Mia Ross',
    date: 'Sep 26',
    image: img(28, 150, 100),
  },
]

export const newestVideos: Video[] = [
  {
    title: 'The Simple Art of Slow Living in a Busy World',
    views: '864K',
    date: 'Sep 27',
    image: img(29, 150, 100),
  },
  {
    title: 'Street Style Diaries: Runways of Tomorrow Today',
    views: '532K',
    date: 'Sep 24',
    image: img(30, 150, 100),
  },
  {
    title: 'Why We Love Horror Movies: The Science of Fear',
    views: '2.1M',
    date: 'Sep 20',
    image: img(31, 150, 100),
  },
  {
    title: 'A Beginner\u2019s Guide to Picking Your First Film Camera',
    views: '310K',
    date: 'Sep 18',
    image: img(32, 150, 100),
  },
]

export const futureEvents: EventItem[] = [
  { day: '13', month: 'apr', title: 'Design & Architecture Masterclass in the Old Town' },
  { day: '27', month: 'may', title: 'Street Photography Walk: Capturing the City at Dawn' },
  { day: '02', month: 'jun', title: 'Fashion Week Preview: Emerging Designers Showcase' },
  { day: '09', month: 'jul', title: 'Wellness Retreat: Yoga, Sound and Slow Food' },
]

export const adImage = img(33, 375, 340)
export const adSquareImage = img(34, 375, 375)
