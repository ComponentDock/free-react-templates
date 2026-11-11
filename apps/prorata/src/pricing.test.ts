import { describe, expect, it } from 'vitest'
import {
  MAX_SEATS,
  MIN_SEATS,
  TIERS,
  ariaValueText,
  average,
  clampSeats,
  detailLead,
  detailParts,
  fillPercent,
  fillValue,
  formatAverage,
  formatTotal,
  seatsInTier,
  tierCounts,
  total,
} from './pricing'

describe('clampSeats', () => {
  it.each([
    ['12', 12],
    ['1', 1],
    ['', 1],
    ['abc', 1],
    ['0', 1],
    ['-5', 1],
    ['250', 200],
    ['999', 200],
    ['7.6', 8],
    ['7.4', 7],
  ])('turns %j into %i seats', (raw, expected) => {
    expect(clampSeats(raw)).toBe(expected)
  })

  it('never leaves the 1 … 200 band', () => {
    for (const raw of ['', 'abc', '-1', '0', '201', '9999']) {
      const seats = clampSeats(raw)
      expect(seats).toBeGreaterThanOrEqual(MIN_SEATS)
      expect(seats).toBeLessThanOrEqual(MAX_SEATS)
      expect(Number.isInteger(seats)).toBe(true)
    }
  })
})

describe('the rate table', () => {
  it('is three graduated tiers that end at the seat ceiling', () => {
    expect(TIERS).toHaveLength(3)
    expect(TIERS[0]).toMatchObject({ min: 1, max: 10, rate: 12 })
    expect(TIERS[1]).toMatchObject({ min: 11, max: 50, rate: 10 })
    expect(TIERS[2]).toMatchObject({ min: 51, max: 200, rate: 8 })
    expect(TIERS[TIERS.length - 1]!.max).toBe(MAX_SEATS)
  })

  it('counts only the seats each tier actually uses', () => {
    expect(tierCounts(12)).toEqual([10, 2, 0])
    expect(tierCounts(1)).toEqual([1, 0, 0])
    expect(tierCounts(51)).toEqual([10, 40, 1])
    expect(tierCounts(200)).toEqual([10, 40, 150])
    expect(seatsInTier(30, TIERS[1]!)).toBe(20)
    expect(seatsInTier(5, TIERS[2]!)).toBe(0)
  })
})

describe('total', () => {
  it.each([
    [1, 12],
    [2, 24],
    [9, 108],
    [10, 120],
    [11, 130],
    [12, 140],
    [13, 150],
    [30, 320],
    [50, 520],
    [51, 528],
    [60, 600],
    [100, 920],
    [150, 1320],
    [199, 1712],
    [200, 1720],
  ])('bills %i seats at $%i', (seats, expected) => {
    expect(total(seats)).toBe(expected)
  })

  it('is graduated, not a flat rate — every step across a boundary is small', () => {
    expect(total(11) - total(10)).toBe(10)
    expect(total(51) - total(50)).toBe(8)
  })
})

describe('formatting', () => {
  it('prints whole dollars and groups thousands', () => {
    expect(formatTotal(12)).toBe('$12')
    expect(formatTotal(140)).toBe('$140')
    expect(formatTotal(1720)).toBe('$1,720')
  })

  it('prints the average with exactly two decimals', () => {
    expect(formatAverage(average(12))).toBe('$11.67')
    expect(formatAverage(average(1))).toBe('$12.00')
    expect(formatAverage(average(200))).toBe('$8.60')
    expect(average(12)).toBeCloseTo(11.6667, 4)
  })
})

describe('fill', () => {
  it('runs 0 → 100 across the seat band', () => {
    expect(fillPercent(1)).toBe(0)
    expect(fillPercent(200)).toBe(100)
    expect(fillPercent(12)).toBeCloseTo(5.5276, 3)
    expect(fillValue(1)).toBe('0%')
    expect(fillValue(200)).toBe('100%')
  })
})

describe('ariaValueText', () => {
  it('uses the singular at one seat and the total on every count', () => {
    expect(ariaValueText(1)).toBe('1 seat, $12 per month')
    expect(ariaValueText(12)).toBe('12 seats, $140 per month')
    expect(ariaValueText(200)).toBe('200 seats, $1,720 per month')
  })
})

describe('detail line', () => {
  it('lists only the tiers in use', () => {
    expect(detailParts(1)).toEqual(['1 × $12'])
    expect(detailParts(10)).toEqual(['10 × $12'])
    expect(detailParts(12)).toEqual(['10 × $12', '2 × $10'])
    expect(detailParts(50)).toEqual(['10 × $12', '40 × $10'])
    expect(detailParts(51)).toEqual(['10 × $12', '40 × $10', '1 × $8'])
    expect(detailParts(200)).toEqual(['10 × $12', '40 × $10', '150 × $8'])
  })

  it('joins the parts and leaves room for the highlighted average', () => {
    expect(detailLead(12)).toBe('10 × $12 + 2 × $10. Average ')
    expect(detailLead(51)).toBe('10 × $12 + 40 × $10 + 1 × $8. Average ')
  })
})
