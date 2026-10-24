import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Counters } from './Counters'

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

describe('Counters', () => {
  it('renders final figures with a thousands separator when no observer exists', () => {
    render(<Counters />)
    for (const value of ['3,000', '320', '1,000', '587']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
    expect(screen.getByText('Completed projects')).toBeInTheDocument()
    expect(screen.getByText('Engineers & staff')).toBeInTheDocument()
  })

  it('counts up when the band scrolls into view', () => {
    let timestamp = 0
    vi.stubGlobal('IntersectionObserver', MockObserver)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      timestamp += 100
      callback(timestamp)
      return timestamp
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())
    render(<Counters />)
    expect(screen.getByText('3,000')).toBeInTheDocument()
    expect(screen.getByText('587')).toBeInTheDocument()
    vi.unstubAllGlobals()
  })

  it('stays at zero when nothing intersects', () => {
    class NeverIntersects extends MockObserver {
      override observe() {
        this.callback(
          [{ isIntersecting: false } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver,
        )
      }
    }
    vi.stubGlobal('IntersectionObserver', NeverIntersects)
    render(<Counters />)
    expect(screen.getAllByText('0')).toHaveLength(4)
    vi.unstubAllGlobals()
  })
})
