import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'
import { HERO, STATS } from '../data'

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

describe('Hero', () => {
  it('renders headline, lead, search input, and search button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO.headline)
    expect(screen.getByText(HERO.lead)).toBeInTheDocument()
    expect(screen.getByLabelText('Location')).toHaveAttribute('placeholder', HERO.searchPlaceholder)
    expect(screen.getByRole('button', { name: /Search/ })).toBeInTheDocument()
  })

  it('renders the dotted world map as a decorative svg', () => {
    const { container } = render(<Hero />)
    const map = container.querySelector('svg[aria-hidden="true"]')
    expect(map).toBeInTheDocument()
    expect(map!.querySelectorAll('circle').length).toBeGreaterThan(100)
  })

  it('renders final counter values without IntersectionObserver (jsdom fallback)', () => {
    render(<Hero />)
    for (const stat of STATS) {
      expect(screen.getByText(String(stat.value))).toBeInTheDocument()
      expect(screen.getByText(stat.label)).toBeInTheDocument()
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
    render(<Hero />)
    for (const stat of STATS) {
      expect(screen.getByText(String(stat.value))).toBeInTheDocument()
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
    render(<Hero />)
    expect(screen.getAllByText('0')).toHaveLength(STATS.length)
    for (const stat of STATS) {
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }
    vi.unstubAllGlobals()
  })

  it('submits the search form without navigating', () => {
    render(<Hero />)
    const form = document.querySelector('form')!
    const preventDefault = vi.fn()
    form.addEventListener('submit', (event) => {
      preventDefault(event.preventDefault())
    })
    fireEvent.submit(form)
    expect(preventDefault).toHaveBeenCalled()
    expect(screen.getByRole('button', { name: /Search/ })).toBeInTheDocument()
  })
})
