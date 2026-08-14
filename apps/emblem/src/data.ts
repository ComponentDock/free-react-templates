import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  Clock,
  Code,
  DraftingCompass,
  Gift,
  Layers,
  PenTool,
  Smile,
  Smartphone,
  Users,
  Wrench,
} from 'lucide-react'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Services', href: '#features' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const quickContact = {
  address: '34 Street Name, City Name Here, United States',
  hours: 'Sunday - Friday 8:00AM - 4:00PM / Saturday CLOSED',
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: Wrench,
    title: 'Creative Strategy',
    description: 'We shape bold ideas into campaigns that move markets and grow brands.',
  },
  {
    icon: Layers,
    title: 'Web Development',
    description: 'Fast, accessible websites engineered with modern tooling and care.',
  },
  {
    icon: PenTool,
    title: 'Design Studio',
    description: 'Interfaces and identities crafted pixel by pixel for lasting impact.',
  },
]

export interface Skill {
  label: string
  width: number
}

export const skills: Skill[] = [
  { label: 'Writing', width: 55 },
  { label: 'WordPress', width: 85 },
  { label: 'Bootstrap', width: 93 },
  { label: 'jQuery', width: 83 },
]

export interface Counter {
  icon: LucideIcon
  value: string
  caption: string
}

export const counters: Counter[] = [
  { icon: Building2, value: '14k', caption: 'number of firms' },
  { icon: Users, value: '2k', caption: 'in house crews' },
  { icon: Code, value: '3920k', caption: 'line of codes' },
]

export interface NewsItem {
  title: string
  category: string
  excerpt: string
  image: string
}

export const newsItems: NewsItem[] = [
  {
    title: 'Designing for the Future of Work',
    category: 'Web Development',
    excerpt: 'How flexible digital tools reshape the modern workplace.',
    image: 'https://picsum.photos/seed/emblem-news-1/800/500',
  },
  {
    title: 'The Anatomy of a Memorable Brand',
    category: 'Branding',
    excerpt: 'What makes some identities stick while others fade away.',
    image: 'https://picsum.photos/seed/emblem-news-2/800/500',
  },
  {
    title: 'Shipping Quality Software at Speed',
    category: 'Engineering',
    excerpt: 'A practical look at release pipelines that stay reliable.',
    image: 'https://picsum.photos/seed/emblem-news-3/800/500',
  },
  {
    title: 'Strategy Meets Storytelling',
    category: 'Marketing',
    excerpt: 'Turning data into narratives that win attention and trust.',
    image: 'https://picsum.photos/seed/emblem-news-4/800/500',
  },
]

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: Wrench,
    title: 'Custom Builds',
    description: 'Tailored platforms engineered around your exact needs.',
  },
  {
    icon: Clock,
    title: 'Always On Time',
    description: 'Reliable delivery with clear milestones from kickoff.',
  },
  {
    icon: DraftingCompass,
    title: 'UX Architecture',
    description: 'Research-backed journeys that feel effortless to use.',
  },
  {
    icon: Smile,
    title: 'Friendly Support',
    description: 'A partner team that answers fast and owns the outcome.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Experiences that shine on every screen size.',
  },
  {
    icon: Gift,
    title: 'Launch Ready',
    description: 'We handle the details so your go-live is a celebration.',
  },
]

export interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Mike Fisher',
    role: 'CEO, Brightpath',
    quote: 'Emblem rebuilt our platform from the ground up and the difference is night and day.',
    avatar: 'https://picsum.photos/id/1027/100/100',
  },
  {
    name: 'Jean Stanley',
    role: 'Product Lead, Nordwind',
    quote: 'A rare team that pairs sharp strategy with beautiful, fast execution.',
    avatar: 'https://picsum.photos/id/64/100/100',
  },
  {
    name: 'Katie Rose',
    role: 'Founder, Kindred',
    quote: 'From first call to launch they were responsive, honest and truly invested.',
    avatar: 'https://picsum.photos/id/823/100/100',
  },
]

export interface BlogPost {
  title: string
  meta: string
  excerpt: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Five Habits of High-Performing Teams',
    meta: 'July 17, 2026 · by Admin',
    excerpt:
      'Small rituals compound into outsized results. Here is what we see in the teams that win.',
    image: 'https://picsum.photos/seed/emblem-blog-1/800/500',
  },
  {
    title: 'How to Brief a Creative Agency',
    meta: 'July 02, 2026 · by Admin',
    excerpt: 'A good brief is half the work. A practical guide to getting what you ask for.',
    image: 'https://picsum.photos/seed/emblem-blog-2/800/500',
  },
  {
    title: 'The Quiet Power of Typography',
    meta: 'June 18, 2026 · by Admin',
    excerpt: 'Type sets the tone before a single word is read. Choose it with intention.',
    image: 'https://picsum.photos/seed/emblem-blog-3/800/500',
  },
]

export const footerNav: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Privacy', href: '#privacy' },
    ],
  },
  {
    title: 'Navigate',
    links: [
      { label: 'Services', href: '#features' },
      { label: 'Projects', href: '#projects' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
]

export const heroCopy = {
  heading: 'Digital Agency with Excellent Services.',
  paragraph:
    'We design and build digital products, brands and experiences that help ambitious companies stand out and scale.',
}

/** Hero backdrop (office/team scene) and the framed laptop art. The laptop
 *  photo uses a deterministic picsum ID verified to show a laptop on a desk
 *  (subject-critical slot per the reference's img_2). */
export const heroImage = 'https://picsum.photos/seed/emblem-hero/1600/900'
export const heroLaptopImage = 'https://picsum.photos/id/0/800/600'

/** Photo backdrops for the two CTA bands and the More Services grid. */
export const ctaBackdrop = 'https://picsum.photos/seed/emblem-cta-1/1600/700'
export const servicesBackdrop = 'https://picsum.photos/seed/emblem-services/1600/700'

export const featureSectionCopy = {
  kicker: 'Features',
  heading: 'A creative digital agency with excellent services',
  cta: 'View All Services',
}

export const ctaBandCopy = {
  lead: 'Suscipit libero voluptate',
  heading: 'Get ready to start your exciting journey. Our agency is here to help.',
}

export const qualityCtaCopy = {
  heading: 'Quality Services',
  lead: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  cta: 'Contact Us Now',
}
