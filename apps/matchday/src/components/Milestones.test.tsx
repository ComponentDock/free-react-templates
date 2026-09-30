import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Milestones } from './Milestones'

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

describe('Milestones', () => {
  it('renders the four counters with final values without IntersectionObserver (jsdom fallback)', () => {
    render(<Milestones />)
    for (const value of ['35', '12', '8', '24']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
    for (const title of ['Team players', 'Trophies', 'Medals', 'Kicks/Match']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
    for (const subtitle of ['First team squad', 'Club honours', 'This season', 'Season average']) {
      expect(screen.getByText(subtitle)).toBeInTheDocument()
    }
  })

  it('counts up to the targets when the band intersects the viewport', () => {
    let timestamp = 0
    vi.stubGlobal('IntersectionObserver', MockObserver)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      timestamp += 300
      callback(timestamp)
      return timestamp
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())
    render(<Milestones />)
    for (const value of ['35', '12', '8', '24']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
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
    render(<Milestones />)
    for (const value of ['0', '0', '0', '0']) {
      expect(screen.getAllByText(value).length).toBeGreaterThan(0)
    }
    vi.unstubAllGlobals()
  })
})
