import { describe, expect, it } from 'vitest'
import { QUIZ_FALLBACK } from '../content'
import { resolveOutcome } from './quiz'

describe('resolveOutcome', () => {
  it('recommends a softener for scale', () => {
    expect(resolveOutcome(['scale', 'small', 'city']).product).toBe('A water softener')
  })

  it('recommends filtration for taste on a city supply', () => {
    expect(resolveOutcome(['taste', 'city']).product).toBe('Whole-house filtration')
  })

  it('recommends filtration then RO for taste on a well', () => {
    expect(resolveOutcome(['taste', 'well']).product).toBe(
      'Whole-house filtration, then reverse osmosis',
    )
  })

  it('recommends a tankless heater for hot water capacity', () => {
    expect(resolveOutcome(['hotwater', 'medium']).product).toBe('A tankless water heater')
  })

  it('recommends a free test for the curious', () => {
    expect(resolveOutcome(['curious', 'unknown', 'large']).product).toBe('A free water test')
  })

  it('takes the first outcome that matches, not the most specific', () => {
    expect(resolveOutcome(['scale', 'taste', 'city']).product).toBe('A water softener')
  })

  it('falls back to the free test when nothing matches', () => {
    expect(resolveOutcome(['unknown'])).toBe(QUIZ_FALLBACK)
  })
})
