// Gardenly — page content model. Brand palette: garden green #00880F
// (buttons, icons, links, submit, footer accents), forest #305534 (about
// band, headings, footer text, hero overlay), muted sage #66816A
// (paragraphs, form borders/text), pale sage #C9D6CB (grid/border lines),
// mint #EFF6F0 (categories/commitment/slider backgrounds), near-black plum
// #301A22 (nav links), pink #e6115f (button hover sweep), coral #FF6162
// (form label), bright green #12C426 (link hover). Font: Barlow.

export const BRAND = 'Gardenly'

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export interface TopBarLine {
  icon: 'phone' | 'mail' | 'clock'
  text: string
  href?: string
}

export const TOP_BAR_LINES: TopBarLine[] = [
  { icon: 'phone', text: 'Call Us: +10 (87) 263 3567', href: 'tel:+10872633567' },
  { icon: 'mail', text: 'info@gardening.example', href: 'mailto:info@gardening.example' },
  { icon: 'clock', text: 'Mon - Fri: 9:00 - 19:00' },
]

export interface HeroSlide {
  image: string
  headline: string
  subtext: string
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: 'https://picsum.photos/seed/gardenly-1/1920/700',
    headline: 'We provide best gardening service',
    subtext:
      'Trust The Grounds Guys professionals to take care of your commercial or residential grounds.',
  },
  {
    image: 'https://picsum.photos/seed/gardenly-2/1920/700',
    headline: 'We provide best gardening service',
    subtext:
      'Trust The Grounds Guys professionals to take care of your commercial or residential grounds.',
  },
  {
    image: 'https://picsum.photos/seed/gardenly-3/1920/700',
    headline: 'We provide best gardening service',
    subtext:
      'Trust The Grounds Guys professionals to take care of your commercial or residential grounds.',
  },
]

export const HERO_CTA = { label: 'View Our Services', href: '#services' }

export type CategoryIcon = 'trees' | 'sprout' | 'droplets' | 'fence' | 'trash' | 'scissors'

export interface Category {
  icon: CategoryIcon
  title: string
  blurb: string
}

export const CATEGORIES: Category[] = [
  {
    icon: 'trees',
    title: 'Landscaping',
    blurb: 'Thoughtful layouts that turn bare plots into layered, year-round gardens.',
  },
  {
    icon: 'sprout',
    title: 'Planting',
    blurb: 'The right plants in the right spot, chosen for your soil, light, and climate.',
  },
  {
    icon: 'droplets',
    title: 'Watering',
    blurb: 'Smart irrigation schedules that keep every bed deep-rooted and healthily green.',
  },
  {
    icon: 'fence',
    title: 'Fence',
    blurb: 'Clean timber and metal fencing that frames your garden with privacy and order.',
  },
  {
    icon: 'trash',
    title: 'Removing',
    blurb: 'Safe clearing of stumps, rubble, and overgrowth so the site starts fresh.',
  },
  {
    icon: 'scissors',
    title: 'Lawn Mowing',
    blurb: 'Regular mowing and edging that keep turf crisp, even, and inviting all season.',
  },
]

export const PROMO_LINE = {
  lead: 'Check out our list of service for your garden and',
  link: 'get free quote',
  href: '#quote',
}

export const ABOUT = {
  heading: 'We have been designing gardens since 1990',
  text: 'For three decades our crews have shaped green spaces for homes, offices, and public grounds — planted, pruned, and cared for by people who love the work.',
  images: [
    'https://picsum.photos/seed/gardenly-4/560/420',
    'https://picsum.photos/seed/gardenly-5/560/420',
  ],
  missions: [
    {
      title: 'Our Mission',
      text: 'To make well-kept, sustainable gardens achievable for every property — planned honestly, priced fairly, and maintained with pride.',
    },
    {
      title: 'Our Mission',
      text: 'To grow lasting green spaces through dependable seasonal care, skilled planting, and a crew that arrives on time, every time.',
    },
  ],
}

export type ServiceIcon = 'pencil-ruler' | 'leaf' | 'droplets'

export interface Service {
  icon: ServiceIcon
  title: string
  blurb: string
}

export const SERVICES: Service[] = [
  {
    icon: 'pencil-ruler',
    title: 'Landscape Design',
    blurb:
      'Full garden plans drawn to your site — planting schemes, hardscaping, and a realistic roadmap to build them.',
  },
  {
    icon: 'leaf',
    title: 'Garden Maintenance',
    blurb:
      'Seasonal care programs covering pruning, feeding, weeding, and cleanup so your garden stays at its best.',
  },
  {
    icon: 'droplets',
    title: 'Irrigation Systems',
    blurb:
      'Drip and sprinkler systems installed and tuned to water deeply while keeping the bill and waste low.',
  },
]

export interface Project {
  title: string
  image: string
}

export const PROJECTS: Project[] = [
  { title: 'Terraced Garden', image: 'https://picsum.photos/seed/gardenly-6/560/520' },
  { title: 'Japanese Courtyard', image: 'https://picsum.photos/seed/gardenly-7/560/520' },
  { title: 'Rooftop Meadow', image: 'https://picsum.photos/seed/gardenly-8/560/520' },
  { title: 'Herb Spiral', image: 'https://picsum.photos/seed/gardenly-9/560/520' },
]

export interface CommitmentSlide {
  quote: string
  author: string
  role: string
}

export const COMMITMENTS: CommitmentSlide[] = [
  {
    quote:
      'Our promise is simple: every garden we touch gets the same care we would give our own — planned well, planted right, and kept beautiful through the seasons.',
    author: 'Reuben Sandwich',
    role: 'CEO of Gardening',
  },
  {
    quote:
      'We stay until the job is done and the client is happy — a full walkthrough, a tidy site, and a garden that looks even better than the sketch.',
    author: 'Lucia Greenwood',
    role: 'Head Gardener',
  },
]

export const FORM = {
  label: 'Get A Free Quote',
  legendary:
    'Proudly serving since 1990 — tell us about your garden and we will reply within one business day.',
  fields: {
    name: 'Your name',
    email: 'Email',
    message: 'Message',
  },
  serviceOptions: [
    'Landscaping',
    'Planting',
    'Watering',
    'Fence Installation',
    'Tree Removal',
    'Lawn Mowing',
  ],
  submit: 'Sent Request',
}

export const FOOTER = {
  tagline: 'Get the breathing space now, and we will extend your term at the other end.',
  services: ['Lawn removal', 'Landscaping', 'Planting', 'Watering'],
  navigation: ['Home', 'Services', 'About', 'Projects', 'Contact'],
  contact: {
    email: 'consulto98@example.com',
    address: '76/A, Green Road, NYC',
    phone: '+1 (80) 783 367-3904',
  },
  credit: 'Component Dock',
  creditUrl: 'https://www.componentdock.com/',
}

export type SocialKey = 'facebook' | 'twitter' | 'instagram' | 'pinterest'

export const SOCIALS: SocialKey[] = ['facebook', 'twitter', 'instagram', 'pinterest']
