import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { mockMatchMedia, resetMatchMedia } from '../test/media'
import { CounterBand } from './CounterBand'

class Observer {
  static last: Observer | null = null
  static intersects = true
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    Observer.last = this
  }
  observe() {
    this.callback(
      [{ isIntersecting: Observer.intersects } as IntersectionObserverEntry],
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

afterEach(() => {
  Observer.last = null
  Observer.intersects = true
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
  resetMatchMedia()
})

describe('CounterBand', () => {
  it('renders the settled strings when no observer exists', () => {
    mockMatchMedia(false)
    render(<CounterBand />)

    expect(screen.getByText('9 avg')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getAllByText('0')).toHaveLength(1)
    expect(screen.getByText('31 sec')).toBeInTheDocument()
    expect(screen.getByText('Average circle size')).toBeInTheDocument()
    expect(screen.getByText('Chronological feed')).toBeInTheDocument()
    expect(screen.getByText('Ads, ever')).toBeInTheDocument()
    expect(screen.getByText('Median export time')).toBeInTheDocument()
  })

  it('counts up from zero when the band scrolls into view', () => {
    mockMatchMedia(false)
    let timestamp = 0
    vi.stubGlobal('IntersectionObserver', Observer)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      timestamp += 100
      callback(timestamp)
      return timestamp
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())

    render(<CounterBand />)

    expect(screen.getByText('9 avg')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('31 sec')).toBeInTheDocument()
  })

  it('stays at zero while the band is below the fold', () => {
    mockMatchMedia(false)
    Observer.intersects = false
    vi.stubGlobal('IntersectionObserver', Observer)

    render(<CounterBand />)

    expect(screen.getByText('0 avg')).toBeInTheDocument()
    expect(screen.getByText('0%')).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('0 sec')).toBeInTheDocument()
    expect(screen.queryByText('9 avg')).toBeNull()
  })

  it('prints the final strings immediately under reduced motion', () => {
    mockMatchMedia(true)
    vi.stubGlobal('IntersectionObserver', Observer)
    vi.stubGlobal('requestAnimationFrame', vi.fn())

    render(<CounterBand />)

    expect(screen.getByText('9 avg')).toBeInTheDocument()
    expect(screen.getByText('31 sec')).toBeInTheDocument()
  })

  it('prints the final strings when no frame loop is available', () => {
    mockMatchMedia(false)
    vi.stubGlobal('IntersectionObserver', Observer)
    vi.stubGlobal('requestAnimationFrame', undefined)

    render(<CounterBand />)

    expect(screen.getByText('9 avg')).toBeInTheDocument()
    expect(screen.getByText('31 sec')).toBeInTheDocument()
  })
})
