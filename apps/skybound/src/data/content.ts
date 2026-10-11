export const MENU_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
] as const

export const MENU_PAGES = [
  { label: 'About-us', href: '#popular' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Elements', href: '#search' },
] as const

export const MENU_BLOG = [
  { label: 'Blog', href: '#blog' },
  { label: 'Blog Details', href: '#blog' },
] as const

export const MENU_CONTACT = { label: 'Contact', href: '#search' } as const

export const HERO = {
  titleFirst: 'Santorini Island',
  titleSecond: 'in Greece',
  text: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.',
  cta: 'Get Started',
  videoTitle: 'Watch Intro Video',
  videoCaption: 'You will love our execution',
  photo: 'https://picsum.photos/seed/skybound-1/900/760',
  photoAlt: 'Coastal village on a Greek island',
} as const

export const POPULAR = {
  titleFirst: 'Popular Places Around',
  titleSecond: 'The World',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  images: [
    { src: 'https://picsum.photos/seed/skybound-2/700/620', alt: 'Aerial view of a bay' },
    { src: 'https://picsum.photos/seed/skybound-3/520/460', alt: 'Harbour promenade' },
    { src: 'https://picsum.photos/seed/skybound-4/520/460', alt: 'Whitewashed hillside houses' },
  ],
  destinations: [
    { place: 'London', count: '135 Places' },
    { place: 'Turkey', count: '75 Places' },
    { place: 'Paris', count: '150 Places' },
    { place: 'Thailand', count: '85 Places' },
  ],
} as const

export const PACKAGES = {
  titleFirst: 'Best Tour Plans',
  titleSecond: 'Recently',
  paragraphs: [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.',
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  ],
  cta: 'Browse all Packages',
  cards: [
    {
      src: 'https://picsum.photos/seed/skybound-5/720/860',
      alt: 'Santorini island coastline',
      title: 'Proper Guided Tour',
    },
    {
      src: 'https://picsum.photos/seed/skybound-6/720/860',
      alt: 'Mykonos harbour at dusk',
      title: 'Proper Guided Tour',
    },
    {
      src: 'https://picsum.photos/seed/skybound-7/720/860',
      alt: 'Crete mountain trail',
      title: 'Proper Guided Tour',
    },
  ],
  price: '$56',
  priceSuffix: '/day',
  blurb: 'Santorini Island Dream Holiday and Fun package',
} as const

export const AMENITIES = {
  titleFirst: 'Benefits Our',
  titleSecond: 'Customers Enjoy',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  cards: [
    {
      src: 'https://picsum.photos/seed/skybound-8/600/440',
      alt: 'Rental car on a coastal road',
      meta: 'Within a Short Time',
      title: 'Luxurious Car Rental Service Available',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      src: 'https://picsum.photos/seed/skybound-9/600/440',
      alt: 'Boat party at sunset',
      meta: 'Within a Short Time',
      title: 'Cruise Private Party Booking Available',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      src: 'https://picsum.photos/seed/skybound-10/600/440',
      alt: 'Seaside dinner table',
      meta: 'Within a Short Time',
      title: 'Tremendous Options for Food Lovers',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ],
} as const

export const SEARCH = {
  titleFirst: 'Search Suitable & Desired',
  titleSecond: 'Package for You',
  paragraphs: [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.',
  ],
  panelTitle: 'Package Search',
  destinationPlaceholder: 'Destination',
  checkInPlaceholder: 'Check in Date',
  checkOutPlaceholder: 'Check Out Date',
  travellers: [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ],
  submit: 'Browse all Packages',
} as const

export const TESTIMONIALS = {
  slides: [
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Marvel Maison',
      role: 'Chief Executive, Amazon',
    },
    {
      quote:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
      author: 'Marvel Maison',
      role: 'Chief Executive, Amazon',
    },
  ],
} as const

export const NEWSLETTER = {
  titleFirst: 'Subscribe',
  titleSecond: 'to Get Updated for',
  titleThird: 'Our Newsletter',
  paragraphs: [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.',
  ],
  inputPlaceholder: 'Email Address',
  submit: 'Subscribe',
  note: 'We promise that we will never share your email address with anyone else.',
} as const

export const BLOG = {
  titleFirst: 'Benefits Our',
  titleSecond: 'Customers Enjoy',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  meta: { date: '13th Dec', likes: '15', comments: '04' },
  posts: [
    {
      src: 'https://picsum.photos/seed/skybound-12/600/440',
      alt: 'Rental car on a coastal road',
      title: 'Luxurious Car Rental Service Available',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      src: 'https://picsum.photos/seed/skybound-13/600/440',
      alt: 'Boat party at sunset',
      title: 'Cruise Private Party Booking Available',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      src: 'https://picsum.photos/seed/skybound-14/600/440',
      alt: 'Seaside dinner table',
      title: 'Tremendous Options for Food Lovers',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ],
} as const

export const FOOTER = {
  aboutTitle: 'About Skybound',
  aboutText:
    'The world has become so fast paced that people don’t want to stand by reading a page of information, they would much rather look.',
  navTitle: 'Navigation Links',
  navColumns: [
    [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#amenities' },
      { label: 'Project', href: '#popular' },
    ],
    [
      { label: 'Team Members', href: '#blog' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#search' },
    ],
  ],
  newsletterTitle: 'Newsletter',
  newsletterNote:
    'For business professionals caught between high OEM price mediocre print and graphic.',
  inputPlaceholder: 'Email Address',
  instafeedTitle: 'Instafeed',
  instafeed: [
    'https://picsum.photos/seed/skybound-15/200/200',
    'https://picsum.photos/seed/skybound-16/200/200',
    'https://picsum.photos/seed/skybound-17/200/200',
    'https://picsum.photos/seed/skybound-18/200/200',
    'https://picsum.photos/seed/skybound-19/200/200',
    'https://picsum.photos/seed/skybound-20/200/200',
    'https://picsum.photos/seed/skybound-21/200/200',
    'https://picsum.photos/seed/skybound-22/200/200',
  ],
  instafeedAlt: 'Traveller snapshot',
  copyright: 'Copyright © All rights reserved',
  credit: 'This template is made with care by Skybound',
} as const
