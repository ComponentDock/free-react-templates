import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Counter, CounterItem } from './Counter'

describe('Counter', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  it('renders three stat labels', () => {
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        cb: IntersectionObserverCallback
        constructor(cb: IntersectionObserverCallback) {
          this.cb = cb
        }
        observe() {
          this.cb(
            [{ isIntersecting: true } as IntersectionObserverEntry],
            this as unknown as IntersectionObserver,
          )
        }
        unobserve() {}
        disconnect() {}
        root = null
        rootMargin = ''
        scrollMargin = ''
        thresholds: readonly number[] = []
        takeRecords(): IntersectionObserverEntry[] {
          return []
        }
      },
    )
    render(<Counter />)
    expect(screen.getByText('Lines of Code')).toBeInTheDocument()
    expect(screen.getByText('Number of Projects')).toBeInTheDocument()
    expect(screen.getByText('Number of Clients')).toBeInTheDocument()
  })

  it('starts at zero', () => {
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        cb: IntersectionObserverCallback
        constructor(cb: IntersectionObserverCallback) {
          this.cb = cb
        }
        observe() {
          this.cb(
            [{ isIntersecting: false } as IntersectionObserverEntry],
            this as unknown as IntersectionObserver,
          )
        }
        unobserve() {}
        disconnect() {}
        root = null
        rootMargin = ''
        scrollMargin = ''
        thresholds: readonly number[] = []
        takeRecords(): IntersectionObserverEntry[] {
          return []
        }
      },
    )
    render(<Counter />)
    const zeros = screen.getAllByText('0')
    expect(zeros).toHaveLength(3)
  })

  it('counts up when section is visible', () => {
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        cb: IntersectionObserverCallback
        constructor(cb: IntersectionObserverCallback) {
          this.cb = cb
        }
        observe() {
          this.cb(
            [{ isIntersecting: true } as IntersectionObserverEntry],
            this as unknown as IntersectionObserver,
          )
        }
        unobserve() {}
        disconnect() {}
        root = null
        rootMargin = ''
        scrollMargin = ''
        thresholds: readonly number[] = []
        takeRecords(): IntersectionObserverEntry[] {
          return []
        }
      },
    )
    render(<Counter />)
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(screen.getByText('99,399')).toBeInTheDocument()
  })

  it('does not restart counting on re-render', () => {
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        cb: IntersectionObserverCallback
        constructor(cb: IntersectionObserverCallback) {
          this.cb = cb
        }
        observe() {
          // observer called
          // First call: intersecting; subsequent calls: already counted
          this.cb(
            [{ isIntersecting: true } as IntersectionObserverEntry],
            this as unknown as IntersectionObserver,
          )
        }
        unobserve() {}
        disconnect() {}
        root = null
        rootMargin = ''
        scrollMargin = ''
        thresholds: readonly number[] = []
        takeRecords(): IntersectionObserverEntry[] {
          return []
        }
      },
    )
    const { rerender } = render(<CounterItem end={50} label="Test" />)
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect(screen.getByText('50')).toBeInTheDocument()

    // Re-render — observer fires again but counted is already true
    rerender(<CounterItem end={50} label="Test" />)
    // Should still show 50 (no restart)
    expect(screen.getByText('50')).toBeInTheDocument()
  })
})
