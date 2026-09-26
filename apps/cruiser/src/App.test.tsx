import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

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

describe('App', () => {
  it('composes all sections with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Cruiser — Skateboarding Personal Site')

    // Navbar — Cruiser link appears in navbar and footer, use getAllByRole
    const cruiserLinks = screen.getAllByRole('link', { name: 'Cruiser' })
    expect(cruiserLinks.length).toBeGreaterThanOrEqual(1)

    // Main content
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    // Hero heading (h1)
    expect(
      screen.getByRole('heading', { level: 1, name: /Ride Beyond Limits/ }),
    ).toBeInTheDocument()

    // Services heading
    expect(screen.getByRole('heading', { level: 2, name: 'What We Offer' })).toBeInTheDocument()

    // Performance headings
    expect(
      screen.getByRole('heading', { level: 2, name: 'Street Performance' }),
    ).toBeInTheDocument()

    // Mentor headings
    expect(screen.getByRole('heading', { level: 2, name: 'Personal Coaching' })).toBeInTheDocument()

    // About heading
    expect(screen.getByRole('heading', { level: 2, name: 'About Cruiser' })).toBeInTheDocument()

    // Team heading
    expect(screen.getByRole('heading', { level: 2, name: 'Meet Our Team' })).toBeInTheDocument()

    // Pricing heading
    expect(screen.getByRole('heading', { level: 2, name: 'Pricing Plans' })).toBeInTheDocument()

    // FAQ heading
    expect(screen.getByRole('heading', { level: 2, name: 'Frequently Asked' })).toBeInTheDocument()

    // Blog heading
    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()

    // Contact heading — component renders "Get In Touch" with uppercase
    expect(screen.getByRole('heading', { level: 2, name: 'Get In Touch' })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
