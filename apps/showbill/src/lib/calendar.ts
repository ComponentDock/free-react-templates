import type { CalendarEvent } from '../data/events'

/** Neutral product identity — the generated file never names the source design. */
export const PRODUCT_ID = '-//Component Dock//Showbill//EN'

/** The UID's domain: a real host, not a placeholder. */
export const CALENDAR_DOMAIN = 'componentdock.com'

/** RFC 5545 caps a content line at 75 octets. */
export const LINE_OCTETS = 75

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

/**
 * Lowercase, every run of non-alphanumerics collapsed to a single dash, no
 * leading or trailing dash. Drives both the file name and the event UID, so a
 * repeat click produces the same UID.
 */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Escape a TEXT value for RFC 5545. The punctuation set is `,` `;` `\`; CR and
 * LF become a literal `\n` so a value can never break the CRLF line structure.
 */
export function escapeIcsText(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/([,;])/g, '\\$1')
    .replace(/\r\n|\r|\n/g, '\\n')
}

/** `20261014T090000` (floating local) → `09:00`. */
export function clockLabel(value: string): string {
  return `${value.slice(9, 11)}:${value.slice(11, 13)}`
}

export interface DateParts {
  month: string
  day: string
  weekday: string
}

/** The date leaf's three labels, all read off one floating start value. */
export function dateParts(value: string): DateParts {
  const year = Number(value.slice(0, 4))
  const month = Number(value.slice(4, 6))
  const day = Number(value.slice(6, 8))
  const weekday = new Date(Date.UTC(year, month - 1, day)).getUTCDay()

  return { month: MONTHS[month - 1]!, day: String(day), weekday: WEEKDAYS[weekday]! }
}

/** `2026-10-14` — the machine-readable value behind the clock row. */
export function isoDate(value: string): string {
  return `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}T${value.slice(9, 11)}:${value.slice(11, 13)}`
}

/** UTC stamp in the calendar's own shape: `20261026T002100Z`. */
export function stampUtc(now: Date): string {
  const pad = (part: number) => String(part).padStart(2, '0')

  return (
    `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}` +
    `T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`
  )
}

/**
 * Fold a content line at 75 octets (74 on continuations, which carry a leading
 * space). Short lines pass through untouched — every line the demo prints does.
 */
function foldLine(line: string): string {
  const encoder = new TextEncoder()
  if (encoder.encode(line).length <= LINE_OCTETS) return line

  const chunks: string[] = []
  let limit = LINE_OCTETS
  let current = ''
  let used = 0

  for (const char of line) {
    const octets = encoder.encode(char).length
    if (used + octets > limit) {
      chunks.push(current)
      current = ''
      used = 0
      limit = LINE_OCTETS - 1
    }
    current += char
    used += octets
  }
  chunks.push(current)

  return chunks.join('\r\n ')
}

/**
 * The whole calendar file: 12 content lines joined with CRLF and no trailing
 * break. Times stay floating (no `Z`, no `TZID`) so the event lands at the wall
 * clock it was entered with.
 */
export function buildIcs(event: CalendarEvent, now: Date = new Date()): string {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:${PRODUCT_ID}`,
    'BEGIN:VEVENT',
    `UID:${slugify(event.title)}-${event.start}@${CALENDAR_DOMAIN}`,
    `DTSTAMP:${stampUtc(now)}`,
    `DTSTART:${event.start}`,
    `DTEND:${event.end}`,
    `SUMMARY:${escapeIcsText(event.title)}`,
    `LOCATION:${escapeIcsText(event.calendarLocation)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]

  return lines.map(foldLine).join('\r\n')
}

/**
 * Hand the text to the browser as a download. The object URL is revoked a
 * second later, once the download has read it.
 */
export function downloadIcs(filename: string, text: string): void {
  const blob = new Blob([text], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')

  anchor.href = url
  anchor.download = filename
  document.body.append(anchor)
  anchor.click()
  anchor.remove()

  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
