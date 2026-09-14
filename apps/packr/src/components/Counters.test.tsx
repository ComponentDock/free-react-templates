import { describe, expect, it, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  beforeEach(() => {
    // Default: observer fires with isIntersecting: true
    ;(globalThis as any).IntersectionObserver = class {
      callback: IntersectionObserverCallback
      constructor(cb: IntersectionObserverCallback) {
        this.callback = cb
      }
      observe() {
        this.callback([{ isIntersecting: true } as IntersectionObserverEntry], this as any)
      }
      unobserve() {}
      disconnect() {}
    }
  })

  it('renders the section heading and description', () => {
    render(<Counters />)
    expect(screen.getByRole('heading', { name: /fun facts/i })).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden/i)).toBeInTheDocument()
  })

  it('renders all three counter labels', () => {
    render(<Counters />)
    expect(screen.getByText('Coffee')).toBeInTheDocument()
    expect(screen.getByText('Done Projects')).toBeInTheDocument()
    expect(screen.getByText('Subscribers')).toBeInTheDocument()
  })

  it('shows target values when section becomes visible', () => {
    render(<Counters />)
    expect(screen.getByText('456')).toBeInTheDocument()
    expect(screen.getByText('899')).toBeInTheDocument()
    expect(screen.getByText('2000')).toBeInTheDocument()
  })

  it('shows zero when section is not intersecting', () => {
    ;(globalThis as any).IntersectionObserver = class {
      callback: IntersectionObserverCallback
      constructor(cb: IntersectionObserverCallback) {
        this.callback = cb
      }
      observe() {
        this.callback([{ isIntersecting: false } as IntersectionObserverEntry], this as any)
      }
      unobserve() {}
      disconnect() {}
    }

    render(<Counters />)
    const zeros = screen.getAllByText('0')
    expect(zeros).toHaveLength(3)
  })

  it('handles missing section element gracefully', () => {
    const original = document.getElementById
    document.getElementById = vi.fn().mockReturnValue(null)
    ;(globalThis as any).IntersectionObserver = class {
      callback: IntersectionObserverCallback
      constructor(cb: IntersectionObserverCallback) {
        this.callback = cb
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    }

    render(<Counters />)
    expect(screen.getByRole('heading', { name: /fun facts/i })).toBeInTheDocument()
    document.getElementById = original
  })
})
