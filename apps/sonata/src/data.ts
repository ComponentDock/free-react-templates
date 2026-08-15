export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Pages', href: '#pages' },
  { label: 'Category', href: '#category' },
  { label: 'Playlist', href: '#playlist' },
  { label: 'Artist', href: '#artist' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export interface HeroSlide {
  headline: { text: string; accent?: boolean }[]
  paragraph: string
  image: string
}

export const heroSlides: HeroSlide[] = [
  {
    headline: [{ text: 'Music', accent: true }, { text: ' for everyone.' }],
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
    image: 'https://picsum.photos/seed/sonata-hero-1/700/700',
  },
  {
    headline: [{ text: 'Listen to', accent: true }, { text: ' new music.' }],
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
    image: 'https://picsum.photos/seed/sonata-hero-2/700/700',
  },
]

export interface HowStep {
  icon: 'user' | 'plan' | 'download'
  title: string
  text: string
}

export const howSteps: HowStep[] = [
  {
    icon: 'user',
    title: 'Create an account',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: 'plan',
    title: 'Choose a plan',
    text: 'Donec in sodales dui, a blandit nunc. Pellentesque id eros venenatis, sollicitudin neque sodales, vehicula nibh.',
  },
  {
    icon: 'download',
    title: 'Download Music',
    text: 'Pellentesque id eros venenatis, sollicitudin neque sodales, vehicula nibh. Nam massa odio, porttitor vitae efficitur non.',
  },
]

export interface ConceptItem {
  label: string
  image: string
}

export const conceptItems: ConceptItem[] = [
  { label: 'Soul Music', image: 'https://picsum.photos/seed/sonata-concept-1/600/600' },
  { label: 'Live Concerts', image: 'https://picsum.photos/seed/sonata-concept-2/600/600' },
  { label: 'Dj Sets', image: 'https://picsum.photos/seed/sonata-concept-3/600/600' },
  { label: 'Live Streams', image: 'https://picsum.photos/seed/sonata-concept-4/600/600' },
]

export const perks: string[] = [
  'Play any track',
  'Listen offline',
  'No ad interruptions',
  'Unlimited skips',
  'High quality audio',
  'Shuffle play',
]

export interface PremiumFeature {
  title: string
  caption: string
  image: string
}

export const premiumFeatures: PremiumFeature[] = [
  {
    title: 'No ad interruptions',
    caption: 'Consectetur adipiscing elit',
    image: 'https://picsum.photos/seed/sonata-premium-1/400/400',
  },
  {
    title: 'High Quality',
    caption: 'Ectetur adipiscing elit',
    image: 'https://picsum.photos/seed/sonata-premium-2/400/400',
  },
  {
    title: 'Listen Offline',
    caption: 'Sed do eiusmod tempor',
    image: 'https://picsum.photos/seed/sonata-premium-3/400/400',
  },
  {
    title: 'Download Music',
    caption: 'Adipiscing elit',
    image: 'https://picsum.photos/seed/sonata-premium-4/400/400',
  },
]

export interface FooterWidget {
  title: string
  links: { label: string; href: string }[]
}

export const footerWidgets: FooterWidget[] = [
  {
    title: 'About us',
    links: [
      { label: 'Our Story', href: '#' },
      { label: 'Sol Music Blog', href: '#' },
      { label: 'History', href: '#' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Music', href: '#' },
      { label: 'Subscription', href: '#' },
      { label: 'Custom Music', href: '#' },
      { label: 'Footage', href: '#' },
    ],
  },
  {
    title: 'Playlists',
    links: [
      { label: 'Newsletter', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]

export type SocialIcon = 'instagram' | 'pinterest' | 'facebook' | 'twitter' | 'youtube'

export const socials: SocialIcon[] = ['instagram', 'pinterest', 'facebook', 'twitter', 'youtube']
