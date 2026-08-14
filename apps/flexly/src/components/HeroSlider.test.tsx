import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'
import { HERO_SLIDES } from '../data'

/* The slider keeps both slides in the DOM with aria-hidden on the
   inactive one — query with hidden: true and assert visibility via
   the container's opacity class. */
describe('HeroSlider', () => {
  it('renders the first slide content (tagline, headline, CTA)', () => {
    render(<HeroSlider />)

    const first = HERO_SLIDES[0]!
    expect(screen.getByText(first.tagline)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Get A Perfect Body Figure/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join with us' })).toHaveAttribute(
      'href',
      '#programs-section',
    )
    expect(screen.getByText('Strength')).toBeInTheDocument()
  })

  it('navigates to the second slide via the next arrow', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))

    const second = HERO_SLIDES[1]!
    expect(screen.getByText(second.tagline)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Pain is Temporary But Glory is Forever/,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('Workout')).toBeInTheDocument()
  })

  it('navigates via the dot buttons and wraps around', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Pain is Temporary But Glory is Forever/,
      }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: /Get A Perfect Body Figure/ }),
    ).toBeInTheDocument()

    // Previous arrow wraps back to the last slide.
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Pain is Temporary But Glory is Forever/,
      }),
    ).toBeInTheDocument()
  })

  it('auto-advances every 6 seconds', () => {
    vi.useFakeTimers()
    try {
      render(<HeroSlider />)
      expect(
        screen.getByRole('heading', { level: 1, name: /Get A Perfect Body Figure/ }),
      ).toBeInTheDocument()

      act(() => {
        vi.advanceTimersByTime(6000)
      })
      expect(
        screen.getByRole('heading', {
          level: 1,
          name: /Pain is Temporary But Glory is Forever/,
        }),
      ).toBeInTheDocument()
    } finally {
      vi.useRealTimers()
    }
  })
})
