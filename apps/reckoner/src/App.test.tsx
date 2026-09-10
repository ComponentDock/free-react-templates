import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)

    // ContactBar
    expect(screen.getAllByText('+123 456 7890').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('info@reckoner.com').length).toBeGreaterThanOrEqual(1)

    // Navbar
    expect(screen.getAllByText('Reckoner').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    // Hero
    expect(
      screen.getByRole('heading', { name: 'Bookkeeping Consulting Agency' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()

    // AboutUs
    expect(
      screen.getByRole('heading', { name: 'Mindful Planning of Monetary Spending and Saving' }),
    ).toBeInTheDocument()

    // Services
    expect(screen.getByRole('heading', { name: 'What We Offer' })).toBeInTheDocument()

    // Testimonials
    expect(screen.getByRole('heading', { name: 'What Our Clients Say' })).toBeInTheDocument()

    // Newsletter
    expect(screen.getByRole('heading', { name: 'Subscribe to Our Newsletter' })).toBeInTheDocument()

    // Footer
    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} Reckoner`)),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Reckoner — Bookkeeping Consulting Agency')
  })
})
