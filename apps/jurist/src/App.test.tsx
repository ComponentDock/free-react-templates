import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar
    expect(screen.getAllByText('Jurist').length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    // About
    expect(screen.getByText(/dedicated team of legal professionals/)).toBeInTheDocument()
    // Featured Practice
    expect(screen.getByText('Business Law')).toBeInTheDocument()
    // Areas of Expertise
    expect(screen.getByText('Areas of Expertise')).toBeInTheDocument()
    // Why Choose Us
    expect(screen.getByText(/Why Clients Choose Us/)).toBeInTheDocument()
    // Consultation
    expect(screen.getByText(/Request a free consultation/)).toBeInTheDocument()
    // Testimonials + FAQ
    expect(screen.getAllByText(/Happy/).length).toBeGreaterThanOrEqual(1)
    // Footer — Component Dock link
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Jurist — Law Firm Template')
  })
})
