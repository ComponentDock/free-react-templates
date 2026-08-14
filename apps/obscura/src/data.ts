export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About the Artist', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export const heroSlides = [
  {
    script: 'Fusce erat dui, venenatis et erat in, vulputate dignissim lacus.',
    heading: 'Showcase your work',
    image: 'https://picsum.photos/seed/obscura-hero-1/1600/919',
  },
  {
    script: 'Fusce erat dui, venenatis et erat in, vulputate dignissim lacus.',
    heading: 'Creative natural short',
    image: 'https://picsum.photos/seed/obscura-hero-2/1600/919',
  },
] as const

export interface AboutSectionData {
  heading: string
  text: string
  image: string
  /** true when the section's photo is light enough for dark ink text */
  light: boolean
  id: string
}

export const aboutSections: AboutSectionData[] = [
  {
    heading: 'Artistic Portraits',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
    image: 'https://picsum.photos/seed/obscura-about-1/1600/900',
    light: false,
    id: 'about',
  },
  {
    heading: 'Artistic Portraits',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
    image: 'https://picsum.photos/seed/obscura-about-2/1600/900',
    light: true,
    id: 'portfolio',
  },
  {
    heading: 'Artistic Portraits',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
    image: 'https://picsum.photos/seed/obscura-about-3/1600/900',
    light: false,
    id: 'news',
  },
] as const

export const ctaBand = {
  heading: 'Need a photographer? Get in touch',
  image: 'https://picsum.photos/seed/obscura-cta/1600/500',
} as const

export const contactWidget = {
  label: 'Contact me',
  avatar: 'https://picsum.photos/seed/obscura-avatar/142/142',
} as const

export const footerData = {
  image: 'https://picsum.photos/seed/obscura-footer/1600/700',
  aboutText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
  discoverTitle: 'Discover',
  discoverLinks: [
    { label: 'About the Artist', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#contact' },
  ] as const,
  talkTitle: 'Talk to us',
  phone: '+34 5667 4332 244',
  emails: ['Contact@sportify25.com', 'office@sportify25.com'] as const,
  locationTitle: 'Location',
  locationLines: ['MAin str. 25', '458811 CA.'] as const,
  copyright: '© 2026 Obscura. All rights reserved.',
  creditPrefix: 'Made with',
  creditLabel: 'Component Dock',
  creditHref: 'https://www.componentdock.com/',
} as const

export const readMoreLabel = 'Read More'
