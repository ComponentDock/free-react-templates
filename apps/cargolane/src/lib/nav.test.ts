import { describe, expect, it } from 'vitest'
import { ACTIVE_OFFSET, SCROLL_THRESHOLD, isScrolled, resolveActiveId } from './nav'

describe('nav helpers', () => {
  it('switches to the scrolled state past the threshold', () => {
    expect(isScrolled(SCROLL_THRESHOLD)).toBe(false)
    expect(isScrolled(SCROLL_THRESHOLD + 1)).toBe(true)
    expect(isScrolled(0)).toBe(false)
  })

  it('defaults to the first section when nothing is in range', () => {
    expect(
      resolveActiveId(['home', 'about'], [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY], 0),
    ).toBe('home')
    expect(resolveActiveId(['home', 'about'], [500, Number.POSITIVE_INFINITY], 0)).toBe('home')
    expect(resolveActiveId(['home', 'about'], [500, 600], 0)).toBe('home')
  })

  it('picks the last section whose top is within the active offset', () => {
    expect(resolveActiveId(['home', 'about', 'team'], [0, 400, 900], 800)).toBe('team')
    expect(resolveActiveId(['home', 'about', 'team'], [0, 400, 900], 450)).toBe('about')
    expect(resolveActiveId(['home', 'about', 'team'], [0, 400, 900], 900 - ACTIVE_OFFSET)).toBe(
      'team',
    )
  })

  it('skips sections with unknown tops', () => {
    expect(resolveActiveId(['home', 'about'], [0], 500)).toBe('home')
  })

  it('returns an empty id when no sections are known', () => {
    expect(resolveActiveId([], [], 0)).toBe('')
  })
})
