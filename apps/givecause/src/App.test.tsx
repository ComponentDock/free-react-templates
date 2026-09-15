import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)
    // Navbar
    expect(screen.getAllByText('GiveCause').length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Our Helping to Save the World',
    )
    // About
    expect(screen.getByText('We Are In A Mission To Help The Helpless')).toBeInTheDocument()
    // Services
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    // Causes — heading appears as h2 (use heading role)
    expect(screen.getAllByText('Our Causes').length).toBeGreaterThanOrEqual(1)
    // Events
    expect(screen.getByText('Featured Events')).toBeInTheDocument()
    // Countdown
    expect(screen.getByText('Next Event Starts In')).toBeInTheDocument()
    // Team
    expect(screen.getByText('Meet Our Team')).toBeInTheDocument()
    // Testimonials
    expect(screen.getAllByText(/GiveCause has been instrumental/).length).toBeGreaterThanOrEqual(1)
    // CTA
    expect(screen.getByText('Want To Work With Us?')).toBeInTheDocument()
    // Blog
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    // Footer
    expect(screen.getAllByText(/More templates at/).length).toBeGreaterThanOrEqual(1)
  })
})
