/**
 * Every string on the page. Operational detail (amounts, prices, towns,
 * conditions, licence shape, phone) is verbatim from the design being
 * recreated; only the brand name is ours.
 */

export const BRAND = 'Balancepoint'
export const PHONE_DISPLAY = '(555) 120-1200'
export const PHONE_HREF = 'tel:5551201200'
export const EMAIL = 'hello@balancepointhp.example'
export const CITY = 'Spokane, WA'
export const ADDRESS = '1420 West Sprague Avenue, Spokane, WA 99201'
export const COMPONENTDOCK_HREF = 'https://www.componentdock.com/'
export const PRIVACY_HREF = '#contact'
export const TERMS_HREF = '#contact'

export interface NavLink {
  readonly label: string
  readonly href: string
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Rebates', href: '#incentives' },
  { label: 'Cold weather', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Service areas', href: '#areas' },
  { label: 'About', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
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

export interface LicenceItem {
  readonly label: string
  readonly value: string
  /** The reference hides the second and third pairs below `sm`. */
  readonly wide?: boolean
}

export const LICENCE_ITEMS: readonly LicenceItem[] = [
  { label: 'Licence', value: 'WA BALANCE#000AA' },
  { label: 'Rebate paperwork', value: 'filed for you', wide: true },
  { label: 'Serving', value: 'Spokane County', wide: true },
]

export const LICENCE_RATING = {
  score: '4.9',
  caption: '190+ reviews on Google (sample)',
} as const

export const HERO = {
  eyebrow: 'Spokane · Licensed and rebate certified',
  heading: 'The rebates are real.',
  headingAccent: 'Here they are, itemised.',
  lede: "'Rebates available' is what most quotes say, which leaves you unable to tell whether the incentive was passed on or quietly kept. Tick the ones you qualify for and watch the price come down.",
  ratingScore: '4.9',
  ratingCaption: '190+ reviews on Google · sample data',
  ticks: [
    'Every incentive listed as its own line',
    'The conditions that disqualify people, stated',
    'Utility and manufacturer paperwork filed for you',
    'Honest about what happens below fifteen degrees',
  ] as readonly string[],
} as const

export const QUOTE = {
  heading: 'Get your net price',
  blurb: 'Three fields. We reply within the hour on weekdays.',
  nameLabel: 'Your name',
  namePlaceholder: 'Jordan Ellis',
  phoneLabel: 'Phone',
  phonePlaceholder: '555 120 1200',
  replaceLabel: 'What are you replacing?',
  replacePlaceholder: 'Choose the closest match',
  replaceOptions: [
    'Electric resistance heating',
    'A gas furnace',
    'An old heat pump',
    'Oil or propane',
    'Nothing, this is a new build',
    'Adding cooling as well',
  ] as readonly string[],
  submit: 'Get the figure',
  note: 'No obligation. We will tell you if a heat pump is the wrong answer for your house.',
  nameError: 'Enter your name',
  phoneError: 'Enter a phone number we can reach you on',
  success: 'Thanks — we will call you within the hour on weekdays with your net figure.',
} as const

export interface Incentive {
  readonly id: string
  readonly name: string
  readonly amount: number
  readonly source: string
  readonly condition: string
  readonly defaultChecked: boolean
}

/** Six programmes, in the reference's order. Three start ticked. */
export const INCENTIVES: readonly Incentive[] = [
  {
    id: 'federal',
    name: 'Federal efficiency tax credit',
    amount: 2000,
    source: 'Federal, claimed on your return',
    condition:
      'Requires qualifying equipment and a tax liability to offset. It is a credit, not a rebate, so it arrives at filing rather than at installation.',
    defaultChecked: true,
  },
  {
    id: 'utility',
    name: 'Utility heat pump rebate',
    amount: 1600,
    source: 'Your electric utility',
    condition:
      'Usually requires the system to replace electric resistance heating rather than gas. We check your account before quoting.',
    defaultChecked: true,
  },
  {
    id: 'state',
    name: 'State income-qualified top-up',
    amount: 1800,
    source: 'State programme',
    condition:
      'Household income must fall under the published threshold for your county and family size.',
    defaultChecked: false,
  },
  {
    id: 'manufacturer',
    name: 'Manufacturer promotion',
    amount: 800,
    source: 'Equipment manufacturer',
    condition:
      'Seasonal, and larger in spring and autumn than in the middle of a cold snap when everybody is buying under pressure.',
    defaultChecked: true,
  },
  {
    id: 'insulation',
    name: 'Insulation and air sealing incentive',
    amount: 900,
    source: 'Utility, bundled programme',
    condition:
      'Only where the work is done alongside the heat pump. Worth taking because a leaky house wastes any system you buy.',
    defaultChecked: false,
  },
  {
    id: 'panel',
    name: 'Electrical panel upgrade support',
    amount: 1200,
    source: 'State electrification programme',
    condition:
      'Only if your panel actually needs upgrading. We measure before quoting, and plenty of houses do not need it.',
    defaultChecked: false,
  },
]

export const INSTALLED_PRICE = 14800

export const INCENTIVES_COPY = {
  eyebrow: 'The net price',
  heading: 'What you actually pay',
  lede: 'Six programmes, each with the condition that most often disqualifies people. Untick anything that does not apply to you and the figure updates.',
  installedLabel: 'Installed price',
  selectedLabel: 'Incentives selected',
  netLabel: 'What you actually pay',
  paperwork:
    'We file the utility and manufacturer paperwork for you. The federal credit is claimed on your own return and we supply the certificate.',
  cta: 'Check what I qualify for',
  caveat:
    'Sample amounts for demonstration. Incentive programmes change frequently and several carry income or equipment conditions. Verify every figure and every condition before this page goes live.',
} as const

export interface Mechanism {
  readonly title: string
  readonly body: string
}

export const MECHANISMS: readonly Mechanism[] = [
  {
    title: 'Capacity falls as it gets colder',
    body: 'A heat pump moves heat rather than making it, and there is less heat outside to move at ten degrees than at forty. Modern cold-climate units hold usable output far lower than older ones, but the curve is real and nobody repeals it.',
  },
  {
    title: 'The changeover point is a setting, not a limit',
    body: 'On a dual-fuel system the control hands over to the gas furnace below a temperature you choose. Set it too high and you never get the savings; too low and you get a cold house. We set it from your actual tariffs, and we show you where.',
  },
  {
    title: 'Backup heat is expensive, and it is normal',
    body: 'All-electric systems use resistance strips below the balance point. They work and they cost a lot per hour. A quote that never mentions them is a quote that has not thought about January.',
  },
  {
    title: 'Sizing matters more here, not less',
    body: 'Oversizing to cover the coldest hour of the decade means short cycling for the other eight thousand. A properly sized unit with a sensible changeover beats a large one every winter.',
  },
]

export const WHY_US_COPY = {
  eyebrow: 'The honest part',
  heading: 'What happens when it gets properly cold',
  lede: 'This is where heat pump marketing gets vague and where Spokane customers get let down. So here is the mechanism, plainly.',
  figcaption: 'Replace with a photograph of your own installations before launch.',
} as const

/** The chart is the only picture on the page, so its copy is load-bearing. */
export const CHART = {
  title: 'Output against temperature',
  losses: 'What the house loses',
  backup: 'Below here, backup makes up the difference',
  balancePoint: 'Balance point',
  ticks: ['5°F', '20°F', '35°F', '50°F'] as readonly string[],
  footnote: 'Where it sits is a property of your house, not of the brochure.',
  alt: 'A chart of heat pump output against outdoor temperature, with the balance point marked',
} as const

export interface Service {
  readonly title: string
  readonly blurb: string
  readonly price: string
}

export const SERVICES: readonly Service[] = [
  {
    title: 'Replacing electric resistance',
    blurb:
      'The strongest case there is. Running costs typically fall by half or more and the utility rebates are aimed squarely at this switch.',
    price: 'From $12,400 installed',
  },
  {
    title: 'Dual fuel with an existing furnace',
    blurb:
      'Heat pump for the mild majority of the winter, your gas furnace below the changeover point. Most of the saving, none of the January anxiety.',
    price: 'From $9,800 installed',
  },
  {
    title: 'Cold climate all-electric',
    blurb:
      'For houses leaving gas entirely. Needs a properly sized unit, real insulation and a frank conversation about backup strip heat.',
    price: 'From $16,200 installed',
  },
  {
    title: 'Ductless mini split',
    blurb:
      'For additions, converted basements and rooms the ducts never reached. Room by room, and cheaper than extending ductwork.',
    price: 'From $4,200 per zone',
  },
  {
    title: 'Panel and service assessment',
    blurb:
      'Done before we quote, not after. Some houses need an upgrade and some do not, and assuming either way is how a quote moves by thousands.',
    price: '$0 with a quote',
  },
  {
    title: 'Insulation and air sealing',
    blurb:
      'Frequently the better first purchase. We will say so even though it is a smaller job for us, because a heat pump in a leaky house disappoints everybody.',
    price: 'Quoted with the survey',
  },
]

export const SERVICES_COPY = {
  eyebrow: 'What we do',
  heading: 'Four routes, and two things to do first',
  lede: 'A heat pump is not automatically the answer. In a well-supplied gas house with a young furnace it frequently is not, and we will tell you.',
  footnote: 'Starting prices are sample data for demonstration. Replace with your own before launch.',
} as const

export const AREAS_COPY = {
  heading: 'Where we work',
  lede: 'Spokane County and the Palouse edge. Cold-climate work is booked rather than urgent, so we travel further for it than for service calls.',
  footnote:
    'Replace this list with your own towns. Written as plain text it is the cheapest local search signal a trade site has.',
} as const

export const TOWNS: readonly string[] = [
  'Spokane',
  'Spokane Valley',
  'Liberty Lake',
  'Cheney',
  'Airway Heights',
  'Deer Park',
  'Medical Lake',
  'Mead',
  'Nine Mile Falls',
  'Millwood',
  'Otis Orchards',
  'Colbert',
]

export interface Testimonial {
  readonly quote: string
  readonly name: string
  readonly town: string
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      'Three quotes said "rebates available". Balancepoint listed six programmes, told me I would not qualify for two of them, and the net figure still beat everyone.',
    name: 'Halvard N.',
    town: 'South Hill',
  },
  {
    quote:
      'They talked me out of all-electric and into dual fuel because of my panel. Honest, and it saved me about four thousand in electrical work.',
    name: 'Bree T.',
    town: 'Liberty Lake',
  },
  {
    quote:
      'The changeover point is set where they said it would be and I can see it on the thermostat. First contractor who showed me a setting rather than a slogan.',
    name: 'Oscar A.',
    town: 'Spokane Valley',
  },
]

export const TESTIMONIALS_COPY = {
  pill: 'Reviews',
  heading: 'What people say afterwards',
  lede: 'Sample reviews for demonstration. Replace with your own, ideally pulled from Google.',
} as const

export interface Faq {
  readonly question: string
  readonly answer: string
}

export const FAQS: readonly Faq[] = [
  {
    question: 'Will a heat pump actually work in Spokane?',
    answer:
      'Yes, with a caveat that is worth understanding. Current cold-climate units hold usable output well below freezing. Below the balance point something else makes up the difference, either a gas furnace on dual fuel or resistance strips on all-electric. That is normal, and a contractor who does not mention it has not planned for January.',
  },
  {
    question: 'Are the rebates really available?',
    answer:
      'The ones on this page are real programmes, but several carry conditions and two of the six do not apply to most households. That is exactly why they are listed separately with their conditions rather than summed into a headline.',
  },
  {
    question: 'Do I need a panel upgrade?',
    answer:
      'Sometimes, and it is the largest hidden cost in electrification. We measure your service and your existing load before quoting. Plenty of houses are fine, and assuming otherwise is how quotes move by thousands.',
  },
  {
    question: 'Should I replace my gas furnace?',
    answer:
      'If it is young and working, often not. Dual fuel keeps it as backup and gets you most of the saving. Ripping out a healthy furnace to be fully electric is a values decision as much as a financial one, and we will price both honestly.',
  },
  {
    question: 'What about insulation?',
    answer:
      'Frequently the better first purchase, and we will say so even though it is a smaller job for us. Heating a leaky house efficiently is still heating a leaky house.',
  },
]

export const FAQ_COPY = {
  pill: 'Questions',
  heading: 'Before you commit',
  lede: 'The questions that decide whether this is a good purchase for your particular house.',
} as const

export const CONTACT = {
  heading: 'Want your actual net figure?',
  lede: 'Tick what you qualify for above, then let us check it against your utility account.',
  primaryCta: 'Get your net price',
  primaryHref: '#incentives',
  secondaryCta: `Call ${PHONE_DISPLAY}`,
} as const

export interface FooterColumn {
  readonly heading: string
  readonly links: readonly NavLink[]
}

export const FOOTER = {
  blurb:
    'Heat pump installation in Spokane. Every rebate itemised against the installed price, and an honest explanation of what happens when it gets properly cold.',
  columns: [
    {
      heading: 'Services',
      links: [
        { label: 'Replacing electric heat', href: '#services' },
        { label: 'Dual fuel', href: '#services' },
        { label: 'Cold climate all-electric', href: '#services' },
        { label: 'Mini splits', href: '#services' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'Rebates', href: '#incentives' },
        { label: 'Cold weather', href: '#why-us' },
        { label: 'Service areas', href: '#areas' },
        { label: 'About', href: '#testimonials' },
      ],
    },
    {
      heading: 'Support',
      links: [
        { label: 'Contact', href: '#contact' },
        { label: 'Privacy', href: PRIVACY_HREF },
        { label: 'Terms', href: TERMS_HREF },
      ],
    },
  ] as readonly FooterColumn[],
  newsletterHeading: 'Stay Updated',
  newsletterBody:
    'Seasonal maintenance reminders and plain-English notes on what actually needs doing before winter.',
  newsletterLabel: 'Email address',
  newsletterPlaceholder: 'you@example.com',
  newsletterCta: 'Subscribe',
  newsletterError: 'Enter a valid email address',
  newsletterSuccess: 'Subscribed. We send two notes a year, before the cold.',
  socials: [
    { id: 'x', label: `${BRAND} on X`, href: 'https://x.com/' },
    { id: 'instagram', label: `${BRAND} on Instagram`, href: 'https://www.instagram.com/' },
    { id: 'linkedin', label: `${BRAND} on LinkedIn`, href: 'https://www.linkedin.com/' },
  ] as const,
  legal: `© 2026 ${BRAND}. All rights reserved.`,
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  componentDock: 'More templates at Component Dock',
} as const
