/* Focus — dark, cinematic photography & film studio landing page.
   Brand palette: taupe #9d8f8f (eyebrows, links, active nav dots,
   progress fills, form button), charcoal #191a1c page background,
   #202224 dark panels, #9da1a5 muted text; Noto Sans body +
   Noto Serif italic quotes. */

export const BRAND = 'Focus'

export type SocialKey = 'facebook' | 'twitter' | 'instagram'

export interface NavItem {
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#work' },
  { label: 'Testimony', href: '#testimonial' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO = {
  brandLine: 'FOCUS',
  brandSubtitle: 'Photographer / San Francisco',
  headlineTop: 'We Make',
  headlineBottom: 'Something Great',
  blurb:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.',
  photo: 'https://picsum.photos/id/823/1920/1080',
} as const

export const ABOUT = {
  heading: 'Focus is A Creative Direction, Photography Agency',
  paragraph:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  counterTarget: 120,
  counterLabel: 'Project complete',
  quote:
    '"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.."',
  quoteByline: '— Lucy Lee',
  videoImage: 'https://picsum.photos/id/64/800/1000',
  smallImages: ['https://picsum.photos/id/1027/400/300', 'https://picsum.photos/id/996/400/300'],
} as const

export type ServiceIcon = 'clapperboard' | 'music' | 'film'

export interface Service {
  title: string
  blurb: string
  icon: ServiceIcon
}

export const SERVICES: Service[] = [
  {
    title: 'Movies & Advertising Videos',
    icon: 'clapperboard',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences.',
  },
  {
    title: 'Clip & Music Videos',
    icon: 'music',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences.',
  },
  {
    title: 'Short Film Productions',
    icon: 'film',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences.',
  },
] as const

export interface Skill {
  label: string
  value: number
}

export const SKILLS: Skill[] = [
  { label: 'Creation', value: 90 },
  { label: 'Development', value: 80 },
  { label: 'Production', value: 75 },
] as const

export const SERVICES_CLOSING =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.'

export const GALLERY = {
  caption: 'Nature Beautiful Work',
  photos: [
    'https://picsum.photos/seed/focus-1/600/600',
    'https://picsum.photos/seed/focus-2/600/600',
    'https://picsum.photos/seed/focus-3/600/600',
    'https://picsum.photos/seed/focus-4/600/600',
    'https://picsum.photos/seed/focus-5/600/600',
    'https://picsum.photos/seed/focus-6/600/600',
    'https://picsum.photos/seed/focus-7/600/600',
    'https://picsum.photos/seed/focus-8/600/600',
    'https://picsum.photos/seed/focus-9/600/600',
    'https://picsum.photos/seed/focus-10/600/600',
    'https://picsum.photos/seed/focus-11/600/600',
    'https://picsum.photos/seed/focus-12/600/600',
  ],
} as const

export interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Garreth Smith',
    role: 'CEO Founder of Commercial Building',
    avatar: 'https://picsum.photos/seed/focus-t1/96/96',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Garreth Smith',
    role: 'CEO Founder of Interior Design',
    avatar: 'https://picsum.photos/seed/focus-t2/96/96',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Garreth Smith',
    role: 'Exterior Designer',
    avatar: 'https://picsum.photos/seed/focus-t3/96/96',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Garreth Smith',
    role: 'Landscape Designer',
    avatar: 'https://picsum.photos/seed/focus-t4/96/96',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Garreth Smith',
    role: 'System Analyst',
    avatar: 'https://picsum.photos/seed/focus-t5/96/96',
  },
] as const

export interface ContactBox {
  label: string
  value: string
  icon: 'map' | 'phone' | 'mail' | 'globe'
}

export const CONTACT_BOXES: ContactBox[] = [
  { label: 'Address', value: '198 West 21th Street, Suite 721 New York NY 10016', icon: 'map' },
  { label: 'Contact Number', value: '+ 1235 2355 98', icon: 'phone' },
  { label: 'Email Address', value: 'info@yoursite.com', icon: 'mail' },
  { label: 'Website', value: 'yoursite.com', icon: 'globe' },
] as const

export const FOOTER = {
  siteName: 'Component Dock',
  siteUrl: 'https://www.componentdock.com/',
} as const
