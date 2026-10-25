/** Every string the page renders, in document order. */
export const BRAND = 'Brawn'

export const VIDEO_URL = 'https://www.youtube.com/watch?v=_VnYSoMI-9Q'

export const HERO = {
  headline: 'Best Fitness In The City',
  playLabel: 'Watch the Brawn video',
  playCaption: 'Watch Video',
  image: 'https://picsum.photos/seed/brawn-hero/1920/1200',
} as const

export interface Program {
  readonly name: string
  readonly blurb: string
}

/** The six names behind the `Services` dropdown. */
export const PROGRAMS: readonly Program[] = [
  { name: 'Crossfit', blurb: 'Barbell work and conditioning, scaled to the room.' },
  { name: 'Fitness', blurb: 'Two strength days, two conditioning days, one long one.' },
  { name: 'Powerlifting', blurb: 'Squat, bench, deadlift, with a coach watching every lift.' },
  { name: 'Gym', blurb: 'Open floor access six days a week, no class booking needed.' },
  { name: 'Body Shaping', blurb: 'Higher reps, lighter loads, measured every four weeks.' },
  { name: 'Circuit', blurb: 'Eight stations, forty seconds each, four rounds.' },
]

export interface NavLink {
  readonly label: string
  readonly href: string
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Contact', href: '#contact' },
]

export interface Service {
  readonly title: string
  readonly copy: string
  /** lucide-react icon name, resolved in the component. */
  readonly icon: 'award' | 'warehouse' | 'heart' | 'dumbbell'
}

export const SERVICES: readonly Service[] = [
  {
    title: 'Quality Service',
    copy: 'A coach on the floor for every class, no more than ten people to a session, and a warm-up written for the movements that day.',
    icon: 'award',
  },
  {
    title: 'Spacious Gym',
    copy: 'Eleven hundred square metres of warehouse floor: twelve racks, a turf lane long enough to sprint, and no queue for a barbell.',
    icon: 'warehouse',
  },
  {
    title: 'Live Healthy',
    copy: 'Sleep, food and load logged in one place, reviewed with a coach every fourth week, so progress is a decision rather than a guess.',
    icon: 'heart',
  },
  {
    title: 'Crossfit',
    copy: 'Olympic lifts, gymnastics and conditioning in the same hour, scaled three ways so a first week and a fifth year train side by side.',
    icon: 'dumbbell',
  },
]

export interface Split {
  readonly id: string
  readonly heading: string
  readonly paragraphs: readonly string[]
  readonly image: string
  readonly imageAlt: string
}

export const SPLIT_ABOUT: Split = {
  id: 'about',
  heading: 'Enjoy The Fitness',
  paragraphs: [
    'Brawn started in 2011 with four racks, one coach and a borrowed rowing machine. The floor has grown since; the rule has not — every session is coached, and nobody trains alone on their first day.',
    'The roster has stayed small on purpose: seven coaches, all of them on the floor, none of them behind a desk, because a coach who has watched you lift for a year is worth more than a program printed on a wall. Classes run six days a week from half past five, with open floor hours in between.',
  ],
  image: 'https://picsum.photos/seed/brawn-split-one/720/504',
  imageAlt: 'A coached barbell class mid-lift on the warehouse floor',
}

export const SPLIT_PROGRAM: Split = {
  id: 'gallery',
  heading: 'Be Fit & Healthy',
  paragraphs: [
    'Strength, conditioning and mobility are written as one block, so a heavy squat week does not collide with a sprint week. Every athlete gets the same calendar, scaled to their own numbers.',
    'Coaches review the block with you every fourth week. If a lift stalls, the answer is a change of program, not more of the same program.',
    'The gym is open to members from half past five until half past eight, every weekday, and until noon on Saturday.',
  ],
  image: 'https://picsum.photos/seed/brawn-split-two/720/504',
  imageAlt: 'A member finishing a conditioning round on the turf lane',
}

export interface Band {
  readonly title: string
  readonly copy: string
  readonly icon: 'activity' | 'flame' | 'repeat'
}

export const BAND_PROGRAMS: readonly Band[] = [
  {
    title: 'Health Program',
    copy: 'A twelve-week block that starts at the movement you can already do, then adds load once a week.',
    icon: 'activity',
  },
  {
    title: 'Lose Weight',
    copy: 'Two conditioning classes and one strength class a week, with food logged for the first month only.',
    icon: 'flame',
  },
  {
    title: 'Cross Fit',
    copy: 'The full class: a barbell lift, a gymnastic skill and a short, hard conditioning piece.',
    icon: 'repeat',
  },
]

export interface Testimonial {
  readonly name: string
  readonly role: string
  readonly quote: string
  readonly avatar: string
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: 'Marisol Vega',
    role: 'Member since 2019',
    quote:
      'I came in unable to do a single pull-up and left the first session having done four, scaled, with a coach counting. Three years later I still book the same six-thirty class.',
    avatar: 'https://picsum.photos/seed/brawn-person-one/120/120',
  },
  {
    name: 'Tobias Nkemelu',
    role: 'Member since 2021',
    quote:
      'The programming is the part nobody advertises. You turn up, the hour is written, and after twelve weeks the numbers on the board are yours and they have moved.',
    avatar: 'https://picsum.photos/seed/brawn-person-two/120/120',
  },
  {
    name: 'Priya Raman',
    role: 'Member since 2022',
    quote:
      'Ten people to a class is the whole reason I stayed. Somebody watches your setup every single round, and the coach remembers what you tweaked last week.',
    avatar: 'https://picsum.photos/seed/brawn-person-three/120/120',
  },
  {
    name: 'Ewan Doyle',
    role: 'Member since 2020',
    quote:
      'I had written off barbell work after a shoulder injury. The coaches rebuilt the lift from a broomstick, and I deadlifted bodyweight again before the year was out.',
    avatar: 'https://picsum.photos/seed/brawn-person-four/120/120',
  },
]

export const CTA = {
  heading: 'Join With Us Now!',
  lead: 'The first session is free, the induction takes twenty minutes, and there is no contract to sign.',
  button: 'Get In Touch!',
  href: '#contact-form',
} as const

export interface ContactRow {
  readonly label: string
  readonly value: string
  readonly href?: string
}

export interface SocialLink {
  readonly label: string
  readonly href: string
}

export interface FooterContent {
  readonly aboutHeading: string
  readonly about: string
  readonly contactHeading: string
  readonly subscribeHeading: string
  readonly linksHeading: string
  readonly contact: readonly ContactRow[]
  readonly social: readonly SocialLink[]
}

export const FOOTER: FooterContent = {
  aboutHeading: 'About Brawn',
  about:
    'A coached crossfit gym on Foundry Row: six classes a day, ten people to a class, and programming written a block at a time.',
  contactHeading: 'Contact Info',
  subscribeHeading: 'Subscribe',
  linksHeading: 'Quick Links',
  contact: [
    { label: 'Address', value: '1090 Foundry Row, Portland, OR' },
    { label: 'Telephone', value: '+1 503 555 0142', href: 'tel:+15035550142' },
    { label: 'Email', value: 'hello@brawn.example', href: 'mailto:hello@brawn.example' },
  ],
  social: [
    { label: 'Brawn on X', href: 'https://x.com/' },
    { label: 'Brawn on Facebook', href: 'https://www.facebook.com/' },
    { label: 'Brawn on Instagram', href: 'https://www.instagram.com/' },
    { label: 'Brawn on YouTube', href: 'https://www.youtube.com/' },
  ],
}

export interface FooterLink {
  readonly label: string
  readonly href?: string
}

export const FOOTER_LINKS: readonly FooterLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Terms of Use' },
  { label: 'Disclaimers' },
  { label: 'Contact', href: '#contact' },
]

export const COMPONENT_DOCK = 'https://www.componentdock.com/'
