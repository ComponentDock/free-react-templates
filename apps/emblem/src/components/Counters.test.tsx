import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Counters } from './Counters'
import { counters } from '../data'

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe('Counters', () => {
  it('renders each counter with icon, value and caption', () => {
    render(<Counters />)
    for (const counter of counters) {
      expect(screen.getByText(counter.caption)).toBeInTheDocument()
      expect(screen.getByText(new RegExp(counter.value))).toBeInTheDocument()
    }
  })

  it('falls back to the final value when IntersectionObserver is unavailable', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    render(<Counters />)
    for (const counter of counters) {
      expect(screen.getByText(counter.value)).toBeInTheDocument()
    }
  })

  it('animates the value when the counter scrolls into view', () => {
    const callbacks: IntersectionObserverCallback[] = []
    class MockObserver {
      constructor(readonly callback: IntersectionObserverCallback) {
        callbacks.push(callback)
      }
      observe() {}
      disconnect() {}
    }
    vi.stubGlobal('IntersectionObserver', MockObserver)
    // Drive rAF frames manually so the animation body (startRef init, progress
    // math, re-schedule while progress < 1) is covered deterministically.
    const frames: FrameRequestCallback[] = []
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
      frames.push(cb)
      return frames.length
    })
    render(<Counters />)
    // A non-intersecting entry must not start the animation.
    act(() => {
      for (const callback of callbacks) {
        callback(
          [{ isIntersecting: false } as IntersectionObserverEntry],
          {} as IntersectionObserver,
        )
      }
    })
    expect(frames.length).toBe(0)
    // Every counter registers an observer; simulate it intersecting.
    act(() => {
      for (const callback of callbacks) {
        callback(
          [{ isIntersecting: true } as IntersectionObserverEntry],
          {} as IntersectionObserver,
        )
      }
    })
    // Run the first animation frame (t=0 → progress 0 → schedules next).
    act(() => {
      const queued = frames.splice(0)
      for (const frame of queued) {
        frame(0)
      }
    })
    expect(frames.length).toBeGreaterThan(0)
    // Run frames until the animation completes (progress clamps at 1).
    act(() => {
      let t = 500
      while (frames.length > 0) {
        const queued = frames.splice(0)
        for (const frame of queued) {
          frame(t)
        }
        t += 500
      }
    })
    expect(screen.getByText(counters[0]!.value)).toBeInTheDocument()
  })
})
