import {
  DOCK_URL,
  HERO_PHOTO,
  MENU_ID,
  NAV,
  PAGE_TITLE,
  PANEL_RESIZE_WIDTH,
  ROW_BREAKPOINT,
  SITE_NAME,
  isParent,
} from './site'

describe('site model', () => {
  it('keeps the reference row shape: six items, one two-level menu, one current item', () => {
    expect(NAV.map((node) => node.label)).toEqual([
      'Home',
      'Explore',
      'Showcase',
      'About',
      'Blog',
      'Contact',
    ])

    const parents = NAV.filter(isParent)
    expect(parents.map((node) => node.label)).toEqual(['Explore'])

    const explore = parents[0]
    expect(explore?.children).toHaveLength(4)

    const nested = explore?.children.filter(isParent) ?? []
    expect(nested).toHaveLength(1)
    expect(nested[0]?.children).toHaveLength(4)

    expect(NAV.filter((node) => node.current).map((node) => node.label)).toEqual(['Home'])
  })

  it('separates leaves from parents through the guard', () => {
    const home = NAV[0] as (typeof NAV)[number]
    const explore = NAV[1] as (typeof NAV)[number]

    expect(isParent(home)).toBe(false)
    expect(isParent(explore)).toBe(true)
    expect(isParent(NAV[2] as (typeof NAV)[number])).toBe(false)
  })

  it('carries the brand, the page chrome and the placeholder seed', () => {
    expect(SITE_NAME).toBe('Navpill')
    expect(PAGE_TITLE).toContain('Navpill')
    expect(MENU_ID).toBe('navpill-menu')
    expect(HERO_PHOTO).toBe('https://picsum.photos/seed/navpill-hero/1900/1710')
    expect(DOCK_URL).toBe('https://www.componentdock.com/')
    expect(ROW_BREAKPOINT).toBe(1200)
    expect(PANEL_RESIZE_WIDTH).toBe(768)
  })
})
