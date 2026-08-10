import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'
import { heroSlides, readMoreLabel } from '../data'

const SLIDE_INTERVAL = 5000

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide with meta, headline, Read More, dots and two stacked images', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[0]!.headline)
    expect(screen.getByText(heroSlides[0]!.date)).toBeInTheDocument()
    expect(screen.getByText(heroSlides[0]!.comments)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: readMoreLabel })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(heroSlides.length)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(2)
    expect(images[1]).toHaveAttribute('src', expect.stringContaining('cutout'))
  })

  it('navigates with the next and previous buttons', () => {
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[1]!.headline)

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[0]!.headline)
  })

  it('wraps to the last slide when going previous from the first slide', () => {
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[2]!.headline)
  })

  it('jumps to a slide via its dot indicator', () => {
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[2]!.headline)
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances on an interval and clears it on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[0]!.headline)
    act(() => {
      vi.advanceTimersByTime(SLIDE_INTERVAL)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[1]!.headline)

    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})
