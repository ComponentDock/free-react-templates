import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, blurb, social icons, link columns, and copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /treadly home/i })).toBeInTheDocument()
    expect(screen.getByText(/Premium footwear for every step/)).toBeInTheDocument()

    for (const social of ['Facebook', 'X', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }

    for (const column of ['Shop', 'Help', 'About']) {
      const nav = screen.getByRole('navigation', { name: column })
      expect(within(nav).getAllByRole('link').length).toBeGreaterThanOrEqual(4)
    }
    expect(
      within(screen.getByRole('navigation', { name: 'Shop' })).getByText('Running'),
    ).toBeInTheDocument()
    expect(
      within(screen.getByRole('navigation', { name: 'Help' })).getByText('Track Order'),
    ).toBeInTheDocument()
    expect(
      within(screen.getByRole('navigation', { name: 'About' })).getByText('Store Locator'),
    ).toBeInTheDocument()

    expect(screen.getByText(/© 2026 Treadly/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
  })
})
