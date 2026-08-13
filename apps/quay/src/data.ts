export interface NavLink {
  label: string
  href: string
}

export const navLeft: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const navRight: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'What We Do', href: '#services' },
]

export const allNavLinks: NavLink[] = [...navLeft, ...navRight]

export interface Slide {
  image: string
  alt: string
}

export const heroSlides: Slide[] = [
  {
    image: 'https://picsum.photos/id/180/1600/900',
    alt: 'Designer workspace with wireframe sketches on a warm wooden desk',
  },
  {
    image: 'https://picsum.photos/id/20/1600/900',
    alt: 'Flat-lay of a design desk with books, pencils, and a laptop',
  },
  {
    image: 'https://picsum.photos/id/1067/1600/900',
    alt: 'Golden-hour city skyline with warm evening light',
  },
]

export interface WorkItem {
  title: string
  location: string
  image: string
  alt: string
}

export const works: WorkItem[] = [
  {
    title: 'Creative Modern House',
    location: 'New York City, USA',
    image: 'https://picsum.photos/seed/quay-work-1/800/600',
    alt: 'Creative modern house exterior',
  },
  {
    title: 'Loft Revival',
    location: 'Chicago, USA',
    image: 'https://picsum.photos/seed/quay-work-2/800/600',
    alt: 'Loft revival interior',
  },
  {
    title: 'Minimal Family Home',
    location: 'Los Angeles, USA',
    image: 'https://picsum.photos/seed/quay-work-3/800/600',
    alt: 'Minimal family home interior',
  },
  {
    title: 'Coastal Retreat',
    location: 'Miami, USA',
    image: 'https://picsum.photos/seed/quay-work-4/800/600',
    alt: 'Coastal retreat living area',
  },
]

export interface ServiceItem {
  title: string
  blurb: string
  icon: LucideIcon
}

import type { LucideIcon } from 'lucide-react'
import { Armchair, DraftingCompass, Lamp, Palette, PencilRuler, Layers } from 'lucide-react'

export const services: ServiceItem[] = [
  {
    title: 'Space Planning',
    blurb: 'Thoughtful floor plans that balance flow, light, and everyday living.',
    icon: DraftingCompass,
  },
  {
    title: 'Lighting Design',
    blurb: 'Layered lighting schemes that bring warmth and depth to every room.',
    icon: Lamp,
  },
  {
    title: 'Staircase Craft',
    blurb: 'Sculptural staircases crafted to become the centerpiece of your home.',
    icon: Layers,
  },
  {
    title: 'Blueprint Drafting',
    blurb: 'Precise technical drawings that turn ideas into buildable reality.',
    icon: PencilRuler,
  },
  {
    title: 'Color & Material',
    blurb: 'Curated palettes and textures that define the mood of your space.',
    icon: Palette,
  },
  {
    title: 'Custom Furniture',
    blurb: 'One-of-a-kind pieces designed and built to fit your interior exactly.',
    icon: Armchair,
  },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The team transformed our loft into a space we never want to leave. Every corner feels intentional.',
    name: 'Mike Dorney',
    role: 'CEO and Co-Founder',
  },
  {
    quote:
      'From the first sketch to the final walkthrough, the process was seamless and the result stunning.',
    name: 'James Smith',
    role: 'CEO and Co-Founder',
  },
  {
    quote:
      'They listened to our ideas and elevated them — the lighting alone changed how we live at home.',
    name: 'Sarah Mitchell',
    role: 'Creative Director',
  },
]

export const featureLinks: NavLink[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Terms of Service', href: '#terms' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Contact Us', href: '#contact' },
]

export interface SocialLink {
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]
