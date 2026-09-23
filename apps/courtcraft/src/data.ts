/** Courtcraft — law firm template data. */

import type { LucideIcon } from 'lucide-react'
import { Scale, Building2, Shield, HeartPulse, Stethoscope, Gavel } from 'lucide-react'

const img = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

export const BRAND = 'Courtcraft'

export type NavLink = { label: string; href: string; submenu?: readonly string[] }

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Practice Areas', href: '#services' },
  { label: 'Won Cases', href: '#stats' },
  { label: 'Blog', href: '#blog', submenu: ['Blog Post', 'Blog Details'] },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export type HeroSlide = {
  image: string
  title: string
  subtitle: string
}

export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    image: img('courtcraft-hero-1', 1920, 1080),
    title: 'Defend Your Constitutional Right with Legal Help',
    subtitle: 'Your Trusted Law Firm Since 1998',
  },
  {
    image: img('courtcraft-hero-2', 1920, 1080),
    title: 'Expert Legal Counsel for Complex Cases',
    subtitle: 'Over 20 Years of Proven Experience',
  },
  {
    image: img('courtcraft-hero-3', 1920, 1080),
    title: 'Justice, Integrity and Professionalism',
    subtitle: 'Fighting for Your Rights Every Step',
  },
]

export type Stat = {
  icon: LucideIcon
  value: number
  label: string
}

export const STATS: readonly Stat[] = [
  { icon: Scale, value: 2893, label: 'Lawyer' },
  { icon: Building2, value: 291, label: 'Clients' },
  { icon: Shield, value: 952, label: 'Successful Case' },
  { icon: HeartPulse, value: 1921, label: 'Honor & Awards' },
]

export const COUNTER_BG = img('courtcraft-counter', 1920, 900)

export type Service = {
  icon: LucideIcon
  title: string
  description: string
}

export const SERVICES: readonly Service[] = [
  {
    icon: Building2,
    title: 'Real Estate Law',
    description:
      'Our experienced attorneys navigate the complexities of property transactions, lease agreements, and real estate disputes with precision and care.',
  },
  {
    icon: Shield,
    title: 'Insurance Law',
    description:
      'We help clients understand their policies, file claims, and fight for fair compensation when insurers fail to deliver on their promises.',
  },
  {
    icon: Scale,
    title: 'Business Law',
    description:
      'From formation to mergers, we provide comprehensive legal guidance for businesses of all sizes to thrive in a competitive market.',
  },
  {
    icon: HeartPulse,
    title: 'Personal Injury',
    description:
      'Dedicated to securing maximum compensation for victims of negligence, medical malpractice, and workplace accidents.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Negligence',
    description:
      'Holding healthcare providers accountable when substandard care causes harm, so you receive the justice you deserve.',
  },
  {
    icon: Gavel,
    title: 'Criminal Defense',
    description:
      'Aggressive, strategic defense for individuals facing criminal charges — protecting your rights and your future.',
  },
]

export const CTA_BG = img('courtcraft-cta', 1920, 900)

export const CTA_HEADING = 'We Give You Only The Best Legal Services'
export const CTA_TEXT =
  'Our team of dedicated attorneys brings decades of combined experience to every case. We listen, we strategize, and we fight for the outcome you need.'

export type Testimonial = {
  name: string
  role: string
  avatar: string
  quote: string
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Business Client',
    avatar: img('courtcraft-test-1', 80, 80),
    quote:
      'Courtcraft handled our corporate restructuring with exceptional skill. Their attention to detail saved us from significant liability.',
  },
  {
    name: 'James Carter',
    role: 'Personal Injury Client',
    avatar: img('courtcraft-test-2', 80, 80),
    quote:
      'After my accident, I felt lost. The Courtcraft team guided me through every step and secured a settlement far above my expectations.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Family Law Client',
    avatar: img('courtcraft-test-3', 80, 80),
    quote:
      'Compassionate, professional, and relentless. Courtcraft treated my custody case with the care and urgency it deserved.',
  },
]

export const CONTACT_BG = img('courtcraft-contact', 960, 900)

export const BLOG_HEADING = 'Recent Post'
export const BLOG_SUBTITLE =
  'Stay informed with the latest legal insights, case studies, and industry updates from our team of expert attorneys.'

export type BlogPost = {
  image: string
  title: string
  date: string
  comments: number
  description: string
}

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    image: img('courtcraft-blog-1', 400, 300),
    title: 'Understanding Your Rights in Property Disputes',
    date: 'September 15, 2026',
    comments: 12,
    description:
      'A comprehensive guide to navigating property disputes, from boundary issues to title defects, and how legal counsel can protect your investment.',
  },
  {
    image: img('courtcraft-blog-2', 400, 300),
    title: 'How Business Law Protects Your Startup',
    date: 'September 10, 2026',
    comments: 8,
    description:
      'From incorporation to intellectual property, learn why every startup needs a solid legal foundation to avoid costly mistakes.',
  },
  {
    image: img('courtcraft-blog-3', 400, 300),
    title: 'Criminal Defense: What to Do When Arrested',
    date: 'September 5, 2026',
    comments: 15,
    description:
      'Know your rights from the moment of arrest. This article covers the critical steps to protect yourself and secure proper legal representation.',
  },
]

export type Attorney = {
  name: string
  role: string
  image: string
}

export const ATTORNEYS: readonly Attorney[] = [
  {
    name: 'Robert Harrison',
    role: 'Senior Partner',
    image: img('courtcraft-atty-1', 400, 500),
  },
  {
    name: 'Victoria Chen',
    role: 'Managing Attorney',
    image: img('courtcraft-atty-2', 400, 500),
  },
  {
    name: 'Michael Brooks',
    role: 'Lead Litigator',
    image: img('courtcraft-atty-3', 400, 500),
  },
]

export const INTRO_COLUMNS = [
  {
    heading: 'Need Legal Services?',
    text: 'We provide professional legal services for individuals and businesses. Our team is ready to help you with any legal matter.',
  },
  {
    heading: 'Call Us Now',
    text: '+1 (800) 555-0199',
    link: 'mailto:info@courtcraft.com',
    linkText: 'info@courtcraft.com',
  },
  {
    heading: 'Need Legal Services?',
    button: 'Consultation',
    buttonHref: '#contact',
  },
] as const

export const FOOTER_COPY =
  'Providing expert legal representation since 1998. Our commitment to justice and client success drives everything we do.'

export const FOOTER_NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const FOOTER_CONTACT = {
  address: '1200 Justice Avenue, Suite 500',
  phone: '+1 (800) 555-0199',
  email: 'info@courtcraft.com',
} as const

export const FOOTER_HOURS = [
  { days: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
  { days: 'Saturday', hours: '10:00 AM – 2:00 PM' },
  { days: 'Sunday', hours: 'Closed' },
] as const
