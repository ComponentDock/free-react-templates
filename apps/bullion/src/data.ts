/* ── Brand & chrome ─────────────────────────────────────────────────────── */

/** Header / footer wordmark (rendered uppercase via CSS, per the source). */
export const brandName = 'Bullion'

export const topBarLinks = ['About', 'Advertise', 'Submit Press Release', 'Contact'] as const

export type SocialName = 'facebook' | 'twitter' | 'google' | 'instagram' | 'bitcoin'

export const socials: ReadonlyArray<{ label: string; name: SocialName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Google', name: 'google' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Bitcoin', name: 'bitcoin' },
]

export const searchOpenLabel = 'Open search'
export const searchCloseLabel = 'Close search'
export const searchPlaceholder = 'Search here'

export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

export const dropdownLabel = 'Guides & analytics'
export const dropdownItems = ['Page 1', 'Page 2'] as const

/** Desktop nav labels, uppercase in the source (the "ICON CLAENDER" item is
    a source typo — recreated as CONTACT). */
export const navLinks = ['News', 'Events', 'Explained', 'Contact'] as const

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Featured mosaic ────────────────────────────────────────────────────── */

export interface Article {
  seed: string
  headline: string
  author: string
  date: string
  views: string
  comments: string
}

export const featuredArticles: readonly [Article, Article, Article, Article, Article, Article] = [
  {
    seed: 'bullion-hero-1',
    headline: 'Peter Thiels VC Found Invests Million into Bitcoin, Market Reacts',
    author: 'Olivia Capzallo',
    date: 'Jan 25, 2018',
    views: '30,190',
    comments: '30',
  },
  {
    seed: 'bullion-hero-2',
    headline: 'Bitcoin Miners Face New Energy Regulations in Europe',
    author: 'Danile Palmer',
    date: 'Jan 25, 2018',
    views: '12,480',
    comments: '18',
  },
  {
    seed: 'bullion-hero-3',
    headline: 'Ethereum Foundation Announces Major Network Upgrade',
    author: 'Sarah Lindqvist',
    date: 'Jan 25, 2018',
    views: '9,230',
    comments: '12',
  },
  {
    seed: 'bullion-hero-4',
    headline: 'Crypto Exchange Volume Hits All-Time High This Quarter',
    author: 'Marcus Vella',
    date: 'Jan 25, 2018',
    views: '21,540',
    comments: '25',
  },
  {
    seed: 'bullion-hero-5',
    headline: 'Why Institutional Investors Are Warming to Digital Assets',
    author: 'Olivia Capzallo',
    date: 'Jan 25, 2018',
    views: '14,870',
    comments: '16',
  },
  {
    seed: 'bullion-hero-6',
    headline: 'Lightning Network Adoption Doubles Among Small Merchants',
    author: 'Danile Palmer',
    date: 'Jan 25, 2018',
    views: '7,910',
    comments: '9',
  },
]

/* ── Recent news ────────────────────────────────────────────────────────── */

export const recentNewsTitle = 'Recent News'

export const recentNewsCard = {
  seed: 'bullion-recent-1',
  headline: 'Blockchain Startups Raise Record Funding in Q1',
  author: 'Olivia Capzallo',
  date: 'Jan 25, 2018',
  views: '18,200',
  comments: '22',
  blurb:
    'Venture capital flowed into blockchain startups at an unprecedented pace this quarter, with early-stage rounds closing in weeks and institutional funds joining seed tables for the first time.',
}

export interface MiniPost {
  seed: string
  headline: string
  author: string
  date: string
}

export const recentMiniPosts: ReadonlyArray<MiniPost> = [
  {
    seed: 'bullion-mini-1',
    headline: 'Regulators Publish Draft Framework for Stablecoins',
    author: 'Danile Palmer',
    date: 'Jan 25, 2018',
  },
  {
    seed: 'bullion-mini-2',
    headline: 'Major Retailer Begins Accepting Bitcoin Payments',
    author: 'Sarah Lindqvist',
    date: 'Jan 25, 2018',
  },
  {
    seed: 'bullion-mini-3',
    headline: 'Decentralized Finance TVL Passes New Milestone',
    author: 'Marcus Vella',
    date: 'Jan 25, 2018',
  },
  {
    seed: 'bullion-mini-4',
    headline: 'Crypto Job Market Doubles as Firms Expand Teams',
    author: 'Olivia Capzallo',
    date: 'Jan 25, 2018',
  },
]

/* ── Crypto mining news ─────────────────────────────────────────────────── */

export const miningNewsTitle = 'Crypto Mining News'

interface MiningCard {
  seed: string
  headline: string
  author: string
  date: string
  views: string
  comments: string
}

export const miningCards: ReadonlyArray<MiningCard> = [
  {
    seed: 'bullion-mine-1',
    headline: 'New ASIC Rigs Promise 40 Percent More Efficiency',
    author: 'Danile Palmer',
    date: 'Jan 25, 2018',
    views: '11,320',
    comments: '14',
  },
  {
    seed: 'bullion-mine-2',
    headline: 'Hydroelectric Mining Farms Expand Across the Nordics',
    author: 'Sarah Lindqvist',
    date: 'Jan 25, 2018',
    views: '8,740',
    comments: '10',
  },
  {
    seed: 'bullion-mine-3',
    headline: 'Mining Difficulty Adjusts to Record Hash Rate',
    author: 'Marcus Vella',
    date: 'Jan 25, 2018',
    views: '15,610',
    comments: '19',
  },
  {
    seed: 'bullion-mine-4',
    headline: 'Cloud Mining Services Under Scrutiny by Regulators',
    author: 'Olivia Capzallo',
    date: 'Jan 25, 2018',
    views: '6,980',
    comments: '8',
  },
  {
    seed: 'bullion-mine-5',
    headline: 'Green Mining Coalition Publishes First Annual Report',
    author: 'Danile Palmer',
    date: 'Jan 25, 2018',
    views: '5,240',
    comments: '6',
  },
]

export const viewMoreLabel = 'View more crypto mining events'

/* ── Sidebar ────────────────────────────────────────────────────────────── */

export const tickerRows: ReadonlyArray<string> = [
  '1 BTC = $13,2323',
  '1 BCH = $13,2323',
  '1 ETH = $13,2323',
  '1 LTC = $13,2323',
  '1 DAS = $13,2323',
  '1 BCC = $13,2323',
]

export const popularPostsTitle = 'Popular Posts'

export const popularPosts: ReadonlyArray<MiniPost> = [
  {
    seed: 'bullion-pop-1',
    headline: 'The Complete Beginner Guide to Storing Crypto Safely',
    author: 'Olivia Capzallo',
    date: 'Jan 25, 2018',
  },
  {
    seed: 'bullion-pop-2',
    headline: 'What the Latest Halving Means for Miners and Holders',
    author: 'Danile Palmer',
    date: 'Jan 25, 2018',
  },
  {
    seed: 'bullion-pop-3',
    headline: 'Five Charts That Explain This Year in Digital Assets',
    author: 'Sarah Lindqvist',
    date: 'Jan 25, 2018',
  },
  {
    seed: 'bullion-pop-4',
    headline: 'A Practical Look at Smart Contract Security Audits',
    author: 'Marcus Vella',
    date: 'Jan 25, 2018',
  },
]

export const bannerHeading = 'Available for mobile & desktop'
export const bannerLinkLabel = 'Download for free'

export const newsletterTitle = 'Newsletter'
export const newsletterBlurb =
  'Subscribe to our newsletter to get notification about new updates, information, discount, etc..'
export const emailPlaceholder = 'Your email'
export const emailLabel = 'Email address'
export const subscribeLabel = 'Subscribe'
export const invalidEmailMessage = 'Please enter a valid email address.'
export const successMessage = 'Thanks for subscribing! Please check your inbox.'

/* ── Footer ─────────────────────────────────────────────────────────────── */

export const footerBlurb =
  'Bit coin is an open-source, peer-to-peer, digital decentralized cryptocurrency. Powered by blockchain technology, it offers fast, low-cost payments anywhere in the world.'
export const mostPopularTitle = 'Most Popular'
export const footerMostPopular: ReadonlyArray<MiniPost> = [
  {
    seed: 'bullion-fp-1',
    headline: 'Crypto Prices Rally as Institutions Enter the Market',
    author: 'Danile Palmer',
    date: 'Jan 25, 2018',
  },
  {
    seed: 'bullion-fp-2',
    headline: 'The Rise of Stablecoins in Global Remittance',
    author: 'Sarah Lindqvist',
    date: 'Jan 25, 2018',
  },
  {
    seed: 'bullion-fp-3',
    headline: 'Understanding Proof of Stake vs Proof of Work',
    author: 'Marcus Vella',
    date: 'Jan 25, 2018',
  },
  {
    seed: 'bullion-fp-4',
    headline: 'How Exchanges Keep Customer Funds Secure',
    author: 'Olivia Capzallo',
    date: 'Jan 25, 2018',
  },
]

export const copyrightText = 'Copyright © 2026 All rights reserved | This template is made with'

export const bottomBarLinks = [
  'Terms & Conditions',
  'Privacy policy',
  'Jobs advertising',
  'Contact us',
] as const
