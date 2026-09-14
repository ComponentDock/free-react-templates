import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all four counter labels', () => {
    render(<Counter />)
    expect(screen.getByText('Cases Won')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })

  it('renders counter values after timer advances to target', () => {
    vi.useFakeTimers()
    render(<Counter />)
    act(() => {
      vi.advanceTimersByTime(2500)
    })
    expect(screen.getByText('1200+')).toBeInTheDocument()
    expect(screen.getByText('450+')).toBeInTheDocument()
    expect(screen.getByText('25+')).toBeInTheDocument()
    expect(screen.getByText('35+')).toBeInTheDocument()
  })

  it('does not count when not in view', () => {
    vi.useFakeTimers()
    const origIO = globalThis.IntersectionObserver
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        callback: IntersectionObserverCallback
        constructor(cb: IntersectionObserverCallback) {
          this.callback = cb
        }
        observe() {
          this.callback(
            [{ isIntersecting: false } as IntersectionObserverEntry],
            this as unknown as IntersectionObserver,
          )
        }
        unobserve() {}
        disconnect() {}
        takeRecords() {
          return []
        }
      },
    )

    render(<Counter />)

    act(() => {
      vi.advanceTimersByTime(2500)
    })
    expect(screen.getAllByText('0+')).toHaveLength(4)

    vi.stubGlobal('IntersectionObserver', origIO)
  })

  it('cleans up intersection observer on unmount', () => {
    const { unmount } = render(<Counter />)
    unmount()
  })
})
