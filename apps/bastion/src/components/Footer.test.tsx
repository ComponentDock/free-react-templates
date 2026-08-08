import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows contact info, quick links, and the copyright line', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'hello@bastion.studio' })).toHaveAttribute(
      'href',
      'mailto:hello@bastion.studio',
    )
    for (const link of ['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Contact']) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
    }
    expect(
      screen.getByText(`© ${new Date().getFullYear()} Bastion. All rights reserved.`),
    ).toBeInTheDocument()
  })

  it('renders the social links', () => {
    render(<Footer />)
    for (const label of ['X', 'Facebook', 'LinkedIn', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
