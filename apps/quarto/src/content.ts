export interface NavItem {
  label: string
  href: string
}

export interface Project {
  id: 'coursework' | 'personal'
  meta: string
  title: string
  blurb: string
  art: 'wayfinding' | 'pantry'
  artAlt: string
}

export interface TimelineRow {
  date: string
  title: string
  body: string
}

export const person = {
  name: 'Rowan Ellis',
  monogram: 'r',
  email: 'rowan@example.com',
  availability: 'Open to summer 2027 internships',
  college: 'Aldergate College',
  studio: 'Harbour & Fern Studio',
} as const

export const navItems: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Résumé', href: '#experience' },
]

export const heroIntro =
  'Hi, I’m Rowan — a design student who likes turning everyday questions into useful, thoughtful things.'

export const noteLines = [
  '↳ Currently: studying interaction design',
  '↳ Learning: to ask better questions',
  '↳ Outside class: sketchbooks & long walks',
]

export const projects: Project[] = [
  {
    id: 'coursework',
    meta: 'Coursework · Interaction design · 2026',
    title: 'Finding your way, minus the guesswork',
    blurb:
      'A campus wayfinding concept that puts the next decision first. From field observations to a focused mobile prototype.',
    art: 'wayfinding',
    artAlt: 'Campus Path concept with a campus map and a step-free route screen',
  },
  {
    id: 'personal',
    meta: 'Personal project · Data storytelling · 2026',
    title: 'Making everyday waste visible',
    blurb:
      'A small data journal exploring what gets forgotten in the fridge, and what a gentler reminder could look like.',
    art: 'pantry',
    artAlt: 'Pantry Notes concept with a food-waste chart and a pantry item card',
  },
]

export const aboutParagraphs = [
  'I’m a third-year interaction design student at Aldergate College. I’m drawn to the quiet problems: confusing signs, overlooked details, and small moments that could be easier.',
  'I like research that leaves the desk, prototypes that start a conversation, and teams where it’s okay to say “I don’t know yet.” Right now, I’m looking for an internship where I can keep learning.',
]

export const skills = [
  'Interview planning',
  'Prototyping',
  'HTML & CSS',
  'Figma',
  'Data visualization',
]

export const timeline: TimelineRow[] = [
  {
    date: '2024–2027 · EXPECTED',
    title: 'BA, Interaction Design · Aldergate College',
    body: 'Coursework in human-centered design, visual communication and research methods. My campus wayfinding project brings these together.',
  },
  {
    date: 'SUMMER 2026',
    title: 'Design intern · Harbour & Fern Studio',
    body: 'Prepared component documentation, helped organize interview notes and explored form layouts with a supervising designer.',
  },
  {
    date: '2025–PRESENT',
    title: 'Volunteer · Student Design Society',
    body: 'Help organize peer critiques and welcome first-year students to our weekly sketching sessions.',
  },
]

export const contactLede =
  'I’d love to hear about thoughtful teams, interesting projects and opportunities to learn.'

export const sampleNotice =
  'Template demo: Rowan Ellis, education, experience and project results are fictional sample content.'
