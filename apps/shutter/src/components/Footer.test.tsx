import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, blurb, and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shutter home' })).toBeInTheDocument()
    expect(
      screen.getByText(/fine art and documentary photographer capturing authentic moments/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://instagram.com',
    )
    expect(screen.getByRole('link', { name: 'X' })).toHaveAttribute('href', 'https://x.com')
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com',
    )
  })

  it('renders the legal links and copyright', () => {
    render(<Footer />)
    for (const link of ['Privacy Policy', 'Terms of Service', 'Style Guide']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByText('© 2026 Shutter. All rights reserved.')).toBeInTheDocument()
  })
})
