import { describe, expect, it } from 'vitest'
import type { DemoRecord } from '../content'
import { ALL, filterRecords, normalizeCategory } from './filter'

const RECORDS: readonly DemoRecord[] = [
  {
    id: 'A-1',
    title: 'Alpha request',
    category: 'Open',
    meta: 'High',
    notes: ['keyboard focus lost'],
  },
  {
    id: 'A-2',
    title: 'Beta request',
    category: 'Done',
    meta: 'Low',
    notes: ['search notes too'],
  },
]

describe('normalizeCategory', () => {
  it('treats an empty value as All', () => {
    expect(normalizeCategory('', ['Open', 'Done'])).toBe(ALL)
  })

  it('keeps All as All', () => {
    expect(normalizeCategory(ALL, ['Open', 'Done'])).toBe(ALL)
  })

  it('falls back to All for a value it does not know', () => {
    expect(normalizeCategory('Blocked', ['Open', 'Done'])).toBe(ALL)
  })

  it('keeps a known value', () => {
    expect(normalizeCategory('Done', ['Open', 'Done'])).toBe('Done')
  })
})

describe('filterRecords', () => {
  it('returns every record for the unfiltered view', () => {
    expect(filterRecords(RECORDS, '', ALL)).toHaveLength(2)
  })

  it('matches ids and titles case-insensitively', () => {
    expect(filterRecords(RECORDS, 'beta', ALL).map((record) => record.id)).toEqual(['A-2'])
    expect(filterRecords(RECORDS, 'A-1', ALL).map((record) => record.id)).toEqual(['A-1'])
  })

  it('searches inside the notes', () => {
    expect(filterRecords(RECORDS, 'KEYBOARD', ALL).map((record) => record.id)).toEqual(['A-1'])
  })

  it('narrows by category', () => {
    expect(filterRecords(RECORDS, '', 'Done').map((record) => record.id)).toEqual(['A-2'])
  })

  it('combines the query with the category', () => {
    expect(filterRecords(RECORDS, 'beta', 'Done').map((record) => record.id)).toEqual(['A-2'])
    expect(filterRecords(RECORDS, 'beta', 'Open')).toEqual([])
  })

  it('falls back to All for an unknown category', () => {
    expect(filterRecords(RECORDS, '', 'Stale')).toHaveLength(2)
  })

  it('ignores surrounding whitespace in the query', () => {
    expect(filterRecords(RECORDS, '   ', 'Open')).toHaveLength(1)
  })

  it('returns nothing when no record matches', () => {
    expect(filterRecords(RECORDS, 'zzz', ALL)).toEqual([])
  })
})
