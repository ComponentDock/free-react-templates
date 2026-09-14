import { render, screen, act } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Stats } from './Stats'

describe('Stats', () => {
  const callbacks: IntersectionObserverCallback[] = []

  beforeEach(() => {
    callbacks.length = 0

    class MockIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        callbacks.push(callback)
      }
      observe = vi.fn()
      disconnect = vi.fn()
      unobserve = vi.fn()
    }
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    callbacks.length = 0
  })

  it('renders 4 stat items', () => {
    render(<Stats />)
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Awards Received')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee')).toBeInTheDocument()
  })

  it('starts at zero before intersection', () => {
    render(<Stats />)
    const zeros = screen.getAllByText('0')
    expect(zeros.length).toBe(4)
  })

  it('shows target values when element is in view', () => {
    render(<Stats />)

    act(() => {
      for (const cb of callbacks) {
        cb([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver)
      }
    })

    expect(screen.getByText('213')).toBeInTheDocument()
    expect(screen.getByText('179')).toBeInTheDocument()
    expect(screen.getByText('35')).toBeInTheDocument()
    expect(screen.getByText('2319')).toBeInTheDocument()
  })

  it('cleans up observer on unmount', () => {
    const { unmount } = render(<Stats />)
    unmount()
  })

  it('does not count up when not intersecting', () => {
    render(<Stats />)

    act(() => {
      for (const cb of callbacks) {
        cb([{ isIntersecting: false } as IntersectionObserverEntry], {} as IntersectionObserver)
      }
    })

    const zeros = screen.getAllByText('0')
    expect(zeros.length).toBe(4)
  })
})
