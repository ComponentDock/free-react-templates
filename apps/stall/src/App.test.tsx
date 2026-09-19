import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Stall — Ecommerce Store Template')

    // TopBar
    expect(screen.getAllByText('+1 234 567 890').length).toBeGreaterThanOrEqual(1)

    // Navbar
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    // Main content
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Shop With Us')

    // Products
    expect(screen.getByRole('heading', { level: 2, name: 'Our Products' })).toBeInTheDocument()

    // Newsletter
    expect(
      screen.getByRole('heading', { level: 2, name: 'Get Notified on Each Updates' }),
    ).toBeInTheDocument()

    // Featured Products
    expect(screen.getByRole('heading', { level: 2, name: 'Featured Products' })).toBeInTheDocument()

    // About
    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us' })).toBeInTheDocument()

    // Team
    expect(screen.getByRole('heading', { level: 2, name: 'Our Team' })).toBeInTheDocument()

    // Special Promo
    expect(screen.getByRole('heading', { level: 2, name: 'Special Promo' })).toBeInTheDocument()

    // Services
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()

    // Testimonials
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()

    // Blog Posts
    expect(screen.getByRole('heading', { level: 2, name: 'Blog Posts' })).toBeInTheDocument()

    // Contact
    expect(screen.getByRole('heading', { level: 2, name: 'Get In Touch' })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
