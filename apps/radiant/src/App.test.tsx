import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections of the Radiant template', () => {
    render(<App />)

    // Navbar
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    // Hero
    expect(screen.getByText(/Design is not just what it looks like/)).toBeInTheDocument()

    // About Us
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()

    // Pricing
    expect(screen.getByText('Free')).toBeInTheDocument()

    // Testimonial
    expect(screen.getByText('James Wilson')).toBeInTheDocument()

    // Footer with Component Dock link
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Radiant — Business Landing Template')
  })
})
