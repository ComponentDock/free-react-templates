import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DOCK_LABEL,
  DOCK_URL,
  FOOTER_NOTE,
  HERO_PHOTO,
  MENU_ID,
  NAV,
  PAGE_TITLE,
  PANEL_RESIZE_WIDTH,
  SITE_NAME,
  SOCIAL_LINKS,
  isParent,
  type NavParent,
} from './site'

describe('site model', () => {
  it('keeps the reference row shape: seven items, one two-level menu, one current item', () => {
    expect(NAV.map((node) => node.label)).toEqual([
      'Home',
      'Services',
      'About Us',
      'Why Us',
      'Testimonials',
      'Blog',
      'Contact',
    ])

    const parents = NAV.filter(isParent)
    expect(parents.map((node) => node.label)).toEqual(['About Us'])

    const about = parents[0] as NavParent
    expect(about.children.map((node) => node.label)).toEqual(['Our Team', 'Pricing', 'FAQ', 'More'])
    expect(about.children.filter(isParent).map((node) => node.label)).toEqual(['More'])

    const more = about.children.filter(isParent)[0] as NavParent
    expect(more.children.map((node) => node.label)).toEqual(['Careers', 'Press', 'Partners'])

    expect(NAV.filter((node) => !isParent(node) && node.current).map((node) => node.label)).toEqual(
      ['Home'],
    )
    expect(about.children.filter((node) => !isParent(node) && node.current)).toHaveLength(1)
  })

  it('carries the page copy, the single Hero seed and the panel thresholds', () => {
    expect(SITE_NAME).toBe('Menuribbon')
    expect(PAGE_TITLE).toBe('Menuribbon — Sticky Utility Bar Template')
    expect(FOOTER_NOTE).toBe('A grey utility bar, one blue wordmark, one pinned header.')
    expect(DOCK_URL).toBe('https://www.componentdock.com/')
    expect(DOCK_LABEL).toBe('Component Dock')
    expect(HERO_PHOTO).toBe('https://picsum.photos/seed/menuribbon-hero/1900/1710')
    expect(MENU_ID).toBe('menuribbon-menu')
    expect(PANEL_RESIZE_WIDTH).toBe(768)
    expect(CONTACT_EMAIL).toBe('hello@menuribbon.dev')
    expect(CONTACT_PHONE).toBe('+1 (415) 555 0132')
    expect(SOCIAL_LINKS.map((link) => [link.label, link.href, link.icon])).toEqual([
      ['Twitter', '#twitter', 'twitter'],
      ['Facebook', '#facebook', 'facebook'],
    ])
  })

  it('narrows a node to a parent only when it carries children', () => {
    expect(isParent({ label: 'Parent', href: '#parent', children: [] })).toBe(true)
    expect(isParent({ label: 'Leaf', href: '#leaf' })).toBe(false)
  })
})
