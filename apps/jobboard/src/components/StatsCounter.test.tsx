import { render, screen, act } from '@testing-library/react'
import { StatsCounter } from './StatsCounter'

beforeEach(() => {
  globalThis.IntersectionObserver = class MockIO {
    cb: IntersectionObserverCallback
    constructor(cb: IntersectionObserverCallback) {
      this.cb = cb
    }
    observe(el: Element) {
      // Fire false first, then true
      this.cb(
        [{ isIntersecting: false, target: el } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      )
      this.cb(
        [{ isIntersecting: true, target: el } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      )
    }
    disconnect = vi.fn()
    unobserve = vi.fn()
  } as unknown as typeof IntersectionObserver
})

describe('StatsCounter', () => {
  it('renders section heading', () => {
    render(<StatsCounter />)
    expect(screen.getByRole('heading', { name: 'JobBoard Site Stats' })).toBeInTheDocument()
  })

  it('renders all stat labels', () => {
    render(<StatsCounter />)
    expect(screen.getByText('Candidates')).toBeInTheDocument()
    expect(screen.getByText('Jobs Posted')).toBeInTheDocument()
    expect(screen.getByText('Jobs Filled')).toBeInTheDocument()
    expect(screen.getByText('Companies')).toBeInTheDocument()
  })

  it('starts counters at zero', () => {
    render(<StatsCounter />)
    const zeros = screen.getAllByText('0')
    expect(zeros.length).toBe(4)
  })

  it('animates counters to target values', async () => {
    vi.useFakeTimers()
    render(<StatsCounter />)

    // Advance in small steps to cover intermediate frames
    for (let i = 0; i <= 25; i++) {
      act(() => {
        vi.advanceTimersByTime(100)
      })
    }

    expect(screen.getByText('4,382')).toBeInTheDocument()
    expect(screen.getByText('43,167')).toBeInTheDocument()
    expect(screen.getByText('31,472')).toBeInTheDocument()
    expect(screen.getByText('985')).toBeInTheDocument()

    vi.useRealTimers()
  })

  it('cleans up observer on unmount', () => {
    const { unmount } = render(<StatsCounter />)
    unmount()
  })
})
