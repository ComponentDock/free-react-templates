import { RANGE } from '../data'

export interface RangeFill {
  readonly left: string
  readonly width: string
}

const clamp = (value: number) => Math.min(Math.max(value, RANGE.min), RANGE.min + RANGE.span)

/** Two decimals is enough for a 6 px bar and keeps the measured values exact. */
const pct = (share: number) => `${Number((share * 100).toFixed(2))}%`

/**
 * Positions one day inside the fixed 12–28 °C window:
 * `left = (lo − 12) / 16`, `width = (hi − lo) / 16`, both clamped to the window.
 * The five bars are then comparable by eye, which is the whole point of the card.
 */
export function rangeFill(lo: number, hi: number): RangeFill {
  const start = clamp(lo)
  const end = Math.max(clamp(hi), start)
  return {
    left: pct((start - RANGE.min) / RANGE.span),
    width: pct((end - start) / RANGE.span),
  }
}
