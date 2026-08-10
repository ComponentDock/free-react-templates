import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the Promo column with the summer promo', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Promo' })).toBeInTheDocument()
    expect(screen.getByText('Finding Your Perfect Shirts This Summer')).toBeInTheDocument()
    expect(screen.getByText(/Promo from July 15/)).toBeInTheDocument()
  })

  it('shows the Quick Links and Contact Info columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Contact Info' })).toBeInTheDocument()

    for (const link of ['Sell online', 'Features', 'Shopping cart']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows the site name in the copyright line and social links', () => {
    render(<Footer />)

    expect(screen.getByText(/© 2026 Bazaar/)).toBeInTheDocument()
    for (const social of ['facebook', 'twitter', 'instagram']) {
      expect(screen.getByRole('link', { name: `Bazaar on ${social}` })).toBeInTheDocument()
    }
  })
})
