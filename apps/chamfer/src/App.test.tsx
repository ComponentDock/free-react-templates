import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar — logo appears in header and footer
    const chamferLinks = screen.getAllByRole('link', { name: /Chamfer/i })
    expect(chamferLinks.length).toBeGreaterThanOrEqual(2)
    // Hero
    expect(screen.getByText('Modern Interior & Design')).toBeInTheDocument()
    // Our Info
    expect(screen.getByText('Clean & Modern')).toBeInTheDocument()
    // Pro Services
    expect(screen.getByText(/We will create modern/)).toBeInTheDocument()
    // Services
    expect(screen.getByText('Best Interior Services')).toBeInTheDocument()
    // Gallery
    expect(screen.getByText('Our Gallery')).toBeInTheDocument()
    // Team
    expect(screen.getByText('Meet Our Team')).toBeInTheDocument()
    // Testimonial
    expect(screen.getByText(/Chamfer transformed our office/)).toBeInTheDocument()
    // Brand Carousel
    expect(screen.getByText('Architect Digest')).toBeInTheDocument()
    // CTA Banner
    expect(screen.getByText(/Are you Searching For/)).toBeInTheDocument()
    // Blog
    expect(screen.getByText('Our Recent News')).toBeInTheDocument()
    // Footer
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})
