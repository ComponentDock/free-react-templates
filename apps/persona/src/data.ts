/* ── Brand & chrome ─────────────────────────────────────────────────────── */

export const brandName = 'Persona'
export const brandTagline = 'Personal Branding'

/** Uppercase dot-separated menu from the reference screenshot:
 *  HOME • SERVICES • PROJECTS • CLIENTS • EXPERIENCE • CONTACT */
export interface NavLink {
  label: string
  href: string
}

export const navLinks: ReadonlyArray<NavLink> = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Clients', href: '#clients' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

/* ── Hero ───────────────────────────────────────────────────────────────── */

export const heroSeed = 'persona-1'
export const heroHeadline: ReadonlyArray<string> = ['Personal Website', 'WordPress', 'Themes']
export const heroCtaLabel = 'Say hello'
export const heroCtaHref = '#contact'

/* ── Floating action bar ────────────────────────────────────────────────── */

export interface ActionBarItem {
  label: string
  /** lucide-react icon name — resolved by the component. */
  icon: 'tag' | 'home' | 'share' | 'download' | 'plus'
}

export const actionBarItems: ReadonlyArray<ActionBarItem> = [
  { label: 'Price', icon: 'tag' },
  { label: 'Home', icon: 'home' },
  { label: 'Share', icon: 'share' },
  { label: 'Download', icon: 'download' },
  { label: 'Add to collection', icon: 'plus' },
]

/* ── Services ───────────────────────────────────────────────────────────── */

export const servicesTitle = 'Services'
export interface Service {
  icon: 'palette' | 'pen' | 'sparkles'
  title: string
  description: string
}

export const services: ReadonlyArray<Service> = [
  {
    icon: 'palette',
    title: 'Brand Identity',
    description:
      'A distinctive visual identity for creatives, freelancers and small studios — logo, palette and voice that make you recognizable.',
  },
  {
    icon: 'pen',
    title: 'Web Design',
    description:
      'Modern, conversion-minded personal websites built to showcase your portfolio, tell your story and grow your audience.',
  },
  {
    icon: 'sparkles',
    title: 'Personal Branding',
    description:
      'Positioning, messaging and content strategy for photographers, freelancers and creative agencies that want to stand out.',
  },
]

/* ── Projects showcase ──────────────────────────────────────────────────── */

export const projectsTitle = 'Projects'
export interface Project {
  number: string
  name: string
  description: string
  seed: string
}

export const projects: ReadonlyArray<Project> = [
  {
    number: '01',
    name: 'Branding for Creatives',
    description: 'Identity system for a multidisciplinary design studio.',
    seed: 'persona-project-1',
  },
  {
    number: '02',
    name: 'Freelancer Portfolio',
    description: 'One-page portfolio for an independent photographer.',
    seed: 'persona-project-2',
  },
  {
    number: '03',
    name: 'Photography Site',
    description: 'Gallery-focused website with a booking flow.',
    seed: 'persona-project-3',
  },
  {
    number: '04',
    name: 'Agency Website',
    description: 'Marketing site for a boutique creative agency.',
    seed: 'persona-project-4',
  },
  {
    number: '05',
    name: 'Consultant Resume',
    description: 'Executive profile with a timeline of engagements.',
    seed: 'persona-project-5',
  },
  {
    number: '06',
    name: 'Artist Showcase',
    description: 'Minimal showcase for an illustrator and print maker.',
    seed: 'persona-project-6',
  },
]

export const projectCtaLabel = 'Download template'

/* ── Clients ────────────────────────────────────────────────────────────── */

export const clientsTitle = 'Clients'
export const clientSeeds: ReadonlyArray<string> = [
  'persona-client-1',
  'persona-client-2',
  'persona-client-3',
  'persona-client-4',
  'persona-client-5',
  'persona-client-6',
]

/* ── Experience timeline ────────────────────────────────────────────────── */

export const experienceTitle = 'Experience'
export interface ExperienceEntry {
  period: string
  role: string
  company: string
}

export const experience: ReadonlyArray<ExperienceEntry> = [
  {
    period: '2022 — Present',
    role: 'Independent Brand Consultant',
    company: 'Persona Studio',
  },
  {
    period: '2019 — 2022',
    role: 'Senior Designer',
    company: 'Brightside Digital',
  },
  {
    period: '2017 — 2019',
    role: 'Web Designer',
    company: 'Northwind Agency',
  },
  {
    period: '2015 — 2017',
    role: 'Junior Art Director',
    company: 'Folio Collective',
  },
]

/* ── Contact ────────────────────────────────────────────────────────────── */

export const contactTitle = 'Contact'
export const contactIntro =
  'Have a project in mind? Tell me about it — I usually reply within one business day.'

export const contactNameLabel = 'Name'
export const contactNamePlaceholder = 'Your name'
export const contactEmailLabel = 'Email address'
export const contactEmailPlaceholder = 'you@example.com'
export const contactMessageLabel = 'Message'
export const contactMessagePlaceholder = 'Tell me about your project...'
export const contactSubmitLabel = 'Send message'
export const contactInvalidMessage = 'Please fill in all fields with a valid email address.'
export const contactSuccessMessage = 'Thanks for your message — I will get back to you soon.'

export const contactEmail = 'hello@persona.example'
export const contactPhone = '+1 (555) 013-2486'
export const contactLocation = 'San Francisco, CA'

/* ── Footer ─────────────────────────────────────────────────────────────── */

export const footerLinks: ReadonlyArray<string> = [
  'Home',
  'Services',
  'Projects',
  'Clients',
  'Experience',
  'Contact',
]

export const footerCopyright = 'Copyright © 2026 All rights reserved | Template made with ♥ by'
export const footerCredit = 'Colorlib'
export const footerCreditUrl = 'https://colorlib.com'

/* ── Shared helpers ─────────────────────────────────────────────────────── */

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`
