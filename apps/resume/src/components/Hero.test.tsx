import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the eyebrow, headline, intro, buttons, and portrait', () => {
    render(<Hero />)

    expect(screen.getAllByText('Get Every Single Solutions.').length).toBe(2)
    // both slides carry the same headline; the inactive one is aria-hidden
    expect(screen.getAllByRole('heading', { level: 1, hidden: true }).length).toBe(2)
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Hire Me' })).toHaveAttribute('href', '#contact')
    expect(screen.getAllByAltText('Portrait of the designer Harper F. Watson').length).toBe(2)
  })

  it('auto-advances the active slide on a timer', () => {
    vi.useFakeTimers()
    render(<Hero />)

    const firstDot = screen.getByRole('button', { name: 'Go to slide 1' })
    const secondDot = screen.getByRole('button', { name: 'Go to slide 2' })
    expect(firstDot).toHaveAttribute('aria-current', 'true')
    expect(secondDot).not.toHaveAttribute('aria-current')

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(firstDot).not.toHaveAttribute('aria-current')
    expect(secondDot).toHaveAttribute('aria-current', 'true')
  })

  it('switches slides when a dot is activated', () => {
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))

    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('cleans up the timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)

    unmount()

    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(screen.queryByRole('button', { name: 'Go to slide 1' })).not.toBeInTheDocument()
  })
})
