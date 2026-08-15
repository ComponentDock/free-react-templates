import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { CounterBand } from './CounterBand'

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

const LABELS = [
  'Customers are satisfied with our professional support',
  'Amazing preset options to be mixed and combined',
  'Average response time on live chat support channel',
]

describe('CounterBand', () => {
  it('renders the heading and final counter values without IntersectionObserver (jsdom fallback)', () => {
    render(<CounterBand />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our achievements' })).toBeInTheDocument()
    for (const label of LABELS) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    for (const value of ['400', '1,000', '8,000']) {
      expect(screen.getAllByText(value).length).toBeGreaterThan(0)
    }
  })

  it('animates counters from zero when they intersect the viewport', () => {
    let timestamp = 0
    vi.stubGlobal('IntersectionObserver', MockObserver)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      timestamp += 100
      callback(timestamp)
      return timestamp
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())
    render(<CounterBand />)
    for (const value of ['400', '1,000', '8,000']) {
      expect(screen.getAllByText(value).length).toBeGreaterThan(0)
    }
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
    render(<CounterBand />)
    expect(screen.getAllByText('0').length).toBe(3)
    vi.unstubAllGlobals()
  })
})
