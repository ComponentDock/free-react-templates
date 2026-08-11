import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'
import {
  heroAutoplayMs,
  heroEyebrow,
  heroLabel,
  heroReadMoreLabel,
  heroSlides,
  heroTitle,
  nextSlideLabel,
  prevSlideLabel,
  slideIndicatorLabel,
} from '../data'

describe('Hero', () => {
  it('renders the eyebrow, headline, Read More button and slide indicators', () => {
    render(<Hero />)

    const region = screen.getByRole('region', { name: heroLabel })
    expect(region).toBeInTheDocument()
    expect(screen.getByText(heroEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: heroTitle })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: heroReadMoreLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: slideIndicatorLabel(0) })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: slideIndicatorLabel(1) })).toBeInTheDocument()
  })

  it('renders one background image per slide', () => {
    render(<Hero />)
    const images = document.querySelectorAll('img')
    expect(images).toHaveLength(heroSlides.length)
    heroSlides.forEach((slide, index) => {
      expect(images[index]).toHaveAttribute(
        'src',
        `https://picsum.photos/seed/${slide.seed}/1920/850`,
      )
    })
  })

  it('advances to the next slide via the next control and wraps around', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const next = screen.getByRole('button', { name: nextSlideLabel })
    expect(screen.getByRole('button', { name: slideIndicatorLabel(0) })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(next)
    expect(screen.getByRole('button', { name: slideIndicatorLabel(1) })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(next)
    expect(screen.getByRole('button', { name: slideIndicatorLabel(0) })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('moves to the previous slide and jumps via an indicator', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    await user.click(screen.getByRole('button', { name: prevSlideLabel }))
    expect(screen.getByRole('button', { name: slideIndicatorLabel(0) })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: slideIndicatorLabel(1) }))
    expect(screen.getByRole('button', { name: slideIndicatorLabel(1) })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances after the autoplay interval', () => {
    vi.useFakeTimers()
    render(<Hero />)

    expect(screen.getByRole('button', { name: slideIndicatorLabel(0) })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(heroAutoplayMs)
    })
    expect(screen.getByRole('button', { name: slideIndicatorLabel(1) })).toHaveAttribute(
      'aria-current',
      'true',
    )

    vi.useRealTimers()
  })

  it('cleans up the autoplay timer on unmount', () => {
    vi.useFakeTimers()
    const clearSpy = vi.spyOn(window, 'clearInterval')
    const { unmount } = render(<Hero />)
    unmount()
    expect(clearSpy).toHaveBeenCalled()
    vi.useRealTimers()
  })
})
