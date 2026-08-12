/**
 * Cargoly content model — recreation of the ColorLib "Boxe" logistics
 * template (https://colorlib.com/wp/template/boxe/). All copy is original;
 * photos are picsum-seeded placeholders.
 */
export const BRAND_NAME = 'Cargoly'

export const NAV_LINKS = ['Home', 'About', 'Services', 'Delivery', 'Contact'] as const

/** Desktop-only dropdown under the Delivery link (source `ul.nav` dropdown). */
export const DELIVERY_SUBMENU = ['Blog', 'Single Blog', 'Elements'] as const

export const COUNTRY_CODES = ['+1', '+33', '+44', '+49', '+61', '+971'] as const

/** Hero headline parts — the last word is the yellow accent (source h1). */
export const HERO_HEADLINE: ReadonlyArray<{ text: string; accent?: boolean }> = [
  { text: 'Run on the' },
  { text: 'rocky streets', accent: true },
]

export const HERO_SUBLINE = 'Fast landing delivery / for your goods business'

export const HERO_IMAGE = 'https://picsum.photos/seed/cargoly-hero/1600/835'
export const HERO_PHONE_PLACEHOLDER = 'Phone Number'
export const PICKUP_CARD_LABEL = 'Logistics World 2019'
export const PICKUP_CARD_TITLE = 'Get Pick Up Here'

export const ABOUT_EYEBROW = 'about us'
export const ABOUT_TITLE = 'Cargoly Best'
export const ABOUT_PARAGRAPHS = [
  'Cargoly moves your freight across the continent with a modern fleet and a proven dispatch network — every load tracked, every deadline met.',
  'From single pallets to full truckloads, our logistics teams plan the route, clear the paperwork, and deliver on time, every time.',
] as const

export const SERVICES_LABEL = 'Deliverie Services'
export const SERVICES_INTRO =
  'Four core services that cover the whole journey of your cargo — from the first planning call to the final inventory check.'

export const CTA_TITLE = 'International Truck Freight'
export const CTA_TEXT =
  'Full-truckload and part-load freight across borders, with customs handling and live tracking included.'

export const PROCESS_LABEL = 'Deliveries Process'
export const PROCESS_TITLE = 'World Wide'

export const QUOTE_TITLE = 'Get A Quote'
export const TRANSPORT_METHODS = ['Road', 'Air', 'Railway', 'Ship'] as const
export const SENDER_TITLE = 'Are You A Sender?'
export const SENDER_TEXT =
  'Register your cargo with us and get instant quotes from vetted carriers across every transport method.'

export const DELIVERIES_TITLE = 'Recent Deliveries'
export const DELIVERY_ADDRESS = '324 King Heaven tower, House no Melbourne, VIC-222, Australia'

export interface DeliveryCard {
  title: string
  seed: string
}

export const DELIVERY_CARDS: DeliveryCard[] = [
  { title: 'World Corgo', seed: 'cargoly-delivery-1' },
  { title: 'Night Haul', seed: 'cargoly-delivery-2' },
  { title: 'Harbor Express', seed: 'cargoly-delivery-3' },
  { title: 'Alpine Route', seed: 'cargoly-delivery-4' },
]

export const BLOG_TITLE = 'Latest Blog'

export interface BlogPost {
  title: string
  month: string
  year: string
  excerpt: string
  likes: number
  comments: number
  seed: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Founder Defends',
    month: 'jan',
    year: '2019',
    excerpt: 'Our founder on why reliability beats speed in long-haul trucking.',
    likes: 100,
    comments: 1,
    seed: 'cargoly-blog-1',
  },
  {
    title: 'New Baltic Routes',
    month: 'feb',
    year: '2019',
    excerpt: 'Two new weekly departures now connect the Baltic ports to central Europe.',
    likes: 84,
    comments: 3,
    seed: 'cargoly-blog-2',
  },
  {
    title: 'Fleet Goes Electric',
    month: 'mar',
    year: '2019',
    excerpt: 'The first ten electric trucks join the fleet for short-haul city deliveries.',
    likes: 132,
    comments: 5,
    seed: 'cargoly-blog-3',
  },
]

export const FOOTER_ABOUT =
  'Cargoly is a full-service freight and logistics partner moving goods by road, rail, air, and sea since 2012.'

export const WORKING_HOURS: ReadonlyArray<{ days: string; hours: string }> = [
  { days: 'Monday - Friday', hours: '8AM - 6PM' },
  { days: 'Saturday - Sunday', hours: '8AM - 12PM' },
]

export const CATEGORY_LINKS = [
  'Boat Shippment',
  'Services',
  'Transport Planning',
  'Transportation',
  'Truck Delivery Checking',
] as const

export const GALLERY_SEEDS = [
  'cargoly-gal-1',
  'cargoly-gal-2',
  'cargoly-gal-3',
  'cargoly-gal-4',
  'cargoly-gal-5',
  'cargoly-gal-6',
] as const

export const NEWSLETTER_TITLE = 'Newsletter'
export const NEWSLETTER_TEXT =
  'For business professionals caught between high OEM prices and mediocre service — get our weekly freight brief.'

export const CREDIT_BRAND = 'Colorlib'
