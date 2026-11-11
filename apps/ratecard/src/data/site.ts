/**
 * The page's whole content model. One band, three plans, one footnote — the
 * document has no navigation, no form and no imagery, so this file is the only
 * place copy lives.
 */

export interface Plan {
  /** The card's `aria-labelledby` target and the `h2`'s id. */
  readonly id: string
  readonly name: string
  readonly description: string
  readonly price: string
  readonly per: string
  readonly cta: string
  readonly label: string
  readonly bullets: readonly string[]
  readonly featured: boolean
}

export const SECTION_ID = 'pricing'
export const HEADING_ID = 'ratecard-title'
export const COMPONENT_DOCK = 'https://www.componentdock.com/'

export const EYEBROW = 'Pricing'
export const HEADLINE = 'Simple plans for every queue'
export const LEDE =
  'Slatebox gathers the replies, hand-offs and follow-ups your studio repeats every week into one shared queue. Start free for 14 days, no card needed.'

export const FLAG_LABEL = 'Most popular'
export const PERIOD = 'per seat / month'

export const PLANS: readonly Plan[] = [
  {
    id: 'ratecard-solo',
    name: 'Solo',
    description: 'For one or two people answering a handful of messages a day.',
    price: '$15',
    per: PERIOD,
    cta: 'Start 14-day trial',
    label: 'Solo includes',
    bullets: [
      '1 shared queue',
      '300 replies a month',
      'Saved replies and labels',
      'Email support, next business day',
    ],
    featured: false,
  },
  {
    id: 'ratecard-team',
    name: 'Team',
    description: 'For a studio that needs routing, due times and weekly reporting.',
    price: '$39',
    per: PERIOD,
    cta: 'Start 14-day trial',
    label: 'Everything in Solo, plus',
    bullets: [
      '6 shared queues',
      '4,000 replies a month',
      'Round-robin routing and due times',
      'Weekly workload reports',
      'Live chat support',
    ],
    featured: true,
  },
  {
    id: 'ratecard-studio',
    name: 'Studio',
    description: 'For several brands or a client list that needs an audit trail.',
    price: '$99',
    per: PERIOD,
    cta: 'Talk to sales',
    label: 'Everything in Team, plus',
    bullets: [
      'Unlimited queues and brands',
      'Unlimited replies',
      'SSO sign-in and audit log',
      '99.9% uptime agreement',
      'Named setup contact',
    ],
    featured: false,
  },
]

export const FOOTNOTE_PREFIX = 'Prices in USD, excluding sales tax. Annual billing saves 15%.'
export const FOOTNOTE_LINK_LABEL = 'Compare all features'

export const FOOTER_PREFIX = 'More templates at'
export const FOOTER_LINK_LABEL = 'Component Dock'
