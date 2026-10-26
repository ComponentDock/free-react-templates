export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

export interface Plan {
  /** Used for the heading id (`plan-<id>`), which wires `aria-labelledby`. */
  id: string
  name: string
  pitch: string
  price: string
  unit: string
  cta: {
    label: string
    /** An in-page fragment — the source's three CTAs went nowhere (`href="#"`). */
    href: string
  }
  listTitle: string
  features: string[]
  featured?: boolean
}

export const BAND = {
  /** The grid's id, and the fragment every CTA resolves to. */
  id: 'plans',
  eyebrow: 'Pricing',
  title: 'Plans that grow with your inbox',
  sub: 'Every plan includes unlimited contacts, a shared inbox and a 14-day free trial. Prices in USD, billed monthly.',
} as const

export const RIBBON_LABEL = 'Most popular'

/**
 * Three plans, one of them featured. The list labels stay sentence case in the
 * DOM — they are uppercased by the stylesheet, not by the copy.
 */
export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    pitch: 'For freelancers answering customers on their own.',
    price: '$12',
    unit: 'per seat / month',
    cta: { label: 'Start free trial', href: '#plans' },
    listTitle: "What's included",
    features: [
      '1 shared inbox',
      'Email and contact form channels',
      'Saved replies',
      '7-day conversation history',
    ],
  },
  {
    id: 'team',
    name: 'Team',
    pitch: 'For small support teams that need to share the load.',
    price: '$29',
    unit: 'per seat / month',
    cta: { label: 'Start free trial', href: '#plans' },
    listTitle: 'Everything in Starter, plus',
    features: [
      '5 shared inboxes',
      'Live chat and social channels',
      'Assignment rules and tags',
      'Customer satisfaction surveys',
      'Unlimited history',
    ],
    featured: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    pitch: 'For growing teams with service levels to meet.',
    price: '$59',
    unit: 'per seat / month',
    cta: { label: 'Talk to sales', href: '#plans' },
    listTitle: 'Everything in Team, plus',
    features: [
      'Unlimited inboxes',
      'SLA timers and escalations',
      'Single sign-on and audit log',
      'Priority support in 2 hours',
    ],
  },
]
