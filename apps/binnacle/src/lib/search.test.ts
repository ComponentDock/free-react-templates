import { SECTIONS } from './site'
import {
  carries,
  filterSections,
  filterSummary,
  isFiltering,
  normalise,
  searchableText,
} from './search'

const helm = SECTIONS[0]!
const charts = SECTIONS[2]!

describe('search — the field’s own model', () => {
  it('reads a query trimmed and case-insensitively', () => {
    expect(normalise('  Pencil ')).toBe('pencil')
    expect(normalise('   ')).toBe('')
  })

  it('offers a block’s kicker, heading, paragraph and every card to the matcher', () => {
    const haystack = searchableText(helm)

    expect(haystack).toContain(helm.eyebrow.toLowerCase())
    expect(haystack).toContain(helm.heading.toLowerCase())
    expect(haystack).toContain(helm.body.toLowerCase())

    for (const item of helm.items) {
      expect(haystack).toContain(item.title.toLowerCase())
      expect(haystack).toContain(item.body.toLowerCase())
    }
  })

  it('keeps a block for an empty query and for anything it carries', () => {
    expect(carries(helm, '')).toBe(true)
    expect(carries(helm, '   ')).toBe(true)
    expect(carries(helm, 'COMPASS')).toBe(true)
    expect(carries(helm, 'bearing grease')).toBe(false)
    expect(carries(charts, 'soft pencil')).toBe(true)
  })

  it('narrows the page to the blocks a query reaches, in the page’s own order', () => {
    expect(filterSections('')).toEqual(SECTIONS)

    const narrowed = filterSections('pencil')

    expect(narrowed).toHaveLength(1)
    expect(narrowed[0]?.id).toBe('charts')
    expect(filterSections('zzz')).toEqual([])
  })

  it('knows when it is narrowing and when it is not', () => {
    expect(isFiltering('')).toBe(false)
    expect(isFiltering('  ')).toBe(false)
    expect(isFiltering('pencil')).toBe(true)
  })

  it('says how much is left, against the page’s own count', () => {
    expect(filterSummary(1, ' pencil ')).toBe(
      `Showing 1 of ${SECTIONS.length} blocks for “pencil”.`,
    )
    expect(filterSummary(0, 'zzz')).toBe(`Showing 0 of ${SECTIONS.length} blocks for “zzz”.`)
  })
})
