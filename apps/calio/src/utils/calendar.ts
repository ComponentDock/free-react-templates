export interface CalendarEvent {
  id: string
  title: string
  start: Date
  end?: Date
  allDay?: boolean
  url?: string
  groupId?: number
  color?: string
}

export interface DayCell {
  date: Date
  day: number
  isCurrentMonth: boolean
  isToday: boolean
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

export function getFirstDayOfWeek(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

export function isSameDate(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function isDateInRange(date: Date, start: Date, end: Date): boolean {
  const d = date.getTime()
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime()
  const e = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime()
  return d >= s && d <= e
}

export function buildGrid(year: number, month: number, today: Date): DayCell[][] {
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfWeek(year, month)
  const daysInPrevMonth = getDaysInMonth(year, month - 1)

  const cells: DayCell[] = []

  for (let i = firstDay - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i
    cells.push({
      date: new Date(year, month - 1, day),
      day,
      isCurrentMonth: false,
      isToday: false,
    })
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d)
    cells.push({
      date,
      day: d,
      isCurrentMonth: true,
      isToday: isSameDate(date, today),
    })
  }

  const remaining = 7 - (cells.length % 7)
  if (remaining < 7) {
    for (let d = 1; d <= remaining; d++) {
      cells.push({
        date: new Date(year, month + 1, d),
        day: d,
        isCurrentMonth: false,
        isToday: false,
      })
    }
  }

  const rows: DayCell[][] = []
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7))
  }

  return rows
}

export function formatHour(hour: number): string {
  if (hour === 0) return '12 AM'
  if (hour < 12) return `${hour} AM`
  if (hour === 12) return '12 PM'
  return `${hour - 12} PM`
}

export function formatTime(date: Date): string {
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'
  if (hours === 0) hours = 12
  else if (hours > 12) hours -= 12
  if (minutes === 0) return `${hours}${ampm}`
  const mm = minutes < 10 ? `0${minutes}` : `${minutes}`
  return `${hours}:${mm}${ampm}`
}

export function formatTimeLong(date: Date): string {
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  if (hours === 0) hours = 12
  else if (hours > 12) hours -= 12
  const mm = minutes < 10 ? `0${minutes}` : `${minutes}`
  return `${hours}:${mm} ${ampm}`
}

export function getEventsForDate(events: CalendarEvent[], date: Date): CalendarEvent[] {
  return events.filter((event) => {
    if (event.end) {
      return isDateInRange(date, event.start, event.end)
    }
    return isSameDate(date, event.start)
  })
}

export function getTimedEventsForDate(events: CalendarEvent[], date: Date): CalendarEvent[] {
  return events.filter((event) => !event.allDay && isSameDate(date, event.start))
}

export function getAllDayEventsForDate(events: CalendarEvent[], date: Date): CalendarEvent[] {
  return events.filter((event) => {
    if (!event.allDay) return false
    if (event.end) return isDateInRange(date, event.start, event.end)
    return isSameDate(date, event.start)
  })
}

export function getWeekStart(date: Date): Date {
  const d = new Date(date)
  const day = d.getDay()
  d.setDate(d.getDate() - day)
  d.setHours(0, 0, 0, 0)
  return d
}

export function addDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

export function formatWeekRange(weekStart: Date): string {
  const end = addDays(weekStart, 6)
  const startMonth = weekStart.toLocaleString('en-US', { month: 'long' })
  const endMonth = end.toLocaleString('en-US', { month: 'long' })
  if (startMonth === endMonth) {
    return `${startMonth} ${weekStart.getDate()} – ${end.getDate()}, ${weekStart.getFullYear()}`
  }
  return `${startMonth} ${weekStart.getDate()} – ${endMonth} ${end.getDate()}, ${end.getFullYear()}`
}

export function formatDayTitle(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function getEventsForWeek(events: CalendarEvent[], weekStart: Date): CalendarEvent[] {
  const weekEnd = addDays(weekStart, 6)
  weekEnd.setHours(23, 59, 59, 999)
  return events.filter((event) => {
    const eventEnd = event.end ?? event.start
    return event.start <= weekEnd && eventEnd >= weekStart
  })
}

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const

export const WEEKDAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

export const WEEKDAYS_FULL = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const

export function computeMonthNav(
  currentMonth: number,
  currentYear: number,
  direction: 'prev' | 'next',
): { month: number; year: number } {
  if (direction === 'prev') {
    if (currentMonth === 0) return { month: 11, year: currentYear - 1 }
    return { month: currentMonth - 1, year: currentYear }
  }
  if (currentMonth === 11) return { month: 0, year: currentYear + 1 }
  return { month: currentMonth + 1, year: currentYear }
}
