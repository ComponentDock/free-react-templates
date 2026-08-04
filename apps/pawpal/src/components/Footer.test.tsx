import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, about blurb, link columns, hours, contact details, and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Pawpal' })).toBeInTheDocument()
    expect(screen.getByText(/Austin, TX/)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Hours' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Grooming' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'FAQs' })).toBeInTheDocument()

    expect(screen.getByText('Mon-Fri: 7:00 AM - 7:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Saturday: 8:00 AM - 6:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Sunday: 9:00 AM - 5:00 PM')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'hello@pawpal.com' })).toBeInTheDocument()
    expect(screen.getByText('Austin, TX 78701')).toBeInTheDocument()

    for (const social of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })
})
