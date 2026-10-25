import { FINANCE } from '../content'

export interface Quote {
  /** The borrowed amount, formatted. */
  readonly amount: string
  /** The monthly figure, formatted. */
  readonly monthly: string
  /** The monthly figure multiplied by the term, then formatted. */
  readonly total: string
}

/** `£` plus whole pounds in the `en-GB` grouping — `2784` reads `£2,784`. */
export function gbp(value: number): string {
  return `£${value.toLocaleString('en-GB', { maximumFractionDigits: 0 })}`
}

/**
 * Standard amortisation: the monthly payment for `amount` over `months` at a
 * nominal annual rate. A zero rate degenerates to a straight division.
 */
export function monthlyPayment(amount: number, months: number, apr: number): number {
  const rate = apr / 100 / 12
  if (rate === 0) {
    return amount / months
  }
  return (amount * rate) / (1 - (1 + rate) ** -months)
}

/**
 * The three figures the band shows. The total multiplies the *unrounded*
 * monthly figure, which is what makes 2,400 read `£77` and `£2,784` rather
 * than `£2,772`.
 */
export function quote(amount: number): Quote {
  const monthly = monthlyPayment(amount, FINANCE.months, FINANCE.apr)
  return {
    amount: gbp(amount),
    monthly: gbp(monthly),
    total: gbp(monthly * FINANCE.months),
  }
}
