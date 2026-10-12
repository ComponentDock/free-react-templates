import { render, screen } from '@testing-library/react'
import { HERO_PHOTO } from '../lib/site'
import { Hero } from './Hero'

describe('Hero — the band the bar hands over to', () => {
  it('is one viewport tall, full-bleed and covered with a centred photograph', () => {
    const { container } = render(<Hero />)

    const band = screen.getByTestId('hero-band')

    expect(band.tagName).toBe('SECTION')
    expect(band).toHaveAttribute('id', 'hero')
    expect(band).toHaveAttribute('aria-label', 'Hero band')
    expect(band.className).toContain('h-screen')
    expect(band.className).toContain('w-full')
    expect(band.className).toContain('bg-cover')
    expect(band.className).toContain('bg-center')
    expect(band.className).toContain('bg-no-repeat')

    expect(band.getAttribute('style')).toContain(HERO_PHOTO)
    expect(container.querySelectorAll('img')).toHaveLength(0)
  })

  it('puts no scrim, no copy and no call to action of its own on top of it', () => {
    render(<Hero />)

    const band = screen.getByTestId('hero-band')

    expect(band.textContent).toBe('')
    expect(band.querySelectorAll('div, img, picture, iframe')).toHaveLength(0)
    expect(screen.queryByRole('link')).toBeNull()
    expect(screen.queryByRole('button')).toBeNull()
  })

  it('starts where the bar ends rather than underneath it — nothing here is pinned', () => {
    render(<Hero />)

    const band = screen.getByTestId('hero-band')

    expect(band.className).not.toContain('absolute')
    expect(band.className).not.toContain('fixed')
    expect(band.className).not.toMatch(/\btop-/)
    expect(band.className).not.toContain('z-')
  })
})
