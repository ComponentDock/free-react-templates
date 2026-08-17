/* Barrister — law firm & attorney landing template. Single-page recreation:
   navbar → hero → promise intro → about me → why us icons → gallery →
   why choose us → list of services → footer.
   Brand palette: gold #d79100 (primary) / #dda226 (hover) / #db9c1a
   (border hover) / #dfa733 (active), dark slate #242f3a (hero overlay,
   icon labels), ink #212529 text, muted #6c757d, light #f8f9fa section
   backgrounds, border #e9ecef, light gold #ebc880 accent. Playfair
   Display headings + Raleway body type. */

export const BRAND = 'Barrister'

export interface NavLink {
  label: string
  href: string
  active?: boolean
  children?: NavChild[]
}

interface NavChild {
  label: string
  href: string
  children?: NavChild[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home-section', active: true },
  {
    label: 'Attorneys',
    href: '#home-section',
    children: [
      { label: 'Menu One', href: '#home-section' },
      { label: 'Menu Two', href: '#home-section' },
      {
        label: 'Dropdown',
        href: '#home-section',
        children: [
          { label: 'Sub Menu One', href: '#home-section' },
          { label: 'Sub Menu Two', href: '#home-section' },
          { label: 'Sub Menu Three', href: '#home-section' },
        ],
      },
    ],
  },
  { label: 'Our Services', href: '#services-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Contact Us', href: '#contact-section' },
]

export const HERO = {
  kicker: 'Welcome to our site',
  headline: 'Need a legal help? We are effective law agency.',
  button: 'Practice Area',
  photo: 'https://picsum.photos/seed/barrister-library/1920/1080',
}

export const INTRO = {
  heading: 'My promise to every client is to work tirelessly to obtain a just result.',
  paragraphs: [
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
  ],
  signature: 'Jeynne M. Campbell',
}

export const ABOUT = {
  kicker: 'About me',
  heading: 'Jeynne M. Campbell',
  paragraph:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  photo: 'https://picsum.photos/seed/barrister-arch/800/1000',
}

export type CourtIcon = 'gavel' | 'landmark' | 'shield' | 'badge'

export const WHY_US = {
  kicker: 'Why Us',
  heading: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  intro:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
  items: [
    { label: 'Court Mace', icon: 'gavel' },
    { label: 'Court Building', icon: 'landmark' },
    { label: 'Crime', icon: 'shield' },
    { label: 'Authority Badge', icon: 'badge' },
  ],
} satisfies { kicker: string; heading: string; intro: string; items: { label: string; icon: CourtIcon }[] }

export const GALLERY = [
  'https://picsum.photos/seed/barrister-gallery-x/800/600',
  'https://picsum.photos/seed/barrister-gallery-z/800/600',
  'https://picsum.photos/seed/barrister-gallery-c/800/600',
  'https://picsum.photos/seed/barrister-gallery-w/800/600',
]

export const WHY_CHOOSE = {
  heading: 'Why Choose Us',
  photo: 'https://picsum.photos/seed/barrister-gallery-y/800/700',
  items: [
    {
      number: '01',
      title: 'Effective',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    },
    {
      number: '02',
      title: '99% Cases wins',
      text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      number: '03',
      title: 'Expert Lawyers',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
  ],
}

export const SERVICES = {
  heading: 'List Of Services',
  paragraphs: [
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  ],
  photo: 'https://picsum.photos/seed/barrister-hall/800/700',
  items: [
    'Family law consultations',
    'Corporate litigation',
    'Criminal defense',
    'Estate planning',
    'Real estate transactions',
    'Employment disputes',
    'Intellectual property',
    'Personal injury claims',
    'Contract drafting',
    'Tax advisory',
    'Immigration counsel',
    'Mediation services',
    'Bankruptcy filings',
    'Notary services',
  ],
}

export const FOOTER_ABOUT =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export const FOOTER_NAV_LEFT = [
  { label: 'Overview', href: '#home-section' },
  { label: 'About Us', href: '#about-section' },
  { label: 'Clients', href: '#services-section' },
  { label: 'Find Us', href: '#contact-section' },
  { label: 'Webinars', href: '#services-section' },
  { label: 'Privacy Policy', href: '#contact-section' },
]

export const FOOTER_NAV_RIGHT = [
  { label: 'Overview', href: '#home-section' },
  { label: 'About Us', href: '#about-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'Portfolio', href: '#gallery-section' },
  { label: 'Gallery', href: '#gallery-section' },
  { label: 'Contact Us', href: '#contact-section' },
]

export const SOCIALS: { key: SocialKey; label: string }[] = [
  { key: 'facebook', label: 'Facebook' },
  { key: 'twitter', label: 'Twitter' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'google', label: 'Google' },
  { key: 'play', label: 'Play' },
]

export type SocialKey = 'facebook' | 'twitter' | 'linkedin' | 'google' | 'play'

export const RECENT_POSTS = [
  { date: 'May 3, 2020', title: 'There live the Blind Texts' },
  { date: 'May 3, 2020', title: 'A Small River Named Duden' },
  { date: 'May 3, 2020', title: 'The Far World of Grammar' },
  { date: 'May 3, 2020', title: 'Separated they live in Bookmarksgrove' },
]