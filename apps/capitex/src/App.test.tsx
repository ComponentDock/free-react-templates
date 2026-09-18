import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    // Navbar — use getAllByText since "Capitex" appears in navbar + footer
    const capitexElements = screen.getAllByText('Capitex')
    expect(capitexElements.length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByText(/Financial Solutions for Your Business Growth/i)).toBeInTheDocument()
    // About
    expect(screen.getByText(/Thousands of customers trust our company/i)).toBeInTheDocument()
    // Services
    expect(screen.getByText('Student Loan')).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    // Clients
    expect(screen.getByText('2000+')).toBeInTheDocument()
    // HowItWorks
    expect(screen.getByText('How it works')).toBeInTheDocument()
    // FAQ
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
