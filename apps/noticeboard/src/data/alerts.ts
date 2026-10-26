/** One severity of the notice ladder, in the order the page prints it. */
export type Severity = 'info' | 'success' | 'warning' | 'danger'

/** The four colours that make one severity read as itself. */
export interface SeverityTokens {
  /** The tinted card ground. */
  bg: string
  /** The 1 px hairline — decoration only, it never carries the meaning alone. */
  line: string
  /** A darkened shade of the hue: the title, so 15 px / 600 text clears 9:1. */
  title: string
  /** The hue that paints the icon, and nothing else. */
  accent: string
}

export interface Notice {
  severity: Severity
  title: string
  text: string
  /** `alert` only for the danger notice; the other three are `status`. */
  role: 'status' | 'alert'
}

/**
 * Four quads, measured from the reference: pale paper grounds, hairlines within
 * 1.25–1.33:1 of the tint (decoration), and a title that is *darker* than the
 * accent painting the icon. Using the accent for the title would drop contrast
 * from 9.46:1 to 4.72:1, so keep the two-colour split.
 */
export const SEVERITY_TOKENS: Record<Severity, SeverityTokens> = {
  info: { bg: '#eff5ff', line: '#c7dbfe', title: '#1e3a8a', accent: '#2563eb' },
  success: { bg: '#ecfdf5', line: '#b7ecd4', title: '#064e3b', accent: '#059669' },
  warning: { bg: '#fff8eb', line: '#fbdba7', title: '#7c2d12', accent: '#c2410c' },
  danger: { bg: '#fef2f2', line: '#fbcaca', title: '#7f1d1d', accent: '#dc2626' },
}

/** The head above the ladder — these notices are account notices, not toasts. */
export const PANEL = {
  eyebrow: 'Ledgerly · Billing',
  title: 'Invoices and payments',
  intro:
    'Account notices for September. Messages that need action stay here until they are resolved.',
} as const

/** The four notices, verbatim: the card heights are copy-driven, so keep them. */
export const NOTICES: readonly [Notice, Notice, Notice, Notice] = [
  {
    severity: 'info',
    role: 'status',
    title: 'New tax rates from 1 October',
    text: 'VAT for digital services in Portugal changes to 23%. Draft invoices dated after 30 September will be updated automatically.',
  },
  {
    severity: 'success',
    role: 'status',
    title: 'Payment received',
    text: 'Harbor & Pine Studio paid invoice INV-2048 for €3,450.00. The funds will reach your account on 27 September.',
  },
  {
    severity: 'warning',
    role: 'status',
    title: 'Card expires next month',
    text: 'The Visa ending 4417 on your subscription expires on 31 October. Add a new card to avoid a failed renewal.',
  },
  {
    severity: 'danger',
    role: 'alert',
    title: 'Bank sync failed',
    text: 'We could not import transactions from your business account since 22 September. Reconnect the bank feed to keep reconciliation up to date.',
  },
]

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'
