import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all stat labels', () => {
    render(<Counters />)
    expect(screen.getByText('Speakers')).toBeInTheDocument()
    expect(screen.getByText('Sponsors')).toBeInTheDocument()
    expect(screen.getByText('Total Seats')).toBeInTheDocument()
    expect(screen.getByText('Topics')).toBeInTheDocument()
  })

  it('animates count-up when visible', async () => {
    render(<Counters />)
    await act(async () => {
      vi.advanceTimersByTime(2100)
    })
    expect(screen.getByText('1200+')).toBeInTheDocument()
    expect(screen.getByText('500')).toBeInTheDocument()
    expect(screen.getByText('3500+')).toBeInTheDocument()
    expect(screen.getByText('150')).toBeInTheDocument()
  })

  it('does not count up when not intersecting', async () => {
    const callbacks: IntersectionObserverCallback[] = []
    const origIO = window.IntersectionObserver

    window.IntersectionObserver = class {
      constructor(cb: IntersectionObserverCallback) {
        callbacks.push(cb)
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    } as unknown as typeof IntersectionObserver

    render(<Counters />)

    // Fire callback with isIntersecting=false
    for (const cb of callbacks) {
      cb([{ isIntersecting: false } as IntersectionObserverEntry], {} as IntersectionObserver)
    }

    await act(async () => {
      vi.advanceTimersByTime(3000)
    })

    // Numbers should still be 0 because observer didn't intersect
    expect(screen.getAllByText('0').length).toBeGreaterThanOrEqual(1)

    window.IntersectionObserver = origIO
    callbacks.length = 0
  })
})
