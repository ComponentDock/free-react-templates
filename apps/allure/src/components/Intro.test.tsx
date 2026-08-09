import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Intro } from './Intro'

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

describe('Intro', () => {
  it('renders the heading, paragraphs, and milestone labels', () => {
    render(<Intro />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/model management/i)

    expect(screen.getByText(/full-service modeling agency/i)).toBeInTheDocument()
    for (const label of ['Models @ The Agency', 'Modeling Contracts', 'Model Recruitors']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('falls back to final values without IntersectionObserver (jsdom)', () => {
    render(<Intro />)
    for (const value of ['173', '2190', '25']) {
      expect(screen.getByText(value)).toBeInTheDocument()
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
    render(<Intro />)
    for (const value of ['173', '2190', '25']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
    vi.unstubAllGlobals()
  })
})
