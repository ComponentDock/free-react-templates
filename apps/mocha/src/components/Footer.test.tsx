import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, link columns, hours, contact, location, socials, and copyright', () => {
    render(<Footer />)

    expect(screen.getByText('Mocha')).toBeInTheDocument()
    expect(screen.getByText(/Artisan coffee roasters/)).toBeInTheDocument()

    for (const column of ['Menu', 'Shop', 'Company']) {
      expect(screen.getByRole('heading', { level: 3, name: column })).toBeInTheDocument()
    }
    for (const link of [
      'Espresso Drinks',
      'Pour Overs',
      'Cold Drinks',
      'Pastries',
      'Coffee Beans',
      'Subscriptions',
      'Merchandise',
      'Gift Cards',
      'Our Story',
      'Locations',
      'Careers',
      'Contact',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    expect(screen.getByText('Mon-Fri: 7am - 7pm')).toBeInTheDocument()
    expect(screen.getByText('Sat-Sun: 8am - 6pm')).toBeInTheDocument()
    expect(screen.getByText('hello@mochacoffee.com')).toBeInTheDocument()
    expect(screen.getByText('(555) 234-5678')).toBeInTheDocument()
    expect(screen.getByText('123 Roastery Lane')).toBeInTheDocument()
    expect(screen.getByText('Portland, OR 97201')).toBeInTheDocument()

    expect(screen.getByText(/© 2026 Mocha/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()

    for (const social of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })
})
