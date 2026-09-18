import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sweeply — Cleaning Services Template')
  })

  it('composes the full page in source order', () => {
    render(<App />)

    // TopBar
    expect(screen.getAllByText('youremail@email.com').length).toBeGreaterThanOrEqual(1)

    // Navbar
    expect(screen.getAllByText('Sweeply').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(
      screen.getByRole('heading', { level: 1, name: 'A Clean Home is A Happy Home' }),
    ).toBeInTheDocument()

    // About
    expect(screen.getByText('About Company')).toBeInTheDocument()

    // Features
    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()

    // Stats
    expect(screen.getByText('4,800')).toBeInTheDocument()

    // Industries
    expect(
      screen.getByRole('heading', { level: 2, name: 'Industries We Serve' }),
    ).toBeInTheDocument()

    // Services
    expect(
      screen.getByRole('heading', { level: 2, name: 'Offering Best Cleaning Services' }),
    ).toBeInTheDocument()

    // WorkSteps
    expect(
      screen.getByRole('heading', { level: 2, name: /Get Amazing Cleaning/ }),
    ).toBeInTheDocument()

    // Testimonials
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Are Clients Says' }),
    ).toBeInTheDocument()

    // Pricing
    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Plans & Pricing' }),
    ).toBeInTheDocument()

    // CallToAction
    expect(screen.getByText(/Need to clean your house/)).toBeInTheDocument()

    // Blog
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Post' })).toBeInTheDocument()

    // Footer
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
