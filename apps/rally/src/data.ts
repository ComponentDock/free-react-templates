export const navLinks = ['Home', 'About', 'Speakers', 'Schedule', 'Venue', 'Pricing'] as const

export const pagesLinks = ['Blog', 'Blog Details', 'Elements', 'Contact'] as const

export interface Speaker {
  name: string
  role: string
  image: string
}

export const speakers: Speaker[] = [
  {
    name: 'Ethel Davis',
    role: 'Managing Director (Sales)',
    image: 'https://picsum.photos/id/1027/400/460',
  },
  {
    name: 'Maya Robbins',
    role: 'Head of Growth',
    image: 'https://picsum.photos/id/64/400/460',
  },
  {
    name: 'Jessica Moore',
    role: 'Event Curator',
    image: 'https://picsum.photos/id/823/400/460',
  },
  {
    name: 'Amelia Hart',
    role: 'Conference Director',
    image: 'https://picsum.photos/id/996/400/460',
  },
] as const

export const scheduleDays = [
  {
    label: 'Day 01',
    talks: [
      { time: '09.00 am', title: 'Opening Ceremony', speaker: 'Maya Robbins' },
      {
        time: '10.30 am',
        title: 'Keynote: The Future of Digital Business',
        speaker: 'Ethel Davis',
      },
      { time: '12.00 pm', title: 'Panel — Scaling Through Technology', speaker: 'Jessica Moore' },
      { time: '03.00 pm', title: 'Workshop: Growth Frameworks', speaker: 'Amelia Hart' },
    ],
  },
  {
    label: 'Day 02',
    talks: [
      { time: '09.30 am', title: 'Morning Briefing', speaker: 'Jessica Moore' },
      { time: '11.00 am', title: 'Keynote: Leading Remote Teams', speaker: 'Amelia Hart' },
      { time: '01.30 pm', title: 'Panel — Brand & Storytelling', speaker: 'Ethel Davis' },
      { time: '04.00 pm', title: 'Workshop: Product Strategy', speaker: 'Maya Robbins' },
    ],
  },
  {
    label: 'Day 03',
    talks: [
      { time: '09.00 am', title: 'Fireside Chat with Investors', speaker: 'Ethel Davis' },
      { time: '11.30 am', title: 'Keynote: Design-Driven Innovation', speaker: 'Jessica Moore' },
      { time: '02.00 pm', title: 'Panel — The Road Ahead', speaker: 'Maya Robbins' },
      { time: '05.00 pm', title: 'Closing Ceremony', speaker: 'Amelia Hart' },
    ],
  },
] as const

export interface PricePlan {
  name: string
  audience: string
  price: string
  features: string[]
}

export const pricePlans: PricePlan[] = [
  {
    name: 'Basic',
    audience: 'Individuals/Freelancers',
    price: '£39',
    features: ['RAM 1 GB', 'Core CPU 1', 'SSD Storage 20 GB', 'Transfer 1 TB', 'Network In 40 Gb'],
  },
  {
    name: 'Starter',
    audience: 'Small Companies',
    price: '£59',
    features: ['RAM 2 GB', 'Core CPU 2', 'SSD Storage 50 GB', 'Transfer 1 TB', 'Network In 40 Gb'],
  },
  {
    name: 'Business',
    audience: 'Medium Companies',
    price: '£79',
    features: ['RAM 4 GB', 'Core CPU 4', 'SSD Storage 75 GB', 'Transfer 2 TB', 'Network In 80 Gb'],
  },
  {
    name: 'Enterprise',
    audience: 'Large Companies',
    price: '£99',
    features: [
      'RAM 8 GB',
      'Core CPU 8',
      'SSD Storage 100 GB',
      'Transfer 2 TB',
      'Network In 100 Gb',
    ],
  },
] as const

export const venueInfo = {
  city: 'California, United States',
  address: 'Santa monica bullevard',
  days: 'Monday to Wednesday',
  dates: '17-19 June, 2026',
  email: 'support@rally.events',
  note: 'Send us your query anytime!',
} as const

export const topProducts = [
  'Managed Website',
  'Manage Reputation',
  'Power Tools',
  'Marketing Service',
] as const

export const instagramThumbs = [
  'https://picsum.photos/seed/rally-ig-1/120/120',
  'https://picsum.photos/seed/rally-ig-2/120/120',
  'https://picsum.photos/seed/rally-ig-3/120/120',
  'https://picsum.photos/seed/rally-ig-4/120/120',
  'https://picsum.photos/seed/rally-ig-5/120/120',
  'https://picsum.photos/seed/rally-ig-6/120/120',
  'https://picsum.photos/seed/rally-ig-7/120/120',
  'https://picsum.photos/seed/rally-ig-8/120/120',
] as const

export const socialLinks = [
  { label: 'Facebook', href: '#facebook' },
  { label: 'Twitter', href: '#twitter' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'LinkedIn', href: '#linkedin' },
] as const

export const heroImage = 'https://picsum.photos/id/453/1920/1080'
export const welcomeImage = 'https://picsum.photos/id/1055/640/520'

/** Countdown target: a fixed offset from mount time (~89d 14h 45m 30s). */
export const countdownOffsetMs =
  89 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000 + 45 * 60 * 1000 + 30 * 1000
