import {
  CTA,
  HEADER_OFFSET,
  HERO_PHOTO,
  NAV,
  PAGE_TITLE,
  SECTIONS,
  SITE_NAME,
  SUB_PAGES,
  isBranch,
  rowSlug,
} from './site'
import type { NavItem, NavLink } from './site'

/** Every row in the model at every depth, in menu order. */
function flatten(items: NavItem[]): NavItem[] {
  return items.flatMap((item) => (isBranch(item) ? [item, ...flatten(item.items)] : [item]))
}

const leaves = (items: NavItem[]): NavLink[] => items.filter((item): item is NavLink => !isBranch(item))

const ids = [...SECTIONS.map((section) => section.id), ...SUB_PAGES.map((page) => page.id)]

describe('the navigation model', () => {
  it('is five rows — one of which owns a three-row dropdown — plus one call to action', () => {
    expect(NAV).toHaveLength(5)

    const branches = NAV.filter(isBranch)

    expect(branches).toHaveLength(1)
    expect(branches[0]?.items).toHaveLength(3)
    expect(NAV.map((item) => item.label)).toEqual(['Dock', 'Galley', 'Supplies', 'Story', 'Logbook'])
    expect(leaves(NAV).map((item) => item.current)).toEqual([true, undefined, undefined, undefined])
    expect(CTA.href).toBe('#book')
  })

  it('points every row at a section that exists, and never at a dead anchor', () => {
    const targets = [...leaves(flatten(NAV)).map((item) => item.href), CTA.href]

    expect(targets).toHaveLength(8)

    for (const target of targets) {
      expect(target).not.toBe('#')
      expect(ids).toContain(target.slice(1))
    }
  })

  it('hangs every dropdown destination off a declared section, and keeps every id unique', () => {
    for (const page of SUB_PAGES) {
      expect(SECTIONS.map((section) => section.id)).toContain(page.parent)
    }

    expect(new Set(ids).size).toBe(ids.length)
  })

  it('slugifies a label into an id fragment for its dropdown surface', () => {
    expect(rowSlug('Supplies')).toBe('supplies')
    expect(rowSlug('Book a Table')).toBe('book-a-table')
    expect(rowSlug('Dusk & Dawn')).toBe('dusk-dawn')
  })

  it('carries the app its own identity and one deterministic hero photograph', () => {
    expect(SITE_NAME).toBe('Bowsprit')
    expect(PAGE_TITLE).toContain('Bowsprit')
    expect(HERO_PHOTO).toContain('picsum.photos/seed/bowsprit-hero')
    expect(HEADER_OFFSET).toBeGreaterThan(0)
  })
})
