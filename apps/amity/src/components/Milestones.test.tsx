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
  it('renders the heading, paragraph, and final counter values without IntersectionObserver', () => {
    render(<Milestones />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /We love to help all the children/,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/After 15 years/)).toBeInTheDocument()
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.getByText('79')).toBeInTheDocument()
    expect(screen.getByText('253')).toBeInTheDocument()
    expect(screen.getByText('K')).toBeInTheDocument()
    expect(screen.getByText('Children helped')).toBeInTheDocument()
    expect(screen.getByText('Water wells')).toBeInTheDocument()
    expect(screen.getByText('Volunteeres')).toBeInTheDocument()
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
    render(<Milestones />)
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.getByText('79')).toBeInTheDocument()
    expect(screen.getByText('253')).toBeInTheDocument()
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
    expect(screen.getAllByText('0')).toHaveLength(3)
    vi.unstubAllGlobals()
  })
})
