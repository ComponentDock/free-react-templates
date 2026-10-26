import { describe, expect, it } from 'vitest'
import { clampSeconds, formatTime } from './format'

describe('formatTime', () => {
  it('prints minutes unpadded and seconds padded', () => {
    expect(formatTime(0)).toBe('0:00')
    expect(formatTime(9)).toBe('0:09')
    expect(formatTime(1122)).toBe('18:42')
    expect(formatTime(2538)).toBe('42:18')
    expect(formatTime(203)).toBe('3:23')
  })

  it('rounds a fractional simulated clock and floors negative input to zero', () => {
    expect(formatTime(1122.4)).toBe('18:42')
    expect(formatTime(1122.6)).toBe('18:43')
    expect(formatTime(-12)).toBe('0:00')
  })
})

describe('clampSeconds', () => {
  it('holds a value inside its track', () => {
    expect(clampSeconds(1152, 0, 2538)).toBe(1152)
    expect(clampSeconds(-15, 0, 2538)).toBe(0)
    expect(clampSeconds(2600, 0, 2538)).toBe(2538)
  })
})
