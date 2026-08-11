/** Copy + content data for the Caritas charity landing (recreation of
    ColorLib "Amor"). Kept side-effect free so every entry is unit-testable. */

interface NavChildLink {
  label: string
  href: string
}

export interface NavLink {
  label: string
  href: string
  active?: boolean
  children?: NavChildLink[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Causes', href: '#causes' },
  {
    label: 'Pages',
    href: '#pages',
    children: [
      { label: 'Event', href: '#event' },
      { label: 'Elements', href: '#elements' },
    ],
  },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog', href: '#blog' },
      { label: 'Single Blog', href: '#single-blog' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export const HERO_TITLE = 'Help the Children in Need'
export const HERO_SUBTITLE =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
export const HERO_CTA_LABEL = 'Start Donation'

export const SERVICES_TITLE = 'We are CharityPress Funding Network Worldwide.'
export const SERVICES_CAPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'

export type ServiceIconName = 'donation' | 'adoption' | 'volunteer'

export interface Service {
  icon: ServiceIconName
  title: string
  blurb: string
  linkLabel: string
  href: string
}

export const SERVICES: Service[] = [
  {
    icon: 'donation',
    title: 'Donation',
    blurb: 'Donate now to support food, shelter and education for children living in poverty.',
    linkLabel: 'Donate Now',
    href: '#causes',
  },
  {
    icon: 'adoption',
    title: 'Adopt A Child',
    blurb: 'Meet the children waiting for a loving family and learn how adoption works.',
    linkLabel: 'Contact Us',
    href: '#contact',
  },
  {
    icon: 'volunteer',
    title: 'Become A Volunteer',
    blurb: 'Join a local team and give a few hours a week to a cause you care about.',
    linkLabel: 'Read More',
    href: '#about',
  },
  {
    icon: 'donation',
    title: 'Donation',
    blurb: 'Your gift funds clean water, school supplies and medical care for whole communities.',
    linkLabel: 'Donate Now',
    href: '#causes',
  },
]

export interface AboutBadge {
  value: string
  label: string
}

export const ABOUT_BADGE: AboutBadge = { value: '2000', label: 'Since' }
export const ABOUT_TITLE = 'About Our Mission'
export const ABOUT_PARAGRAPH =
  'We are a global charity network working with local partners to protect children, support families and build stronger communities around the world.'

export interface Counter {
  value: number
  suffix: string
  label: string
}

/* Final values are rendered statically (the source's count-up animation is
   optional per spec — "or render the final values"). */
export const COUNTERS: Counter[] = [
  { value: 50, suffix: 'k', label: 'Total Volunteer' },
  { value: 25, suffix: 'k', label: 'Successful Mission' },
  { value: 100, suffix: 'k', label: 'Total Collection' },
]
export const ABOUT_BUTTON_LABEL = 'Learn More'

export const CAUSES_TITLE = 'Our Causes'
export const CAUSES_CAPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'

export type CauseIconName = 'heart' | 'droplet' | 'meal'

export interface Cause {
  seed: string
  icon: CauseIconName
  title: string
  percent: number
}

export const CAUSES: Cause[] = [
  {
    seed: 'caritas-cause-1',
    icon: 'heart',
    title: 'Safe water and sanitation for villages',
    percent: 75,
  },
  {
    seed: 'caritas-cause-2',
    icon: 'meal',
    title: 'School meals for hungry children',
    percent: 75,
  },
  {
    seed: 'caritas-cause-3',
    icon: 'droplet',
    title: 'Medical care for new mothers',
    percent: 75,
  },
]
export const CAUSE_BUTTON_LABEL = 'Read More'

export const CTA_TITLE = 'Please Raise Your Hand and Save the World'
export const CTA_BUTTON_LABEL = 'Become a Volunteer'

export const EVENTS_TITLE = 'Upcoming Event'
export const EVENTS_CAPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'

export interface EventItem {
  seed: string
  title: string
  description: string
}

export const EVENTS: EventItem[] = [
  {
    seed: 'caritas-event-1',
    title: 'Volunteer Idea 2026',
    description: 'A weekend of workshops for new volunteers.',
  },
  {
    seed: 'caritas-event-2',
    title: 'Charity Run for Clean Water',
    description: 'A family fun run raising funds for wells.',
  },
  {
    seed: 'caritas-event-3',
    title: 'Back to School Drive',
    description: 'Collecting books, bags and uniforms.',
  },
  {
    seed: 'caritas-event-4',
    title: 'Winter Clothes Collection',
    description: 'Warm coats and blankets for cold months.',
  },
]

export const BLOG_TITLE = 'Blog Post'
export const BLOG_CAPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'

export interface BlogPost {
  seed: string
  title: string
  date: string
  comments: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    seed: 'caritas-blog-1',
    title: 'How Sponsorship Changes a Child’s Life',
    date: 'July 12, 2026',
    comments: '3 Comments',
  },
  {
    seed: 'caritas-blog-2',
    title: 'Five Ways to Make Donations Go Further',
    date: 'July 5, 2026',
    comments: '7 Comments',
  },
  {
    seed: 'caritas-blog-3',
    title: 'A Day with Our Field Volunteers',
    date: 'June 28, 2026',
    comments: '2 Comments',
  },
]
export const BLOG_READ_MORE = 'Read More'

export const CLIENTS_TITLE = 'Who Donated to Us'
export const CLIENTS_CAPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
export const CLIENT_NAMES = [
  'Aurora Fund',
  'Bright Future',
  'Kindred Aid',
  'Lumen Trust',
  'Harbor House',
]

export const FOOTER_TAGLINE =
  'We are a non-profit organization working to protect children and build stronger communities around the world.'

export interface WorkingHoursRow {
  days: string
  hours: string
}

export const WORKING_HOURS: WorkingHoursRow[] = [
  { days: 'Monday – Friday', hours: '8AM – 6PM' },
  { days: 'Saturday – Sunday', hours: '8AM – 12PM' },
]

export const FOOTER_CAUSES_LINKS = [
  'Boat Shippment',
  'Services',
  'Transport Planning',
  'Transportation',
  'Truck Delivery Checking',
]

export const GALLERY_SEEDS = [
  'caritas-gallery-1',
  'caritas-gallery-2',
  'caritas-gallery-3',
  'caritas-gallery-4',
  'caritas-gallery-5',
  'caritas-gallery-6',
  'caritas-gallery-7',
  'caritas-gallery-8',
]

export const NEWSLETTER_TITLE = 'Newsletter'
export const NEWSLETTER_BLURB = 'Subscribe to our newsletter for stories, updates and ways to help.'
export const NEWSLETTER_PLACEHOLDER = 'Enter your email'
export const NEWSLETTER_BUTTON = 'Subscribe'

export const COPYRIGHT = `Copyright © ${new Date().getFullYear()} All rights reserved | This template is made with ♥ by Component Dock`
