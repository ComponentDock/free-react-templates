/* Gantry content data — the single-page construction/engineering company
   content (contacts, nav, hero slides, services, why-choose features,
   quote form, projects, testimonials, blog cards, footer widgets). Text is
   paraphrased but keeps the same kinds of content. */

export const BRAND = 'Gantry'

export const CONTACTS = [
  {
    icon: 'MapPin',
    caption: 'San Francisco',
    sub: 'Mountain View, Fake st., CA',
  },
  {
    icon: 'Phone',
    caption: '000 209 392 312',
    sub: 'Toll free',
  },
  {
    icon: 'Mail',
    caption: 'info@gmail.com',
    sub: 'Send us an email',
  },
] as const

export const NAV_LINKS = [
  'Home',
  'About Us',
  'Our Projects',
  'Testimonials',
  'Blog',
  'Contact',
] as const

export interface HeroSlide {
  image: string
  headline: string
  highlight: string
  paragraph: string
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: '1076',
    headline: 'We Are Leading Industry of Engineers',
    highlight: 'Leading',
    paragraph:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: '297',
    headline: 'Experts and High Quality Works',
    highlight: 'Experts',
    paragraph:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export interface Service {
  number: string
  icon: 'HardHat' | 'Compass' | 'DraftingCompass' | 'Clipboard'
  heading: string
  text: string
}

export const SERVICES: Service[] = [
  {
    number: '01',
    icon: 'HardHat',
    heading: 'Professional Team',
    text: 'Our licensed engineers and site crews handle every project with certified expertise.',
  },
  {
    number: '02',
    icon: 'Compass',
    heading: 'Great Ideas',
    text: 'We plan each build from first sketch to final inspection, so nothing is left to chance.',
  },
  {
    number: '03',
    icon: 'DraftingCompass',
    heading: 'Quality Building',
    text: 'Premium materials and precision workmanship keep every structure safe and long-lasting.',
  },
  {
    number: '04',
    icon: 'Clipboard',
    heading: 'Quality Works',
    text: 'From foundations to finishing, we deliver works that stand the test of time.',
  },
]

export interface Feature {
  icon: 'Building2' | 'PenTool' | 'Compass'
  heading: string
  text: string
}

export const WHY_CHOOSE_FEATURES: Feature[] = [
  {
    icon: 'Building2',
    heading: 'Expert in Buildings',
    text: 'Decades of hands-on experience across residential, commercial and industrial builds.',
  },
  {
    icon: 'PenTool',
    heading: 'Modern Design',
    text: 'Forward-thinking architecture that blends clean lines with practical engineering.',
  },
  {
    icon: 'Compass',
    heading: 'Leading In Floor Planning',
    text: 'Smart space layouts that make every square foot work harder for you.',
  },
]

export const QUOTE_FORM_FIELDS = [
  { name: 'name', label: 'Your name', type: 'text', required: true },
  { name: 'phone', label: 'Phone number', type: 'tel', required: false },
  { name: 'email', label: 'Your email', type: 'email', required: true },
  { name: 'subject', label: 'Subject', type: 'text', required: false },
] as const

export interface Project {
  image: string
  category: string
  title: string
}

export const PROJECTS: Project[] = [
  { image: '297', category: 'Factory', title: 'Building Refinery' },
  { image: '1076', category: 'Warehouse', title: 'Steel Frame Assembly' },
  { image: '1081', category: 'Bridge', title: 'River Crossing Viaduct' },
  { image: '49', category: 'Industrial', title: 'Processing Plant Upgrade' },
]

export interface Testimonial {
  seed: string
  quote: string
  client: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    seed: 'gantry-person-1',
    quote:
      'The crew delivered our factory expansion ahead of schedule and stayed on budget the whole way.',
    client: 'Matt Keygen',
  },
  {
    seed: 'gantry-person-2',
    quote:
      'Clear communication, clean sites and quality work — we would hire them again without hesitation.',
    client: 'Elena Woods',
  },
]

export interface BlogPost {
  image: string
  title: string
  meta: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    image: '49',
    title: 'Top Companies That Are Best In Industrial Business',
    meta: 'Posted by Admin In News',
  },
  {
    image: '1076',
    title: 'How Modern Engineering Shapes City Skylines',
    meta: 'Posted by Admin In News',
  },
  {
    image: '297',
    title: 'Safety First: New Standards On Construction Sites',
    meta: 'Posted by Admin In News',
  },
]

export const FOOTER_COMPANY_LINKS = [
  'About',
  'News',
  'Services',
  'Our Team',
  'Careers',
  'Projects',
] as const

export const FOOTER_SERVICE_LINKS = ['Industrial', 'Construction', 'Remodeling'] as const

export const FOOTER_CONTACT_LINKS = [
  'Help Center',
  'Support Community',
  'Press',
  'FAQ',
  'Our Partners',
] as const

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'
