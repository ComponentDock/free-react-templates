import { describe, expect, it } from 'vitest'
import { isEmail } from './forms'
import { prefersReducedMotion } from './motion'
import { mockMatchMedia } from '../test/match-media'

describe('isEmail', () => {
  it('accepts a local address with a single at-sign and a dotted domain', () => {
    expect(isEmail('nora@ellisfield.co')).toBe(true)
  })

  it('refuses an empty field, a bare word, a missing domain and an inner space', () => {
    expect(isEmail('')).toBe(false)
    expect(isEmail('nora')).toBe(false)
    expect(isEmail('nora@ellisfield')).toBe(false)
    expect(isEmail('nora ellis@example.com')).toBe(false)
  })
})

describe('prefersReducedMotion', () => {
  it('reads the visitor preference off the media query', () => {
    expect(prefersReducedMotion()).toBe(false)

    mockMatchMedia(true)

    expect(prefersReducedMotion()).toBe(true)
  })
})
