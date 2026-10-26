/**
 * Every string and every measured constant the page renders. The column's
 * rhythm is content-driven — the headline's two-line wrap, the three-line
 * description and the perks strip's wrap seam are keyed to exactly these words —
 * so the copy lives in one place and no component owns a string.
 */

/** The marketplace every outbound link points at. */
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** The section is labelled by the headline it contains; the bar lands here too. */
export const TITLE_ID = 'overtone-title'

/** What the menu button's `aria-controls` points at. */
export const NAV_ID = 'overtone-nav'

/** The wordmark is two nodes on one line: the name and a lighter suffix. */
export const BRAND = 'Overtone'
export const BRAND_SUFFIX = 'audio'

export const WORDMARK_HREF = `#${TITLE_ID}`

export const MENU_LABEL = { open: 'Open menu', close: 'Close menu' } as const

export interface NavLink {
  readonly label: string
  readonly href: string
  /** The page the visitor is on. */
  readonly current?: boolean
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Headphones', href: `#${TITLE_ID}`, current: true },
  { label: 'Earbuds', href: `#${TITLE_ID}` },
  { label: 'Speakers', href: `#${TITLE_ID}` },
  { label: 'Support', href: `#${TITLE_ID}` },
]

/** How many items the cart badge starts with. */
export const INITIAL_CART_COUNT = 2

export const EYEBROW = { pill: 'New', text: 'Over-ear · Wireless' } as const

export const HEADLINE = 'Contour ANC Headphones'

export const RATING = {
  stars: '★★★★★',
  score: '4.7 out of 5',
  reviews: '2,318 reviews',
} as const

export const PRICE = { now: '$249', was: '$299', wasLabel: 'Was ', save: 'Save $50' } as const

/**
 * Three sentences, 142 characters: three lines at 1440 in the 479 px column —
 * the measured 74.39 box. Changing the length moves that seam.
 */
export const DESCRIPTION =
  'Adaptive noise cancelling that reads the room forty times a second, forty hours of playback per charge, and memory-foam cups you forget about.'

export interface Colour {
  /** Shown in the caption pill, the legend and the stock line. */
  readonly name: string
  /** The swatch disc's fill. */
  readonly sw: string
  /** The photograph that replaces the previous one. */
  readonly src: string
  /** Its alt sentence — rewritten to the placeholder's subject, never copied. */
  readonly alt: string
  /** The stock sentence; the `/only/i` match is what makes the line "low". */
  readonly stock: string
}

const MIDNIGHT: Colour = {
  name: 'Midnight',
  sw: '#1c1d21',
  src: 'https://picsum.photos/seed/overtone-midnight/900/600',
  alt: 'Matte black over-ear headphones resting on a dark slate surface',
  stock: 'In stock, ships tomorrow',
}

const STONE: Colour = {
  name: 'Stone',
  sw: '#8b8e94',
  src: 'https://picsum.photos/seed/overtone-stone/900/600',
  alt: 'Warm grey over-ear headphones standing on a pale wooden desk',
  stock: 'In stock, ships tomorrow',
}

const BLUSH: Colour = {
  name: 'Blush',
  sw: '#f2b8c6',
  src: 'https://picsum.photos/seed/overtone-blush/900/600',
  alt: 'Blush pink over-ear headphones against a soft peach backdrop',
  stock: 'Only 4 left, ships in 3 days',
}

export const COLOURS: readonly Colour[] = [MIDNIGHT, STONE, BLUSH]

/** Midnight is checked on load — the swatch the photograph and the stock line describe. */
export const DEFAULT_COLOUR = MIDNIGHT

/** The fieldset's radio group. */
export const COLOUR_GROUP = 'overtone-colour'

export interface Badge {
  readonly value: string
  readonly label: string
}

/** The three chips floating over the photograph's bottom edge. */
export const BADGES: readonly Badge[] = [
  { value: '40 h', label: 'battery' },
  // A true minus (U+2212), not a hyphen.
  { value: '−35 dB', label: 'noise cancelling' },
  { value: '268 g', label: 'weight' },
]

export const CART_LABEL = (count: number) => `Cart, ${count} items`

/** The buy bar's two labels: the resting one names the price, the confirmation does not. */
export const ADD_LABEL = `Add to cart · ${PRICE.now}`
export const ADDED_LABEL = 'Added · see cart'

export const WISHLIST_LABEL = 'Save to wishlist'

export const FOOTER = {
  prefix: 'More templates at',
  linkLabel: 'Component Dock',
  href: COMPONENT_DOCK_URL,
} as const
