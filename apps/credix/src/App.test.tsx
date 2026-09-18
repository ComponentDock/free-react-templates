import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Credix — Loan & Credit Company Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { name: /get your loan now/i })).toBeInTheDocument()

    // Features
    expect(screen.getAllByRole('heading', { name: 'Our Loans' }).length).toBeGreaterThanOrEqual(1)

    // Stats
    expect(screen.getByRole('heading', { name: /Helping small businesses/i })).toBeInTheDocument()

    // CTA Banner
    expect(screen.getByRole('heading', { name: /Are you in need for a loan/i })).toBeInTheDocument()

    // Services
    expect(screen.getByRole('heading', { name: 'Our services' })).toBeInTheDocument()

    // Contact
    expect(screen.getByRole('heading', { name: 'Get in touch' })).toBeInTheDocument()

    // Newsletter
    expect(
      screen.getByRole('heading', { name: /Subscribe to our newsletter/i }),
    ).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
  })

  it('links to Component Dock in the footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
