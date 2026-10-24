/** Copy and content inventory for the Portray résumé template. */

export const siteName = 'Portray'
export const siteTagline = 'Visual design & art direction'

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export const emailLink = { label: 'Fire me an email', href: 'mailto:hello@portray.studio' }

export const hero = {
  title: 'Visual Design & Art Director',
  subline: 'I design calm, confident brands and the products that carry them.',
  cta: { label: 'Hire me', href: '#contact' },
  portrait: 'https://picsum.photos/seed/portray-portrait/1240/1560',
}

export interface Skill {
  label: string
  value: number
}

export const about = {
  eyebrow: 'About myself',
  statement:
    "I'm a creative director based in Copenhagen, who loves clean, simple and distinctive design. I still enjoy crafting every detail by hand.",
  cta: { label: 'Download résumé', href: '#contact' },
  note: 'Hi, I am Iris — a designer focused on building emotional, useful experiences for people who care about craft.',
  background: 'https://picsum.photos/seed/portray-desk/1920/1080',
}

export const skills: Skill[] = [
  { label: 'User researchers', value: 60 },
  { label: 'UI design', value: 89 },
  { label: 'Web design', value: 60 },
  { label: 'Illustration', value: 89 },
]

export const expertise = {
  heading: 'My expertise',
  lead: [
    {
      title: 'User Experience Design',
      muted: false,
    },
    { title: 'User Interface Design', muted: true },
    { title: 'Web Design', muted: true },
  ],
  paragraphs: [
    'Research, flows and prototypes first: I map the problem, test the shape of it with real people, and only then let the interface settle into its final form.',
    'Then the build — type scales, colour systems and components that survive contact with a content team. What ships looks like what was drawn, on every screen.',
  ],
}

export interface TimelineEntry {
  role: string
  period: string
  org: string
  orgHref: string
  description: string
}

export const experience: TimelineEntry[] = [
  {
    role: 'User Experience Designer',
    period: 'March 2020 — Present',
    org: 'Northlight Studio',
    orgHref: 'https://www.componentdock.com/',
    description:
      'Leading discovery and design for a portfolio of editorial and commerce clients, from first research interview to the shipped design system.',
  },
  {
    role: 'UI Designer',
    period: 'March 2020 — Present',
    org: 'Northlight Studio',
    orgHref: 'https://www.componentdock.com/',
    description:
      'Shaping interface systems: type ramps, spacing rhythm, component states and the documentation that keeps a team inside them.',
  },
  {
    role: 'Illustration Artist',
    period: 'March 2020 — Present',
    org: 'Northlight Studio',
    orgHref: 'https://www.componentdock.com/',
    description:
      'Drawing the marks, spot illustrations and editorial artwork that give a brand a voice no stock library can imitate.',
  },
  {
    role: 'Graphic Designer',
    period: 'March 2020 — Present',
    org: 'Northlight Studio',
    orgHref: 'https://www.componentdock.com/',
    description:
      'Print, packaging and campaign work — the same palette and grid carried from screen to paper without losing a beat.',
  },
]

export const education: TimelineEntry[] = [
  {
    role: 'Interaction Design',
    period: 'September 2014 — June 2018',
    org: 'Delft Academy of Art',
    orgHref: 'https://www.componentdock.com/',
    description:
      'A four-year studio degree in interaction design, closing with a thesis on wayfinding in public digital services.',
  },
  {
    role: 'Visual Communication',
    period: 'September 2018 — June 2020',
    org: 'California College of the Arts',
    orgHref: 'https://www.componentdock.com/',
    description:
      'A master’s in visual communication: typography, editorial systems and a long obsession with printed matter.',
  },
]

export const quote = {
  text: 'I help independent studios build calmer brands, sharper products and a community that stays.',
  photo: 'https://picsum.photos/seed/portray-quote/1200/1400',
}

export interface GalleryItem {
  label: string
  seed: string
}

export const gallery: GalleryItem[] = [
  { label: 'Nordlys identity system', seed: 'portray-gallery-1' },
  { label: 'Field notes editorial spread', seed: 'portray-gallery-2' },
  { label: 'Harbour wayfinding signage', seed: 'portray-gallery-3' },
  { label: 'Stamped packaging study', seed: 'portray-gallery-4' },
  { label: 'Studio portrait series', seed: 'portray-gallery-5' },
]

export const footer = {
  statement:
    "I'm a designer, based in Copenhagen. Currently freelance — you can follow the studio notes on @portray and see the work in the gallery above.",
  formTitle: 'Drop a line',
  contactTitle: 'Contact me',
  address: 'Strandgade 27, 1401 Copenhagen K',
  phone: { label: '+45 32 14 08 77', href: 'tel:+4532140877' },
  email: { label: 'hello@portray.studio', href: 'mailto:hello@portray.studio' },
  resume: { label: 'Download résumé', href: '#contact' },
}

export interface SocialLink {
  network: string
  label: string
  href: string
}

export const socials: SocialLink[] = [
  { network: 'Instagram', label: 'Portray on Instagram', href: 'https://www.componentdock.com/' },
  { network: 'Twitter', label: 'Portray on Twitter', href: 'https://www.componentdock.com/' },
  { network: 'Facebook', label: 'Portray on Facebook', href: 'https://www.componentdock.com/' },
]
