/**
 * Every word on the page lives here. The three stages, the two long reviews and
 * the studio statement are the template's argument, so their copy is data rather
 * than markup — the sequencing is the product, and it has to stay editable.
 */

export const site = {
  name: 'Patina',
  descriptor: 'Bath & Plumbing',
  phone: '(555) 010-0244',
  phoneHref: 'tel:+15550100244',
  email: 'studio@patina.example',
  address: '1140 West Fulton Market, Chicago, IL 60607',
  city: 'Chicago',
  licence: 'IL licence #000000',
  componentDock: 'https://www.componentdock.com/',
} as const

export const NAV_LEFT = [
  { label: 'Bathrooms', href: '#portfolio' },
  { label: 'Renovations', href: '#process' },
  { label: 'Before & after', href: '#compare' },
] as const

export const NAV_RIGHT = [
  { label: 'Studio', href: '#owner' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  eyebrow: 'Chicago · Bathroom design and renovation plumbing',
  headline: 'The room you stand in first thing, done properly once.',
  lead: 'Design, first fix, second fix and the trades in between, run by one studio so nobody hands the problem to somebody else.',
  cta: 'Book a consultation',
  image: 'https://picsum.photos/seed/patina-1/1920/1080',
  imageAlt: 'A finished bathroom in low light',
} as const

export const portfolio = {
  eyebrow: 'Recent work',
  title: 'Three rooms',
  lead: 'Sample projects for template demonstration. Add one YAML file per project in src/content/portfolio.',
  items: [
    {
      name: 'Linden House',
      city: 'Lincoln Park',
      image: 'https://picsum.photos/seed/patina-2/960/1200',
    },
    {
      name: 'Walnut Court',
      city: 'Oak Park',
      image: 'https://picsum.photos/seed/patina-3/960/1200',
    },
    {
      name: 'Harper Loft',
      city: 'West Loop',
      image: 'https://picsum.photos/seed/patina-4/960/1200',
    },
  ],
} as const

export const compare = {
  title: 'Before, and after eleven weeks',
  lead: 'Drag to compare. The wet room floor was built up over the existing joists rather than cut into them, which is what kept the programme at eleven weeks.',
  beforeImage: 'https://picsum.photos/seed/patina-6/1600/900',
  afterImage: 'https://picsum.photos/seed/patina-1/1600/900',
  beforeAlt: 'The wet room before the work, stripped back to the joists',
  afterAlt: 'The same room after eleven weeks, finished',
  label: 'Reveal the finished work',
} as const

export const process = {
  eyebrow: 'How it runs',
  title: 'Three stages, and you see the drawings before anyone lifts a floorboard',
  lead: 'A bathroom is between six and fourteen weeks of somebody in your house. The sequencing is the service.',
  steps: [
    {
      numeral: '01',
      title: 'Consultation and survey',
      body: 'Two hours at the property. We look at the existing pipework, the joist direction and the soil stack, because those decide what is actually possible.',
      meta: 'From $300, credited',
    },
    {
      numeral: '02',
      title: 'Design and fixed quote',
      body: 'Drawings, a fixture schedule and a fixed price covering our trades. You approve it before anything is ordered.',
      meta: 'Two to three weeks',
    },
    {
      numeral: '03',
      title: 'Build and hand over',
      body: 'One site manager, a named start date and a working bathroom at the end. We are the last trade out and we take the skip with us.',
      meta: '6 - 14 weeks',
    },
  ],
} as const

export const owner = {
  portrait: 'https://picsum.photos/seed/patina-5/320/320',
  portraitAlt: 'Portrait of the studio director',
  eyebrow: 'The studio',
  lead: 'We are a plumbing studio that took on design because the handover between the two was where every bathroom project went wrong.',
  paragraphs: [
    'Patina runs four bathroom projects at a time and no more. Each has one site manager who is there for its whole duration, which is why we cannot run eight. The tiling, electrics and joinery are subcontracted to the same three firms we have used for a decade, and they are named in your quote.',
    'If you want the cheapest bathroom in Chicago we are emphatically not it, and we would rather say so on this page than during a consultation you have taken an afternoon off for.',
  ],
  signature: 'Patina Bath & Plumbing',
  cityLine: 'Chicago, since 2014',
  link: { label: 'More about the studio', href: '#portfolio' },
} as const

export interface Review {
  quote: string
  name: string
  city: string
}

export const testimonials = {
  pill: 'Clients',
  title: 'Two long ones rather than six short ones',
  lead: 'Sample reviews for demonstration. Replace with your own.',
  items: [
    {
      quote:
        'We had three quotes before Patina and every one of them was a single number with no drawings attached, which we now realise meant nobody had decided anything. Patina spent two hours in the flat before quoting, came back with a drawing of the room as it would be, a fixture schedule and a fixed price, and then held that price through a joist that turned out to be rotten. The job ran eleven weeks, the site manager was the same person every morning, and the last thing that happened was a walk-round where he pointed out a grout line he was not happy with and had it redone. I have renovated twice before and never had that.',
      name: 'Eleanor and James R.',
      city: 'Lincoln Park',
    },
    {
      quote:
        'What I keep telling people is that they turned up when they said and left when they said. A bathroom is six weeks of strangers in your house and the uncertainty is worse than the mess, so a named start date and a named end date was worth more to me than any of the finishes. The quote was not the cheapest we received and it was not the most expensive, and it was the only one that separated the design from the build instead of hiding both behind a single figure. They also talked us out of a wall-hung toilet because the stack could not take it, which nobody else had mentioned.',
      name: 'Devansh M.',
      city: 'West Loop',
    },
  ] as Review[],
} as const

export const contact = {
  title: 'Book a consultation',
  lead: 'Two hours at the property, and drawings you own whether or not you go ahead with us.',
  primary: 'Book a consultation',
  secondary: 'See the portfolio',
  formHeading: 'Tell us about the room',
  fields: {
    name: 'Your name',
    email: 'Email',
    subject: 'What is the project?',
    message: 'Anything we should know?',
  },
  placeholders: {
    name: 'First and last name',
    email: 'you@example.com',
    subject: 'Linden House, wet room, full renovation',
    message: 'The room, the building, and what you want changed.',
  },
  submit: 'Send the enquiry',
  success: {
    title: 'Thank you, the enquiry is with the studio.',
    body: 'Sample confirmation for template demonstration — nothing was sent. We would reply within one working day and offer two consultation slots.',
    reset: 'Send another enquiry',
  },
  errors: {
    name: 'A name is needed so we know who we are writing to.',
    email: 'A valid email address is needed for the reply.',
    subject: 'One line about the project is enough.',
    message: 'A sentence or two about the room, please.',
  },
} as const

export const footer = {
  blurb:
    'Bathroom design and renovation plumbing in Chicago. Design, first fix, second fix and the trades around them, run by one studio.',
  licenceLine: 'IL licence #000000, insured and bonded. Sample details for template demonstration.',
  columns: [
    {
      heading: 'Studio',
      links: [
        { label: 'Bathrooms', href: '#portfolio' },
        { label: 'Renovations', href: '#process' },
        { label: 'Fixture installation', href: '#process' },
        { label: 'Wet rooms', href: '#compare' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Process', href: '#process' },
        { label: 'Studio', href: '#owner' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      heading: 'Support',
      links: [
        { label: 'Privacy', href: '#contact' },
        { label: 'Terms', href: '#contact' },
      ],
    },
  ],
  copyright: '© 2026 Patina Bath & Plumbing. All rights reserved.',
  legal: [
    { label: 'Privacy Policy', href: '#contact' },
    { label: 'Terms of Service', href: '#contact' },
  ],
  attribution: 'More templates at Component Dock',
} as const
