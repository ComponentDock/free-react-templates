import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CounterStrip } from './CounterStrip'

class MockObserver {
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe() {
    this.callback(
      [
        { isIntersecting: false } as IntersectionObserverEntry,
        { isIntersecting: true } as IntersectionObserverEntry,
      ],
      this as unknown as IntersectionObserver,
    )
  }
  disconnect() {}
  unobserve() {}
  takeRecords() {
    return []
  }
  root = null
  rootMargin = ''
  thresholds = []
}

describe('CounterStrip', () => {
  it('renders the four statistics at their final values when IntersectionObserver is unavailable', () => {
    render(<CounterStrip />)

    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getAllByText('100')).toHaveLength(2)
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('Years of Experienced')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Finished Projects')).toBeInTheDocument()
    expect(screen.getByText('Working Days')).toBeInTheDocument()
  })

  it('counts up to the final values when the strip scrolls into view', () => {
    let timestamp = 0
    vi.stubGlobal('IntersectionObserver', MockObserver)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      timestamp += 100
      callback(timestamp)
      return timestamp
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())

    render(<CounterStrip />)

    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getAllByText('100')).toHaveLength(2)
    expect(screen.getByText('50')).toBeInTheDocument()
    vi.unstubAllGlobals()
  })

  it('keeps the counters at zero when the strip never intersects', () => {
    class NeverIntersects extends MockObserver {
      override observe() {
        this.callback(
          [{ isIntersecting: false } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver,
        )
      }
    }
    vi.stubGlobal('IntersectionObserver', NeverIntersects)

    render(<CounterStrip />)

    expect(screen.getAllByText('0')).toHaveLength(4)
    vi.unstubAllGlobals()
  })
})
