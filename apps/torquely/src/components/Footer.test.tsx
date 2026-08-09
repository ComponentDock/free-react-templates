import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, services links, contact information, hours, and copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Torquely\./i)).toBeInTheDocument()
    for (const service of [
      'Oil Change',
      'Tire Change',
      'Batteries',
      'Engine Repair',
      'Tow Truck',
      'Car Maintenance',
    ]) {
      expect(screen.getByRole('link', { name: service })).toBeInTheDocument()
    }
    expect(screen.getByText(/203 Fake St\. Mountain View/i)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
    expect(screen.getByText('Monday – Friday : 9am to 20pm')).toBeInTheDocument()
    expect(screen.getByText('Saturday : 9am to 17pm')).toBeInTheDocument()
    expect(screen.getByText('All Sunday Days')).toBeInTheDocument()
    expect(screen.getByText('All Official Holidays')).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Torquely/)).toBeInTheDocument()
    expect(screen.getByText(/recreation of ColorLib Autorepair/i)).toBeInTheDocument()
  })
})
