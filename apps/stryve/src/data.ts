export const siteName = 'Stryve'
export const pageTitle = 'Stryve — Gym & Fitness Template'
export const skipLabel = 'Skip to content'

export const navLeft = [
  { label: 'Home', href: '#top' },
  { label: 'About us', href: '#features' },
  { label: 'Classes', href: '#classes' },
] as const

export const navRight = [
  { label: 'Instructors', href: '#trainers' },
  { label: 'News', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const

export const footerMenu = [
  { label: 'Home', href: '#top' },
  { label: 'About us', href: '#features' },
  { label: 'Classes', href: '#classes' },
  { label: 'Instructors', href: '#trainers' },
  { label: 'News', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const

export const searchHeading = 'Search'
export const searchPlaceholder = 'Type Keywords'
export const searchSubmit = 'Search'
export const searchClose = 'Close search'
export const menuToggle = 'Toggle menu'

export const image = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/stryve-${seed}/${w}/${h}`

export interface Slide {
  headline: string
  accent: string
  image: string
  alt: string
  cta: string
  href: string
}

export const slides: Slide[] = [
  {
    headline: 'Be Fit.',
    accent: 'Top Gym',
    image: image('hero-1', 1920, 1200),
    alt: 'Members training on the Stryve gym floor',
    cta: 'Read More',
    href: '#classes',
  },
  {
    headline: 'Be Fit.',
    accent: 'Top Trainer',
    image: image('hero-2', 1920, 1200),
    alt: 'A coach spotting a member through a squat',
    cta: 'Read More',
    href: '#trainers',
  },
  {
    headline: 'Be Fit.',
    accent: 'Top Body',
    image: image('hero-3', 1920, 1200),
    alt: 'Kettlebells and free weights in the conditioning lane',
    cta: 'Read More',
    href: '#features',
  },
]

export const playLabel = 'Play the gym tour'
export const videoHeading = 'Gym tour'
export const videoClose = 'Close video'
export const videoPoster = image('tour', 1280, 720)

export interface Feature {
  title: string
  copy: string
  image: string
  alt: string
  icon: 'setting' | 'coaches' | 'diet'
}

export const features: Feature[] = [
  {
    icon: 'setting',
    title: 'Amazing Setting',
    copy: 'Two floors, natural light and a floor plan that never queues: platforms, racks and a turf lane under one roof.',
    image: image('feature-1', 600, 420),
    alt: 'Sunlit training floor with lifting platforms',
  },
  {
    icon: 'coaches',
    title: 'Best Trainers',
    copy: 'Sixteen coaches on the floor every day, each with a strength or conditioning specialism and a programme they answer for.',
    image: image('feature-2', 600, 420),
    alt: 'A coach correcting a member set',
  },
  {
    icon: 'diet',
    title: 'Diet Plans',
    copy: 'A nutrition review every eight weeks with our dietitian, built around the food you already cook at home.',
    image: image('feature-3', 600, 420),
    alt: 'A plate of balanced training-day food',
  },
]

export const servicesLabel = 'Features'
export const servicesHeading = 'Services'
export const servicesCta = 'see all the services'
export const servicesHref = '#classes'

export type ServiceIcon = 'pilates' | 'lifting' | 'yoga' | 'spinning'

export interface Service {
  title: string
  copy: string
  icon: ServiceIcon
}

export const services: Service[] = [
  {
    title: 'Pilates',
    copy: 'Reformer and mat classes capped at eight, so every position is corrected before the next rep starts.',
    icon: 'pilates',
  },
  {
    title: 'Free Lifting',
    copy: 'Six platforms, calibrated plates and a coach on hand for heavy singles — chalk and deadlifts welcome.',
    icon: 'lifting',
  },
  {
    title: 'Yoga',
    copy: 'Mobility-first flows at 07:00 and 19:30, written for lifters who sit at a desk all day.',
    icon: 'yoga',
  },
  {
    title: 'Spinning',
    copy: 'Forty-five minute rides with power on screen, so you can pace the session instead of guessing.',
    icon: 'spinning',
  },
]

export const trainersLabel = 'The Best'
export const trainersHeading = 'Trainers'
export const trainersCta = 'See All'

export interface Trainer {
  name: string
  role: string
  image: string
  alt: string
}

export const trainerRole = 'Aerobics Instructor'

export const trainers: Trainer[] = [
  {
    name: 'Rachel Smith',
    role: trainerRole,
    image: image('trainer-1', 560, 700),
    alt: 'Rachel Smith, aerobics instructor',
  },
  {
    name: 'Micheal Williams',
    role: trainerRole,
    image: image('trainer-2', 560, 700),
    alt: 'Micheal Williams, aerobics instructor',
  },
  {
    name: 'James Brown',
    role: trainerRole,
    image: image('trainer-3', 560, 700),
    alt: 'James Brown, aerobics instructor',
  },
]

export const trainersBand = image('trainers-band', 1920, 900)

export const classesLabel = 'Next'
export const classesHeading = 'Upcomming Classes'

export interface ClassRow {
  name: string
  time: string
}

export const classRows: ClassRow[] = [
  { name: 'Gym Fitness', time: '11:00 - 12:00' },
  { name: 'Pilates', time: '12:00 - 13:00' },
  { name: 'Spinning', time: '13:00 - 14:00' },
  { name: 'Yoga', time: '14:00 - 15:00' },
  { name: 'Gym Fitness', time: '15:00 - 16:00' },
  { name: 'Pilates', time: '16:00 - 17:00' },
]

export const membershipHeading = 'Membership Cards'
export const membershipFigure = '25%'
export const membershipSuffix = 'Discount'
export const membershipCard = image('membership', 720, 900)

export const signupLabel = 'New'
export const signupHeading = 'Personal Trainer'
export const signupCopy =
  'Start with a free week of coached sessions and a movement screen. We write the first four weeks of your programme before you decide on a membership.'
export const signupCta = 'Sign up Now'
export const signupCard = image('signup', 720, 900)

export const subscribeLabel = 'Email address'
export const subscribePlaceholder = 'Type your email'
export const subscribeCta = 'Sign Up'
export const subscribeError = 'Please enter a valid email address'
export const subscribeSuccess = 'You are on the list — check your inbox for the trial pass.'
export const subscribeNote = 'One email a month. No contracts, no spam.'

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Twitter', href: 'https://twitter.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/' },
  { label: 'Youtube', href: 'https://www.youtube.com/' },
] as const

export const copyrightLead = '© 2026 Stryve. All rights reserved.'
export const creditLead = 'Made with'
export const creditLabel = 'Component Dock'
export const creditHref = 'https://www.componentdock.com/'
