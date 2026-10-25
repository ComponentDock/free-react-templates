import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Counters } from './Counters'
import { counters } from '../data'
import { mockReducedMotion } from '../test/match-media'

interface FakeEntry {
  isIntersecting: boolean
  target: Element
}

describe('Counters', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('lists the four figures and their labels', () => {
    render(<Counters />)

    counters.forEach((counter) => {
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    })
  })

  it('renders the final figures immediately with reduced motion', async () => {
    mockReducedMotion()
    render(<Counters />)

    expect(await screen.findByText('90')).toBeInTheDocument()
    expect(screen.getByText('400')).toBeInTheDocument()
    expect(screen.getByText('31')).toBeInTheDocument()
    expect(screen.getByText('99')).toBeInTheDocument()
  })

  it('counts up when the band scrolls into view', () => {
    const fires: Array<(entries: FakeEntry[]) => void> = []

    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(callback: (entries: FakeEntry[]) => void) {
          fires.push(callback)
        }
        observe() {}
        unobserve() {}
        disconnect() {}
      },
    )

    const frames: FrameRequestCallback[] = []
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      frames.push(callback)
      return frames.length
    })
    vi.stubGlobal('cancelAnimationFrame', () => {})

    render(<Counters />)

    // Nothing has entered the viewport yet, so the figure is still zero.
    expect(screen.getAllByText('0')).toHaveLength(counters.length)

    // A band that has not scrolled into view leaves the count alone.
    act(() => {
      fires.forEach((fire) => fire([{ isIntersecting: false, target: document.body }]))
    })
    expect(screen.getAllByText('0')).toHaveLength(counters.length)

    act(() => {
      fires.forEach((fire) => fire([{ isIntersecting: true, target: document.body }]))
    })

    // Frame one sets the start time, frame two is past the 1400 ms tween.
    act(() => {
      frames.splice(0).forEach((frame) => frame(1000))
    })
    act(() => {
      frames.splice(0).forEach((frame) => frame(3000))
    })

    expect(screen.getByText('90')).toBeInTheDocument()
    expect(screen.getByText('400')).toBeInTheDocument()
  })
})
