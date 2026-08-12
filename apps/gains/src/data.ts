/* Gains site data — copy and placeholder images for the fitness template.
   Brand palette: red #fa0347 → orange #fc561c gradient, near-black navy
   #080a19 footer, Teko display headings + Open Sans body. */

export const BRAND = 'Gains'

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const PAGES_DROPDOWN = ['Trainers', 'Single Blog', 'Elements']

export interface Feature {
  title: string
  copy: string
}

export const LEFT_FEATURES: Feature[] = [
  {
    title: 'Qualified Instructor',
    copy: 'Certified coaches who plan every session around your goals and keep your form honest.',
  },
  {
    title: 'Tons of Equipment',
    copy: 'Free weights, machines, and functional zones — everything a serious program needs.',
  },
]

export const RIGHT_FEATURES: Feature[] = [
  {
    title: 'Relaxation & Meditation',
    copy: 'Recovery suites and guided breathing sessions to balance the hard training days.',
  },
  {
    title: 'Happy Member',
    copy: 'Thousands of members reached their first pull-up, first race, and first personal best here.',
  },
]

export const ABOUT_IMAGE = 'https://picsum.photos/id/823/640/760'

export const EXTENDS_IMAGE = 'https://picsum.photos/id/453/960/720'

export const EXTENDS_HEADLINE = 'Make yourself stronger than your excuses'

export const EXTENDS_COPY =
  'Every rep is a conversation with the version of you that showed up yesterday. Our coaches push that conversation forward with programming that adapts week to week — so progress never stalls and motivation never has to carry the whole load.'

export interface OfferCard {
  title: string
  copy: string
  image: string
}

export const OFFER_CARDS: OfferCard[] = [
  {
    title: 'Fitness Training',
    copy: 'Strength and conditioning blocks built around your schedule and your starting point.',
    image: 'https://picsum.photos/seed/gains-offer-1/600/480',
  },
  {
    title: 'Body Building',
    copy: 'Hypertrophy programs with periodized volume, nutrition guidance, and progress tracking.',
    image: 'https://picsum.photos/seed/gains-offer-2/600/480',
  },
  {
    title: 'Cardio & Conditioning',
    copy: 'HIIT circuits and endurance work that build engine capacity without burning you out.',
    image: 'https://picsum.photos/seed/gains-offer-3/600/480',
  },
  {
    title: 'Yoga & Mobility',
    copy: 'Recovery-focused flows that open tight hips and shoulders and protect your joints.',
    image: 'https://picsum.photos/seed/gains-offer-4/600/480',
  },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'I walked in never having deadlifted and twelve weeks later hit a 140kg single. The coaching here is the real deal.',
    name: 'Mosan Cameron',
    role: 'Executive of Fedex',
  },
  {
    quote:
      'The schedule flexes around my shifts and the trainers actually remember where I was last week. That matters.',
    name: 'Riley Fox',
    role: 'Nurse at City Clinic',
  },
  {
    quote:
      'The membership pays for itself — small classes, honest feedback, and a community that shows up.',
    name: 'Dana Whitfield',
    role: 'Founder, Whitfield & Co',
  },
]

export const CALCULATE_IMAGE = 'https://picsum.photos/id/431/1920/1080'

export const GENDER_OPTIONS = ['Male', 'Female', 'Other'] as const

export interface Trainer {
  name: string
  role: string
  image: string
}

/* Trainer portraits are placeholder photos; names are paraphrased to match
   the available portraits (content-kind latitude). */
export const TRAINERS: Trainer[] = [
  {
    name: 'Ava Fletcher',
    role: 'Personal trainer',
    image: 'https://picsum.photos/id/1027/540/640',
  },
  {
    name: 'Maya Lewis',
    role: 'Personal trainer',
    image: 'https://picsum.photos/id/64/540/640',
  },
  {
    name: 'Sofia Grant',
    role: 'Personal trainer',
    image: 'https://picsum.photos/id/996/540/640',
  },
]

export const SUBSCRIBE_IMAGE = 'https://picsum.photos/id/292/1920/1080'

export const SUBSCRIBE_HEADLINE = 'Start 15 days free trial'

export const SUBSCRIBE_COPY =
  'Train with full gym access, group classes, and a personal onboarding session — no card required for two weeks.'

export const FOOTER_ABOUT =
  'Gains is a community gym built around coaching, consistency, and real progress. Come as you are; leave stronger.'

export const IMPORTANT_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Membership', href: '#subscribe' },
  { label: 'Contact', href: '#contact' },
]

export const CONTACT_LINES = [
  { label: 'Address', value: '42 Iron Street, Fitness District' },
  { label: 'Phone', value: '+2 36 265 8060' },
  { label: 'Email', value: 'hello@gains.example' },
]

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'
