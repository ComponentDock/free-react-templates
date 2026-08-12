/* Content model for the Stratus template — recreated from the ColorLib
   "Cloud83" preview (https://preview.colorlib.com/theme/cloud83/). All
   photos are picsum-seeded placeholders (no ColorLib assets); icons are
   lucide-react (brand social icons are inline SVGs in components/icons). */

export const BRAND = 'Stratus'

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'About us', href: '#about-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'News', href: '#news-section' },
  { label: 'Contact', href: '#contact-section' },
]

export const HERO_IMAGE = 'https://picsum.photos/seed/stratus-1/1920/950'

export interface HeroSlide {
  heading: string
  paragraphs: [string, string]
}

/* The original hero slider shows two identical slides (same headline and
   copy) — the recreation keeps both slides so the green active dot is
   meaningful. */
export const HERO_SLIDES: HeroSlide[] = [
  {
    heading: 'The Best Hosting',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, nulla at molestie pulvinar, est augue interdum turpis.',
      'Sed ultrices interdum libero, laoreet facilisis dui fringilla ut. Nullam nisi sem, tristique ut sapien nec, tempus auctor purus.',
    ],
  },
  {
    heading: 'The Best Hosting',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, nulla at molestie pulvinar, est augue interdum turpis.',
      'Sed ultrices interdum libero, laoreet facilisis dui fringilla ut. Nullam nisi sem, tristique ut sapien nec, tempus auctor purus.',
    ],
  },
] as const

export type FeatureIcon = 'globe' | 'shield' | 'cloud'

export interface Feature {
  icon: FeatureIcon
  title: string
  blurb: string
}

const FEATURE_BLURB =
  'Phasellus vehicula tempus orci vel consequat. Aenean sed arcu eget nibh rhoncus maximus vitae at tortor.'

export const FEATURES: Feature[] = [
  { icon: 'globe', title: 'Worldwide Support', blurb: FEATURE_BLURB },
  { icon: 'shield', title: 'Safe & Secure', blurb: FEATURE_BLURB },
  { icon: 'cloud', title: 'Cloud Hosting', blurb: FEATURE_BLURB },
]

export type ServiceIcon = 'gift' | 'users' | 'repeat' | 'server' | 'database' | 'cloud'

export interface Service {
  icon: ServiceIcon
  title: string
  blurb: string
}

export const SERVICES_SUB = 'The only ones'
export const SERVICES_HEADING = 'Our Best Services'
export const SERVICES_IMAGE = 'https://picsum.photos/seed/stratus-2/1920/950'
export const SERVICES_CIRCLE = 'https://picsum.photos/seed/stratus-3/420/420'

const SERVICE_BLURB =
  'Phasellus vehicula tempus orci vel consequat. Aenean sed arcu eget nibh rhoncus maximus vitae at tortor.'

export const SERVICES: Service[] = [
  { icon: 'gift', title: 'Free Domains', blurb: SERVICE_BLURB },
  { icon: 'users', title: 'Shared Hosting', blurb: SERVICE_BLURB },
  { icon: 'repeat', title: 'Reseller Hosting', blurb: SERVICE_BLURB },
  { icon: 'server', title: 'VPS Hosting', blurb: SERVICE_BLURB },
  { icon: 'database', title: 'Dedicated Hosting', blurb: SERVICE_BLURB },
  { icon: 'cloud', title: 'Cloud Hosting', blurb: SERVICE_BLURB },
]

export const TRUST = {
  sub: 'The only ones',
  heading: 'We Generate Trust',
  intro:
    'Phasellus vehicula tempus orci vel consequat. Aenean sed arcu eget nibh rhoncus maximus vitae at tortor. Nullam nisi sem, tristique ut sapien nec, tempus auctor purus.',
  checklist: [
    'Mauris dignissim',
    'Nullam lorem sem, viverra a rutrum',
    'Etiam lobortis erat vel ullamcorper',
    'Sed ultrices interdum libero, laoreet',
  ],
  image: 'https://picsum.photos/seed/stratus-4/600/500',
} as const

export type MilestoneIcon = 'users' | 'globe' | 'award' | 'server'

export interface Milestone {
  icon: MilestoneIcon
  value: string
  label: string
}

export const MILESTONES: Milestone[] = [
  { icon: 'users', value: '31k', label: 'Clients' },
  { icon: 'globe', value: '98k', label: 'Domains' },
  { icon: 'award', value: '14k', label: 'Awards' },
  { icon: 'server', value: '362', label: 'VPS' },
]

export const CTA = {
  heading: 'We are here to help you get started',
  subtext:
    'Phasellus vehicula tempus orci vel consequat. Aenean sed arcu eget nibh rhoncus maximus vitae at tortor.',
} as const

export const FOOTER_ABOUT =
  'Sed ultrices interdum libero, laoreet facilisis dui fringilla ut. Nullam nisi sem, tristique ut sapien nec, tempus auctor purus.'

export const FOOTER_SOCIALS = ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'] as const

export interface FooterColumn {
  title: string
  links: string[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Our Products',
    links: [
      'Web Hosting',
      'Reseller Hosting',
      'VPS Hosting',
      'Dedicated Servers',
      'Windows Hosting',
      'Cloud Hosting',
      'Linux Servers',
      'WordPress Hosting',
    ],
  },
  {
    title: 'Our Solutions',
    links: [
      'Reseller Hosting',
      'WordPress Hosting',
      'VPS Hosting',
      'Dedicated Servers',
      'Windows Hosting',
      'Cloud Hosting',
      'Linux Servers',
      'Web Hosting',
    ],
  },
  {
    title: 'Our Products',
    links: ['Dedicated Servers', 'Windows Hosting', 'Cloud Hosting'],
  },
  {
    title: 'Company',
    links: ['Dedicated Servers', 'Windows Hosting'],
  },
]

export const FOOTER_NAV = ['Home', 'About us', 'Services', 'News', 'Contact'] as const

export const COPYRIGHT_HOLDER = 'Stratus'
