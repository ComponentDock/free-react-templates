import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { HERO_CTA, HERO_INTERVAL_MS, HERO_SLIDES } from '../data'
import { HeroSlider } from './HeroSlider'

afterEach(() => {
  vi.useRealTimers()
  cleanup()
})

describe('HeroSlider', () => {
  it('renders the first slide with headline, lead, photo and quote button', () => {
    const { container } = render(<HeroSlider />)
    expect(screen.getByRole('region', { name: 'Hero' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Welcome to Paragon.' }),
    ).toBeInTheDocument()
    expect(screen.getByText(HERO_SLIDES[0]!.lead)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: HERO_CTA })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta.className).toContain('rounded-none')
    expect(cta.className).toContain('bg-brand')

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', HERO_SLIDES[0]!.image)
    expect(img).toHaveAttribute('alt', HERO_SLIDES[0]!.alt)
  })

  it('navigates slides with next/prev (wrapping) and dots', () => {
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(3)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'Enhance Human Experience' }),
    ).toBeInTheDocument()
    expect(dots[1]).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'The Best Interior Design' }),
    ).toBeInTheDocument()

    // Next from the last slide wraps back to slide 1.
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'Welcome to Paragon.' }),
    ).toBeInTheDocument()

    // Prev from slide 1 wraps back to the last slide.
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'The Best Interior Design' }),
    ).toBeInTheDocument()

    // A dot click jumps straight to that slide.
    fireEvent.click(dots[1] as HTMLElement)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Enhance Human Experience' }),
    ).toBeInTheDocument()
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
  })

  it('auto-advances every interval, wraps, and clears the timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<HeroSlider />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Welcome to Paragon.' }),
    ).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(HERO_INTERVAL_MS)
    })
    expect(
      screen.getByRole('heading', { level: 1, name: 'Enhance Human Experience' }),
    ).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(HERO_INTERVAL_MS * 2)
    })
    expect(
      screen.getByRole('heading', { level: 1, name: 'Welcome to Paragon.' }),
    ).toBeInTheDocument()
    expect(vi.getTimerCount()).toBe(1)

    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})
