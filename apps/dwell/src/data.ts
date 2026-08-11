/** Copy + content data for the Dwell apartment-rental landing (recreation of
    ColorLib "Apart"). Kept side-effect free so every entry is unit-testable. */

export interface NavItem {
  label: string
  href: string
  active?: boolean
  children?: NavItem[]
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  {
    label: 'Apartments',
    href: '#apartments',
    children: [
      { label: 'Apartments', href: '#apartments' },
      { label: 'Rooms', href: '#apartments' },
      { label: 'Suites', href: '#apartments' },
      {
        label: 'Sub Menu',
        href: '#apartments',
        children: [
          { label: 'Menu One', href: '#apartments' },
          { label: 'Menu Two', href: '#apartments' },
          { label: 'Menu Three', href: '#apartments' },
        ],
      },
    ],
  },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export const BRAND_NAME = 'Dwell'

export const HERO_HEADLINE = 'Excellent Space For Your Next Home'
export const HERO_ADDRESS = '1105 Madison Plaza Suite 120 Chesapeake, CA, California'
export const HERO_CTA = 'Take a Tour'
export const HERO_IMAGE = 'https://picsum.photos/seed/dwell-hero/1920/1080'

export const PROPERTY_HEADING = 'Property Information'
export const PROPERTY_BLURB =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.'
export const PROPERTY_DETAILS = [
  { label: 'Property Name', value: 'Marga Luxury Suite' },
  { label: 'Room', value: '2' },
  { label: 'Total Area', value: '482 Square Feet' },
  { label: 'Category', value: 'Modern House' },
  { label: 'Launch Date', value: 'Jan 20, 2019' },
] as const
export const PROPERTY_CTA = 'Get Details'
export const PROPERTY_IMAGE = 'https://picsum.photos/seed/dwell-property/1200/900'

export const BROWSE_HEADING = 'Browse Apartments'
export const BROWSE_BLURB =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'
export const BROWSE_CTA = 'Browse All Apartments'

export interface ApartmentCard {
  city: string
  price: string
  seed: string
}

export const APARTMENTS: ApartmentCard[] = [
  { city: 'Nashville', price: '$130/night', seed: 'dwell-1' },
  { city: 'Baltimore', price: '$230/night', seed: 'dwell-2' },
  { city: 'Austin', price: '$130/night', seed: 'dwell-3' },
  { city: 'Atlanta', price: '$150/night', seed: 'dwell-4' },
]

export const FEATURED_HEADING = 'Featured Apartments'
export const FEATURED_BLURB =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export interface FeaturedApartment {
  title: string
  price: string
  seed: string
}

export const FEATURED_APARTMENTS: FeaturedApartment[] = [
  { title: 'Baltimore Apartment', price: '$600/night', seed: 'dwell-2' },
  { title: 'Austin Apartment', price: '$290/night', seed: 'dwell-3' },
  { title: 'Atlanta Apartment', price: '$1,290/night', seed: 'dwell-1' },
]

export const TESTIMONIALS_HEADING = 'Love By Our Customers'
export const TESTIMONIALS_BLURB =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export interface Testimonial {
  name: string
  quote: string
  seed: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Megan Smith',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'dwell-t1',
  },
  {
    name: 'Brooke Cagle',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    seed: 'dwell-t2',
  },
  {
    name: 'Philip Martin',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'dwell-t3',
  },
  {
    name: 'Steven Ericson',
    quote:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    seed: 'dwell-t4',
  },
  {
    name: 'Nathan Dumlao',
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    seed: 'dwell-t5',
  },
  {
    name: 'Brook Smith',
    quote:
      'One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    seed: 'dwell-t6',
  },
]

export const NEWS_HEADING = 'News & Events'
export const NEWS_BLURB =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export interface NewsCard {
  title: string
  date: string
  seed: string
}

export const NEWS: NewsCard[] = [
  {
    title: 'New loft residences now open at the Madison Plaza',
    date: 'Jan 20th, 2019',
    seed: 'dwell-n1',
  },
  {
    title: 'Inside our renovated penthouse collection',
    date: 'Jan 20th, 2019',
    seed: 'dwell-n2',
  },
  {
    title: 'Rental market insights for the coming season',
    date: 'Jan 20th, 2019',
    seed: 'dwell-n3',
  },
]

export interface SocialLink {
  label: string
  href: string
  path: string
}

/** Brand social icons — lucide-react removed brand icons, so these are
    inline SVG paths (simple-icons style). */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/',
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  },
  {
    label: 'Linkedin',
    href: 'https://linkedin.com/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  },
  {
    label: 'Pinterest',
    href: 'https://pinterest.com/',
    path: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z',
  },
  {
    label: 'Youtube',
    href: 'https://youtube.com/',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
]

export const FOOTER_ABOUT =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
export const SUBSCRIBE_PLACEHOLDER = 'Enter your email'
export const SUBSCRIBE_CTA = 'Subscribe'
export const SUBSCRIBE_SUCCESS = 'Thanks for subscribing!'
export const SUBSCRIBE_ERROR = 'Enter a valid email address'

export const NAVIGATION_GROUPS = [
  [
    { label: 'Home', href: '#home' },
    { label: 'Apartments', href: '#apartments' },
    { label: 'News', href: '#news' },
    { label: 'Featured Apartment', href: '#featured' },
  ],
  [
    { label: 'About Us', href: '#about' },
    { label: 'Privacy Policy', href: '#home' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Membership', href: '#home' },
  ],
] as const

export const FOLLOW_LINKS = SOCIAL_LINKS.slice(0, 4)

export const WATCH_LIVE_HEADING = 'Watch Live Streaming'
export const WATCH_LIVE_IMAGE = 'https://picsum.photos/seed/dwell-video/800/500'
export const WATCH_LIVE_LABEL = 'Play video'

export const COPYRIGHT = '© Dwell. All rights reserved.'
