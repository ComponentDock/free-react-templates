export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** U+2212 — a real minus sign, not a hyphen. */
const MINUS = '\u2212'

export interface Head {
  /** h1 — a greeting, one line down to 320 px. */
  title: string
  /** The one line under it: what this screen is. */
  sub: string
}

export const HEAD: Head = {
  title: 'Good evening, Lina',
  sub: 'Here is where your money stands this week.',
}

export type IconName = 'bag' | 'dollar' | 'briefcase' | 'coffee'

export interface Transaction {
  merchant: string
  category: string
  /** The ledger's day label, exactly as printed: "Today", "23 Sep". */
  date: string
  icon: IconName
  /** Signed cents: negative is money out, positive is money in. */
  cents: number
}

export interface Account {
  title: string
  label: string
  holder: string
  last4: string
  expires: string
  /** Integer cents, so no float ever touches the balance. */
  balanceCents: number
}

export interface Goal {
  title: string
  pill: string
  onTrack: boolean
  name: string
  savedCents: number
  targetCents: number
  monthlyCents: number
  /** The ledger month the goal is measured from, `YYYY-MM`. */
  asOf: string
  cta: string
}

export const ACCOUNT: Account = {
  title: 'Everyday account',
  label: 'Available balance',
  holder: 'Lina Moretti',
  last4: '4821',
  expires: '08/29',
  balanceCents: 648_230,
}

export const GOAL: Goal = {
  title: 'Savings goal',
  pill: 'On track',
  onTrack: true,
  name: 'Kyoto in spring',
  savedCents: 272_000,
  targetCents: 400_000,
  monthlyCents: 32_000,
  asOf: '2026-09',
  cta: 'Add money',
}

export const TRANSACTIONS: readonly Transaction[] = [
  {
    merchant: 'Corner Market',
    category: 'Groceries',
    date: 'Today',
    icon: 'bag',
    cents: -4_218,
  },
  { merchant: 'Salary', category: 'Income', date: '23 Sep', icon: 'dollar', cents: 315_000 },
  { merchant: 'Rail pass', category: 'Transport', date: '22 Sep', icon: 'briefcase', cents: -6_400 },
  {
    merchant: 'Bluebird Caf\u00e9',
    category: 'Eating out',
    date: '21 Sep',
    icon: 'coffee',
    cents: -840,
  },
]

/** Cents to the euro figure with a thousands comma and two decimals: "€6,482.30". */
export function formatEuro(cents: number): string {
  const parts = splitEuro(cents)
  return `${parts.whole}${parts.cents}`
}

/** The balance split, so the cents can set one size down: { whole: '€6,482', cents: '.30' }. */
export function splitEuro(cents: number): { whole: string; cents: string } {
  const abs = Math.abs(cents)
  return {
    whole: `\u20ac${Math.floor(abs / 100).toLocaleString('en-US')}`,
    cents: `.${String(abs % 100).padStart(2, '0')}`,
  }
}

/**
 * The same figure with the cents dropped when they are zero: "€320", "€4,000".
 * Sums in a sentence read better without a ",00" tail; ledger amounts keep it.
 */
export function formatEuroCompact(cents: number): string {
  return cents % 100 === 0 ? splitEuro(cents).whole : formatEuro(cents)
}

/** A ledger amount with its sign: "−€42.18" out, "+€3,150.00" in. */
export function formatSignedEuro(cents: number): string {
  const sign = cents < 0 ? MINUS : '+'
  return `${sign}${formatEuro(cents)}`
}

/** The ring's fill, derived from the sums — never hand-tuned. */
export function goalPercent(goal: Goal): number {
  return Math.round((goal.savedCents / goal.targetCents) * 100)
}

/** Months still needed at the current rate, rounded up. */
export function monthsToGoal(goal: Goal): number {
  return Math.ceil((goal.targetCents - goal.savedCents) / goal.monthlyCents)
}

/**
 * The month the goal lands in, derived from the ledger month plus the months
 * still needed — so the label can never contradict the arithmetic.
 */
export function goalTargetLabel(goal: Goal): string {
  const year = Number(goal.asOf.slice(0, 4))
  const monthIndex = Number(goal.asOf.slice(5, 7)) - 1 + monthsToGoal(goal)
  const date = new Date(Date.UTC(year + Math.floor(monthIndex / 12), monthIndex % 12, 1))
  return `${date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' })} ${date.getUTCFullYear()}`
}

/** "€320 a month · target January 2027". */
export function goalMonthlyLine(goal: Goal): string {
  return `${formatEuroCompact(goal.monthlyCents)} a month \u00b7 target ${goalTargetLabel(goal)}`
}
