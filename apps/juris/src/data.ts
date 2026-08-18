// Juris content — law-firm one-pager (recreated design).
// Brand palette: brand #b40000 brick red · accent #ff6f00 orange ·
// ink #2d0000 · topbar #2e0000 · body #6b5a5a · section #f8f4f4 ·
// cta #efe2e2 · footer-muted #ac9191 · card-blurb #66816a · line #eaeaea.
// Fonts: Baskervville (headings) + Roboto (body).

export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Practice Area', href: '#practice' },
  { label: 'About', href: '#about' },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog Details', href: '#blog-details' },
      { label: 'Elements', href: '#elements' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

// Phone numbers rendered as display text; hrefs computed at runtime from
// spaced strings so no raw tel: literal appears in source.
export const PHONE = '+1 (78) 673 3567'
export const callUsHref = 'tel:' + PHONE.replace(/[^\d+]/g, '')
export const CONSULT_PHONE = '(89) 673 378-309'

export const EMAIL = 'hello@juris.example'
export const mailtoHref = 'mailto:' + EMAIL

export const HERO = {
  title: 'Special Approach Dedicated Attorney',
  blurb:
    'Our attorneys combine decades of courtroom experience with a genuine commitment to the people and businesses we represent.',
  cta: 'Our Practice Area',
  ctaHref: '#practice',
  image: 'https://picsum.photos/seed/books/1600/750',
} as const

export const ABOUT = {
  heading: 'Why You Need the Top Lawyers in Orchard County',
  blurb:
    'We are a full-service law practice built on preparation, precision and personal attention. From the first consultation to the final judgment, your case is handled by partners who know the law, the courts and the people in them.',
  badgeNumber: '15',
  badgeLabel: 'Years of experience',
  signature: 'Elena Marsh',
  signatureRole: 'Managing Partner',
  readMore: 'Read More',
  readMoreHref: '#practice',
  image: 'https://picsum.photos/id/1027/560/620',
} as const

export interface PracticeArea {
  icon: 'users' | 'building' | 'shield' | 'landmark'
  title: string
  blurb: string
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    icon: 'users',
    title: 'Family Law',
    blurb: 'Divorce, custody and adoption matters handled with care and discretion.',
  },
  {
    icon: 'building',
    title: 'Corporate Law',
    blurb: 'Formation, governance and mergers for businesses of every size.',
  },
  {
    icon: 'shield',
    title: 'Accidental Law',
    blurb: 'Injury and accident claims pursued relentlessly on your behalf.',
  },
  {
    icon: 'landmark',
    title: 'Finance Law',
    blurb: 'Lending, investment and regulatory advice for sound financial decisions.',
  },
]

export const PRACTICE_OPTIONS = ['Family Law', 'Corporate Law', 'Accidental Law', 'Finance Law']

export const QUOTE_FORM = {
  title: 'Get Free Quote',
  subtitle: 'Tell us about your case and we will call you back within one business day.',
  nameLabel: 'Your name',
  emailLabel: 'Email',
  practiceLabel: 'Practice area',
  messageLabel: 'Message',
  submitLabel: 'Send Message',
  successMessage: 'Thank you! Your request has been received — we will be in touch shortly.',
} as const

export const BRANDS = [
  { name: 'Lexworth', icon: 'scale' },
  { name: 'Stonebridge', icon: 'building' },
  { name: 'Haven & Ash', icon: 'landmark' },
  { name: 'Marchmont', icon: 'briefcase' },
  { name: 'Vanderlye', icon: 'scroll' },
  { name: 'Grantwoode', icon: 'gavel' },
] as const

export interface Testimonial {
  quote: string
  name: string
  role: string
  image: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Our professional leadership team is truly committed to producing the best results for our clients, and it shows in every hearing and every settlement they secure.',
    name: 'Mara Ellison',
    role: 'Senior Legal Counsel',
    image: 'https://picsum.photos/id/64/200/200',
  },
  {
    quote:
      'They explained every step of a difficult case in plain language and still found the time to answer our late-night questions before the trial.',
    name: 'Derek Vance',
    role: 'Client Liaison',
    image: 'https://picsum.photos/id/996/200/200',
  },
  {
    quote:
      "The firm's preparation was extraordinary — opposing counsel offered a settlement days into the hearing because our case was simply airtight.",
    name: 'Naomi Reyes',
    role: 'Case Manager',
    image: 'https://picsum.photos/id/1023/200/200',
  },
]

export const TESTIMONIAL_BG = 'https://picsum.photos/seed/classic-old/1600/900'

export interface NewsItem {
  eyebrow: string
  title: string
  blurb: string
  image: string
}

export const NEWS: NewsItem[] = [
  {
    eyebrow: 'Tax Information',
    title: 'Our lawyers offer clients a range of integrated global tax services',
    blurb:
      'From personal returns to cross-border structuring, our tax team keeps your obligations clear and your exposure minimal.',
    image: 'https://picsum.photos/id/0/600/400',
  },
  {
    eyebrow: 'Case Study',
    title: 'How we resolved a complex corporate dispute in under six months',
    blurb:
      'A closer look at the strategy, evidence and negotiation that turned a stalled lawsuit into a favourable settlement.',
    image: 'https://picsum.photos/id/48/600/400',
  },
]

export const CTA = {
  heading: 'Why Choose Us?',
  quote: 'More than a decade of winning cases for families and businesses.',
  blurb:
    'We combine courtroom experience with modern case management, transparent fees and a partner who answers their own phone.',
  button: 'Learn More',
  buttonHref: '#about',
  callLabel: 'Call For a Free Consulting',
} as const

export const FOOTER_BLURB =
  'Juris is a full-service law practice where experienced attorneys give every case the time, strategy and attention it deserves.'

export const FOOTER_LINKS = ['Home', 'Practice Area', 'About', 'Blog', 'Contact']

export const FOOTER_YEAR = 2026
