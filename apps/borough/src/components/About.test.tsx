import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { About } from './About'
import { counters } from '../data'

class MockObserver {
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe() {
    // Fire once with no intersecting entries (exercises the skip branch),
    // then once with an intersecting entry (starts the animation).
    this.callback(
      [{ isIntersecting: false } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
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

describe('About', () => {
  it('renders the heading pair and the two paragraphs', () => {
    render(<About />)

    expect(screen.getByText('Welcome to Borough')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Borough — A Directory & Listing',
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/Far far away/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/A small river named Duden/).length).toBeGreaterThan(0)
  })

  it('falls back to the final counter values without IntersectionObserver', () => {
    render(<About />)
    for (const counter of counters) {
      expect(screen.getByText(counter.value.toString())).toBeInTheDocument()
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
  })

  it('animates the counters when they intersect the viewport', async () => {
    let timestamp = 0
    vi.stubGlobal('IntersectionObserver', MockObserver)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      timestamp += 100
      callback(timestamp)
      return timestamp
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())

    const { unmount } = render(<About />)
    for (const counter of counters) {
      expect(screen.getByText(counter.value.toString())).toBeInTheDocument()
    }
    unmount()
    vi.unstubAllGlobals()
  })
})
