import { describe, expect, it } from 'vitest'
import { COUNT_UP_MS, easeOutCubic, figureAt, readFigure } from './ease'

describe('easeOutCubic', () => {
  it('starts at 0, ends at 1 and is fastest at the start', () => {
    expect(easeOutCubic(0)).toBe(0)
    expect(easeOutCubic(1)).toBe(1)
    expect(easeOutCubic(0.25)).toBeCloseTo(0.578, 3)
    expect(easeOutCubic(0.5)).toBeCloseTo(0.875, 3)
    expect(easeOutCubic(0.25)).toBeGreaterThan(0.25)
  })

  it('clamps progress outside 0…1', () => {
    expect(easeOutCubic(-0.5)).toBe(0)
    expect(easeOutCubic(2)).toBe(1)
  })
})

describe('figureAt', () => {
  it('rounds to whole dollars between the two prices', () => {
    expect(figureAt(15, 12, 0)).toBe(15)
    expect(figureAt(15, 12, 1)).toBe(12)
    expect(figureAt(15, 12, 0.25)).toBe(13)
    expect(figureAt(100, 80, 1)).toBe(80)
  })

  it('counts up as happily as it counts down', () => {
    expect(figureAt(13, 15, 0.25)).toBe(14)
  })

  it('keeps the 600 ms budget in one place', () => {
    expect(COUNT_UP_MS).toBe(600)
  })
})

describe('readFigure', () => {
  it('returns the value at the index', () => {
    expect(readFigure([0, 12, 32, 80], 2, 0)).toBe(32)
  })

  it('falls back when the array is shorter than the plan list', () => {
    expect(readFigure([0], 3, 100)).toBe(100)
  })
})
