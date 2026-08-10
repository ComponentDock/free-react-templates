import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { heroAutoAdvanceMs, heroSlides } from '../data'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide with tag pill and headline', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('region', { name: 'Featured posts' })).toBeInTheDocument()
    expect(screen.getByText(heroSlides[0]!.tag)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0]!.headline }),
    ).toBeInTheDocument()
  })

  it('auto-advances to the next slide after the interval', () => {
    render(<HeroSlider />)

    act(() => {
      vi.advanceTimersByTime(heroAutoAdvanceMs)
    })

    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[1]!.headline }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { level: 2, name: heroSlides[0]!.headline }),
    ).not.toBeInTheDocument()
  })

  it('wraps around after the last slide when auto-advancing', () => {
    render(<HeroSlider />)

    act(() => {
      vi.advanceTimersByTime(heroAutoAdvanceMs * heroSlides.length)
    })

    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0]!.headline }),
    ).toBeInTheDocument()
  })

  it('navigates with the next and previous controls', () => {
    render(<HeroSlider />)

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[1]!.headline }),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0]!.headline }),
    ).toBeInTheDocument()
  })

  it('wraps from the first slide back to the last via the previous control', () => {
    render(<HeroSlider />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[heroSlides.length - 1]!.headline }),
    ).toBeInTheDocument()
  })

  it('clears the auto-advance timer on unmount', () => {
    const { unmount } = render(<HeroSlider />)
    unmount()

    act(() => {
      vi.advanceTimersByTime(heroAutoAdvanceMs)
    })
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument()
  })
})
