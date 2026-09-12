import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from '../App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getAllByText('Blinkwave').length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByText(/super internet/)).toBeInTheDocument()
    // About
    expect(screen.getByText(/we listen and work together/i)).toBeInTheDocument()
    // Services
    expect(screen.getByText('Perfect in Coverage')).toBeInTheDocument()
    // Pricing
    expect(screen.getByText('Single Package')).toBeInTheDocument()
    // CTA
    expect(screen.getByLabelText('Zipcode')).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText(/what our clients think/i)).toBeInTheDocument()
    // Blog
    expect(screen.getByText(/latest news and updates/i)).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Blinkwave — Super Fast Internet')
  })
})
