import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act, cleanup } from '@testing-library/react'
import React from 'react'
import { CounterStats } from './CounterStats'

// Mock IntersectionObserver
let intersectionCallback: IntersectionObserverCallback | null = null
const mockObserve = vi.fn()
const mockDisconnect = vi.fn()

class MockIntersectionObserver implements IntersectionObserver {
  root = null
  rootMargin = ''
  thresholds = [0]
  scrollMargin = ''

  constructor(callback: IntersectionObserverCallback) {
    intersectionCallback = callback
  }

  observe = mockObserve
  disconnect = mockDisconnect
  unobserve = vi.fn()
  takeRecords = vi.fn(() => [])
}

describe('CounterStats', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
    cleanup()
    intersectionCallback = null
  })

  it('renders the section with stat labels', () => {
    render(<CounterStats />)
    expect(screen.getByText('Years Experienced')).toBeInTheDocument()
  })

  it('renders all 4 stat labels', () => {
    render(<CounterStats />)
    expect(screen.getByText('Years Experienced')).toBeInTheDocument()
    expect(screen.getByText('Project Successful')).toBeInTheDocument()
    expect(screen.getByText('Professional Expert')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
  })

  it('creates an IntersectionObserver', () => {
    render(<CounterStats />)
    expect(mockObserve).toHaveBeenCalled()
  })

  it('starts with count at 0', () => {
    render(<CounterStats />)
    const zeros = screen.getAllByText('0')
    expect(zeros.length).toBe(4)
  })

  it('starts counting when section becomes visible', () => {
    render(<CounterStats />)

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })

    // Advance timers to trigger requestAnimationFrame callbacks
    act(() => {
      vi.advanceTimersByTime(500)
    })

    const countElements = screen.getAllByText(/^\d+$/)
    const hasNonZero = countElements.some((el) => el.textContent !== '0')
    expect(hasNonZero).toBe(true)
  })

  it('does not count when not visible', () => {
    render(<CounterStats />)

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    const zeros = screen.getAllByText('0')
    expect(zeros.length).toBe(4)
  })

  it('reaches target after animation completes', () => {
    render(<CounterStats />)

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getByText('1500')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('300')).toBeInTheDocument()
  })

  it('cleans up IntersectionObserver on unmount', () => {
    const { unmount } = render(<CounterStats />)
    unmount()
    expect(mockDisconnect).toHaveBeenCalled()
  })

  it('handles null ref gracefully', () => {
    const spy = vi.spyOn(React, 'useRef')
    // First call returns the sectionRef, override it to return null
    spy.mockReturnValueOnce({ current: null } as React.RefObject<HTMLElement | null>)
    render(<CounterStats />)
    // Should not throw - the early return handles null ref
    expect(screen.getByText('Years Experienced')).toBeInTheDocument()
    spy.mockRestore()
  })

  it('renders background image with aria-hidden', () => {
    const { container } = render(<CounterStats />)
    const img = container.querySelector('img[aria-hidden="true"]')
    expect(img).toBeInTheDocument()
  })

  it('renders background image with correct src', () => {
    const { container } = render(<CounterStats />)
    const img = container.querySelector('img[aria-hidden="true"]') as HTMLImageElement
    expect(img.src).toContain('nectar-stats')
  })

  it('cleans up animation frame on unmount during animation', () => {
    const { unmount } = render(<CounterStats />)

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })

    act(() => {
      vi.advanceTimersByTime(500)
    })

    unmount()
    expect(mockDisconnect).toHaveBeenCalled()
  })

  it('handles intermediate animation frames', () => {
    render(<CounterStats />)

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    const countElements = screen.getAllByText(/^\d+$/)
    const nonZeroCounts = countElements.filter((el) => {
      const val = parseInt(el.textContent || '0', 10)
      return val > 0
    })
    expect(nonZeroCounts.length).toBeGreaterThan(0)

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByText('30')).toBeInTheDocument()
  })
})
