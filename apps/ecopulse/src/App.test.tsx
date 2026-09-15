import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar and Footer both have "Eco" / "Pulse" text
    expect(screen.getAllByText('Eco').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('Pulse').length).toBeGreaterThanOrEqual(2)
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    // About
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1)
    // Services
    expect(screen.getByText('Our Core Services')).toBeInTheDocument()
    // Support
    expect(screen.getByText('Why You Should Join Us')).toBeInTheDocument()
    // Cases
    expect(screen.getByText('Our Cases')).toBeInTheDocument()
    // Blog
    expect(screen.getByText('From Our Blog')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('EcoPulse — Environmental Organization')
  })
})
