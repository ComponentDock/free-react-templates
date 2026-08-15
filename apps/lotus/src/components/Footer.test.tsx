import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand, contact email, copyright, and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Lotus' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'lotus@info.com' })).toHaveAttribute(
      'href',
      'mailto:lotus@info.com',
    )
    expect(screen.getByText(/© 2026 Lotus\. All rights reserved\./)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
