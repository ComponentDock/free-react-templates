import { describe, expect, it } from 'vitest'
import {
  MINUS,
  defaultSelection,
  formatAmount,
  formatNet,
  netPrice,
  selectedTotal,
} from './incentives'

describe('money formatting', () => {
  it('prints a U+2212 minus, a dollar sign and en-US grouping', () => {
    expect(formatAmount(4400)).toBe(`${MINUS}$4,400`)
    expect(formatAmount(8300)).toBe('−$8,300')
    expect(MINUS).toBe('\u2212')
    expect(formatNet(14800)).toBe('$14,800')
    expect(formatNet(0)).toBe('$0')
  })
})

describe('defaultSelection', () => {
  it('ticks federal, utility and manufacturer on load', () => {
    expect(defaultSelection()).toEqual(['federal', 'utility', 'manufacturer'])
  })
})

describe('the ledger arithmetic', () => {
  it('sums the three default programmes to 4,400 and nets 10,400', () => {
    expect(selectedTotal(defaultSelection())).toBe(4400)
    expect(netPrice(defaultSelection())).toBe(10400)
  })

  it('sums all six to 8,300 and nets 6,500', () => {
    const all = ['federal', 'utility', 'state', 'manufacturer', 'insulation', 'panel']
    expect(selectedTotal(all)).toBe(8300)
    expect(netPrice(all)).toBe(6500)
  })

  it('returns the installed price and a zero deduction when nothing is ticked', () => {
    expect(selectedTotal([])).toBe(0)
    expect(netPrice([])).toBe(14800)
  })

  it('ignores ids that are not in the programme list', () => {
    expect(selectedTotal(['nonsense', 'federal'])).toBe(2000)
  })
})
