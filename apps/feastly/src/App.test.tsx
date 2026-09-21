import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections of the template', () => {
    render(<App />)

    // Navbar — multiple "Feastly" text nodes (logo in navbar + footer)
    expect(screen.getAllByText('Feastly').length).toBeGreaterThanOrEqual(1)

    // Banner
    expect(screen.getByText(/Discover the/)).toBeInTheDocument()

    // Welcome
    expect(screen.getByText(/to Feastly/)).toBeInTheDocument()

    // Menu
    expect(screen.getByText(/We serve/)).toBeInTheDocument()

    // Reservation CTA
    expect(screen.getByText(/Natural ingredients/)).toBeInTheDocument()

    // Specials
    expect(screen.getByText(/special/)).toBeInTheDocument()

    // Testimonials
    expect(screen.getByRole('heading', { name: /Customer says/i })).toBeInTheDocument()

    // Updates
    expect(screen.getByRole('heading', { name: /Our food update/ })).toBeInTheDocument()

    // Booking form
    expect(screen.getByRole('heading', { name: /book.*your.*table/i })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)

    expect(document.title).toBe('Feastly — Restaurant Landing Template')
  })
})
