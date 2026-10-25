import { INCENTIVES, INSTALLED_PRICE } from '../content'

/** U+2212 minus, not a hyphen — the design's own money glyph. */
export const MINUS = '\u2212'

/** `−$4,400` — the amount printed on every ledger row and on the selected total. */
export function formatAmount(value: number): string {
  return `${MINUS}$${value.toLocaleString('en-US')}`
}

/** `$10,400` — the installed price and the net figure. */
export function formatNet(value: number): string {
  return `$${value.toLocaleString('en-US')}`
}

/** The three programmes the reference ticks on load: federal, utility, manufacturer. */
export function defaultSelection(): readonly string[] {
  return INCENTIVES.filter((incentive) => incentive.defaultChecked).map((incentive) => incentive.id)
}

/** Sum of the ticked programmes, in whole dollars. */
export function selectedTotal(selected: readonly string[]): number {
  return INCENTIVES.filter((incentive) => selected.includes(incentive.id)).reduce(
    (sum, incentive) => sum + incentive.amount,
    0,
  )
}

/** Installed price minus the ticked programmes, floored at zero. */
export function netPrice(selected: readonly string[]): number {
  return Math.max(INSTALLED_PRICE - selectedTotal(selected), 0)
}
