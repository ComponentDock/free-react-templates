import { render, screen, act, renderHook } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Counter, useCountUp, useInView } from '../components/Counter'

function TestUseInView({ threshold }: { threshold?: number }) {
  const { ref, inView } = useInView(threshold)
  return <div ref={ref}>{inView ? 'visible' : 'hidden'}</div>
}

describe('useInView', () => {
  let lastCallback: IntersectionObserverCallback | undefined
  const mockObserve = vi.fn()
  const mockDisconnect = vi.fn()

  beforeEach(() => {
    lastCallback = undefined
    mockObserve.mockClear()
    mockDisconnect.mockClear()
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(cb: IntersectionObserverCallback) {
          lastCallback = cb
        }
        observe = mockObserve
        disconnect = mockDisconnect
        unobserve = vi.fn()
      },
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('starts with inView false', () => {
    render(<TestUseInView />)
    expect(screen.getByText('hidden')).toBeInTheDocument()
  })

  it('sets inView true when element intersects', () => {
    render(<TestUseInView />)

    act(() => {
      lastCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })

    expect(screen.getByText('visible')).toBeInTheDocument()
  })

  it('does not set inView when not intersecting', () => {
    render(<TestUseInView />)

    act(() => {
      lastCallback?.(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })

    expect(screen.getByText('hidden')).toBeInTheDocument()
  })

  it('cleans up on unmount', () => {
    const { unmount } = render(<TestUseInView />)
    unmount()
    expect(mockDisconnect).toHaveBeenCalled()
  })

  it('renders with custom threshold', () => {
    render(<TestUseInView threshold={0.5} />)
    expect(screen.getByText('hidden')).toBeInTheDocument()
  })
})

describe('useCountUp', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns 0 when not in view', () => {
    const { result } = renderHook(() => useCountUp(100, false))
    expect(result.current).toBe(0)
  })

  it('counts up to target when in view', () => {
    const { result, unmount } = renderHook(() => useCountUp(100, true, 200))

    act(() => {
      vi.advanceTimersByTime(100)
    })
    expect(result.current).toBeGreaterThanOrEqual(0)
    expect(result.current).toBeLessThanOrEqual(100)

    act(() => {
      vi.advanceTimersByTime(200)
    })
    expect(result.current).toBe(100)
    unmount()
  })

  it('cleans up interval on unmount', () => {
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval')
    const { unmount } = renderHook(() => useCountUp(100, true))
    unmount()
    expect(clearIntervalSpy).toHaveBeenCalled()
    clearIntervalSpy.mockRestore()
  })
})

describe('Counter', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor() {}
        observe() {}
        disconnect() {}
        unobserve() {}
      },
    )
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Number of Awards')).toBeInTheDocument()
    expect(screen.getByText('Hours Support')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
  })

  it('renders with parallax background', () => {
    render(<Counter />)
    const section = screen.getByRole('region', { name: 'Statistics' })
    expect(section).toBeInTheDocument()
  })
})
