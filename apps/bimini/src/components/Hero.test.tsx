import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO_HEADING, HERO_LEAD } from '../lib/site'
import {
  flushContainerClass,
  heroClass,
  heroColumnClass,
  heroHeadingClass,
  heroLeadClass,
  heroRowClass,
} from '../lib/styles'
import { carriesSourceText } from '../test/provenance'

describe('Hero — the band the sheet is drawn over', () => {
  it('stands exactly one window tall on the design’s own charcoal', () => {
    render(<Hero />)

    const hero = screen.getByTestId('hero')

    expect(hero.tagName).toBe('SECTION')
    expect(hero.className).toBe(heroClass)
    expect(hero.className).toContain('min-h-screen')
    expect(hero.className).toContain('supports-[height:100dvh]:min-h-dvh')
    expect(hero.className).toContain('bg-hero')
    expect(hero.className).toContain('items-center')
  })

  it('zeroes its container’s gutters and centres the copy in a full-width row', () => {
    const { container } = render(<Hero />)

    const band = screen.getByTestId('container-flush')

    expect(band.className).toBe(flushContainerClass)
    expect(band.className).toContain('px-0')
    expect(band.className).toContain('max-w-[540px]')
    expect(band.className).toContain('max-w-[1140px]')

    const row = container.querySelector('section > div > div')

    expect(row?.className).toBe(heroRowClass)
    expect(row?.className).toContain('items-center')
    expect(row?.className).toContain('justify-center')

    const column = container.querySelector('section > div > div > div')

    expect(column?.className).toBe(heroColumnClass)
    expect(column?.className).toContain('text-center')
  })

  it('prints its own headline and lead, and neither of the design’s strings', () => {
    const { container } = render(<Hero />)

    const headline = container.querySelector('h1')
    const lead = container.querySelector('p')

    expect(headline?.textContent).toBe(HERO_HEADING)
    expect(headline?.className).toBe(heroHeadingClass)
    expect(headline?.className).toContain('text-[6vw]')
    expect(headline?.className).toContain('uppercase')
    expect(headline?.className).toContain('mb-2')

    expect(lead?.textContent).toBe(HERO_LEAD)
    expect(lead?.className).toBe(heroLeadClass)
    expect(lead?.className).toContain('text-[18px]')
    expect(lead?.className).toContain('text-on-dark-muted')

    expect(carriesSourceText(container.innerHTML)).toBe(false)
  })
})
