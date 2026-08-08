import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand blurb, Connect with us socials, link columns, and copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Trellis' })).toBeInTheDocument()
    expect(screen.getByText(/far far away/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Connect with us' })).toBeInTheDocument()

    for (const label of ['X', 'Facebook', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    const nav = screen.getByRole('navigation', { name: /navigation links/i })
    expect(within(nav).getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
    for (const label of ['Home', 'Services', 'Work', 'About', 'Blog']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }

    const press = screen.getByRole('navigation', { name: /press links/i })
    for (const label of ['Press', 'Contact', 'Support', 'Privacy']) {
      expect(within(press).getByRole('link', { name: label })).toBeInTheDocument()
    }

    const legal = screen.getByRole('navigation', { name: /legal links/i })
    for (const label of ['FAQ', 'Careers', 'Procedure', 'Team']) {
      expect(within(legal).getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByText('© 2026 Trellis. All rights reserved.')).toBeInTheDocument()
  })
})
