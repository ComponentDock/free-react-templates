import { describe, expect, it } from 'vitest'
import { getEventStart } from './data'

describe('getEventStart', () => {
  it('returns the next 12 September when the current year has not passed it', () => {
    const now = new Date(2026, 7, 1) // 1 Aug 2026
    const start = getEventStart(now)
    expect(start.getFullYear()).toBe(2026)
    expect(start.getMonth()).toBe(8)
    expect(start.getDate()).toBe(12)
  })

  it('returns the following year when 12 September has already passed', () => {
    const now = new Date(2026, 8, 20) // 20 Sep 2026
    const start = getEventStart(now)
    expect(start.getFullYear()).toBe(2027)
    expect(start.getMonth()).toBe(8)
    expect(start.getDate()).toBe(12)
  })
})
