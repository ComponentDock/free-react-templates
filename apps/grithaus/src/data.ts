export const siteName = 'Grithaus'
export const tagline = 'Strength club'
export const skipLabel = 'Skip to content'
export const pageTitle = 'Grithaus — Strength Club Template'

export const callLabel = 'Call: +34 586 778 8892'
export const callHref = 'tel:+34586778892'

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'News', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

export const dropdownLabel = 'Pages'
export const dropdownLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'News', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const
export const megaLabel = 'Mega Menu'

export const slideImage = (n: number, w = 1920, h = 1100) =>
  `https://picsum.photos/seed/grithaus-${n}/${w}/${h}`

export interface Slide {
  headline: string
  copy: string
  cta: string
  href: string
  image: string
  alt: string
}

export const slides: Slide[] = [
  {
    headline: 'Get fit & healthy.',
    copy: 'Coached strength and conditioning in a boutique gym that caps the floor at forty members — so every rep gets attention.',
    cta: 'Get a membership',
    href: '#pricing',
    image: slideImage(13),
    alt: 'Members warming up on the Grithaus training floor',
  },
  {
    headline: 'Long life Fitness.',
    copy: 'Train for the decades ahead: joint-friendly programming, structured progression and a recovery plan you will actually keep.',
    cta: 'Read More',
    href: '#about',
    image: slideImage(10),
    alt: 'Loaded barbells lined up along the lifting platform',
  },
  {
    headline: 'Fitness wonder.',
    copy: 'Three studios, six coaches and a timetable that runs from 06:00 to 21:00 — built around your week, not ours.',
    cta: 'Read More',
    href: '#services',
    image: slideImage(2),
    alt: 'Coach cueing a member through a squat in the strength studio',
  },
]

export interface Promo {
  eyebrow: string
  headline: string
  copy: string
  cta: string
  href: string
  variant: 'offer' | 'photo'
  image: string
}

export const promos: Promo[] = [
  {
    eyebrow: 'Limited',
    headline: '25% Discount',
    copy: 'On annual memberships until the end of the month — onboarding assessment and first training block included.',
    cta: 'Claim the offer',
    href: '#pricing',
    variant: 'offer',
    image: slideImage(4, 900, 600),
  },
  {
    eyebrow: 'Every week',
    headline: 'Fitness Class',
    copy: 'Small-group conditioning six days a week. The first class is free for new members.',
    cta: 'Book a class',
    href: '#services',
    variant: 'photo',
    image: slideImage(5, 900, 600),
  },
]

export const about = {
  label: siteName,
  heading: 'Why choose Grithaus?',
  paragraphs: [
    'Grithaus is a strength-first club: coached barbell work, conditioning and mobility under one roof, programmed so it scales from your first session to your five-hundredth.',
    'Every membership opens with an assessment and a written training block, and includes the recovery room. No joining fee, no lock-in, and a hard cap of forty members on the floor at any hour.',
  ],
  primaryCta: { label: 'Get a membership', href: '#pricing' },
  secondaryCta: { label: 'Find out more', href: '#services' },
  image: slideImage(6, 900, 1100),
  imageAlt: 'Coach demonstrating a kettlebell hinge to a member',
}

export interface Trainer {
  name: string
  role: string
  image: string
  compact: boolean
}

export const trainers: Trainer[] = [
  { name: 'Julia Smith', role: 'Personal trainer', image: slideImage(7, 700, 900), compact: false },
  { name: 'Mick Hamilton', role: 'Personal trainer', image: slideImage(8, 700, 900), compact: true },
  { name: 'Jack Black', role: 'Personal trainer', image: slideImage(9, 700, 900), compact: true },
  { name: 'Criss James', role: 'Fitness trainer', image: slideImage(10, 700, 900), compact: true },
]

export type ServiceIcon = 'school' | 'dumbbell' | 'yoga' | 'salad' | 'waves' | 'bike'

export interface Service {
  title: string
  copy: string
  icon: ServiceIcon
}

export const services: Service[] = [
  {
    title: 'Business School',
    copy: 'Corporate memberships with on-site coaching, quarterly testing and a floor reserved before nine.',
    icon: 'school',
  },
  {
    title: 'Fitness Pro',
    copy: 'One-to-one coaching for lifters chasing a number: written blocks, video review and meet prep.',
    icon: 'dumbbell',
  },
  {
    title: 'Yoga Courses',
    copy: 'Mobility and breathwork classes that keep hips, shoulders and ankles in the programme.',
    icon: 'yoga',
  },
  {
    title: 'Diet Specialists',
    copy: 'Practical nutrition coaching built on your own food, not a printout of somebody else’s.',
    icon: 'salad',
  },
  {
    title: 'Swimming Pool',
    copy: 'Low-impact conditioning in a 25-metre pool, with lane bookings that fit a lunch break.',
    icon: 'waves',
  },
  {
    title: 'Spinning Class',
    copy: 'Forty-minute intervals on the bikes, capped at twelve riders so the coach can watch everyone.',
    icon: 'bike',
  },
]

export interface Plan {
  price: string
  period: string
  title: string
  features: string[]
  image: string
}

export const plans: Plan[] = [
  {
    price: '$50',
    period: '/ Month',
    title: 'Woman Fitness Class',
    features: ['Three coached classes a week', 'Full access to the studio floor', 'Monthly progress review'],
    image: slideImage(11, 700, 500),
  },
  {
    price: '$70',
    period: '/ Month',
    title: 'Spinning Class + BONUS',
    features: ['Unlimited spin and conditioning', 'Two personal sessions a month', 'Recovery room and sauna'],
    image: slideImage(12, 700, 500),
  },
  {
    price: '$90',
    period: '/ Month',
    title: 'All Inclusive Gym',
    features: ['Floor and class access, all hours', 'Four personal sessions a month', 'Nutrition plan with check-ins'],
    image: slideImage(13, 700, 500),
  },
]

export const hours = [
  { day: 'Monday', time: '16:00 - 20:00' },
  { day: 'Tuesday', time: '12:00 - 20:00' },
  { day: 'Wednesday', time: '12:00 - 20:00' },
  { day: 'Thursday', time: '12:00 - 20:00' },
  { day: 'Friday', time: '15:00 - 21:00' },
  { day: 'Saturday', time: '10:00 - 20:00' },
  { day: 'Sunday', time: 'Closed' },
] as const

export const hoursHeading = 'Working Hours'
export const newsletterHeading = 'Our Newsletter'
export const newsletterNote =
  'One email a month: the new timetable, coach notes and member results. No offers you did not ask for.'
export const newsletterButton = 'Subscribe'
export const newsletterSuccess = 'Thanks — you are on the list.'

export const testimonials = [
  {
    quote:
      'My deadlift went from 60 to 120 kilos in eight months and nothing hurt. That is the whole review.',
    author: 'Michael Smith',
  },
  {
    quote:
      'The 06:00 class is the only reason I still train. The coaches know your name and your numbers.',
    author: 'Julia Williams',
  },
] as const

export const footerBlurb =
  'A strength club for people who plan to train for thirty years, not thirty days.'

export const footerClasses = [
  'Bodybuilding Class',
  'Fitness Class',
  'Yoga Courses',
  'Dumbbell Class',
  'Spinning Class',
  'Kangoo Jump Class',
] as const

export const contact = {
  addressLabel: 'Address:',
  address: '481 Creekside Lane, Avila Beach, CA 93424',
  phoneLabel: 'Phone:',
  phone: '+53 345 7953 32453',
  emailLabel: 'Email:',
  email: 'hello@grithaus.com',
}

export const socials = [
  { label: 'Pinterest', href: '#top' },
  { label: 'Facebook', href: '#top' },
  { label: 'Twitter', href: '#top' },
  { label: 'Dribbble', href: '#top' },
  { label: 'Behance', href: '#top' },
  { label: 'Instagram', href: '#top' },
] as const

export const creditLabel = 'Component Dock'
export const creditHref = 'https://www.componentdock.com/'
export const copyrightLead = '© 2026 Grithaus. All rights reserved.'
export const copyrightJoin = 'Made with'
export const footerBandImage = slideImage(14, 1920, 900)
export const expertsBandImage = slideImage(15, 1920, 900)
export const pricingBandImage = slideImage(16, 1920, 900)
export const newsletterHeadingLabel = siteName
