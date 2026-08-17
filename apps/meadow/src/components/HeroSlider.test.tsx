import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'
import { heroCta, heroCtaHref, heroSlides } from '../data'

function slideActive(title: string): string | null | undefined {
  const slide = screen.getByText(title).closest('[data-slide]')
  return slide?.getAttribute('aria-hidden')
}

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the first slide with eyebrow, headline, body, and Get Started CTA', () => {
    render(<HeroSlider />)
    expect(screen.getAllByText(heroSlides[0]!.eyebrow).length).toBe(2)
    expect(slideActive(heroSlides[0]!.title)).not.toBe('true')
    expect(screen.getByRole('link', { name: heroCta })).toHaveAttribute('href', heroCtaHref)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('switches slides through the dot navigation', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(slideActive(heroSlides[1]!.title)).not.toBe('true')
    expect(slideActive(heroSlides[0]!.title)).toBe('true')
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('autoplays to the next slide after the interval and cleans up the timer on unmount', () => {
    const { unmount } = render(<HeroSlider />)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(slideActive(heroSlides[1]!.title)).not.toBe('true')
    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})
