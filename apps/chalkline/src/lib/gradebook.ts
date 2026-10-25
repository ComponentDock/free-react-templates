/** The gradebook's two pure decisions: which band a mean falls in, and how a
 * single score is coloured. Both are exported so the table stays declarative
 * and the thresholds live in exactly one place. */

export type Band = 'Distinction' | 'Merit' | 'Pass' | 'At risk' | 'Incomplete'

/** Distinction from 85, merit from 70, pass from 50 — and any outstanding
 * component outranks the mean. */
export function bandFor(mean: number, hasMissing = false): Band {
  if (hasMissing) {
    return 'Incomplete'
  }
  if (mean >= 85) {
    return 'Distinction'
  }
  if (mean >= 70) {
    return 'Merit'
  }
  if (mean >= 50) {
    return 'Pass'
  }
  return 'At risk'
}

export const bandClass: Record<Band, string> = {
  Distinction: 'bg-primary-100 text-primary-900',
  Merit: 'bg-primary-50 text-primary-800',
  Pass: 'bg-gray-100 text-gray-700',
  'At risk': 'bg-accent-100 text-accent-900',
  Incomplete: 'text-gray-400 ring-1 ring-gray-200',
}

/** A weighted mean over the six components, with a missing submission counted
 * as zero — the rule the legend states. */
export function weightedMean(
  scores: ReadonlyArray<number | null>,
  weights: ReadonlyArray<number>,
): number {
  const total = scores.reduce<number>(
    (sum, score, index) => sum + (score ?? 0) * (weights[index] ?? 0),
    0,
  )
  const weight = weights.reduce<number>((sum, value) => sum + value, 0)
  return Math.round((total / weight) * 10) / 10
}

export function scoreClass(score: number): string {
  if (score >= 70) {
    return 'text-primary-700 font-medium'
  }
  if (score >= 50) {
    return 'text-gray-700'
  }
  return 'text-accent-600 font-medium'
}
