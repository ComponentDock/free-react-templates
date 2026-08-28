import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    // Navbar (logo appears in Navbar and Footer — use getAllByText)
    const tillmanTexts = screen.getAllByText('Tillman')
    expect(tillmanTexts.length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByText('Agricultural solution')).toBeInTheDocument()
    expect(screen.getByText('Explore Our Services')).toBeInTheDocument()

    // About
    const aboutTexts = screen.getAllByText(/20\+ years/)
    expect(aboutTexts.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('More About Us')).toBeInTheDocument()

    // Services
    expect(screen.getByText('Services we provide')).toBeInTheDocument()
    expect(screen.getByText('Field Ready')).toBeInTheDocument()
    expect(screen.getByText('Transportation')).toBeInTheDocument()

    // Stats
    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('280')).toBeInTheDocument()

    // Why Choose Us
    expect(screen.getByText(/Why you should/)).toBeInTheDocument()

    // Tips
    expect(screen.getByText('Tips from experts')).toBeInTheDocument()
    expect(screen.getByText('More Tips')).toBeInTheDocument()

    // Contact
    expect(screen.getByText('Need any help?')).toBeInTheDocument()
    expect(screen.getByText('Drop Your Message')).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Tillman — Agriculture & Farm Template')
  })
})
