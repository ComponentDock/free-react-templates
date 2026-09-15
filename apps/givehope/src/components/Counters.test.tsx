import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { __getLastObserver } from '../test/setup'
import { Counters } from './Counters'

describe('Counters', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all four stat labels', () => {
    render(<Counters />)

    expect(screen.getByText('Total Collection')).toBeInTheDocument()
    expect(screen.getByText('Helped People')).toBeInTheDocument()
    expect(screen.getByText('Total Volunteers')).toBeInTheDocument()
    expect(screen.getByText('Successful Missions')).toBeInTheDocument()
  })

  it('starts counters at zero and animates on intersection', () => {
    render(<Counters />)

    const zeros = screen.getAllByText('0')
    expect(zeros.length).toBeGreaterThanOrEqual(1)

    const observer = __getLastObserver()
    if (observer) {
      act(() => {
        observer.callback(
          [{ isIntersecting: true, intersectionRatio: 0.5 } as IntersectionObserverEntry],
          observer as unknown as IntersectionObserver,
        )
      })
      act(() => {
        vi.advanceTimersByTime(2100)
      })
    }
  })

  it('does not animate when not intersecting', () => {
    render(<Counters />)

    const observer = __getLastObserver()
    if (observer) {
      act(() => {
        observer.callback(
          [{ isIntersecting: false, intersectionRatio: 0 } as IntersectionObserverEntry],
          observer as unknown as IntersectionObserver,
        )
      })
      act(() => {
        vi.advanceTimersByTime(2100)
      })
    }
  })

  it('cleans up observer on unmount', () => {
    const { unmount } = render(<Counters />)
    unmount()
  })
})
