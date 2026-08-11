import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'
import { COUNTER_STATS } from '../data'

class MockObserver {
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe() {
    this.callback(
      [{ isIntersecting: true } as IntersectionObserverEntry],
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

describe('Counter', () => {
  it('renders final stat values without IntersectionObserver (jsdom fallback)', () => {
    render(<Counter />)
    expect(screen.getByText('18')).toBeInTheDocument()
    expect(screen.getByText('15,000')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('20')).toBeInTheDocument()
    for (const stat of COUNTER_STATS) {
      expect(screen.getByText(stat.label)).toBeInTheDocument()
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

    render(<Counter />)
    // The rAF loop runs to completion synchronously, landing on the finals.
    expect(screen.getByText('18')).toBeInTheDocument()
    expect(screen.getByText('15,000')).toBeInTheDocument()
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
    render(<Counter />)
    expect(screen.getAllByText('0')).toHaveLength(4)
    vi.unstubAllGlobals()
  })
})
