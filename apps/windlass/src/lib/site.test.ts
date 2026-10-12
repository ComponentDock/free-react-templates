import { describe, expect, it } from 'vitest'
import { NAV, SECTIONS, SOCIAL, allDestinations, shot } from './site'

describe('site — the page model', () => {
  it('gives every row its own destination, with exactly one row current', () => {
    const hrefs = NAV.map((item) => item.href)

    expect(NAV).toHaveLength(5)
    expect(new Set(hrefs).size).toBe(hrefs.length)
    expect(NAV.filter((item) => item.current)).toHaveLength(1)
    expect(NAV[0]?.current).toBe(true)
    expect(allDestinations()).toEqual(hrefs)
  })

  it('materialises one section per row, in the order the rows are drawn', () => {
    expect(SECTIONS.map((section) => `#${section.id}`)).toEqual(allDestinations())

    for (const section of SECTIONS) {
      expect(section.items.length).toBeGreaterThan(0)
      expect(section.heading).not.toBe('')
      expect(section.body).not.toBe('')
    }
  })

  it('carries four platforms, each on a real https profile', () => {
    expect(SOCIAL).toHaveLength(4)

    for (const item of SOCIAL) {
      expect(item.href).toMatch(/^https:\/\//)
    }
  })

  it('seeds every picture under the template’s own name', () => {
    expect(shot('drum-1', 800, 600)).toBe('https://picsum.photos/seed/windlass-drum-1/800/600')

    const pictures = SECTIONS.flatMap((section) =>
      section.items.map((item) => item.image).filter((image) => image !== undefined),
    )

    expect(pictures.length).toBeGreaterThanOrEqual(4)

    for (const picture of pictures) {
      expect(picture).toContain('https://picsum.photos/seed/windlass-')
    }
  })
})
