import { describe, expect, it } from 'vitest'
import { gbp, monthlyPayment, quote } from './finance'

describe('gbp', () => {
  it('formats whole pounds with the en-GB grouping', () => {
    expect(gbp(2784)).toBe('£2,784')
    expect(gbp(26)).toBe('£26')
  })

  it('rounds the pence away rather than truncating toward zero', () => {
    expect(gbp(77.32861954928606)).toBe('£77')
    expect(gbp(32.22025814553586)).toBe('£32')
    expect(gbp(144.99116165491137)).toBe('£145')
  })
})

describe('monthlyPayment', () => {
  it('uses the amortisation formula at a positive rate', () => {
    expect(monthlyPayment(2400, 36, 9.9)).toBeCloseTo(77.3286, 3)
    expect(monthlyPayment(4500, 36, 9.9)).toBeCloseTo(144.9912, 3)
  })

  it('divides straight through at a zero rate', () => {
    expect(monthlyPayment(1200, 12, 0)).toBe(100)
  })
})

describe('quote', () => {
  it('matches the reference readings for the four probed amounts', () => {
    expect(quote(2400)).toEqual({ amount: '£2,400', monthly: '£77', total: '£2,784' })
    expect(quote(800)).toEqual({ amount: '£800', monthly: '£26', total: '£928' })
    expect(quote(1000)).toEqual({ amount: '£1,000', monthly: '£32', total: '£1,160' })
    expect(quote(4500)).toEqual({ amount: '£4,500', monthly: '£145', total: '£5,220' })
  })

  it('multiplies the unrounded monthly figure for the total', () => {
    // 2,400 × 9.9% over 36 months: 77.3286 × 36 = 2,783.83 → £2,784.
    expect(quote(2400).total).toBe('£2,784')
    expect(quote(2000)).toEqual({ amount: '£2,000', monthly: '£64', total: '£2,320' })
  })
})
