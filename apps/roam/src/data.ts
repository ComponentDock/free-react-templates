export const brandName = 'Roam'
export const brandTagline = 'TRAVEL BLOG'

export const navLinks = [
  'Home',
  'Category',
  'Archive',
  'Pages',
  'Elements',
  'Post Details',
  'Contact',
] as const

export const searchLabel = 'Search'
export const menuToggleLabel = 'Toggle menu'

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

interface HeroSlide {
  seed: string
  date: string
  comments: string
  headline: string
}

export const heroSlides: HeroSlide[] = [
  { seed: 'roam-hero-1', date: 'March 14, 2018', comments: '05', headline: 'Night Stand Out' },
  {
    seed: 'roam-hero-2',
    date: 'March 12, 2018',
    comments: '04',
    headline: 'Wander Beyond the Map',
  },
  { seed: 'roam-hero-3', date: 'March 10, 2018', comments: '07', headline: 'Where the Road Ends' },
]

export const readMoreLabel = 'Read More'
export const loadMoreLabel = 'Load More Posts'

interface TravelCard {
  seed: string
  title: string
  date: string
  comments: string
}

export const categoryCards: TravelCard[] = [
  { seed: 'roam-cat-1', title: 'Waterfall Travel', date: 'March 14, 2018', comments: '05' },
  { seed: 'roam-cat-2', title: 'Mountain Escape', date: 'March 12, 2018', comments: '04' },
  { seed: 'roam-cat-3', title: 'Coastal Getaway', date: 'March 10, 2018', comments: '06' },
  { seed: 'roam-cat-4', title: 'Desert Journey', date: 'March 8, 2018', comments: '03' },
  { seed: 'roam-cat-5', title: 'Forest Trails', date: 'March 6, 2018', comments: '08' },
  { seed: 'roam-cat-6', title: 'Island Hopping', date: 'March 4, 2018', comments: '09' },
]

export const latestPosts: TravelCard[] = [
  {
    seed: 'roam-latest-1',
    title: 'A Sunrise Over the Old Vineyards',
    date: 'March 14, 2018',
    comments: '05',
  },
  {
    seed: 'roam-latest-2',
    title: 'Following the River to Its Source',
    date: 'March 12, 2018',
    comments: '04',
  },
  {
    seed: 'roam-latest-3',
    title: 'The Market Towns of the North',
    date: 'March 10, 2018',
    comments: '06',
  },
  {
    seed: 'roam-latest-4',
    title: 'Camping Under a Sea of Stars',
    date: 'March 8, 2018',
    comments: '03',
  },
]

interface PlaceCard {
  seed: string
  title: string
  excerpt: string
  offset: string
}

export const placeCards: PlaceCard[] = [
  {
    seed: 'roam-place-1',
    title: 'Waterfall Mountain Visit',
    excerpt:
      'There is a moment in the life of any aspiring traveler when the map becomes less important than the road itself.',
    offset: 'md:mt-[480px]',
  },
  {
    seed: 'roam-place-2',
    title: 'Hidden Coves at Sunrise',
    excerpt:
      'The quietest beaches are the ones you have to earn, reached by footpaths that fade into the coastal scrub.',
    offset: 'md:mt-[240px]',
  },
  {
    seed: 'roam-place-3',
    title: 'Old Towns on the River',
    excerpt:
      'Every bend of the water tells a story of merchants, bridges and the slow rhythm of riverside life.',
    offset: 'md:mt-0',
  },
  {
    seed: 'roam-place-4',
    title: 'Forest Canopy Walks',
    excerpt:
      'Above the forest floor, light falls in ribbons and the world becomes a hush of green and gold.',
    offset: 'md:mt-0',
  },
  {
    seed: 'roam-place-5',
    title: 'Desert Dunes at Dusk',
    excerpt:
      'When the sun drops below the horizon, the dunes glow amber and the silence stretches for miles.',
    offset: 'md:mt-0',
  },
  {
    seed: 'roam-place-6',
    title: 'Island Lighthouses',
    excerpt:
      'Standing watch at the edge of the sea, lighthouses mark the last point of land before the open water.',
    offset: 'md:mt-[240px]',
  },
]

export const popularPosts: TravelCard[] = [
  {
    seed: 'roam-popular-1',
    title: 'The Lost Railways of the Highlands',
    date: 'March 14, 2018',
    comments: '05',
  },
  {
    seed: 'roam-popular-2',
    title: 'Street Food After Midnight',
    date: 'March 12, 2018',
    comments: '04',
  },
  {
    seed: 'roam-popular-3',
    title: 'A Winter Weekend in the Alps',
    date: 'March 10, 2018',
    comments: '06',
  },
  {
    seed: 'roam-popular-4',
    title: 'Ferries to the Small Islands',
    date: 'March 8, 2018',
    comments: '03',
  },
  {
    seed: 'roam-popular-5',
    title: 'The Great Rivers by Kayak',
    date: 'March 6, 2018',
    comments: '08',
  },
  {
    seed: 'roam-popular-6',
    title: 'Markets of the Old Quarter',
    date: 'March 4, 2018',
    comments: '02',
  },
  {
    seed: 'roam-popular-7',
    title: 'Hiking Trails Above the Clouds',
    date: 'March 2, 2018',
    comments: '07',
  },
]

export const newsletterHeading = 'Stay updated with our latest trends'
export const subscribePlaceholder = 'Enter Email'
export const subscribeLabel = 'Subscribe'

export const socialLinks = ['facebook', 'twitter', 'dribbble', 'behance'] as const
export type SocialName = (typeof socialLinks)[number]

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  dribbble: 'Dribbble',
  behance: 'Behance',
}

export const copyrightText = '© 2026 Roam. All rights reserved.'
export const creditText = 'Crafted for wanderers, near and far.'
export const backToTopLabel = 'Back to top'
