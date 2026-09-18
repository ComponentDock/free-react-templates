import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getAllByText('Hostcraft').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByText('Isometric Hosting')).toBeInTheDocument()
    expect(screen.getByText('Design, Development, Hosting')).toBeInTheDocument()

    // Domain Search
    expect(screen.getByText('Search Your Domain Name')).toBeInTheDocument()

    // Features
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()

    // Counter Stats
    expect(screen.getByText('12,000')).toBeInTheDocument()

    // Main Services
    expect(screen.getByText('Our Main Services')).toBeInTheDocument()

    // Pricing
    expect(screen.getByText('Our Best Pricing')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('Customer Says')).toBeInTheDocument()

    // Blog
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Sign Up For Web Hosting Today!')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
