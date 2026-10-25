/**
 * Every string the page renders, in document order. Copy is the reference's
 * voice: plain, numerate, first person plural, and openly argumentative about
 * its own trade's recurring-revenue incentive.
 */

export const site = {
  name: 'Sealwise',
  subline: 'PEST CONTROL',
  phone: '(555) 040-0400',
  phoneHref: 'tel:+15550400400',
  email: 'office@sealwise.example',
  address: '2140 Tuckaseegee Road, Charlotte, NC 28208',
  componentDock: 'https://www.componentdock.com/',
} as const

export interface NavItem {
  label: string
  href: string
  /** The seven header links all resolve to a band that exists. */
  spy: boolean
}

export const nav: readonly NavItem[] = [
  { label: 'Pests', href: '#identify', spy: true },
  { label: 'Plans', href: '#plans', spy: true },
  { label: 'Services', href: '#why-us', spy: true },
  { label: 'Service areas', href: '#areas', spy: true },
  { label: 'About', href: '#process', spy: true },
  { label: 'Reviews', href: '#testimonials', spy: true },
  { label: 'Contact', href: '#contact', spy: true },
]

export const licenceBar = {
  items: [
    { label: 'Licence', value: 'NC SPCA #4127-P' },
    { label: 'Pesticide applicators certified', value: null },
    { label: 'Serving', value: 'Mecklenburg County' },
  ],
  rating: '4.8',
  reviews: '520+ reviews on Google · sample data',
} as const

export const header = {
  location: { label: 'Charlotte, NC', href: '#areas' },
  cta: 'Book a visit',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  themeToggle: 'Toggle dark mode',
} as const

export const hero = {
  kicker: 'Charlotte · Licensed structural pest control',
  titleLead: 'Tell us what you found.',
  titleTail: 'We will tell you the price.',
  lead: 'Pick the pest below and you get the treatment, the number of visits, the cost and whether the quarterly plan already covers it. Nothing to fill in, unless you would rather we called.',
  rating: '4.8',
  reviews: '520+ reviews on Google · sample data',
  checklist: [
    'A price before you speak to anyone',
    'Same-day visits for rodents and stinging insects',
    'We say when one treatment is enough',
    'Re-treat free if they come back inside the guarantee',
  ],
  card: {
    title: 'Prefer to just ask?',
    sub: 'Three fields. We reply within the hour on weekdays.',
    nameLabel: 'Your name',
    namePlaceholder: 'First and last name',
    phoneLabel: 'Phone',
    phonePlaceholder: '(555) 000-0000',
    problemLabel: 'What have you seen?',
    problemPlaceholder: 'Choose the closest match',
    problemOptions: [
      'Ants',
      'Roaches',
      'Mice or rats',
      'Termites',
      'Bed bugs',
      'Wasps or hornets',
      'Spiders',
      'Mosquitoes',
      'Something else',
    ],
    submit: 'Get my price',
    note: 'No obligation. We never sell your details.',
    nameError: 'Please give a name we can reply to.',
    phoneError: 'A phone number we can reach you on is required.',
    phoneInvalid: 'That number is too short. Include the area code.',
    problemError: 'Pick the closest match so we send the right price.',
    success: 'Thank you. We will call you back within the hour on weekdays.',
  },
} as const

export interface Pest {
  slug: string
  label: string
  sub: string
  lead: string
  visits: string
  price: string
  arrival: string
  /** Six of the nine are covered by the quarterly plan; three are not. */
  covered: boolean
  note: string
}

export const pests: readonly Pest[] = [
  {
    slug: 'ants',
    label: 'Ants',
    sub: 'Trails along baseboards or counters',
    lead: 'Interior and exterior treatment with a non-repellent the colony carries back, plus a perimeter barrier. Killing the trail alone does nothing.',
    visits: 'One, with a follow-up at 14 days if needed',
    price: 'From $145',
    arrival: 'Usually within 2 days',
    covered: true,
    note: 'Ants are the reason most people start the plan. Quarterly treatment keeps the barrier current and any call-back between visits is free.',
  },
  {
    slug: 'roaches',
    label: 'Roaches',
    sub: 'Seen at night, or droppings in cupboards',
    lead: 'Gel bait in harbourage points rather than spray, because spray scatters them into the walls. Growth regulator to break the next generation.',
    visits: 'Two to three, at 14-day intervals',
    price: 'From $220',
    arrival: 'Usually within 2 days',
    covered: true,
    note: 'German roaches are covered once the initial clean-out is done. The plan keeps the bait stations current.',
  },
  {
    slug: 'rodents',
    label: 'Mice and rats',
    sub: 'Droppings, gnawing, noise in the ceiling',
    lead: 'We find the entry points and seal them first. Trapping and removal, then a follow-up to confirm activity has stopped. Bait outside only.',
    visits: 'Two to four over three weeks',
    price: 'From $320',
    arrival: 'Same day if they are inside',
    covered: true,
    note: 'Exterior stations are maintained on the plan. Interior exclusion work is quoted separately because it is carpentry, not pest control.',
  },
  {
    slug: 'termites',
    label: 'Termites',
    sub: 'Mud tubes, blistered paint, discarded wings',
    lead: 'Full inspection, then either a liquid barrier or a monitored baiting system. We show you the evidence before quoting either.',
    visits: 'Inspection, treatment, then annual renewal',
    price: 'Quoted after inspection',
    arrival: 'Inspection within 3 days',
    covered: false,
    note: 'This one is quoted and treated on its own, because it needs a different product and a different follow-up.',
  },
  {
    slug: 'bedbugs',
    label: 'Bed bugs',
    sub: 'Bites in a line, dark spots on seams',
    lead: 'Heat treatment or a staged chemical programme depending on the property. We tell you honestly which the building suits and what you must do to prepare.',
    visits: 'One heat treatment, or three chemical visits',
    price: 'From $950',
    arrival: 'Inspection within 2 days',
    covered: false,
    note: 'This one is quoted and treated on its own, because it needs a different product and a different follow-up.',
  },
  {
    slug: 'wasps',
    label: 'Wasps and hornets',
    sub: 'A nest under the eaves or in the ground',
    lead: 'Nest treated and, where it is safe to reach, removed. We do not charge more for a nest that turns out to be high up.',
    visits: 'One',
    price: 'From $175',
    arrival: 'Same day',
    covered: true,
    note: 'One nest per year is included on the plan at no extra cost.',
  },
  {
    slug: 'spiders',
    label: 'Spiders',
    sub: 'Webs in corners, garages and crawl spaces',
    lead: 'Web removal and a perimeter treatment. Most spider problems are actually an insect problem, so we treat what they are eating too.',
    visits: 'One',
    price: 'From $145',
    arrival: 'Usually within 2 days',
    covered: true,
    note: 'Included, and it is the pest that improves most from treating the perimeter four times a year rather than once.',
  },
  {
    slug: 'mosquitoes',
    label: 'Mosquitoes',
    sub: 'Unusable yard from May onward',
    lead: 'Barrier treatment on foliage and resting sites, plus larvicide in any standing water we cannot drain.',
    visits: 'Monthly, April to October',
    price: 'From $65 per visit',
    arrival: 'Usually within 3 days',
    covered: false,
    note: 'This one is quoted and treated on its own, because it needs a different product and a different follow-up.',
  },
  {
    slug: 'fleas',
    label: 'Fleas',
    sub: 'Bites around the ankles, pets scratching',
    lead: 'Interior treatment with a growth regulator plus a yard treatment. Pets must be treated by your vet at the same time or it will not hold.',
    visits: 'Two, at 14 days',
    price: 'From $240',
    arrival: 'Usually within 2 days',
    covered: false,
    note: 'This one is quoted and treated on its own, because it needs a different product and a different follow-up.',
  },
]

export const finder = {
  kicker: 'Start here',
  title: 'What did you find?',
  lead: 'The answer changes completely depending on the pest, so the site should ask before it starts talking. The average site in this category names twelve pests and gives you no way to pick one. Prices are illustrative starting points for a typical single-family home.',
  labels: { visits: 'Visits', price: 'One-off price', arrival: 'We can be there' },
  coveredLabel: 'On the plan.',
  uncoveredLabel: 'Not on the plan.',
  ctaBook: 'Book this treatment',
  ctaPlan: 'See the quarterly plan',
  note: 'Sample pricing for demonstration. Every price assumes a standard single-family property; larger or heavily infested properties are quoted after an inspection.',
} as const

export const emergency = {
  kicker: 'Wasps, rodents or bed bugs? Call today',
  title: 'Same-day visits for stinging insects and rodents inside the house.',
  body: 'We tell you on the phone what the visit costs and what it covers. If a single treatment will fix it, we will say so rather than sell you a plan.',
} as const

export interface Plan {
  name: string
  price: string
  blurb: string
  features: readonly string[]
  cta: string
  featured: boolean
}

export const plans = {
  kicker: 'The quarterly plan',
  title: 'Four visits a year, and anything between them is free',
  lead: 'Most pests are a maintenance problem rather than an event. Of 35 companies we looked at, 21 sell a plan and 3 tell you what it costs. Sample pricing for demonstration.',
  badge: 'Most chosen',
  footnote:
    'Priced monthly, billed after each visit. Cancel with 30 days notice, no cancellation fee.',
  tiers: [
    {
      name: 'Sentry',
      price: '$39',
      blurb: 'The exterior barrier, kept current.',
      features: [
        'Four exterior treatments a year',
        'Ants, spiders, roaches and silverfish covered',
        'Free call-backs between visits',
        'Wasp nest once a year included',
      ],
      cta: 'Choose Sentry',
      featured: false,
    },
    {
      name: 'Sentry Plus',
      price: '$59',
      blurb: 'Adds rodents and the inside of the house.',
      features: [
        'Everything in Sentry',
        'Interior treatment on request',
        'Exterior rodent stations maintained',
        'Annual termite inspection',
        'Priority same-day booking',
      ],
      cta: 'Choose Sentry Plus',
      featured: true,
    },
    {
      name: 'Yard and Home',
      price: '$89',
      blurb: 'Adds the mosquito season.',
      features: [
        'Everything in Sentry Plus',
        'Monthly mosquito treatment, April to October',
        'Flea yard treatment included',
        '20% off bed bug and termite work',
      ],
      cta: 'Choose Yard and Home',
      featured: false,
    },
  ] as readonly Plan[],
  perMonth: 'per month',
} as const

export const whyUs = {
  kicker: 'How we work',
  title: 'We would rather treat once than sell you four',
  lead: 'The money in this trade is recurring, which gives every company a reason to put you on a plan whether or not you need one. Four of the 35 sites we looked at publish a price for anything at all.',
  caption: 'Replace with a photograph of your own technician and van before launch.',
  commitments: [
    {
      term: 'We will tell you one visit is enough',
      detail:
        'A wasp nest is one visit. A single mouse is usually one visit and some steel wool. We say so, and we do not make the price conditional on signing up for anything.',
    },
    {
      term: 'The price before the technician arrives',
      detail:
        'Every common treatment has a published starting price on this site. If your property changes it, we tell you on the phone, not on the doorstep.',
    },
    {
      term: 'Exclusion before poison',
      detail:
        'With rodents we find and seal the entry first. Baiting without exclusion is a subscription to the same problem.',
    },
    {
      term: 'Re-treat free, in writing',
      detail:
        'If a covered pest comes back between visits we return at no charge. That is the whole point of a plan, and it is the part most companies bury.',
    },
  ],
} as const

export const process = {
  kicker: 'What happens',
  title: 'From the pest to the price to the visit',
  lead: 'Three steps, and the first one is on this page.',
  steps: [
    {
      num: '01',
      title: 'Identify it',
      body: 'Use the selector above, or send a photograph. Most identifications take us about ten seconds and save you an inspection fee.',
      duration: 'Do it now',
    },
    {
      num: '02',
      title: 'We confirm the price',
      body: 'The published price holds for a standard property. If yours is larger or the infestation is established we tell you before we book, not afterwards.',
      duration: 'Same day',
    },
    {
      num: '03',
      title: 'We treat and follow up',
      body: 'You get a written record of what was applied and where, which matters if you sell the house or if anyone in it is sensitive to a product.',
      duration: 'Usually 1 to 3 visits',
    },
  ],
} as const

export const areas = {
  title: 'Where we work',
  lead: 'Mecklenburg County and the towns listed here. Same-day work is limited to a 30-minute radius, which we would rather state than pretend otherwise.',
  towns: [
    'Charlotte',
    'Matthews',
    'Mint Hill',
    'Pineville',
    'Huntersville',
    'Cornelius',
    'Davidson',
    'Concord',
    'Harrisburg',
    'Indian Trail',
    'Waxhaw',
    'Fort Mill',
    'Belmont',
    'Gastonia',
  ],
  note: 'Written as plain text, this list is the cheapest local search signal a trade site has.',
} as const

export interface Testimonial {
  quote: string
  initial: string
  name: string
  area: string
}

export const testimonials = {
  pill: 'Reviews',
  title: 'What people say afterwards',
  sub: 'Sample reviews for demonstration. Replace with your own, ideally pulled from Google.',
  items: [
    {
      quote:
        'I clicked “mice” on their site at eleven at night and had a price and a date before I went to bed. Every other company wanted a form and a call back.',
      initial: 'E',
      name: 'Erin M.',
      area: 'Plaza Midwood',
    },
    {
      quote:
        'They found where the mice were getting in and sealed it before putting a single trap down. The last company just kept refilling bait boxes for a year.',
      initial: 'D',
      name: 'Devon R.',
      area: 'Matthews',
    },
    {
      quote:
        'Told me a single wasp nest treatment was all I needed and did not try to sell me a plan. I signed up for the plan in the spring anyway.',
      initial: 'C',
      name: 'Carla P.',
      area: 'Huntersville',
    },
  ] as readonly Testimonial[],
} as const

export const faq = {
  pill: 'Questions',
  title: 'Before you book',
  sub: 'The things people ask on the phone, answered here so you do not have to call.',
  items: [
    {
      question: 'Is the treatment safe around children and pets?',
      answer:
        'The products are applied to places children and pets do not reach, and everything we use is registered for residential use at the rate we apply it. We ask you to stay off treated surfaces until they are dry, usually two to four hours, and we tell you exactly what was applied and where.',
    },
    {
      question: 'Do I have to sign up for a plan?',
      answer:
        'No. Every treatment on this site can be bought once. We will tell you when a single visit will do it, because a plan sold to someone who did not need one cancels within three months.',
    },
    {
      question: 'What does the guarantee cover?',
      answer:
        'If a pest covered by your plan comes back between scheduled visits we return at no charge. On a one-off treatment the guarantee runs for 30 days for most pests and 90 days for roaches.',
    },
    {
      question: 'Do you need to get inside the house?',
      answer:
        'For the quarterly exterior plan, no. Somebody needs to be home for interior work, roaches, bed bugs and rodent exclusion.',
    },
    {
      question: 'How quickly can you come?',
      answer:
        'Same day for rodents inside the house and for stinging insects. Two to three days for most other work. In spring, when everything hatches at once, it can be longer and we will tell you honestly rather than book a date we cannot hold.',
    },
  ],
} as const

export const contact = {
  title: 'Found something you would rather not have?',
  lead: 'Pick it from the list and you will have a price in about ten seconds.',
  primary: 'Identify the pest',
  secondary: 'Call (555) 040-0400',
} as const

export const footer = {
  blurb:
    'Licensed pest control in Charlotte. Identify the pest, see the price, and choose between a one-off treatment and a quarterly plan.',
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'Ants and roaches', href: '#identify' },
        { label: 'Mice and rats', href: '#identify' },
        { label: 'Termites', href: '#identify' },
        { label: 'Bed bugs', href: '#identify' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#process' },
        { label: 'Service areas', href: '#areas' },
        { label: 'Plans', href: '#plans' },
        { label: 'Reviews', href: '#testimonials' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '#contact' },
        { label: 'Questions', href: '#faq' },
      ],
    },
  ],
  newsletter: {
    title: 'Stay Updated',
    copy: 'Seasonal maintenance reminders and plain-English notes on what actually needs doing before winter.',
    placeholder: 'Your email address',
    submit: 'Subscribe',
    error: 'That address looks incomplete. Check it and send again.',
    success: 'Thank you. The next seasonal reminder will land in your inbox.',
  },
  social: [
    { label: 'X', href: 'https://x.com/' },
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
  ],
  copyright: '© 2026 Sealwise Pest Control. All rights reserved.',
  dock: 'More templates at Component Dock',
} as const

export const chrome = {
  skip: 'Skip to content',
  cookie: {
    copy: 'We use cookies to keep the pest finder on the pest you last opened and to measure which pages are read. You can decline the measurement and still use every price on the site.',
    decline: 'Decline',
    accept: 'Accept All',
  },
  mobile: {
    call: 'Wasps, rodents or bed bugs? Call today',
  },
} as const
