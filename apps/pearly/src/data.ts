import type { LucideIcon } from 'lucide-react'
import { Brush, ShieldCheck, Smile, Sparkles, Syringe } from 'lucide-react'

export const clinicName = 'Pearly'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Treatment', href: '#treatment' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const blogDropdown = [
  { label: 'Blog', href: '#blog' },
  { label: 'Blog Details', href: '#blog' },
  { label: 'Elements', href: '#about' },
] as const

export const heroPhoto = 'https://picsum.photos/id/64/900/800'

export const heroHeadline = 'A brighter dental care experienced'

export const heroText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris nulla tincidunt fermentum. Sagittis pellentesque.'

export const aboutPhoto = 'https://picsum.photos/id/1027/620/840'

export const aboutHeadline = 'Best template for dental specialist'

export const aboutParagraphs = [
  'The clinic was founded by a team of dental specialists who believe great care starts with listening. Every patient receives a tailored plan and honest advice.',
  'Our modern practice pairs gentle treatment with the latest equipment, so visits are comfortable, quick and transparent from the first check-up to the final polish.',
  'We welcome the whole family — from first tooth to full dentures — and work with your schedule, your budget and your smile goals.',
] as const

export const aboutContactBlocks = [
  {
    label: 'PHONE',
    value: '+3 (986) 383 2293',
    lines: null as string[] | null,
  },
  {
    label: 'WORKING TIME',
    value: '09:00 AM – 08:00 PM',
    lines: ['Saturday Offline'],
  },
  {
    label: 'OUR CLINIC ADDRESS',
    value: '710 Stanford Springs Apt. 185, Lake Molliestad',
    lines: null as string[] | null,
  },
] as const

export interface Treatment {
  title: string
  text: string
  icon: LucideIcon
}

export const treatments: Treatment[] = [
  {
    title: 'Teeth Whitening',
    text: 'Brighten your smile in a single session with safe, enamel-friendly whitening.',
    icon: Sparkles,
  },
  {
    title: 'Teeth Cleaning',
    text: 'Gentle scaling and polishing that remove tartar and keep gums healthy.',
    icon: Brush,
  },
  {
    title: 'Quality Brackets',
    text: 'Modern braces and aligners designed for comfort and steady results.',
    icon: ShieldCheck,
  },
  {
    title: 'Modern Anesthetic',
    text: 'Painless numbing options that make every procedure easy to sit through.',
    icon: Syringe,
  },
  {
    title: 'Dental Implants',
    text: 'Durable, natural-looking implants that restore full chewing power.',
    icon: Smile,
  },
] as const

export const testimonials = [
  {
    quote:
      'I avoided the dentist for years, but the whole team made me feel calm and informed. Best check-up I have ever had.',
    name: 'Maria Gomez',
  },
  {
    quote:
      'The whitening results were incredible and the staff explained every step. Booking follow-ups is effortless.',
    name: 'David Chen',
  },
  {
    quote:
      'My daughter used to fear visits — now she asks when we can go again. Kind, patient and truly professional.',
    name: 'Aisha Khan',
  },
] as const

export const blogPosts = [
  {
    title: 'Why Regular Checkups Matter',
    excerpt:
      'A short visit every six months catches small issues before they become expensive treatments.',
    image: 'https://picsum.photos/id/20/700/500',
  },
  {
    title: 'Invisalign vs Braces: What to Know',
    excerpt:
      'Clear aligners are popular, but traditional braces still win in some cases. Here is how to choose.',
    image: 'https://picsum.photos/id/24/700/500',
  },
  {
    title: 'A Guide to Painless Root Canals',
    excerpt:
      'Modern anesthesia and rotary tools make root canals far gentler than their reputation suggests.',
    image: 'https://picsum.photos/id/996/700/500',
  },
] as const

export const ctaBandPhoto = 'https://picsum.photos/id/108/1600/700'

export const footerBlurb =
  'There are many variations of passages of Lorem Ipsum available be the majority.'

export const footerContactBlocks = [
  { label: 'PHONE', value: '+3 (986) 383 2293' },
  { label: 'WORKING TIME', value: '09:00 AM – 08:00 PM' },
  { label: 'OUR CLINIC ADDRESS', value: '710 Stanford Springs' },
] as const

export const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
] as const
