import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, blurb, and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /helios home/i })).toBeInTheDocument()
    expect(screen.getByText(/Clean, affordable solar energy/i)).toBeInTheDocument()
    for (const label of ['Facebook', 'X', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the four link columns with their entries', () => {
    render(<Footer />)
    for (const heading of ['Solutions', 'Resources', 'Company']) {
      expect(screen.getByRole('navigation', { name: heading })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    for (const link of [
      'Residential Solar',
      'Battery Storage',
      'EV Charging',
      'Savings Calculator',
      'Incentives & Rebates',
      'Blog',
      'FAQ',
      'Products',
      'Pricing',
      '890 Solar Way, Austin, TX 78701',
    ]) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders the copyright bar with legal links', () => {
    render(<Footer />)
    expect(screen.getByText('© 2026 Helios. All rights reserved.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
  })
})
