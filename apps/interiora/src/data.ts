// Interiora — page content model. Brand palette: orange #e67118 (buttons,
// counters, stars, link hovers, footer input border, back-to-top), ink
// #2a2a2a (headings, nav links, dark pills), body #545454, subtext #656565,
// night #1a1a1a CTA band, peach #f1c4a3 testimonial band, harvest #ffcc00
// stars, foottext #5e5e5e footer text. Font: Jost (headings + body).

export const BRAND = 'Interiora'

export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'What We Do?', href: '#about' },
  {
    label: 'Projects',
    href: '#services',
    children: [
      { label: 'Residential', href: '#services' },
      { label: 'Commercial', href: '#services' },
      { label: 'Hospitality', href: '#services' },
    ],
  },
  { label: 'Blog', href: '#story' },
  { label: 'Contact Us', href: '#contact' },
]

export const HERO_SLIDES = [
  {
    image: 'https://picsum.photos/seed/interiora-1/1920/850',
    headline: 'My home is almost put together, but I could really use a new rug.',
    underline: 'almost put together,',
    subtext:
      'Thoughtful interiors designed around the way you actually live — warm, layered, and personal.',
  },
  {
    image: 'https://picsum.photos/seed/interiora-2/1920/850',
    headline: 'Spaces that feel collected over time, not decorated overnight.',
    underline: 'feel collected over time,',
    subtext: 'Every room tells a story — we help you write yours with pieces that last.',
  },
  {
    image: 'https://picsum.photos/seed/interiora-3/1920/850',
    headline: 'Good design is a quiet luxury that pays off every single day.',
    underline: 'a quiet luxury',
    subtext: 'From layout to lighting, we balance beauty with the way a home really works.',
  },
]

export const STATS = {
  eyebrow: 'About Studio',
  heading: 'We work side by side with you to create exceptional spaces.',
  text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  ctaLabel: 'More About Us',
  counters: [
    { value: '450+', label: 'Successfully completed projects' },
    { value: '860+', label: 'Highly specialised employees' },
  ],
}

export const ABOUT_SPLIT = {
  eyebrow: 'Our Process',
  heading: 'Design the home you love',
  text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
  ctaLabel: 'Learn More',
  image: 'https://picsum.photos/seed/interiora-4/640/520',
}

export const QUOTE_BAND = {
  quote:
    'Interiora managed everything from furniture selection, purchase, delivery and assembly, and have been a pleasure working with.',
  attribution: '– Shonda Leer, Chief of Staff at Meridian Homes',
  logos: ['Atelier', 'Bauform', 'Craftline', 'Decorum', 'Elysian'],
}

export const PROFILE = {
  eyebrow: 'Studio Profile',
  heading: 'Personalized design solutions',
  subtext: 'Designed by Interiora',
  text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  facts: [
    { label: 'Budget', value: '$5,000' },
    { label: 'Styles', value: 'Glam, Bohemian' },
  ],
  ctaLabel: 'View Gallery',
}

export interface Service {
  icon: 'home' | 'party' | 'office'
  title: string
  text: string
}

export const SERVICES: Service[] = [
  {
    icon: 'home',
    title: 'Home Interior',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'party',
    title: 'Party Interior',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'office',
    title: 'Office Interior',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export interface Testimonial {
  quote: string
  author: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'What a great experience! The team listened to everything we wanted and the result exceeded our expectations.',
    author: 'Barb Ackue',
  },
  {
    quote:
      'I would recommend this design service to anyone — punctual, tidy, and genuinely creative from first sketch to final install.',
    author: 'Marcus Chen',
  },
  {
    quote:
      'This design service turned our dated apartment into a calm, beautiful home. We could not be happier with the outcome.',
    author: 'Elena Rossi',
  },
]

export const VENDORS_BAND = {
  eyebrow: 'Our Network',
  heading: 'We work with more than 200 vendors, big and small.',
  text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
  ctaLabel: "Let's Discuss",
  videoUrl: 'https://www.youtube.com/watch?v=up68UAfH0d0',
  videoLabel: 'Watch our studio film',
}

export const CTA_BAND = {
  heading: 'Any help needed?',
  text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  ctaLabel: 'Contact Us',
}

export const FOOTER = {
  about:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove at the coast of the Semantics.',
  navigation: ['Home', 'About', 'Services', 'Blog', 'Contact'],
  services: ['Home Design', 'Office Design', 'Commercial', 'Consultation'],
}

export type SocialKey = 'facebook' | 'instagram' | 'linkedin' | 'youtube'

export const SOCIALS: SocialKey[] = ['facebook', 'instagram', 'linkedin', 'youtube']
