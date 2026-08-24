import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)

    // TopBar
    expect(screen.getByText(/This handy little bar/)).toBeInTheDocument()

    // Navbar logo (also appears in Footer)
    expect(screen.getAllByRole('link', { name: 'Spruce' }).length).toBeGreaterThanOrEqual(1)

    // Hero heading
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Build your website/)

    // Services
    expect(screen.getByText('Unlimited Components')).toBeInTheDocument()

    // About
    expect(screen.getByText(/All the features/)).toBeInTheDocument()

    // Brands
    expect(screen.getByText(/You'll be in good company/)).toBeInTheDocument()

    // FAQ
    expect(screen.getByText('Complete CMS integration?')).toBeInTheDocument()

    // Pricing
    expect(screen.getByText(/Build beautiful, feature-complete websites/)).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('Bob Frapples')).toBeInTheDocument()

    // Gallery
    expect(screen.getByText('Mobile App')).toBeInTheDocument()

    // CTA
    expect(screen.getByText('Create your amazing website with Spruce')).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Spruce — Business Web Development Template')
  })
})
