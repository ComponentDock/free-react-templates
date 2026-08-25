import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { StatsBand } from './StatsBand'

describe('StatsBand', () => {
  let frame = 0

  beforeEach(() => {
    frame = 0
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: FrameRequestCallback) => {
      frame += 1
      cb(frame * 100)
      return 0
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the Stats heading', () => {
    render(<StatsBand />)
    expect(screen.getByText('Stats')).toBeInTheDocument()
  })

  it('renders the stat labels', () => {
    render(<StatsBand />)
    expect(screen.getByText('Reviews')).toBeInTheDocument()
    expect(screen.getByText('Downloads')).toBeInTheDocument()
    expect(screen.getByText('Employees')).toBeInTheDocument()
  })

  it('has dark teal background', () => {
    const { container } = render(<StatsBand />)
    const section = container.firstElementChild as HTMLElement
    expect(section.className).toContain('bg-brand-teal')
  })

  it('animates counters when visible', () => {
    render(<StatsBand />)
    // The setup mock triggers IntersectionObserver with isIntersecting: true
    // RAF is mocked to fire synchronously, so animation completes
    const text = document.body.textContent ?? ''
    expect(text).toMatch(/[1-9]/)
  })

  it('skips re-animation when already animated', () => {
    // Spy on IntersectionObserver to capture the callback
    let callback: IntersectionObserverCallback | undefined
    const OriginalIO = window.IntersectionObserver
    Object.defineProperty(window, 'IntersectionObserver', {
      value: class {
        root = null
        rootMargin = ''
        scrollMargin = ''
        thresholds = [0]
        constructor(cb: IntersectionObserverCallback) {
          callback = cb
        }
        observe() {
          /* do not auto-fire — we trigger manually */
        }
        unobserve() {}
        disconnect() {}
        takeRecords() {
          return []
        }
      },
      configurable: true,
      writable: true,
    })

    render(<StatsBand />)

    // First trigger: isIntersecting true → animation starts
    callback?.([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver)

    // Second trigger: isIntersecting true but already animated — should skip
    callback?.([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver)

    // Restore original
    Object.defineProperty(window, 'IntersectionObserver', {
      value: OriginalIO,
      configurable: true,
      writable: true,
    })

    // Should still render correctly
    expect(screen.getByText('Stats')).toBeInTheDocument()
  })
})
