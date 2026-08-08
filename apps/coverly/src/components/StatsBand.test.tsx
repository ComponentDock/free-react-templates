import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { StatsBand } from './StatsBand'

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

describe('StatsBand', () => {
  it('renders final counter values without IntersectionObserver (jsdom fallback)', () => {
    render(<StatsBand />)
    for (const value of ['$2.5M+', '50K+', '99%', '30+']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
    for (const label of ['Claims Paid', 'Active Policies', 'Claims Approval', 'Years Trusted']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('animates counters when they intersect the viewport', () => {
    let timestamp = 0
    vi.stubGlobal('IntersectionObserver', MockObserver)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      timestamp += 100
      callback(timestamp)
      return timestamp
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())
    render(<StatsBand />)
    expect(screen.getByText('$2.5M+')).toBeInTheDocument()
    expect(screen.getByText('30+')).toBeInTheDocument()
    vi.unstubAllGlobals()
  })

  it('keeps counters at zero when nothing intersects', () => {
    class NeverIntersects extends MockObserver {
      override observe() {
        this.callback(
          [{ isIntersecting: false } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver,
        )
      }
    }
    vi.stubGlobal('IntersectionObserver', NeverIntersects)
    render(<StatsBand />)
    expect(screen.getByText('$0.0M+')).toBeInTheDocument()
    expect(screen.getByText('0K+')).toBeInTheDocument()
    expect(screen.getByText('0%')).toBeInTheDocument()
    expect(screen.getByText('0+')).toBeInTheDocument()
    vi.unstubAllGlobals()
  })
})
