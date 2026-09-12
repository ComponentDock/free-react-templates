import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // TopBar
    expect(screen.getByText(/Free Call/)).toBeInTheDocument()

    // Navbar
    expect(screen.getAllByRole('link', { name: /Squadly/ }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { name: /Lease The Right Equipment/ })).toBeInTheDocument()

    // Features
    expect(screen.getByRole('heading', { name: /Why Choose To Rent/ })).toBeInTheDocument()

    // About
    expect(screen.getByRole('heading', { name: /Welcome to Squadly A Rental/ })).toBeInTheDocument()

    // CTA Banner
    expect(
      screen.getByRole('heading', { name: /We Are Squadly A Heavy Equipment/ }),
    ).toBeInTheDocument()

    // Services
    expect(screen.getByRole('heading', { name: 'Rental Services' })).toBeInTheDocument()

    // Testimonials
    expect(screen.getByRole('heading', { name: 'Our Happy Customer Says' })).toBeInTheDocument()

    // Blog
    expect(screen.getByRole('heading', { name: 'Latest Blog Updates' })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Squadly — Heavy Equipment Rental Template')
  })
})
