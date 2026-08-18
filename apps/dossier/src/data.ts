// Section content for the Dossier template (original copy, paraphrased
// from the design reference; no assets copied).

export const heroTitle = 'Visual Design & Art Director'
export const heroSubtitle = 'Hi, I am Jack, focusing on creating emotional experiences.'
export const heroPortrait = 'https://picsum.photos/seed/dossier-portrait/600/720'

export const aboutBio =
  "I'm a Creative director based on New York, who loves clean, simple & unique design. I also enjoy crafting…"
export const aboutParagraph =
  'From brand systems to editorial layouts, I work closely with founders and teams to turn fuzzy ideas into sharp, finished products. Every project starts with listening, and ends with something people enjoy using every day.'
export const aboutBackground = 'https://picsum.photos/seed/dossier-desk/1920/900'

export interface Skill {
  label: string
  value: number
}

export const skills: Skill[] = [
  { label: 'User Research', value: 90 },
  { label: 'UI Design', value: 80 },
  { label: 'Web Design', value: 75 },
  { label: 'Illustration', value: 85 },
]

export const expertise: { title: string; blurb: string }[] = [
  {
    title: 'User Experience Design',
    blurb:
      'Journey maps, wireframes, and rapid prototypes that make complex products feel obvious and effortless to navigate.',
  },
  {
    title: 'User Interface Design',
    blurb:
      'Clean, consistent visual systems — typography, color, and component libraries built to scale across every screen.',
  },
  {
    title: 'Web Design',
    blurb:
      'Fast, responsive, and accessible sites crafted with modern tooling, from marketing pages to full applications.',
  },
]

export interface ResumeRow {
  role: string
  period: string
  company: string
  blurb: string
}

export const experienceRows: ResumeRow[] = [
  {
    role: 'User Experience Designer',
    period: 'March 2020 - Present',
    company: 'Northwind Studio',
    blurb:
      'Lead research and prototyping for a portfolio of fintech and wellness products used by half a million people.',
  },
  {
    role: 'UI Designer',
    period: 'June 2018 - Feb 2020',
    company: 'Harborline Labs',
    blurb:
      'Built the design system behind a commerce platform, cutting design-to-dev handoff time in half.',
  },
  {
    role: 'Illustration Artist',
    period: 'Jan 2017 - May 2018',
    company: 'Papier Mache Press',
    blurb:
      'Created editorial illustrations and cover art for a national print and digital magazine network.',
  },
  {
    role: 'Graphic Designer',
    period: 'Sep 2015 - Dec 2016',
    company: 'Brightframe Agency',
    blurb:
      'Delivered brand identities, packaging, and campaign graphics for retail and hospitality clients.',
  },
]

export const educationRows: ResumeRow[] = [
  {
    role: 'User Experience Designer',
    period: 'Sept 2012 - May 2015',
    company: 'Fernwood College of Design',
    blurb:
      'Focused on human-computer interaction, visual communication, and design research methods.',
  },
  {
    role: 'UI Designer',
    period: 'Sept 2015 - May 2016',
    company: 'California School of Art',
    blurb: 'Postgraduate studies in interface design, motion, and interactive storytelling.',
  },
]

export const quote =
  'I help creative entrepreneurs build better businesses, maximize productivity, and cultivate an engaged community.'
export const quoteImage = 'https://picsum.photos/seed/dossier-work/900/700'

export const instagramTiles = [
  { image: 'https://picsum.photos/seed/dossier-ig-1/400/400', alt: 'Sketchbook spread on a desk' },
  { image: 'https://picsum.photos/seed/dossier-ig-2/400/400', alt: 'Studio desk at golden hour' },
  { image: 'https://picsum.photos/seed/dossier-ig-3/400/400', alt: 'Typography detail print' },
  {
    image: 'https://picsum.photos/seed/dossier-ig-4/400/400',
    alt: 'Paints and brushes in the studio',
  },
  { image: 'https://picsum.photos/seed/dossier-ig-5/400/400', alt: 'City skyline from the window' },
  { image: 'https://picsum.photos/seed/dossier-ig-6/400/400', alt: 'Coffee and paper prototypes' },
] as const

export const footerBio =
  "I'm a designer based in San Francisco, currently freelancing across brand, digital, and editorial projects. You can follow the daily sketches and works-in-progress on @dossier.studio."

export const contactDetails = {
  address: '18 Harbour Lane, Bay District, Coast City 90210',
  phone: '+1(361)-883-3218',
  email: 'hello@dossier.example',
}

export const socials = ['Facebook', 'Instagram', 'LinkedIn'] as const
