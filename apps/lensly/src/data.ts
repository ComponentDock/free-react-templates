import { Aperture, Camera, Heart, type LucideIcon } from 'lucide-react'

export const BRAND = 'Lensly'

export const NAV_LINKS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about', active: false },
  { label: 'Photography', href: '#works', active: false },
  { label: 'Event', href: '#event', active: false },
  { label: 'Contact', href: '#contact', active: false },
] as const

/* Hero photo: picsum ID 64 (golden-hour woman in white with bouquet —
   bride-like subject screened via pixel metric + vision; the arbitrary
   lensly-1 seed rendered an Empire State Building double-exposure). */
export const HERO_IMAGE = 'https://picsum.photos/id/64/1920/1280'

export interface WorkTile {
  src: string
  tag: 'web' | 'brand' | 'design'
  label: string
  Icon: LucideIcon
}

/* 12-tile portfolio grid — tag drives the hover icon (web -> camera,
   brand -> heart, design -> aperture), matching the original's
   web|brand|design item classes. */
export const WORKS: WorkTile[] = [
  {
    src: 'https://picsum.photos/seed/lensly-2/600/450',
    tag: 'web',
    label: 'Wedding Photography',
    Icon: Camera,
  },
  {
    src: 'https://picsum.photos/seed/lensly-3/600/450',
    tag: 'brand',
    label: 'Engagement Shoot',
    Icon: Heart,
  },
  {
    src: 'https://picsum.photos/seed/lensly-4/600/450',
    tag: 'design',
    label: 'Event Coverage',
    Icon: Aperture,
  },
  {
    src: 'https://picsum.photos/seed/lensly-5/600/450',
    tag: 'web',
    label: 'Portrait Session',
    Icon: Camera,
  },
  {
    src: 'https://picsum.photos/seed/lensly-6/600/450',
    tag: 'brand',
    label: 'Brand Campaign',
    Icon: Heart,
  },
  {
    src: 'https://picsum.photos/seed/lensly-7/600/450',
    tag: 'design',
    label: 'Product Shoot',
    Icon: Aperture,
  },
  {
    src: 'https://picsum.photos/seed/lensly-8/600/450',
    tag: 'web',
    label: 'Corporate Event',
    Icon: Camera,
  },
  {
    src: 'https://picsum.photos/seed/lensly-9/600/450',
    tag: 'brand',
    label: 'Anniversary Shoot',
    Icon: Heart,
  },
  {
    src: 'https://picsum.photos/seed/lensly-10/600/450',
    tag: 'design',
    label: 'Album Design',
    Icon: Aperture,
  },
  {
    src: 'https://picsum.photos/seed/lensly-11/600/450',
    tag: 'web',
    label: 'Bridal Portrait',
    Icon: Camera,
  },
  {
    src: 'https://picsum.photos/seed/lensly-12/600/450',
    tag: 'brand',
    label: 'Save the Date',
    Icon: Heart,
  },
  {
    src: 'https://picsum.photos/seed/lensly-13/600/450',
    tag: 'design',
    label: 'Editorial Design',
    Icon: Aperture,
  },
]

export const ABOUT_IMAGE = 'https://picsum.photos/seed/lensly-14/600/750'
export const VIDEO_IMAGE = 'https://picsum.photos/seed/lensly-15/1200/675'
export const VIDEO_URL = 'https://player.vimeo.com/video/191947042'

export interface Testimonial {
  title: string
  quote: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    title: 'The Best Photographer',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
  },
  {
    title: 'Easy To Work With',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    title: 'Professional Photographer',
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
  },
]

export interface Post {
  src: string
  meta: string
  title: string
  excerpt: string
}

export const POSTS: Post[] = [
  {
    src: 'https://picsum.photos/seed/lensly-16/600/400',
    meta: 'July 17, 2019 by Admin',
    title: 'Best Photography Tips',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    src: 'https://picsum.photos/seed/lensly-17/600/400',
    meta: 'July 12, 2019 by Admin',
    title: 'How To Shoot A Wedding',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    src: 'https://picsum.photos/seed/lensly-18/600/400',
    meta: 'July 5, 2019 by Admin',
    title: 'Behind The Scenes',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
]

export interface Social {
  name: string
  label: string
  href: string
  path: string
}

/* Brand icons were removed from lucide-react — inline SVG paths. */
export const SOCIALS: Social[] = [
  {
    name: 'Facebook',
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'Twitter',
    label: 'Twitter',
    href: 'https://x.com',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    name: 'Instagram',
    label: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  },
  {
    name: 'LinkedIn',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z',
  },
]

export const FOOTER_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Terms of Service', href: '#home' },
  { label: 'Privacy', href: '#home' },
  { label: 'Contact Us', href: '#contact' },
] as const
