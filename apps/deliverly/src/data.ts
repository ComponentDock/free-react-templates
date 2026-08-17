import { Globe, Repeat, TrendingUp, Truck, type LucideIcon } from 'lucide-react'

export const brandName = 'Deliverly'

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Dropdown', href: '#services' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const dropdownLabel = 'Dropdown'

export const dropdownLinks: NavLink[] = [
  { label: 'Menu One', href: '#services' },
  { label: 'Menu Two', href: '#about' },
  { label: 'Menu Three', href: '#blog' },
]

export const heroTitle = 'We Deliver Your Package On Time'
export const heroSubtitle =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
export const heroPrimaryCta = 'Partner with us'
export const heroPrimaryCtaHref = '#contact'
export const heroSecondaryCta = 'Watch'
export const heroSecondaryCtaHref = '#about'
export const heroImage = 'https://picsum.photos/id/1081/1920/1080'
export const aboutImage = 'https://picsum.photos/id/1054/900/700'

export const inquiryTitle = 'Are you a Medium to Large Size Business?'
export const inquiryText =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
export const inquiryCta = 'Get started'
export const inquiryCtaHref = '#contact'

export const proofTitle = 'Proof On Display'
export const proofLead =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export interface ProofStat {
  icon: LucideIcon
  label: string
}

export const proofStats: ProofStat[] = [
  { icon: Truck, label: '24/7 Fast Delivery' },
  { icon: Repeat, label: '90% Repeat Purchase' },
  { icon: Globe, label: 'We Deliver Worldwide' },
]

export const pricingTitle = 'Choose Your Ideal Pack'

interface PricingFeature {
  label: string
  included: boolean
}

export interface PricingPlan {
  name: string
  price: string
  description: string
  features: PricingFeature[]
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$12',
    description: 'Far far away, behind the word mountains.',
    features: [
      { label: 'Local city delivery', included: true },
      { label: 'Standard parcel tracking', included: true },
      { label: 'Priority handling', included: false },
      { label: 'Fragile care coverage', included: false },
      { label: 'International shipping', included: false },
    ],
  },
  {
    name: 'Standard',
    price: '$49',
    description: 'Far far away, behind the word mountains.',
    features: [
      { label: 'Local city delivery', included: true },
      { label: 'Standard parcel tracking', included: true },
      { label: 'Priority handling', included: true },
      { label: 'Fragile care coverage', included: false },
      { label: 'International shipping', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '$79',
    description: 'Far far away, behind the word mountains.',
    features: [
      { label: 'Local city delivery', included: true },
      { label: 'Standard parcel tracking', included: true },
      { label: 'Priority handling', included: true },
      { label: 'Fragile care coverage', included: true },
      { label: 'International shipping', included: false },
    ],
  },
  {
    name: 'Advanced',
    price: '$199',
    description: 'Far far away, behind the word mountains.',
    features: [
      { label: 'Local city delivery', included: true },
      { label: 'Standard parcel tracking', included: true },
      { label: 'Priority handling', included: true },
      { label: 'Fragile care coverage', included: true },
      { label: 'International shipping', included: true },
    ],
  },
]

export const servicesTitle = 'Services'

export interface Service {
  icon: LucideIcon
  title: string
  text: string
}

export const services: Service[] = [
  {
    icon: Truck,
    title: '24/7 Fast Delivery',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Repeat,
    title: '90% Repeat Purchase',
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    icon: Globe,
    title: 'We Deliver Worldwide',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: TrendingUp,
    title: 'Scale Sufficiently',
    text: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
]

export const testimonialsTitle = 'What people says about us'

export interface Testimonial {
  name: string
  role: string
  quote: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Logistics Director',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/id/1027/400/480',
  },
  {
    name: 'Amara Okafor',
    role: 'Supply Chain Manager',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/id/64/400/480',
  },
  {
    name: 'Elena Rossi',
    role: 'Warehouse Supervisor',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/id/823/400/480',
  },
  {
    name: 'Priya Nair',
    role: 'Operations Lead',
    quote:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    image: 'https://picsum.photos/id/996/400/480',
  },
]

export const blogTitle = 'Latest Blog Posts'

export interface BlogPost {
  date: string
  title: string
  excerpt: string
}

export const blogPosts: BlogPost[] = [
  {
    date: 'May 12th, 2020',
    title: 'How We Deliver Packages On Time, Every Time',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    date: 'June 3rd, 2020',
    title: 'Inside Our 24/7 Fulfillment Network',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    date: 'July 19th, 2020',
    title: 'Reducing Delivery Times by 30%',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    date: 'August 8th, 2020',
    title: 'Packaging That Survives the Journey',
    excerpt:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    date: 'September 24th, 2020',
    title: 'Tracking Your Shipment in Real Time',
    excerpt: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
]

export const footerAboutTitle = 'About Deliverly'
export const footerAboutText =
  'Deliverly moves packages and parcels across the city and around the world, around the clock.'
export const footerLinks = ['About us', 'Services', 'News', 'Careers', 'Contact']

export type SocialLabel = 'Facebook' | 'X' | 'LinkedIn' | 'Instagram' | 'Dribbble'

export interface SocialLink {
  label: SocialLabel
  href: string
}

export const footerSocials: SocialLink[] = [
  { label: 'Facebook', href: '#' },
  { label: 'X', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Dribbble', href: '#' },
]

export const contactAddress = '43 Raymouth Rd. Baltemoer, London 3910'
export const contactPhone = '+1 123 456 7890'
export const contactEmail = 'info@mydomain.com'
export const copyrightLine = '© 2026 Deliverly — All rights reserved'
export const componentDockLabel = 'Component Dock'
export const componentDockUrl = 'https://www.componentdock.com/'
