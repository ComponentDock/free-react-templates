import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, vi, describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the headline, subtext, and the intro video play button', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        name: 'For All Occasion HairStyle is a Must Try Fashion',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Inappropriate behavior is often laughed off/i)).toBeInTheDocument()
    expect(screen.getByText('Watch Intro Video')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Watch Intro Video/i })).toBeInTheDocument()
  })

  it('shows the first slide and advances the background photo on an interval', () => {
    const { container } = render(<Hero />)
    const images = container.querySelectorAll('img')

    expect(images[0]).toHaveClass('opacity-100')
    expect(images[1]).toHaveClass('opacity-0')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(images[1]).toHaveClass('opacity-100')
    expect(images[0]).toHaveClass('opacity-0')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(images[2]).toHaveClass('opacity-100')
    expect(images[1]).toHaveClass('opacity-0')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(images[0]).toHaveClass('opacity-100')
    expect(images[2]).toHaveClass('opacity-0')
  })

  it('clears the slide interval on unmount', () => {
    const { unmount } = render(<Hero />)
    unmount()
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(screen.queryByRole('heading', { name: /HairStyle/i })).not.toBeInTheDocument()
  })
})
