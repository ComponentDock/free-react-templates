/**
 * The page's entire arithmetic: two non-linear step tables, one flat fee, two
 * free tiers, one boolean and three formatters — all pure, so the test tables
 * are the contract and the components hold no numbers of their own.
 */

/**
 * The calls slider's stops, in requests. Its stops are *not* linear: the index
 * is the control's value and this table is the amount.
 */
export const CALL_STEPS: readonly number[] = [
  0, 100_000, 250_000, 500_000, 1_000_000, 2_500_000, 5_000_000, 10_000_000, 25_000_000,
  50_000_000, 100_000_000,
]

/** The storage slider's stops, in GB. The first stop is 1, not 0. */
export const STORAGE_STEPS: readonly number[] = [
  1, 5, 10, 25, 50, 100, 250, 500, 1000, 2000, 5000, 10_000,
]

export const PRICES = {
  /** Flat monthly platform fee, always charged. */
  base: 25,
  /** Requests below this many are free. */
  freeCalls: 100_000,
  /** Dollars per 100,000 requests above the free tier. */
  per100k: 1,
  /** Gigabytes below this many are free. */
  freeGb: 5,
  /** Dollars per gigabyte above the free tier. */
  perGb: 0.12,
  /** The one boolean: the priority support uplift. */
  support: 149,
} as const

export const DEFAULT_CALLS_INDEX = 4
export const DEFAULT_STORAGE_INDEX = 4

export const CALLS_MAX = CALL_STEPS.length - 1
export const STORAGE_MAX = STORAGE_STEPS.length - 1

/** The four lines of the breakdown, in the order the bar paints them. */
export type LineKey = 'base' | 'calls' | 'storage' | 'support'
export const LINE_KEYS: readonly LineKey[] = ['base', 'calls', 'storage', 'support']

export interface Estimate {
  /** The calls stop in requests. */
  readonly calls: number
  /** The storage stop in GB. */
  readonly gb: number
  /** Dollars per line, in `LINE_KEYS` order. */
  readonly cost: Readonly<Record<LineKey, number>>
  /** Dollars: the flat fee plus the three metered lines. */
  readonly total: number
  /** The calls pill, compact: `0`, `100K`, `1M`. */
  readonly callsLabel: string
  /** The storage pill, switching to TB at 1000 GB: `50 GB`, `1 TB`. */
  readonly storageLabel: string
  /** `aria-valuetext` for the calls slider: `1,000,000 requests`. */
  readonly callsValueText: string
  /** `aria-valuetext` for the storage slider: `50 GB`. */
  readonly storageValueText: string
  /** The calls track's fill edge, `0%` … `100%`. */
  readonly callsFill: string
  /** The storage track's fill edge, `0%` … `100%`. */
  readonly storageFill: string
}

/** Exactly two decimals, locale grouping: `$39.40`, `$1,199.40`. */
const usdFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

/** One decimal at most, compact: `0`, `250K`, `2.5M`. */
const compactFormat = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
})

/** Plain grouping for the spoken amounts: `1,000,000`. */
const longFormat = new Intl.NumberFormat('en-US')

export function formatUsd(amount: number): string {
  return usdFormat.format(amount)
}

/** The calls stop as the pill prints it — the zero reads `0`, not `0K`. */
export function formatCallsLabel(calls: number): string {
  return calls === 0 ? '0' : compactFormat.format(calls)
}

/** Storage switches unit at 1000 GB: `5 GB`, `1 TB`, `10 TB`. */
export function formatStorageLabel(gb: number): string {
  return gb >= 1000 ? `${gb / 1000} TB` : `${gb} GB`
}

export function callsAriaLabel(calls: number): string {
  return `${longFormat.format(calls)} requests`
}

/** The calls line: free for the first 100,000, then $1.00 per 100,000. */
export function callsCost(calls: number): number {
  return (Math.max(0, calls - PRICES.freeCalls) / 100_000) * PRICES.per100k
}

/** The storage line: free for the first 5 GB, then $0.12 per GB. */
export function storageCost(gb: number): number {
  return Math.max(0, gb - PRICES.freeGb) * PRICES.perGb
}

/** Where the fill stops on a track of `max` steps, `0%` … `100%`. */
export function fillValue(index: number, max: number): string {
  return `${(index / max) * 100}%`
}

/** One estimate from the two step indices and the boolean. */
export function estimateFor(
  callsIndex: number,
  storageIndex: number,
  support: boolean,
): Estimate {
  const calls = CALL_STEPS[callsIndex] ?? 0
  const gb = STORAGE_STEPS[storageIndex] ?? 0

  const cost: Record<LineKey, number> = {
    base: PRICES.base,
    calls: callsCost(calls),
    storage: storageCost(gb),
    support: support ? PRICES.support : 0,
  }

  const storageLabel = formatStorageLabel(gb)

  return {
    calls,
    gb,
    cost,
    total: cost.base + cost.calls + cost.storage + cost.support,
    callsLabel: formatCallsLabel(calls),
    storageLabel,
    callsValueText: callsAriaLabel(calls),
    storageValueText: storageLabel,
    callsFill: fillValue(callsIndex, CALLS_MAX),
    storageFill: fillValue(storageIndex, STORAGE_MAX),
  }
}

/** `Estimated total $39.40 per month.` — the settled sentence, said once. */
export function announcement(total: number): string {
  return `Estimated total ${formatUsd(total)} per month.`
}
