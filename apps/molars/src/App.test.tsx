import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full page structure', () => {
    render(<App />)

    // Navbar
    expect(screen.getByText('Molars')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Dental Clinic for Everyone',
    )

    // Features
    expect(screen.getByText('Periodontology')).toBeInTheDocument()

    // FreeQuote
    expect(screen.getByPlaceholderText('Your name *')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('Chad Hawkins')).toBeInTheDocument()

    // WhyChooseUs
    expect(screen.getByText('Fast Support')).toBeInTheDocument()

    // Team
    expect(screen.getByText('Dr. Sarah Mitchell')).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Molars — Dental Clinic Landing')
  })
})
