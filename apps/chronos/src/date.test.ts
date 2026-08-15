import { describe, expect, it } from 'vitest'
import { getDateParts, ordinalSuffix } from './date'

describe('ordinalSuffix', () => {
  it('returns "st" for days ending in 1 except 11-13', () => {
    expect(ordinalSuffix(1)).toBe('st')
    expect(ordinalSuffix(21)).toBe('st')
    expect(ordinalSuffix(31)).toBe('st')
  })

  it('returns "nd" for days ending in 2 except 11-13', () => {
    expect(ordinalSuffix(2)).toBe('nd')
    expect(ordinalSuffix(22)).toBe('nd')
  })

  it('returns "rd" for days ending in 3 except 11-13', () => {
    expect(ordinalSuffix(3)).toBe('rd')
    expect(ordinalSuffix(23)).toBe('rd')
  })

  it('returns "th" for every other day', () => {
    expect(ordinalSuffix(4)).toBe('th')
    expect(ordinalSuffix(11)).toBe('th')
    expect(ordinalSuffix(12)).toBe('th')
    expect(ordinalSuffix(13)).toBe('th')
    expect(ordinalSuffix(30)).toBe('th')
  })
})

describe('getDateParts', () => {
  it('derives weekday, month, ordinal day and year from a date', () => {
    const parts = getDateParts(new Date('2026-08-15T12:00:00'))
    expect(parts).toEqual({
      weekday: 'Saturday',
      month: 'August',
      day: '15th',
      year: 2026,
    })
  })

  it('handles another date with a different weekday, month and suffix', () => {
    const parts = getDateParts(new Date('2026-02-03T08:00:00'))
    expect(parts).toEqual({
      weekday: 'Tuesday',
      month: 'February',
      day: '3rd',
      year: 2026,
    })
  })
})
