/**
 * Every string the page prints, in one place: one head, two metered controls,
 * one boolean, one bill card. No navigation, no imagery, no second section.
 */

export const SECTION_ID = 'pricing'
export const HEADING_ID = 'runrate-title'
export const BILL_ID = 'runrate-bill-title'
export const CALLS_ID = 'runrate-calls'
export const STORAGE_ID = 'runrate-storage'
export const SUPPORT_ID = 'runrate-support'
export const TOTAL_ID = 'runrate-total'

export const COMPONENT_DOCK = 'https://www.componentdock.com/'

export const EYEBROW = 'Usage-based pricing'
export const HEADLINE = 'Pay for what your app really uses'
export const LEDE =
  "Runrate bills a flat platform fee plus metered API calls and object storage. Move the sliders to estimate this month's total."

export const FORM_LABEL = 'Usage estimate inputs'
export const CALLS_LABEL = 'API calls per month'
export const CALLS_HINT = 'First 100,000 API calls are free, then $1.00 per 100,000.'
export const STORAGE_LABEL = 'Database storage'
export const STORAGE_HINT = 'First 5 GB free, then $0.12 per GB.'

export const SUPPORT_LEAD = 'Priority support'
export const SUPPORT_REST = ' — one-hour replies and a shared team channel. $149 / month.'

export const BILL_TITLE = 'Your estimated bill'

export const LINE_LABELS: readonly string[] = [
  'Platform fee',
  'API requests',
  'Storage',
  'Priority support',
]

export const CTA_LABEL = 'Create a project'

export const FINE_PRINT =
  "An estimate only — you're billed on actual usage, and every account carries a spend cap and alerts."

export const FOOTER_PREFIX = 'More templates at'
export const FOOTER_LINK_LABEL = 'Component Dock'

/** How long the live region waits after the last change before it speaks. */
export const ANNOUNCE_DELAY = 700
