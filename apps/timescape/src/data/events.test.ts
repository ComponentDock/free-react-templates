import { describe, it, expect } from 'vitest'
import { SAMPLE_EVENTS } from './events'

describe('SAMPLE_EVENTS', () => {
  it('has 12 events', () => {
    expect(SAMPLE_EVENTS).toHaveLength(12)
  })

  it('includes all-day events', () => {
    const allDay = SAMPLE_EVENTS.filter((e) => e.allDay)
    expect(allDay.length).toBeGreaterThan(0)
  })

  it('includes timed events', () => {
    const timed = SAMPLE_EVENTS.filter((e) => !e.allDay)
    expect(timed.length).toBeGreaterThan(0)
  })

  it('includes multi-day events', () => {
    const multiDay = SAMPLE_EVENTS.filter((e) => e.end)
    expect(multiDay.length).toBeGreaterThan(0)
  })

  it('includes a linked event', () => {
    const linked = SAMPLE_EVENTS.filter((e) => e.url)
    expect(linked).toHaveLength(1)
    expect(linked[0]!.url).toBe('http://google.com/')
  })

  it('includes repeating events with groupId', () => {
    const repeating = SAMPLE_EVENTS.filter((e) => e.groupId !== undefined)
    expect(repeating).toHaveLength(2)
  })
})
