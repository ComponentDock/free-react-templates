const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const

const MONTHS = [
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

export interface DateParts {
  weekday: string
  month: string
  day: string
  year: number
}

/** Ordinal suffix for a day of the month: 1st, 2nd, 3rd, 4th … 11th-13th stay "th". */
export function ordinalSuffix(day: number): string {
  if (day % 100 >= 11 && day % 100 <= 13) return 'th'
  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

/** Derives the four displayed values from a date: full weekday, full month, ordinal day, year. */
export function getDateParts(date: Date): DateParts {
  return {
    weekday: WEEKDAYS[date.getDay()]!,
    month: MONTHS[date.getMonth()]!,
    day: `${date.getDate()}${ordinalSuffix(date.getDate())}`,
    year: date.getFullYear(),
  }
}
