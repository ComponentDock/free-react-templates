import {
  CONTACT,
  DOCK_LABEL,
  DOCK_URL,
  FOOTER_NOTE,
  HEADER_OFFSET,
  HERO_PHOTO,
  MENU_ID,
  NAV,
  NAV_ID,
  PAGE_TITLE,
  SECTIONS,
  SITE_NAME,
  SOCIALS,
  SUB_PAGES,
  isBranch,
  rowSlug,
} from './site'
import type { NavItem } from './site'

/** Every row in the model, at every depth, in menu order. */
function flatten(items: NavItem[]): NavItem[] {
  return items.flatMap((item) => (isBranch(item) ? [item, ...flatten(item.items)] : [item]))
}

describe('site model', () => {
  it('names the app and the page, and credits Component Dock', () => {
    expect(SITE_NAME).toBe('Topdeck')
    expect(PAGE_TITLE).toContain('Topdeck')
    expect(FOOTER_NOTE.length).toBeGreaterThan(10)
    expect(DOCK_URL).toBe('https://www.componentdock.com/')
    expect(DOCK_LABEL).toBe('Component Dock')
    expect(HERO_PHOTO).toBe('https://picsum.photos/seed/topdeck-hero/1920/1080')
    expect(MENU_ID).not.toBe(NAV_ID)
    expect(HEADER_OFFSET).toBeGreaterThanOrEqual(100)
  })

  it('declares seven rows in order, with the current one first and one dropdown parent third', () => {
    expect(NAV.map((item) => item.label)).toEqual([
      'Start',
      'Programmes',
      'Deck Plan',
      'Story',
      'Timetable',
      'Showcase',
      'Signal',
    ])
    expect(NAV).toHaveLength(7)
    expect(NAV.filter((item) => !isBranch(item) && item.current)).toHaveLength(1)
    expect(NAV.map((item) => (!isBranch(item) && item.current) || false)[0]).toBe(true)
    expect(isBranch(NAV[0] as NavItem)).toBe(false)
    expect(isBranch(NAV[2] as NavItem)).toBe(true)
    expect(NAV.filter(isBranch)).toHaveLength(1)
  })

  it('gives the dropdown four rows, the last of which opens three more', () => {
    const parent = NAV[2] as NavItem

    expect(isBranch(parent)).toBe(true)

    if (!isBranch(parent)) {
      throw new Error('the third row must own the dropdown')
    }

    expect(parent.items.map((item) => item.label)).toEqual([
      'Crew',
      'Rates',
      'Questions',
      'Reference',
    ])

    const nested = parent.items[3] as NavItem

    expect(isBranch(nested)).toBe(true)

    if (!isBranch(nested)) {
      throw new Error('the fourth dropdown row must own a second-level flyout')
    }

    expect(nested.items.map((item) => item.label)).toEqual(['Handbooks', 'Toolkit', 'Field Notes'])
  })

  it('points every row at an in-page target that the page actually renders', () => {
    const anchors = new Set([...SECTIONS.map((section) => section.id), ...SUB_PAGES.map((page) => page.id)])

    for (const item of flatten(NAV)) {
      expect(item.href.startsWith('#')).toBe(true)
      expect(anchors.has(item.href.slice(1))).toBe(true)
    }

    expect(flatten(NAV)).toHaveLength(7 + 4 + 3)
  })

  it('materialises seven sections with unique ids and six dropdown destinations', () => {
    expect(SECTIONS.map((section) => section.id)).toEqual([
      'start',
      'programmes',
      'deck-plan',
      'story',
      'timetable',
      'showcase',
      'signal',
    ])
    expect(new Set(SECTIONS.map((section) => section.id)).size).toBe(SECTIONS.length)
    expect(SECTIONS.filter((section) => section.items)).not.toHaveLength(0)
    expect(SECTIONS.filter((section) => section.photos)).toHaveLength(1)
    expect(SUB_PAGES.map((page) => page.id)).toEqual([
      'crew',
      'handbooks',
      'rates',
      'toolkit',
      'field-notes',
      'questions',
    ])
    expect(new Set(SUB_PAGES.map((page) => page.id)).size).toBe(SUB_PAGES.length)

    for (const page of SUB_PAGES) {
      expect(SECTIONS.map((section) => section.id)).toContain(page.parent)
    }
  })

  it('carries four socials with real destinations and no duplicated name', () => {
    expect(SOCIALS.map((social) => social.name)).toEqual(['x', 'facebook', 'linkedin', 'instagram'])
    expect(new Set(SOCIALS.map((social) => social.href)).size).toBe(4)

    for (const social of SOCIALS) {
      expect(social.href.startsWith('https://')).toBe(true)
      expect(social.label.length).toBeGreaterThan(0)
    }
  })

  it('keeps the app’s own contact details in the utility bar', () => {
    expect(CONTACT.email).toBe('hello@topdeck.example')
    expect(CONTACT.phone).toBe('+442079460958')
    expect(CONTACT.phoneLabel.replace(/[^0-9]/g, '')).toBe(CONTACT.phone.replace(/[^0-9]/g, ''))
  })

  it('slugs a row label into a stable id fragment', () => {
    expect(rowSlug('Deck Plan')).toBe('deck-plan')
    expect(rowSlug('Crew')).toBe('crew')
    expect(rowSlug('Field Notes')).toBe('field-notes')
  })
})
