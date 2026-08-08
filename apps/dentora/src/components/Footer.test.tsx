import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, link columns, contact details, socials, and copyright', () => {
    render(<Footer />)

    expect(screen.getByText('Dentora')).toBeInTheDocument()
    expect(screen.getByText(/Exceptional dental care with a gentle touch/)).toBeInTheDocument()

    for (const column of ['Services', 'Patient Info', 'Clinic', 'Contact Us']) {
      expect(screen.getByRole('navigation', { name: column })).toBeInTheDocument()
    }

    expect(screen.getByText('General Dentistry')).toBeInTheDocument()
    expect(screen.getByText('Insurance')).toBeInTheDocument()
    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getByText('(555) 234-5678')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()

    expect(screen.getByText(/© 2026 Dentora/)).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
    expect(screen.getByText('Style Guide')).toBeInTheDocument()
  })
})
