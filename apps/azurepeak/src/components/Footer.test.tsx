import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo and description', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'AzurePeak' })).toBeInTheDocument()
    expect(screen.getByText(/luxury hotel and resort experience/i)).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    for (const label of [
      'Rooms & Suites',
      'Amenities',
      'Dining',
      'Gallery',
      'Testimonials',
      'FAQ',
    ]) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('123 Azure Coast Drive, Malibu, CA 90265')).toBeInTheDocument()
    expect(screen.getByText('+1 (310) 555-0199')).toBeInTheDocument()
    expect(screen.getByText('reservations@azurepeak.com')).toBeInTheDocument()
    expect(screen.getByText('24/7 Front Desk')).toBeInTheDocument()
  })

  it('renders social links with external targets', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    }
  })

  it('renders copyright and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    const componentDockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(componentDockLink).toHaveAttribute('target', '_blank')
  })

  it('renders section headings', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText('Connect with Us')).toBeInTheDocument()
  })
})
