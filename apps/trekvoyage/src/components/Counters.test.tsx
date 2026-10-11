import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Counters } from './Counters'

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
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

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

  it('counts up from zero when the band scrolls into view', () => {
    vi.useFakeTimers()
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

    render(<Counters />)
    expect(screen.getAllByText('0')).toHaveLength(4)

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.queryByText('9,313')).toBeNull()

    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(screen.getByText('9,313')).toBeInTheDocument()
    expect(screen.getByText('8,492')).toBeInTheDocument()
    expect(screen.getByText('120')).toBeInTheDocument()
  })
})
