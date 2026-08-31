import { describe, it, expect } from 'vitest'
import { moveEventToDate, computeNavigation } from './Calendar'
import type { CalendarEvent } from '../utils/calendar'

describe('moveEventToDate', () => {
  it('moves a single-day event to a new date', () => {
    const events: CalendarEvent[] = [
      { id: '1', title: 'Meeting', start: new Date(2020, 1, 12, 10, 0) },
    ]
    const result = moveEventToDate(events, '1', new Date(2020, 1, 14))
    expect(result[0]!.start.getDate()).toBe(14)
    expect(result[0]!.start.getHours()).toBe(10)
  })

  it('moves a multi-day event preserving duration', () => {
    const events: CalendarEvent[] = [
      {
        id: '1',
        title: 'Conference',
        start: new Date(2020, 1, 11),
        end: new Date(2020, 1, 13),
        allDay: true,
      },
    ]
    const result = moveEventToDate(events, '1', new Date(2020, 1, 20))
    expect(result[0]!.start.getDate()).toBe(20)
    expect(result[0]!.end!.getDate()).toBe(22) // 2-day duration preserved
  })

  it('does not modify other events', () => {
    const events: CalendarEvent[] = [
      { id: '1', title: 'A', start: new Date(2020, 1, 1) },
      { id: '2', title: 'B', start: new Date(2020, 1, 5) },
    ]
    const result = moveEventToDate(events, '1', new Date(2020, 1, 10))
    expect(result[1]!.start.getDate()).toBe(5)
  })

  it('returns unchanged events if ID not found', () => {
    const events: CalendarEvent[] = [{ id: '1', title: 'A', start: new Date(2020, 1, 1) }]
    const result = moveEventToDate(events, 'nonexistent', new Date(2020, 1, 10))
    expect(result[0]!.start.getDate()).toBe(1)
  })
})

describe('computeNavigation', () => {
  it('navigates to next month', () => {
    expect(computeNavigation(0, 2020, 'next')).toEqual({ month: 1, year: 2020 })
  })

  it('navigates to previous month', () => {
    expect(computeNavigation(1, 2020, 'prev')).toEqual({ month: 0, year: 2020 })
  })

  it('rolls over from December to January', () => {
    expect(computeNavigation(11, 2020, 'next')).toEqual({ month: 0, year: 2021 })
  })

  it('rolls over from January to December', () => {
    expect(computeNavigation(0, 2021, 'prev')).toEqual({ month: 11, year: 2020 })
  })
})
