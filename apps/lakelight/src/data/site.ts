/**
 * Every string, id and destination the page needs, in one place.
 *
 * The copy is a holiday-rental marketplace for cabins around a mountain lake:
 * the eyebrow names the range, the headline trades the traffic for the water,
 * and the three proof points are a count, a rating and a policy — the same
 * shapes the reference uses, with none of its words. The stay card's figures
 * and its place both have to agree with the panel's first suggestion.
 */

export const TOP_ID = 'top'
export const HERO_ID = 'stays'
export const PROOF_ID = 'proof'
export const TITLE_ID = 'lk-title'
export const NAV_ID = 'lk-nav'
export const FORM_ID = 'lk-search'
export const STATUS_ID = 'lk-status'

export const BRAND = { name: 'lakelight', href: '#top' }

export interface NavLink {
  readonly label: string
  readonly href: string
  readonly current?: boolean
  readonly external?: boolean
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Stays', href: '#stays', current: true },
  { label: 'Experiences', href: 'https://www.componentdock.com/', external: true },
  { label: 'Guides', href: 'https://www.componentdock.com/', external: true },
  { label: 'List your place', href: 'https://www.componentdock.com/', external: true },
]

export const LOGIN = {
  label: 'Log in',
  href: 'https://www.componentdock.com/',
}

export const MENU_LABEL = { open: 'Open menu', close: 'Close menu' }

/** The eyebrow: a 28 px orange rule, then this line in teal. */
export const EYEBROW = 'Hand-picked cabins in the Pyrenees'

/**
 * The display headline, cut into three lines by the copy column at 1440 and
 * into one line at 900, where the layout drops to a single column. The accent
 * is the italic `<em>`.
 */
export const HEADLINE = { roman: 'Trade the traffic for', accent: 'water.' }

export const SUB =
  'Lake cabins, stone barns and shepherd huts from Aigüestortes to Ordesa, ' +
  'each one walked through before it goes live.'

export interface Proof {
  readonly figure: string
  readonly phrase: string
}

export const PROOF: readonly Proof[] = [
  { figure: '1,860', phrase: 'lakeside stays' },
  { figure: '4.8', phrase: 'average guest rating' },
  { figure: 'Flexible', phrase: 'cancellation on most stays' },
]

export interface Destination {
  readonly name: string
  readonly nearest: string
  readonly currency: string
}

/** The five suggestions behind the destination field. */
export const DESTINATIONS: readonly Destination[] = [
  { name: 'Aigüestortes, Spain', nearest: 'Estany Llong', currency: '€' },
  { name: 'Ordesa, Spain', nearest: 'Torla', currency: '€' },
  { name: 'Gavarnie, France', nearest: 'Gèdre', currency: '€' },
  { name: 'Cauterets, France', nearest: 'Cambasque', currency: '€' },
  { name: 'Ordino, Andorra', nearest: 'Llorts', currency: '€' },
]

export const FIELD_LABELS = {
  where: 'Where',
  checkIn: 'Check in',
  checkOut: 'Check out',
  guests: 'Guests',
} as const

export const WHERE_PLACEHOLDER = 'Ordesa, Spain'
export const SUBMIT_LABEL = 'Search'

/** The guest select's options. The label is also the value. */
export const GUESTS: readonly string[] = [
  '1 guest',
  '2 guests',
  '3 guests',
  '4 guests',
  '5–6 guests',
  '7–8 guests',
]

export const DEFAULT_GUEST = '2 guests'

/** How far ahead the panel pre-fills, and for how many nights. */
export const DEFAULT_LEAD_DAYS = 21
export const DEFAULT_NIGHTS = 3

/** The floating stay card. Its price is per night, in euros. */
export const STAY_CARD = {
  title: 'Cabana del Llac',
  rating: '4.88',
  ratingLabel: 'Rated 4.88 out of 5',
  place: 'Estany Llong, Aigüestortes · sleeps 4',
  price: '€148',
  suffix: '/ night',
}

export const MESSAGES = {
  missingPlace: 'Choose a destination.',
  badDates: 'Check out has to be after check in.',
}

/**
 * The status line's sentence: place, guests, two `d MMM` dates and a night
 * count, ending with an ellipsis. The plural is the only branch in the copy.
 */
export const SUBMIT_MESSAGE = {
  defaultGuest: DEFAULT_GUEST,
  line: (place: string, guests: string, from: string, to: string, nights: number): string =>
    `Searching stays in ${place} for ${guests}, ${from} to ${to} (${nights} ${
      nights === 1 ? 'night' : 'nights'
    })…`,
}

export const FOOTER = {
  prefix: 'More templates at',
  href: 'https://www.componentdock.com/',
  linkLabel: 'Component Dock',
}
