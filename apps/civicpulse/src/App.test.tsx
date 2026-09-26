import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe = vi.fn()
      disconnect = vi.fn()
      constructor() {}
    },
  )
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('CivicPulse — Political Party Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)

    // TopBar + Footer social links
    expect(screen.getAllByRole('link', { name: 'Facebook' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Twitter' }).length).toBeGreaterThanOrEqual(1)

    // Navbar
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    // Main content
    expect(screen.getByRole('main')).toBeInTheDocument()

    // Hero
    expect(
      screen.getByRole('heading', { level: 1, name: /Support Our Party/i }),
    ).toBeInTheDocument()

    // Countdown
    expect(
      screen.getByRole('heading', { name: /Election is knocking at door/i }),
    ).toBeInTheDocument()

    // Services
    expect(
      screen.getByRole('heading', { name: /What we Offer to our Supporters/i }),
    ).toBeInTheDocument()

    // About
    expect(
      screen.getByRole('heading', { name: /Who we are to Serve the nation/i }),
    ).toBeInTheDocument()

    // Gallery
    expect(screen.getByRole('heading', { name: /Our Gallery Archive/i })).toBeInTheDocument()

    // Counter
    expect(screen.getByText('Projects')).toBeInTheDocument()

    // Feedback
    expect(screen.getByRole('heading', { name: /What People Say About Us/i })).toBeInTheDocument()

    // Blog
    expect(screen.getByRole('heading', { name: /Latest From Our Blog/i })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
