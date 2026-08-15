import {
  Headphones,
  Mail,
  MapPin,
  Palette,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const heroPortrait = 'https://picsum.photos/id/1027/900/1100'

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: Server,
    title: 'Reliable Infrastructure',
    description:
      'Hosted on a rock-solid stack that stays up when your visitors arrive — no surprises, no downtime.',
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    description:
      'Pages that load in the blink of an eye keep prospects engaged and search rankings healthy.',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description:
      'Clean layouts and tasteful typography that make your business look polished from the first click.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    description:
      'Every site ships with modern security practices baked in, so you can focus on your work.',
  },
  {
    icon: Rocket,
    title: 'Easy Setup',
    description:
      'Pick a layout, drop in your content, and publish — no puzzling frameworks to wrestle with.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Real help whenever you need it, from launch day to every update after.',
  },
]

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '240+', label: 'Projects Completed' },
  { value: '180', label: 'Happy Clients' },
  { value: '32', label: 'Team Members' },
  { value: '12', label: 'Years of Experience' },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Slate gave us a site that finally matches the quality of our work. The whole launch took a weekend.',
    name: 'Allie Smith',
    role: 'Founder, Northwind Studio',
  },
  {
    quote:
      'We switched from an old framework site and instantly noticed the difference in speed and clarity.',
    name: 'Harper Quinn',
    role: 'Marketing Lead, Bluepeak Co.',
  },
  {
    quote:
      'The team at Slate made a complex redesign feel effortless. Our customers keep complimenting the new look.',
    name: 'Amelia Stone',
    role: 'Director, Oak & Elm',
  },
]

export interface ContactDetail {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

export const contactDetails: ContactDetail[] = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@slate.example',
    href: 'mailto:hello@slate.example',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (555) 123-4567',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '410 Market Street, Portland, OR',
  },
]
