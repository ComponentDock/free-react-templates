/**
 * Herald data — recreated from the ColorLib "Ednews" preview DOM
 * (https://preview.colorlib.com/theme/ednews/): same content kinds
 * (uppercase section titles, meta rows with date/author/comments/views,
 * news-ish headlines), paraphrased where useful. All imagery uses seeded
 * picsum placeholders.
 */

export const siteName = 'HERALD'

export const locationLine = 'Stockholm, Sweden 15 °C'
export const dateLine = 'Thursda, 24 May, 2018'
export const timeLine = '09:00 AM'

export const utilitySocials = ['facebook', 'twitter', 'pinterest', 'google', 'rss'] as const

export const socialLabels: Record<string, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  pinterest: 'Pinterest',
  google: 'Google',
  rss: 'RSS',
}

export const bannerTitle = 'realestate.com.au'
export const bannerSubtitle = 'Discover the latest properties of australia'
export const readMoreLabel = 'READ MORE'

export const navItems = [
  'HOME',
  'BUSINESS',
  'SPORT',
  'POLITICS',
  'TRAVEL',
  'LIFESTYLE',
  'CULTURE',
  'TECH',
  'VIDEO',
  'FEATURES',
] as const

export const dropdownPages = ['PAGE 1', 'PAGE 2'] as const

export const openMenuLabel = 'Open menu'
export const closeMenuLabel = 'Close menu'

export const breakingLabel = 'BREAKING NEWS'
export const breakingHeadline =
  '8:30 AM Eight people have died in a violent protest involving tens of thousands across the capital.'
export const searchPlaceholder = 'Search'

export interface NewsMeta {
  date: string
  author?: string
  comments?: string
  views: string
}

export interface HeroCard {
  seed: string
  title: string
  meta: NewsMeta
  tall: boolean
}

export const heroCards: readonly HeroCard[] = [
  {
    seed: 'herald-hero-1',
    title: 'Protesters clash with police across the old quarter',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', comments: '15', views: '105' },
    tall: true,
  },
  {
    seed: 'herald-hero-2',
    title: 'Markets rally as trade talks resume in the capital',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', comments: '15', views: '105' },
    tall: true,
  },
  {
    seed: 'herald-hero-3',
    title: 'City hall approves new riverfront development',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', comments: '15', views: '105' },
    tall: false,
  },
  {
    seed: 'herald-hero-4',
    title: 'Scientists unveil breakthrough in clean energy storage',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', comments: '15', views: '105' },
    tall: false,
  },
]

export const todayFeaturedTitle = 'TODAY FEATURED'

export const todayFeatured = {
  seed: 'herald-featured',
  headline: 'Bahrain Grand Prix: Hamilton edges out Vettel in a thrilling final lap duel',
  meta: { date: '24 May, 2018', author: 'By Alen Mark', comments: '15', views: '105' },
  excerpt:
    'The world champion held his nerve through the closing laps as his rival closed in, crossing the line just two tenths ahead after a wheel-to-wheel battle that had the paddock on its feet.',
}

export interface SideNews {
  seed: string
  headline: string
  meta: NewsMeta
}

export const sideNews: readonly SideNews[] = [
  {
    seed: 'herald-side-1',
    headline: 'New Zealand edge England in a tense second test at Headingley',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', comments: '15', views: '105' },
  },
  {
    seed: 'herald-side-2',
    headline: 'Russia and the West hold talks over the disputed border region',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', comments: '15', views: '105' },
  },
  {
    seed: 'herald-side-3',
    headline: 'Cliff crash in California leaves tour bus passengers injured',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', comments: '15', views: '105' },
  },
  {
    seed: 'herald-side-4',
    headline: 'Facebook CEO defends privacy changes before the Senate',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', comments: '15', views: '105' },
  },
  {
    seed: 'herald-side-5',
    headline: 'Tesla crash probe focuses on autopilot engagement logs',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', comments: '15', views: '105' },
  },
  {
    seed: 'herald-side-6',
    headline: 'Rail strikes loom as unions reject the latest pay offer',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', comments: '15', views: '105' },
  },
]

export const stayConnectTitle = 'STAY CONNECT'
export const recentNewsTitle = 'RECENT NEWS'

export interface FollowerRow {
  label: 'facebook' | 'twitter' | 'google' | 'rss'
  count: string
  brand: 'fb' | 'twtr' | 'gogl' | 'rss'
}

export const followerRows: readonly FollowerRow[] = [
  { label: 'facebook', count: '2135', brand: 'fb' },
  { label: 'twitter', count: '5176', brand: 'twtr' },
  { label: 'google', count: '2244', brand: 'gogl' },
  { label: 'rss', count: '2111', brand: 'rss' },
]

export const followerBrandClass: Record<FollowerRow['brand'], string> = {
  fb: 'bg-fb',
  twtr: 'bg-twtr',
  gogl: 'bg-gogl',
  rss: 'bg-rss',
}

export const recentNews: readonly SideNews[] = [
  {
    seed: 'herald-recent-1',
    headline: 'Markets open higher on upbeat earnings',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-recent-2',
    headline: 'New art gallery opens in the old docks',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-recent-3',
    headline: 'Metro line extension enters final phase',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-recent-4',
    headline: 'Wine festival draws record crowds downtown',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-recent-5',
    headline: 'City library launches free evening classes',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-recent-6',
    headline: 'Cycling lanes expand across the west side',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-recent-7',
    headline: 'Tech summit announces startup funding round',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-recent-8',
    headline: 'Weekend weather: sunny spells with light rain',
    meta: { date: '24 May, 2018', views: '105' },
  },
]

export const reviewCard = {
  seed: 'herald-review',
  headline: 'The new flagship smartphone: a hands-on verdict',
  meta: { date: '24 May, 2018', author: 'By Alen Mark', views: '105' },
  rating: 'Judge Overseeing: 9.2/10',
}

export const featuredVideoTitle = 'FEATURED VIDEO'

export const videoPosts: readonly SideNews[] = [
  {
    seed: 'herald-video-1',
    headline: 'Inside the world\u2019s busiest shipping port',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-video-2',
    headline: 'Aerial tour of the northern fjords',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-video-3',
    headline: 'How the city is preparing for the heatwave',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-video-4',
    headline: 'Highlights: marathon finish line drama',
    meta: { date: '24 May, 2018', views: '105' },
  },
]

export interface CategoryNews {
  title: string
  lead: SideNews
  excerpt: string
  mini: readonly SideNews[]
}

export const politics: CategoryNews = {
  title: 'POLITICS',
  lead: {
    seed: 'herald-politics-lead',
    headline: 'Coalition talks enter a second week with no deal in sight',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', comments: '15', views: '105' },
  },
  excerpt:
    'Negotiators say progress has been made on tax policy, but the two parties remain far apart on social spending and regional funding.',
  mini: [
    {
      seed: 'herald-politics-1',
      headline: 'Senate schedules hearing on voting reform',
      meta: { date: '24 May, 2018', views: '105' },
    },
    {
      seed: 'herald-politics-2',
      headline: 'Mayor unveils affordable housing plan',
      meta: { date: '24 May, 2018', views: '105' },
    },
    {
      seed: 'herald-politics-3',
      headline: 'Trade delegation departs for Asia',
      meta: { date: '24 May, 2018', views: '105' },
    },
    {
      seed: 'herald-politics-4',
      headline: 'Budget vote set for Thursday afternoon',
      meta: { date: '24 May, 2018', views: '105' },
    },
  ],
}

export const sport: CategoryNews = {
  title: 'SPORT',
  lead: {
    seed: 'herald-sport-lead',
    headline: 'Underdogs stun the champions in the cup quarter-final',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', comments: '15', views: '105' },
  },
  excerpt:
    'A late winner in stoppage time sealed a famous upset as the league leaders crashed out on their own turf.',
  mini: [
    {
      seed: 'herald-sport-1',
      headline: 'Title race tightens after shock draw',
      meta: { date: '24 May, 2018', views: '105' },
    },
    {
      seed: 'herald-sport-2',
      headline: 'Sprint star sets new national record',
      meta: { date: '24 May, 2018', views: '105' },
    },
    {
      seed: 'herald-sport-3',
      headline: 'Rugby squad named for summer tour',
      meta: { date: '24 May, 2018', views: '105' },
    },
    {
      seed: 'herald-sport-4',
      headline: 'Open water swim cancelled due to winds',
      meta: { date: '24 May, 2018', views: '105' },
    },
  ],
}

export interface GridCategory {
  title: string
  seed: string
  headline: string
  meta: NewsMeta
  paragraphs: readonly string[]
}

export const gridCategories: readonly GridCategory[] = [
  {
    title: 'LIFESTYLE',
    seed: 'herald-lifestyle',
    headline: 'Slow mornings and the return of the local bakery',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', views: '105' },
    paragraphs: [
      'A quiet shift is underway in neighbourhoods across the city, as residents rediscover the pleasure of the morning walk and the corner bakery.',
      'Bakers report longer queues and earlier sell-outs, with sourdough and cardamom buns leading the way among returning customers.',
      'Urban planners say the trend is part of a broader move toward walkable streets and slower, more connected living.',
    ],
  },
  {
    title: 'BUSINESS',
    seed: 'herald-business',
    headline: 'Startups pivot toward sustainable packaging',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', views: '105' },
    paragraphs: [
      'Investors are pouring money into materials science as consumer brands race to replace single-use plastics with compostable alternatives.',
      'The new wave of startups is betting that regulation, not just sentiment, will soon make recyclable packaging the default.',
      'Analysts warn the shift will take years, but early adopters are already reporting a measurable lift in brand loyalty.',
    ],
  },
  {
    title: 'CULTURE',
    seed: 'herald-culture',
    headline: 'Museum reopens after a decade-long renovation',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', views: '105' },
    paragraphs: [
      'The landmark building reopens with a new wing, restored frescoes and a permanent collection rearranged around light and space.',
      'Curators say the redesign triples the gallery floor while keeping the historic facade and its famous courtyard intact.',
      'Free entry during the first month has drawn record queues, with timed tickets selling out within hours.',
    ],
  },
  {
    title: 'TECH',
    seed: 'herald-tech',
    headline: 'Chipmakers announce a new era of energy-efficient cores',
    meta: { date: '24 May, 2018', author: 'By Alen Mark', views: '105' },
    paragraphs: [
      'The next generation of processors promises double the performance at half the power draw, targeting both data centres and phones.',
      'Engineers credit advances in chip packaging and on-device AI that keeps heavy workloads off the cloud.',
      'The first devices using the new cores are expected on shelves before the end of the year.',
    ],
  },
]

export const mostReadTitle = 'MOST READ'
export const articlesByAuthorTitle = 'ARTICLES BY AUTHOR'

export const mostRead: readonly SideNews[] = [
  {
    seed: 'herald-most-1',
    headline: 'Ten ways the city is adapting to rising seas',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-most-2',
    headline: 'The quiet comeback of the long-distance train',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-most-3',
    headline: 'What the new trade deal means for farmers',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-most-4',
    headline: 'A field guide to the night sky this month',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-most-5',
    headline: 'Inside the school teaching robotics to kids',
    meta: { date: '24 May, 2018', views: '105' },
  },
  {
    seed: 'herald-most-6',
    headline: 'Why doctors are prescribing walks in parks',
    meta: { date: '24 May, 2018', views: '105' },
  },
]

export interface Author {
  seed: string
  name: string
}

export const authors: readonly Author[] = [
  { seed: 'herald-author-1', name: 'Chris Smalling' },
  { seed: 'herald-author-2', name: 'Johny Dowson' },
  { seed: 'herald-author-3', name: 'Emily Carter' },
  { seed: 'herald-author-4', name: 'Julia Ann' },
]

export const reporterRole = 'Reporter'

export const bannerCardTitle = 'REAL ESTATE'
export const bannerCardBlurb =
  'Discover the latest properties of australia and find your dream home with our expert agents.'

export const newsletterTitle = 'NEWSLETTER'
export const newsletterBlurb = 'The best selling Magic-Magazine'
export const newsletterPlaceholder = 'Yor Email'
export const newsletterError = 'Please enter a valid email address.'
export const subscribeLabel = 'SUBSCRIBE NOW'

export const quickLinks = [
  'Home Delivery',
  'User Permissions',
  'Download Apps',
  'Newsletters',
  'Subscriptions',
  'Online Store',
] as const

export const ourWorkLinks = [
  'In the Community',
  'Today\u2019s Link',
  'Our History',
  'Our Events',
  'Our Studio',
  'Career',
] as const

export const footerVideoPosts: readonly SideNews[] = videoPosts.slice(0, 2)

export const footerRecentPosts: readonly SideNews[] = recentNews.slice(0, 2)

export const footerBlurb =
  'A daily newspaper for the modern reader — politics, sport, business, culture and technology, reported with care.'

export const footerBottomLinks = [
  'Home',
  'Business',
  'Sport',
  'Politics',
  'Travel',
  'Lifestyle',
  'Culture',
  'Tech',
  'Video',
] as const

export const madeWithText = 'All rights reserved | This template is made with'

export function imgUrl(seed: string, w: number, h: number): string {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`
}
