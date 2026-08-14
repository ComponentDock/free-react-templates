import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { FeaturedGuests } from './FeaturedGuests'

const GUEST_NAMES = [
  'Megan Smith',
  'Brooke Cagle',
  'Philip Martin',
  'Steven Ericson',
  'Nathan Dumlao',
  'Brook Smith',
]

describe('FeaturedGuests', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  const trackTransform = (container: HTMLElement) =>
    (container.querySelector('[data-testid="guest-track"]') as HTMLElement).style.transform

  it('renders the section heading and all six guest slides', () => {
    const { container } = render(<FeaturedGuests />)

    expect(screen.getByRole('region', { name: 'Featured guests' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Featured Guests' })).toBeInTheDocument()

    for (const name of GUEST_NAMES) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img')).toHaveLength(6)
    expect(container.querySelectorAll('p')).toHaveLength(6)
  })

  it('starts on the first guest and advances with the next/previous arrows', () => {
    const { container } = render(<FeaturedGuests />)
    expect(trackTransform(container)).toBe('translateX(-0%)')

    fireEvent.click(screen.getByRole('button', { name: 'Next guest' }))
    expect(trackTransform(container)).toBe('translateX(-100%)')

    fireEvent.click(screen.getByRole('button', { name: 'Next guest' }))
    expect(trackTransform(container)).toBe('translateX(-200%)')
  })

  it('wraps from the first guest back to the last with the previous arrow', () => {
    const { container } = render(<FeaturedGuests />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous guest' }))
    expect(trackTransform(container)).toBe('translateX(-500%)')
  })

  it('auto-advances on a timer and cleans up on unmount', () => {
    const { container, unmount } = render(<FeaturedGuests />)

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(trackTransform(container)).toBe('translateX(-100%)')

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(trackTransform(container)).toBe('translateX(-200%)')

    // After unmount the interval must be cleared — advancing must not throw.
    unmount()
    expect(() => vi.advanceTimersByTime(4000)).not.toThrow()
  })
})
