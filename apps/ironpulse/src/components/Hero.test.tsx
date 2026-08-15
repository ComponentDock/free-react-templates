import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { heroPlayLabel, heroReadMoreLabel, heroSlideLabel, heroSlides } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide content with play button, headline, CTA, and dots', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: heroPlayLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: heroSlides[0].title })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: heroReadMoreLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: heroSlideLabel(0) })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: heroSlideLabel(1) })).not.toHaveAttribute(
      'aria-current',
    )
    expect(screen.getByRole('button', { name: heroSlideLabel(2) })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('navigates to a slide when a dot is activated', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: heroSlideLabel(2) }))
    expect(screen.getByRole('heading', { level: 1, name: heroSlides[2].title })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: heroSlideLabel(2) })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: heroSlideLabel(0) })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('auto-advances to the next slide after the interval', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[0].title)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[1].title)
  })

  it('wraps around from the last slide to the first on auto-advance', () => {
    vi.useFakeTimers()
    render(<Hero />)
    act(() => {
      vi.advanceTimersByTime(6000 * 3)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[0].title)
  })
})
