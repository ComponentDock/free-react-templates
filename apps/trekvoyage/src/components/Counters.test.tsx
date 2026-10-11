import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('falls back to the final figures when IntersectionObserver is unavailable', () => {
    render(<Counters />)

    for (const value of ['9,313', '8,492', '100', '120']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
    for (const label of ['# of Travels', '# of Clients', '# of Employees', '# of Countries']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('counts up on scroll, comma-separating the totals', () => {
    let frame = 0
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      frame += 1
      callback(performance.now() + frame * 100)
      return frame
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

    render(<Counters />)

    expect(screen.getByText('9,313')).toBeInTheDocument()
    expect(screen.getByText('# of Countries')).toBeInTheDocument()
    vi.unstubAllGlobals()
  })
})

class MockIntersectionObserver {
  callback: IntersectionObserverCallback
  root = null
  rootMargin = ''
  thresholds = []

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
}

afterEach(() => {
  vi.unstubAllGlobals()
})
