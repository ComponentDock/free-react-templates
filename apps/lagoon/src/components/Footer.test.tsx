import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, tagline, and social links', () => {
    render(<Footer />)
    expect(screen.getByText('Lagoon')).toBeInTheDocument()
    expect(screen.getByText(/calm waters/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com',
    )
    expect(screen.getByRole('link', { name: 'X (Twitter)' })).toHaveAttribute(
      'href',
      'https://x.com',
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com',
    )
  })
})
