import { DOCK_URL, HEADER_OFFSET, NAV, SECTIONS, SITE_NAME, allDestinations, shot } from './site'
import { carriesSourceText } from '../test/provenance'

describe('site — the one navigation model and the eleven destinations', () => {
  it('carries seven rows: one open destination, one disclosure, four plain rows and the block', () => {
    expect(NAV).toHaveLength(7)
    expect(NAV.filter((item) => item.current)).toHaveLength(1)
    expect(NAV.filter((item) => item.cta)).toHaveLength(1)
    expect(NAV.filter((item) => item.children.length > 0)).toHaveLength(1)
    expect(NAV.filter((item) => item.children.length === 0)).toHaveLength(6)
    expect(NAV[0]?.href).toBe('#watch')
    expect(NAV[NAV.length - 1]?.cta).toBe(true)
  })

  it('declares eleven unique destinations, four of them inside the disclosure', () => {
    const destinations = allDestinations()

    expect(destinations).toHaveLength(11)
    expect(new Set(destinations).size).toBe(11)
    expect(NAV.find((item) => item.children.length > 0)?.children).toHaveLength(4)
  })

  it('materialises every one of those destinations as its own section', () => {
    const ids = SECTIONS.map((section) => `#${section.id}`)

    expect(SECTIONS).toHaveLength(11)
    expect(new Set(ids).size).toBe(11)
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

  it('keeps every declared destination reachable with its heading clear of the bar', () => {
    expect(HEADER_OFFSET).toBeGreaterThanOrEqual(68)
  })

  it('seeds every placeholder picture from its own deterministic URL', () => {
    expect(shot('x', 800, 600)).toBe('https://picsum.photos/seed/ensign-x/800/600')

    const pictures = SECTIONS.flatMap((section) => section.items).map((item) => item.image)

    expect(pictures.filter((image) => image !== undefined).length).toBeGreaterThanOrEqual(3)

    for (const image of pictures) {
      if (image) {
        expect(image.startsWith('https://picsum.photos/seed/ensign-')).toBe(true)
      }
    }
  })

  it('is the page own brand and its own copy throughout', () => {
    expect(SITE_NAME).toBe('Ensign')

    const copy = [SITE_NAME, ...SECTIONS.flatMap((s) => [s.eyebrow, s.heading, s.body, ...s.items.flatMap((i) => [i.title, i.body])])].join(' ')

    expect(carriesSourceText(copy)).toBe(false)

    expect(DOCK_URL).toBe('https://www.componentdock.com/')
  })

  it('never reuses the source row labels', () => {
    const labels = [...NAV.map((item) => item.label), ...NAV.flatMap((item) => item.children.map((child) => child.label))]

    expect(labels).toHaveLength(11)

    for (const label of labels) {
      expect(['Home', 'Page', 'About', 'Menu', 'Blog', 'Contact']).not.toContain(label)
      expect(label.startsWith('Page ')).toBe(false)
    }
  })
})
