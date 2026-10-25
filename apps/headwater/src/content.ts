/**
 * Every string on the page, in the design's own order. Keeping the copy out of
 * the components means a test can assert a band's content once and the
 * components stay layout. Brand names, figures and quotes are sample data and
 * say so where the design says so.
 */

export const BRAND = 'Headwater'
export const PHONE_DISPLAY = '(555) 010-0221'
export const PHONE_HREF = 'tel:+15550100221'
export const EMAIL = 'hello@headwater.example'
export const ADDRESS = '3300 East Speedway Boulevard, Tucson, AZ 85716'
export const CITY = 'Tucson, AZ'
export const RATING = '4.9'
export const RATING_NOTE = '480+ reviews on Google · sample data'
export const COMPONENTDOCK_HREF = 'https://www.componentdock.com/'
export const PRIVACY_HREF = `mailto:${EMAIL}?subject=Privacy%20policy`
export const TERMS_HREF = `mailto:${EMAIL}?subject=Terms%20of%20service`

interface NavLink {
  readonly label: string
  readonly href: string
}

/** Products is the only labelled hover dropdown; the rest are plain anchors. */
export const PRODUCT_MENU: readonly NavLink[] = [
  { label: 'Water softeners', href: '#product-softener' },
  { label: 'Whole-house filtration', href: '#product-filtration' },
  { label: 'Reverse osmosis', href: '#product-ro' },
  { label: 'Tankless heaters', href: '#product-tankless' },
]

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Learn', href: '#quiz' },
  { label: 'About', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  eyebrow: 'Tucson · Water tested free',
  headline: 'Softer water, quieter pipes.',
  lede: 'Tucson water is hard enough to shorten the life of every appliance in the house. We test what is actually in yours, then size the smallest thing that fixes it.',
  image: 'https://picsum.photos/seed/headwater-1/1152/1152',
  imageAlt:
    'Placeholder photograph standing in for a treatment unit installed in a utility space',
  primaryCta: 'Test your water',
  secondaryCta: 'See products',
} as const

interface QuizChip {
  readonly label: string
  readonly value: string
}

interface QuizQuestion {
  readonly id: string
  readonly legend: string
  readonly chips: readonly QuizChip[]
}

export const QUIZ = {
  eyebrow: 'Three questions',
  heading: 'What do you actually need?',
  lede: 'Most people arrive convinced they need a softener. Often they need something cheaper, and sometimes nothing at all.',
  resultEyebrow: 'Most likely what you need',
  resultCta: 'See this product',
  finePrint:
    'This is a guide, not a test result. We test your water properly before recommending anything.',
  changeHint: 'Change any answer and the recommendation updates.',
} as const

export const QUESTIONS: readonly QuizQuestion[] = [
  {
    id: 'source',
    legend: '1. Where does your water come from?',
    chips: [
      { label: 'City supply', value: 'city' },
      { label: 'Private well', value: 'well' },
      { label: 'Not sure', value: 'unknown' },
    ],
  },
  {
    id: 'symptom',
    legend: '2. What is bothering you?',
    chips: [
      { label: 'Scale and spotting', value: 'scale' },
      { label: 'Taste or smell', value: 'taste' },
      { label: 'Running out of hot water', value: 'hotwater' },
      { label: 'Nothing, just curious', value: 'curious' },
    ],
  },
  {
    id: 'household',
    legend: '3. How many people in the house?',
    chips: [
      { label: '1 - 2', value: 'small' },
      { label: '3 - 4', value: 'medium' },
      { label: '5 or more', value: 'large' },
    ],
  },
]

export interface QuizOutcome {
  /** Satisfied when every value in `match` has been selected. */
  readonly match: readonly string[]
  readonly product: string
  readonly href: string
  readonly explanation: string
}

export const OUTCOMES: readonly QuizOutcome[] = [
  {
    match: ['scale'],
    product: 'A water softener',
    href: '#product-softener',
    explanation:
      'Scale on fixtures and spotting on glassware is hardness, and a softener is the only thing that removes it. We would size it on your tested hardness and household size rather than selling you the biggest one.',
  },
  {
    match: ['taste', 'city'],
    product: 'Whole-house filtration',
    href: '#product-filtration',
    explanation:
      'On a city supply, taste and smell complaints are usually chlorine or chloramine. Carbon filtration at the point of entry handles that for every tap, not just the kitchen one.',
  },
  {
    match: ['taste', 'well'],
    product: 'Whole-house filtration, then reverse osmosis',
    href: '#product-filtration',
    explanation:
      'On a well we would test before recommending anything, because taste can be iron, sulphur or dissolved solids, and each needs a different media. Often the answer is filtration at entry plus RO for drinking.',
  },
  {
    match: ['hotwater'],
    product: 'A tankless water heater',
    href: '#product-tankless',
    explanation:
      'Running out mid-shower is capacity, not water quality. A tankless sized on your simultaneous outlets fixes it and frees up the cupboard the tank is in.',
  },
  {
    match: ['curious'],
    product: 'A free water test',
    href: '#contact',
    explanation:
      'Honestly, nothing yet. Let us test the water first. Plenty of Tucson houses need less than people expect, and we would rather tell you that than fit something.',
  },
]

export const QUIZ_FALLBACK: QuizOutcome = {
  match: [],
  product: 'A free water test',
  href: '#contact',
  explanation:
    'Your combination needs a proper test before anyone recommends a product. We do that free and we will tell you if the answer is that you need nothing.',
}

interface ProductSpec {
  readonly label: string
  readonly value: string
}

interface Product {
  readonly id: string
  readonly name: string
  readonly blurb: string
  readonly image: string
  readonly specs: readonly ProductSpec[]
  readonly price: string
  readonly note: string
}

export const PRODUCTS = {
  eyebrow: 'Products',
  heading: 'Four things, each for a different problem',
  lede: 'Prices are illustrative and include installation. Sizing is confirmed after a water test, not before.',
  cta: 'Request a quote',
  footnote: 'Sample products and pricing for template demonstration. Replace with your own before launch.',
  items: [
    {
      id: 'product-softener',
      name: 'Water softener',
      blurb: 'Ion-exchange softener for hard water, sized to your household.',
      image: 'https://picsum.photos/seed/headwater-2/600/600',
      specs: [
        { label: 'Capacity', value: '32,000 grains' },
        { label: 'Flow rate', value: '12 gpm' },
        { label: 'Salt use', value: '~40 lb a month' },
      ],
      price: 'From $1,450',
      note: 'installed',
    },
    {
      id: 'product-filtration',
      name: 'Whole-house filtration',
      blurb: 'Carbon and sediment filtration at the point of entry.',
      image: 'https://picsum.photos/seed/headwater-3/600/600',
      specs: [
        { label: 'Media', value: 'Catalytic carbon' },
        { label: 'Service life', value: '5 years' },
        { label: 'Flow rate', value: '15 gpm' },
      ],
      price: 'From $2,100',
      note: 'installed',
    },
    {
      id: 'product-ro',
      name: 'Reverse osmosis',
      blurb: 'Under-sink RO with a remineralisation stage.',
      image: 'https://picsum.photos/seed/headwater-4/600/600',
      specs: [
        { label: 'Stages', value: '5 plus remineralisation' },
        { label: 'Output', value: '75 gpd' },
        { label: 'Footprint', value: 'Under-sink' },
      ],
      price: 'From $680',
      note: 'installed',
    },
    {
      id: 'product-tankless',
      name: 'Tankless water heater',
      blurb: 'Gas tankless, sized on simultaneous outlets.',
      image: 'https://picsum.photos/seed/headwater-5/600/600',
      specs: [
        { label: 'Flow rate', value: '9.8 gpm' },
        { label: 'Efficiency', value: '0.96 UEF' },
        { label: 'Venting', value: 'Concentric' },
      ],
      price: 'From $3,200',
      note: 'installed',
    },
  ] satisfies readonly Product[],
} as const

export const WHY_US = {
  eyebrow: 'How we sell',
  heading: 'We test before we recommend',
  lede: 'A softener nobody needed is the most common sale in this industry. Testing first is cheap and it is the only honest way to size anything.',
  image: 'https://picsum.photos/seed/headwater-6/1152/864',
  imageAlt: 'Placeholder photograph standing in for a technician testing a water sample on site',
  figcaption: 'Replace with a photograph of your own technician testing on site.',
  commitments: [
    {
      term: 'The test is free and it is a real test',
      body: 'Hardness, iron, TDS, chlorine and pH, done on site with the results written down and left with you whether or not you buy anything.',
    },
    {
      term: 'Sized on your house, not on a shelf',
      body: 'Grain capacity is calculated from your tested hardness and the number of people in the house. Oversized softeners waste salt; undersized ones regenerate constantly.',
    },
    {
      term: 'We tell you when the answer is nothing',
      body: 'Plenty of houses need less than they have been told. If the water is fine, we will say so and charge nothing for the test.',
    },
    {
      term: 'Serviced by the people who fitted it',
      body: 'Filter changes and salt deliveries on a schedule we set up at install, so the system keeps working rather than quietly stopping.',
    },
  ],
} as const

export const SERVICE = {
  eyebrow: 'Service',
  heading: 'After the install',
  lede: 'A filtration system that is not serviced is an expensive pipe.',
  cells: [
    {
      title: 'Filter and media changes',
      body: 'On the schedule set at installation, with a reminder rather than a hope that you remember.',
      price: 'From $95',
    },
    {
      title: 'Salt delivery',
      body: 'Delivered and loaded into the brine tank, which is the part most people come to dislike.',
      price: 'From $45 a delivery',
    },
    {
      title: 'Annual system check',
      body: 'Hardness re-tested, settings adjusted for any change in the household, resin bed inspected.',
      price: '$120',
    },
    {
      title: 'Repairs',
      body: 'Valves, controllers and leaks on any system, including ones we did not install.',
      price: 'From $110',
    },
  ],
} as const

export const TESTIMONIALS = {
  badge: 'Reviews',
  heading: 'What customers say',
  lede: 'Sample reviews for demonstration. Replace with your own.',
  starsLabel: 'Five out of five stars',
  items: [
    {
      quote:
        'They tested the water, told me I did not need the whole-house system the last company quoted, and fitted a softener for a third of the price.',
      initial: 'M',
      name: 'Marisol E.',
      town: 'Midtown Tucson',
    },
    {
      quote:
        'Explained why the RO needed to go after the softener rather than before, which nobody else had mentioned. It has been running two years without a filter alarm.',
      initial: 'H',
      name: 'Hal W.',
      town: 'Oro Valley',
    },
    {
      quote:
        'The salt delivery is the thing that sold me. I had stopped topping up the old one because carrying the bags was the worst part.',
      initial: 'J',
      name: 'Jenny K.',
      town: 'Catalina Foothills',
    },
  ],
} as const

export const CONTACT = {
  heading: 'Start with the test',
  lede: 'Free, on site, results written down, and no obligation to buy anything at all.',
  primaryCta: 'Book a water test',
  primaryHref: `mailto:${EMAIL}?subject=Free%20water%20test`,
  secondaryCta: `Call ${PHONE_DISPLAY}`,
} as const

export const FOOTER = {
  blurb:
    'Water softeners, whole-house filtration, reverse osmosis and tankless heaters. Tested first, sized properly, installed in half a day.',
  socials: [
    { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
    { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/' },
    { id: 'x', label: 'X', href: 'https://x.com/' },
  ],
  columns: [
    {
      heading: 'Products',
      links: PRODUCT_MENU,
    },
    {
      heading: 'Company',
      links: [
        { label: 'All products', href: '#products' },
        { label: 'Learn', href: '#quiz' },
        { label: 'About', href: '#why-us' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      heading: 'Support',
      links: [
        { label: 'Privacy', href: PRIVACY_HREF },
        { label: 'Terms', href: TERMS_HREF },
      ],
    },
  ],
  promiseHeading: 'Water testing',
  promiseBody:
    'We test your water free before recommending anything. A softener nobody needs is the most common sale in this industry.',
  promiseCta: 'Test your water',
  legal: `© 2026 ${BRAND}. All rights reserved.`,
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  componentDock: 'More templates at Component Dock',
} as const

export const CHROME = {
  skip: 'Skip to content',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  darkToggle: 'Toggle dark mode',
  previous: 'Previous review',
  next: 'Next review',
  cookie:
    'We use one cookie to remember this notice. Nothing is sold, shared or tracked across other sites.',
  accept: 'Accept All',
  decline: 'Decline',
} as const
