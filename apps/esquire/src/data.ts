/** Esquire — law firm template data (original content, recreated design). */

const img = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

/** Fixed picsum IDs screened/verified for the person + hero slots. */
const id = (n: number, width: number, height: number) =>
  `https://picsum.photos/id/${n}/${width}/${height}`

export const BRAND = 'Esquire'

export type NavLink = { label: string; href: string; submenu?: readonly string[] }

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Practice Area', href: '#practice' },
  { label: 'Blog', href: '#blog', submenu: ['Blog', 'Single Blog'] },
  { label: 'Pages', href: '#pages', submenu: ['Elements'] },
  { label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Twitter', href: 'https://twitter.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
] as const

export const HERO_IMAGE = id(1031, 1600, 900)

export const HERO_TITLE = 'High Quality Law Advice and Support'

export const HERO_TAGLINE = 'Leading Lawyers in Your City'

export const HERO_CTA = 'Learn More'

export const ABOUT_LEFT_IMAGE = img('esquire-1', 520, 520)

export const ABOUT_LEFT_TITLE = 'Finest And Strongest Law Firm Win The World'

export const ABOUT_LEFT_COPY =
  'Our firm pairs decades of courtroom experience with a personal, attentive approach. Every case is prepared with the same care and precision, so you always know who is fighting for you.'

export const ABOUT_RIGHT_IMAGE = img('esquire-2', 520, 520)

export const ABOUT_STAT = { value: '93%', label: 'Success Case' } as const

export const ABOUT_RIGHT_TITLE = 'About Esquire Law'

export const ABOUT_RIGHT_COPY =
  'From contract disputes to family matters, our attorneys build strategies around your goals. We win cases by listening first — and we have the record to prove it.'

export const CASE_COUNTERS = [
  { value: 879, label: 'Total Cases' },
  { value: 787, label: 'Case Won' },
] as const

export type PracticeArea = {
  title: string
  copy: string
  image: string
  icon: 'briefcase' | 'landmark' | 'gavel' | 'users'
}

export const PRACTICE_AREAS: readonly PracticeArea[] = [
  {
    title: 'Business Law',
    copy: 'Formation, contracts and mergers handled end to end by senior partners.',
    image: img('esquire-3', 420, 420),
    icon: 'briefcase',
  },
  {
    title: 'Finance Law',
    copy: 'Compliance, lending and investment advice for individuals and companies.',
    image: img('esquire-4', 420, 420),
    icon: 'landmark',
  },
  {
    title: 'Family Law',
    copy: 'Divorce, custody and estate planning resolved with discretion and care.',
    image: img('esquire-5', 420, 420),
    icon: 'gavel',
  },
  {
    title: 'Education Law',
    copy: 'Advising schools, students and parents on rights, policy and disputes.',
    image: img('esquire-6', 420, 420),
    icon: 'users',
  },
]

export type Lawyer = { name: string; role: string; image: string }

/** Portraits are verified picsum person photos; names paraphrased to match. */
export const LAWYERS: readonly Lawyer[] = [
  {
    name: 'Amelia Hart',
    role: 'Family Lawyer',
    image: id(1027, 400, 460),
  },
  {
    name: 'Sofia Reyes',
    role: 'Consumer Lawyer',
    image: id(64, 400, 460),
  },
  {
    name: 'Nora Blake',
    role: 'Criminal Lawyer',
    image: id(996, 400, 460),
  },
]

export const TESTIMONIAL_BG = id(1060, 1920, 900)

export const TESTIMONIAL_AUTHOR = 'Millan Mirza'

export const TESTIMONIAL_THUMB = id(823, 80, 80)

export const TESTIMONIALS: readonly string[] = [
  'Esquire handled my case with total professionalism. I was kept informed at every step and the outcome exceeded my expectations.',
  'After a bad experience with another firm, Esquire restored my confidence. Clear advice, honest billing and real results.',
  'The team treated my family matter with genuine care. They explained everything plainly and fought hard for us.',
]

export const APPOINTMENT_IMAGE = img('esquire-11', 520, 460)

export const APPOINTMENT_TITLE = 'Make an Appointment'

export const APPOINTMENT_COPY =
  'Tell us a little about your situation and we will arrange a confidential consultation with the right attorney for you.'

export const FOOTER_ADDRESS = '200, A-block, Green road, USA'

export const FOOTER_PHONE = '+10 367 267 2678'

export const FOOTER_EMAIL = 'lawyer@contact.com'

export const FOOTER_PRACTICE_LINKS = [
  'Business law',
  'Finance law',
  'Education law',
  'Family law',
] as const

export const FOOTER_USEFUL_LINKS = ['About', 'Blog', 'Contact'] as const

export const NEWSLETTER_TEXT = 'Subscribe newsletter to get updates'
