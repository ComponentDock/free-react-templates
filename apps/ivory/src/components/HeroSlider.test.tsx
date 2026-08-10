import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'
import { heroSlides } from '../data'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide with square dots and arrows', () => {
    render(<HeroSlider />)
    const first = heroSlides[0]!
    expect(screen.getByAltText(first.alt)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances to the next slide after the interval', () => {
    render(<HeroSlider />)
    const second = heroSlides[1]!
    expect(screen.queryByAltText(second.alt)).not.toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByAltText(second.alt)).toBeInTheDocument()
  })

  it('goes to a chosen slide via the dots', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByAltText(heroSlides[2]!.alt)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('wraps around when advancing past the last slide', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByAltText(heroSlides[0]!.alt)).toBeInTheDocument()
  })

  it('goes to a previous slide and wraps backwards', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByAltText(heroSlides[2]!.alt)).toBeInTheDocument()
  })
})
