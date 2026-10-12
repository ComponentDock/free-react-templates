import { render, screen } from '@testing-library/react'
import { Strip } from './Strip'
import { CHANNELS, CHANNELS_LABEL, PHONE_HREF, PHONE_LABEL, PHONE_NUMBER } from '../lib/site'
import { stripRowClass, tileClass } from '../lib/styles'

describe('Strip — the dark utility strip', () => {
  it('is a full-bleed in-flow band with no padding of its own', () => {
    render(<Strip />)

    const strip = screen.getByTestId('strip')

    expect(strip.className).toBe('bg-strip')
    expect(strip.className).not.toMatch(/p-|py-|px-/)
    expect(strip.className).not.toMatch(/sticky|fixed/)
    expect(strip.querySelector('.mx-auto')).not.toBeNull()
  })

  it('keeps the design’s 34px floor under the line its tiles set', () => {
    render(<Strip />)

    expect(stripRowClass).toContain('min-h-[34px]')
    expect(stripRowClass).toContain('items-center')
    expect(stripRowClass).toContain('justify-between')
  })

  it('rings its own number, white at 12px, with a grey glyph beside it', () => {
    render(<Strip />)

    const link = screen.getByRole('link', { name: PHONE_LABEL })

    expect(link).toHaveAttribute('href', PHONE_HREF)
    expect(link).toHaveTextContent(PHONE_NUMBER)
    expect(link.className).toContain('text-[12px]')
    expect(link.className).toContain('text-white')
    expect(link.className).toContain('focus-visible:outline-white')

    const glyph = screen.getByTestId('strip').querySelector('svg')

    expect(glyph?.getAttribute('class')).toContain('size-4')
    expect(glyph?.getAttribute('aria-hidden')).toBe('true')
  })

  it('lands the phone link on a real block rather than a dead anchor', () => {
    render(<Strip />)

    expect(screen.getByRole('link', { name: PHONE_LABEL }).getAttribute('href')).not.toBe('#')
  })

  it('stands four 34px square tiles, 1px apart, on their own named list', () => {
    render(<Strip />)

    const list = screen.getByRole('list', { name: CHANNELS_LABEL })
    const tiles = Array.from(list.querySelectorAll('a')) as HTMLAnchorElement[]

    expect(tiles).toHaveLength(4)
    expect(tileClass).toContain('size-[34px]')
    expect(tileClass).toContain('bg-tile')
    expect(tileClass).not.toContain('rounded')
    expect(tileClass).toContain('hover:bg-accent')

    for (const tile of tiles) {
      expect(tile.className).toContain('size-[34px]')
    }

    expect(list.className).toContain('gap-px')
  })

  it('names every tile and gives it its own real destination and glyph', () => {
    render(<Strip />)

    const list = screen.getByRole('list', { name: CHANNELS_LABEL })

    for (const channel of CHANNELS) {
      const tile = screen.getByRole('link', { name: channel.label })

      expect(list).toContainElement(tile)
      expect(tile).toHaveAttribute('href', channel.href)
      expect(tile.querySelectorAll('svg')).toHaveLength(1)
      expect(tile.className).toContain('focus-visible:outline-accent')
    }
  })
})
