/**
 * The page's whole content model: one head, one billing switch and four plans
 * on a single cream band. There is no navigation, no form and no imagery, so
 * every string the document prints lives here.
 */

export interface PlanNotes {
  readonly monthly: string
  readonly annual: string
}

export interface Plan {
  /** The `h2`'s id and the card's `aria-labelledby` target. */
  readonly id: string
  readonly name: string
  readonly views: string
  readonly monthly: number
  readonly annual: number
  readonly notes: PlanNotes
  readonly cta: string
  readonly bullets: readonly string[]
  readonly featured: boolean
}

export const HEADING_ID = 'tallyboard-title'
export const COMPONENT_DOCK = 'https://www.componentdock.com/'

export const HEADLINE = 'Pageview analytics priced by traffic'
export const LEDE =
  'Tallyboard counts pageviews without cookies or a consent banner. Choose a plan by monthly views and move up when your traffic does.'

export const SIDE_LABELS = {
  monthly: 'Monthly',
  annual: 'Annually',
} as const

export const SAVE_LABEL = 'Save 20%'
/** The toggle's accessible name — a state, so "pressed" reads as annual billing. */
export const SWITCH_LABEL = 'Annual billing'
export const FLAG_LABEL = 'Best value'
export const PER_LABEL = '/ mo'
export const PRICE_PREFIX = '$'

export const STATUS_MONTHLY = 'Monthly billing.'
export const STATUS_ANNUAL = 'Annual billing: prices shown per month, billed yearly.'

export const FOOTER_PREFIX = 'More templates at'
export const FOOTER_LINK_LABEL = 'Component Dock'

export const PLANS: readonly Plan[] = [
  {
    id: 'tallyboard-launch',
    name: 'Launch',
    views: '25k views / month',
    monthly: 0,
    annual: 0,
    notes: { monthly: 'Free forever', annual: 'Free forever' },
    cta: 'Start for free',
    bullets: ['1 website', '90-day data history', 'Core dashboard'],
    featured: false,
  },
  {
    id: 'tallyboard-grow',
    name: 'Grow',
    views: '250k views / month',
    monthly: 15,
    annual: 12,
    notes: { monthly: 'Billed monthly', annual: '$144 billed yearly' },
    cta: 'Start 30-day trial',
    bullets: [
      '5 websites',
      '3-year data history',
      'Goals and UTM campaigns',
      'Weekly email digests',
    ],
    featured: false,
  },
  {
    id: 'tallyboard-studio',
    name: 'Studio',
    views: '1M views / month',
    monthly: 40,
    annual: 32,
    notes: { monthly: 'Billed monthly', annual: '$384 billed yearly' },
    cta: 'Start 30-day trial',
    bullets: [
      '30 websites',
      'Unlimited data history',
      'Funnels and revenue goals',
      'Stats API and CSV export',
    ],
    featured: true,
  },
  {
    id: 'tallyboard-company',
    name: 'Company',
    views: '5M views / month',
    monthly: 100,
    annual: 80,
    notes: { monthly: 'Billed monthly', annual: '$960 billed yearly' },
    cta: 'Start 30-day trial',
    bullets: [
      'Unlimited websites',
      '10 team members with roles',
      'Shared dashboards and embeds',
      'Priority support',
    ],
    featured: false,
  },
]

/** The two figures every card counts between, derived once from the plans. */
export const MONTHLY_PRICES: readonly number[] = PLANS.map((plan) => plan.monthly)
export const ANNUAL_PRICES: readonly number[] = PLANS.map((plan) => plan.annual)
