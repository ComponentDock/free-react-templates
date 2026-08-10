import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name and link columns', () => {
    render(<Footer />)
    expect(
      screen.getByText(
        (_, element) => element?.tagName === 'P' && element.textContent === 'Couture',
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Menu' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Help' })).toBeInTheDocument()
    for (const link of ['Shop', 'About', 'Journal', 'Contact Us']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const link of ['Shipping Information', 'Privacy Policy', 'FAQs']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the contact block', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St\./)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'info@yourdomain.com' })).toHaveAttribute(
      'href',
      'mailto:info@yourdomain.com',
    )
  })
})
