/**
 * Every string on the page, in the reference's order. Keeping the copy out of
 * the components means a test can assert a band's content once and the
 * components stay layout.
 */

export const BRAND = 'Percline'
export const BRAND_SUBLABEL = 'SEPTIC'
export const BRAND_FULL = 'Percline Septic'

export const PHONE_LABEL = '(555) 110-1100'
export const PHONE_HREF = 'tel:+15551101100'
export const CITY = 'Wichita, KS'
export const EMAIL = 'office@percline.example'
export const ADDRESS = '2210 North Ridge Road, Wichita, KS 67205'
export const LICENCE_NUMBER = '#00000'
export const LICENCE_BODY = 'Licensed and insured'
export const LICENCE_REGION = 'Sedgwick County'
export const RATING = '4.9'
export const RATING_NOTE = '240+ reviews on Google (sample)'
export const COMPONENTDOCK_HREF = 'https://www.componentdock.com/'
export const SAMPLE_NOTE = 'Starting prices are sample data for demonstration.'

export interface NavLink {
  readonly label: string
  readonly id: string
}

/**
 * The reference links six inner routes; the recreation is one page, so each
 * label points at the band that carries its argument. `About` and
 * `How septic works` share the why-us band, and only the first matching link is
 * ever marked active.
 */
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Selling a house', id: 'timeline' },
  { label: 'Services', id: 'services' },
  { label: 'How septic works', id: 'why-us' },
  { label: 'Service areas', id: 'areas' },
  { label: 'About', id: 'why-us' },
  { label: 'Contact', id: 'contact' },
]

/** The bands the scroll-spy watches, in document order. */
export const BAND_IDS = ['timeline', 'services', 'why-us', 'areas', 'testimonials', 'faq', 'contact']

export const HERO = {
  eyebrow: 'Wichita · Licensed and inspected',
  headline: 'Selling a house with a septic system?',
  headlineAccent: 'The clock has already started.',
  lede: 'A septic inspection sits inside a contingency period that is usually ten days. If it fails, you need a quote, a negotiation and sometimes a repair before closing. We turn the inspection around the same day and tell you what a failure will actually mean.',
  ratingNote: '240+ reviews on Google · sample data',
  checklist: [
    'Inspection report the same day, not in a week',
    'Failures quoted before you leave the closing table',
    'Same-day pumping when it is backing up indoors',
    'We will tell you when it is the line, not the tank',
  ],
} as const

export const QUOTE = {
  heading: 'Book an inspection',
  sub: 'Three fields. We reply within the hour on weekdays.',
  nameLabel: 'Your name',
  namePlaceholder: 'First and last name',
  phoneLabel: 'Phone',
  phonePlaceholder: '(555) 000-0000',
  selectLabel: 'What do you need?',
  selectPlaceholder: 'Choose the closest match',
  options: [
    'Inspection for a sale',
    'Routine pumping',
    'Backing up into the house',
    'Wet patch or smell in the yard',
    'Slow drains everywhere',
    'Buying a house with septic',
  ],
  submit: 'Book the inspection',
  footnote: 'No obligation. The report is yours whether or not we do any repair.',
  success: 'Thanks — we will call you back within the hour on weekdays.',
} as const

export interface TimelineRow {
  readonly day: string
  readonly actor: string
  readonly index: string
  readonly name: string
  readonly body: string
  /** Only rows 1 and 5 carry the "Where deals slip." callout. */
  readonly callout?: string
}

export const TIMELINE = {
  eyebrow: 'Selling',
  heading: 'Ten days, and two places it goes wrong',
  lede: 'This is the sequence on a typical contract. The two marked steps are where we see deals actually slip, and both are avoidable if the inspection happens early.',
  footnote:
    'Illustrative timeline for a typical residential contract. Contingency periods and county requirements vary; confirm yours with your agent and replace this content before launch.',
  cta: 'Book the inspection',
  calloutLabel: 'Where deals slip.',
  rows: [
    {
      day: 'Day 0',
      actor: 'You and your agent',
      index: '01',
      name: 'Contract accepted, contingency begins',
      body: 'The septic inspection is usually part of the general inspection contingency. It is also the item most often booked last, because everybody is thinking about the roof.',
      callout:
        'Booking the septic inspection in the second week leaves no time to fix anything. Book it in the first three days even if the general inspector has not been yet.',
    },
    {
      day: 'Day 1 to 3',
      actor: 'Us',
      index: '02',
      name: 'Inspection and pump-out',
      body: 'The tank is pumped so the baffles and the tank walls can actually be seen, the field is checked for surfacing and the distribution box is opened. Dye testing where the history is unclear.',
    },
    {
      day: 'Same day',
      actor: 'Us',
      index: '03',
      name: 'Report issued',
      body: 'Written, with photographs, in the format your county accepts. The same day, because a report that arrives on day eight is a report that arrives too late to act on.',
    },
    {
      day: 'Day 3 to 5',
      actor: 'You',
      index: '04',
      name: 'If it passed, you are done',
      body: 'The report goes to the buyer’s agent and to the county if a transfer inspection is required. Nothing else happens.',
    },
    {
      day: 'Day 3 to 5',
      actor: 'Us',
      index: '05',
      name: 'If it failed, a quote the same week',
      body: 'Repair or replacement, priced, with the county permit requirements stated. A number that a negotiation can actually use.',
      callout:
        'A failed inspection with no quote attached turns into the buyer’s own worst estimate, which is always higher than the real one. Get the number before the negotiation, not after.',
    },
    {
      day: 'Day 5 to 10',
      actor: 'You and the buyer',
      index: '06',
      name: 'Negotiate with a real figure',
      body: 'Price reduction, escrow holdback or repair before closing. All three are workable. Guesswork is not.',
    },
    {
      day: 'After closing',
      actor: 'Us',
      index: '07',
      name: 'The work, if it is being done',
      body: 'Drain field repairs and replacements are permitted work and take longer than a pump-out. We will tell you honestly whether it fits before closing or needs an escrow.',
    },
  ] satisfies readonly TimelineRow[],
} as const

export const EMERGENCY = {
  eyebrow: 'Backing up into the house?',
  headline: 'Same-day pumping when sewage is backing up indoors.',
  body: 'Pumping stops the backup; it does not fix the cause. We will pump today so you can use the house, then tell you honestly whether it is the tank, the field or the line before you spend anything else.',
  stickyLabel: 'Backing up into the house?',
} as const

export interface ServiceItem {
  readonly name: string
  readonly body: string
  readonly price: string
}

export const SERVICES = {
  eyebrow: 'What we do',
  heading: 'Pumping, inspecting, and the repairs in between',
  lede: 'Most septic problems are not the tank. Knowing which ones are is the whole job.',
  footnote: 'Starting prices are sample data for demonstration. Replace with your own before launch.',
  items: [
    {
      name: 'Real estate inspection',
      body: 'Tank pumped so it can actually be seen, field checked, distribution box opened, report the same day in the format your county accepts.',
      price: 'From $425',
    },
    {
      name: 'Routine pumping',
      body: 'Every three to five years for most households. We record sludge depth each visit so the interval is set from your tank rather than from a rule of thumb.',
      price: 'From $375',
    },
    {
      name: 'Drain field diagnosis',
      body: 'Surfacing, soggy ground and slow drains are usually the field rather than the tank. Pumping makes it better for a fortnight, which is how people spend years pumping a field problem.',
      price: 'From $295',
    },
    {
      name: 'Drain field repair and replacement',
      body: 'Permitted work with a soil evaluation. The largest job this trade does and the one most worth a second opinion, which we encourage.',
      price: 'Quoted after evaluation',
    },
    {
      name: 'Baffles, lids and risers',
      body: 'Cheap parts that cause expensive failures. A riser fitted once ends the excavation on every future pump-out.',
      price: 'From $240',
    },
    {
      name: 'Emergency pumping',
      body: 'Same day when sewage is backing up indoors. It buys you use of the house; it is not the repair.',
      price: 'From $495',
    },
  ] satisfies readonly ServiceItem[],
} as const

export const WHY_US = {
  eyebrow: 'How it works',
  heading: 'Three things that explain most failures',
  lede: 'A septic system is simple, and almost every expensive failure traces back to one of these.',
  caption: 'Replace with a photograph of your own crew and truck before launch.',
  rows: [
    {
      term: 'The tank separates, the field disposes',
      detail:
        'Solids settle, grease floats, and what leaves the tank should be liquid. When solids reach the field, the soil clogs and the field is what fails. Almost every field failure is a tank that was not pumped.',
    },
    {
      term: 'Pumping is maintenance, not a cure',
      detail:
        'If the field has failed, pumping buys you a fortnight. Anybody who pumps you every three months without saying that is selling you a subscription.',
    },
    {
      term: 'Water use kills fields',
      detail:
        'A failing field usually has a laundry habit behind it. Three loads in one day sends more water through than the soil can take, every week, for years.',
    },
    {
      term: 'Roots and lids',
      detail:
        'Trees find drain fields, and buried lids mean every pump-out starts with a dig. Both are cheap to fix now and expensive to ignore.',
    },
  ],
} as const

export const AREAS = {
  heading: 'Where we work',
  lede: 'Sedgwick County and the surrounding rural townships. Inspection turnaround is what this list is really about.',
  towns: [
    'Wichita',
    'Derby',
    'Andover',
    'Goddard',
    'Maize',
    'Valley Center',
    'Haysville',
    'Mulvane',
    'Rose Hill',
    'Bel Aire',
    'Cheney',
    'Augusta',
  ],
  footnote:
    'Replace this list with your own towns. Written as plain text it is the cheapest local search signal a trade site has.',
} as const

export interface Testimonial {
  readonly quote: string
  readonly initial: string
  readonly name: string
  readonly town: string
}

export const TESTIMONIALS = {
  eyebrow: 'Reviews',
  heading: 'What people say afterwards',
  lede: 'Sample reviews for demonstration. Replace with your own, ideally pulled from Google.',
  items: [
    {
      quote:
        'Our septic failed on day eight of a ten-day contingency and I thought the sale was gone. Percline had a quote to us the next morning and we closed with an escrow holdback.',
      initial: 'M',
      name: 'Marlene J.',
      town: 'Derby',
    },
    {
      quote:
        'Three companies had pumped our tank in two years. Percline pumped it, then said the problem was the field and that pumping would never fix it. Expensive news, honestly delivered.',
      initial: 'D',
      name: 'Dwight K.',
      town: 'Valley Center',
    },
    {
      quote:
        'They fitted risers while they were there so the next pump-out will not start with a shovel. Small thing, and nobody else had ever mentioned it.',
      initial: 'A',
      name: 'Alma R.',
      town: 'Goddard',
    },
  ] satisfies readonly Testimonial[],
} as const

export const FAQ = {
  eyebrow: 'Questions',
  heading: 'Before you book',
  lede: 'The things people ask when a sale is depending on the answer.',
  items: [
    {
      question: 'How quickly can you inspect?',
      answer:
        'Usually within two working days, and the report goes out the same day as the visit. In spring, when everything lists at once, book as early in your contingency as you can rather than waiting for the general inspection.',
    },
    {
      question: 'Does the tank have to be pumped to inspect it?',
      answer:
        'For a proper inspection, yes. The baffles and the tank walls cannot be assessed through effluent, and an inspection that skips it is an inspection of a lid. Our inspection price includes the pump-out.',
    },
    {
      question: 'What makes a system fail an inspection?',
      answer:
        'Effluent surfacing at the field, a tank that will not hold level, failed or missing baffles, a collapsed distribution box, and evidence of solids in the field. Age alone does not fail a system.',
    },
    {
      question: 'Can it be repaired before closing?',
      answer:
        'Baffles, lids, risers and distribution boxes, usually yes. A drain field replacement is permitted work with a soil evaluation and rarely fits inside a contingency, which is why those normally settle as an escrow holdback or a price reduction.',
    },
    {
      question: 'How often should a tank be pumped?',
      answer:
        'Every three to five years for most households, but the honest answer is when the sludge depth says so. We measure it at each visit and write it down, so your interval comes from your tank rather than from a leaflet.',
    },
  ],
} as const

export const CLOSING = {
  heading: 'Under contract, and the septic has not been looked at?',
  lede: 'Book it now rather than on day eight. The report lands the same day.',
  primary: 'Book an inspection',
  secondary: 'Call (555) 110-1100',
} as const

export type SocialLabel = 'Twitter' | 'Instagram' | 'LinkedIn'

export const FOOTER = {
  blurb:
    'Septic pumping, inspection and drain field repair around Wichita. Real estate inspections turned around inside the contingency period, with the report the same day.',
  columns: [
    {
      heading: 'Services',
      links: [
        { label: 'Inspections', href: '#services' },
        { label: 'Routine pumping', href: '#services' },
        { label: 'Drain field repair', href: '#services' },
        { label: 'Emergency pumping', href: '#emergency' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'Selling a house', href: '#timeline' },
        { label: 'How septic works', href: '#why-us' },
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
  newsletterHeading: 'Stay Updated',
  newsletterBlurb:
    'Seasonal maintenance reminders and plain-English notes on what actually needs doing before winter.',
  newsletterLabel: 'Email address',
  newsletterPlaceholder: 'you@example.com',
  newsletterSubmit: 'Subscribe',
  newsletterSuccess: 'You are on the list. One reminder a season, nothing else.',
  newsletterError: 'Enter an address in the form name@example.com.',
  cookieCopy:
    'We use one cookie to remember this answer and nothing else. No advertising, no analytics resale.',
  legal: '© 2026 Percline Septic. All rights reserved.',
  componentDockLabel: 'More templates at Component Dock',
  socials: [
    { label: 'Twitter', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ] satisfies readonly { label: SocialLabel; href: string }[],
  socialPaths: {
    Twitter: 'M12 5.3v.7a6 6 0 0 0-3.6 2.9l-.4.7.8.1c.6 0 1.1-.1 1.6-.3-1.3.9-2.3 2.3-2.6 4A6.6 6.6 0 0 0 4 15.6c1.4.8 3 1.2 4.6 1.1A6.4 6.4 0 0 1 3 18.3 9 9 0 0 0 7.9 20c5.7 0 8.9-4.6 8.9-8.8v-.4c.6-.5 1.1-1 1.5-1.7-.5.2-1 .4-1.6.4.6-.4 1-1 1.2-1.7-.5.3-1.1.6-1.8.7A2.9 2.9 0 0 0 12 5.3Z',
    Instagram:
      'M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 4.5c-2 0-2.3 0-3.1.05-.8.04-1.3.17-1.8.36a3.6 3.6 0 0 0-1.3.86c-.4.4-.68.8-.86 1.3-.19.5-.32 1-.36 1.8C4.5 9.7 4.5 10 4.5 12s0 2.3.05 3.1c.04.8.17 1.3.36 1.8.18.5.46.9.86 1.3.4.4.8.68 1.3.86.5.19 1 .32 1.8.36.8.05 1.1.05 3.1.05s2.3 0 3.1-.05c.8-.04 1.3-.17 1.8-.36.5-.18.9-.46 1.3-.86.4-.4.68-.8.86-1.3.19-.5.32-1 .36-1.8.05-.8.05-1.1.05-3.1s0-2.3-.05-3.1c-.04-.8-.17-1.3-.36-1.8a3.6 3.6 0 0 0-.86-1.3 3.6 3.6 0 0 0-1.3-.86c-.5-.19-1-.32-1.8-.36C14.3 4.5 14 4.5 12 4.5Z',
    LinkedIn:
      'M6.6 8.4a1.85 1.85 0 1 0 0-3.7 1.85 1.85 0 0 0 0 3.7ZM5 9.8h3.2V19H5V9.8Zm5.2 0h3v1.3h.05c.42-.75 1.45-1.55 2.98-1.55 3.2 0 3.78 2 3.78 4.6V19h-3.1v-4.1c0-1-.02-2.3-1.45-2.3-1.45 0-1.68 1.1-1.68 2.25V19h-3.1V9.8Z',
  } as Record<SocialLabel, string>,
} as const

/** Shared by both forms: the sample-site email test. */
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i
/** Ten digits once the formatting is dropped. */
export const PHONE_PATTERN = /^\+?[\d\s().-]{10,}$/
