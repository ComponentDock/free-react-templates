import { describe, expect, it } from 'vitest'
import {
  CART_MENU,
  CART_MENU_DIVIDERS,
  NAV,
  SECTIONS,
  allDestinations,
  inPageDestinations,
  menuDestinations,
  shot,
} from './site'

describe('site — the page model', () => {
  it('gives every row its own destination, with exactly one row current', () => {
    const hrefs = NAV.map((item) => item.href)

    expect(NAV).toHaveLength(5)
    expect(new Set(hrefs).size).toBe(hrefs.length)
    expect(NAV.filter((item) => item.current)).toHaveLength(1)
    expect(NAV[0]?.current).toBe(true)
    expect(allDestinations()).toEqual(hrefs)
  })

  it('gives the cart link five bill items, each on its own destination', () => {
    const hrefs = CART_MENU.map((item) => item.href)

    expect(CART_MENU).toHaveLength(5)
    expect(new Set(hrefs).size).toBe(hrefs.length)
    expect(menuDestinations()).toEqual(hrefs)
    expect(CART_MENU_DIVIDERS).toEqual([3, 4])
  })

  it('collects every destination the whole chrome declares, rows first', () => {
    expect(inPageDestinations()).toEqual([
      '#hoist',
      '#tackle',
      '#fall',
      '#gripes',
      '#sling',
      '#yard-fittings',
      '#yard-blocks',
      '#yard-lashings',
      '#yard-orders',
      '#yard-delivery',
    ])
  })

  it('materialises one section per row, in the order the rows are drawn, plus the yard block', () => {
    expect(SECTIONS.map((section) => `#${section.id}`)).toEqual([...allDestinations(), '#yard'])

    for (const section of SECTIONS) {
      expect(section.items.length).toBeGreaterThan(0)
      expect(section.heading).not.toBe('')
      expect(section.body).not.toBe('')
    }
  })

  it('anchors every bill item on a real card of the yard block', () => {
    const yard = SECTIONS.find((section) => section.id === 'yard')
    const anchored = (yard?.items ?? []).map((item) => `#${item.id}`)

    expect(anchored).toEqual(menuDestinations())
  })

  it('seeds every picture under the template’s own name', () => {
    expect(shot('hoist-1', 800, 600)).toBe('https://picsum.photos/seed/davit-hoist-1/800/600')

    const pictures = SECTIONS.flatMap((section) =>
      section.items.map((item) => item.image).filter((image) => image !== undefined),
    )

    expect(pictures.length).toBeGreaterThanOrEqual(4)

    for (const picture of pictures) {
      expect(picture).toContain('https://picsum.photos/seed/davit-')
    }
  })
})
