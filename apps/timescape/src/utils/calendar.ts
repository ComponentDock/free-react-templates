export interface CalendarEvent {
  id: string
  title: string
  start: Date
  end?: Date
  allDay?: boolean
  url?: string
  groupId?: number
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

  // Leading adjacent-month days
  for (let i = firstDay - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i
    cells.push({
      date: new Date(year, month - 1, day),
      day,
      isCurrentMonth: false,
      isToday: false,
    })
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d)
    cells.push({
      date,
      day: d,
      isCurrentMonth: true,
      isToday: isSameDate(date, today),
    })
  }

  // Trailing adjacent-month days
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

  // Split into rows of 7
  const rows: DayCell[][] = []
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7))
  }

  return rows
}

export function formatTimePrefix(date: Date): string {
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'p' : 'a'
  if (hours === 0) hours = 12
  else if (hours > 12) hours -= 12
  if (minutes === 0) return `${hours}${ampm}`
  const mm = minutes < 10 ? `0${minutes}` : `${minutes}`
  return `${hours}:${mm}${ampm}`
}

export function getEventsForDate(events: CalendarEvent[], date: Date): CalendarEvent[] {
  return events.filter((event) => {
    if (event.end) {
      return isDateInRange(date, event.start, event.end)
    }
    return isSameDate(date, event.start)
  })
}
