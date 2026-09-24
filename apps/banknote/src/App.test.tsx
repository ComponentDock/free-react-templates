import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getAllByText('Banknote').length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByText('Banking Solutions')).toBeInTheDocument()
    // Features
    expect(screen.getByText('Money Savings')).toBeInTheDocument()
    // About
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1)
    // Team
    expect(screen.getByText('Meet Team')).toBeInTheDocument()
    // Gallery
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    // How It Works
    expect(screen.getByText('How It Works')).toBeInTheDocument()
    // Services
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    // Pricing
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    // FAQ
    expect(screen.getByText('Frequently Ask Questions')).toBeInTheDocument()
    // Blog
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    // Contact
    expect(screen.getAllByText('Contact Us').length).toBeGreaterThanOrEqual(1)
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
