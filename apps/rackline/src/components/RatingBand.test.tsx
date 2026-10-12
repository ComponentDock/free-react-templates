import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { RatingBand } from './RatingBand'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('RatingBand', () => {
  it('lays the headline, rating line and lime action out on the left', () => {
    render(<RatingBand />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Racks our clients keep renewing',
    )
    expect(screen.getByText(/Rated 4\.9 \/ 5 across 3 218 verified reviews/)).toHaveClass(
      'text-[24px]',
      'text-white',
    )
    const action = screen.getByRole('link', { name: 'Register Now' })
    expect(action).toHaveClass('h-[58px]', 'rounded-none')
    expect(action).toHaveAttribute('href', '#contact')
  })

  it('washes the photo with a 40% veil over a solid dark fill', () => {
    const { container } = render(<RatingBand />)

    const section = container.querySelector('section')
    expect(section).toHaveClass('min-h-[600px]', 'bg-ink')
    const layers = container.querySelectorAll('[aria-hidden="true"]')
    expect(layers[0]).toHaveClass('bg-cover', 'bg-top')
    expect(layers[0]?.getAttribute('style')).toContain('rackline-band')
    expect(layers[1]).toHaveClass('bg-black/40')
  })

  it('drifts with the scroll and stands still under reduced motion', () => {
    const view = render(<RatingBand />)

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 200 })
    fireEvent.scroll(window)
    expect(view.container.querySelectorAll('[aria-hidden="true"]')[0]?.getAttribute('style')).toContain(
      '30px',
    )

    view.unmount()
    vi.stubGlobal('matchMedia', (query: string) => ({ matches: true, media: query }))
    const still = render(<RatingBand />)
    fireEvent.scroll(window)

    expect(still.container.querySelectorAll('[aria-hidden="true"]')[0]?.getAttribute('style')).toContain(
      '0px',
    )
  })
})
