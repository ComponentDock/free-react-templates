/**
 * Every string and every measured constant the page renders. The screen's
 * arithmetic is content-driven — the headline's two-line wrap, the standfirst's
 * three lines at 1440 and the facts row's wrap seam are keyed to exactly these
 * words — so the copy lives in one file and no component owns a string.
 */

/** The marketplace every outbound link points at (the template's only outbound). */
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** The section is labelled by the headline it contains, and it is where the bar lands. */
export const TITLE_ID = 'soapbox-title'

/** What the menu button's `aria-controls` points at. */
export const NAV_ID = 'soapbox-nav'

/** The card is labelled by its own `h2`; the Tickets pill lands on it. */
export const COUNT_TITLE_ID = 'soapbox-count-title'

/** The facts row is the page's "schedule" — the two secondary links land on it. */
export const FACTS_ID = 'soapbox-facts'

export const WHEN_ID = 'soapbox-when'

export const VENUE_ID = 'soapbox-venue'

export const SPEAKERS_ID = 'soapbox-speakers'

/** The wordmark: one lowercase word beside the lime diamond. */
export const BRAND = 'soapbox'

export const WORDMARK_HREF = `#${TITLE_ID}`

export const MENU_LABEL = { open: 'Open menu', close: 'Close menu' } as const

export interface NavLink {
  readonly label: string
  readonly href: string
  /** The page the visitor is on. */
  readonly current?: boolean
}

/**
 * The four links the reference draws. Every one resolves inside the page — the
 * reference points all of its anchors at `#` and has no second page to reach,
 * so the event's own summary row and the countdown become the destinations.
 */
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Speakers', href: `#${SPEAKERS_ID}` },
  { label: 'Schedule', href: `#${COUNT_TITLE_ID}`, current: true },
  { label: 'Venue', href: `#${VENUE_ID}` },
  { label: 'Sponsors', href: `#${FACTS_ID}` },
]

/** The pill's label and its destination (the card, where the seats are sold). */
export const TICKETS = { label: 'Tickets', href: `#${COUNT_TITLE_ID}` } as const

export const EDITION = 'The 6th edition · 2 days · 1 track'

/**
 * One `<h1>`, two runs. `text-transform` uppercases the render, so the markup
 * stays sentence case and the accessibility tree reads "Frontend North 2027".
 */
export const HEADLINE = { line1: 'Frontend', line2: 'North', year: '2027' } as const

/**
 * Three sentences, 216 characters: three lines at 1440 in the 679 px measure.
 * Changing the length moves that seam.
 */
export const STANDFIRST =
  'Two days of honest talks on CSS, accessibility, performance and design systems, from people who ship them for a living. Plus workshops, a crowd of 900 and the best coffee in the North.'

export interface DatePart {
  /** The machine-readable value on the `<time>`. */
  readonly iso: string
  /** What the visitor reads inside it. */
  readonly text: string
}

export interface Fact {
  readonly id: string
  readonly label: string
  /** The `dd` text — absent when the row is a date range or an avatar cluster. */
  readonly value?: string
  /** A two-part date range, each part its own `<time>`. */
  readonly dates?: readonly [DatePart, DatePart]
  /** Draw the overlapping initials cluster before the value. */
  readonly faces?: boolean
}

export const FACTS: readonly Fact[] = [
  {
    id: WHEN_ID,
    label: 'When',
    dates: [
      { iso: '2027-03-18', text: '18' },
      { iso: '2027-03-19', text: '19 March 2027' },
    ],
  },
  { id: VENUE_ID, label: 'Where', value: 'Manchester Central, UK' },
  { id: SPEAKERS_ID, label: 'Speakers', value: '24 talks', faces: true },
]

export interface Face {
  readonly initials: string
  /** The chip's own fill, set as a custom property. */
  readonly fill: string
}

/** The three overlapping chips are the page's only "faces" and are `aria-hidden`. */
export const FACES: readonly Face[] = [
  { initials: 'NO', fill: '#ffb4a2' },
  { initials: 'KV', fill: '#a7f3d0' },
  { initials: 'RB', fill: '#fde68a' },
]

/** Doors open at this instant; the two `<time>` values above are its date. */
export const TARGET = '2027-03-18T09:00:00+00:00'

export const CARD = {
  title: 'Doors open in',
  open: 'Doors are open',
  chip: 'Early bird',
  chipHeld: 'Seat held',
  price: '£299',
  priceNote: 'early bird ·',
  priceWas: '£449',
  priceAfter: 'from 1 January',
  secondary: 'See the full schedule',
  secondaryHref: `#${FACTS_ID}`,
  note: 'One seat is being held for you. This is a template demo, so there is no payment step.',
} as const

export const TILES = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
] as const

export const CTA = { label: 'Get your ticket', held: 'Ticket held' } as const

export const FOOTER = {
  prefix: 'More templates at',
  linkLabel: 'Component Dock',
  href: COMPONENT_DOCK_URL,
} as const
