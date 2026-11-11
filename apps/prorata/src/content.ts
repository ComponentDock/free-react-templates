/**
 * The page's whole content model: one copy column, one calculator card, one
 * closing strip. No navigation, no imagery, no second section — so every string
 * the page prints lives here.
 */

export const SECTION_ID = 'pricing'
export const HEADING_ID = 'prorata-title'
export const RANGE_ID = 'prorata-seats-range'
export const FIELD_ID = 'prorata-seats-field'
export const SUM_ID = 'prorata-total'
export const CALC_TITLE_ID = 'prorata-calculator-title'

export const COMPONENT_DOCK = 'https://www.componentdock.com/'

export const EYEBROW = 'One plan, every tool'
export const HEADLINE = 'Seats scale, prices fall'
export const LEDE =
  'Draftwell puts contracts, proposals and invoices in one workspace, and the rate you pay per seat only steps down as more of your team joins.'

export const BULLETS: readonly string[] = [
  'Unlimited documents, templates and folders',
  'Tracked changes and review',
  'E-signature audit trail',
  'Invoices and payments',
  'Roles, guests, approvals',
  'Audit reports on every plan',
]

export const CARD_TITLE = 'Build your quote'
export const SEATS_LABEL = 'Team seats'
export const FIELD_LABEL = 'Number of seats'

/** Decorative ticks under the slider — evenly spaced, not real positions. */
export const SCALE: readonly number[] = [1, 50, 100, 150, 200]

export const TIERS_LABEL = 'Graduated price per seat'
export const TOTAL_LABEL = 'Your price'
export const PER_LABEL = '/ month'

export const CTA_LABEL = 'Start the 14-day trial'

export const FOOTNOTE_PREFIX = 'Over 200 seats? '
export const FOOTNOTE_LINK_LABEL = 'Talk to us about volume pricing'

export const FOOTER_PREFIX = 'More templates at'
export const FOOTER_LINK_LABEL = 'Component Dock'

/** How long the live region waits after the last move before it speaks. */
export const ANNOUNCE_DELAY = 300
