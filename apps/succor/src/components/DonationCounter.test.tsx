import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DonationCounter } from './DonationCounter'

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

describe('DonationCounter', () => {
  it('shows the final value immediately when IntersectionObserver is unavailable (jsdom)', () => {
    render(<DonationCounter target={380000} />)

    expect(screen.getByText('380,000')).toBeInTheDocument()
  })

  it('counts up from 0 to the target when the counter scrolls into view', () => {
    let timestamp = 0
    vi.stubGlobal('IntersectionObserver', MockObserver)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      timestamp += 100
      callback(timestamp)
      return timestamp
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())
    render(<DonationCounter target={380000} durationMs={2000} />)

    // After the mocked rAF loop completes, the counter reaches the target.
    expect(screen.getByText('380,000')).toBeInTheDocument()
    vi.unstubAllGlobals()
  })

  it('stays at 0 when nothing intersects', () => {
    class NeverIntersects extends MockObserver {
      override observe() {
        this.callback(
          [{ isIntersecting: false } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver,
        )
      }
    }
    vi.stubGlobal('IntersectionObserver', NeverIntersects)
    render(<DonationCounter target={380000} />)

    expect(screen.getByText('0')).toBeInTheDocument()
    vi.unstubAllGlobals()
  })
})
