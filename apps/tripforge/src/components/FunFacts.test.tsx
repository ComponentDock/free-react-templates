import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { COUNTERS } from '../data/content'
import { FunFacts } from './FunFacts'

class MockObserver {
  static entries: IntersectionObserverEntry[] = []
  static instances: MockObserver[] = []
  callback: IntersectionObserverCallback
  observed = 0
  disconnected = 0
  root = null
  rootMargin = ''
  thresholds: number[] = []

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    MockObserver.instances.push(this)
  }

  observe() {
    this.observed += 1
    this.callback(MockObserver.entries, this as unknown as IntersectionObserver)
  }

  disconnect() {
    this.disconnected += 1
  }

  unobserve() {}

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

function stubAnimation(timestampStep: number) {
  let timestamp = 0
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
    timestamp += timestampStep
    callback(timestamp)
    return timestamp
  })
  vi.stubGlobal('cancelAnimationFrame', vi.fn())
}

afterEach(() => {
  vi.unstubAllGlobals()
  MockObserver.instances = []
  MockObserver.entries = []
})

describe('FunFacts', () => {
  it('renders the final counter values immediately without IntersectionObserver', () => {
    render(<FunFacts />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Some fun facts')
    expect(screen.getByText('More than 100,000 websites hosted')).toBeInTheDocument()
    for (const counter of COUNTERS) {
      expect(screen.getByText(String(counter.value))).toBeInTheDocument()
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
  })

  it('counts up from zero when the band scrolls into view', () => {
    MockObserver.entries = [
      { isIntersecting: false } as IntersectionObserverEntry,
      { isIntersecting: true } as IntersectionObserverEntry,
    ]
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: false })),
    )
    vi.stubGlobal('IntersectionObserver', MockObserver)
    stubAnimation(400)

    render(<FunFacts />)

    expect(MockObserver.instances).toHaveLength(COUNTERS.length)
    expect(MockObserver.instances.every((observer) => observer.observed === 1)).toBe(true)
    for (const counter of COUNTERS) {
      expect(screen.getByText(String(counter.value))).toBeInTheDocument()
    }
  })

  it('skips the count-up when the visitor prefers reduced motion', () => {
    MockObserver.entries = [{ isIntersecting: true } as IntersectionObserverEntry]
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: true })),
    )
    vi.stubGlobal('IntersectionObserver', MockObserver)
    stubAnimation(400)

    render(<FunFacts />)

    expect(MockObserver.instances).toHaveLength(0)
    for (const counter of COUNTERS) {
      expect(screen.getByText(String(counter.value))).toBeInTheDocument()
    }
  })

  it('keeps the counters at zero while the band stays off screen', () => {
    MockObserver.entries = [{ isIntersecting: false } as IntersectionObserverEntry]
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: false })),
    )
    vi.stubGlobal('IntersectionObserver', MockObserver)
    stubAnimation(400)

    render(<FunFacts />)

    expect(MockObserver.instances).toHaveLength(COUNTERS.length)
    expect(screen.getAllByText('0')).toHaveLength(COUNTERS.length)
  })
})
