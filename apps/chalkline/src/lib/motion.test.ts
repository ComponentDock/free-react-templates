import { describe, expect, it } from 'vitest'
import { mockReducedMotion } from '../test/match-media'
import { prefersReducedMotion } from './motion'

describe('prefersReducedMotion', () => {
  it('reports the visitor preference', () => {
    expect(prefersReducedMotion()).toBe(false)

    mockReducedMotion()
    expect(prefersReducedMotion()).toBe(true)
  })
})
