import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar + Footer both have "Praxis"
    expect(screen.getAllByText('Praxis').length).toBeGreaterThanOrEqual(2)
    // Hero
    expect(screen.getByText('Love the new you')).toBeInTheDocument()
    // Intro
    expect(screen.getByText('Welcome to our Clinic')).toBeInTheDocument()
    // Why Choose Us
    expect(screen.getByText('Why choose us?')).toBeInTheDocument()
    // CTA
    expect(screen.getByText('Make your appointment today!')).toBeInTheDocument()
    // Services
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    // Parallax
    expect(screen.getByText('Only in August')).toBeInTheDocument()
    // Newsletter
    expect(screen.getByText('Subscribe to our newsletter')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Praxis — Plastic Surgery Clinic')
  })
})
