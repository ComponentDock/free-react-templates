import { describe, expect, it } from 'vitest'
import { bandClass, bandFor, scoreClass, weightedMean } from './gradebook'

describe('bandFor', () => {
  it('bands the seven grades on the documented scale', () => {
    expect(bandFor(87.0)).toBe('Distinction')
    expect(bandFor(75.9)).toBe('Merit')
    expect(bandFor(91.4)).toBe('Distinction')
    expect(bandFor(59.0)).toBe('Pass')
    expect(bandFor(82.5)).toBe('Merit')
    expect(bandFor(46.7)).toBe('At risk')
    expect(bandFor(67.6)).toBe('Pass')
  })

  it('treats the thresholds as inclusive', () => {
    expect(bandFor(85)).toBe('Distinction')
    expect(bandFor(70)).toBe('Merit')
    expect(bandFor(50)).toBe('Pass')
    expect(bandFor(49.9)).toBe('At risk')
  })

  it('lets an outstanding component outrank the mean', () => {
    expect(bandFor(67.6, true)).toBe('Incomplete')
    expect(bandFor(99, true)).toBe('Incomplete')
  })
})

describe('weightedMean', () => {
  it('weights each component and rounds to one decimal', () => {
    expect(weightedMean([95, 89, 88, 90, 91, 94], [15, 15, 10, 20, 20, 20])).toBe(91.4)
    expect(weightedMean([74, 68, 92, 71, 80, 76], [15, 15, 10, 20, 20, 20])).toBe(75.9)
  })

  it('treats a component with no weight as weightless', () => {
    expect(weightedMean([80, 90], [100])).toBe(80)
  })

  it('counts a missing submission as zero', () => {
    expect(weightedMean([79, 85, 90, null, 87, 83], [15, 15, 10, 20, 20, 20])).toBe(67.6)
  })
})

describe('scoreClass', () => {
  it('colours a score by the same thresholds', () => {
    expect(scoreClass(70)).toContain('text-primary-700')
    expect(scoreClass(69)).toContain('text-gray-700')
    expect(scoreClass(50)).toContain('text-gray-700')
    expect(scoreClass(49)).toContain('text-accent-600')
  })
})

describe('bandClass', () => {
  it('has a colourway for every band', () => {
    expect(Object.keys(bandClass)).toEqual([
      'Distinction',
      'Merit',
      'Pass',
      'At risk',
      'Incomplete',
    ])
    expect(bandClass.Incomplete).toContain('ring-1')
  })
})
