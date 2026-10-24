export interface NavChild {
  label: string
  href: string
  children?: NavChild[]
}

export interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  {
    label: 'Dropdown',
    href: '#services',
    children: [
      {
        label: 'Menu One',
        href: '#services',
        children: [
          { label: 'Sub Menu One', href: '#services' },
          { label: 'Sub Menu Two', href: '#services' },
          { label: 'Sub Menu Three', href: '#services' },
        ],
      },
      { label: 'Menu Two', href: '#services' },
      { label: 'Menu Three', href: '#services' },
    ],
  },
  { label: 'Our products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
]

export const hero = {
  subheading: 'Welcome',
  headline: 'Design is not just what it looks like design is how it works',
  quote:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  author: 'Mark Vaughn',
  location: 'Lublin, Poland',
  seed: 'flint-hero',
}

export const intro = {
  headline:
    'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  quote:
    'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  paragraphs: [
    'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  ],
  caption: {
    title: 'We love minimal',
    body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  seed: 'flint-intro',
}

export type ServiceIcon = 'lamp' | 'bed' | 'armchair' | 'bath'

export interface Service {
  icon: ServiceIcon
  title: string
  body: string
}

const serviceBlurb =
  'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'

export const services: Service[] = [
  { icon: 'lamp', title: 'Reduce costs to a minimum', body: serviceBlurb },
  { icon: 'bed', title: 'Reduce costs to a minimum', body: serviceBlurb },
  { icon: 'armchair', title: 'Reduce costs to a minimum', body: serviceBlurb },
  { icon: 'bath', title: 'Reduce costs to a minimum', body: serviceBlurb },
]

export interface Post {
  date: string
  title: string
  excerpt: string
  seed: string
}

export const posts: Post[] = [
  {
    date: 'May 14, 2020',
    title: 'Far far away, behind the word mountains',
    excerpt: 'Vokalia and Consonantia, there live the blind texts. Separated they live.',
    seed: 'flint-post-1',
  },
  {
    date: 'May 14, 2020',
    title: 'Far far away, behind the word mountains',
    excerpt: 'Vokalia and Consonantia, there live the blind texts. Separated they live.',
    seed: 'flint-post-2',
  },
  {
    date: 'May 14, 2020',
    title: 'Far far away, behind the word mountains',
    excerpt: 'Vokalia and Consonantia, there live the blind texts. Separated they live.',
    seed: 'flint-post-3',
  },
  {
    date: 'May 14, 2020',
    title: 'Far far away, behind the word mountains',
    excerpt: 'Vokalia and Consonantia, there live the blind texts. Separated they live.',
    seed: 'flint-post-4',
  },
]

export interface Quote {
  quote: string
  author: string
  location: string
  seed: string
}

export const testimonials: Quote[] = [
  {
    quote: hero.quote,
    author: 'Mark Vaughn',
    location: 'Lublin, Poland',
    seed: 'flint-person-1',
  },
  {
    quote: hero.quote,
    author: 'Mark Vaughn',
    location: 'Lublin, Poland',
    seed: 'flint-person-2',
  },
  {
    quote: hero.quote,
    author: 'Mark Vaughn',
    location: 'Lublin, Poland',
    seed: 'flint-person-3',
  },
]

export const cta = {
  heading: 'Get started with our products',
  label: 'Get started',
}

export type SocialName =
  'Instagram' | 'Twitter' | 'Facebook' | 'LinkedIn' | 'Pinterest' | 'Dribbble'

export const footerColumns = [
  {
    title: 'Links',
    links: ['About us', 'Services', 'News', 'Careers', 'Contact'],
  },
  {
    title: 'Company',
    links: ['About us', 'Services', 'News', 'Careers', 'Contact'],
  },
]

export const contact = {
  address: '43 Raymouth Rd. Baltemoer, London 3910',
  phone: '+1(123)-456-7890',
  email: 'info@mydomain.com',
}

export const socials: SocialName[] = [
  'Instagram',
  'Twitter',
  'Facebook',
  'LinkedIn',
  'Pinterest',
  'Dribbble',
]
