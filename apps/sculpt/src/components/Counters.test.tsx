import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'
import { STATS } from '../data'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('Counters', () => {
  it('renders four statistics with final values and labels', () => {
    render(<Counters />)
    for (const stat of STATS) {
      expect(screen.getByText(String(stat.value))).toBeInTheDocument()
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }
  })

  it('counts up when the band enters the viewport', async () => {
    vi.useFakeTimers({ toFake: ['requestAnimationFrame', 'cancelAnimationFrame', 'performance'] })
    class FakeObserver {
      private callback: IntersectionObserverCallback
      constructor(callback: IntersectionObserverCallback) {
        this.callback = callback
      }
      observe() {
        this.callback([] as unknown as IntersectionObserverEntry[], {} as IntersectionObserver)
        this.callback(
          [{ isIntersecting: true } as IntersectionObserverEntry],
          {} as IntersectionObserver,
        )
      }
      disconnect() {}
    }
    vi.stubGlobal('IntersectionObserver', FakeObserver)

    const { unmount } = render(<Counters />)
    await vi.advanceTimersByTimeAsync(1600)
    expect(screen.getByText('1500')).toBeInTheDocument()
    unmount()
  })

  it('renders the stats without an observer when IntersectionObserver is missing', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    const { unmount } = render(<Counters />)
    expect(screen.getByText('Clients')).toBeInTheDocument()
    unmount()
  })
})
