/**
 * One practice, one page. Every string here is authored for this template;
 * prices, plot sizes and plant lists are the design's content, and the brand,
 * address and people are clearly-sample inventions.
 */

export const site = {
  name: 'Hedgerow',
  discipline: 'Garden design and maintenance',
  componentDock: 'https://www.componentdock.com/',
  phone: '(555) 013-0284',
  phoneHref: 'tel:5550130284',
  email: 'studio@hedgerow.garden',
  address: 'Hedgerow Studio, 4 Larkhall Rise, Bath BA1 6RS',
  copyright: '© 2026 Hedgerow. All rights reserved.',
}

export interface NavItem {
  label: string
  target: string
}

/** Eight labels, six in-page targets: the three route labels are mapped onto bands. */
export const nav: NavItem[] = [
  { label: 'Recent gardens', target: '#work' },
  { label: 'Planting', target: '#planting' },
  { label: 'Through the year', target: '#calendar' },
  { label: 'Maintenance', target: '#maintenance' },
  { label: 'About', target: '#about' },
  { label: 'Plans', target: '#maintenance' },
  { label: 'Journal', target: '#planting' },
  { label: 'Contact', target: '#contact' },
]

export const hero = {
  badge: 'Design, build and maintenance across Bath and North Somerset',
  headlineLead: 'A garden is a',
  phrases: [
    'ten-year conversation',
    'long argument with the weather',
    'thing you finish slowly',
  ],
  lede: 'We design and plant gardens meant to look better in their fifth year than their first. Drawn to the aspect and the soil you actually have, then maintained through the seasons rather than photographed once and abandoned.',
  primary: { label: 'Book a site visit', target: '#contact' },
  secondary: { label: 'See recent gardens', target: '#work' },
  stats: [
    { value: '180+', label: 'Gardens planted' },
    { value: '14 yrs', label: 'Designing' },
    { value: '92%', label: 'Stay on maintenance' },
    { value: '3', label: 'Regional awards' },
  ],
  image: 'https://picsum.photos/seed/hedgerow-hero-garden/1400/700',
  imageAlt: 'A long lawn running up to a clipped hedge in late afternoon light',
}

export interface Counter {
  value: number
  suffix?: string
  label: string
}

export const counters: Counter[] = [
  { value: 180, label: 'Gardens designed and planted' },
  { value: 14, label: 'Years in practice' },
  { value: 92, suffix: '%', label: 'Clients who stay on a maintenance plan' },
  { value: 3, label: 'Awards at regional shows' },
]

export interface Project {
  place: string
  title: string
  brief: string
  work: string
  plot: string
  onSite: string
  budget: string
  before: string
  after: string
  /** Only the second case flips its figure to the right on wide screens. */
  flipped: boolean
}

export const work = {
  chip: 'Recent gardens',
  title: 'Three we finished this year',
  lede: 'With the brief, the budget and how long we were actually on site.',
  items: [
    {
      place: 'Widcombe, Bath',
      title: 'A north-facing courtyard that had given up',
      brief:
        'A walled courtyard in permanent shade, previously gravel over membrane with three dead bay trees. The client wanted somewhere to eat outside and had been told repeatedly that nothing would grow.',
      work: 'Raised the levels with imported topsoil, planted a shade palette built around ferns, hydrangea and Japanese anemone, and laid a limestone terrace that reflects what light there is. The bay trees were replaced with multi-stem amelanchier.',
      plot: '8 × 6 m',
      onSite: '4 weeks',
      budget: '£18,400',
      before: 'https://picsum.photos/seed/hedgerow-widcombe-before/600/800',
      after: 'https://picsum.photos/seed/hedgerow-widcombe-after/600/800',
      flipped: false,
    },
    {
      place: 'Oldfield Park',
      title: 'A long thin garden with nowhere to sit',
      brief:
        'The classic Victorian terrace plot — six metres wide, thirty long, and a lawn down the middle that made it feel like a corridor. Two children and a dog, so it had to survive being used.',
      work: 'Broke the length into three rooms with hornbeam hedging, moved the seating to the sunny middle third rather than the far end, and kept a proper lawn for the children. Deep borders on the west boundary do the heavy lifting.',
      plot: '6 × 30 m',
      onSite: '6 weeks',
      budget: '£31,000',
      before: 'https://picsum.photos/seed/hedgerow-oldfield-before/600/800',
      after: 'https://picsum.photos/seed/hedgerow-oldfield-after/600/800',
      flipped: true,
    },
    {
      place: 'Combe Down',
      title: 'A sloping plot on thin limestone soil',
      brief:
        'A one-in-six slope over free-draining limestone that had defeated two previous planting schemes. The client had spent a great deal on plants that wanted moisture the site could never give them.',
      work: 'Terraced into three levels with dry-stone retaining, then planted almost entirely with Mediterranean and chalk-tolerant species. Nothing in the scheme needs irrigation after its first summer, which is the whole point.',
      plot: '400 m²',
      onSite: '9 weeks',
      budget: '£46,500',
      before: 'https://picsum.photos/seed/hedgerow-combe-before/600/800',
      after: 'https://picsum.photos/seed/hedgerow-combe-after/600/800',
      flipped: false,
    },
  ] as Project[],
}

export interface Plant {
  name: string
  tag: string
  latin: string
  aspect: string
  height: string
  interest: string
}

export const planting = {
  chip: 'Planting',
  title: 'A palette that suits the site you have',
  lede: 'Six plants we return to constantly, and the conditions each actually wants. The most expensive mistake in a garden is a plant in the wrong aspect.',
  items: [
    {
      name: 'Amelanchier',
      tag: 'Structure',
      latin: 'Amelanchier lamarckii',
      aspect: 'Sun or part shade',
      height: '4–6 m',
      interest: 'Three seasons',
    },
    {
      name: 'Japanese anemone',
      tag: 'Late colour',
      latin: 'Anemone × hybrida',
      aspect: 'Part or full shade',
      height: '90 cm',
      interest: 'Aug–Oct',
    },
    {
      name: "Hart's tongue fern",
      tag: 'Ground cover',
      latin: 'Asplenium scolopendrium',
      aspect: 'Full shade',
      height: '45 cm',
      interest: 'Evergreen',
    },
    {
      name: 'Russian sage',
      tag: 'Drought planting',
      latin: 'Salvia yangii',
      aspect: 'Full sun, sharp drainage',
      height: '1.2 m',
      interest: 'Jul–Sep',
    },
    {
      name: 'Hornbeam',
      tag: 'Hedging',
      latin: 'Carpinus betulus',
      aspect: 'Any but waterlogged',
      height: 'To 4 m clipped',
      interest: 'Winter marcescence',
    },
    {
      name: 'Box-leaved holly',
      tag: 'Low hedging',
      latin: 'Ilex crenata',
      aspect: 'Sun or part shade',
      height: '40–60 cm',
      interest: 'Evergreen',
    },
  ] as Plant[],
  callout:
    'We plant for the soil and aspect rather than the photograph. If your site is dry shade we will tell you that hydrangeas will sulk, however much you like them, and suggest something that will not.',
}

export interface Season {
  name: string
  months: string
  /** The header tint escalates with the year: pale, pale, deep, deep. */
  header: string
  summary: string
  jobs: string[]
}

export const calendar = {
  chip: 'Through the year',
  title: 'What actually happens, and when',
  lede: 'Garden maintenance is not one job repeated monthly. Each season has its own short list, and doing them at the wrong time is worse than not doing them.',
  seasons: [
    {
      name: 'Spring',
      months: 'Mar – May',
      header: 'bg-primary-100 text-primary-900',
      summary: 'Everything wants doing at once, and half of it can wait.',
      jobs: [
        'Mulch borders before growth closes them in',
        'Cut back grasses and perennials left for winter',
        'Divide congested clumps as they wake',
        'First mow, blades set high',
      ],
    },
    {
      name: 'Summer',
      months: 'Jun – Aug',
      header: 'bg-accent-100 text-accent-900',
      summary: 'Mostly watering, deadheading and standing still looking at it.',
      jobs: [
        'Water new planting deeply, not often',
        'Deadhead repeat-flowering roses',
        'Trim formal hedges after nesting ends',
        'Feed pots fortnightly',
      ],
    },
    {
      name: 'Autumn',
      months: 'Sep – Nov',
      header: 'bg-primary-700 text-white',
      summary: 'The best planting season, and the one everybody misses.',
      jobs: [
        'Plant trees and shrubs into warm soil',
        'Lift and divide herbaceous perennials',
        'Plant spring bulbs, late in the window',
        'Clear leaves off lawns, not off borders',
      ],
    },
    {
      name: 'Winter',
      months: 'Dec – Feb',
      header: 'bg-accent-800 text-white',
      summary: 'Structural work, while you can see the bones.',
      jobs: [
        'Prune apples, pears and wisteria',
        'Renovate overgrown deciduous shrubs',
        'Repair fences, paths and edging',
        'Leave seedheads standing for the birds',
      ],
    },
  ] as Season[],
  note: 'The single most common mistake we correct is pruning at the wrong moment — cutting spring shrubs in winter removes the flowers, and cutting hedges in late spring disturbs nesting birds, which is also an offence.',
}

export interface Plan {
  name: string
  visits: string
  price: string
  blurb: string
  features: string[]
  /** The middle tier is the only filled card and carries the only solid CTA. */
  featured: boolean
}

export const plans = {
  chip: 'Maintenance',
  title: 'Looking after it afterwards',
  lede: 'A planting scheme is a plan for ten years. It needs someone who knows what was planted and why.',
  items: [
    {
      name: 'Seasonal',
      visits: 'Four visits a year',
      price: '£840',
      blurb: 'Established gardens that mostly need the right job done at the right moment.',
      features: [
        'One visit each season',
        'Pruning to the correct timing',
        'Border edging and mulching',
        'A written note of what we did and why',
      ],
      featured: false,
    },
    {
      name: 'Fortnightly',
      visits: 'Twenty-four visits a year',
      price: '£2,980',
      blurb: 'Planted gardens with lawns and borders that want keeping on top of.',
      features: [
        'Everything in Seasonal',
        'Mowing and lawn care through the season',
        'Continuous weeding and deadheading',
        'Pots and containers maintained',
        'Priority on storm damage',
      ],
      featured: true,
    },
    {
      name: 'Estate',
      visits: 'Weekly, plus project days',
      price: '£7,400',
      blurb: 'Larger plots, or gardens still being developed year on year.',
      features: [
        'Everything in Fortnightly',
        'Weekly visits March to October',
        'Two project days a year for new planting',
        'Annual review and updated planting plan',
        'Direct line to the designer',
      ],
      featured: false,
    },
  ] as Plan[],
  note: 'All plans include the same team each visit. Nobody arrives who has not seen your garden before, which matters enormously the first time somebody has to decide whether a plant is dying or dormant.',
}

export interface Review {
  quote: string
  name: string
  place: string
}

export const testimonials = {
  chip: 'Clients',
  title: 'What people say a few years on',
  lede: 'The only review that means anything is one written after the garden has had time to settle.',
  items: [
    {
      quote:
        'Four years in and it looks like it has always been there, which I now understand was the entire point of the drawings we spent so long on.',
      name: 'Helena Cross',
      place: 'Widcombe',
    },
    {
      quote:
        'They told us not to buy the tree we had set our hearts on because the soil was wrong. That is when I decided to trust them.',
      name: 'Ravi Chandra',
      place: 'Oldfield Park',
    },
    {
      quote:
        'The same two people have looked after it since it went in. They know which plants are meant to look dead in March.',
      name: 'Sue Pemberton',
      place: 'Combe Down',
    },
  ] as Review[],
}

export interface Faq {
  question: string
  answer: string
}

export const faq = {
  chip: 'Questions',
  title: 'Before you get in touch',
  lede: 'Mostly about time and money, which is reasonable.',
  items: [
    {
      question: 'What does a design cost?',
      answer:
        'A concept plan for a typical town garden is £1,200 to £2,400 depending on size and complexity, and includes a site survey, a scale drawing and a planting plan. That fee is deducted from the build cost if you go on to have us do the work.',
    },
    {
      question: 'How long from first visit to finished garden?',
      answer:
        'Six to ten weeks for design and drawings, then the build. We book construction roughly three months ahead. If you want planting in the autumn window, which is the best one, start the conversation in early summer.',
    },
    {
      question: 'Do I have to take a maintenance plan?',
      answer:
        'No. It is offered because a planting scheme is a ten-year plan and most schemes fail in year three from well-intentioned wrong pruning. Ninety-two percent of clients stay on one, but nobody is obliged to.',
    },
    {
      question: 'Can you work with a garden we already have?',
      answer:
        'Usually, and often that is the better job. Mature structure is worth a great deal and takes decades to replace. We would rather keep a good hedge and rework around it than clear a site for the sake of a clean drawing.',
    },
    {
      question: 'What if a plant dies?',
      answer:
        'Anything we supply and plant is replaced free in its first two years, provided the garden has been maintained — by us or by you following the plan. Plants die, and after two years it is usually the conditions rather than the plant.',
    },
  ] as Faq[],
}

export const closing = {
  title: 'The best planting window is autumn',
  lede: 'Book a site visit now and there is time to design, draw and plant before the soil cools.',
  primary: { label: 'Book a site visit', target: '#contact' },
  secondary: { label: 'See what a plan includes', target: '#maintenance' },
}

export const footer = {
  blurb:
    'Garden design, planting schemes and seasonal maintenance — drawn properly, planted for the aspect, and looked after through the year.',
  columns: [
    {
      title: 'Garden',
      links: [
        { label: 'Garden design', target: '#work' },
        { label: 'Planting plans', target: '#planting' },
        { label: 'Seasonal care', target: '#calendar' },
        { label: 'Maintenance plans', target: '#maintenance' },
      ],
    },
    {
      title: 'Practice',
      links: [
        { label: 'About', target: '#about' },
        { label: 'Journal', target: '#planting' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', target: '#contact' },
        { label: 'Questions', target: '#faq' },
      ],
    },
  ],
  newsletter: {
    title: 'Stay updated',
    label: 'Email address',
    placeholder: 'you@example.com',
    cta: 'Subscribe',
    invalid: 'Enter an email address with an @ in it.',
    valid: 'Thank you — you are on the list.',
  },
  legal: [
    { label: 'Privacy Policy', target: '#top' },
    { label: 'Terms of Service', target: '#top' },
    { label: 'Style Guide', target: '#about' },
  ],
  more: 'More templates at Component Dock',
  socials: [
    { label: 'Hedgerow on Instagram', path: 'instagram' },
    { label: 'Hedgerow on X', path: 'x' },
    { label: 'Hedgerow on LinkedIn', path: 'linkedin' },
  ] as const,
}

export const mobileBar = {
  call: 'Call now',
  book: 'Book a visit',
}

export const cookie = {
  text: 'We use cookies to remember your preferences on this site.',
  accept: 'Accept All',
  decline: 'Decline',
}
