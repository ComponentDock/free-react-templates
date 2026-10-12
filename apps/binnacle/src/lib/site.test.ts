import {
  CHANNELS,
  HEADER_OFFSET,
  MENU_AFTER_ROW,
  MENU_HREF,
  NAV,
  PHONE_HREF,
  SECTIONS,
  SKIP_TARGET,
  channelDestinations,
  inPageDestinations,
  menuDestinations,
  rowDestinations,
  shot,
} from './site'

describe('site — the page’s own model', () => {
  it('builds every placeholder picture from the app’s own seed', () => {
    expect(shot('helm-1', 800, 600)).toBe('https://picsum.photos/seed/binnacle-helm-1/800/600')
  })

  it('draws the design’s five rows from four links and the one menu row', () => {
    expect(NAV).toHaveLength(4)
    expect(MENU_AFTER_ROW).toBe(0)
    expect(NAV.length + 1).toBe(5)
    expect(NAV.filter((item) => item.current)).toHaveLength(1)
    expect(NAV[0]?.current).toBe(true)
  })

  it('keeps every destination in-page and real, with the skip link doubling the row it lands on', () => {
    const destinations = inPageDestinations()

    expect(destinations).toEqual([
      SKIP_TARGET,
      PHONE_HREF,
      ...rowDestinations(),
      ...menuDestinations(),
      ...channelDestinations(),
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
    const anchors = new Set(
      SECTIONS.flatMap((section) => [section.id, ...section.items.map((item) => item.id)]).filter(
        (id): id is string => Boolean(id),
      ),
    )
    const ids = SECTIONS.flatMap((section) => [section.id, ...section.items.map((item) => item.id)])

    expect(new Set(ids.filter(Boolean)).size).toBe(ids.filter(Boolean).length)

    for (const destination of [
      ...rowDestinations(),
      ...menuDestinations(),
      ...channelDestinations(),
      PHONE_HREF,
      MENU_HREF,
      SKIP_TARGET,
    ]) {
      expect(anchors.has(destination.slice(1))).toBe(true)
    }
  })

  it('gives every block something to say and every card a title and a body', () => {
    expect(SECTIONS.length).toBeGreaterThanOrEqual(7)

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
          expect(item.image).toContain('https://picsum.photos/seed/binnacle-')
        }
      }
    }
  })

  it('stands four channels, each with its own name and destination', () => {
    expect(CHANNELS).toHaveLength(4)
    expect(new Set(CHANNELS.map((channel) => channel.name)).size).toBe(4)
    expect(new Set(CHANNELS.map((channel) => channel.href)).size).toBe(4)
  })

  it('keeps at least the chrome’s own height of air above a scrolled-to target', () => {
    expect(HEADER_OFFSET).toBeGreaterThanOrEqual(88)
  })
})
