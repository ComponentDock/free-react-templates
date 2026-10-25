export const ROUND_STEP = 50
export const BAND = 0.15

export interface EstimateTerms {
  /** Cents per cleanable square foot per month at a five-night schedule. */
  rate: number
  /** Cleanable square footage. */
  sqft: number
  /** Frequency multiplier — sub-linear, never nights/schedule length. */
  factor: number
  /** Additive monthly extras, applied after the multiplication. */
  extras: number[]
}

export function roundTo50(value: number): number {
  return Math.round(value / ROUND_STEP) * ROUND_STEP
}

export function monthlyTotal({ rate, sqft, factor, extras }: EstimateTerms): number {
  const base = (rate * sqft * factor) / 100 + extras.reduce((sum, value) => sum + value, 0)
  return Math.round(base * 100) / 100
}

export function formatRange(monthly: number): string {
  const low = roundTo50(monthly * (1 - BAND))
  const high = roundTo50(monthly * (1 + BAND))
  return `$${low.toLocaleString('en-US')} to $${high.toLocaleString('en-US')}`
}

/** Any missing term reads as an em dash rather than "$0 to $0". */
export function estimateText(terms: EstimateTerms): string {
  const present = [terms.rate, terms.sqft, terms.factor]
  if (present.some((term) => term === 0)) {
    return '—'
  }
  return formatRange(monthlyTotal(terms))
}
