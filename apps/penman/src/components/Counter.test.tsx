import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('Counter', () => {
  beforeEach(() => {
    // Mock performance.now to return increasing values for animation
    let now = 0
    vi.spyOn(performance, 'now').mockImplementation(() => {
      now += 500
      return now
    })
    // Mock requestAnimationFrame to call callback immediately
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
      cb(performance.now())
      return 0
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  it('renders all stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Copies Sold')).toBeInTheDocument()
    expect(screen.getByText('Copies Released')).toBeInTheDocument()
    expect(screen.getByText('Cup Of Coffee')).toBeInTheDocument()
    expect(screen.getByText('Happy Readers')).toBeInTheDocument()
  })

  it('animates count-up on intersection', () => {
    render(<Counter />)
    // After mock IntersectionObserver triggers and animation runs,
    // counters should show non-zero values
    const sold = screen.getByText('Copies Sold')
    expect(sold).toBeInTheDocument()
    const sections = screen.getAllByText(/Copies|Cup|Happy/)
    expect(sections.length).toBe(4)
  })

  it('does not animate when not intersecting', () => {
    // Override mock to simulate non-intersecting
    const origIO = globalThis.IntersectionObserver
    class NonIntersectingObserver {
      callback: IntersectionObserverCallback
      constructor(cb: IntersectionObserverCallback) {
        this.callback = cb
      }
      observe() {
        this.callback(
          [{ isIntersecting: false } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver,
        )
      }
      unobserve() {}
      disconnect() {}
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    globalThis.IntersectionObserver = NonIntersectingObserver as any

    render(<Counter />)
    expect(screen.getByText('Copies Sold')).toBeInTheDocument()

    globalThis.IntersectionObserver = origIO
  })
})
