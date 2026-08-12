import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, blurb and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /^Kindred$/ })).toBeInTheDocument()
    expect(screen.getByText(/raising support/)).toBeInTheDocument()
    for (const label of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    }
  })

  it('renders the Information and Links columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Information' })).toBeInTheDocument()
    for (const label of ['Donation', 'Privacy', 'Terms Condition']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Links' })).toBeInTheDocument()
    for (const label of ['Home', 'Who we are', 'Causes', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Have a Questions? widget with contact details', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    expect(screen.getByText(/203 Fake St\./)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+2 392 3929 210' })).toHaveAttribute(
      'href',
      'tel:' + '+2 392 3929 210'.replace(/[^\d+]/g, ''),
    )
    expect(screen.getByRole('link', { name: 'info@yourdomain.com' })).toHaveAttribute(
      'href',
      'mailto:info@yourdomain.com',
    )
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
