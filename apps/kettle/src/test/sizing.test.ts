import { describe, expect, it } from 'vitest'
import {
  computeSizing,
  tankFor,
  verdictFor,
  TARGET_TEMP,
  type SizingSelection,
} from '../sizing'

const DEFAULTS: SizingSelection = {
  fixtures: ['shower', 'shower2'],
  climate: '52',
  people: null,
}

const STRUGGLE =
  'At this flow and this cold an incoming supply, a single tankless unit will struggle. Either a tank, or two tankless units in parallel. Anybody quoting one unit here has not asked about your groundwater.'
const EITHER =
  'Either works. Tankless suits you if you want endless hot water and have the gas line or electrical capacity for it; a tank is cheaper to fit and simpler to replace.'
const REASONABLE =
  'Tankless is a reasonable fit at this flow, provided the gas supply and venting are right. We check both before quoting rather than after.'
const CHOOSE = 'Choose what might run at once and we will size both options.'

describe('computeSizing', () => {
  it('reproduces the reference defaults exactly', () => {
    const result = computeSizing(DEFAULTS)

    expect(TARGET_TEMP).toBe(120)
    expect(result.gpm).toBe('4.0 gpm')
    expect(result.rise).toBe(
      'At a 68 degree rise, which is what a unit has to deliver in your coldest month.',
    )
    expect(result.tank).toBe('40 gallon')
    expect(result.note).toBe(
      'Covers about 52 gallons in your busiest hour. Sized on that, not on the tank you have now.',
    )
    expect(result.verdict).toBe(REASONABLE)
  })

  it('falls back to a 55 degree incoming supply when no climate is chosen', () => {
    const result = computeSizing({ ...DEFAULTS, climate: null })

    expect(result.rise).toBe(
      'At a 65 degree rise, which is what a unit has to deliver in your coldest month.',
    )
    expect(result.verdict).toBe(REASONABLE)
  })

  it('falls back to a household of four when no people chip is chosen', () => {
    expect(computeSizing({ ...DEFAULTS, people: null }).note).toBe(
      'Covers about 52 gallons in your busiest hour. Sized on that, not on the tank you have now.',
    )
    expect(computeSizing({ ...DEFAULTS, people: '2' }).note).toBe(
      'Covers about 46 gallons in your busiest hour. Sized on that, not on the tank you have now.',
    )
  })

  it('sums every checked fixture, not the first one', () => {
    const result = computeSizing({
      fixtures: ['shower', 'shower2', 'bath'],
      climate: '42',
      people: '6',
    })

    expect(result.gpm).toBe('8.0 gpm')
    expect(result.rise).toBe(
      'At a 78 degree rise, which is what a unit has to deliver in your coldest month.',
    )
    expect(result.note).toBe(
      'Covers about 88 gallons in your busiest hour. Sized on that, not on the tank you have now.',
    )
    expect(result.tank).toBe('65 gallon')
    expect(result.verdict).toBe(STRUGGLE)
  })

  it('returns the empty state when nothing is checked', () => {
    expect(computeSizing({ fixtures: [], climate: '52', people: null })).toEqual({
      gpm: '—',
      rise: 'Pick at least one fixture.',
      tank: '—',
      note: '',
      verdict: CHOOSE,
    })
  })
})

describe('tankFor', () => {
  it('follows the reference thresholds', () => {
    expect(tankFor(40)).toBe(40)
    expect(tankFor(70)).toBe(40)
    expect(tankFor(71)).toBe(50)
    expect(tankFor(85)).toBe(50)
    expect(tankFor(86)).toBe(65)
    expect(tankFor(105)).toBe(65)
    expect(tankFor(106)).toBe(80)
    expect(tankFor(200)).toBe(80)
  })
})

describe('verdictFor', () => {
  it('checks the struggle branch before the low-flow branch', () => {
    expect(verdictFor(70, 5)).toBe(STRUGGLE)
    expect(verdictFor(78, 4)).toBe(REASONABLE)
    expect(verdictFor(68, 4)).toBe(REASONABLE)
    expect(verdictFor(80, 3.5)).toBe(EITHER)
    expect(verdictFor(65, 6)).toBe(REASONABLE)
  })
})
