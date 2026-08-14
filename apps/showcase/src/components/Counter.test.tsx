import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Counter } from './Counter'

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

describe('Counter', () => {
  it('renders the final value without IntersectionObserver (jsdom fallback)', () => {
    render(<Counter value={1200} label="Projects" />)
    expect(screen.getByText('1,200')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  it('animates the counter when it intersects the viewport', () => {
    let timestamp = 0
    vi.stubGlobal('IntersectionObserver', MockObserver)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      timestamp += 100
      callback(timestamp)
      return timestamp
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())
    render(<Counter value={500} label="Coffees" />)
    expect(screen.getByText('500')).toBeInTheDocument()
    expect(screen.getByText('Coffees')).toBeInTheDocument()
    vi.unstubAllGlobals()
  })
})
