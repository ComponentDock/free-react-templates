import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, four widgets, and small print', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /^LENDLY$/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'What we do' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'About us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Legal' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Site Info' })).toBeInTheDocument()
    expect(screen.getByText(/Lendly is a trading name/i)).toBeInTheDocument()
    expect(
      screen.getByText('© 2026 Lendly — Loans & Finance · All rights reserved'),
    ).toBeInTheDocument()
  })

  it('links to Component Dock with the branded credit line', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: /More templates at Component Dock/i })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
