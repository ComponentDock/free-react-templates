/** Statecraft — consulting firm content (recreated design copy).
 *  All images are deterministic picsum placeholders (no source assets). */

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Cases', href: '#cases' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const heroContent = {
  headline: 'Unlocking the potential of those who advance the world',
  highlight: 'potential',
  subtext:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  image: 'https://picsum.photos/seed/statecraft-hero/760/760',
  imageAlt: 'Consultant at a desk reviewing plans',
} as const

export const aboutThumbnails = [
  {
    src: 'https://picsum.photos/seed/statecraft-about1/520/380',
    alt: 'Modern office building exterior',
  },
  {
    src: 'https://picsum.photos/seed/statecraft-about2/520/380',
    alt: 'Consulting team at a meeting table',
  },
] as const

export const services = [
  {
    image: 'https://picsum.photos/seed/statecraft-service1/600/440',
    title: 'Business',
    blurb:
      'Because they build a relationship that is based on trust. Over the years they have proven that their delivery is fast and stable.',
  },
  {
    image: 'https://picsum.photos/seed/statecraft-service2/600/440',
    title: 'Strategy',
    blurb:
      'Because they build a relationship that is based on trust. Over the years they have proven that their delivery is fast and stable.',
  },
  {
    image: 'https://picsum.photos/seed/statecraft-service3/600/440',
    title: 'Growth',
    blurb:
      'Because they build a relationship that is based on trust. Over the years they have proven that their delivery is fast and stable.',
  },
] as const

export const whyChoose = [
  {
    title: 'Tons of pre-made sections',
    blurb:
      'Combine sections from our vast component library and create beautiful, on-brand pages in hours.',
  },
  {
    title: 'Complete CMS integration',
    blurb:
      'Facilisis ac eget mauris nulla enim a diam. Posuere vel eleifend augue laoreet non praesent ultrices.',
  },
  {
    title: 'Stellar after-sales support',
    blurb:
      'Facilisis ac eget mauris nulla enim a diam. Posuere vel eleifend augue laoreet non praesent ultrices.',
  },
] as const

export const cases = [
  {
    image: 'https://picsum.photos/seed/statecraft-case1/600/440',
    title: 'Business Strategy',
    blurb:
      'Because they build a relationship that is based on trust. Over the years they have proven that their delivery is fast and stable.',
  },
  {
    image: 'https://picsum.photos/seed/statecraft-case2/600/440',
    title: 'Business Strategy',
    blurb:
      'Because they build a relationship that is based on trust. Over the years they have proven that their delivery is fast and stable.',
  },
  {
    image: 'https://picsum.photos/seed/statecraft-case3/600/440',
    title: 'Business Strategy',
    blurb:
      'Because they build a relationship that is based on trust. Over the years they have proven that their delivery is fast and stable.',
  },
] as const

export const testimonials = [
  {
    quote:
      'Life is very short and what we have to do must be done in the now. Combine sections from our vast component library and create beautiful.',
    name: 'Manuel Labor',
    role: 'Founder',
  },
  {
    quote:
      'They paired sharp strategic thinking with relentless execution — the roadmap they delivered paid for itself in the first quarter.',
    name: 'Manuel Labor',
    role: 'Founder',
  },
  {
    quote:
      'A partner that listens first and proposes second. Our growth agenda finally has the structure it was missing.',
    name: 'Manuel Labor',
    role: 'Founder',
  },
] as const

export const blogPosts = [
  {
    image: 'https://picsum.photos/seed/statecraft-blog1/640/400',
    meta: '21 Mar 2021',
    title: 'We help leading organisations succeed with their most critical priorities',
    excerpt:
      'A short guide to sequencing transformation work so that early wins fund the long game.',
  },
  {
    image: 'https://picsum.photos/seed/statecraft-blog2/640/400',
    meta: '21 Mar 2021',
    title: 'We help leading organisations succeed with their most critical priorities',
    excerpt: 'Why pricing, marketing and sales belong on one agenda — and how to keep them there.',
  },
] as const

export const footerQuickLinks = ['Work', 'Services', 'Products', 'Tips & Tricks'] as const

export const footerServices = [
  'Strategy & Transformation',
  'Growth & Innovation',
  'Leadership & Change',
  'Digitalisation & IT',
  'Operations & Efficiency',
] as const
