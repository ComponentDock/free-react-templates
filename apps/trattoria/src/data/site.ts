/**
 * Every string and every id the screen renders. The page's arithmetic is
 * content-driven — the headline's balanced 2/3-line breaks, the standfirst's
 * three lines at 1440 and the card's 42.19 px rows are keyed to exactly these
 * words — so the copy lives in one file and no component owns a string.
 */

/** The marketplace every outbound link points at (the template's only outbound). */
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** The section is labelled by its own headline. */
export const TITLE_ID = 'trattoria-title'

/** What the menu button's `aria-controls` points at. */
export const NAV_ID = 'trattoria-nav'

/** The card is labelled by its own `h2`. */
export const HOURS_TITLE_ID = 'trattoria-hours-title'

/**
 * The four in-page destinations. The reference points every anchor at `#` and
 * ships no second page, so the port resolves them against the one information
 * block the screen actually has — the card — instead of inventing pages.
 */
export const MENU_ID = 'menu'
export const WINE_ID = 'wine'
export const PRIVATE_ID = 'private'
export const GIFT_ID = 'gift'

/** The wordmark: one lowercase word over a place line. */
export const BRAND = { name: 'trattoria', place: 'Leith · Edinburgh' } as const

/** The wordmark goes "home", and the home of a one-screen page is its headline. */
export const WORDMARK_HREF = `#${TITLE_ID}`

export const MENU_LABEL = { open: 'Open menu', close: 'Close menu' } as const

export interface NavLink {
  readonly label: string
  readonly href: string
  /** The page the visitor is on. */
  readonly current?: boolean
}

/** The four links the reference draws, all four wired to the card's parts. */
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Menu', href: `#${MENU_ID}`, current: true },
  { label: 'Wine list', href: `#${WINE_ID}` },
  { label: 'Private dining', href: `#${PRIVATE_ID}` },
  { label: 'Gift cards', href: `#${GIFT_ID}` },
]

export const EYEBROW = 'Wood-fired kitchen since 2014'

/**
 * One `<h1>` in three runs: the sentence, the one gold italic word inside it,
 * and the rest. The `<em>` is the only coloured run on the page.
 */
export const HEADLINE = {
  before: 'Slow suppers, ',
  accent: 'fired',
  after: ' by oak and olive wood',
} as const

/** Three sentences — the three-line measure at 1440, four at 390, five at 320. */
export const STANDFIRST =
  'Handmade pasta, whole fish from the Firth of Forth and a short wine list of small Italian growers. Twelve tables by the water, one long table for friends.'

export const CTA = { label: 'Book a table', href: `#${MENU_ID}` } as const

export const MENU_LINK = { label: 'View tonight’s menu', href: `#${WINE_ID}` } as const

export interface HoursRow {
  readonly days: string
  readonly hours: string
}

/** Four rows, each a `div` of `dt`/`dd` on a dashed hairline. */
export const HOURS: readonly HoursRow[] = [
  { days: 'Monday', hours: 'Closed' },
  { days: 'Tue – Thu', hours: '17:00 – 22:00' },
  { days: 'Fri – Sat', hours: '12:00 – 23:00' },
  { days: 'Sunday', hours: '12:00 – 20:00' },
]

/**
 * The card's copy. `tel` is dialable — the reference ships a redacted href
 * (`tel:+441****0148`), which is not a phone number on any device.
 */
export const CONTACT = {
  phone: '0131 555 0148',
  tel: '+441315550148',
  address: '14 Commercial Quay, Leith, EH6 6LX',
  note: 'Walk-ins welcome at the bar.',
} as const

export const CARD_TITLE = 'Opening hours'

export const FOOTER = {
  prefix: 'More templates at',
  linkLabel: 'Component Dock',
  href: COMPONENT_DOCK_URL,
} as const

/** The photograph: a deterministic placeholder, never a bundled asset. */
export const PHOTO = {
  src: 'https://picsum.photos/seed/trattoria-1/1400/933',
  width: 1400,
  height: 933,
} as const
