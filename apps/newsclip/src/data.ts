export interface Slide {
  seed: string
  category: string
  date: string
  comments: number
  title: string
  excerpt: string
}

export interface Post {
  seed: string
  category: string
  date: string
  comments: number
  title: string
}

export interface VideoPost {
  seed: string
  category: string
  date: string
  title: string
  duration: string
}

export const heroSlides: Slide[] = [
  {
    seed: 'newsclip-hero-1',
    category: 'Politics',
    date: 'September 24, 2026',
    comments: 12,
    title: 'Global Leaders Gather for Historic Climate Summit',
    excerpt:
      'World leaders convene in Geneva to discuss sweeping new climate policies that could reshape international energy markets for decades.',
  },
  {
    seed: 'newsclip-hero-2',
    category: 'Technology',
    date: 'September 23, 2026',
    comments: 8,
    title: 'Breakthrough in Quantum Computing Changes Everything',
    excerpt:
      'Scientists announce a major quantum computing milestone that brings practical quantum processors closer to commercial reality.',
  },
  {
    seed: 'newsclip-hero-3',
    category: 'Travel',
    date: 'September 22, 2026',
    comments: 5,
    title: 'The Hidden Wonders of Patagonia Unveiled',
    excerpt:
      'A new expedition reveals breathtaking landscapes and ancient cultures deep within the untouched wilderness of Patagonia.',
  },
  {
    seed: 'newsclip-hero-4',
    category: 'Entertainment',
    date: 'September 21, 2026',
    comments: 15,
    title: 'Award Season Heats Up with Surprising Nominations',
    excerpt:
      "This year's award nominations break tradition with unexpected picks that have critics and audiences buzzing worldwide.",
  },
] as const

export const breakingNews = [
  'Global markets surge as trade agreement is reached',
  'New study reveals breakthrough in cancer treatment',
  'Space agency confirms water on distant exoplanet',
  'Tech giant announces revolutionary new product',
  'Olympic committee reveals host city for 2036 Games',
] as const

export const navLinks = [
  'Today',
  'Politics',
  'Lifestyle',
  'Travel',
  'Health',
  'Entertainment',
  'Sport',
] as const

export const featuredPost: Post = {
  seed: 'newsclip-featured-1',
  category: 'Lifestyle',
  date: 'September 24, 2026',
  comments: 24,
  title: 'The Rise of Sustainable Living in Urban Communities',
}

export const featuredExcerpt =
  'Urban communities across the globe are embracing sustainable living in unprecedented ways. From rooftop gardens to community solar projects, cities are transforming into green havens that prioritize environmental stewardship while maintaining modern conveniences.'

export const popularPosts: Post[] = [
  {
    seed: 'newsclip-popular-1',
    category: 'Politics',
    date: 'September 23, 2026',
    comments: 42,
    title: 'New Policy Framework Promises Economic Growth',
  },
  {
    seed: 'newsclip-popular-2',
    category: 'Health',
    date: 'September 22, 2026',
    comments: 18,
    title: 'Mental Health Awareness Campaigns Gain Momentum',
  },
] as const

export const breakingNewsCards = [
  {
    seed: 'newsclip-breaking-1',
    title: 'International Summit Reaches Historic Agreement',
  },
  {
    seed: 'newsclip-breaking-2',
    title: 'Major Scientific Discovery Announced Today',
  },
] as const

export const dontMissPosts: Post[] = [
  {
    seed: 'newsclip-miss-1',
    category: 'Lifestyle',
    date: 'September 20, 2026',
    comments: 7,
    title: 'Minimalist Home Design Trends for 2026',
  },
  {
    seed: 'newsclip-miss-2',
    category: 'Travel',
    date: 'September 19, 2026',
    comments: 11,
    title: 'Off-the-Beaten-Path Destinations in Europe',
  },
  {
    seed: 'newsclip-miss-3',
    category: 'Entertainment',
    date: 'September 18, 2026',
    comments: 9,
    title: 'Indie Films Dominating Fall Festival Circuit',
  },
] as const

export const categoryLeftFeatured: Post = {
  seed: 'newsclip-cat-left-feat',
  category: 'Politics',
  date: 'September 24, 2026',
  comments: 16,
  title: 'Election Results Reshape Political Landscape',
}

export const categoryLeftText: Post[] = [
  {
    seed: 'newsclip-cat-left-1',
    category: 'Health',
    date: 'September 23, 2026',
    comments: 5,
    title: 'New Wellness Programs Launched Nationwide',
  },
  {
    seed: 'newsclip-cat-left-2',
    category: 'Travel',
    date: 'September 22, 2026',
    comments: 3,
    title: 'Best Weekend Getaways for Autumn',
  },
  {
    seed: 'newsclip-cat-left-3',
    category: 'Lifestyle',
    date: 'September 21, 2026',
    comments: 8,
    title: 'The Art of Slow Living in a Fast World',
  },
] as const

export const categoryMiddlePosts: Post[] = [
  {
    seed: 'newsclip-cat-mid-1',
    category: 'Entertainment',
    date: 'September 24, 2026',
    comments: 12,
    title: 'Summer Blockbusters That Exceeded Expectations',
  },
  {
    seed: 'newsclip-cat-mid-2',
    category: 'Sport',
    date: 'September 23, 2026',
    comments: 20,
    title: 'Underdog Team Clinches Championship Title',
  },
  {
    seed: 'newsclip-cat-mid-3',
    category: 'Technology',
    date: 'September 22, 2026',
    comments: 14,
    title: 'AI Revolution Transforms Creative Industries',
  },
  {
    seed: 'newsclip-cat-mid-4',
    category: 'Lifestyle',
    date: 'September 21, 2026',
    comments: 6,
    title: 'Farm-to-Table Movement Gains New Followers',
  },
] as const

export const categoryRightFeatured: Post = {
  seed: 'newsclip-cat-right-feat',
  category: 'Travel',
  date: 'September 24, 2026',
  comments: 9,
  title: 'Exploring the Ancient Routes of the Silk Road',
}

export const categoryRightText: Post[] = [
  {
    seed: 'newsclip-cat-right-1',
    category: 'Health',
    date: 'September 23, 2026',
    comments: 4,
    title: 'Nutrition Myths Debunked by Experts',
  },
  {
    seed: 'newsclip-cat-right-2',
    category: 'Politics',
    date: 'September 22, 2026',
    comments: 7,
    title: 'Voter Engagement Reaches Record Highs',
  },
  {
    seed: 'newsclip-cat-right-3',
    category: 'Entertainment',
    date: 'September 21, 2026',
    comments: 11,
    title: 'Streaming Wars Intensify with New Platform',
  },
] as const

export const videoPosts: VideoPost[] = [
  {
    seed: 'newsclip-vid-1',
    category: 'Entertainment',
    date: 'September 24, 2026',
    title: "Behind the Scenes of the Year's Biggest Film",
    duration: '5:42',
  },
  {
    seed: 'newsclip-vid-2',
    category: 'Sport',
    date: 'September 23, 2026',
    title: 'Top 10 Goals of the Week',
    duration: '3:18',
  },
  {
    seed: 'newsclip-vid-3',
    category: 'Technology',
    date: 'September 22, 2026',
    title: 'Inside the New Electric Vehicle Factory',
    duration: '7:05',
  },
  {
    seed: 'newsclip-vid-4',
    category: 'Travel',
    date: 'September 21, 2026',
    title: 'Drone Footage of Hidden Waterfalls',
    duration: '4:33',
  },
  {
    seed: 'newsclip-vid-5',
    category: 'Lifestyle',
    date: 'September 20, 2026',
    title: 'Morning Routines of Successful Entrepreneurs',
    duration: '6:12',
  },
  {
    seed: 'newsclip-vid-6',
    category: 'Health',
    date: 'September 19, 2026',
    title: 'Yoga for Beginners: A Complete Guide',
    duration: '8:45',
  },
  {
    seed: 'newsclip-vid-7',
    category: 'Politics',
    date: 'September 18, 2026',
    title: 'Debate Highlights: Key Moments Recapped',
    duration: '4:58',
  },
  {
    seed: 'newsclip-vid-8',
    category: 'Entertainment',
    date: 'September 17, 2026',
    title: 'Concert Tour Announcement Breaks Records',
    duration: '3:27',
  },
] as const

export const editorialPosts: Slide[] = [
  {
    seed: 'newsclip-edit-1',
    category: 'Politics',
    date: 'September 24, 2026',
    comments: 34,
    title: 'Why the New Trade Deal Matters for Everyone',
    excerpt:
      'An in-depth analysis of how the recently signed trade agreement will impact everyday consumers and businesses across multiple sectors.',
  },
  {
    seed: 'newsclip-edit-2',
    category: 'Technology',
    date: 'September 23, 2026',
    comments: 21,
    title: 'The Ethics of Artificial Intelligence in Healthcare',
    excerpt:
      'As AI systems become more prevalent in medical diagnosis, we examine the ethical implications and regulatory challenges ahead.',
  },
  {
    seed: 'newsclip-edit-3',
    category: 'Lifestyle',
    date: 'September 22, 2026',
    comments: 15,
    title: 'Redefining Success in the Modern Age',
    excerpt:
      'A thought-provoking look at how younger generations are reshaping traditional definitions of career success and personal fulfillment.',
  },
] as const

export const footerLinks: Record<string, string[]> = {
  Regions: ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania'],
  Fashion: ['Trends', 'Runway', 'Street Style', 'Accessories', 'Sustainable'],
  Politics: ['Elections', 'Policy', 'International', 'Opinion', 'Analysis'],
  Featured: ['Top Stories', "Editor's Pick", 'Most Read', 'Video', 'Podcasts'],
  FAQ: ['About Us', 'Contact', 'Advertise', 'Privacy Policy', 'Terms'],
  More: ['Careers', 'Events', 'Newsletter', 'RSS Feed', 'Sitemap'],
} as const

export const stockTicker = [
  { symbol: 'DOW', value: '34,521', change: '+1.2%' },
  { symbol: 'S&P', value: '4,389', change: '+0.8%' },
  { symbol: 'NASDAQ', value: '13,420', change: '+1.5%' },
] as const

export const latestTickerHeadlines = [
  { time: '10:42 AM', text: 'Markets rally on positive economic data release' },
  { time: '10:35 AM', text: 'New renewable energy targets announced by government' },
  { time: '10:28 AM', text: 'Tech sector reports strongest quarter in a decade' },
  { time: '10:15 AM', text: 'International summit concludes with landmark agreement' },
  { time: '10:02 AM', text: 'Healthcare breakthrough promises faster recovery times' },
] as const
