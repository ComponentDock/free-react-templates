import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Counters } from './Counters'
import { COUNTER_PHOTO, COUNTERS } from '../lib/site'
import { mockMatchMedia } from '../test/match-media'

/** The frame scheduler the page drives its roll-up with, captured so a test can step it by hand. */
function installFrames() {
  const frames: FrameRequestCallback[] = []
  const cancelled: number[] = []

  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
    frames.push(callback)

    return frames.length
  })
  vi.stubGlobal('cancelAnimationFrame', (handle: number) => {
    cancelled.push(handle)
  })

  return {
    cancelled,
    /** Hands the queued callbacks one timestamp, the way the browser would. */
    step(now: number) {
      const queued = frames.splice(0, frames.length)

      act(() => {
        for (const callback of queued) {
          callback(now)
        }
      })
    },
  }
}

describe('Counters', () => {
  const observers: IntersectionObserverCallback[] = []
  let frames: ReturnType<typeof installFrames>

  beforeEach(() => {
    observers.length = 0
    frames = installFrames()

    class MockIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        observers.push(callback)
      }
      observe = vi.fn()
      disconnect = vi.fn()
      unobserve = vi.fn()
      takeRecords = vi.fn(() => [])
    }

    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  function observe(isIntersecting: boolean) {
    act(() => {
      for (const callback of observers) {
        callback([{ isIntersecting } as IntersectionObserverEntry], {} as IntersectionObserver)
      }
    })
  }

  it('renders the design own four figures on the photo band', () => {
    const { container } = render(<Counters />)

    expect(COUNTERS.map((counter) => counter.label)).toEqual([
      'Photos',
      'Happy Couples',
      'Toasts',
      'Wedding Cakes',
    ])
    expect(screen.getByText('Photos')).toBeInTheDocument()
    expect(container.querySelectorAll('svg')).toHaveLength(4)

    const photo = container.querySelector('img')

    expect(photo).toHaveAttribute('src', COUNTER_PHOTO)
    expect(photo).toHaveAttribute('loading', 'lazy')
    expect(photo).toHaveAttribute('alt', '')
  })

  it('stands at zero until the band arrives, and tolerates an empty observation', () => {
    render(<Counters />)

    expect(screen.getAllByText('0')).toHaveLength(4)

    act(() => {
      for (const callback of observers) {
        callback([], {} as IntersectionObserver)
      }
    })

    expect(screen.getAllByText('0')).toHaveLength(4)

    observe(false)

    expect(screen.getAllByText('0')).toHaveLength(4)
  })

  it('rolls each figure up to the design value once the band is in view', () => {
    render(<Counters />)

    observe(true)
    frames.step(0)
    frames.step(700)

    expect(screen.getAllByText('4183')).toHaveLength(1)
    expect(screen.getAllByText('284')).toHaveLength(1)

    frames.step(1400)

    expect(screen.getByText('8365')).toBeInTheDocument()
    expect(screen.getByText('568')).toBeInTheDocument()
    expect(screen.getByText('849')).toBeInTheDocument()
    expect(screen.getByText('2574')).toBeInTheDocument()
  })

  it('cancels the pending frame when the band leaves the document', () => {
    const { unmount } = render(<Counters />)

    observe(true)
    unmount()

    expect(frames.cancelled).toHaveLength(COUNTERS.length)
    expect(frames.cancelled.every((handle) => typeof handle === 'number')).toBe(true)
  })

  it('shows each value at once when the visitor asked for reduced motion', () => {
    mockMatchMedia(true)
    render(<Counters />)

    expect(screen.queryAllByText('0')).toHaveLength(0)
    expect(screen.getByText('8365')).toBeInTheDocument()
    expect(frames.cancelled).toHaveLength(0)
  })
})
