import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the wordmark, link columns, and copyright', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: /^Foundry/ })).toBeInTheDocument()

    for (const column of ['About Company', 'Recent Blog', 'Information', 'Contact Info']) {
      expect(within(footer).getByRole('heading', { name: column })).toBeInTheDocument()
    }
    expect(within(footer).getByText(/© 2026 Foundry\. All rights reserved/i)).toBeInTheDocument()
  })

  it('renders the social links', () => {
    render(<Footer />)

    for (const label of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
