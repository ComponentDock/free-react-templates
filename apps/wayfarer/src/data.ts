import { Compass, Luggage, Route } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const brandName = 'Wayfarer'

export const navLabel = 'Main navigation'
export const mobileNavLabel = 'Mobile navigation'
export const menuTriggerLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

export interface NavItem {
  label: string
  href: string
  children?: readonly { label: string; href: string }[]
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Destination', href: '#destination' },
  {
    label: 'Pages',
    href: '#destination',
    children: [
      { label: 'Destinations details', href: '#destination' },
      { label: 'Elements', href: '#places' },
    ],
  },
  {
    label: 'Blog',
    href: '#trips',
    children: [
      { label: 'Blog', href: '#trips' },
      { label: 'Single blog', href: '#trips' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export const phoneNumber = '10(256)-928 256'

type SocialLink =
  | { type: 'brand'; name: 'instagram' | 'linkedin' | 'facebook'; label: string }
  | { type: 'icon'; label: string }

export const socials = [
  { type: 'brand', name: 'instagram', label: 'Instagram' },
  { type: 'brand', name: 'linkedin', label: 'Linkedin' },
  { type: 'brand', name: 'facebook', label: 'Facebook' },
  { type: 'icon', label: 'Airbnb' },
] as const satisfies readonly SocialLink[]

export const searchTriggerLabel = 'Open search'
export const searchDialogLabel = 'Search site'
export const searchInputLabel = 'Search'
export const searchInputPlaceholder = 'Search anything...'
export const searchSubmitLabel = 'search'
export const closeSearchLabel = 'Close search'

interface HeroSlide {
  name: string
  text: string
  image: string
}

export const heroSlides = [
  {
    name: 'Indonesia',
    text: 'Pixel perfect design with awesome contents',
    image: 'https://picsum.photos/seed/wayfarer-slide1/1600/650',
  },
  {
    name: 'Australia',
    text: 'Pixel perfect design with awesome contents',
    image: 'https://picsum.photos/seed/wayfarer-slide2/1600/650',
  },
  {
    name: 'Switzerland',
    text: 'Pixel perfect design with awesome contents',
    image: 'https://picsum.photos/seed/wayfarer-slide3/1600/650',
  },
] as const satisfies readonly HeroSlide[]

export const heroExploreLabel = 'Explore Now'
export const previousSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'
export const slideLabelPrefix = 'Go to slide'

export const searchSectionTitle = 'Where you want to go?'
export const whereToGoLabel = 'Where to go?'
export const whereToGoPlaceholder = 'Where to go?'
export const dateLabel = 'Date'
export const travelTypeLabel = 'Travel type'
export const travelTypeOptions = ['Some option', 'Another option'] as const
export const searchButtonLabel = 'Search'
export const searchFormLabel = 'Plan your trip'

export const destinationSectionTitle = 'Popular Destination'
export const destinationSectionText =
  'Suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.'
export const placesPillSuffix = 'Places'

interface Destination {
  name: string
  count: string
  image: string
}

export const destinations = [
  { name: 'Italy', count: '07', image: 'https://picsum.photos/seed/wayfarer-dest1/600/450' },
  { name: 'Brazil', count: '03', image: 'https://picsum.photos/seed/wayfarer-dest2/600/450' },
  { name: 'America', count: '10', image: 'https://picsum.photos/seed/wayfarer-dest3/600/450' },
  { name: 'Nepal', count: '02', image: 'https://picsum.photos/seed/wayfarer-dest4/600/450' },
  { name: 'Maldives', count: '02', image: 'https://picsum.photos/seed/wayfarer-dest5/600/450' },
  { name: 'Indonesia', count: '05', image: 'https://picsum.photos/seed/wayfarer-dest6/600/450' },
] as const satisfies readonly Destination[]

export const newsletterTitle = 'Subscribe Our Newsletter'
export const newsletterText = 'Subscribe newsletter to get offers and about new places to discover.'
export const newsletterEmailLabel = 'Your mail'
export const newsletterSubmitLabel = 'Subscribe'
export const newsletterSuccess = 'Thanks for subscribing!'

export const placesSectionTitle = 'Popular Places'
export const placesSectionText =
  'Suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.'

interface Place {
  name: string
  country: string
  price: string
  review: string
  days: string
  image: string
}

export const places = [
  {
    name: 'California',
    country: 'United States',
    price: '$500',
    review: '(20 Review)',
    days: '5 Days',
    image: 'https://picsum.photos/seed/wayfarer-place1/600/450',
  },
  {
    name: 'Korola Megna',
    country: 'Bangladesh',
    price: '$350',
    review: '(18 Review)',
    days: '4 Days',
    image: 'https://picsum.photos/seed/wayfarer-place2/600/450',
  },
  {
    name: 'London',
    country: 'United Kingdom',
    price: '$420',
    review: '(24 Review)',
    days: '6 Days',
    image: 'https://picsum.photos/seed/wayfarer-place3/600/450',
  },
  {
    name: 'Miami Beach',
    country: 'United States',
    price: '$480',
    review: '(15 Review)',
    days: '3 Days',
    image: 'https://picsum.photos/seed/wayfarer-place4/600/450',
  },
  {
    name: 'Santorini',
    country: 'Greece',
    price: '$390',
    review: '(21 Review)',
    days: '5 Days',
    image: 'https://picsum.photos/seed/wayfarer-place5/600/450',
  },
  {
    name: 'Saintmartine Iceland',
    country: 'Iceland',
    price: '$460',
    review: '(17 Review)',
    days: '7 Days',
    image: 'https://picsum.photos/seed/wayfarer-place6/600/450',
  },
] as const satisfies readonly Place[]

export const morePlacesLabel = 'More Places'
export const morePlacesHref = '#places'

export const videoTitle = 'Enjoy Video'
export const videoPlayLabel = 'Play video'

interface Variation {
  icon: LucideIcon
  title: string
  text: string
}

export const variationItems = [
  {
    icon: Luggage,
    title: 'Comfortable Journey',
    text: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.',
  },
  {
    icon: Compass,
    title: 'Luxuries Hotel',
    text: 'I feel that I never enjoyed a moment of life as much as I am enjoying it while travelling.',
  },
  {
    icon: Route,
    title: 'Travel Guide',
    text: 'When I hear the buzz of the little world among the stalks, I grow calm and absorbed.',
  },
] as const satisfies readonly Variation[]

interface Testimonial {
  photo: string
  quote: string
  author: string
}

export const testimonials = [
  {
    photo: 'https://picsum.photos/seed/wayfarer-traveler1/200/200',
    quote:
      'Working in conjunction with humanitarian aid agencies, we have supported programmes to help ameliorate this terrible situation.',
    author: '- Micky Mouse',
  },
  {
    photo: 'https://picsum.photos/seed/wayfarer-traveler2/200/200',
    quote:
      'Together with humanitarian aid partners, we have backed projects that ease hardship and bring lasting change to local communities.',
    author: '- Tom Mouse',
  },
  {
    photo: 'https://picsum.photos/seed/wayfarer-traveler3/200/200',
    quote:
      'Our journey programmes, run alongside aid agencies, have improved conditions for families in the regions we visit.',
    author: '- Jerry Mouse',
  },
] as const satisfies readonly Testimonial[]

export const tripsSectionTitle = 'Recent Trips'

interface Trip {
  date: string
  title: string
  image: string
}

export const trips = [
  {
    date: 'Mar 15, 2032',
    title: 'Journeys Are Best Measured In New Friends',
    image: 'https://picsum.photos/seed/wayfarer-trip1/600/450',
  },
  {
    date: 'Apr 22, 2032',
    title: 'The Mountains Are Calling And I Must Go',
    image: 'https://picsum.photos/seed/wayfarer-trip2/600/450',
  },
  {
    date: 'May 8, 2032',
    title: 'Take Only Memories, Leave Only Footprints',
    image: 'https://picsum.photos/seed/wayfarer-trip3/600/450',
  },
] as const satisfies readonly Trip[]

export const companyTitle = 'Company'
export const companyLinks = ['Pricing', 'About', 'Gallery', 'Contact'] as const

export const destinationsTitle = 'Popular destination'
export const destinationLinks = [
  'Indonesia',
  'America',
  'India',
  'Switzerland',
  'Italy',
  'Canada',
  'France',
  'England',
] as const

export const instagramTitle = 'Instagram'
export const instagramImages = [
  'https://picsum.photos/seed/wayfarer-insta1/150/150',
  'https://picsum.photos/seed/wayfarer-insta2/150/150',
  'https://picsum.photos/seed/wayfarer-insta3/150/150',
  'https://picsum.photos/seed/wayfarer-insta4/150/150',
  'https://picsum.photos/seed/wayfarer-insta5/150/150',
  'https://picsum.photos/seed/wayfarer-insta6/150/150',
] as const

export const componentDockName = 'Component Dock'
export const componentDockUrl = 'https://www.componentdock.com/'
export const copyrightPrefix = 'Copyright © All rights reserved'
export const madeWithPrefix = 'This template is made with ♥ by'
