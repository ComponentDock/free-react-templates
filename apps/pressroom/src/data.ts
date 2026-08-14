export interface NavLink {
  label: string
  href: string
}

export interface Slide {
  badge: string
  badgeColor: 'red' | 'blue' | 'green' | 'purple'
  title: string
  byline: string
  image: string
}

export interface NewsCard {
  title: string
  byline: string
  image: string
  badge?: string
  badgeColor?: 'red' | 'blue' | 'green' | 'purple'
}

export interface VideoItem {
  image: string
  caption: string
}

export interface SmallPost {
  title: string
  byline: string
  image: string
}

export interface TabCategory {
  label: string
  cards: NewsCard[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Category', href: '#category' },
  { label: 'Latest News', href: '#latest' },
  { label: 'Pages', href: '#pages' },
  { label: 'Blog', href: '#blog' },
  { label: 'Blog Details', href: '#blog-details' },
  { label: 'Element', href: '#element' },
  { label: 'Contact', href: '#contact' },
]

export const TRENDING_LABEL = 'Trending'
export const TRENDING_HEADLINE = 'Class property employ ancho red multi level mansion'
export const TRENDING_PHONE = '+88 0166 253 232'

export const HERO_SLIDES: Slide[] = [
  {
    badge: 'Business',
    badgeColor: 'red',
    title: 'Anna Lora Stuns In White At Her Australian Premiere',
    byline: 'by Alice cloe - Jun 19, 2020',
    image: 'https://picsum.photos/seed/pressroom-hero-1/870/460',
  },
  {
    badge: 'Business',
    badgeColor: 'red',
    title: 'Class Property Employ Ancho Red Multi Level Mansion',
    byline: 'by Alice cloe - Jun 19, 2020',
    image: 'https://picsum.photos/seed/pressroom-hero-2/870/460',
  },
  {
    badge: 'Business',
    badgeColor: 'red',
    title: 'Secretart For Economic Air Plane That Looks Like',
    byline: 'by Alice cloe - Jun 19, 2020',
    image: 'https://picsum.photos/seed/pressroom-hero-3/870/460',
  },
]

export const MINI_ARTICLES: Slide[] = [
  {
    badge: 'Fashion',
    badgeColor: 'blue',
    title: 'Secretart For Economic Air Plane That Looks Like',
    byline: 'by Alice cloe - Jun 19, 2020',
    image: 'https://picsum.photos/seed/pressroom-mini-1/340/240',
  },
  {
    badge: 'Tech',
    badgeColor: 'green',
    title: 'Portrait Of Group Of Friends Eating In The Market',
    byline: 'by Alice cloe - Jun 19, 2020',
    image: 'https://picsum.photos/seed/pressroom-mini-2/340/240',
  },
]

export const WHATS_NEW_TABS: TabCategory[] = [
  {
    label: 'Lifestyle',
    cards: [
      {
        title: 'Secretart For Economic Air Plane That Looks Like',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-life-1/420/280',
      },
      {
        title: 'Portrait Of Group Of Friends Eating In The Market',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-life-2/420/280',
      },
      {
        title: 'Struggling To Sell One Multi Million Dollar Home',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-life-3/420/280',
      },
      {
        title: 'Top 10 Best Summer Holiday Destinations For 2020',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-life-4/420/280',
      },
    ],
  },
  {
    label: 'Travel',
    cards: [
      {
        title: 'Most Beautiful Things To Do In Sidney With Your BF',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-travel-1/420/280',
      },
      {
        title: 'Hidden Beaches Worth The Long Hike This Season',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-travel-2/420/280',
      },
      {
        title: 'A Weekend Guide To The Old Town Markets',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-travel-3/420/280',
      },
      {
        title: 'Five Mountains Every Climber Should Attempt Once',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-travel-4/420/280',
      },
    ],
  },
  {
    label: 'Fashion',
    cards: [
      {
        title: 'What To Wear: 9+ Cute Work Outfits To Wear This',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-fashion-1/420/280',
      },
      {
        title: 'Spring Palette Trends Designers Are Loving Now',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-fashion-2/420/280',
      },
      {
        title: 'The Return Of Minimalist Streetwear This Season',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-fashion-3/420/280',
      },
      {
        title: 'Red Carpet Looks That Defined The Awards Night',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-fashion-4/420/280',
      },
    ],
  },
  {
    label: 'Sports',
    cards: [
      {
        title: "Scarlett's Disappointment At Latest Accolade",
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-sport-1/420/280',
      },
      {
        title: 'Underdogs Shake Up The Championship Table',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-sport-2/420/280',
      },
      {
        title: 'Marathon Records Fall In Perfect Running Weather',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-sport-3/420/280',
      },
      {
        title: 'Transfer Window Rumors Heat Up Across The League',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-sport-4/420/280',
      },
    ],
  },
  {
    label: 'Technology',
    cards: [
      {
        title: 'New Foldable Phones Promise A Bigger Display Era',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-tech-1/420/280',
      },
      {
        title: 'The Chips Powering The Next Generation Of Laptops',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-tech-2/420/280',
      },
      {
        title: 'Smart Home Devices That Finally Talk To Each Other',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-tech-3/420/280',
      },
      {
        title: 'Open Source Editors Winning Over Professional Teams',
        byline: 'by Alice cloe - Jun 19, 2020',
        image: 'https://picsum.photos/seed/pressroom-tech-4/420/280',
      },
    ],
  },
]

export const MOST_RECENT: NewsCard[] = [
  {
    badge: 'Vogue',
    badgeColor: 'purple',
    title: 'What To Wear: 9+ Cute Work Outfits To Wear This',
    byline: 'Jhon | 2 hours ago',
    image: 'https://picsum.photos/seed/pressroom-recent-1/460/300',
  },
  {
    badge: 'Style',
    badgeColor: 'purple',
    title: 'Most Beautiful Things To Do In Sidney With Your BF',
    byline: 'Jhon | 2 hours ago',
    image: 'https://picsum.photos/seed/pressroom-recent-2/460/300',
  },
]

export const TRENDING_NEWS: NewsCard[] = [
  {
    title: "Scarlett's Disappointment At Latest Accolade",
    byline: 'Jhon | 2 hours ago',
    image: 'https://picsum.photos/seed/pressroom-trend-1/360/240',
  },
  {
    title: 'What To Wear: 9+ Cute Work Outfits To Wear This',
    byline: 'Jhon | 2 hours ago',
    image: 'https://picsum.photos/seed/pressroom-trend-2/360/240',
  },
  {
    title: 'Most Beautiful Things To Do In Sidney With Your BF',
    byline: 'Jhon | 2 hours ago',
    image: 'https://picsum.photos/seed/pressroom-trend-3/360/240',
  },
  {
    title: 'Secretart For Economic Air Plane That Looks Like',
    byline: 'Jhon | 2 hours ago',
    image: 'https://picsum.photos/seed/pressroom-trend-4/360/240',
  },
]

export const MOST_POPULAR: SmallPost[] = [
  {
    title: "Scarlett's Disappointment At Latest Accolade",
    byline: 'Jhon | 2 hours ago',
    image: 'https://picsum.photos/seed/pressroom-popular-1/90/90',
  },
  {
    title: 'What To Wear: 9+ Cute Work Outfits To Wear This',
    byline: 'Jhon | 2 hours ago',
    image: 'https://picsum.photos/seed/pressroom-popular-2/90/90',
  },
  {
    title: 'Most Beautiful Things To Do In Sidney With Your BF',
    byline: 'Jhon | 2 hours ago',
    image: 'https://picsum.photos/seed/pressroom-popular-3/90/90',
  },
  {
    title: 'Secretart For Economic Air Plane That Looks Like',
    byline: 'Jhon | 2 hours ago',
    image: 'https://picsum.photos/seed/pressroom-popular-4/90/90',
  },
]

export const VIDEO_ITEMS: VideoItem[] = [
  {
    image: 'https://picsum.photos/seed/pressroom-video-1/420/280',
    caption: 'Pressroom News - 2020',
  },
  {
    image: 'https://picsum.photos/seed/pressroom-video-2/420/280',
    caption: 'Banglades News Video',
  },
  {
    image: 'https://picsum.photos/seed/pressroom-video-3/420/280',
    caption: 'Morning Edition Roundup',
  },
  {
    image: 'https://picsum.photos/seed/pressroom-video-4/420/280',
    caption: 'Spondon News - 2019',
  },
  {
    image: 'https://picsum.photos/seed/pressroom-video-5/420/280',
    caption: 'Morning Edition Roundup',
  },
]

export const OLD_SPONDON: NewsCard[] = [
  {
    title: 'What To Expect From The 2020 Oscar Nominations',
    byline: '19 Jan 2020',
    image: 'https://picsum.photos/seed/pressroom-old-1/360/240',
  },
  {
    title: 'The Year In Review: Stories That Shaped 2019',
    byline: '18 Jan 2020',
    image: 'https://picsum.photos/seed/pressroom-old-2/360/240',
  },
  {
    title: 'How Local Newsrooms Are Reinventing Themselves',
    byline: '17 Jan 2020',
    image: 'https://picsum.photos/seed/pressroom-old-3/360/240',
  },
  {
    title: 'Behind The Scenes Of A Live Morning Broadcast',
    byline: '16 Jan 2020',
    image: 'https://picsum.photos/seed/pressroom-old-4/360/240',
  },
  {
    title: 'The Stories Our Readers Loved Most This Week',
    byline: '15 Jan 2020',
    image: 'https://picsum.photos/seed/pressroom-old-5/360/240',
  },
]

export const FOOTER_ABOUT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export const FOOTER_ADDRESS = '198 West 21th Street, Suite 721 New York, NY 10010'
export const FOOTER_PHONE = '+95 (0) 123 456 789'
export const FOOTER_CELL = '+95 (0) 987 654 321'

export const FOOTER_POPULAR: SmallPost[] = [
  {
    title: "Scarlett's Disappointment At Latest Accolade",
    byline: 'Jhon | 2 hours ago',
    image: 'https://picsum.photos/seed/pressroom-fpost-1/90/90',
  },
  {
    title: 'What To Wear: 9+ Cute Work Outfits To Wear This',
    byline: 'Jhon | 2 hours ago',
    image: 'https://picsum.photos/seed/pressroom-fpost-2/90/90',
  },
  {
    title: 'Most Beautiful Things To Do In Sidney With Your BF',
    byline: 'Jhon | 2 hours ago',
    image: 'https://picsum.photos/seed/pressroom-fpost-3/90/90',
  },
]

export const BANNER_ONE = 'https://picsum.photos/seed/pressroom-banner-1/1200/120'
export const BANNER_TWO = 'https://picsum.photos/seed/pressroom-banner-2/1200/120'
