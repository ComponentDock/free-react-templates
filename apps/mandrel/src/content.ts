/** Every string on the page. Operational detail is verbatim; only the brand is ours. */

export const BRAND = 'Mandrel'
export const PHONE_DISPLAY = '(555) 010-0205'
export const PHONE_HREF = 'tel:+15550100205'
export const EMAIL = 'bids@mandrel.example'
export const CITY = 'Cleveland, OH'
export const ADDRESS = '4100 Industrial Parkway, Cleveland, OH 44135'
export const COMPONENTDOCK_HREF = 'https://www.componentdock.com/'
export const PRIVACY_HREF = '#contact'
export const TERMS_HREF = '#contact'
export const IMAGE_BASE = 'https://picsum.photos/seed'

export const img = (seed: string, width: number, height: number): string =>
  `${IMAGE_BASE}/mandrel-${seed}/${width}/${height}`

export interface LicenceItem {
  readonly value: string
}

/** The credentials a contractor paints on the van. */
export const LICENCE_ITEMS: readonly LicenceItem[] = [
  { value: 'Master plumber #000205' },
  { value: 'OSHA 30 · EMR 0.71' },
  { value: 'Bonded to $5M' },
]

export interface NavLink {
  readonly label: string
  readonly href: string
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Projects', href: '#projects' },
  { label: 'Sectors', href: '#capabilities' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Careers', href: '#contact' },
  { label: 'About', href: '#process' },
]

export const CHROME = {
  skip: 'Skip to content',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  darkToggle: 'Toggle dark mode',
  cookie:
    'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
  decline: 'Decline',
  accept: 'Accept All',
} as const

export const HERO = {
  eyebrow: 'Commercial and industrial mechanical contractor',
  heading: 'Plant rooms, process pipework, and the paperwork that comes with them.',
  lede: 'We work in live hospitals, food production and school estates, where the sequencing matters more than the pipework and the documentation is half the job.',
  primaryCta: 'Request a quote',
  secondaryCta: 'See projects',
  imageAlt: 'A commercial plant room during installation',
} as const

export interface Fact {
  readonly label: string
  readonly value: string
}

export const HERO_FACTS: readonly Fact[] = [
  { label: 'Founded', value: '1998' },
  { label: 'Engineers', value: '64 directly employed' },
  { label: 'EMR', value: '0.71 (3-year average)' },
  { label: 'Bonding capacity', value: '$5M single, $12M aggregate' },
]

export const SECTORS = ['Healthcare', 'Education', 'Food & bev', 'Industrial', 'Commercial'] as const

export type Sector = (typeof SECTORS)[number]

export interface Capability {
  readonly name: string
  readonly sectors: readonly Sector[]
}

/** The ragged shape is the argument: two full rows, one single-tick row. */
export const CAPABILITIES: readonly Capability[] = [
  {
    name: 'Plant room replacement',
    sectors: ['Healthcare', 'Education', 'Food & bev', 'Industrial', 'Commercial'],
  },
  { name: 'Process pipework', sectors: ['Food & bev', 'Industrial'] },
  { name: 'Medical gas', sectors: ['Healthcare'] },
  {
    name: 'Water compliance and legionella',
    sectors: ['Healthcare', 'Education', 'Food & bev', 'Industrial', 'Commercial'],
  },
  {
    name: 'Planned maintenance contracts',
    sectors: ['Healthcare', 'Education', 'Food & bev', 'Industrial', 'Commercial'],
  },
  {
    name: 'Drainage and pump stations',
    sectors: ['Healthcare', 'Education', 'Food & bev', 'Industrial'],
  },
  { name: 'Steam and condensate', sectors: ['Healthcare', 'Food & bev', 'Industrial'] },
]

export const CAPABILITIES_COPY = {
  eyebrow: 'Capabilities',
  heading: 'What we do, and where we have done it',
  lede: 'The question a facilities manager actually asks is not whether we can do the work, but whether we have done it in their sector.',
  caption: 'Capabilities by sector',
  footnote:
    'Sample matrix for template demonstration. Replace the capabilities, sectors and ticks with your own before launch.',
} as const

export interface Project {
  readonly sector: string
  readonly title: string
  readonly blurb: string
  readonly value: string
  readonly duration: string
  readonly seed: string
}

export const PROJECTS: readonly Project[] = [
  {
    sector: 'Healthcare',
    title: 'Acute hospital plant room replacement',
    blurb:
      'Two 1970s calorifiers replaced in a live acute hospital with no interruption to theatre or ward hot water.',
    value: '$1m - $2.5m',
    duration: '16 weeks',
    seed: 'hospital',
  },
  {
    sector: 'Food and beverage',
    title: 'Food-grade process pipework install',
    blurb:
      'Stainless process lines for a dairy expansion with full weld traceability and documented passivation.',
    value: '$2.5m - $5m',
    duration: '22 weeks',
    seed: 'dairy',
  },
  {
    sector: 'Education',
    title: 'Multi-site water compliance programme',
    blurb:
      'Fourteen schools assessed, remediated and brought under one monitoring regime across two summers.',
    value: '$500k - $1m',
    duration: 'Two summers',
    seed: 'schools',
  },
]

export const PROJECTS_COPY = {
  eyebrow: 'Projects',
  heading: 'Three recent jobs',
  lede: 'Each with the scope, the duration and the value band, because that is what a bid list is screened on.',
  valueLabel: 'Value band',
  durationLabel: 'Duration',
} as const

export interface Certification {
  readonly title: string
  readonly detail: string
}

export const CERTIFICATIONS: readonly Certification[] = [
  { title: 'Master plumber licence', detail: '#000205, Ohio' },
  { title: 'OSHA 30', detail: 'All supervisors, refreshed annually' },
  { title: 'EMR 0.71', detail: 'Three-year average' },
  { title: '$5M bonding', detail: 'Single project capacity' },
  { title: 'ASME B31.3', detail: 'Process piping procedures' },
  { title: 'Medical gas certified', detail: 'ASSE 6010 installers' },
  { title: 'ISO 9001', detail: 'Quality management' },
  { title: '$10M liability', detail: 'Certificates on request' },
]

export const CERTIFICATIONS_COPY = {
  eyebrow: 'Prequalification',
  heading: 'What is in the pack',
  footnote:
    'Sample accreditations for template demonstration. Replace with your own before launch, and never list a certification you do not hold.',
} as const

export interface Step {
  readonly title: string
  readonly body: string
  readonly promise: string
}

export const STEPS: readonly Step[] = [
  {
    title: 'Bid and prequalification',
    body: 'We price from drawings and a site walk, and the prequalification pack goes back with the bid rather than three weeks later.',
    promise: 'Usually 10 working days',
  },
  {
    title: 'Mobilise and sequence',
    body: 'Sequencing is agreed with your operations team before anything is ordered, because in a live building that is what decides the programme.',
    promise: 'Agreed, not imposed',
  },
  {
    title: 'Commission and hand over',
    body: 'Witnessed commissioning, O&M manuals and the training session, all delivered at practical completion rather than chased afterwards.',
    promise: 'Documentation at PC',
  },
]

export const PROCESS_COPY = {
  eyebrow: 'How we work',
  heading: 'Bid, mobilise, commission, hand over',
  lede: 'The stage most contractors handle badly is the last one, so it is the one we resource properly.',
} as const

export const CONTACT = {
  heading: 'Have a set of drawings?',
  lede: 'Send them over and we will come back with a priced bid and a prequalification pack.',
  primaryCta: 'Request a quote',
  secondaryCta: 'See capabilities',
} as const

export interface FooterColumn {
  readonly heading: string
  readonly links: readonly NavLink[]
}

export const FOOTER = {
  blurb:
    'Commercial and industrial mechanical contractor. Plant rooms, process pipework, statutory compliance and planned maintenance across the Midwest.',
  columns: [
    {
      heading: 'Capabilities',
      links: [
        { label: 'Plant rooms', href: '#capabilities' },
        { label: 'Process pipework', href: '#capabilities' },
        { label: 'Statutory compliance', href: '#certifications' },
        { label: 'Planned maintenance', href: '#process' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'Projects', href: '#projects' },
        { label: 'Sectors', href: '#capabilities' },
        { label: 'Certifications', href: '#certifications' },
        { label: 'Careers', href: '#contact' },
      ],
    },
    {
      heading: 'Support',
      links: [
        { label: 'Request a quote', href: '#contact' },
        { label: 'About', href: '#process' },
        { label: 'Privacy', href: PRIVACY_HREF },
        { label: 'Terms', href: TERMS_HREF },
      ],
    },
  ] as readonly FooterColumn[],
  promiseHeading: 'Prequalification',
  promiseBody:
    'Insurance certificates, safety statistics and trade references are available on request for prequalification packs.',
  promiseCta: 'Request a quote',
  socials: [
    { id: 'x', label: 'Mandrel on X', href: 'https://x.com/' },
    { id: 'instagram', label: 'Mandrel on Instagram', href: 'https://www.instagram.com/' },
    { id: 'linkedin', label: 'Mandrel on LinkedIn', href: 'https://www.linkedin.com/' },
  ] as const,
  legal: `© 2026 ${BRAND}. All rights reserved.`,
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  componentDock: 'More templates at Component Dock',
} as const
