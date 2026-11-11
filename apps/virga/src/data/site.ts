/**
 * Every string, id and destination the screen renders. The page's geometry is
 * content-driven — the headline's balanced line count, the sub-paragraph's
 * three lines and the stats band's cell heights all key off exactly these
 * words — so the copy lives in one file and no component owns a string.
 */

/** The marketplace every outbound link points at. */
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** The shell's own anchor: the wordmark, the current nav item and "Sign in". */
export const TOP_ID = 'top'

/** The section is labelled by its own headline. */
export const TITLE_ID = 'virga-title'

/** The stats band, and the destination of "Network" and the announcement pill. */
export const NETWORK_ID = 'network'

/** Ties the menu button to the panel it opens. */
export const NAV_ID = 'virga-nav'

/** The wordmark: one lowercase product name beside the gradient mark. */
export const BRAND = { name: 'virga' } as const

export const WORDMARK_HREF = `#${TOP_ID}`

export interface NavLink {
  readonly label: string
  readonly href: string
  /** The page the visitor is on. */
  readonly current?: boolean
  /** Leaves the site — needs a new tab and a rel. */
  readonly external?: boolean
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Platform', href: `#${TOP_ID}`, current: true },
  { label: 'Network', href: `#${NETWORK_ID}` },
  { label: 'Docs', href: COMPONENT_DOCK_URL, external: true },
  { label: 'Pricing', href: COMPONENT_DOCK_URL, external: true },
]

/** The quiet end-of-bar link — it returns to the top rather than leaving. */
export const SIGN_IN = { label: 'Sign in', href: `#${TOP_ID}` } as const

/** The one ink-filled bar button. */
export const DEPLOY_NOW = {
  label: 'Deploy now',
  href: COMPONENT_DOCK_URL,
  external: true,
} as const

/** The two labels the menu button announces, swapped with its state. */
export const MENU_LABEL = { open: 'Open menu', close: 'Close menu' } as const

/**
 * The announcement pill: a version tag, one reach sentence and a chevron that
 * points at the band below. The sentence stays short — the pill is inline-flex
 * and must not wrap at 320.
 */
export const ANNOUNCE = {
  tag: '2.1',
  text: 'Now live in 41 regions',
  href: `#${NETWORK_ID}`,
} as const

/**
 * One `<h1>` in two runs: the first line in ink and the second a block `span`
 * painted sky-to-violet. The second line is structural — a block, not a `<br>`
 * — because the gradient has to span the whole line, not each word.
 */
export const HEADLINE = {
  lead: 'Push once, land',
  tail: 'in every region.',
} as const

/** Three lines at 1440, capped at 38em — the widest measure on the page. */
export const SUB =
  'Virga serves your app, cache and cron jobs from forty-one regions, so the first byte lands before the eye can blink. Merge to main and the new build is answering requests everywhere by the time the checks go green.'

/** The white CTA. Both primary actions point at the marketplace. */
export const CTA = {
  label: 'Deploy your first app',
  href: COMPONENT_DOCK_URL,
  external: true,
} as const

/** The secondary action is a terminal line, not a button. */
export const COMMAND = 'npx virga deploy'

export interface Stat {
  readonly label: string
  readonly value: string
  /** The green line under the number — cell 2 replaces it with the strip. */
  readonly hint?: string
  /** Cell 2 carries the bar strip instead of a hint line. */
  readonly strip?: boolean
}

/** Twelve monthly checks, the tenth a dip — one bar per month. */
export const UPTIME_BARS = 12

/** The zero-based index of the yellow bar in the strip. */
export const UPTIME_DIP_INDEX = 9

/** What the decorative strip means, for anyone who cannot see it. */
export const UPTIME_SUMMARY =
  'Ninety-nine point nine eight percent uptime across the last twelve months'

export const STATS: readonly Stat[] = [
  { label: 'Teams shipping', value: '9,400', hint: '+24% this quarter' },
  { label: 'Uptime, trailing year', value: '99.98%', strip: true },
  { label: 'Regions live', value: '41', hint: '63 points of presence' },
  { label: 'Median response', value: '19 ms', hint: 'p95 stays under 45 ms' },
]

export const FOOTER = {
  prefix: 'More templates at',
  linkLabel: 'Component Dock',
  href: COMPONENT_DOCK_URL,
} as const
