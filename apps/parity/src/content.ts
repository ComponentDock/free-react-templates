/**
 * Parity's copy and its comparison matrix. One table, three plans, four feature
 * groups, seventeen rows; every cell is either a tick, a cross or a short value.
 * Nothing here is written into the markup twice — the table renders from this
 * data and the tests read the same arrays.
 */

export const COMPONENT_DOCK = 'https://www.componentdock.com/'

export const TITLE_ID = 'pt-title'
export const EYEBROW_LABEL = 'Compare plans'
export const TITLE = 'Every Parity feature, side by side'
export const LEDE = 'Plan headers stay pinned while you scroll. Collapse a group to skip past it.'
export const EXPAND_LABEL = 'Expand all'
export const COLLAPSE_LABEL = 'Collapse all'
export const CORNER_NOTE = 'Prices in USD, per user, billed monthly.'
export const CAPTION = 'Parity plan comparison: Basic, Team and Business'
export const POPULAR_LABEL = 'Popular'
export const FOOTER_PREFIX = 'More templates at'
export const FOOTER_LINK_LABEL = 'Component Dock'

/** The three cell states: included, not included, and a short printed value. */
export type Cell = { kind: 'yes' } | { kind: 'no' } | { kind: 'value'; value: string }

export interface Plan {
  id: string
  name: string
  price: string
  per: string
  cta: string
  featured: boolean
}

export const PLANS: readonly Plan[] = [
  {
    id: 'pt-basic',
    name: 'Basic',
    price: '$0',
    per: 'free for 3 users',
    cta: 'Sign up',
    featured: false,
  },
  {
    id: 'pt-team',
    name: 'Team',
    price: '$12',
    per: 'per user / month',
    cta: 'Start trial',
    featured: true,
  },
  {
    id: 'pt-business',
    name: 'Business',
    price: '$24',
    per: 'per user / month',
    cta: 'Start trial',
    featured: false,
  },
]

export interface Feature {
  id: string
  label: string
  cells: readonly [Cell, Cell, Cell]
}

export interface Group {
  id: string
  bodyId: string
  title: string
  features: readonly Feature[]
}

const YES: Cell = { kind: 'yes' }
const NO: Cell = { kind: 'no' }
const value = (text: string): Cell => ({ kind: 'value', value: text })

export const GROUPS: readonly Group[] = [
  {
    id: 'pt-g1',
    bodyId: 'pt-g1-body',
    title: 'Projects and tasks',
    features: [
      {
        id: 'pt-f1',
        label: 'Projects',
        cells: [value('5'), value('Unlimited'), value('Unlimited')],
      },
      { id: 'pt-f2', label: 'Task lists and boards', cells: [YES, YES, YES] },
      { id: 'pt-f3', label: 'Timeline and Gantt view', cells: [NO, YES, YES] },
      { id: 'pt-f4', label: 'Recurring tasks', cells: [NO, YES, YES] },
      {
        id: 'pt-f5',
        label: 'Custom fields',
        cells: [value('3 per project'), value('Unlimited'), value('Unlimited')],
      },
    ],
  },
  {
    id: 'pt-g2',
    bodyId: 'pt-g2-body',
    title: 'Collaboration',
    features: [
      { id: 'pt-f6', label: 'Guests', cells: [NO, value('10'), value('Unlimited')] },
      {
        id: 'pt-f7',
        label: 'File storage',
        cells: [value('2 GB'), value('100 GB'), value('1 TB')],
      },
      { id: 'pt-f8', label: 'Comments and mentions', cells: [YES, YES, YES] },
      { id: 'pt-f9', label: 'Proofing and approvals', cells: [NO, NO, YES] },
    ],
  },
  {
    id: 'pt-g3',
    bodyId: 'pt-g3-body',
    title: 'Reporting',
    features: [
      { id: 'pt-f10', label: 'Workload view', cells: [NO, YES, YES] },
      { id: 'pt-f11', label: 'Time tracking', cells: [NO, YES, YES] },
      { id: 'pt-f12', label: 'Portfolio dashboards', cells: [NO, NO, YES] },
      { id: 'pt-f13', label: 'Scheduled PDF reports', cells: [NO, NO, YES] },
    ],
  },
  {
    id: 'pt-g4',
    bodyId: 'pt-g4-body',
    title: 'Security and admin',
    features: [
      { id: 'pt-f14', label: 'Two-factor authentication', cells: [YES, YES, YES] },
      { id: 'pt-f15', label: 'SAML single sign-on', cells: [NO, NO, YES] },
      { id: 'pt-f16', label: 'Audit log', cells: [NO, NO, value('1-year retention')] },
      {
        id: 'pt-f17',
        label: 'Support',
        cells: [value('Help centre'), value('Email, 24 h'), value('Priority chat')],
      },
    ],
  },
]
