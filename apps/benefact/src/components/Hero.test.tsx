import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the script headline and a square Donate Now button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Join The Movement To end Child Poverty/ }),
    ).toBeInTheDocument()
    const donate = screen.getByRole('link', { name: 'Donate Now' })
    expect(donate).toHaveAttribute('href', '#donate')
    expect(donate).toHaveClass('rounded-none')
  })

  it('renders three background slides with the first one visible', () => {
    const { container } = render(<Hero />)
    const slides = container.querySelectorAll('img')
    expect(slides).toHaveLength(3)
    expect(slides[0]!).toHaveClass('opacity-100')
    expect(slides[1]!).toHaveClass('opacity-0')
    expect(slides[2]!).toHaveClass('opacity-0')
  })

  it('rotates through the slides and wraps around', () => {
    vi.useFakeTimers()
    try {
      const { container, unmount } = render(<Hero />)
      const slides = container.querySelectorAll('img')
      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(slides[0]!).toHaveClass('opacity-0')
      expect(slides[1]!).toHaveClass('opacity-100')
      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(slides[2]!).toHaveClass('opacity-100')
      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(slides[0]!).toHaveClass('opacity-100')
      unmount()
    } finally {
      vi.useRealTimers()
    }
  })

  it('keeps the caption visible above the rotating slides', () => {
    vi.useFakeTimers()
    try {
      render(<Hero />)
      const headline = screen.getByRole('heading', {
        level: 1,
        name: /Join The Movement To end Child Poverty/,
      })
      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(headline).toBeVisible()
    } finally {
      vi.useRealTimers()
    }
  })
})
