import { render, screen, act } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  let callbacks: IntersectionObserverCallback[]
  let originalIO: typeof IntersectionObserver

  beforeEach(() => {
    vi.useFakeTimers()
    originalIO = globalThis.IntersectionObserver
    callbacks = []
    globalThis.IntersectionObserver = class {
      constructor(cb: IntersectionObserverCallback) {
        callbacks.push(cb)
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    } as unknown as typeof IntersectionObserver
  })

  afterEach(() => {
    vi.useRealTimers()
    globalThis.IntersectionObserver = originalIO
  })

  it('renders stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Copies Sold')).toBeInTheDocument()
    expect(screen.getByText('Copies Released')).toBeInTheDocument()
    expect(screen.getByText('Cups Of Coffee')).toBeInTheDocument()
    expect(screen.getByText('Happy Readers')).toBeInTheDocument()
  })

  it('has proper aria-label', () => {
    render(<Stats />)
    expect(screen.getByRole('region', { name: 'Statistics' })).toBeInTheDocument()
  })

  it('starts with zero counts', () => {
    render(<Stats />)
    const zeros = screen.getAllByText('0')
    expect(zeros.length).toBeGreaterThanOrEqual(4)
  })

  it('animates counts when section scrolls into view', () => {
    render(<Stats />)
    act(() => {
      callbacks.forEach((cb) => {
        cb([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver)
      })
    })
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText('1,100')).toBeInTheDocument()
    expect(screen.getByText('1,200')).toBeInTheDocument()
    expect(screen.getByText('340')).toBeInTheDocument()
    expect(screen.getByText('12,000')).toBeInTheDocument()
  })

  it('does not animate if not intersecting', () => {
    render(<Stats />)
    act(() => {
      callbacks.forEach((cb) => {
        cb([{ isIntersecting: false } as IntersectionObserverEntry], {} as IntersectionObserver)
      })
    })
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getAllByText('0').length).toBeGreaterThanOrEqual(4)
  })

  it('does not re-animate after already counted', () => {
    render(<Stats />)
    act(() => {
      callbacks.forEach((cb) => {
        cb([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver)
      })
    })
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByText('1,100')).toBeInTheDocument()
    act(() => {
      callbacks.forEach((cb) => {
        cb([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver)
      })
    })
    act(() => {
      vi.advanceTimersByTime(100)
    })
    expect(screen.getByText('1,100')).toBeInTheDocument()
  })
})
