import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand, link columns, and contact details', () => {
    render(<Footer />)
    expect(screen.getByText(/About Rently/i)).toBeInTheDocument()
    for (const heading of ['Information', 'Customer Support', 'Have a Questions?']) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }
    for (const link of [
      'Term and Conditions',
      'Best Price Guarantee',
      'Payment Option',
      'Booking Tips',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByText(/203 Fake St\. Mountain View/i)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('shows the copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Rently\. All rights reserved\./i)).toBeInTheDocument()
    expect(screen.getByText(/recreation of ColorLib Carbook/i)).toBeInTheDocument()
  })
})
