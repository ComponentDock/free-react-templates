import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Glint — Dental Clinic Template')

    // Header landmarks
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()

    // Navigation
    expect(screen.getAllByText('Glint').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    // Hero
    expect(screen.getByText('Your Smile Is Our Priority')).toBeInTheDocument()

    // CTA banner
    expect(
      screen.getByText('Schedule your appointment for a free consultation'),
    ).toBeInTheDocument()

    // About
    expect(screen.getByText('We Care About Your Teeth')).toBeInTheDocument()

    // Stats
    expect(screen.getByText('531')).toBeInTheDocument()
    expect(screen.getByText('14,000')).toBeInTheDocument()
    expect(screen.getByText('678')).toBeInTheDocument()
    expect(screen.getByText('2,134')).toBeInTheDocument()

    // Services heading (may appear in services section and footer)
    expect(screen.getAllByText('Our Services').length).toBeGreaterThanOrEqual(1)

    // Service names appear in both Services section and Footer links
    const serviceNames = [
      'Crowns & Bridges',
      'Dental Implants',
      'Teeth Whitening',
      'Root Canals',
      'Wisdom Teeth',
      'Braces',
    ]
    for (const name of serviceNames) {
      expect(screen.getAllByText(name).length).toBeGreaterThanOrEqual(2)
    }

    // Testimonials
    expect(screen.getByText('Testimonials')).toBeInTheDocument()

    // Newsletter
    expect(screen.getByText('Subscribe to our newsletter')).toBeInTheDocument()

    // Footer
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('Component Dock')).toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
