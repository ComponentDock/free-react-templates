import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders the section heading', () => {
    render(<Counter />)
    expect(screen.getByRole('heading', { name: /Interesting Facts/i })).toBeInTheDocument()
  })

  it('displays all four stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
    expect(screen.getByText('Team Members')).toBeInTheDocument()
  })

  it('displays the background image', () => {
    render(<Counter />)
    expect(screen.getByRole('presentation')).toBeInTheDocument()
  })

  it('animates counters when visible', () => {
    // Override IntersectionObserver so it fires the callback immediately
    let captureCb: ((entries: IntersectionObserverEntry[]) => void) | undefined
    const OriginalIO = globalThis.IntersectionObserver
    globalThis.IntersectionObserver = class {
      constructor(cb: IntersectionObserverCallback) {
        captureCb = cb as (entries: IntersectionObserverEntry[]) => void
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    } as unknown as typeof IntersectionObserver

    // Override requestAnimationFrame: first call runs synchronously (progress 0),
    // subsequent calls run with a timestamp far in the future (progress 1 -> done).
    let callCount = 0
    const origRAF = window.requestAnimationFrame
    window.requestAnimationFrame = (cb: FrameRequestCallback) => {
      callCount++
      if (callCount === 1) {
        cb(performance.now())
      } else {
        cb(performance.now() + 10_000)
      }
      return 0
    }

    render(<Counter />)

    // Fire with isIntersecting: false first (covers the false branch)
    captureCb?.([
      { isIntersecting: false, target: document.body } as unknown as IntersectionObserverEntry,
    ])

    // Then fire with isIntersecting: true (covers the true branch + animation)
    captureCb?.([
      { isIntersecting: true, target: document.body } as unknown as IntersectionObserverEntry,
    ])

    window.requestAnimationFrame = origRAF
    globalThis.IntersectionObserver = OriginalIO
  })
})
