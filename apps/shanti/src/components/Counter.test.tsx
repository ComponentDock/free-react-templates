import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('Counter', () => {
  it('renders four statistics on a dark band', () => {
    render(<Counter />)
    expect(screen.getByText('5000')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('4560')).toBeInTheDocument()
    expect(screen.getByText('Yoga Workshops')).toBeInTheDocument()
    expect(screen.getByText('570')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('900')).toBeInTheDocument()
    expect(screen.getByText('Lesson Conducted')).toBeInTheDocument()
  })

  it('counts up when the band enters the viewport', async () => {
    vi.useFakeTimers({ toFake: ['requestAnimationFrame', 'cancelAnimationFrame', 'performance'] })
    class FakeObserver {
      private callback: IntersectionObserverCallback
      constructor(callback: IntersectionObserverCallback) {
        this.callback = callback
      }
      observe() {
        // Fire an empty entry first (covers the missing/blank entry path),
        // then the intersecting entry that triggers the count-up.
        this.callback([] as unknown as IntersectionObserverEntry[], {} as IntersectionObserver)
        this.callback(
          [{ isIntersecting: true } as IntersectionObserverEntry],
          {} as IntersectionObserver,
        )
      }
      disconnect() {}
    }
    vi.stubGlobal('IntersectionObserver', FakeObserver)

    const { unmount } = render(<Counter />)
    await vi.advanceTimersByTimeAsync(1600)
    expect(screen.getByText('5000')).toBeInTheDocument()
    unmount()
  })

  it('renders the stats without an observer when IntersectionObserver is missing', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    const { unmount } = render(<Counter />)
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    unmount()
  })
})
