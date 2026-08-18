// Central content + image constants for the Netora landing page.
// Images are deterministic picsum placeholders (no copied assets).
// Hero images are requested taller than their box so `object-cover`
// crops the source's letterbox bars.

import { Building2, Plane, Server, ShoppingCart, type LucideIcon } from 'lucide-react'

const heroBase = 'https://picsum.photos/id/201/1920/1400'
const heroAlt = 'https://picsum.photos/id/119/1920/1400'

export const heroSlides = [
  {
    image: heroBase,
    title: 'Best IT Solution',
    titleAccent: 'in your city',
    subtitle:
      'Prevent data loss with encrypted storage and virtualized recovery, then enjoy increased productivity.',
  },
  {
    image: heroAlt,
    title: 'Secure. Scalable. Supported.',
    titleAccent: 'around the clock',
    subtitle:
      'Managed infrastructure with proactive monitoring, automatic backups, and a support team that never sleeps.',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Blog', href: '#blog', dropdown: ['Blog', 'Blog Details', 'Elements'] },
  { label: 'Contact', href: '#contact' },
]

export const phoneNumber = '+2 392 3929 210'
export const phoneHref = 'tel:' + phoneNumber.replace(/[^\d+]/g, '')

export const categories: { icon: LucideIcon; title: string; blurb: string }[] = [
  {
    icon: Server,
    title: 'Industries & Manufacturing',
    blurb:
      'Connected plants and predictive maintenance that keep production lines running at full capacity.',
  },
  {
    icon: ShoppingCart,
    title: 'Retail & Commerce',
    blurb:
      'Secure storefronts, smart inventory, and seamless checkout experiences for modern shoppers.',
  },
  {
    icon: Plane,
    title: 'Logistics & Travel',
    blurb:
      'Real-time tracking and resilient platforms that move people and freight without friction.',
  },
  {
    icon: Building2,
    title: 'Finance & Services',
    blurb:
      'Compliant, always-on banking and service platforms built on hardened cloud foundations.',
  },
]

export const services = [
  {
    image: 'https://picsum.photos/id/2/640/480',
    title: 'Managed IT services',
    blurb:
      'Full-spectrum infrastructure management with 24/7 monitoring, patching, and capacity planning.',
  },
  {
    image: 'https://picsum.photos/id/3/640/480',
    title: 'Backup and recovery',
    blurb:
      'Encrypted backups and tested disaster-recovery runbooks that turn outages into non-events.',
  },
  {
    image: 'https://picsum.photos/id/6/640/480',
    title: 'Cyber security',
    blurb:
      'Threat detection, endpoint hardening, and compliance audits that protect what you have built.',
  },
]

export const caseStudies = [
  {
    image: 'https://picsum.photos/id/1/640/480',
    tag: 'Netora',
    title: 'Complexities of modern markets',
    blurb:
      'How a multi-region retailer simplified supply-chain data into one trustworthy control plane.',
  },
  {
    image: 'https://picsum.photos/id/0/640/480',
    tag: 'Netora',
    title: 'Backup and recovery',
    blurb:
      'A financial services group cut recovery time from days to minutes with a rebuilt backup fabric.',
  },
  {
    image: 'https://picsum.photos/id/48/640/480',
    tag: 'Netora',
    title: 'Cyber security',
    blurb:
      'A healthcare network hardened its endpoints and passed its toughest audit with zero findings.',
  },
]

export const testimonials = [
  {
    quote:
      'You deserve technology that is fast, secure, and quietly reliable. Netora delivered exactly that — modern systems, no drama.',
    name: 'Barb Ackuee',
    avatar: 'https://picsum.photos/id/64/120/120',
  },
  {
    quote:
      'Their team rebuilt our platform without a single lost transaction, and the new dashboards pay for themselves every week.',
    name: 'Cole Draco',
    avatar: 'https://picsum.photos/id/823/120/120',
  },
]

export const brandLogos = ['Nordic Cloud', 'Vectora', 'Hexaforge', 'Quantia', 'Osprey Systems']

export const quickLinks = ['My Account', 'Online Catalog', 'Contact', 'Terms & Conditions']

export const footerServices = [
  'Medium Enterprise',
  'Large Enterprise',
  'Education',
  'Government',
  'Health Care',
]

export const contactLinks = ['Support Ticket', 'FAQ', 'Contact Us']

export const copyright = 'Copyright © 2026 All rights reserved'
