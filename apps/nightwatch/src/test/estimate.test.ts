import { describe, expect, it } from 'vitest'
import {
  BAND,
  ROUND_STEP,
  estimateText,
  formatRange,
  monthlyTotal,
  roundTo50,
} from '../lib/estimate'

const BASE = { rate: 20, sqft: 12000, factor: 1, extras: [] }

describe('roundTo50', () => {
  it('rounds to the nearest fifty so no reading ends in 40 or 60', () => {
    expect(ROUND_STEP).toBe(50)
    expect(roundTo50(2040)).toBe(2050)
    expect(roundTo50(2760)).toBe(2750)
    expect(roundTo50(5780)).toBe(5800)
    expect(roundTo50(7820)).toBe(7800)
    expect(roundTo50(0)).toBe(0)
  })
})

describe('monthlyTotal', () => {
  it('multiplies the per-square-foot rate and then adds the extras', () => {
    expect(BAND).toBe(0.15)
    expect(monthlyTotal(BASE)).toBe(2400)
    expect(monthlyTotal({ ...BASE, rate: 34, sqft: 20000 })).toBe(6800)
    expect(monthlyTotal({ ...BASE, extras: [180, 340, 120, 2400] })).toBe(5440)
  })

  it('scales sub-linearly with frequency, not by nights per week', () => {
    expect(monthlyTotal({ ...BASE, factor: 0.32 })).toBe(768)
    expect(monthlyTotal({ ...BASE, factor: 0.52 })).toBe(1248)
    expect(monthlyTotal({ ...BASE, factor: 0.7 })).toBe(1680)
  })
})

describe('formatRange', () => {
  it('prints both endpoints with thousands separators', () => {
    expect(formatRange(2400)).toBe('$2,050 to $2,750')
    expect(formatRange(6800)).toBe('$5,800 to $7,800')
    expect(formatRange(7140)).toBe('$6,050 to $8,200')
  })
})

describe('estimateText', () => {
  it('reads the three published samples exactly', () => {
    expect(estimateText(BASE)).toBe('$2,050 to $2,750')
    expect(estimateText({ ...BASE, rate: 34, sqft: 20000 })).toBe('$5,800 to $7,800')
    expect(estimateText({ ...BASE, rate: 34, sqft: 20000, extras: [340] })).toBe('$6,050 to $8,200')
  })

  it('shows an em dash whenever a term is missing', () => {
    expect(estimateText({ ...BASE, sqft: 0 })).toBe('—')
    expect(estimateText({ ...BASE, rate: 0 })).toBe('—')
    expect(estimateText({ ...BASE, factor: 0 })).toBe('—')
  })
})
