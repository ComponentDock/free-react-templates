import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections in order', () => {
    render(<App />)

    // Navbar — use getAllByRole since navbar + footer both have "Netforge" link
    const netforgeLinks = screen.getAllByRole('link', { name: 'Netforge' })
    expect(netforgeLinks.length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

    // Services
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()

    // About
    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us' })).toBeInTheDocument()

    // Projects
    expect(screen.getByRole('heading', { level: 2, name: 'Our Projects' })).toBeInTheDocument()

    // Testimonials
    expect(screen.getByRole('heading', { level: 2, name: 'What Clients Say' })).toBeInTheDocument()

    // FAQ
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    // Blog
    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()

    // Contact
    expect(screen.getByRole('heading', { level: 2, name: 'Get In Touch' })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Netforge — IT Company Template')
  })
})
