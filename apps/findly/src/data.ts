// Findly — page content model. Brand palette: primary blue #4DB7FE
// (buttons, search button, location button, nav hovers, active states),
// deep blue #304CBB (active category pill fill), navy #1A213D (headings,
// input labels, button hover sweep), ink #140C40 (hero search input text),
// orange #FF6F00 (rating stars + review text), pale blue-grey #F1F6F9
// (interest categories, how-it-works, testimonial quote card), pale blue
// #F1FBFF (footer), muted brown #6B5A5A (subtext). Fonts: Work Sans
// (headings/buttons) + Mulish (body).

export const BRAND = 'Findly'

export interface NavLink {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'Listing',
    href: '#listing',
    children: [
      { label: 'Listing', href: '#listing' },
      { label: 'Listing Details', href: '#listing-details' },
    ],
  },
  { label: 'About', href: '#about' },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog', href: '#blog' },
      { label: 'Blog Details', href: '#blog-details' },
      { label: 'Element', href: '#element' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  image: 'https://picsum.photos/id/431/1920/1000',
  headline: 'Listing made easy.',
  subtext:
    'Explore vacation rentals, bar & restaurants and experiences. Find amazing places to visit',
  whatLabel: 'What?',
  whatPlaceholder: 'Ex: Food, Service, Hotel, Shopping',
  whereLabel: 'Where?',
  wherePlaceholder: 'Your City....',
  search: 'Search',
}

export interface CategoryPill {
  label: string
}

export const CATEGORY_PILLS: CategoryPill[] = [
  { label: 'Restaurant' },
  { label: 'Home' },
  { label: 'Party' },
  { label: 'Shopping' },
  { label: 'Hotel' },
]

export const ACTIVE_PILL_INDEX = 1

export interface Destination {
  name: string
  image: string
}

export const DESTINATIONS: Destination[] = [
  { name: 'New York', image: 'https://picsum.photos/id/1015/400/400' },
  { name: 'Toronto', image: 'https://picsum.photos/id/1036/400/400' },
  { name: 'Thailand', image: 'https://picsum.photos/id/108/400/400' },
  { name: 'Paris', image: 'https://picsum.photos/id/164/400/400' },
  { name: 'Dhaka', image: 'https://picsum.photos/id/1039/400/400' },
  { name: 'Rome', image: 'https://picsum.photos/id/1055/400/400' },
]

export interface Interest {
  title: string
  image: string
  description?: string
  tall?: boolean
}

export const INTERESTS: Interest[] = [
  {
    title: 'Restaurant & Bar',
    image: 'https://picsum.photos/id/292/600/420',
  },
  {
    title: 'Outdoor',
    image: 'https://picsum.photos/id/337/600/420',
  },
  {
    title: 'Shopping Center',
    image: 'https://picsum.photos/id/1080/600/900',
    description: 'Discover & connect with great local businesses in New York',
    tall: true,
  },
  {
    title: 'Restaurant & Bar',
    image: 'https://picsum.photos/id/425/600/420',
  },
  {
    title: 'Outdoor',
    image: 'https://picsum.photos/id/244/600/420',
  },
]

export interface Listing {
  title: string
  image: string
  rating: string
  address: string
}

export const LISTINGS: Listing[] = [
  {
    title: 'Gloria Fast Food Restaurant',
    image: 'https://picsum.photos/id/431/600/420',
    rating: '4.90 (230 Review)',
    address: '75 Prince Street, Green Road, NY, USA',
  },
  {
    title: 'The Daily Grind Café',
    image: 'https://picsum.photos/id/292/600/420',
    rating: '4.80 (184 Review)',
    address: '12 Canal Lane, Downtown, NY, USA',
  },
  {
    title: 'Ember & Oak Kitchen',
    image: 'https://picsum.photos/id/425/600/420',
    rating: '4.70 (312 Review)',
    address: '48 Harbor Avenue, Brooklyn, NY, USA',
  },
  {
    title: 'Bloom Market Bistro',
    image: 'https://picsum.photos/id/1080/600/420',
    rating: '4.95 (96 Review)',
    address: '9 Orchard Row, Chelsea, NY, USA',
  },
  {
    title: 'Saffron Street Eats',
    image: 'https://picsum.photos/id/429/600/420',
    rating: '4.85 (203 Review)',
    address: '27 Maple Cross, Queens, NY, USA',
  },
]

export const LISTING_CATEGORY = 'Food & Restaurant'

export const CTA = {
  heading: 'Do you want to find more?',
  text: '10,563 listing for you on our list.',
  action: 'Explore More',
}

export type StepIcon = 'search' | 'star' | 'calendar'

export interface Step {
  icon: StepIcon
  title: string
  blurb: string
}

export const STEPS: Step[] = [
  {
    icon: 'search',
    title: 'Find Businesses',
    blurb:
      'Search thousands of trusted local businesses, venues, and experiences across the directory.',
  },
  {
    icon: 'star',
    title: 'Review Listings',
    blurb: 'Read honest ratings and reviews from people who have already visited and booked.',
  },
  {
    icon: 'calendar',
    title: 'Make a Reservation',
    blurb: 'Reserve your spot in a few taps — tables, tickets, and experiences in one place.',
  },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
  image: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Findly helped us discover our favorite neighborhood restaurant in minutes — the reviews were spot on and the reservation took seconds.',
    name: 'Dan Delion',
    role: 'Founder at Findly',
    image: 'https://picsum.photos/id/1027/160/160',
  },
  {
    quote:
      'As a small business owner, listing on Findly brought us a steady stream of new customers from the very first week.',
    name: 'Mira Solano',
    role: 'Owner, Green Road Café',
    image: 'https://picsum.photos/id/64/160/160',
  },
]

export const FOOTER_LINKS = {
  about:
    'Findly is a free directory of the best places to eat, stay, shop, and explore — curated listings with honest reviews.',
  navigation: ['Home', 'About', 'Services', 'Blog', 'Contact'],
  services: ['Find Businesses', 'List Your Business', 'Pricing', 'Help Center'],
}

export const NEWSLETTER = {
  heading: 'Subscribe newsletter',
  pitch: 'Subscribe our newsletter to get updates about our services and offers.',
  placeholder: 'Enter Email Address',
  submit: 'Subscribe',
  success: 'Thank you for subscribing!',
}

export const COPYRIGHT = {
  line: '© 2026 Findly — All rights reserved',
  creditLead: 'More templates at',
  creditLink: 'Component Dock',
  creditUrl: 'https://www.componentdock.com/',
}

export type SocialKey = 'facebook' | 'instagram' | 'linkedin' | 'youtube'

export const SOCIALS: SocialKey[] = ['facebook', 'instagram', 'linkedin', 'youtube']
