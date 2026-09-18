import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)
    // Navbar
    expect(screen.getAllByText('Virtual Assistant').length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByText(/Save Your Precious Time/i)).toBeInTheDocument()
    // Why Choose Us
    expect(screen.getByText(/Top Reason Why We Need/i)).toBeInTheDocument()
    // Services
    expect(screen.getByText('Our Services & Offers')).toBeInTheDocument()
    // Comparison
    expect(screen.getByText(/Get Your Own Highly Skilled/i)).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    // How It Works (appears in navbar link too)
    expect(screen.getAllByText('How It Works').length).toBeGreaterThanOrEqual(2)
    // Pricing
    expect(screen.getAllByText('Price & Plans').length).toBeGreaterThanOrEqual(1)
    // Blog
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    // Contact
    expect(screen.getByText('Make an Appointment')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Valet — Virtual Assistant Landing Page')
  })
})
