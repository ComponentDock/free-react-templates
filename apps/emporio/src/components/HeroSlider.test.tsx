import { describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen, within } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'
import { heroSlides } from '../data'

describe('HeroSlider', () => {
  it('renders the first slide with script, headline, copy and CTA', () => {
    render(<HeroSlider />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Minimal Menz Style' }),
    ).toBeInTheDocument()
    const firstSlide = screen.getByRole('img', { name: heroSlides[0]!.alt }).closest('div')!
    expect(within(firstSlide).getByText('Fashion Sale')).toBeInTheDocument()
    expect(within(firstSlide).getByRole('link', { name: 'Shop Now' })).toBeInTheDocument()
    expect(document.querySelectorAll('img')).toHaveLength(2)
  })

  it('navigates slides with arrows and dots', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('img', { name: heroSlides[1]!.alt })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('img', { name: heroSlides[0]!.alt })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('img', { name: heroSlides[1]!.alt })).toBeInTheDocument()
  })

  it('wraps around from the first slide to the last', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('img', { name: heroSlides[1]!.alt })).toBeInTheDocument()
  })

  it('auto-advances slides and cleans up the timer on unmount', () => {
    vi.useFakeTimers()
    try {
      const { unmount } = render(<HeroSlider />)
      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(screen.getByRole('img', { name: heroSlides[1]!.alt })).toBeInTheDocument()
      unmount()
      act(() => {
        vi.advanceTimersByTime(10000)
      })
    } finally {
      vi.useRealTimers()
    }
  })
})
