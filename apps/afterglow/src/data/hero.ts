import type { LucideIcon } from 'lucide-react'
import { Bird, Blocks, CircleDot, Fish, Hexagon, TreePine } from 'lucide-react'

/**
 * Every string and every list the page renders. Keeping copy here means the
 * measured line folds (headline 3/3/3/4 lines, sub 3/3/4/5, kicker 1/2) are
 * cheap to assert and no section holds a string of its own.
 */

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** The two sections this page has; every in-page link points at one of them. */
export const HERO_ID = 'hero'
export const LOGOS_ID = 'logos'

export const NAV_ID = 'site-nav'

export const BRAND = 'Nightwave'

export interface NavLink {
  readonly label: string
  readonly href: string
  /** The page the visitor is on. */
  readonly current?: boolean
}

export const WORDMARK_HREF = `#${HERO_ID}`

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Product', href: `#${HERO_ID}`, current: true },
  { label: 'Templates', href: `#${LOGOS_ID}` },
  { label: 'Pricing', href: COMPONENT_DOCK_URL },
  { label: 'Changelog', href: COMPONENT_DOCK_URL },
]

export const LOGIN = { label: 'Log in', href: COMPONENT_DOCK_URL } as const

export const MENU_LABEL = {
  open: 'Open menu',
  close: 'Close menu',
} as const

/** The five stars are decoration; the sentence beside them carries the score. */
export const STARS = 5
export const RATING_TEXT = '4.8/5 from 1,200 remote teams'

export const HEADLINE = 'Async video updates your team will actually watch'

export const SUB = `Record a two-minute update, and ${BRAND} turns it into chapters, a written summary and action items. Fewer meetings, and nobody waits for a time zone to wake up.`

export const ACTIONS = {
  primary: { label: `Try ${BRAND} free`, href: COMPONENT_DOCK_URL },
  ghost: { label: 'See how it works', href: `#${LOGOS_ID}` },
} as const

export const NOTE = 'Free for teams of up to 5 · No credit card'

export const LOGO_TITLE = 'Trusted by 4,000+ distributed teams'

export interface Wordmark {
  readonly name: string
  /** The tile's typographic treatment — six of them, and that is the design. */
  readonly className: string
  readonly mark: LucideIcon
  readonly markSize: number
}

export const WORDMARKS: readonly Wordmark[] = [
  { name: 'Kestrel', className: 'ag-brand--kestrel', mark: Bird, markSize: 22 },
  { name: 'halcyon', className: 'ag-brand--halcyon', mark: CircleDot, markSize: 22 },
  { name: 'Pinegrove', className: 'ag-brand--pine', mark: TreePine, markSize: 22 },
  { name: 'LUMEN LABS', className: 'ag-brand--lumen', mark: Blocks, markSize: 22 },
  { name: 'Quarry', className: 'ag-brand--quarry', mark: Hexagon, markSize: 22 },
  { name: 'bluefin', className: 'ag-brand--bluefin', mark: Fish, markSize: 26 },
]

export const FOOTER = {
  prefix: 'More templates at',
  linkLabel: 'Component Dock',
  href: COMPONENT_DOCK_URL,
} as const
