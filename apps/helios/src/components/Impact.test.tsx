import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Impact } from './Impact'

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

describe('Impact', () => {
  it('renders final counter values without IntersectionObserver (jsdom fallback)', () => {
    render(<Impact />)
    expect(screen.getByRole('heading', { name: 'Our Environmental Impact' })).toBeInTheDocument()
    for (const value of ['25,000', '1,500,000', '48,000,000', '12,000']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
    for (const label of ['Tons CO2 Offset', 'Trees Equivalent', 'kWh Generated', 'Homes Powered']) {
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
    render(<Impact />)
    expect(screen.getByText('25,000')).toBeInTheDocument()
    expect(screen.getByText('1,500,000')).toBeInTheDocument()
    expect(screen.getByText('48,000,000')).toBeInTheDocument()
    expect(screen.getByText('12,000')).toBeInTheDocument()
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
    render(<Impact />)
    expect(screen.getAllByText('0').length).toBeGreaterThanOrEqual(4)
    vi.unstubAllGlobals()
  })
})
