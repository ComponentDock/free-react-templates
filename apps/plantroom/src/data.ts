export interface NavLink {
  label: string
  target: string
  /** The band id the scroll-spy watches, or `null` when the label has no in-page target. */
  spy: string | null
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Response tiers', target: '#response', spy: 'response' },
  { label: 'Agreements', target: '#agreement', spy: 'agreement' },
  { label: 'Services', target: '#sectors', spy: 'sectors' },
  { label: 'Service areas', target: '#areas', spy: 'areas' },
  { label: 'About', target: '#why-us', spy: 'why-us' },
  { label: 'Contact', target: '#contact', spy: 'contact' },
]

export const LICENCE = {
  registration: 'TX TACLA #00000C',
  insurance: '$5M general liability',
  county: 'Tarrant County',
  rating: '4.8',
  reviews: '70+ reviews on Google',
}

export const CONTACT = {
  address: '900 Northeast 28th Street, Fort Worth, TX 76106',
  phoneLabel: '(555) 100-1000',
  phoneHref: 'tel:5551001000',
  email: 'service@plantroom.example',
}

export const HERO_CHECKLIST = [
  'Response tiers written into the agreement',
  'A service credit when we miss one',
  'Named account engineer, not a dispatch queue',
  'Asset register and service history you can export',
]

export const SURVEY_PROMPTS = [
  'Choose the closest match',
  'Current contractor is not responding',
  'Our agreement is up for renewal',
  'Repeated failures on the same unit',
  'New building or new tenancy',
  'We have no agreement at all',
  'Budgeting for replacement',
]

export interface Tier {
  name: string
  sla: string
  window: string
  qualifies: string
  remedy: string
  featured: boolean
}

export const TIERS: Tier[] = [
  {
    name: 'Priority one',
    sla: '2 hours',
    window: '24 hours, every day',
    qualifies:
      'Total loss of heating or cooling to an occupied space, a refrigeration failure with stock at risk, or anything that shuts a kitchen or a server room.',
    remedy:
      "The month's agreement fee is credited in full. No claim form, applied to the next invoice automatically.",
    featured: true,
  },
  {
    name: 'Priority two',
    sla: 'Next working day',
    window: 'Working hours',
    qualifies:
      'Partial loss, a unit running but out of specification, or a failure in a space that is not currently occupied.',
    remedy: "Half the month's agreement fee is credited.",
    featured: false,
  },
  {
    name: 'Planned',
    sla: 'On the agreed date',
    window: 'Working hours',
    qualifies:
      'Scheduled maintenance visits, filter changes, coil cleans, quoted repairs and anything you have agreed can wait.',
    remedy: 'Rescheduled inside five working days at our cost, including any out-of-hours premium.',
    featured: false,
  },
]

export interface GridCell {
  title: string
  body: string
  badge: string
}

export const INCLUSIONS: GridCell[] = [
  {
    title: 'Scheduled maintenance visits',
    body: 'Quarterly or monthly by asset type, with the task list per visit published rather than described as comprehensive.',
    badge: 'In the monthly fee',
  },
  {
    title: 'Filters and belts',
    body: 'Supplied and fitted as part of the visit. Charging for consumables on top is how a low monthly figure becomes an average one.',
    badge: 'In the monthly fee',
  },
  {
    title: 'Response cover',
    body: 'The tiers above, with the remedy. Callout and the first hour of labour are included on priority one.',
    badge: 'In the monthly fee',
  },
  {
    title: 'Asset register',
    body: 'Every unit on site with make, model, serial, age, refrigerant and condition. Exportable, and yours if you leave us.',
    badge: 'In the monthly fee',
  },
  {
    title: 'Statutory logs',
    body: 'Refrigerant records and F-gas equivalent documentation kept current and available to your auditor without a request.',
    badge: 'In the monthly fee',
  },
  {
    title: 'Quoted repairs',
    body: 'Anything beyond the maintenance scope, quoted in writing with a photograph, approved by you before it starts.',
    badge: 'Quoted per job',
  },
]

export const COMMITMENTS = [
  {
    title: 'The asset register is yours',
    body: 'Exported on request and on the day you leave, including service history. Contractors who hold your asset data hostage are relying on that friction rather than on the work.',
  },
  {
    title: 'A named engineer, not a queue',
    body: 'The same person on your site and the same person you call. They know which unit is the difficult one without reading a ticket.',
  },
  {
    title: 'Repairs are quoted with a photograph',
    body: 'Before they start, with the failed part shown. Approval is yours. Nothing gets fitted on a purchase order raised after the fact.',
  },
  {
    title: 'We tell you when to replace',
    body: 'With the numbers: repair spend to date against replacement cost, and the efficiency difference at your tariff. Most contractors are happy to keep repairing a unit that should be condemned.',
  },
]

export interface RegisterRow {
  asset: string
  age: string
  gas: string
  condition: 'Good' | 'Fair' | 'Replace'
}

export const REGISTER_ROWS: RegisterRow[] = [
  { asset: 'RTU-01', age: '4 yr', gas: 'R-410A', condition: 'Good' },
  { asset: 'RTU-02', age: '11 yr', gas: 'R-410A', condition: 'Fair' },
  { asset: 'RTU-03', age: '17 yr', gas: 'R-22', condition: 'Replace' },
  { asset: 'SPL-01', age: '6 yr', gas: 'R-410A', condition: 'Good' },
  { asset: 'CU-COMMS', age: '9 yr', gas: 'R-410A', condition: 'Good' },
]

export const SECTORS: GridCell[] = [
  {
    title: 'Restaurants and kitchens',
    body: 'Refrigeration, make-up air and extract. A walk-in failure on a Friday is stock loss measured in thousands.',
    badge: 'Priority one by default',
  },
  {
    title: 'Data and comms rooms',
    body: 'Close control and split systems with temperature alarming. Usually the smallest room and the largest consequence in a building.',
    badge: 'Priority one by default',
  },
  {
    title: 'Offices and multi-tenant',
    body: 'Rooftop units and VRF, with tenant complaints routed through one point of contact rather than through you.',
    badge: 'Priority two, upgradeable',
  },
  {
    title: 'Retail and showrooms',
    body: 'Comfort during opening hours and quiet enough to be ignored. Scheduled work outside trading.',
    badge: 'Priority two, upgradeable',
  },
  {
    title: 'Warehouses and light industrial',
    body: 'Make-up air, destratification and process cooling. Large plant, long intervals, expensive when neglected.',
    badge: 'Quoted per site',
  },
  {
    title: 'Medical and dental',
    body: 'Ventilation rates and filtration to specification, documented for inspection rather than assumed.',
    badge: 'Priority one by default',
  },
]

export const SERVICE_TOWNS = [
  'Fort Worth',
  'Arlington',
  'Grapevine',
  'Southlake',
  'Keller',
  'Bedford',
  'Euless',
  'Hurst',
  'Mansfield',
  'Burleson',
  'Haltom City',
  'North Richland Hills',
]

export interface Testimonial {
  quote: string
  initials: string
  name: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They credited a month's fee without being asked when they missed a two-hour response by forty minutes. Our previous contractor would have argued about when the clock started.",
    initials: 'D',
    name: 'Dana Okonjo',
    role: 'Facilities manager, multi-tenant office',
  },
  {
    quote:
      'The asset register arrived in the first month with three units flagged as beyond economic repair. We had been paying to repair two of them for years.',
    initials: 'B',
    name: 'Bill Haverty',
    role: 'Operations, restaurant group',
  },
  {
    quote:
      'Same engineer for two years. He knows which rooftop unit is the awkward one and I have never had to explain the site twice.',
    initials: 'P',
    name: 'Priya Venkataraman',
    role: 'Estates, medical group',
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const FAQS: FaqItem[] = [
  {
    question: 'What happens if you miss a response time?',
    answer:
      'A service credit against the agreement fee, applied automatically rather than on request. Ask every bidder this. Most will describe their commitment to service, which is a way of not answering.',
  },
  {
    question: 'Who owns the asset data?',
    answer:
      'You do. It is exported on request and on the day the agreement ends, with the full service history. A contractor holding that data is relying on switching friction rather than on the work.',
  },
  {
    question: 'Are consumables included?',
    answer:
      'Filters and belts, yes, fitted at the scheduled visit. Refrigerant, compressors and anything beyond the maintenance scope is quoted separately with a photograph before it is fitted.',
  },
  {
    question: 'Will we get the same engineer?',
    answer:
      'A named account engineer plus a named backup, both of whom have been on your site. Holiday and sickness cover is a person who has been there, not the next available van.',
  },
  {
    question: 'Can we start without an agreement?',
    answer:
      'Yes, on time and materials, and plenty of clients do for the first year. You will not get the tiered response times, because those depend on us holding capacity for you.',
  },
]

export const FOOTER_SERVICES = [
  'Rooftop units',
  'Close control',
  'Refrigeration',
  'Extract ventilation',
]

export const FOOTER_COMPANY: { label: string; target: string }[] = [
  { label: 'Response tiers', target: '#response' },
  { label: 'Agreements', target: '#agreement' },
  { label: 'Service areas', target: '#areas' },
  { label: 'About', target: '#why-us' },
]

/**
 * `target: null` means the label has no destination on a one-page site — it is
 * rendered as plain text rather than as an anchor that goes nowhere.
 */
export const FOOTER_SUPPORT: { label: string; target: string | null }[] = [
  { label: 'Contact', target: '#contact' },
  { label: 'Privacy', target: null },
  { label: 'Terms', target: null },
]

export const FOOTER_LEGAL: { label: string; target: string | null }[] = [
  { label: 'Privacy Policy', target: null },
  { label: 'Terms of Service', target: null },
]
