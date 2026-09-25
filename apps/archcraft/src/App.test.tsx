import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // TopBar
    expect(screen.getByText('info@archcraft.com')).toBeInTheDocument()
    // Navbar
    expect(screen.getByRole('link', { name: /^Archcraft/ })).toBeInTheDocument()
    // Hero — use level to disambiguate from Features h3
    expect(screen.getByRole('heading', { name: /Interior Design/i, level: 1 })).toBeInTheDocument()
    // Features — "Innovative Structure" appears in both Features and Services, so use getAllByText
    expect(screen.getAllByText('Innovative Structure').length).toBeGreaterThanOrEqual(1)
    // About
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    // Team
    expect(screen.getByRole('heading', { name: 'Our Team' })).toBeInTheDocument()
    // Pricing
    expect(screen.getByRole('heading', { name: 'Choose Your Plan' })).toBeInTheDocument()
    // FAQ
    expect(screen.getByRole('heading', { name: 'Frequently Ask Questions' })).toBeInTheDocument()
    // Testimonials
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
    // Projects
    expect(screen.getByRole('heading', { name: 'Our Projects' })).toBeInTheDocument()
    // News
    expect(screen.getByRole('heading', { name: 'Our Blog Posts' })).toBeInTheDocument()
    // Services
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    // Contact
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
