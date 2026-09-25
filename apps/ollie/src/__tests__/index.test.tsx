import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

// Mock IntersectionObserver — simulate element being intersecting so counters run
beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      private cb: IntersectionObserverCallback
      constructor(cb: IntersectionObserverCallback) {
        this.cb = cb
      }
      observe(el: Element) {
        this.cb(
          [{ isIntersecting: true, target: el } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver,
        )
      }
      disconnect() {}
      unobserve() {}
    },
  )
})

describe('index', () => {
  it('renders the root app with all major sections', () => {
    render(<App />)

    // Verify the app renders with the correct title
    expect(document.title).toBe('Ollie — Skateboarding Personal Site')

    // Verify major landmarks — Navbar uses <nav>, not <header> so no banner role
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Verify section headings exist
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    const h2s = screen.getAllByRole('heading', { level: 2 })
    expect(h2s.length).toBeGreaterThanOrEqual(10)
  })
})
