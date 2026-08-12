/* Meridian — business consulting landing page content.
   Brand palette: teal-green #1fab89 accents on white with charcoal
   #343a40 and slate #6c7b95 (design tokens from the source template's
   stylesheet; copy is paraphrased to consulting-appropriate content of the
   same kinds — the source repeats one lorem block everywhere). */

export const BRAND = 'Meridian'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO_HEADLINE = 'We are consulting agency based in New York City'

export const SERVICES = [
  {
    icon: 'wrench' as const,
    title: 'Consultation',
    paragraph:
      'Sit down with our senior advisors for a focused session on your strategy, structure and priorities — and walk away with a concrete action plan.',
  },
  {
    icon: 'lightbulb' as const,
    title: 'Innovative Ideas',
    paragraph:
      'We bring fresh thinking to stubborn problems: workshops, research and prototyping that turn constraints into opportunities for growth.',
  },
  {
    icon: 'chat' as const,
    title: '24/7 Support',
    paragraph:
      'A dedicated team is always a call away. From quick questions to full engagements, we respond around the clock, wherever your business runs.',
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'Meridian reorganized our go-to-market around three clear priorities. Revenue is up 40% and the team finally agrees on what matters.',
    name: 'John Freeman',
    role: 'CEO Co-Founder',
  },
  {
    quote:
      'Their workshop series gave our product team a shared language for hard trade-offs. Six months later we still use the frameworks daily.',
    name: 'Sarah Whitfield',
    role: 'Head of Product',
  },
  {
    quote:
      'The most responsive consultancy we have worked with. Questions answered in minutes, deliverables ahead of schedule, zero drama.',
    name: 'Miguel Santos',
    role: 'COO, Northwind Labs',
  },
  {
    quote:
      'They found the growth bottleneck our own analysts had missed for a year. The fix paid for the engagement in a single quarter.',
    name: 'Elena Kovács',
    role: 'Managing Partner',
  },
] as const

export const GALLERY_HEADLINE = 'Work with us'
export const GALLERY_PARAGRAPH =
  'A glimpse of our studio, our people and the workshops that shape how we work with clients across three continents.'

export const FOOTER_COLUMNS = [
  {
    title: 'Contact Info',
    links: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'hello@mydomain.com', href: 'mailto:hello@mydomain.com' },
      { label: '+1 829 2293 382', href: '#contact' },
      { label: 'Support', href: '#contact' },
    ],
  },
  {
    title: 'Nav Links',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Blog', href: '#blog' },
      { label: 'Services', href: '#services' },
      { label: 'About Us', href: '#about' },
    ],
  },
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Blog', href: '#blog' },
      { label: 'Services', href: '#services' },
      { label: 'About Us', href: '#about' },
    ],
  },
] as const
