import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand column with the SEC-registered note', () => {
    render(<Footer />)

    expect(screen.getByText('Finley')).toBeInTheDocument()
    expect(
      screen.getByText(/Finley Advisors LLC, an SEC-registered investment advisor/),
    ).toBeInTheDocument()
  })

  it('renders the four link columns and the bottom bar', () => {
    render(<Footer />)

    for (const column of ['Product', 'Company', 'Resources', 'Legal']) {
      expect(screen.getByRole('heading', { name: column })).toBeInTheDocument()
    }

    for (const link of [
      'Features',
      'Pricing',
      'About Us',
      'Contact',
      'Privacy Policy',
      'Terms of Service',
    ]) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
    }

    expect(screen.getByText(/© 2026 Finley/)).toBeInTheDocument()
  })
})
