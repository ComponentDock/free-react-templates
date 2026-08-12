import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { About } from './About'
import { COUNTERS } from '../data'

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

describe('About', () => {
  it('renders the About Us heading, video block and final counter values (jsdom fallback)', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()

    for (const counter of COUNTERS) {
      expect(screen.getByText(`${counter.value}${counter.suffix}`)).toBeInTheDocument()
      expect(screen.getByText(counter.caption)).toBeInTheDocument()
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

    render(<About />)
    for (const counter of COUNTERS) {
      expect(screen.getByText(`${counter.value}${counter.suffix}`)).toBeInTheDocument()
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
    render(<About />)
    /* Every counter stays at its starting zero, so all four share "0+". */
    expect(screen.getAllByText('0+')).toHaveLength(COUNTERS.length)
    for (const counter of COUNTERS) {
      expect(screen.getByText(counter.caption)).toBeInTheDocument()
    }
    vi.unstubAllGlobals()
  })

  it('opens and closes the video modal', () => {
    render(<About />)

    fireEvent.click(screen.getByRole('button', { name: 'Play video' }))
    expect(screen.getByRole('dialog', { name: 'Video' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog', { name: 'Video' })).not.toBeInTheDocument()
  })

  it('closes the video modal when the backdrop is clicked', () => {
    render(<About />)
    fireEvent.click(screen.getByRole('button', { name: 'Play video' }))
    fireEvent.click(screen.getByRole('dialog', { name: 'Video' }))
    expect(screen.queryByRole('dialog', { name: 'Video' })).not.toBeInTheDocument()
  })
})
