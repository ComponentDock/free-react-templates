import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Facts } from './Facts'
import { facts } from '../data'

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

describe('Facts', () => {
  it('renders the four statistics with their final values and labels', () => {
    render(<Facts />)
    for (const fact of facts) {
      expect(screen.getByText(String(fact.value))).toBeInTheDocument()
      expect(screen.getByText(fact.label)).toBeInTheDocument()
    }
  })

  it('animates the counters when the band intersects the viewport', () => {
    let timestamp = 0
    vi.stubGlobal('IntersectionObserver', MockObserver)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      timestamp += 2000
      callback(timestamp)
      return timestamp
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())
    render(<Facts />)
    for (const fact of facts) {
      expect(screen.getByText(String(fact.value))).toBeInTheDocument()
    }
    vi.unstubAllGlobals()
  })

  it('keeps counters at zero when the band never intersects', () => {
    class NeverIntersects extends MockObserver {
      override observe() {
        this.callback(
          [{ isIntersecting: false } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver,
        )
      }
    }
    vi.stubGlobal('IntersectionObserver', NeverIntersects)
    render(<Facts />)
    for (const fact of facts) {
      expect(screen.getAllByText('0').length).toBeGreaterThan(0)
      expect(screen.getByText(fact.label)).toBeInTheDocument()
    }
    vi.unstubAllGlobals()
  })
})
