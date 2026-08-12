import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CounterBand } from './CounterBand'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('CounterBand', () => {
  it('renders four stat boxes with labels', () => {
    render(<CounterBand />)
    for (const label of ['Awards', 'Complete Projects', 'Happy Customers', 'Cups of coffee']) {
      expect(screen.getByText(label)).toBeInTheDocument()
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

    const { unmount } = render(<CounterBand />)
    await vi.advanceTimersByTimeAsync(1600)
    expect(screen.getByText('2500')).toBeInTheDocument()
    unmount()
  })

  it('starts immediately when IntersectionObserver is missing', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    const { unmount } = render(<CounterBand />)
    expect(screen.getByText('Awards')).toBeInTheDocument()
    unmount()
  })
})
