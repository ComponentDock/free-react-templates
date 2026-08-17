// Fiscale — page content model. Brand palette: green #24b800 (icons,
// number circles, primary buttons, checkmarks, links), royal blue #4877fb
// (hero overlay, headings, CTA band, prices, secondary buttons), ink #000,
// body rgba(0,0,0,0.5), muted #888/#777, fog #efefef, light #f8f9fa.
// Fonts: Poppins (headings) + Open Sans (body).

export const BRAND = 'Fiscale'

export interface NavLink {
  label: string
  href: string
  active?: boolean
  children?: NavLink[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home-section', active: true },
  {
    label: 'Dropdown',
    href: '#features-section',
    children: [
      { label: 'Menu One', href: '#features-section' },
      { label: 'Menu Two', href: '#features-section' },
      { label: 'Menu Three', href: '#features-section' },
    ],
  },
  { label: 'Services', href: '#services-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Contact Us', href: '#contact-section' },
]

export const VIDEO_URL = 'https://www.youtube.com/watch?v=mwtbEGNABWU'

export const HERO = {
  headline: 'We are a group of financial specialists',
  subtext:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  ctaLabel: 'See our services',
  image: 'https://picsum.photos/seed/fiscale-1/560/400',
}

export type StepIcon = 'search' | 'chart' | 'rocket' | 'growth'

export interface Step {
  icon: StepIcon
  title: string
  text: string
}

export const STEPS: Step[] = [
  {
    icon: 'search',
    title: 'Easy to search',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'chart',
    title: 'Improve business insight',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'rocket',
    title: 'Fast as lightning',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'growth',
    title: 'Grow business',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export interface FeatureRow {
  number: string
  image: string
  title: string
  text: string
  reversed: boolean
}

export const FEATURE_ROWS: FeatureRow[] = [
  {
    number: '1',
    image: 'https://picsum.photos/seed/fiscale-2/560/420',
    title: 'How is your site performing?',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    reversed: false,
  },
  {
    number: '2',
    image: 'https://picsum.photos/seed/fiscale-3/560/420',
    title: 'Smart Site Conversion',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    reversed: true,
  },
  {
    number: '3',
    image: 'https://picsum.photos/seed/fiscale-4/560/420',
    title: 'Speed Site Increase Ranks',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    reversed: false,
  },
]

export interface Testimonial {
  image: string
  quote: string
  author: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    image: 'https://picsum.photos/seed/fiscale-5/100/100',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    author: 'Alice Campbell',
    role: 'Advertising Agency',
  },
  {
    image: 'https://picsum.photos/seed/fiscale-6/100/100',
    quote:
      'The team understood our goals from day one and delivered a roadmap that turned our numbers around within a single quarter.',
    author: 'Ben Smith',
    role: 'Advertising Agency',
  },
  {
    image: 'https://picsum.photos/seed/fiscale-7/100/100',
    quote:
      'Clear reporting, honest advice, and a genuine interest in our long-term growth rather than a quick invoice.',
    author: 'James Anderson',
    role: 'Advertising Agency',
  },
  {
    image: 'https://picsum.photos/seed/fiscale-8/100/100',
    quote:
      'They translated complex financial planning into decisions our whole leadership team could act on with confidence.',
    author: 'Maria Gonzales',
    role: 'Advertising Agency',
  },
]

export interface PricingPlan {
  name: string
  price: string
  emphasis: boolean
  description: string
  features: string[]
  buttonClass: 'primary' | 'secondary'
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$19.99',
    emphasis: false,
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    features: [
      'Vokalia and Consonantia',
      'Bookmarksgrove right at the coast',
      'Semantics a large language ocean',
    ],
    buttonClass: 'secondary',
  },
  {
    name: 'Standard',
    price: '$299.99',
    emphasis: true,
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    features: [
      'Vokalia and Consonantia',
      'Bookmarksgrove right at the coast',
      'Semantics a large language ocean',
    ],
    buttonClass: 'primary',
  },
  {
    name: 'Advanced',
    price: '$799.99',
    emphasis: false,
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    features: [
      'Vokalia and Consonantia',
      'Bookmarksgrove right at the coast',
      'Semantics a large language ocean',
    ],
    buttonClass: 'secondary',
  },
]

export const CTA = {
  heading: "Let's get to work",
  subtext:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  buttonLabel: 'Get started',
}

export const ADDRESS = '43 Raymouth Rd. Baltemoer, London 3910'

export const CONTACT_PHONES = ['+1 (123) 456-7890', '+1 (123) 456-7890']

export const CONTACT_EMAIL = 'info@mydomain.com'

export const ABOUT_EXCERPT =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.'

export const FOOTER_LINK_GROUPS = [
  { heading: 'Links', links: ['About us', 'Services', 'News', 'Careers', 'Contact'] },
  { heading: 'Company', links: ['About us', 'Services', 'News', 'Careers', 'Contact'] },
]

export type SocialKey = 'instagram' | 'twitter' | 'facebook' | 'linkedin' | 'pinterest' | 'dribbble'

export const SOCIALS: SocialKey[] = [
  'instagram',
  'twitter',
  'facebook',
  'linkedin',
  'pinterest',
  'dribbble',
]
