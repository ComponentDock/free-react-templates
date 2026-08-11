/* Ascendly — content data for the business-consulting landing, recreated
   from ColorLib "Arcwork" (https://colorlib.com/wp/template/arcwork/).
   Copy types mirror the original (headline + CTA, card title + blurb +
   link, etc.); all images are seeded picsum placeholders. */

export const BRAND = 'Ascendly'

export const NAV_LINKS = [
  { label: 'Home', href: '#home-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
]

export const HERO_CTA = 'View Our Services'

/** Words cycled by the hero typed-headline effect. */
export const TYPED_WORDS = ['Business', 'Startups', 'Organization'] as const

export const HERO_HEADLINE_PREFIX = 'Grow Up Your'

export interface Feature {
  title: string
  icon: 'chart' | 'trend' | 'briefcase'
  blurb: string
}

export const FEATURES: Feature[] = [
  {
    title: 'Financial Analysis',
    icon: 'chart',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Marketing Plans',
    icon: 'trend',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Optimize Solutions',
    icon: 'briefcase',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export interface Solution {
  title: string
  image: string
}

const SOLUTION_TITLES = [
  'Consectetur Adipisicing Elit',
  'Beatae Doloribu',
  'Accusantium Eius Soluta',
] as const

/** Six cards — the original owl carousel reuses three images twice. */
export const SOLUTIONS: Solution[] = SOLUTION_TITLES.flatMap((title, index) => [
  { title, image: `https://picsum.photos/seed/ascendly-${index + 1}/640/420` },
  { title, image: `https://picsum.photos/seed/ascendly-${index + 1}/640/420` },
])

export interface Testimonial {
  quote: string
  author: string
  image: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: '— Craig Stephen',
    image: 'https://picsum.photos/seed/ascendly-4/400/400',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: '— Craig Stephen',
    image: 'https://picsum.photos/seed/ascendly-4/400/400',
  },
]

export interface BlogPost {
  title: string
  meta: string
  excerpt: string
  image: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Lorem ipsum dolor sit amet',
    meta: 'July 17, 2019 by Admin',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/ascendly-5/640/420',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    meta: 'July 17, 2019 by Admin',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/ascendly-6/640/420',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    meta: 'July 17, 2019 by Admin',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/ascendly-7/640/420',
  },
]

export const CTA_HEADLINE = "Let's work together to make your business growth dramatically."

export interface FooterLink {
  label: string
  href: string
}

export const CONTACT_COLUMN = {
  heading: 'Contact Us',
  items: [
    { label: 'Contact Us', href: '#contact-section' },
    { label: 'hello@mydomain.com', href: 'mailto:hello@mydomain.com' },
    { label: '+1 829 2293 382', href: 'tel:+18292293382' },
    { label: 'Support', href: '#contact-section' },
  ],
}

/** The original footer repeats this link column twice — keep the
   duplication for fidelity. */
export const LINK_COLUMN: FooterLink[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'About Us', href: '#about-section' },
]

export const SOCIAL_LINKS = [
  { name: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
  { name: 'x', label: 'X', href: 'https://x.com' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
  { name: 'skype', label: 'Skype', href: 'https://skype.com' },
] as const
