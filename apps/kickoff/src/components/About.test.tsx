import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('About', () => {
  it('renders the heading, copy, and four counter blocks', () => {
    render(<About />)

    expect(screen.getByRole('heading', { name: 'About the Kickoff Team' })).toBeInTheDocument()
    expect(screen.getAllByText(/Far far away|A small river/)).toHaveLength(2)
    for (const label of ['Game Played', 'Coaches', 'Trophies', 'Members']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('80')).toBeInTheDocument()
  })

  it('counts up when the section enters the viewport', async () => {
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

    const { unmount } = render(<About />)
    // Mid-count-up the eased display is below the target (so the full value
    // disappears), then it reaches the target at the end of the ~7s run.
    await vi.advanceTimersByTimeAsync(3500)
    expect(screen.queryByText('100')).not.toBeInTheDocument()
    await vi.advanceTimersByTimeAsync(4000)
    expect(screen.getByText('100')).toBeInTheDocument()
    unmount()
  })

  it('renders the counters when IntersectionObserver is missing', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    const { unmount } = render(<About />)
    expect(screen.getByText('Game Played')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    unmount()
  })
})
