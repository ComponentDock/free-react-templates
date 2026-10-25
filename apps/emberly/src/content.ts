/**
 * Every string on the page, in the reference's order. Keeping the copy out of
 * the components means a test can assert a band's content once and the
 * components stay layout.
 */

export const BRAND = 'Emberly'
export const BRAND_MARK_LABEL = 'Emberly home'

export const PHONE_LABEL = '0800 000 0000'
export const PHONE_HREF = 'tel:08000000000'
export const REGION = 'Leeds and West Yorkshire'
export const CITY = 'Leeds'
export const EMAIL = 'hello@emberly.example'
export const ADDRESS = 'Unit 3, Canal Wharf, Leeds, West Yorkshire LS11 5AB'
export const LICENCE_NUMBER = '#000000'
export const LICENCE_BODY = 'Gas certified'
export const INSURANCE = 'Insured to £5m'
export const RATING = '4.9'
export const RATING_NOTE = '600+ reviews on Trustpilot (sample)'
export const COMPONENTDOCK_HREF = 'https://www.componentdock.com/'

interface NavLink {
  readonly label: string
  readonly id: string
}

/**
 * The reference's seven labels are inner routes; the recreation is one page, so
 * each label points at the band that carries its argument. `Repairs` and
 * `About` both land on the process band, so only the first matching label is
 * ever marked active by the scroll spy.
 */
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Boilers', id: 'services' },
  { label: 'Cover plans', id: 'plans' },
  { label: 'Repairs', id: 'process' },
  { label: 'Areas', id: 'areas' },
  { label: 'About', id: 'process' },
  { label: 'Blog', id: 'faq' },
  { label: 'Contact', id: 'contact' },
]

/** The bands the scroll spy watches, in document order. */
export const BAND_IDS = ['finance', 'services', 'process', 'areas', 'testimonials', 'faq', 'contact']

export const HERO = {
  eyebrow: 'Gas certified · Leeds and West Yorkshire',
  headline: 'Keep the house warm all year.',
  lede: 'Boiler installation, repairs and annual servicing, with cover plans that turn a breakdown in February into a phone call rather than a bill.',
  ratingNote: '600+ reviews · sample data',
  primaryCta: 'Compare cover plans',
  secondaryCta: 'Book a repair',
  pricingNote: 'Sample pricing for template demonstration. Replace with your own before launch.',
} as const

interface PlanCard {
  readonly name: string
  readonly price: string
  readonly blurb: string
  readonly ticks: readonly string[]
  /** The middle card carries the badge and the only filled button. */
  readonly featured: boolean
}

export const PLANS = {
  anchorLabel: 'Cover plans',
  ticksLabel: 'What is included',
  cta: 'Choose',
  badge: 'Most chosen',
  suffix: 'a month',
  items: [
    {
      name: 'Boiler only',
      price: '£9',
      blurb: 'Boiler and controls, parts and labour.',
      ticks: ['Unlimited callouts', 'Annual service included', '£60 excess'],
      featured: false,
    },
    {
      name: 'Boiler and heating',
      price: '£14',
      blurb: 'Everything above plus radiators, pipework and the pump.',
      ticks: [
        'Unlimited callouts',
        'Annual service included',
        'No excess',
        'Radiators and pipework',
      ],
      featured: true,
    },
    {
      name: 'Whole home',
      price: '£22',
      blurb: 'Heating, plumbing and drains, under one plan.',
      ticks: [
        'Everything in Boiler and heating',
        'Internal plumbing and drains',
        'Taps, toilets and leaks',
        'No excess',
      ],
      featured: false,
    },
  ] satisfies readonly PlanCard[],
} as const

export const FINANCE = {
  eyebrow: 'Spreading the cost',
  heading: 'A new boiler, by the month',
  lede: 'Move the slider to the sort of figure you have been quoted and see what it looks like spread over three years.',
  amountLabel: 'Cost of the work',
  months: 36,
  apr: 9.9,
  currency: '£',
  min: 800,
  max: 4500,
  step: 50,
  initial: 2400,
  monthlySuffix: 'a month',
  totalLabel: 'Total repayable',
  cta: 'Get a fixed quote',
  footnote:
    'Representative example for template demonstration only. Replace with your own lender’s rates and the regulatory wording they require before launch.',
} as const

interface ServiceItem {
  readonly name: string
  readonly body: string
  readonly price: string
}

export const SERVICES = {
  eyebrow: 'What we do',
  heading: 'Heating, and the plumbing around it',
  lede: 'Domestic heating and plumbing across West Yorkshire. Prices are illustrative starting points.',
  footnote: 'Sample prices for demonstration. Replace with your own before launch.',
  items: [
    {
      name: 'Boiler installation',
      body: 'Combi, system and conventional, with the old unit removed and the system flushed.',
      price: 'From £1,850 fitted',
    },
    {
      name: 'Boiler repairs',
      body: 'No heat, no hot water, pressure loss and fault codes. Most parts carried on the van.',
      price: 'From £96',
    },
    {
      name: 'Annual servicing',
      body: 'The service your warranty requires, with the certificate emailed the same day.',
      price: '£89',
    },
    {
      name: 'Landlord certificates',
      body: 'Gas safety checks for letting agents and private landlords, lodged and emailed.',
      price: '£79',
    },
    {
      name: 'Radiators and pipework',
      body: 'New radiators, valve changes, balancing and the cold one at the end of the run.',
      price: 'From £140',
    },
    {
      name: 'Plumbing repairs',
      body: 'Taps, toilets, leaks and shut-off valves, because the same engineer is already there.',
      price: 'From £96',
    },
  ] satisfies readonly ServiceItem[],
} as const

export const SEASONAL = {
  eyebrow: 'Before the cold',
  heading: 'Service the boiler before winter, not during it',
  body: 'Nine out of ten breakdowns we attend in January are on boilers that have not been serviced in over two years. A service in September costs £89 and takes an hour.',
  footnote: 'Figures are illustrative sample content.',
  cta: 'Book a service',
} as const

interface ProcessStep {
  readonly index: string
  readonly name: string
  readonly body: string
  readonly note: string
}

export const PROCESS = {
  eyebrow: 'How it works',
  heading: 'From quote to first hot radiator',
  lede: 'Fixed price before we start, and a date we keep.',
  steps: [
    {
      index: '01',
      name: 'Video or home survey',
      body: 'Ten minutes on a video call, or a visit if the pipework is old or hard to reach. Either way it is free and there is no obligation at the end of it.',
      note: 'Free, no obligation',
    },
    {
      index: '02',
      name: 'Fixed written quote',
      body: 'The price, the boiler, the flue route and the date, in writing. If something genuinely hidden turns up on the day, you are shown it before any work starts.',
      note: 'Valid 90 days',
    },
    {
      index: '03',
      name: 'Fitted, tested, registered',
      body: 'Old unit out, system flushed, new boiler commissioned and the certificate lodged. Most installations are done inside one working day.',
      note: 'Most installs, one day',
    },
  ] satisfies readonly ProcessStep[],
} as const

export const AREAS = {
  heading: 'Where we cover',
  lede: 'Leeds and the towns around it, with a gas certified engineer on the road every weekday.',
  towns: [
    'Leeds',
    'Headingley',
    'Horsforth',
    'Pudsey',
    'Morley',
    'Wetherby',
    'Otley',
    'Guiseley',
    'Yeadon',
    'Garforth',
    'Rothwell',
    'Bramhope',
  ],
  footnote: 'Replace this list with your own coverage before launch.',
} as const

interface Testimonial {
  readonly quote: string
  readonly initial: string
  readonly name: string
  readonly town: string
}

export const TESTIMONIALS = {
  eyebrow: 'Reviews',
  heading: 'What customers say',
  lede: 'Sample reviews for demonstration. Replace with your own before launch.',
  ratingLabel: 'Rated 4.9 out of 5',
  items: [
    {
      quote:
        'Our boiler gave up on the first cold week of the year and we had cover, so it cost us a phone call rather than a weekend. The engineer came out the next morning and had the part on the van.',
      initial: 'G',
      name: 'Gemma W.',
      town: 'Horsforth',
    },
    {
      quote:
        'They talked us out of a replacement we did not need and serviced the one we had. Two winters later it is still going. That is the reason we stayed with them for the cover plan.',
      initial: 'I',
      name: 'Idris K.',
      town: 'Morley',
    },
    {
      quote:
        'Quote on the Tuesday, fitted on the Thursday, and the price was the number on the paperwork. They even moved the flue so the kitchen window opens properly again.',
      initial: 'A',
      name: 'Ann-Marie T.',
      town: 'Wetherby',
    },
  ] satisfies readonly Testimonial[],
} as const

export const FAQ = {
  eyebrow: 'Questions',
  heading: 'Before you book',
  lede: 'What people ask before they choose a plan or a date.',
  items: [
    {
      question: 'What is not covered by a plan?',
      answer:
        'Boilers over fifteen years old, systems that are unsafe at the first inspection, and damage caused by someone else’s work. All three are stated at the first service rather than at claim time.',
    },
    {
      question: 'How quickly do you attend a breakdown?',
      answer:
        'Same day if you ring before noon on a weekday, next working day otherwise. A no-heat call with a vulnerable person in the house is prioritised regardless of the time.',
    },
    {
      question: 'Do I need a new boiler or will a repair do?',
      answer:
        'Under about twelve years old, a repair is usually the better value. We state the age, the part cost and an honest view before you decide, even when the honest answer is the cheaper one for us.',
    },
    {
      question: 'Is the installation price really fixed?',
      answer:
        'Yes once the installation has been seen, in person or by video. Only a genuinely hidden find changes it, and you are shown it before any work starts.',
    },
    {
      question: 'Who notifies Building Control?',
      answer:
        'We do. Every installation is notified through the gas registration scheme and the certificate arrives by post and email, usually within a fortnight.',
    },
  ],
} as const

export const CLOSING = {
  heading: 'Cold house, or a boiler on its last legs?',
  lede: 'Book a repair, a service, or a fixed quote for a replacement.',
  primary: 'Book online',
  secondary: 'Call 0800 000 0000',
} as const

export type SocialLabel = 'Twitter' | 'Instagram' | 'LinkedIn'

export const FOOTER = {
  blurb:
    'Boiler installation, repairs, annual servicing and cover plans across Leeds and West Yorkshire. One engineer, one price, and a date we keep.',
  columns: [
    {
      heading: 'Heating',
      links: [
        { label: 'Boiler installation', href: '#services' },
        { label: 'Boiler repairs', href: '#services' },
        { label: 'Annual servicing', href: '#services' },
        { label: 'Landlord certificates', href: '#services' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'Cover plans', href: '#plans' },
        { label: 'Areas covered', href: '#areas' },
        { label: 'About', href: '#process' },
        { label: 'Blog', href: '#faq' },
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
  newsletterHeading: 'Stay Updated',
  newsletterBlurb:
    'One reminder before winter and plain-English notes on what actually needs doing. Nothing else, ever.',
  newsletterLabel: 'Email address',
  newsletterPlaceholder: 'you@email.com',
  newsletterSubmit: 'Subscribe',
  newsletterSuccess: 'You are on the list. One reminder a season, nothing else.',
  newsletterError: 'Enter an address in the form name@example.com.',
  cookieCopy:
    'We use one cookie to remember this answer and nothing else. No advertising, no analytics resale.',
  legal: '© 2026 Emberly Heating. All rights reserved.',
  componentDockLabel: 'More templates at Component Dock',
  socials: [
    { label: 'Twitter', href: 'https://twitter.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ] satisfies readonly { label: SocialLabel; href: string }[],
  socialPaths: {
    Twitter:
      'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231ZM17.083 19.77h1.833L7.084 4.126H5.117Z',
    Instagram:
      'M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 4.5c-2 0-2.3 0-3.1.05-.8.04-1.3.17-1.8.36a3.6 3.6 0 0 0-1.3.86c-.4.4-.68.8-.86 1.3-.19.5-.32 1-.36 1.8C4.5 9.7 4.5 10 4.5 12s0 2.3.05 3.1c.04.8.17 1.3.36 1.8.18.5.46.9.86 1.3.4.4.8.68 1.3.86.5.19 1 .32 1.8.36.8.05 1.1.05 3.1.05s2.3 0 3.1-.05c.8-.04 1.3-.17 1.8-.36.5-.18.9-.46 1.3-.86.4-.4.68-.8.86-1.3.19-.5.32-1 .36-1.8.05-.8.05-1.1.05-3.1s0-2.3-.05-3.1c-.04-.8-.17-1.3-.36-1.8a3.6 3.6 0 0 0-.86-1.3 3.6 3.6 0 0 0-1.3-.86c-.5-.19-1-.32-1.8-.36C14.3 4.5 14 4.5 12 4.5Z',
    LinkedIn:
      'M6.6 8.4a1.85 1.85 0 1 0 0-3.7 1.85 1.85 0 0 0 0 3.7ZM5 9.8h3.2V19H5V9.8Zm5.2 0h3v1.3h.05c.42-.75 1.45-1.55 2.98-1.55 3.2 0 3.78 2 3.78 4.6V19h-3.1v-4.1c0-1-.02-2.3-1.45-2.3-1.45 0-1.68 1.1-1.68 2.25V19h-3.1V9.8Z',
  } as Record<SocialLabel, string>,
} as const

/** The sample-site email test, shared by the newsletter form. */
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i
