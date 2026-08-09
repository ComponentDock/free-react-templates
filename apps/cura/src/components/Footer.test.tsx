import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, blurb and quick links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /cura home/i })).toBeInTheDocument()
    expect(screen.getByText(/Compassionate, patient-centered healthcare/)).toBeInTheDocument()
    for (const label of ['Services', 'Doctors', 'About', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders contact columns with phone, address and hours', () => {
    render(<Footer />)
    expect(screen.getByText('(555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('123 Wellness Avenue, Springfield')).toBeInTheDocument()
    expect(screen.getByText('Mon-Fri: 8:00 AM - 6:00 PM')).toBeInTheDocument()
  })

  it('renders the emergency hotline CTA and bottom bar', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: '(555) 911-0000' })).toHaveAttribute(
      'href',
      'tel:+15559110000',
    )
    expect(screen.getByText('© 2026 Cura. All rights reserved.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
  })
})
