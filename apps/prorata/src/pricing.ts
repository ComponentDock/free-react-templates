/**
 * The page's entire arithmetic. One graduated rate table, one clamp, two
 * currency formatters and the four strings the card prints — all pure, so the
 * test table is the contract and the components hold no numbers of their own.
 */

export interface Tier {
  /** First seat billed at this rate, inclusive. */
  readonly min: number
  /** Last seat billed at this rate, inclusive. */
  readonly max: number
  /** Dollars per seat per month. */
  readonly rate: number
}

export const MIN_SEATS = 1
export const MAX_SEATS = 200
export const INITIAL_SEATS = 12

/** Rates fall as the seat count crosses 10 and 50 — graduated, not flat. */
export const TIERS: readonly Tier[] = [
  { min: 1, max: 10, rate: 12 },
  { min: 11, max: 50, rate: 10 },
  { min: 51, max: 200, rate: 8 },
]

/** Whole dollars, grouped once past a thousand: `$140`, `$1,720`. */
const totalFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

/** Exactly two decimals: `$11.67`, `$10.00`, `$8.60`. */
const averageFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

/**
 * The single source of truth for a seat value: every control routes through it,
 * so `''`, `'abc'`, `'0'` and `'-5'` all mean one seat, `'7.6'` means eight and
 * `'999'` means the ceiling.
 */
export function clampSeats(raw: string): number {
  return Math.min(MAX_SEATS, Math.max(MIN_SEATS, Math.round(Number(raw)) || MIN_SEATS))
}

/** How many of a tier's seats the current count actually uses. */
export function seatsInTier(seats: number, tier: Tier): number {
  return Math.max(0, Math.min(seats, tier.max) - tier.min + 1)
}

/** `[10, 2, 0]` at twelve seats, `[10, 40, 1]` at fifty-one. */
export function tierCounts(seats: number): number[] {
  return TIERS.map((tier) => seatsInTier(seats, tier))
}

/** The graduated monthly total in dollars: `12 → 140`, `51 → 528`. */
export function total(seats: number): number {
  return TIERS.reduce((sum, tier) => sum + seatsInTier(seats, tier) * tier.rate, 0)
}

/** The average per seat, unrounded — formatting decides the decimals. */
export function average(seats: number): number {
  return total(seats) / seats
}

export function formatTotal(amount: number): string {
  return totalFormat.format(amount)
}

export function formatAverage(amount: number): string {
  return averageFormat.format(amount)
}

/** Where the fill edge sits on the track, `0` … `100`. */
export function fillPercent(seats: number): number {
  return ((seats - MIN_SEATS) / (MAX_SEATS - MIN_SEATS)) * 100
}

export function fillValue(seats: number): string {
  return `${fillPercent(seats)}%`
}

/** `"12 seats, $140 per month"`, singular at one. */
export function ariaValueText(seats: number): string {
  const noun = seats === 1 ? 'seat' : 'seats'
  return `${seats} ${noun}, ${formatTotal(total(seats))} per month`
}

/** `["10 × $12", "2 × $10"]` — only the tiers actually used. */
export function detailParts(seats: number): string[] {
  return TIERS.filter((tier) => seatsInTier(seats, tier) > 0).map((tier) => {
    const used = seatsInTier(seats, tier)
    return `${used} × ${formatTotal(tier.rate)}`
  })
}

/** The running text before the highlighted average. */
export function detailLead(seats: number): string {
  return `${detailParts(seats).join(' + ')}. Average `
}

export const DETAIL_TAIL = ' per seat, billed monthly.'
