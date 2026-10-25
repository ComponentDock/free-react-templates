export const site = {
  name: 'Nightwatch',
  descriptor: 'Commercial cleaning',
  heroTitle: 'Nightwatch',
  phone: '(555) 050-0500',
  phoneHref: 'tel:+15550500500',
  email: 'proposals@nightwatchclean.example',
  address: '1230 North Capitol Avenue, Indianapolis, IN 46204',
  city: 'Indianapolis, IN',
  componentDock: 'https://www.componentdock.com/',
} as const

export const LICENCE_FACTS = [
  { lead: 'Bonded and insured', strong: '$2M general liability' },
  { lead: 'Every cleaner background checked', strong: '' },
  { lead: 'Serving', strong: 'Central Indiana' },
] as const

export const NAV = [
  { label: 'Services', href: '#scope' },
  { label: 'Industries', href: '#industries' },
  { label: 'How we price', href: '#proposal' },
  { label: 'Our people', href: '#why-us' },
  { label: 'About', href: '#process' },
  { label: 'Blog', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO = {
  eyebrow: 'Indianapolis · Bonded, insured, background checked',
  headline: 'Square footage in.',
  headlineAccent: 'A number out.',
  lead: 'You are comparing three bids and none of them will give you a figure without a site visit. We looked at 49 cleaning companies and not one showed a price. Put your building in below, get an indicative monthly range now, and a written proposal within one working day.',
  promises: [
    'An indicative range before you speak to anyone',
    'Written proposal inside one working day',
    'Every cleaner background checked and badged',
    'One named account manager, not a call centre',
  ],
} as const

export const FACILITY_LABELS = [
  'Office',
  'Medical or dental',
  'School or childcare',
  'Industrial or warehouse',
  'Retail or showroom',
  'Gym or studio',
] as const

export type FacilityLabel = (typeof FACILITY_LABELS)[number]

/** Cents per cleanable square foot per month at a five-night schedule. */
export const FACILITY_RATE: Record<FacilityLabel, number> = {
  Office: 20,
  'Medical or dental': 34,
  'School or childcare': 26,
  'Industrial or warehouse': 12,
  'Retail or showroom': 22,
  'Gym or studio': 30,
}

export const FREQUENCY_LABELS = [
  'Once a week',
  'Twice a week',
  'Three nights',
  'Five nights',
] as const

export type FrequencyLabel = (typeof FREQUENCY_LABELS)[number]

/** Sub-linear on purpose: frequency does not scale the rate linearly. */
export const FREQUENCY_FACTOR: Record<FrequencyLabel, number> = {
  'Once a week': 0.32,
  'Twice a week': 0.52,
  'Three nights': 0.7,
  'Five nights': 1,
}

export const EXTRA_LABELS = [
  'Restroom consumables',
  'Monthly floor care',
  'Interior glass',
  'Day porter, 4 hours',
] as const

export type ExtraLabel = (typeof EXTRA_LABELS)[number]

export const EXTRA_MONTHLY: Record<ExtraLabel, number> = {
  'Restroom consumables': 180,
  'Monthly floor care': 340,
  'Interior glass': 120,
  'Day porter, 4 hours': 2400,
}

export const ESTIMATE_DEFAULTS = {
  facility: 'Office' as FacilityLabel,
  size: '12000',
  frequency: 'Five nights' as FrequencyLabel,
} as const

export const ESTIMATOR = {
  title: 'Price your building',
  subLine: 'Four answers. The range updates as you type.',
  sizeLabel: 'Cleanable square footage',
  rangeLabel: 'Indicative monthly range',
  caveat:
    'A range, not a quote. The proposal that follows a walkthrough is a single number, and it is the one we hold.',
  submit: 'Request the written proposal',
  finePrint:
    'Sample estimator for demonstration. No card, no obligation, and no sales call before the proposal lands.',
  confirmation:
    'Thank you. A written proposal follows within one working day. This is a demo confirmation — connect the form to your CRM.',
} as const

export const SCOPE = {
  eyebrow: 'The scope',
  title: 'What “nightly cleaning” actually means',
  lead: 'Every proposal in this category says “thorough” and “detail-oriented”. Neither of those is a frequency. This is the document you should be comparing bids on, and ours is published before you ask for it.',
  header: 'Standard office scope. Frequencies shown are for a five-night schedule.',
  rows: [
    ['Trash and recycling', 'Every visit. Liners replaced when soiled, not on a rota.'],
    ['Restrooms', 'Every visit. Fixtures disinfected, dispensers filled, floors machine-mopped not spot-mopped.'],
    ['Vacuuming, traffic lanes', 'Every visit.'],
    ['Vacuuming, full coverage including under desks', 'Weekly.'],
    ['Hard floor damp mop', 'Every visit in kitchens and restrooms, weekly elsewhere.'],
    ['Kitchen and break room', 'Every visit. Counters, sinks, table tops, appliance exteriors.'],
    ['Glass, interior partitions', 'Weekly, plus spot cleaning every visit.'],
    ['High and low dusting', 'Monthly and weekly respectively. Most bids omit high dusting entirely.'],
    ['Vents and diffusers', 'Quarterly.'],
    ['Floor burnishing or buffing', 'Monthly, quoted as an extra rather than assumed.'],
    ['Carpet extraction', 'Twice a year, quoted separately.'],
  ],
  note: 'Sample scope for demonstration. Replace with your own before launch. The proposal you receive lists every task at the frequency agreed for your building.',
} as const

export const INDUSTRIES = {
  eyebrow: 'Who we clean for',
  title: 'Six building types, priced differently for a reason',
  lead: 'A dental surgery and an empty warehouse are not the same job at the same square footage, so they do not carry the same rate. Every figure below is per cleanable square foot per month at five nights a week.',
  cells: [
    {
      title: 'Office',
      blurb: 'Open-plan floors, meeting rooms and a kitchen that gets used at lunch. Vacuumed nightly.',
      rate: 20,
    },
    {
      title: 'Medical and dental',
      blurb: 'Clinical surfaces, waiting areas and treatment rooms to a documented frequency.',
      rate: 34,
    },
    {
      title: 'School or childcare',
      blurb: 'Classrooms, halls and washrooms cleaned outside teaching hours, child-safe products.',
      rate: 26,
    },
    {
      title: 'Industrial or warehouse',
      blurb: 'Large floors on a ride-on scrubber, racking aisles and staff facilities on rotation.',
      rate: 12,
    },
    {
      title: 'Retail or showroom',
      blurb: 'Glass, floors and fitting rooms finished before the doors open.',
      rate: 22,
    },
    {
      title: 'Gym or studio',
      blurb: 'Changing rooms, mats and equipment touch points twice a day on weekdays.',
      rate: 30,
    },
  ],
  note: 'Starting rates are sample data for demonstration. Replace with your own before launch.',
} as const

export const WHY_US = {
  eyebrow: 'Our people',
  title: 'Turnover is the product',
  lead: 'Industry turnover in janitorial runs high enough that “who is cleaning my building this month” is a real question. Almost every quality problem in this trade traces back to it.',
  caption: 'Replace with a photograph of your own crew before launch.',
  panelCaption: 'Yellow is your named crew. Grey is relief, and you are told in advance.',
  rules: [
    {
      title: 'We pay above the local average',
      body: 'It is the single highest-leverage thing a janitorial company can do about quality, and it is the reason our price is rarely the lowest of the three you are comparing.',
    },
    {
      title: 'The same crew, named on your account',
      body: 'You get the names and you meet them at the walkthrough. If somebody is covering, you are told in advance rather than finding a stranger in the building.',
    },
    {
      title: 'Background checked and badged',
      body: 'Every cleaner, checked before their first shift and badged on site. Certificates go to you before the contract starts, not when you ask.',
    },
    {
      title: 'Supervised, and the log proves it',
      body: 'A supervisor walks each site weekly and records it. You see the log. An unsupervised night crew is how a contract quietly degrades over six months.',
    },
  ],
} as const

export const ROSTER_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] as const

/** Five weeks of cover. `true` marks a relief night, `false` the named crew. */
export const ROSTER_RELIEF: readonly (readonly boolean[])[] = [
  [false, false, false, true, true],
  [false, false, false, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false],
  [true, false, false, false, false],
]

export const ROSTER = {
  title: 'The same crew, twelve months',
  crewInitials: 'AK',
  reliefInitials: 'rl f',
  footnote: 'Yellow is your named crew. Grey is relief, and you are told in advance.',
} as const

export const PROCESS = {
  eyebrow: 'How it goes',
  title: 'From the form to the first night',
  lead: 'Four steps, and the first one you can do on this page.',
  steps: [
    {
      title: 'You price it here',
      body: 'Building type, square footage, frequency and any extras. You get an indicative range immediately and a written proposal within one working day.',
      tag: 'Under two minutes',
    },
    {
      title: 'We walk the building',
      body: 'Usually within three working days. We measure what is actually cleanable, which is normally less than the leased area, and that is what you are billed on.',
      tag: '30 to 60 minutes',
    },
    {
      title: 'You get one number and a scope',
      body: 'A single monthly figure, with every task and its frequency listed. If you are comparing bids, this is the document to compare.',
      tag: 'Within 1 working day of the walk',
    },
    {
      title: 'We start, supervised',
      body: 'A supervisor is on site for the first week and weekly thereafter, with the log shared with you. Your account manager is named on the contract.',
      tag: 'Usually within 2 weeks',
    },
  ],
} as const

export const AREAS = {
  title: 'Where we work',
  lead: 'Central Indiana, with crews based on both sides of the I-465 loop. We take buildings within about forty minutes of a depot, because a night crew that travels too far starts late.',
  towns: [
    'Indianapolis',
    'Carmel',
    'Fishers',
    'Noblesville',
    'Zionsville',
    'Avon',
    'Greenwood',
    'Plainfield',
    'Brownsburg',
    'Westfield',
    'Speedway',
    'Beech Grove',
    'Franklin',
    'Danville',
  ],
  note: 'Replace this list with your own towns. Written as plain text it is the cheapest local search signal a services site has.',
} as const

export const TESTIMONIALS = {
  pill: 'References',
  title: 'What facilities managers say',
  note: 'Sample references for demonstration. Replace with your own, and get permission before naming a client.',
  cards: [
    {
      quote:
        'They were the only one of four bidders who gave me a number I could take to my director before the site visit. That alone shortened the process by two weeks.',
      name: 'Dana Whitfield',
      role: 'Facilities manager, professional services',
      initial: 'D',
    },
    {
      quote:
        'The scope document is the reason we switched. Our previous contract said “regular dusting” and it turned out that meant twice a year.',
      name: 'Ray Osei',
      role: 'Operations, medical group',
      initial: 'R',
    },
    {
      quote:
        'Same two people for eighteen months. In this industry that is genuinely unusual and it shows in the building.',
      name: 'Mel Kaminski',
      role: 'Office manager, software company',
      initial: 'M',
    },
  ],
} as const

export const FAQ = {
  pill: 'Questions',
  title: 'Before you request a proposal',
  note: 'The things procurement asks, answered here.',
  items: [
    {
      question: 'Why publish rates at all?',
      answer:
        'Because you are comparing three bids and none of the others will give you a figure. Of 49 cleaning companies we looked at, five asked for square footage anywhere in the quote flow, and it is the single biggest driver of the number they were about to send you. A range costs us nothing and saves you a fortnight.',
    },
    {
      question: 'Is the range the price?',
      answer:
        'No, and we would rather say so twice. It is derived from square footage, building type and frequency. The walkthrough finds the things that move it: how much of the floor is actually carpet, how many restrooms, whether there is a loading dock, how the building is accessed at night.',
    },
    {
      question: 'What is a cleanable square foot?',
      answer:
        'The area we actually clean, which excludes leased-but-empty space, elevator shafts, mechanical rooms and anything you exclude. It is usually meaningfully less than the leased area, and billing on leased area is one of the quiet ways a bid gets inflated.',
    },
    {
      question: 'Are your staff employees or subcontractors?',
      answer:
        'Employees, paid above the local average, background checked and badged. It costs more than the subcontract model and it is the reason the same people are in your building next year.',
    },
    {
      question: 'What insurance do you carry?',
      answer:
        'Two million dollars general liability, workers compensation and a janitorial bond. Certificates go to you before the contract starts. Ask every bidder for these up front, because the cheapest bid in this category is sometimes the uninsured one.',
    },
    {
      question: 'Can you cover at short notice?',
      answer:
        'We hold relief crews seven nights a week, charged at the standard nightly rate with no premium. If we cannot staff it we will tell you within the hour rather than send somebody who has never been in your building.',
    },
  ],
} as const

export const CONTACT = {
  title: 'Comparing bids and missing a number?',
  lead: 'Put your square footage in and you will have a range in about a minute, and a written proposal tomorrow.',
  primary: 'Price your building',
  secondary: 'Call (555) 050-0500',
} as const

export const FOOTER = {
  blurb:
    'Commercial janitorial services in Indianapolis. Tell us the square footage and the frequency, and get a written proposal within one working day.',
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'Nightly janitorial', href: '#scope' },
        { label: 'Floor care', href: '#industries' },
        { label: 'Day porters', href: '#process' },
        { label: 'Disinfection', href: '#faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#process' },
        { label: 'Industries', href: '#industries' },
        { label: 'Our people', href: '#why-us' },
        { label: 'Reviews', href: '#testimonials' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Request a proposal', href: '#proposal' },
        { label: 'How we price', href: '#proposal' },
        { label: 'Contact', href: '#contact' },
        { label: 'Privacy', href: '#faq' },
        { label: 'Terms', href: '#faq' },
      ],
    },
  ],
  newsletterTitle: 'Stay Updated',
  newsletterBlurb:
    'Seasonal maintenance reminders and plain-English notes on what actually needs doing before winter.',
  newsletterCta: 'Subscribe',
  copyright: '© 2026 Nightwatch Commercial Cleaning. All rights reserved.',
  legal: [
    { label: 'Privacy Policy', href: '#faq' },
    { label: 'Terms of Service', href: '#faq' },
  ],
} as const
