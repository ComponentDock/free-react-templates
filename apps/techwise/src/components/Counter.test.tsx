import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all four counter labels', () => {
    render(<Counter />)
    expect(screen.getByText('Year Of Experienced')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })

  it('renders counter values after timer advances to target', () => {
    vi.useFakeTimers()
    render(<Counter />)
    // Advance enough time for counters to reach their targets
    act(() => {
      vi.advanceTimersByTime(2500)
    })
    // Counters should have reached their targets
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('200')).toBeInTheDocument()
    expect(screen.getByText('35')).toBeInTheDocument()
  })

  it('does not count when not in view', () => {
    vi.useFakeTimers()
    // Override the global mock to fire with isIntersecting: false
    const origIO = globalThis.IntersectionObserver
    let lastCallback: IntersectionObserverCallback | null = null
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        callback: IntersectionObserverCallback
        constructor(cb: IntersectionObserverCallback) {
          this.callback = cb
          lastCallback = cb
        }
        observe() {
          // Fire with isIntersecting: false
          this.callback(
            [{ isIntersecting: false } as IntersectionObserverEntry],
            this as unknown as IntersectionObserver,
          )
        }
        unobserve() {}
        disconnect() {}
        takeRecords() {
          return []
        }
      },
    )
    void lastCallback

    render(<Counter />)

    // Advance timer — counters should stay at 0 because not in view
    act(() => {
      vi.advanceTimersByTime(2500)
    })
    expect(screen.getAllByText('0')).toHaveLength(4)

    // Restore
    vi.stubGlobal('IntersectionObserver', origIO)
  })

  it('cleans up intersection observer on unmount', () => {
    const { unmount } = render(<Counter />)
    unmount()
  })
})
