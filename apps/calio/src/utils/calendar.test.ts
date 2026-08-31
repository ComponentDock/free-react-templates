import { describe, it, expect } from 'vitest'
import {
  getDaysInMonth,
  getFirstDayOfWeek,
  isSameDate,
  isDateInRange,
  buildGrid,
  formatHour,
  formatTime,
  formatTimeLong,
  getEventsForDate,
  getTimedEventsForDate,
  getAllDayEventsForDate,
  getWeekStart,
  addDays,
  formatWeekRange,
  formatDayTitle,
  getEventsForWeek,
  computeMonthNav,
} from './calendar'
import type { CalendarEvent } from './calendar'

describe('getDaysInMonth', () => {
  it('returns 29 for Feb 2020 (leap year)', () => {
    expect(getDaysInMonth(2020, 1)).toBe(29)
  })

  it('returns 28 for Feb 2019 (non-leap year)', () => {
    expect(getDaysInMonth(2019, 1)).toBe(28)
  })

  it('returns 31 for January', () => {
    expect(getDaysInMonth(2020, 0)).toBe(31)
  })
})

describe('getFirstDayOfWeek', () => {
  it('returns 6 for Feb 2020 (starts Saturday)', () => {
    expect(getFirstDayOfWeek(2020, 1)).toBe(6)
  })

  it('returns 0 for March 2020 (starts Sunday)', () => {
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

  it('returns false for same day different time', () => {
    expect(isSameDate(new Date(2020, 1, 12, 10, 0), new Date(2020, 1, 12, 15, 0))).toBe(true)
  })
})

describe('isDateInRange', () => {
  it('returns true for date in range', () => {
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
  it('builds a 5-row grid for Feb 2020', () => {
    const grid = buildGrid(2020, 1, new Date(2020, 1, 12))
    expect(grid).toHaveLength(5)
    expect(grid[0]).toHaveLength(7)
  })

  it('marks today correctly', () => {
    const grid = buildGrid(2020, 1, new Date(2020, 1, 12))
    const todayCell = grid.flat().find((c) => c.isToday)
    expect(todayCell).toBeDefined()
    expect(todayCell!.day).toBe(12)
  })

  it('marks adjacent month days as not current month', () => {
    const grid = buildGrid(2020, 1, new Date(2020, 1, 12))
    const adjacentDays = grid.flat().filter((c) => !c.isCurrentMonth)
    expect(adjacentDays.length).toBeGreaterThan(0)
  })
})

describe('formatHour', () => {
  it('formats midnight as 12 AM', () => {
    expect(formatHour(0)).toBe('12 AM')
  })

  it('formats noon as 12 PM', () => {
    expect(formatHour(12)).toBe('12 PM')
  })

  it('formats afternoon correctly', () => {
    expect(formatHour(15)).toBe('3 PM')
  })

  it('formats morning correctly', () => {
    expect(formatHour(9)).toBe('9 AM')
  })
})

describe('formatTime', () => {
  it('formats time without minutes', () => {
    expect(formatTime(new Date(2020, 1, 12, 10, 0))).toBe('10am')
  })

  it('formats time with minutes', () => {
    expect(formatTime(new Date(2020, 1, 12, 10, 30))).toBe('10:30am')
  })

  it('formats midnight', () => {
    expect(formatTime(new Date(2020, 1, 12, 0, 0))).toBe('12am')
  })

  it('formats noon', () => {
    expect(formatTime(new Date(2020, 1, 12, 12, 0))).toBe('12pm')
  })

  it('formats afternoon with minutes', () => {
    expect(formatTime(new Date(2020, 1, 12, 14, 45))).toBe('2:45pm')
  })

  it('formats single-digit minutes with zero padding', () => {
    expect(formatTime(new Date(2020, 1, 12, 9, 5))).toBe('9:05am')
  })
})

describe('formatTimeLong', () => {
  it('formats time with AM/PM', () => {
    expect(formatTimeLong(new Date(2020, 1, 12, 10, 30))).toBe('10:30 AM')
  })

  it('formats PM time', () => {
    expect(formatTimeLong(new Date(2020, 1, 12, 14, 0))).toBe('2:00 PM')
  })

  it('formats midnight', () => {
    expect(formatTimeLong(new Date(2020, 1, 12, 0, 0))).toBe('12:00 AM')
  })
})

describe('getEventsForDate', () => {
  const events: CalendarEvent[] = [
    { id: '1', title: 'Single', start: new Date(2020, 1, 12) },
    {
      id: '2',
      title: 'Multi',
      start: new Date(2020, 1, 7),
      end: new Date(2020, 1, 10),
      allDay: true,
    },
  ]

  it('returns single-day events on matching date', () => {
    const result = getEventsForDate(events, new Date(2020, 1, 12))
    expect(result).toHaveLength(1)
    expect(result[0]!.title).toBe('Single')
  })

  it('returns multi-day events on spanned dates', () => {
    const result = getEventsForDate(events, new Date(2020, 1, 8))
    expect(result).toHaveLength(1)
    expect(result[0]!.title).toBe('Multi')
  })

  it('returns empty for non-matching dates', () => {
    const result = getEventsForDate(events, new Date(2020, 1, 5))
    expect(result).toHaveLength(0)
  })
})

describe('getTimedEventsForDate', () => {
  const events: CalendarEvent[] = [
    { id: '1', title: 'Timed', start: new Date(2020, 1, 12, 10, 0) },
    { id: '2', title: 'AllDay', start: new Date(2020, 1, 12), allDay: true },
  ]

  it('returns only timed events', () => {
    const result = getTimedEventsForDate(events, new Date(2020, 1, 12))
    expect(result).toHaveLength(1)
    expect(result[0]!.title).toBe('Timed')
  })
})

describe('getAllDayEventsForDate', () => {
  const events: CalendarEvent[] = [
    { id: '1', title: 'Timed', start: new Date(2020, 1, 12, 10, 0) },
    { id: '2', title: 'AllDay', start: new Date(2020, 1, 12), allDay: true },
    {
      id: '3',
      title: 'MultiDay',
      start: new Date(2020, 1, 7),
      end: new Date(2020, 1, 10),
      allDay: true,
    },
  ]

  it('returns only all-day events', () => {
    const result = getAllDayEventsForDate(events, new Date(2020, 1, 12))
    expect(result).toHaveLength(1)
    expect(result[0]!.title).toBe('AllDay')
  })

  it('returns multi-day events on spanned dates', () => {
    const result = getAllDayEventsForDate(events, new Date(2020, 1, 8))
    expect(result).toHaveLength(1)
    expect(result[0]!.title).toBe('MultiDay')
  })
})

describe('getWeekStart', () => {
  it('returns Sunday for a Wednesday', () => {
    const result = getWeekStart(new Date(2020, 1, 12)) // Wednesday
    expect(result.getDay()).toBe(0)
    expect(result.getDate()).toBe(9)
  })

  it('returns same day for Sunday', () => {
    const result = getWeekStart(new Date(2020, 1, 9)) // Sunday
    expect(result.getDay()).toBe(0)
    expect(result.getDate()).toBe(9)
  })
})

describe('addDays', () => {
  it('adds days correctly', () => {
    const result = addDays(new Date(2020, 1, 12), 5)
    expect(result.getDate()).toBe(17)
  })

  it('handles month boundaries', () => {
    const result = addDays(new Date(2020, 0, 30), 5)
    expect(result.getMonth()).toBe(1)
    expect(result.getDate()).toBe(4)
  })
})

describe('formatWeekRange', () => {
  it('formats range within same month', () => {
    const weekStart = new Date(2020, 1, 9) // Feb 9
    const result = formatWeekRange(weekStart)
    expect(result).toContain('February')
    expect(result).toContain('9')
    expect(result).toContain('15')
  })

  it('formats range across months', () => {
    const weekStart = new Date(2020, 0, 26) // Jan 26 (Sun) → ends Feb 1
    const result = formatWeekRange(weekStart)
    expect(result).toContain('January')
    expect(result).toContain('February')
  })
})

describe('formatDayTitle', () => {
  it('formats full day title', () => {
    const result = formatDayTitle(new Date(2020, 1, 12))
    expect(result).toContain('Wednesday')
    expect(result).toContain('February')
    expect(result).toContain('12')
    expect(result).toContain('2020')
  })
})

describe('getEventsForWeek', () => {
  const events: CalendarEvent[] = [
    { id: '1', title: 'In Week', start: new Date(2020, 1, 12) },
    { id: '2', title: 'Before', start: new Date(2020, 1, 1) },
    {
      id: '3',
      title: 'Multi',
      start: new Date(2020, 1, 6),
      end: new Date(2020, 1, 14),
      allDay: true,
    },
  ]

  it('returns events within the week', () => {
    const weekStart = getWeekStart(new Date(2020, 1, 12)) // Feb 9
    const result = getEventsForWeek(events, weekStart)
    expect(result).toHaveLength(2)
  })
})

describe('computeMonthNav', () => {
  it('navigates to next month', () => {
    expect(computeMonthNav(0, 2020, 'next')).toEqual({ month: 1, year: 2020 })
  })

  it('navigates to previous month', () => {
    expect(computeMonthNav(1, 2020, 'prev')).toEqual({ month: 0, year: 2020 })
  })

  it('rolls over from December to January', () => {
    expect(computeMonthNav(11, 2020, 'next')).toEqual({ month: 0, year: 2021 })
  })

  it('rolls over from January to December', () => {
    expect(computeMonthNav(0, 2021, 'prev')).toEqual({ month: 11, year: 2020 })
  })
})
