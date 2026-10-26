/**
 * All copy and mock data for the hero. Keeping it here means the page's
 * measured line folds (headline 3/3/2/2/3 lines, sub 3/4/2/3/4) stay cheap to
 * assert and the sections hold no strings of their own.
 */

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** The one section this page has — every in-page link points at it. */
export const HERO_ID = 'hero'

export const BRAND = 'Ledgerwell'

export const WORDMARK_HREF = `#${HERO_ID}`

export interface NavLink {
  readonly label: string
  readonly href: string
  /** The page the visitor is on. */
  readonly current?: boolean
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Product', href: `#${HERO_ID}`, current: true },
  { label: 'Pricing', href: `#${HERO_ID}` },
  { label: 'Customers', href: `#${HERO_ID}` },
  { label: 'Docs', href: `#${HERO_ID}` },
]

export const SIGN_IN = { label: 'Sign in', href: COMPONENT_DOCK_URL } as const

export const BAR_CTA = { label: 'Start free', href: COMPONENT_DOCK_URL } as const

export const ANNOUNCEMENT = {
  tag: 'New',
  label: 'Rolling forecasts are live',
  href: COMPONENT_DOCK_URL,
} as const

/** Split so the accent phrase can be an inline span inside the same `h1`. */
export const HEADLINE = {
  lead: 'Close the books in hours, ',
  accent: 'not weeks.',
} as const

export const SUBCOPY = `${BRAND} reconciles bank feeds, invoices and payroll in one ledger, so finance teams see revenue, burn and runway the moment money moves.`

export const ACTIONS = {
  primary: { label: 'Start 14-day trial', href: COMPONENT_DOCK_URL },
  demo: { label: 'Watch 3-min demo', href: COMPONENT_DOCK_URL },
} as const

export const TRUST_POINTS: readonly string[] = ['No credit card', 'SOC 2 Type II', 'Cancel anytime']

export type KpiDirection = 'up' | 'down'

export interface Kpi {
  readonly label: string
  readonly value: string
  readonly delta: string
  readonly direction: KpiDirection
  /** Hidden on phones — the third tile does not shrink, it goes away. */
  readonly extra?: boolean
}

export const KPIS: readonly Kpi[] = [
  { label: 'MRR', value: '$84,210', delta: '+12.4%', direction: 'up' },
  { label: 'Net burn', value: '$31,870', delta: '−4.1%', direction: 'down' },
  { label: 'Runway', value: '26 mo', delta: '+3 mo', direction: 'up', extra: true },
]

/** Twelve bars, as percentages of the chart's content box. */
export const BAR_HEIGHTS: readonly number[] = [34, 42, 38, 51, 48, 57, 63, 59, 70, 74, 82, 92]

export const CHART_PATH = 'M0 78 C30 70 50 74 75 64 S125 56 150 48 S210 40 235 28 S280 14 300 8'
export const CHART_VIEWBOX = '0 0 300 100'

export interface Transaction {
  readonly chip: 'In' | 'Out'
  readonly color: string
  readonly name: string
  readonly amount: string
}

export const TRANSACTIONS: readonly Transaction[] = [
  { chip: 'In', color: '#16a34a', name: 'Brightwater Clinics', amount: '+$4,800.00' },
  { chip: 'Out', color: '#dc2626', name: 'Payroll · September', amount: '−$21,340.00' },
  { chip: 'In', color: '#16a34a', name: 'Marlow & Finch Ltd', amount: '+$2,150.00' },
]

export const MOCK = {
  url: 'app.ledgerwell.io/overview',
  title: 'Overview',
  range: 'Last 12 months',
  /** The whole dashboard is one decorative image to assistive tech. */
  label: `${BRAND} dashboard preview: monthly recurring revenue of $84,210, up 12.4 percent, with a revenue chart and recent transactions`,
} as const

export const RAIL_ITEMS = 4
export const RAIL_ACTIVE_INDEX = 0

export const TOAST = {
  title: 'Invoice #1042 paid',
  detail: 'Reconciled automatically',
} as const

export const FOOTER = {
  prefix: 'More templates at',
  linkLabel: 'Component Dock',
  href: COMPONENT_DOCK_URL,
} as const

export const MENU_LABEL = {
  open: 'Open menu',
  close: 'Close menu',
} as const
