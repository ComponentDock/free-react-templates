import {
  CARDS,
  HEADER_OFFSET,
  MENU,
  MENU_AFTER_ROW,
  MENU_HREF,
  NAV,
  SECTIONS,
  SKIP_TARGET,
  cardDestinations,
  inPageDestinations,
  menuDestinations,
  rowDestinations,
  shot,
} from './site'

describe('site — the page’s own model', () => {
  it('builds every placeholder picture from the app’s own seed', () => {
    expect(shot('card-1', 800, 600)).toBe('https://picsum.photos/seed/spinnaker-card-1/800/600')
  })

  it('draws the design’s four rows from three plain links and the one panel row', () => {
    expect(NAV).toHaveLength(3)
    expect(MENU_AFTER_ROW).toBe(2)
    expect(NAV.length + 1).toBe(4)
    expect(NAV.filter((item) => item.current)).toHaveLength(1)
    expect(NAV[0]?.current).toBe(true)
  })

  it('gives the panel four links and three cards, in the design’s own order', () => {
    expect(MENU).toHaveLength(4)
    expect(CARDS).toHaveLength(3)
    expect(MENU_HREF).toBe('#courses')
    expect(menuDestinations()).toEqual(MENU.map((item) => item.href))
    expect(cardDestinations()).toEqual(CARDS.map((card) => `#${card.id}`))
  })

  it('keeps every panel card its own picture, its own meta line and its own anchor', () => {
    expect(new Set(CARDS.map((card) => card.id)).size).toBe(CARDS.length)
    expect(new Set(CARDS.map((card) => card.image)).size).toBe(CARDS.length)

    for (const card of CARDS) {
      expect(card.title).toBeTruthy()
      expect(card.meta).toBeTruthy()
      expect(card.image).toBe(shot(`card-${CARDS.indexOf(card) + 1}`, 800, 600))
    }
  })

  it('keeps every destination in-page and real, with the skip link doubling the row it lands on', () => {
    const destinations = inPageDestinations()

    expect(destinations).toEqual([
      SKIP_TARGET,
      ...rowDestinations(),
      MENU_HREF,
      ...menuDestinations(),
      ...cardDestinations(),
    ])

    const repeats = destinations.filter(
      (destination, index) => destinations.indexOf(destination) !== index,
    )

    expect(repeats).toEqual([SKIP_TARGET])

    for (const destination of destinations) {
      expect(destination.startsWith('#')).toBe(true)
      expect(destination.length).toBeGreaterThan(1)
    }
  })

  it('materialises every destination the chrome declares, and nothing twice', () => {
    const ids = SECTIONS.flatMap((section) => [
      section.id,
      ...section.items.map((item) => item.id),
    ]).filter((id): id is string => Boolean(id))
    const anchors = new Set(ids)

    expect(anchors.size).toBe(ids.length)

    for (const destination of [
      ...rowDestinations(),
      MENU_HREF,
      ...menuDestinations(),
      ...cardDestinations(),
      SKIP_TARGET,
    ]) {
      expect(anchors.has(destination.slice(1))).toBe(true)
    }
  })

  it('gives every block something to say and every card a title and a body', () => {
    expect(SECTIONS.length).toBeGreaterThanOrEqual(5)

    for (const section of SECTIONS) {
      expect(section.id).toBeTruthy()
      expect(section.eyebrow).toBeTruthy()
      expect(section.heading).toBeTruthy()
      expect(section.body).toBeTruthy()
      expect(section.items.length).toBeGreaterThan(0)

      for (const item of section.items) {
        expect(item.title).toBeTruthy()
        expect(item.body).toBeTruthy()

        if (item.image) {
          expect(item.image).toContain('https://picsum.photos/seed/spinnaker-')
        }
      }
    }
  })

  it('keeps the band’s own height of air above a scrolled-to target', () => {
    expect(HEADER_OFFSET).toBeGreaterThanOrEqual(294)
  })
})
