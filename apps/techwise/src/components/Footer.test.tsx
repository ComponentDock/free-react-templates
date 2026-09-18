import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Techwise/i })).toBeInTheDocument()
    for (const social of ['Facebook', 'Twitter', 'Instagram', 'Dribbble']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('renders Explore navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Explore' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Portfolio' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    // Services appears in both sections — use getAllByRole
    const servicesLinks = screen.getAllByRole('link', { name: 'Services' })
    expect(servicesLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Company navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms' })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Have a Questions/i })).toBeInTheDocument()
    expect(screen.getByText('+10 367 267 2678')).toBeInTheDocument()
    expect(screen.getByText('info@techwise.com')).toBeInTheDocument()
    expect(screen.getByText(/123 Creative Street/i)).toBeInTheDocument()
  })
})
