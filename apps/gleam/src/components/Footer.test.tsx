import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, blurb, and contact details', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Gleam home' })).toBeInTheDocument()
    expect(
      screen.getByText(/Professional cleaning services for homes and offices/),
    ).toBeInTheDocument()
    expect(screen.getByText('456 Clean Street, Portland, OR 97201')).toBeInTheDocument()
    expect(screen.getByText('(555) 867-5309')).toBeInTheDocument()
    expect(screen.getByText('hello@gleamclean.com')).toBeInTheDocument()
  })

  it('renders the three link columns', () => {
    render(<Footer />)

    expect(screen.getByRole('navigation', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Resources' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Company' })).toBeInTheDocument()

    const services = screen.getByRole('navigation', { name: 'Services' })
    for (const link of ['Regular Cleaning', 'Deep Cleaning', 'Move-In/Out', 'Commercial']) {
      expect(within(services).getByRole('link', { name: link })).toBeInTheDocument()
    }
    const resources = screen.getByRole('navigation', { name: 'Resources' })
    for (const link of ['Cleaning Checklist', 'Service Areas', 'Quote Calculator', 'FAQ']) {
      expect(within(resources).getByRole('link', { name: link })).toBeInTheDocument()
    }
    const company = screen.getByRole('navigation', { name: 'Company' })
    for (const link of ['About', 'Blog', 'Contact', 'Careers']) {
      expect(within(company).getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the copyright and legal links', () => {
    render(<Footer />)

    expect(screen.getByText('© 2026 Gleam. All rights reserved.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Style Guide' })).toBeInTheDocument()
  })
})
