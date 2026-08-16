/** Stalwart — construction company content (recreated design copy).
 *  All images are deterministic picsum placeholders (no source assets). */

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Service', href: '#services' },
  { label: 'Project', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const contactStrip = [
  {
    title: 'Call Us',
    line1: '1-800-506-266',
    line2: 'hello@stalwart.build',
  },
  {
    title: 'Location',
    line1: '87/A, Green Lane',
    line2: 'Kings Garden, CA 6732',
  },
  {
    title: 'Opening Hour',
    line1: 'Mon – Sat',
    line2: '8:00 am – 6:00 pm',
  },
] as const

export const promiseBlocks = [
  {
    heading: 'Our Promise',
    paragraphs: [
      'Every project begins with a clear plan and an honest estimate. We walk each site with you, agree on scope and budget, and never surprise you with hidden costs.',
      'Our crews are licensed, insured and background-checked. We arrive on time, protect your property, and clean up completely before we leave.',
    ],
  },
  {
    heading: 'Our Promise',
    paragraphs: [
      'We use premium materials and proven methods on every build, so the work we finish today still stands tall decades from now.',
      'From the first sketch to the final walkthrough, a dedicated project lead stays in touch with you — weekly updates, open questions, zero guesswork.',
    ],
  },
] as const

export const services = [
  {
    title: 'Architecture',
    blurb:
      'Concept design, planning and detailing for residential and commercial builds, shaped around how you actually live and work.',
  },
  {
    title: 'Construction',
    blurb:
      'Full-service building from foundation to finish, delivered by in-house crews and vetted trades under one accountable contract.',
  },
  {
    title: 'Renovation',
    blurb:
      'Kitchens, bathrooms, extensions and adaptive reuses that modernize a space without losing what made it worth keeping.',
  },
  {
    title: 'Energy',
    blurb:
      'Insulation, glazing and smart systems that cut operating costs and move every project closer to net-zero performance.',
  },
] as const

export const galleryProjects = [
  {
    title: 'Energy Station',
    blurb: 'Zero-carbon district energy hub, delivered 18 months ahead of schedule.',
  },
  { title: 'Skyline Bridge', blurb: 'A 340-metre cable bridge connecting two downtown districts.' },
  { title: 'Metro Tunnel', blurb: 'Deep-bore transit tunnel with three new underground stations.' },
] as const

export const teamMembers = [
  { name: 'Marcus Hale', role: 'Architect' },
  { name: 'Priya Raman', role: 'Site Manager' },
  { name: 'Tomás Ferreira', role: 'Civil Engineer' },
  { name: 'Elena Vogt', role: 'Interior Designer' },
  { name: 'David Okafor', role: 'Project Lead' },
] as const

export const footerNav = ['Home', 'About', 'Services', 'Blog', 'Contact'] as const

export const footerServices = [
  'Architecture',
  'Construction',
  'Renovation',
  'Energy',
  'Consulting',
] as const
