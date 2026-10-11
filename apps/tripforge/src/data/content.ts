/* Page copy and listing data for the Tripforge travel-directory template. */

export const BRAND = {
  name: 'tripforge',
} as const

export const NAV_LINKS = ['Home', 'About', 'Tour', 'Hotels', 'Blog', 'Contact'] as const

export const NAV_CTA = 'Add listing'

export const HERO = {
  image: 'https://picsum.photos/seed/tripforge-hero/1920/1200',
  titleTop: 'Explore',
  titleBottom: 'your amazing city',
  subtitle: 'Find great places to stay, eat, shop, or visit from local experts',
  searchPlaceholder: 'Ex: food, service, hotel',
  searchLabel: 'Keyword search',
  whereLabel: 'Where',
  whereDefault: 'San Francisco USA',
  whereOptions: ['San Francisco USA', 'Berlin Germany', 'Lodon United Kingdom', 'Paris Italy'],
  submit: 'Search',
  browseLabel: 'Or browse the highlights',
} as const

export interface DestinationItem {
  title: string
  listings: string
  image: string
}

export const DESTINATIONS: readonly DestinationItem[] = [
  {
    title: 'Paris, Italy',
    listings: '15 Listing',
    image: 'https://picsum.photos/seed/tripforge-dest-1/600/500',
  },
  {
    title: 'San Francisco, USA',
    listings: '20 Listing',
    image: 'https://picsum.photos/seed/tripforge-dest-2/600/500',
  },
  {
    title: 'Lodon, UK',
    listings: '10 Listing',
    image: 'https://picsum.photos/seed/tripforge-dest-3/600/500',
  },
  {
    title: 'Lion, Singapore',
    listings: '3 Listing',
    image: 'https://picsum.photos/seed/tripforge-dest-4/600/500',
  },
  {
    title: 'Australia',
    listings: '3 Listing',
    image: 'https://picsum.photos/seed/tripforge-dest-5/600/500',
  },
  {
    title: 'Paris, Italy',
    listings: '3 Listing',
    image: 'https://picsum.photos/seed/tripforge-dest-6/600/500',
  },
]

export interface ListingItem {
  title: string
  rating: number
  blurb: string
  location: string
  action: string
  image: string
  price?: string
  perNight?: boolean
  days?: string
}

const BLURB = 'Far far away, behind the word mountains, far from the countries'

export const TOURS: readonly ListingItem[] = Array.from({ length: 5 }, (_, index) => ({
  title: 'Paris, Italy',
  rating: 4,
  price: '$200',
  blurb: BLURB,
  days: '2 days 3 nights',
  location: 'San Franciso, CA',
  action: 'Discover',
  image: `https://picsum.photos/seed/tripforge-tour-${index + 1}/600/450`,
}))

export const HOTELS: readonly ListingItem[] = Array.from({ length: 5 }, (_, index) => ({
  title: 'Hotel, Italy',
  rating: 4,
  price: '$40',
  perNight: true,
  blurb: BLURB,
  location: 'Miami, Fl',
  action: 'Book Now',
  image: `https://picsum.photos/seed/tripforge-hotel-${index + 1}/600/450`,
}))

export const RESTAURANTS: readonly ListingItem[] = Array.from({ length: 4 }, (_, index) => ({
  title: 'Luxury Restaurant',
  rating: 4,
  blurb: BLURB,
  location: 'San Franciso, CA',
  action: index === 0 ? 'Discover' : 'Book Now',
  image: `https://picsum.photos/seed/tripforge-rest-${index + 1}/600/450`,
}))

export interface CounterItem {
  value: number
  label: string
}

export const COUNTERS: readonly CounterItem[] = [
  { value: 100000, label: 'Happy Customers' },
  { value: 40000, label: 'Destination Places' },
  { value: 87000, label: 'Hotels' },
  { value: 56400, label: 'Restaurant' },
]

export const FACTS = {
  image: 'https://picsum.photos/seed/tripforge-band/1920/900',
  subheading: 'Facts',
  titleLead: 'Some',
  titleRest: 'fun facts',
  subtitle: 'More than 100,000 websites hosted',
} as const

export const WHY = {
  subheading: 'Best Directory Website',
  titleLead: 'Why',
  titleRest: 'Choose Us?',
  paragraphs: [
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  ],
  action: 'Read more',
} as const

export const TESTIMONY = {
  subheading: 'Testimony',
  titleLead: 'Our',
  titleRest: 'Guests Says',
} as const

export interface TestimonialItem {
  quote: string
  name: string
  role: string
  photo: string
}

export const TESTIMONIALS: readonly TestimonialItem[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Dennis Green',
    role: 'Guest from italy',
    photo: 'https://picsum.photos/seed/tripforge-quote-1/200/200',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Dennis Green',
    role: 'Guest from London',
    photo: 'https://picsum.photos/seed/tripforge-quote-2/200/200',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Dennis Green',
    role: 'Guest from Philippines',
    photo: 'https://picsum.photos/seed/tripforge-quote-3/200/200',
  },
]

export interface BlogItem {
  tag: string
  title: string
  date: string
  author: string
  comments: number
  image: string
}

export const BLOG: readonly BlogItem[] = [
  {
    tag: 'Tips, Travel',
    title: "8 Best homestay in Philippines that you don't miss out",
    date: 'August 12, 2018',
    author: 'Admin',
    comments: 3,
    image: 'https://picsum.photos/seed/tripforge-blog-1/700/500',
  },
  {
    tag: 'Culture',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'August 12, 2018',
    author: 'Admin',
    comments: 3,
    image: 'https://picsum.photos/seed/tripforge-blog-2/700/500',
  },
  {
    tag: 'Tips, Travel',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'August 12, 2018',
    author: 'Admin',
    comments: 3,
    image: 'https://picsum.photos/seed/tripforge-blog-3/700/500',
  },
  {
    tag: 'Tips, Travel',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'August 12, 2018',
    author: 'Admin',
    comments: 3,
    image: 'https://picsum.photos/seed/tripforge-blog-4/700/500',
  },
]

export const NEWSLETTER = {
  title: 'Subscribe to our Newsletter',
  paragraph:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  placeholder: 'Enter email address',
  submit: 'Subscribe',
  success: 'Thanks for subscribing! Please check your inbox.',
} as const

export const FOOTER = {
  blurb:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  columns: [
    {
      title: 'Information',
      links: [
        'About',
        'Service',
        'Terms and Conditions',
        'Become a partner',
        'Best Price Guarantee',
        'Privacy and Policy',
      ],
    },
    {
      title: 'Customer Support',
      links: ['FAQ', 'Payment Option', 'Booking Tips', 'How it works', 'Contact Us'],
    },
  ],
  contactTitle: 'Have a Questions?',
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
  copyright: '© Tripforge. All rights reserved.',
} as const
