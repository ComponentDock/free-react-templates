/**
 * Every string and number the page needs, transcribed from the reference design
 * and kept in one place so the sizing arithmetic and the tests share it.
 */

export interface NavLink {
  label: string
  /** In-page target; every label resolves to a band that exists on this page. */
  target: string
  /** The band id the scroll spy watches. */
  spy: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Size mine', target: '#size', spy: 'size' },
  { label: 'Tank vs tankless', target: '#options', spy: 'options' },
  { label: 'Services', target: '#process', spy: 'process' },
  { label: 'Service areas', target: '#areas', spy: 'areas' },
  { label: 'About', target: '#why-us', spy: 'why-us' },
  { label: 'Contact', target: '#contact', spy: 'contact' },
]

/** The band ids the spy observes, in document order. */
export const SPY_IDS = NAV_LINKS.map((link) => link.spy)

export const BRAND = {
  name: 'Kettle',
  tagline: 'Water Heaters',
  phone: '(555) 090-0900',
  phoneHref: 'tel:5550900900',
  email: 'office@kettle.example',
  address: '1815 West Broad Street, Richmond, VA 23220',
  licence: 'VA DPOR #0000000000',
  certification: 'Gas fitting certified',
  region: 'Greater Richmond',
  locality: 'Richmond, VA',
  domain: 'kettle.free.componentdock.com',
}

export const RATING = {
  score: '4.9',
  heroSuffix: '410+ reviews on Google · sample data',
  stripSuffix: '410+ reviews on Google (sample)',
}

export const CHECKLIST = [
  'Sized on simultaneous demand, not on square footage',
  'Incoming water temperature actually accounted for',
  'Common sizes on the truck for same-day swaps',
  'We will tell you when a repair is the better answer',
]

export const PROBLEMS = [
  'No hot water at all',
  'Running out too quickly',
  'The tank is leaking',
  'It is old and I want to plan',
  'Thinking about tankless',
  'Rusty or smelly hot water',
]

export const PROBLEM_PLACEHOLDER = 'Choose the closest match'

export const FIXTURES = [
  { value: 'shower', label: 'Shower', gpm: 2, gallons: 20 },
  { value: 'shower2', label: 'Second shower', gpm: 2, gallons: 20 },
  { value: 'bath', label: 'Filling a bath', gpm: 4, gallons: 30 },
  { value: 'kitchen', label: 'Kitchen sink', gpm: 1.5, gallons: 4 },
  { value: 'dishwasher', label: 'Dishwasher', gpm: 1.5, gallons: 6 },
  { value: 'laundry', label: 'Washing machine', gpm: 2, gallons: 7 },
] as const

/** The two showers are on when the page loads, which is what the tool assumes. */
export const DEFAULT_FIXTURES = ['shower', 'shower2']

export const CLIMATES = [
  { value: '62', label: 'Mild winter', unit: '62°F' },
  { value: '52', label: 'Virginia average', unit: '52°F' },
  { value: '42', label: 'Hard winter', unit: '42°F' },
] as const

export const DEFAULT_CLIMATE = '52'

export const PEOPLE = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6+' },
] as const

export interface OptionCell {
  title: string
  blurb: string
  price: string
}

export const OPTIONS: OptionCell[] = [
  {
    title: 'Tank, replaced like for like',
    blurb:
      'Cheapest to fit, simplest to replace next time, and perfectly adequate for most households. Recovery is the limit rather than capacity.',
    price: 'From $1,450 installed',
  },
  {
    title: 'Tank, upsized',
    blurb:
      'When the household grew or the old one was undersized. Needs the space and sometimes a bigger gas line, but it is still the cheap answer.',
    price: 'From $1,750 installed',
  },
  {
    title: 'Heat pump water heater',
    blurb:
      'Two to three times the efficiency of a conventional electric tank. Needs space and some ambient warmth, and it is noticeably not silent.',
    price: 'From $2,900 installed',
  },
  {
    title: 'Tankless, gas',
    blurb:
      'Endless hot water and a smaller footprint. Frequently needs a larger gas line and new venting, which is the cost nobody mentions on the phone.',
    price: 'From $3,600 installed',
  },
  {
    title: 'Tankless, electric',
    blurb:
      'Suits point-of-use and mild climates. In a hard Virginia winter, whole-house electric tankless asks more of a domestic panel than most can give.',
    price: 'From $2,200 installed',
  },
  {
    title: 'Repair rather than replace',
    blurb:
      'Thermostats, elements, gas valves and anodes are all repairable. If the tank itself is sound we will say so.',
    price: 'From $180',
  },
]

export const WHY_US = [
  {
    term: 'We ask what runs at once',
    detail:
      'Two showers together is a bigger load than four spread across a morning, and no chart of square footage captures that. It is the first question on the phone.',
  },
  {
    term: 'We ask how cold your water is',
    detail:
      'A tankless unit rated for seven gallons a minute delivers about half that at a seventy degree rise. Sizing a unit without that number is how somebody ends up cold in January.',
  },
  {
    term: 'We check the gas line before quoting',
    detail:
      'Most tankless conversions need a larger supply and new venting. Finding that out on installation day is the most common way this job goes wrong and doubles.',
  },
  {
    term: 'We will tell you to repair it',
    detail:
      'A thermostat or an element on a sound tank is a cheap fix. Selling a replacement into that is the easiest money in this trade and the fastest way to lose the next one.',
  },
]

export interface Step {
  name: string
  body: string
  duration: string
}

export const STEPS: Step[] = [
  {
    name: 'Size it',
    body: 'Use the tool above or tell us on the phone what might run at once. We will give you both answers, tank and tankless, with the trade-offs.',
    duration: 'Two minutes',
  },
  {
    name: 'Fixed quote, including the awkward bits',
    body: 'Gas line, venting, expansion tank, pan and permit, all in the quoted figure. A quote that leaves them out is not cheaper, it is incomplete.',
    duration: 'Same day',
  },
  {
    name: 'We fit it',
    body: 'Most tank swaps are done in half a day and we carry the common sizes. Tankless conversions are usually one full day.',
    duration: 'Half a day to one day',
  },
]

export const TOWNS = [
  'Richmond',
  'Henrico',
  'Chesterfield',
  'Glen Allen',
  'Midlothian',
  'Short Pump',
  'Mechanicsville',
  'Ashland',
  'Bon Air',
  'Sandston',
  'Chester',
  'Powhatan',
]

export interface Testimonial {
  quote: string
  name: string
  town: string
  initials: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Two companies quoted a tankless without ever asking about the gas line. Kettle measured it, told me it would need upgrading, and gave me both prices. I went tankless anyway but I knew what I was buying.',
    name: 'Trevor B.',
    town: 'Church Hill',
    initials: 'T',
  },
  {
    quote:
      'The sizing tool said fifty gallon and the guy on the phone said the same before I told him what it said. That is the first time a quote has matched the website.',
    name: 'Shanice D.',
    town: 'Midlothian',
    initials: 'S',
  },
  {
    quote:
      'Turned out my element had failed, not the tank. Charged me under two hundred and told me the tank had five years left. They will be replacing it when it goes.',
    name: 'Aled M.',
    town: 'Glen Allen',
    initials: 'A',
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const FAQS: FaqItem[] = [
  {
    question: 'Is tankless worth it?',
    answer:
      'Sometimes. It gives endless hot water, saves space and uses less energy in a household that draws hot water in bursts. It costs more to fit, frequently needs a bigger gas line and new venting, and in a cold-water winter a single unit may not keep up with two simultaneous showers. The sizing tool above will tell you which case you are.',
  },
  {
    question: 'How long should a water heater last?',
    answer:
      'Ten to twelve years for a conventional tank in this region, less on hard water and longer if the anode rod was replaced. If yours is over ten, plan for it rather than waiting for the flood.',
  },
  {
    question: 'My tank is leaking. Can it be repaired?',
    answer:
      'If the water is coming from a fitting, usually yes. If it is coming from the tank itself, no. A leaking tank is a failed tank and anybody offering to repair one is selling you a visit.',
  },
  {
    question: 'What is an expansion tank and do I need one?',
    answer:
      'A small vessel that absorbs pressure as water heats and expands. On a closed system it is required by code, and leaving it out is the most common corner cut on a cheap quote. Ours are included in the quoted price.',
  },
  {
    question: 'Why is one quote so much cheaper?',
    answer:
      'Usually because it excludes the expansion tank, the pan, the permit, the gas line work or the venting. Ask any cheaper quote which of those five it includes, and the gap normally explains itself.',
  },
]

export interface FooterColumn {
  head: string
  links: string[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    head: 'Services',
    links: ['Tank replacement', 'Tankless conversion', 'Heat pump water heaters', 'Repairs'],
  },
  { head: 'Company', links: ['Size mine', 'Tank vs tankless', 'Service areas', 'About'] },
  { head: 'Support', links: ['Contact', 'Privacy', 'Terms'] },
]

/** Footer links that have a band on this page; the rest are disabled text. */
export const FOOTER_TARGETS: Record<string, string | null> = {
  'Size mine': '#size',
  'Tank vs tankless': '#options',
  'Service areas': '#areas',
  About: '#why-us',
  Contact: '#contact',
  Repairs: '#options',
  'Tank replacement': '#options',
  'Tankless conversion': '#options',
  'Heat pump water heaters': '#options',
  Privacy: null,
  Terms: null,
}

export interface SocialTile {
  label: string
  href: string
  path: string
}

export const SOCIAL: SocialTile[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/componentdock',
    path: 'M18.9 2H22l-6.8 7.8L23 22h-6.3l-4.9-6.4L6.2 22H3l7.3-8.3L1.4 2h6.4l4.4 5.8L18.9 2Zm-1.1 18h1.7L7.1 3.7H5.3L17.8 20Z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/componentdock',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .5 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.5-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 5.1a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/componentdock',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.6-1.9 3.9 0 4.6 2.4 4.6 5.6V21h-4v-5.7c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21h-4V9Z',
  },
]

export const SAMPLE_PRICES =
  'Starting prices are sample data for demonstration. Replace with your own before launch.'
export const SAMPLE_REVIEWS =
  'Sample reviews for demonstration. Replace with your own, ideally pulled from Google.'
export const SAMPLE_SIZING =
  'Illustrative sizing for demonstration. Flow rates and first-hour ratings vary by fixture, by model and by how the system is plumbed. Replace these figures and have the logic reviewed against your own products before launch.'
export const SAMPLE_TOWNS =
  'Replace this list with your own towns. Written as plain text it is the cheapest local search signal a trade site has.'
export const SAMPLE_FIGURE = 'Replace with a photograph of your own installation work before launch.'
