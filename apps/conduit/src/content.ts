/**
 * Every word on the page lives here: the survey card and the comparison table are
 * the template's argument, so their copy is data rather than markup — the rows
 * carry which column is emphasised, which is what keeps the counting note true.
 */

export const site = {
  name: 'Conduit',
  descriptor: 'Pipe relining',
  phone: '(555) 070-0700',
  phoneHref: 'tel:5550700700',
  email: 'office@conduitrelining.example',
  address: '3110 North Florida Avenue, Tampa, FL 33603',
  city: 'Tampa, FL',
  area: 'Hillsborough & Pinellas',
  licence: 'FL CFC #0000000',
  rating: '4.9',
  reviews: '180+ reviews on Google · sample data',
  componentDock: 'https://www.componentdock.com/',
} as const

export const NAV = [
  { label: 'How it works', href: '#process' },
  { label: 'Compare', href: '#compare' },
  { label: 'Services', href: '#services' },
  { label: 'Service areas', href: '#areas' },
  { label: 'About', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  eyebrow: 'Tampa · Licensed CFC contractor',
  headline: 'Fix the pipe.',
  headlineAccent: 'Keep the driveway.',
  lead: 'Most collapsed sewer lines under a Tampa house can be relined from two small access points. No trench across the lawn, no three days of a machine on your drive, and the oak stays where it is.',
  promises: [
    'Camera survey before anyone quotes a repair',
    'You see the footage, not a description of it',
    'We will tell you when digging is the better answer',
    'Fifty-year liner warranty in writing',
  ],
  card: {
    title: 'Book a camera survey',
    promise: 'Three fields. We reply within the hour on weekdays.',
    footnote: 'No obligation. The footage is yours whether or not you hire us.',
    submit: 'Book the survey',
  },
} as const

export const SURVEY_PROBLEMS = [
  'Sewage backing up',
  'Repeated blockages',
  'Slow drains across the house',
  'Roots in the line',
  'Wet patch or sinkhole in the yard',
  'Failed inspection on a sale',
  'Something else',
] as const

export const emergency = {
  kicker: 'Sewage backing up? Call today',
  headline: 'We clear and camera the same day, then quote the repair properly.',
  body: 'Clearing the blockage and diagnosing the cause are two different jobs. We do the first today so you can use the house, then show you the camera footage before anyone talks about a repair.',
  callBar: 'Sewage backing up? Call today',
} as const

export type CompareWinner = 'relining' | 'openCut' | 'neutral'

export interface CompareRow {
  label: string
  relining: string
  openCut: string
  winner: CompareWinner
}

/**
 * Nine rows, and the emphasis is content: the dig wins three of them and one row
 * (life expectancy) is deliberately neutral so that "5 rows and 3 rows" adds up
 * to the nine rows on the page.
 */
export const COMPARE_ROWS: CompareRow[] = [
  {
    label: 'Days on site',
    relining: 'One day for most laterals, two if there are several bends.',
    openCut: 'Two to five, longer if the run passes under a drive or a wall.',
    winner: 'relining',
  },
  {
    label: 'What happens to the surface',
    relining: 'Two access points, usually under a metre square each.',
    openCut: 'A trench the length of the pipe, plus room for spoil and the machine.',
    winner: 'relining',
  },
  {
    label: 'Reinstating the surface',
    relining: 'Nothing to reinstate beyond the access points.',
    openCut: 'Driveway, path or lawn rebuilt. Often the largest line on the invoice.',
    winner: 'relining',
  },
  {
    label: 'Mature trees',
    relining: 'Roots are cut out of the pipe and the root plate is left alone.',
    openCut: 'A trench within the root plate can kill a mature tree two seasons later.',
    winner: 'relining',
  },
  {
    label: 'Headline price',
    relining: 'Higher per foot before reinstatement is counted.',
    openCut: 'Lower per foot, and genuinely cheaper on a short run in open ground.',
    winner: 'openCut',
  },
  {
    label: 'A collapsed or badly offset pipe',
    relining: 'A liner needs a host pipe. Where there is nothing left to line, it is not an option.',
    openCut: 'Works regardless of what is left, which is sometimes the whole point.',
    winner: 'openCut',
  },
  {
    label: 'Changing the route or the fall',
    relining: 'Follows the existing pipe exactly, including a bad gradient.',
    openCut: 'The only way to correct a fall or move a line.',
    winner: 'openCut',
  },
  {
    label: 'Life expectancy',
    relining: 'Fifty-year liner warranty, jointless, so roots have nothing to enter.',
    openCut: 'Comparable with modern pipe, with joints that roots can eventually find.',
    winner: 'neutral',
  },
  {
    label: 'Disruption to neighbours',
    relining: 'A van and a small rig for a day.',
    openCut: 'Machine, spoil heap and usually a shared drive blocked.',
    winner: 'relining',
  },
]

export const compare = {
  eyebrow: 'The decision',
  title: 'Relining against digging, row by row',
  lead: 'Both are real repairs and we do both. This is the comparison we would want if it were our house, including the rows where the digger wins.',
  columns: { relining: 'Relining', openCut: 'Open cut' },
  counting:
    'On this comparison relining wins 5 rows and open cut wins 3. We do both, and which one we quote depends on your pipe rather than on which pays better.',
  finePrint:
    'Figures are illustrative for a typical single-family lateral in this region. Your pipe, its depth and what is on top of it change all of them.',
} as const

export const process = {
  eyebrow: 'How a job goes',
  title: 'Nobody quotes a repair before the camera',
  lead: 'Four steps, and you can stop after the second with the footage in hand.',
  steps: [
    {
      title: 'Clear it, if it needs clearing',
      body: 'If sewage is backing up we deal with that today. You cannot make a decision about a repair while the house is unusable.',
      tag: 'Same day',
    },
    {
      title: 'Camera survey and a recording',
      body: 'We run the camera the length of the line, measure the depth and mark the faults on a plan. You get the recording, not a summary of it.',
      tag: '60 to 90 minutes',
    },
    {
      title: 'You get both prices',
      body: 'Relining and open cut, itemised, with reinstatement included in the dig price so the comparison is real.',
      tag: 'Within 1 working day',
    },
    {
      title: 'We do the work',
      body: 'Most laterals are a one-day reline. We camera it again afterwards and that recording is yours too.',
      tag: 'Usually 1 day',
    },
  ],
} as const

export const services = {
  eyebrow: 'What we do',
  title: 'Trenchless, and the things around it',
  lead: 'Relining is one method among several. Which one we quote depends on your pipe.',
  items: [
    {
      title: 'Cured-in-place lining',
      body: 'A resin liner pulled through the existing pipe and cured in place, forming a new jointless pipe inside the old one.',
      price: 'From $135 per foot',
    },
    {
      title: 'Pipe bursting',
      body: 'For pipes too far gone to line. The old pipe is split outwards and a new one pulled through behind it, with two access pits rather than a trench.',
      price: 'From $165 per foot',
    },
    {
      title: 'Camera survey and report',
      body: 'The recording, a plan with the faults marked, and depths. Yours to keep and to show another contractor.',
      price: 'From $295',
    },
    {
      title: 'Hydro jetting and root cutting',
      body: 'Clearing what is in the pipe before anything is decided. On a line with years left in it, sometimes this is the whole job.',
      price: 'From $395',
    },
    {
      title: 'Spot repairs',
      body: 'A short liner over a single fault where the rest of the run is sound. The cheapest honest answer when it applies.',
      price: 'From $1,450',
    },
    {
      title: 'Open cut replacement',
      body: 'We dig when digging is right: collapsed lines, bad gradients and reroutes. Reinstatement is quoted in, not added afterwards.',
      price: 'Quoted after survey',
    },
  ],
  footnote: 'Starting prices are sample data for demonstration. Replace with your own before launch.',
} as const

export const whyUs = {
  eyebrow: 'Why us',
  title: 'We will talk you out of the expensive one',
  lead: 'Relining pays us better than jetting. That is exactly why the camera comes before the quote.',
  caption:
    'Replace with a still from one of your own camera surveys before launch. It is the most persuasive image this business has.',
  rules: [
    {
      term: 'The footage is yours',
      detail:
        'Recording and plan, sent to you, whether or not you hire us. Take it to two other contractors. We would rather compete on the same evidence than on who describes it most alarmingly.',
    },
    {
      term: 'Both prices, every time',
      detail:
        'Reline and open cut, with reinstatement included in the dig figure. A trenchless quote that hides the cost of putting your driveway back is not a comparison.',
    },
    {
      term: 'Sometimes the answer is jetting',
      detail:
        'Plenty of lines we survey have years left and need clearing rather than replacing. We say so, and it costs us the bigger job.',
    },
    {
      term: 'We camera it afterwards too',
      detail:
        'The same line, filmed again after the work, sent to you with the warranty. Very little in this trade is checkable. This is.',
    },
  ],
} as const

export const areas = {
  title: 'Where we work',
  lead: 'Hillsborough and Pinellas counties. The rig travels, but a same-day camera survey realistically reaches the towns on this list.',
  towns: [
    'Tampa',
    'St. Petersburg',
    'Clearwater',
    'Brandon',
    'Riverview',
    'Temple Terrace',
    'Plant City',
    'Largo',
    'Pinellas Park',
    'Lutz',
    'Valrico',
    'Apollo Beach',
  ],
  note: 'Replace this list with your own towns. Written as plain text it is the cheapest local search signal a trade site has.',
} as const

export const testimonials = {
  badge: 'Reviews',
  title: 'What people say afterwards',
  lead: 'Sample reviews for demonstration. Replace with your own, ideally pulled from Google.',
  items: [
    {
      quote:
        'Two companies quoted to dig up the drive. Conduit put a camera down, showed me it was roots at one joint, cut them out and lined eight feet. A fifth of the price.',
      name: 'Marguerite O.',
      location: 'Seminole Heights',
    },
    {
      quote:
        'They told me my line was too far gone to reline and quoted the dig. I appreciated that more than the sales pitch I got from the trenchless-only outfit.',
      name: 'Danny K.',
      location: 'Brandon',
    },
    {
      quote:
        'The before and after footage arrived by email with the warranty. I have never had a contractor hand me evidence before.',
      name: 'Priya S.',
      location: 'Clearwater',
    },
  ],
} as const

export const faq = {
  badge: 'Questions',
  title: 'Before you decide',
  lead: 'The things people ask once they have two very different quotes in front of them.',
  items: [
    {
      question: 'Is relining always cheaper?',
      answer:
        'No. On a short run in open ground with nothing on top of it, digging is often cheaper and we will say so. Relining wins when the pipe runs under a driveway, a slab, a mature tree or a neighbour’s access, because that is where reinstating the surface costs more than the pipe.',
    },
    {
      question: 'How long does a liner last?',
      answer:
        'The manufacturer warranty on the liners we fit is fifty years. The more useful point is that it is jointless, and joints are where roots get in, so the failure mode that put you here does not apply to it.',
    },
    {
      question: 'Does it make the pipe narrower?',
      answer:
        'Slightly, and it does not matter. The liner is a few millimetres thick and its inside surface is far smoother than old clay or cast iron, so flow is usually better afterwards, not worse.',
    },
    {
      question: 'Can you line any pipe?',
      answer:
        'No. A liner needs a host pipe to form against. If the line has collapsed, is badly offset or has lost its shape, there is nothing to line and we will quote the dig instead.',
    },
    {
      question: 'Will you fix a bad gradient?',
      answer:
        'Not by relining. A liner follows the existing pipe exactly, including a fall that is too shallow. Correcting a gradient means digging, and any company telling you otherwise is selling you a repair that will back up again.',
    },
  ],
} as const

export const contact = {
  title: 'Two quotes that do not agree?',
  lead: 'Book the camera survey and we will send you the footage, both prices and an honest recommendation.',
  primary: 'Book a camera survey',
  secondary: 'Call (555) 070-0700',
} as const

export const footer = {
  blurb:
    'Trenchless sewer and drain repair in Tampa. We reline the pipe you have instead of removing your driveway, and we say when digging is the better answer.',
  columns: [
    {
      heading: 'Services',
      links: [
        { label: 'Pipe relining', href: '#services' },
        { label: 'Pipe bursting', href: '#services' },
        { label: 'Camera surveys', href: '#services' },
        { label: 'Open-cut replacement', href: '#services' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'How it works', href: '#process' },
        { label: 'Compare methods', href: '#compare' },
        { label: 'Service areas', href: '#areas' },
        { label: 'About', href: '#why-us' },
      ],
    },
    {
      heading: 'Support',
      links: [
        { label: 'Contact', href: '#contact' },
        { label: 'Privacy', href: '#contact' },
        { label: 'Terms', href: '#contact' },
      ],
    },
  ],
  newsletter: {
    heading: 'Stay Updated',
    blurb:
      'Seasonal maintenance reminders and plain-English notes on what actually needs doing before winter.',
    placeholder: 'Enter your email',
    button: 'Subscribe',
    success: 'You are on the list. One note a season, nothing else.',
  },
  copyright: '© 2026 Conduit Pipe Relining. All rights reserved.',
  legal: [
    { label: 'Privacy Policy', href: '#contact' },
    { label: 'Terms of Service', href: '#contact' },
  ],
  attribution: 'More templates at Component Dock',
} as const
