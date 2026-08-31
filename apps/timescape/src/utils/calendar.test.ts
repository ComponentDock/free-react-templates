import { describe, it, expect } from 'vitest'
import {
  getDaysInMonth,
  getFirstDayOfWeek,
  isSameDate,
  isDateInRange,
  buildGrid,
  formatTimePrefix,
  getEventsForDate,
} from './calendar'
import type { CalendarEvent } from './calendar'

describe('getDaysInMonth', () => {
  it('returns 31 for January', () => {
    expect(getDaysInMonth(2020, 0)).toBe(31)
  })

  it('returns 29 for February in a leap year', () => {
    expect(getDaysInMonth(2020, 1)).toBe(29)
  })

  it('returns 28 for February in a non-leap year', () => {
    expect(getDaysInMonth(2019, 1)).toBe(28)
  })

  it('returns 30 for April', () => {
    expect(getDaysInMonth(2020, 3)).toBe(30)
  })
})

describe('getFirstDayOfWeek', () => {
  it('returns 6 for Feb 2020 (Saturday)', () => {
    expect(getFirstDayOfWeek(2020, 1)).toBe(6)
  })

  it('returns 0 for March 2020 (Sunday)', () => {
    expect(getFirstDayOfWeek(2020, 2)).toBe(0)
  })
})

describe('isSameDate', () => {
  it('returns true for same date', () => {
    expect(isSameDate(new Date(2020, 1, 12), new Date(2020, 1, 12))).toBe(true)
  })

  it('returns false for different dates', () => {
    expect(isSameDate(new Date(2020, 1, 12), new Date(2020, 1, 13))).toBe(false)
  })

  it('returns false for same day/time different year', () => {
    expect(isSameDate(new Date(2020, 1, 12), new Date(2021, 1, 12))).toBe(false)
  })
})

describe('isDateInRange', () => {
  it('returns true for date within range', () => {
    expect(isDateInRange(new Date(2020, 1, 8), new Date(2020, 1, 7), new Date(2020, 1, 10))).toBe(
      true,
    )
  })

  it('returns true for start date', () => {
    expect(isDateInRange(new Date(2020, 1, 7), new Date(2020, 1, 7), new Date(2020, 1, 10))).toBe(
      true,
    )
  })

  it('returns true for end date', () => {
    expect(isDateInRange(new Date(2020, 1, 10), new Date(2020, 1, 7), new Date(2020, 1, 10))).toBe(
      true,
    )
  })

  it('returns false for date outside range', () => {
    expect(isDateInRange(new Date(2020, 1, 6), new Date(2020, 1, 7), new Date(2020, 1, 10))).toBe(
      false,
    )
  })
})

describe('buildGrid', () => {
  it('builds a 5-row grid for Feb 2020 (starts Saturday, leap year)', () => {
    const today = new Date(2020, 1, 12)
    const grid = buildGrid(2020, 1, today)
    expect(grid).toHaveLength(5)
    expect(grid[0]).toHaveLength(7)
  })

  it('has leading Jan days in first row', () => {
    const today = new Date(2020, 1, 12)
    const grid = buildGrid(2020, 1, today)
    const firstRow = grid[0]!
    expect(firstRow[0]!.isCurrentMonth).toBe(false)
    expect(firstRow[0]!.day).toBe(26) // Jan 26
  })

  it('fills exactly 5 rows with no trailing days for Feb 2020', () => {
    const today = new Date(2020, 1, 12)
    const grid = buildGrid(2020, 1, today)
    expect(grid).toHaveLength(5)
    // Last cell of last row is Feb 29 (current month)
    const lastRow = grid[4]!
    expect(lastRow[6]!.isCurrentMonth).toBe(true)
    expect(lastRow[6]!.day).toBe(29)
  })

  it('marks today correctly', () => {
    const today = new Date(2020, 1, 12)
    const grid = buildGrid(2020, 1, today)
    const flat = grid.flat()
    const feb12 = flat.find((c) => c.isCurrentMonth && c.day === 12)
    expect(feb12?.isToday).toBe(true)
  })

  it('builds a 5-row grid for March 2020 (starts Sunday)', () => {
    const today = new Date(2020, 1, 12)
    const grid = buildGrid(2020, 2, today)
    expect(grid).toHaveLength(5)
  })
})

describe('formatTimePrefix', () => {
  it('formats 10:30 as 10:30a', () => {
    expect(formatTimePrefix(new Date(2020, 1, 12, 10, 30))).toBe('10:30a')
  })

  it('formats 12:00 as 12p', () => {
    expect(formatTimePrefix(new Date(2020, 1, 12, 12, 0))).toBe('12p')
  })

  it('formats 14:30 as 2:30p', () => {
    expect(formatTimePrefix(new Date(2020, 1, 12, 14, 30))).toBe('2:30p')
  })

  it('formats 0:00 as 12a', () => {
    expect(formatTimePrefix(new Date(2020, 1, 12, 0, 0))).toBe('12a')
  })

  it('formats 7:00 as 7a', () => {
    expect(formatTimePrefix(new Date(2020, 1, 13, 7, 0))).toBe('7a')
  })

  it('formats 10:15 as 10:15a (minutes >= 10 branch)', () => {
    expect(formatTimePrefix(new Date(2020, 1, 12, 10, 15))).toBe('10:15a')
  })

  it('formats 3:05 as 3:05p (minutes < 10 with minutes > 0)', () => {
    expect(formatTimePrefix(new Date(2020, 1, 12, 15, 5))).toBe('3:05p')
  })
})

describe('getEventsForDate', () => {
  const events: CalendarEvent[] = [
    { id: '1', title: 'All Day', start: new Date(2020, 1, 1), allDay: true },
    {
      id: '2',
      title: 'Multi',
      start: new Date(2020, 1, 7),
      end: new Date(2020, 1, 10),
      allDay: true,
    },
    { id: '3', title: 'Single', start: new Date(2020, 1, 12, 10, 0) },
  ]

  it('finds all-day events on their date', () => {
    expect(getEventsForDate(events, new Date(2020, 1, 1))).toHaveLength(1)
  })

  it('finds multi-day events on each spanned day', () => {
    expect(getEventsForDate(events, new Date(2020, 1, 8))).toHaveLength(1)
  })

  it('finds single events on their date', () => {
    expect(getEventsForDate(events, new Date(2020, 1, 12))).toHaveLength(1)
  })

  it('returns empty for days with no events', () => {
    expect(getEventsForDate(events, new Date(2020, 1, 5))).toHaveLength(0)
  })
})
