import { render, screen } from '@testing-library/react'
import { HERO_PHOTO } from '../lib/site'
import { Hero } from './Hero'

describe('Hero — the page’s first band', () => {
  it('fills one viewport with a covered, centred photograph and no scrim', () => {
    render(<Hero />)

    const band = screen.getByRole('region', { name: 'Hero band' })

    expect(band).toHaveAttribute('id', 'hero')
    expect(band.className).toContain('h-screen')
    expect(band.className).toContain('w-full')
    expect(band.className).toContain('bg-cover')
    expect(band.className).toContain('bg-center')
    expect(band.className).toContain('bg-no-repeat')
    expect(band.style.backgroundImage).toContain(HERO_PHOTO)
    expect(HERO_PHOTO).toContain('picsum.photos/seed/gangway-hero')
  })

  it('carries no call to action of its own — the bar floats on it and nothing else does', () => {
    render(<Hero />)

    expect(screen.queryByRole('link')).toBeNull()
    expect(screen.queryByRole('button')).toBeNull()
    expect(screen.getByRole('region', { name: 'Hero band' })).toBeEmptyDOMElement()
  })
})
