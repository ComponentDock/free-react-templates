/* Vigor content + image constants. Copy is paraphrased from the source
   demo but keeps the same content kinds (hero slides + CTAs, ad banners,
   about split, experts strip, service cards, pricing tables, working-hours
   schedule, newsletter form, footer columns + bottom bar). Photos are
   seeded picsum placeholders — no source assets copied. */

export const BRAND = 'Vigor'

export const PHONE = '+34 586 778 8892'

export const NAV_LINKS = ['Home', 'About Us', 'News', 'Contact'] as const

export const PAGES_DROPDOWN = [
  'Home',
  'About Us',
  'Services',
  'News',
  'Contact',
  'Elements',
] as const

export const MEGA_COLUMNS = [
  ['Home', 'About Us', 'Services', 'News', 'Contact', 'Elements'],
  ['Home', 'About Us', 'Services', 'News', 'Contact', 'Elements'],
  ['Home', 'About Us', 'Services', 'News', 'Contact', 'Elements'],
  ['Home', 'About Us', 'Services', 'News', 'Contact', 'Elements'],
] as const

export const HERO_SLIDES = [
  {
    title: 'Get fit & healthy.',
    text: 'Train with certified coaches in a space built for results — strength, endurance, and confidence all under one roof.',
    cta: 'Get a membership',
    image: 'https://picsum.photos/seed/vigor-hero-1/1600/900',
  },
  {
    title: 'Long life Fitness.',
    text: 'Consistent, progressive programming that keeps you moving strong at every age and every fitness level.',
    cta: 'Read More',
    image: 'https://picsum.photos/seed/vigor-hero-2/1600/900',
  },
  {
    title: 'Fitness wonder.',
    text: 'Small classes, big attention, and a community that shows up — experience training that actually transforms.',
    cta: 'Read More',
    image: 'https://picsum.photos/seed/vigor-hero-3/1600/900',
  },
] as const

export const ABOUT_PARAGRAPHS = [
  'Vigor is a modern fitness gym built around coaching quality and real progress. Our floor is equipped for every goal — from your first session to a competition-ready physique.',
  'Certified trainers track your plan, correct your form, and push you exactly as hard as you need. No crowded floors, no forgotten members — just focused, honest training.',
] as const

export const EXPERTS = [
  {
    name: 'Julia Smith',
    role: 'Personal trainer',
    image: 'https://picsum.photos/seed/vigor-expert-1/400/500',
  },
  {
    name: 'Mick Hamilton',
    role: 'Personal trainer',
    image: 'https://picsum.photos/seed/vigor-expert-2/400/500',
  },
  {
    name: 'Jack Black',
    role: 'Personal trainer',
    image: 'https://picsum.photos/seed/vigor-expert-3/400/500',
  },
  {
    name: 'Criss James',
    role: 'Fitness trainer',
    image: 'https://picsum.photos/seed/vigor-expert-4/400/500',
  },
] as const

export const PRICING_PLANS = [
  {
    title: 'Woman Fitness Class',
    price: '$50',
    image: 'https://picsum.photos/seed/vigor-price-50/600/300',
    features: [
      'Guided group sessions for every level',
      'Monthly fitness assessment included',
      'Access to all open-floor hours',
    ],
  },
  {
    title: 'Spinning Class + BONUS',
    price: '$70',
    image: 'https://picsum.photos/seed/vigor-price-70/600/300',
    features: [
      'Unlimited spinning and cardio classes',
      'Heart-rate zone coaching included',
      'Free recovery and stretching pack',
    ],
  },
  {
    title: 'All Inclusive Gym',
    price: '$90',
    image: 'https://picsum.photos/seed/vigor-price-90/600/300',
    features: [
      'Every class, every floor, no limits',
      'Personalized nutrition check-ins',
      'Locker, towel, and sauna access',
    ],
  },
] as const

export const WORKING_HOURS = [
  { day: 'Monday', hours: '16:00 - 20:00' },
  { day: 'Tuesday', hours: '12:00 - 20:00' },
  { day: 'Wednesday', hours: '12:00 - 20:00' },
  { day: 'Thursday', hours: '12:00 - 20:00' },
  { day: 'Friday', hours: '15:00 - 21:00' },
  { day: 'Saturday', hours: '10:00 - 20:00' },
  { day: 'Sunday', hours: 'Closed' },
] as const

export const FOOTER_BLURB =
  'Vigor is a dedicated fitness center built on coaching quality and real results. Join a community that trains hard, recovers smart, and shows up every single day.'

export const FOOTER_CLASSES = [
  'Bodybuilding Class',
  'Fitness Class',
  'Yoga Courses',
  'Dumbell Class',
  'Spinning Class',
  'Kangoo Jump Class',
] as const

export const FOOTER_TESTIMONIALS = [
  'The coaching at Vigor changed how I train completely. Strength, energy, and confidence — all of it improved within months.',
  'I came for the schedule and stayed for the trainers. Every session is intentional and every rep has a purpose.',
  'A rare gym that balances intensity with care. The community here keeps me showing up week after week.',
] as const

export const FOOTER_ADDRESS = '56/8, Rockybeach Road, Santa Monica, Los Angeles, California - 59620'

export const FOOTER_PHONE = '+53 345 7953 32453'

export const FOOTER_EMAIL = 'yourmail@gmail.com'
