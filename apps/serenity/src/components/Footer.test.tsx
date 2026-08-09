import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand and the three link columns', () => {
    render(<Footer />)
    expect(screen.getByText(/^Serenity$/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Popular Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
  })

  it('renders the popular and quick link lists', () => {
    render(<Footer />)
    for (const label of ['Aromatherapy', 'Skin Care', 'Herbal Spa', 'Body Massage']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const label of ['About', 'Our Spa', 'Treatments', 'Specialists', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders contact details and social links', () => {
    render(<Footer />)
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
    for (const label of ['Instagram', 'Twitter', 'Facebook', 'YouTube']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows the copyright line with the current year', () => {
    render(<Footer />)
    expect(
      screen.getByText(`© ${new Date().getFullYear()} Serenity — Free React Template`),
    ).toBeInTheDocument()
  })
})
