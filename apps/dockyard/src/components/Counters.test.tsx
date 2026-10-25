import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Counters } from './Counters'
import { mockReducedMotion } from '../test/match-media'

class MockObserver {
  callback: IntersectionObserverCallback
  disconnected = false

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

  disconnect() {
    this.disconnected = true
  }

  unobserve() {}

  takeRecords() {
    return []
  }

  root = null
  rootMargin = ''
  thresholds = []
}

describe('Counters', () => {
  it('shows the final figures with a thousands separator when no observer exists', () => {
    render(<Counters />)

    for (const value of ['19+', '2,332+', '231+', '827+']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
    expect(screen.getByText('Years in service')).toBeInTheDocument()
    expect(screen.getByLabelText('Dockyard in numbers')).toBeInTheDocument()
  })

  it('counts up from zero once the band intersects', () => {
    let timestamp = 0
    vi.stubGlobal('IntersectionObserver', MockObserver)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      timestamp += 500
      callback(timestamp)
      return timestamp
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())

    render(<Counters />)

    expect(screen.getByText('19+')).toBeInTheDocument()
    expect(screen.getByText('2,332+')).toBeInTheDocument()
    vi.unstubAllGlobals()
  })

  it('stays at zero when nothing intersects', () => {
    vi.stubGlobal(
      'IntersectionObserver',
      class extends MockObserver {
        override observe() {
          this.callback(
            [{ isIntersecting: false } as IntersectionObserverEntry],
            this as unknown as IntersectionObserver,
          )
        }
      },
    )

    render(<Counters />)

    expect(screen.getAllByText('0+')).toHaveLength(4)
    vi.unstubAllGlobals()
  })

  it('renders the final figures immediately under reduced motion', () => {
    mockReducedMotion()
    const observe = vi.fn()
    vi.stubGlobal(
      'IntersectionObserver',
      class extends MockObserver {
        override observe() {
          observe()
        }
      },
    )

    render(<Counters />)

    expect(screen.getByText('2,332+')).toBeInTheDocument()
    expect(observe).not.toHaveBeenCalled()
    vi.unstubAllGlobals()
  })
})
