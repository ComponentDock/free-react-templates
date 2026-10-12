import {
  CHANNELS,
  DOCK_URL,
  FOOTER_NOTE,
  HEADER_OFFSET,
  NAV,
  PAGE_TITLE,
  SECTIONS,
  SEARCH_EMPTY,
  SEARCH_FORM_LABEL,
  SEARCH_LABEL,
  SEARCH_PLACEHOLDER,
  SITE_NAME,
  TOGGLER_LABEL,
  allDestinations,
  shot,
} from './site'
import { carriesSourceLabel, carriesSourceText } from '../test/provenance'

describe('site — the one navigation model and the thirteen destinations', () => {
  it('carries five rows: one open destination, one disclosure and three plain rows', () => {
    expect(NAV).toHaveLength(5)
    expect(NAV.filter((item) => item.current)).toHaveLength(1)
    expect(NAV.filter((item) => item.children.length > 0)).toHaveLength(1)
    expect(NAV.filter((item) => item.children.length === 0)).toHaveLength(4)
    expect(NAV[0]?.href).toBe('#harbour')
    expect(NAV[1]?.children).toHaveLength(4)
  })

  it('declares thirteen unique destinations, four of them inside the disclosure', () => {
    const destinations = allDestinations()

    expect(destinations).toHaveLength(13)
    expect(new Set(destinations).size).toBe(13)
    expect(CHANNELS).toHaveLength(4)
    expect(new Set(CHANNELS.map((channel) => channel.mark)).size).toBe(4)
  })

  it('materialises every one of those destinations as its own section', () => {
    const ids = SECTIONS.map((section) => `#${section.id}`)

    expect(SECTIONS).toHaveLength(13)
    expect(new Set(ids)).toEqual(new Set(allDestinations()))
  })

  it('gives every section a kicker, a heading, a paragraph and its own rows', () => {
    for (const section of SECTIONS) {
      expect(section.eyebrow.length).toBeGreaterThan(0)
      expect(section.heading.length).toBeGreaterThan(0)
      expect(section.body.length).toBeGreaterThan(0)
      expect(section.items.length).toBeGreaterThan(1)
    }
  })

  it('keeps every declared destination clear of the bar it is scrolled under', () => {
    expect(HEADER_OFFSET).toBeGreaterThanOrEqual(68)
  })

  it('seeds every placeholder picture from its own deterministic URL', () => {
    expect(shot('x', 800, 600)).toBe('https://picsum.photos/seed/gunwale-x/800/600')

    const pictures = SECTIONS.flatMap((section) => section.items)
      .map((item) => item.image)
      .filter((image) => image !== undefined)

    expect(pictures.length).toBeGreaterThanOrEqual(4)

    for (const picture of pictures) {
      expect(picture.startsWith('https://picsum.photos/seed/gunwale-')).toBe(true)
    }
  })

  it('is the page own brand and its own copy throughout', () => {
    expect(SITE_NAME).toBe('Gunwale')
    expect(PAGE_TITLE).toContain(SITE_NAME)

    const copy = [
      SITE_NAME,
      PAGE_TITLE,
      FOOTER_NOTE,
      TOGGLER_LABEL,
      SEARCH_LABEL,
      SEARCH_FORM_LABEL,
      SEARCH_PLACEHOLDER,
      SEARCH_EMPTY,
      ...SECTIONS.flatMap((section) => [
        section.eyebrow,
        section.heading,
        section.body,
        ...section.items.flatMap((item) => [item.title, item.body]),
      ]),
    ].join(' ')

    expect(carriesSourceText(copy)).toBe(false)
    expect(carriesSourceLabel(copy)).toBe(false)

    expect(DOCK_URL).toBe('https://www.componentdock.com/')
  })

  it('never reuses the source row labels or its own disclosure items', () => {
    const labels = [
      ...NAV.map((item) => item.label),
      ...NAV.flatMap((item) => item.children.map((child) => child.label)),
      ...CHANNELS.map((channel) => channel.label),
    ]

    expect(labels).toHaveLength(13)
    expect(carriesSourceLabel(labels.join(' '))).toBe(false)

    for (const label of labels) {
      expect(label.startsWith(['Pa', 'ge '].join(''))).toBe(false)
    }
  })
})
