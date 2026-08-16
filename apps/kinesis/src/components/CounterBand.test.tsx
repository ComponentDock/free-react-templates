import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { CounterBand } from './CounterBand'
import { counters } from '../data'

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

describe('CounterBand', () => {
  it('renders final counter values without IntersectionObserver (jsdom fallback)', () => {
    render(<CounterBand />)
    for (const counter of counters) {
      expect(screen.getByText(`${counter.value}${counter.suffix}`)).toBeInTheDocument()
      expect(screen.getByText(counter.label)).toBeInTheDocument()
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
    try {
      render(<CounterBand />)
      for (const counter of counters) {
        expect(screen.getByText(`${counter.value}${counter.suffix}`)).toBeInTheDocument()
      }
    } finally {
      vi.unstubAllGlobals()
    }
  })
})
