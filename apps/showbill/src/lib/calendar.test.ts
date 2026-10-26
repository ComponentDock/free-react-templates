import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import {
  buildIcs,
  CALENDAR_DOMAIN,
  clockLabel,
  dateParts,
  downloadIcs,
  escapeIcsText,
  isoDate,
  LINE_OCTETS,
  PRODUCT_ID,
  slugify,
  stampUtc,
} from './calendar'
import { EVENTS } from '../data/events'

const CRAFT = EVENTS[0]!
const NOW = new Date(Date.UTC(2026, 9, 26, 0, 21, 0))
const octets = (value: string) => new TextEncoder().encode(value).length

describe('calendar', () => {
  describe('slugify', () => {
    it('collapses every run of non-alphanumerics to one dash', () => {
      expect(slugify('Product Craft Summit 2026')).toBe('product-craft-summit-2026')
      expect(slugify('Marés: Live at the Riverside')).toBe('mar-s-live-at-the-riverside')
      expect(slugify('  €45 — incl. coffee!  ')).toBe('45-incl-coffee')
    })

    it('trims the dashes it adds at either end', () => {
      expect(slugify('—Latte Art—')).toBe('latte-art')
      expect(slugify('!!!')).toBe('')
    })
  })

  describe('escapeIcsText', () => {
    it('prefixes commas, semicolons and backslashes', () => {
      expect(escapeIcsText('Centro de Congressos, Lisbon')).toBe(
        'Centro de Congressos\\, Lisbon',
      )
      expect(escapeIcsText('a;b\\c')).toBe('a\\;b\\\\c')
    })

    it('turns CR, LF and CRLF into a literal backslash-n', () => {
      expect(escapeIcsText('Two\nLine')).toBe('Two\\nLine')
      expect(escapeIcsText('Two\rLine')).toBe('Two\\nLine')
      expect(escapeIcsText('Two\r\nLine')).toBe('Two\\nLine')
    })

    it('leaves ordinary text alone', () => {
      expect(escapeIcsText('Latte Art Morning Workshop')).toBe('Latte Art Morning Workshop')
    })
  })

  describe('clockLabel / isoDate / dateParts', () => {
    it('reads a floating start as a wall clock, an ISO date and leaf labels', () => {
      expect(clockLabel('20261014T090000')).toBe('09:00')
      expect(isoDate('20261014T090000')).toBe('2026-10-14T09:00')
      expect(dateParts('20261014T090000')).toEqual({ month: 'Oct', day: '14', weekday: 'Wed' })
    })

    it('keeps the end that crosses midnight at 00:00 on the next day', () => {
      expect(clockLabel('20261018T000000')).toBe('00:00')
      expect(dateParts('20261018T000000')).toEqual({ month: 'Oct', day: '18', weekday: 'Sun' })
    })

    it('names every month and weekday it is handed', () => {
      const months = new Set<string>()
      for (let month = 1; month <= 12; month += 1) {
        const value = `2026${String(month).padStart(2, '0')}01T100000`
        months.add(dateParts(value).month)
      }
      expect([...months]).toEqual([
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
      ])
      expect(dateParts('20261004T000000').weekday).toBe('Sun')
      expect(dateParts('20261005T000000').weekday).toBe('Mon')
      expect(dateParts('20261006T000000').weekday).toBe('Tue')
      expect(dateParts('20261008T000000').weekday).toBe('Thu')
      expect(dateParts('20261009T000000').weekday).toBe('Fri')
      expect(dateParts('20261010T000000').weekday).toBe('Sat')
    })
  })

  describe('stampUtc', () => {
    it('writes the click time in the calendar shape, zero-padded', () => {
      expect(stampUtc(NOW)).toBe('20261026T002100Z')
      expect(stampUtc(new Date(Date.UTC(2026, 0, 2, 3, 4, 5)))).toBe('20260102T030405Z')
    })
  })

  describe('buildIcs', () => {
    it('writes twelve CRLF lines with no trailing break', () => {
      const text = buildIcs(CRAFT, NOW)
      const lines = text.split('\r\n')

      expect(lines).toEqual([
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        `PRODID:${PRODUCT_ID}`,
        'BEGIN:VEVENT',
        `UID:product-craft-summit-2026-20261014T090000@${CALENDAR_DOMAIN}`,
        'DTSTAMP:20261026T002100Z',
        'DTSTART:20261014T090000',
        'DTEND:20261014T173000',
        'SUMMARY:Product Craft Summit 2026',
        'LOCATION:Centro de Congressos\\, Lisbon',
        'END:VEVENT',
        'END:VCALENDAR',
      ])
      expect(text.endsWith('END:VCALENDAR')).toBe(true)
      expect(text.match(/\r\n/g)).toHaveLength(11)
      expect(/(^|[^\r])\n/.test(text)).toBe(false)
    })

    it('keeps the times floating — no Z, no TZID', () => {
      const text = buildIcs(EVENTS[1]!, NOW)

      expect(text).toContain('DTSTART:20261017T213000\r\nDTEND:20261018T000000')
      expect(text).not.toContain('DTSTART:20261017T213000Z')
      expect(text).not.toContain('TZID')
    })

    it('escapes the venue that carries a comma', () => {
      const text = buildIcs(EVENTS[2]!, NOW)

      expect(text).toContain('LOCATION:Fábrica Coffee Lab\\, Lisbon')
      expect(text).toContain('SUMMARY:Latte Art Morning Workshop')
      expect(text).toContain(`UID:latte-art-morning-workshop-20261024T100000@${CALENDAR_DOMAIN}`)
    })

    it('escapes a newline in the title instead of breaking the CRLF structure', () => {
      const text = buildIcs({ ...CRAFT, title: 'Two\nLine Title' }, NOW)

      expect(text).toContain('SUMMARY:Two\\nLine Title')
      expect(/(^|[^\r])\n/.test(text)).toBe(false)
    })

    it('folds a long line at 75 octets with a leading space on continuations', () => {
      const title = 'A'.repeat(120)
      const text = buildIcs({ ...CRAFT, title }, NOW)
      const lines = text.split('\r\n')
      const start = lines.findIndex((line) => line.startsWith('SUMMARY:'))

      expect(lines.every((line) => octets(line) <= LINE_OCTETS)).toBe(true)
      expect(lines[start]!.length).toBe(LINE_OCTETS)
      expect(lines[start + 1]!.startsWith(' ')).toBe(true)
      expect(
        lines
          .slice(start, start + 2)
          .map((line) => (line.startsWith(' ') ? line.slice(1) : line))
          .join(''),
      ).toBe(`SUMMARY:${title}`)
      expect(text.match(/\r\n/g)).toHaveLength(14)
    })

    it('never splits a multi-octet character while folding', () => {
      const text = buildIcs({ ...CRAFT, title: '€'.repeat(80) }, NOW)
      const lines = text.split('\r\n')
      const unfolded = lines
        .map((line) => (line.startsWith(' ') ? line.slice(1) : line))
        .join('')

      expect(lines.every((line) => octets(line) <= LINE_OCTETS)).toBe(true)
      expect(unfolded).toContain(`SUMMARY:${'€'.repeat(80)}`)
      expect(unfolded).not.toContain('\uFFFD')
    })
  })

  describe('downloadIcs', () => {
    const createObjectURL = vi.fn((blob: Blob) => (blob.size > 0 ? 'blob:showbill' : 'blob:empty'))
    const revokeObjectURL = vi.fn()
    let seen: { download: string; href: string } | null = null
    let clicked: ReturnType<typeof vi.spyOn>

    beforeEach(() => {
      seen = null
      Object.defineProperty(URL, 'createObjectURL', {
        value: createObjectURL,
        configurable: true,
        writable: true,
      })
      Object.defineProperty(URL, 'revokeObjectURL', {
        value: revokeObjectURL,
        configurable: true,
        writable: true,
      })
      clicked = vi
        .spyOn(HTMLAnchorElement.prototype, 'click')
        .mockImplementation(function (this: HTMLAnchorElement) {
          seen = { download: this.download, href: this.href }
        })
      createObjectURL.mockClear()
      revokeObjectURL.mockClear()
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
      clicked.mockRestore()
    })

    it('clicks a temporary anchor carrying the file name, then revokes the URL', () => {
      downloadIcs('product-craft-summit-2026.ics', buildIcs(CRAFT, NOW))

      const blob = createObjectURL.mock.calls[0]![0]
      expect(blob.type).toBe('text/calendar;charset=utf-8')
      expect(blob.size).toBeGreaterThan(0)
      expect(seen).toEqual({
        download: 'product-craft-summit-2026.ics',
        href: 'blob:showbill',
      })
      expect(document.querySelector('a')).toBeNull()
      expect(revokeObjectURL).not.toHaveBeenCalled()

      vi.advanceTimersByTime(1000)
      expect(revokeObjectURL).toHaveBeenCalledWith('blob:showbill')
    })
  })
})
