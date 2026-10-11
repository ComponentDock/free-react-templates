import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Achievement } from './Achievement'

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

describe('Achievement', () => {
  it('shows the final counter values when IntersectionObserver is unavailable', () => {
    render(<Achievement />)
    for (const value of ['2468', '1850', '640', '9420']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
    for (const label of ['Clients', 'Domains', 'Servers', 'Installs']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('counts up when the band scrolls into view and stops at the target', () => {
    let timestamp = 0
    vi.stubGlobal('IntersectionObserver', MockObserver)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      timestamp += 400
      callback(timestamp)
      return timestamp
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())

    render(<Achievement />)
    expect(screen.getByText('2468')).toBeInTheDocument()
    expect(screen.getByText('9420')).toBeInTheDocument()
    vi.unstubAllGlobals()
  })

  it('leaves the counters at zero until the band is visible', () => {
    class NeverIntersects extends MockObserver {
      override observe() {
        this.callback(
          [{ isIntersecting: false } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver,
        )
      }
    }
    vi.stubGlobal('IntersectionObserver', NeverIntersects)
    render(<Achievement />)
    expect(screen.getAllByText('0')).toHaveLength(4)
    expect(screen.getByText('Clients')).toBeInTheDocument()
    vi.unstubAllGlobals()
  })
})
