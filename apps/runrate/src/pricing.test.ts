import { describe, expect, it } from 'vitest'
import {
  CALL_STEPS,
  CALLS_MAX,
  DEFAULT_CALLS_INDEX,
  DEFAULT_STORAGE_INDEX,
  LINE_KEYS,
  PRICES,
  STORAGE_MAX,
  STORAGE_STEPS,
  announcement,
  callsAriaLabel,
  callsCost,
  estimateFor,
  fillValue,
  formatCallsLabel,
  formatStorageLabel,
  formatUsd,
  storageCost,
} from './pricing'

/**
 * The page's arithmetic as two ladders. Every row is asserted against the
 * number the reference prints, so a change to a step table, a free tier or a
 * formatter fails here before it can reach a component.
 */

const CALL_TOTALS = [
  30.4, 30.4, 31.9, 34.4, 39.4, 54.4, 79.4, 129.4, 279.4, 529.4, 1029.4,
]
const CALL_LINES = [0, 0, 1.5, 4, 9, 24, 49, 99, 249, 499, 999]
const CALL_PILLS = ['0', '100K', '250K', '500K', '1M', '2.5M', '5M', '10M', '25M', '50M', '100M']

const STORAGE_TOTALS = [
  34, 34, 34.6, 36.4, 39.4, 45.4, 63.4, 93.4, 153.4, 273.4, 633.4, 1233.4,
]
const STORAGE_LINES = [0, 0, 0.6, 2.4, 5.4, 11.4, 29.4, 59.4, 119.4, 239.4, 599.4, 1199.4]
const STORAGE_PILLS = [
  '1 GB',
  '5 GB',
  '10 GB',
  '25 GB',
  '50 GB',
  '100 GB',
  '250 GB',
  '500 GB',
  '1 TB',
  '2 TB',
  '5 TB',
  '10 TB',
]

describe('the calls ladder', () => {
  it('prices every stop with storage at its default and support off', () => {
    CALL_STEPS.forEach((calls, index) => {
      const estimate = estimateFor(index, DEFAULT_STORAGE_INDEX, false)

      expect(estimate.calls).toBe(calls)
      expect(formatUsd(estimate.cost.calls)).toBe(formatUsd(CALL_LINES[index]!))
      expect(formatUsd(estimate.total)).toBe(formatUsd(CALL_TOTALS[index]!))
      expect(estimate.callsLabel).toBe(CALL_PILLS[index])
    })
  })

  it('leaves the first 100,000 requests free and charges the first dollar at 250K', () => {
    expect(callsCost(0)).toBe(0)
    expect(callsCost(PRICES.freeCalls)).toBe(0)
    expect(callsCost(250_000)).toBe(1.5)
    expect(callsCost(100_000_000)).toBe(999)
  })

  it('speaks the plain number while the pill stays compact', () => {
    expect(callsAriaLabel(0)).toBe('0 requests')
    expect(callsAriaLabel(1_000_000)).toBe('1,000,000 requests')
    expect(callsAriaLabel(100_000_000)).toBe('100,000,000 requests')
    expect(formatCallsLabel(0)).toBe('0')
    expect(formatCallsLabel(2_500_000)).toBe('2.5M')
  })
})

describe('the storage ladder', () => {
  it('prices every stop with calls at their default and support off', () => {
    STORAGE_STEPS.forEach((gb, index) => {
      const estimate = estimateFor(DEFAULT_CALLS_INDEX, index, false)

      expect(estimate.gb).toBe(gb)
      expect(formatUsd(estimate.cost.storage)).toBe(formatUsd(STORAGE_LINES[index]!))
      expect(formatUsd(estimate.total)).toBe(formatUsd(STORAGE_TOTALS[index]!))
      expect(estimate.storageLabel).toBe(STORAGE_PILLS[index])
    })
  })

  it('leaves the first 5 GB free and switches unit at 1000 GB', () => {
    expect(storageCost(1)).toBe(0)
    expect(storageCost(5)).toBe(0)
    expect(storageCost(10)).toBe(0.6)
    expect(storageCost(10_000)).toBeCloseTo(1199.4, 6)
    expect(formatStorageLabel(1)).toBe('1 GB')
    expect(formatStorageLabel(999)).toBe('999 GB')
    expect(formatStorageLabel(1000)).toBe('1 TB')
    expect(formatStorageLabel(10_000)).toBe('10 TB')
  })
})

describe('the support boolean', () => {
  it('adds exactly $149 to the total and to its own line', () => {
    const off = estimateFor(DEFAULT_CALLS_INDEX, DEFAULT_STORAGE_INDEX, false)
    const on = estimateFor(DEFAULT_CALLS_INDEX, DEFAULT_STORAGE_INDEX, true)

    expect(formatUsd(off.total)).toBe('$39.40')
    expect(formatUsd(on.total)).toBe('$188.40')
    expect(on.total - off.total).toBe(149)
    expect(on.cost.support).toBe(149)
    expect(off.cost.support).toBe(0)
  })

  it('reproduces the five corner combinations', () => {
    const corners: [number, number, boolean, string][] = [
      [0, 0, false, '$25.00'],
      [10, 11, true, '$2,372.40'],
      [10, 0, true, '$1,173.00'],
      [0, 11, true, '$1,373.40'],
      [7, 7, true, '$332.40'],
    ]

    for (const [calls, storage, support, expected] of corners) {
      expect(formatUsd(estimateFor(calls, storage, support).total)).toBe(expected)
    }
  })
})

describe('the derived view state', () => {
  it('fills both tracks by index, not by amount', () => {
    const atDefaults = estimateFor(4, 4, false)
    expect(atDefaults.callsFill).toBe('40%')
    expect(atDefaults.storageFill).toBe('36.36363636363637%')

    expect(fillValue(0, 10)).toBe('0%')
    expect(fillValue(10, 10)).toBe('100%')
    expect(estimateFor(CALLS_MAX, STORAGE_MAX, false).callsFill).toBe('100%')
    expect(estimateFor(CALLS_MAX, STORAGE_MAX, false).storageFill).toBe('100%')
  })

  it('keys the four lines in the order the bar paints them', () => {
    expect(LINE_KEYS).toEqual(['base', 'calls', 'storage', 'support'])
    expect(Object.keys(estimateFor(4, 4, false).cost)).toEqual([...LINE_KEYS])
  })

  it('reads an out-of-range index as zero rather than crashing', () => {
    const estimate = estimateFor(99, 99, false)
    expect(estimate.calls).toBe(0)
    expect(estimate.gb).toBe(0)
    expect(estimate.total).toBe(25)
  })

  it('formats the total the way the card prints it', () => {
    expect(formatUsd(39.4)).toBe('$39.40')
    expect(formatUsd(2372.4)).toBe('$2,372.40')
    expect(formatUsd(0)).toBe('$0.00')
    expect(announcement(39.4)).toBe('Estimated total $39.40 per month.')
  })
})
