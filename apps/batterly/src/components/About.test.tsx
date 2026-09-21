import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { About } from './About'

let observerCallback: IntersectionObserverCallback | undefined

beforeEach(() => {
  observerCallback = undefined
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe = vi.fn()
      disconnect = vi.fn()
      constructor(cb: IntersectionObserverCallback) {
        observerCallback = cb
      }
    },
  )
})

describe('About', () => {
  it('renders section heading and subtitle', () => {
    render(<About />)
    expect(screen.getByText('About Cake shop')).toBeInTheDocument()
    expect(screen.getByText('Cakes and bakes from the house of Queens!')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/Every great celebration deserves a great cake/)).toBeInTheDocument()
  })

  it('renders all three progress bars', () => {
    render(<About />)
    expect(screen.getByText('Cake design')).toBeInTheDocument()
    expect(screen.getByText('Cake Class')).toBeInTheDocument()
    expect(screen.getByText('Cake Recipes')).toBeInTheDocument()
  })

  it('displays correct percentage values', () => {
    render(<About />)
    expect(screen.getByText('95%')).toBeInTheDocument()
    expect(screen.getByText('80%')).toBeInTheDocument()
    expect(screen.getByText('90%')).toBeInTheDocument()
  })

  it('sets up IntersectionObserver', () => {
    render(<About />)
    expect(observerCallback).toBeDefined()
  })

  it('fills progress bars when observed', () => {
    render(<About />)
    act(() => {
      observerCallback!(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })
    // After intersection, the bars should have width set via style
    const bars = document.querySelectorAll('[style*="width"]')
    expect(bars.length).toBeGreaterThanOrEqual(1)
  })

  it('does not fill when not intersecting', () => {
    render(<About />)
    act(() => {
      observerCallback!(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    })
    // Width should still be 0
    const bars = document.querySelectorAll('[style*="width: 0%"]')
    expect(bars.length).toBeGreaterThanOrEqual(1)
  })
})
