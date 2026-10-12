import {
  DOCK_LABEL,
  DOCK_URL,
  FOOTER_NOTE,
  HERO_PHOTO,
  HEADER_OFFSET,
  MENU_ID,
  NAV,
  PAGE_TITLE,
  PANELS,
  SITE_NAME,
} from './site'

describe('site model', () => {
  it('keeps the reference shape: five flat rows in source order, one current row', () => {
    expect(NAV.map((item) => item.label)).toEqual([
      'Home',
      'About',
      'Services',
      'Blog',
      'Contact',
    ])
    expect(NAV.filter((item) => item.current).map((item) => item.label)).toEqual(['Home'])
  })

  it('gives every row a real in-band target, in the same order as the panels', () => {
    expect(NAV.map((item) => item.href)).toEqual(PANELS.map((panel) => `#${panel.id}`))
  })

  it('materialises every declared target as an own-copy panel with no dead href', () => {
    expect(PANELS).toHaveLength(5)
    expect(PANELS[0]?.id).toBe('home')
    expect(PANELS.every((panel) => panel.heading.length > 0 && panel.body.length > 0)).toBe(true)
    expect(NAV.every((item) => item.href !== '#')).toBe(true)
  })

  it('carries the brand, the page chrome and the placeholder seed', () => {
    expect(SITE_NAME).toBe('Starboard')
    expect(PAGE_TITLE).toContain('Starboard')
    expect(FOOTER_NOTE.length).toBeGreaterThan(0)
    expect(MENU_ID).toBe('starboard-menu')
    expect(HERO_PHOTO).toBe('https://picsum.photos/seed/starboard-hero/1920/1080')
    expect(DOCK_URL).toBe('https://www.componentdock.com/')
    expect(DOCK_LABEL).toBe('Component Dock')
    expect(HEADER_OFFSET).toBeGreaterThanOrEqual(90)
  })
})
