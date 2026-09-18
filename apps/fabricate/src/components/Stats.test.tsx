import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Stats } from './Stats'

beforeEach(() => {
  // Mock IntersectionObserver to immediately report intersecting
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      callback: IntersectionObserverCallback
      constructor(callback: IntersectionObserverCallback) {
        this.callback = callback
      }
      observe() {
        // Simulate intersection immediately
        this.callback(
          [{ isIntersecting: true } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver,
        )
      }
      unobserve() {}
      disconnect() {}
    },
  )
})

describe('Stats', () => {
  it('renders four stat counters', () => {
    render(<Stats />)
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Total Employees')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Tickets Submitted')).toBeInTheDocument()
  })

  it('animates counters when in view', async () => {
    vi.useFakeTimers()
    render(<Stats />)

    // Advance timers to let the animation run
    await act(async () => {
      vi.advanceTimersByTime(2100)
    })

    // After animation, counters should show final values
    expect(screen.getByText('2K+')).toBeInTheDocument()
    expect(screen.getByText('5.5K')).toBeInTheDocument()

    vi.useRealTimers()
  })

  it('handles non-intersecting entries gracefully', () => {
    // Override mock to report non-intersecting
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        callback: IntersectionObserverCallback
        constructor(callback: IntersectionObserverCallback) {
          this.callback = callback
        }
        observe() {
          this.callback(
            [{ isIntersecting: false } as IntersectionObserverEntry],
            this as unknown as IntersectionObserver,
          )
        }
        unobserve() {}
        disconnect() {}
      },
    )

    render(<Stats />)
    // Counters stay at 0
    expect(screen.getByText('0K+')).toBeInTheDocument()
  })
})
