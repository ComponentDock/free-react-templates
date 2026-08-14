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

describe('Counters', () => {
  it('renders the heading, photo and two counters with captions', () => {
    render(<Counters />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Free Templates By Verdant' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Free Templates/ })).toBeInTheDocument()
    expect(screen.getByText('Current Downloads')).toBeInTheDocument()
    expect(screen.getByText('Number of Templates')).toBeInTheDocument()
  })

  it('shows final values without IntersectionObserver (jsdom fallback)', () => {
    render(<Counters />)
    expect(screen.getByText('4,500')).toBeInTheDocument()
    expect(screen.getByText('120')).toBeInTheDocument()
  })

  it('animates counters from zero when they intersect', () => {
    let timestamp = 0
    vi.stubGlobal('IntersectionObserver', MockObserver)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      timestamp += 1200
      callback(timestamp)
      return timestamp
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())
    render(<Counters />)
    expect(screen.getByText('4,500')).toBeInTheDocument()
    expect(screen.getByText('120')).toBeInTheDocument()
    vi.unstubAllGlobals()
  })

  it('keeps counters at zero while not intersecting', () => {
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
    expect(screen.getAllByText('0')).toHaveLength(2)
    vi.unstubAllGlobals()
  })
})
