import { SECTIONS } from './site'
import {
  carries,
  filterSections,
  filterSummary,
  isFiltering,
  normalise,
  searchableText,
} from './search'

const berth = SECTIONS[0]!
const spars = SECTIONS[2]!

describe('search — the field’s own model', () => {
  it('reads a query trimmed and case-insensitively', () => {
    expect(normalise('  Mooring ')).toBe('mooring')
    expect(normalise('   ')).toBe('')
  })

  it('offers a block’s kicker, heading, paragraph and every card to the matcher', () => {
    const haystack = searchableText(berth)

    expect(haystack).toContain(berth.eyebrow.toLowerCase())
    expect(haystack).toContain(berth.heading.toLowerCase())
    expect(haystack).toContain(berth.body.toLowerCase())

    for (const item of berth.items) {
      expect(haystack).toContain(item.title.toLowerCase())
      expect(haystack).toContain(item.body.toLowerCase())
    }
  })

  it('keeps a block for an empty query and for anything it carries', () => {
    expect(carries(berth, '')).toBe(true)
    expect(carries(berth, '   ')).toBe(true)
    expect(carries(berth, 'SHELTER')).toBe(true)
    expect(carries(berth, 'bearing grease')).toBe(false)
    expect(carries(spars, 'trestles')).toBe(true)
  })

  it('narrows the page to the blocks a query reaches, in the page’s own order', () => {
    expect(filterSections('')).toEqual(SECTIONS)

    const narrowed = filterSections('trestles')

    expect(narrowed).toHaveLength(1)
    expect(narrowed[0]?.id).toBe('spars')
    expect(filterSections('zzz')).toEqual([])
  })

  it('knows when it is narrowing and when it is not', () => {
    expect(isFiltering('')).toBe(false)
    expect(isFiltering('  ')).toBe(false)
    expect(isFiltering('trestles')).toBe(true)
  })

  it('says how much is left, against the page’s own count', () => {
    expect(filterSummary(1, ' trestles ')).toBe(
      `Showing 1 of ${SECTIONS.length} blocks for “trestles”.`,
    )
    expect(filterSummary(0, 'zzz')).toBe(`Showing 0 of ${SECTIONS.length} blocks for “zzz”.`)
  })
})
