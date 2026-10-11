export const BRAND = { name: 'trailmark', tagline: 'travel agency' }

export const NAV_LINKS = ['Home', 'About us', 'Offers', 'News', 'Contact'] as const

export interface Destination {
  name: string
  price: string
  seed: string
}

export const TOP_DESTINATIONS: Destination[] = [
  { name: 'Paris, France', price: 'From $890', seed: 'trailmark-top-1' },
  { name: 'Italian Riviera', price: 'From $890', seed: 'trailmark-top-2' },
  { name: 'Cinque Terre', price: 'From $890', seed: 'trailmark-top-3' },
  { name: 'Santorini, Greece', price: 'From $890', seed: 'trailmark-top-4' },
]

export const POPULAR_DESTINATIONS: Destination[] = [
  { name: 'Turkey', price: 'From $890', seed: 'trailmark-pop-1' },
  { name: 'Hawai', price: 'From $890', seed: 'trailmark-pop-2' },
  { name: 'Ireland', price: 'From $890', seed: 'trailmark-pop-3' },
  { name: 'Thailand', price: 'From $890', seed: 'trailmark-pop-4' },
  { name: 'Croatia', price: 'From $890', seed: 'trailmark-pop-5' },
  { name: 'Bali', price: 'From $890', seed: 'trailmark-pop-6' },
  { name: 'France', price: 'From $890', seed: 'trailmark-pop-7' },
  { name: 'Vietnam', price: 'From $890', seed: 'trailmark-pop-8' },
]

export const OFFER_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar sed mauris eget tincidunt. Sed lectus nulla, tempor vel.'

export const LAST_MINUTE_OFFERS = [
  { destination: 'maldive', percent: '50%' },
  { destination: 'bali', percent: '38%' },
]

export const ADVENTURE_TYPES = ['Adventure', 'Beach', 'City break', 'Cruise', 'Wildlife']

export const PRICE_OPTIONS = ['$500', '$1000', '$1500', '$2000']

export const SPECIAL_OFFERS = [
  { category: 'Visiting', title: 'Indonesia', seed: 'trailmark-special-1' },
  { category: 'Culture', title: 'India', seed: 'trailmark-special-2' },
  { category: 'Sunbathing', title: 'Thailand', seed: 'trailmark-special-3' },
  { category: 'Visiting', title: 'Bali', seed: 'trailmark-special-4' },
  { category: 'Visiting', title: 'France', seed: 'trailmark-special-5' },
]

export const LATEST_POSTS = [
  { title: 'Brazil Summer', date: 'Jan 09, 2018', seed: 'trailmark-latest-1' },
  { title: 'A perfect vacation', date: 'Jan 09, 2018', seed: 'trailmark-latest-2' },
]

export const FOOTER_TAGS = [
  'travel',
  'summer',
  'cruise',
  'beach',
  'offer',
  'vacation',
  'trip',
  'city break',
  'adventure',
]

export const ABOUT_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar sed mauris eget tincidunt. Sed lectus nulla, tempor vel eleifend quis, tempus rut rum metus. Pellentesque ultricies enim eu quam fermentum hendrerit.'

export const SECTION_SUBTITLE = 'take a look at these offers'

export const IMAGES = {
  hero: 'https://picsum.photos/seed/trailmark-hero/1920/1080',
  find: 'https://picsum.photos/seed/trailmark-find/1600/900',
  last: 'https://picsum.photos/seed/trailmark-last/1600/900',
  video: 'https://picsum.photos/seed/trailmark-video/1600/900',
  news: 'https://picsum.photos/seed/trailmark-news/1600/700',
}
