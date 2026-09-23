import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)

    // Navbar — "Modus" appears in navbar and footer
    const modusTexts = screen.getAllByText('Modus')
    expect(modusTexts.length).toBeGreaterThanOrEqual(2)

    // Hero
    expect(
      screen.getByRole('heading', { level: 1, name: /Let's Make your Interior Better/i }),
    ).toBeInTheDocument()

    // Services
    expect(screen.getByRole('heading', { name: /What We Do/i })).toBeInTheDocument()

    // About
    expect(screen.getByRole('heading', { name: /We design with/i })).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText(/Robert/)).toBeInTheDocument()

    // Gallery
    expect(screen.getByRole('heading', { name: /Our Work/i })).toBeInTheDocument()

    // Accordion
    expect(
      screen.getByRole('heading', { name: /A design with different vision point/i }),
    ).toBeInTheDocument()

    // CTA
    expect(
      screen.getByRole('heading', { name: /Let's discuss about your interior/i }),
    ).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('link', { name: /Component Dock/i })).toBeInTheDocument()
  })
})
