/** Central content + image sources for the Hoodly local-directory landing
 *  page. Placeholder photos are deterministic picsum seeds (no copied
 *  assets); copy is paraphrased from the original reference design. */

export const navLinks = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Explore', href: '#trending', active: false },
  { label: 'More Cities', href: '#categories', active: false },
  { label: 'News', href: '#blog', active: false },
  { label: 'Contact', href: '#contact', active: false },
] as const

export const brand = {
  name: 'HOODLY',
  tagline: 'LOCAL DIRECTORY',
} as const

export const hero = {
  city: 'New York',
  description:
    'Discover the best places around you — restaurants, nightlife, hotels, and events, all in one search.',
  categories: [
    'Restaurants',
    'Hotels',
    'Food & Drinks',
    'Home Delievery',
    'Commercial Shops',
  ] as const,
  locations: ['New York'],
  searchLabel: 'Search Now',
  successMessage: 'Showing results for New York — thanks for searching!',
  /** City-scene hero (Bruges canal town) — verified subject: urban, warm
   *  tones, reads well under the dark overlay. */
  image: 'https://picsum.photos/id/164/1920/1080',
} as const

export const trending = {
  eyebrow: 'Top trending for your city',
  subline: 'Explore some of the best places in the world',
  cards: [
    {
      title: 'New Place Restaurant',
      rating: '4.9',
      address: 'Main Road, No 25/11',
      description:
        'A neighborhood favorite serving generous plates of home-style cooking with a modern twist.',
      status: 'Closed Now',
      statusAlt: 'Opens Tomorow at 10am',
      tag: 'Restaurants',
      tagColor: 'yellow',
      image: 'https://picsum.photos/seed/hoodly-trend-1/400/400',
    },
    {
      title: 'Palace Club',
      rating: '4.9',
      address: 'Parker Street, No 234/40',
      description:
        'Late-night beats, a rooftop terrace, and a cocktail list that keeps the city coming back.',
      status: 'Open Until 3am',
      statusAlt: undefined,
      tag: 'Nightlife',
      tagColor: 'blue',
      image: 'https://picsum.photos/seed/hoodly-trend-2/400/400',
    },
    {
      title: 'Grand Hotel',
      rating: '4.6',
      address: 'Main Road, No 25/11',
      description:
        'Classic hospitality in the heart of the city — quiet rooms, a grand lobby, and attentive staff.',
      status: 'Closed Now',
      statusAlt: 'Opens Tomorow at 10am',
      tag: 'Hotels',
      tagColor: 'green',
      image: 'https://picsum.photos/seed/hoodly-trend-3/400/400',
    },
    {
      title: 'Opera Concert',
      rating: '5.0',
      address: 'Parker Street, No 234/40',
      description:
        'The city stage for world-class performances — orchestral nights, premieres, and standing ovations.',
      status: 'Open Until 3am',
      statusAlt: undefined,
      tag: 'Events',
      tagColor: 'purple',
      image: 'https://picsum.photos/seed/hoodly-trend-4/400/400',
    },
  ],
} as const

export const categories = {
  tiles: [
    {
      name: 'Restaurants',
      listings: '2373 Listings',
      image: 'https://picsum.photos/seed/hoodly-cat-1/800/800',
      large: true,
    },
    {
      name: 'Nightlife & Clubs',
      listings: '2373 Listings',
      image: 'https://picsum.photos/seed/hoodly-cat-2/480/480',
      large: false,
    },
    {
      name: 'Spa & Resorts',
      listings: '2373 Listings',
      image: 'https://picsum.photos/seed/hoodly-cat-3/480/480',
      large: false,
    },
    {
      name: 'Hotels',
      listings: '2373 Listings',
      image: 'https://picsum.photos/seed/hoodly-cat-4/480/480',
      large: false,
    },
    {
      name: 'Clubs & Pubs',
      listings: '2373 Listings',
      image: 'https://picsum.photos/seed/hoodly-cat-5/480/480',
      large: false,
    },
  ],
} as const

export const testimonials = {
  slides: [
    {
      quote:
        'I found my favorite brunch spot in ten seconds flat — the reviews were honest and the map was spot on.',
      name: 'Michael Smith',
      position: 'CEO Company',
      photo: 'https://picsum.photos/id/64/120/120',
    },
    {
      quote:
        'We moved to the city last month and Hoodly helped us discover our whole neighborhood in a weekend.',
      name: 'Sarah Lin',
      position: 'Product Designer',
      photo: 'https://picsum.photos/id/823/120/120',
    },
    {
      quote:
        'The listing photos and open hours are always current — I have not been sent to a closed door once.',
      name: 'James Carter',
      position: 'Travel Blogger',
      photo: 'https://picsum.photos/id/996/120/120',
    },
  ],
} as const

export const work = {
  eyebrow: 'How it works',
  subline: 'Finding your next favorite place takes three simple steps',
  image: 'https://picsum.photos/seed/hoodly-work/1920/800',
  steps: [
    {
      number: '01.',
      title: 'Search the portal',
      description:
        'Pick a category and a location, then browse real listings with photos, hours, and ratings.',
    },
    {
      number: '02.',
      title: 'Choose the one 4u',
      description:
        'Compare reviews and highlights side by side until the right place for tonight is obvious.',
    },
    {
      number: '03.',
      title: 'Book it!',
      description:
        'Reserve a table, a room, or a ticket in a couple of taps — the venue already knows you are coming.',
    },
  ],
} as const

export const appSection = {
  eyebrow: 'Get the App now!',
  subline: 'Explore some of the best places in the world',
  description:
    'Take the whole directory in your pocket — browse by category, read verified reviews, and get directions wherever you are.',
  bullets: ['Find nearby places instantly', 'Read verified reviews', 'Save your favorites offline'],
  image: 'https://picsum.photos/seed/hoodly-phone/480/640',
} as const

export const footer = {
  newsletterPlaceholder: 'Your email',
  newsletterButton: 'Subscribe to our Newsletter',
  newsletterSuccess: 'Thanks for subscribing — watch your inbox for city picks.',
  usefulLinks: ['About us', 'Testimonials', 'How it works', 'Create an account', 'Our Services'],
  supportLinks: [
    'Get help',
    'Contact us',
    'Report a problem',
    'Terms of service',
    'Privacy policy',
  ],
  categoryLinks: ['Hotels', 'Restaurant', 'Spa & resorts', 'Concert & Events', 'Bars & Pubs'],
  blogPosts: [
    {
      title: '10 Best clubs in town',
      date: 'March 27, 2019',
      image: 'https://picsum.photos/seed/hoodly-blog-1/120/90',
    },
    {
      title: 'The city food map, updated',
      date: 'March 18, 2019',
      image: 'https://picsum.photos/seed/hoodly-blog-2/120/90',
    },
  ],
} as const
