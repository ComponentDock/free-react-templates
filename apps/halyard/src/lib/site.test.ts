import {
  DOCK_LABEL,
  DOCK_URL,
  DRAWER_CLOSE_LABEL,
  DRAWER_ID,
  DRAWER_NAV_ID,
  FOOTER_NOTE,
  HEADER_OFFSET,
  HERO_PHOTO,
  MENU_LABEL,
  MENU_TOGGLE_ID,
  NAV,
  NAV_LEFT_ID,
  NAV_RIGHT_ID,
  PAGE_TITLE,
  SECTIONS,
  SITE_NAME,
  VEIL_ID,
  navAll,
  navGroup,
  shot,
} from './site'
import { DRAWER_RESET_QUERY } from './use-drawer'

/** The six labels the design ships with — no recreation may reuse them. */
const SOURCE_LABELS = ['Home', 'Projects', 'Services', 'About', 'Blog', 'Contact']

describe('site — the page’s own name, copy and model', () => {
  it('names itself, its title and its credit line', () => {
    expect(SITE_NAME).toBe('Halyard')
    expect(PAGE_TITLE).toContain(SITE_NAME)
    expect(PAGE_TITLE).toContain('Template')
    expect(FOOTER_NOTE.length).toBeGreaterThan(0)
    expect(DOCK_URL).toBe('https://www.componentdock.com/')
    expect(DOCK_LABEL).toBe('Component Dock')
  })

  it('keeps every id the bar, the drawer and the veil answer to distinct', () => {
    const ids = [NAV_LEFT_ID, NAV_RIGHT_ID, DRAWER_NAV_ID, DRAWER_ID, VEIL_ID, MENU_TOGGLE_ID]

    expect(new Set(ids).size).toBe(ids.length)
    expect(ids.every((id) => id.startsWith('halyard'))).toBe(true)
  })

  it('labels the two controls and the width the drawer hands over at', () => {
    expect(MENU_LABEL).toBe('Open the site menu')
    expect(DRAWER_CLOSE_LABEL).toBe('Close the site menu')
    // The design tests `innerWidth > 768` strictly, so 768 itself keeps the state.
    expect(DRAWER_RESET_QUERY).toBe('(min-width: 769px)')
  })

  it('seeds the band and every picture inside the page deterministically', () => {
    expect(HERO_PHOTO).toBe('https://picsum.photos/seed/halyard-hero/1920/1080')
    expect(shot('refit-1', 800, 600)).toBe('https://picsum.photos/seed/halyard-refit-1/800/600')
  })

  it('keeps one navigation model of six rows, three per third, and never a source label', () => {
    expect(NAV).toHaveLength(6)
    expect(navGroup('left')).toHaveLength(3)
    expect(navGroup('right')).toHaveLength(3)
    expect(navAll()).toEqual([...navGroup('left'), ...navGroup('right')])

    const labels = NAV.map((item) => item.label)

    expect(NAV.filter((item) => item.current)).toHaveLength(1)
    expect(NAV[0]?.current).toBe(true)

    for (const label of SOURCE_LABELS) {
      expect(labels).not.toContain(label)
    }

    for (const item of NAV) {
      expect(item.href.startsWith('#')).toBe(true)
      expect(item.href).not.toBe('#')
    }
  })

  it('materialises one section per declared destination, in the bar’s own order', () => {
    expect(SECTIONS.map((section) => section.id)).toEqual(NAV.map((item) => item.href.slice(1)))
    expect(new Set(SECTIONS.map((section) => section.id)).size).toBe(SECTIONS.length)
    // Six destinations, and every one of them is longer than its heading alone.
    expect(SECTIONS.every((section) => section.body.length > 80)).toBe(true)
    expect(SECTIONS.every((section) => section.heading.length > 10)).toBe(true)
  })

  it('keeps every section’s rows unique and its pictures seeded, where it has any', () => {
    const withItems = SECTIONS.filter((section) => section.items)

    expect(withItems.length).toBeGreaterThanOrEqual(5)

    for (const section of withItems) {
      const titles = section.items?.map((item) => item.title) ?? []

      expect(new Set(titles).size).toBe(titles.length)
    }

    const images = SECTIONS.flatMap((section) => section.items ?? [])
      .map((item) => item.image)
      .filter((image): image is string => Boolean(image))

    expect(images.length).toBeGreaterThanOrEqual(6)
    expect(images.every((image) => image.startsWith('https://picsum.photos/seed/halyard-'))).toBe(
      true,
    )
  })

  it('keeps the bar clear of a target it scrolls to', () => {
    expect(HEADER_OFFSET).toBeGreaterThan(96)
  })
})
