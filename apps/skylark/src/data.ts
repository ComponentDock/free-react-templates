/* Skylark — travel & flight booking landing template. Single-page
   recreation: top info bar + navbar → hero → search filter → special
   offers → our benefit → feature places carousel → destination gallery →
   news latest → footer.
   Brand palette: ink navy #1D2A3B (headings, menu, card titles), brand
   blue #4657F0 (underline bars, icons, price badges, search button),
   star yellow #F9B71C (ratings), muted #747E8C (meta, footer icons),
   light band #f4f8fb (benefit bg), night #191B26 (footer bg). Nunito Sans
   type via the <link> in index.html. */

export const BRAND = 'Skylark'

export const CONTACT = {
  address: '84 Forest Ave, Lake Grove, New York',
  phone: '(+12) 345-678-91012',
  email: 'trips@skylark.example',
} as const

export const SOCIALS = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Skype', href: '#' },
] as const

export interface NavLink {
  label: string
  href: string
  active?: boolean
  children?: NavChild[]
}

interface NavChild {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home-section', active: true },
  {
    label: 'Pages',
    href: '#home-section',
    children: [
      { label: 'Places', href: '#feature-places' },
      { label: 'Places Details', href: '#feature-places' },
      { label: 'Blog Details', href: '#news-latest' },
    ],
  },
  { label: 'Blog', href: '#news-latest' },
  { label: 'About Us', href: '#our-benefit' },
  { label: 'Contacts', href: '#footer' },
]

export const HERO = {
  headline: "Let's Make Your Best Trip Ever",
  subtext:
    'Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.',
  cta: 'Discover Now',
  /* Subject-critical hero photo: pinned picsum id 1036 (Himalayan base-camp
     with snow peaks + blue sky) — verified to render an adventurous mountain
     travel scene that matches the source's cockpit-over-mountains feel. */
  image: 'https://picsum.photos/id/1036/1920/1080',
} as const

export const FILTER = {
  whereLabel: 'Where',
  wherePlaceholder: 'Center Point, Lo…',
  dateLabel: 'Date',
  datePlaceholder: '09th March, 2021',
  guestsLabel: 'Guests',
  guestOptions: ['05', '06', '04', '08'],
  button: 'Search Plane',
} as const

interface Offer {
  title: string
  location: string
  price: string
  image: string
}

export const OFFERS: Offer[] = [
  {
    title: 'Known monument in the black hills of south',
    location: 'Lake Grove, New York',
    price: '$120',
    image: 'https://picsum.photos/seed/skylark-offer-1/600/420',
  },
  {
    title: 'Sunset cruise along the glittering coast',
    location: 'Miami, Florida',
    price: '$180',
    image: 'https://picsum.photos/seed/skylark-offer-2/600/420',
  },
  {
    title: 'Private island retreat under the palms',
    location: 'Bora Bora, Pacific',
    price: '$240',
    image: 'https://picsum.photos/seed/skylark-offer-3/600/420',
  },
]

interface BenefitItem {
  icon: string
  title: string
  description: string
}

export const BENEFITS: BenefitItem[] = [
  {
    icon: 'Clock',
    title: 'Personal Schedule',
    description:
      'Build your own itinerary around the moments that matter, with flexible dates and smart reminders for every leg of the journey.',
  },
  {
    icon: 'Armchair',
    title: 'Luxury Interiors',
    description:
      'Hand-picked cabins and lounges with premium seating, ambient lighting, and space designed around comfort.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Safe & Confidential',
    description:
      'Your passport data and payments are encrypted end to end, and every booking is verified by our travel desk.',
  },
  {
    icon: 'Users',
    title: 'Professional Crew',
    description:
      'A certified crew is on call around the clock to answer questions and keep your trip running smoothly.',
  },
]

export const BENEFIT_PHOTOS = [
  'https://picsum.photos/seed/skylark-benefit-1/400/400',
  'https://picsum.photos/seed/skylark-benefit-2/400/400',
  'https://picsum.photos/seed/skylark-benefit-3/400/400',
  'https://picsum.photos/seed/skylark-benefit-4/400/400',
]

interface FeaturePlace {
  name: string
  rating: string
  reviews: string
}

export const FEATURE_PLACES: FeaturePlace[] = [
  { name: 'Phuket, Thailand', rating: '4.5', reviews: '(120k Rating)' },
  { name: 'Positano, Italy', rating: '4.2', reviews: '(92k Rating)' },
  { name: 'Bali, Indonesia', rating: '4.4', reviews: '(150k Rating)' },
  { name: 'Tokyo, Japan', rating: '4.7', reviews: '(88k Rating)' },
  { name: 'Santorini, Greece', rating: '4.8', reviews: '(74k Rating)' },
  { name: 'Kyoto, Japan', rating: '4.9', reviews: '(61k Rating)' },
]

export const FEATURE_IMAGES = [
  'https://picsum.photos/seed/skylark-feature-1/400/480',
  'https://picsum.photos/seed/skylark-feature-2/400/480',
  'https://picsum.photos/seed/skylark-feature-3/400/480',
  'https://picsum.photos/seed/skylark-feature-4/400/480',
  'https://picsum.photos/seed/skylark-feature-5/400/480',
  'https://picsum.photos/seed/skylark-feature-6/400/480',
]

export const GALLERY_COUNTRIES = [
  'America',
  'Slovakia',
  'Canada',
  'Japan',
  'Italy',
  'Singapore',
  'China',
  'Australia',
  'Austria',
  'Bangladesh',
  'Spain',
] as const

interface NewsItem {
  title: string
  meta: string
  author: string
  image: string
}

export const RECENT_NEWS: NewsItem[] = [
  {
    title: 'The point of using Lorem Ipsum is that it has...',
    meta: 'Travel',
    author: 'By Admin',
    image: 'https://picsum.photos/seed/skylark-news-1/120/120',
  },
  {
    title: 'Five beaches worth the early morning flight...',
    meta: 'Travel',
    author: 'By Admin',
    image: 'https://picsum.photos/seed/skylark-news-2/120/120',
  },
  {
    title: 'Packing light: a 14-day carry-on experiment...',
    meta: 'Guide',
    author: 'By Admin',
    image: 'https://picsum.photos/seed/skylark-news-3/120/120',
  },
]

interface BlogPost {
  title: string
  date: string
  meta: string
  author: string
  image: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'The point of using Lorem Ipsum is that it has a more-or-less',
    date: 'Oct 28, 2020',
    meta: 'Travel',
    author: 'By Admin',
    image: 'https://picsum.photos/seed/skylark-blog-1/600/400',
  },
  {
    title: 'Ten scenic routes worth leaving the airport for',
    date: 'Oct 28, 2020',
    meta: 'Guide',
    author: 'By Admin',
    image: 'https://picsum.photos/seed/skylark-blog-2/600/400',
  },
]

export const FOOTER = {
  about:
    'Nullam ultrices tortor non diam ullamcorper auctor. In urna tellus, auctor sit amet est ut, scelerisque volutpat diam.',
  nav: ['Home', 'Pages', 'Blog', 'About Us', 'Contacts'],
  copyright: 'All rights reserved',
} as const
