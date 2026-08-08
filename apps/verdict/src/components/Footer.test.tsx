import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the link columns for practice areas, quick links and contact', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Practice Areas' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()

    for (const link of ['Corporate Law', 'Home', 'About', 'Attorneys']) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
    }
    expect(screen.getByText('(555) 234-5678')).toBeInTheDocument()
    expect(screen.getByText('hello@verdictlaw.com')).toBeInTheDocument()
  })

  it('shows the legal disclaimer and copyright line', () => {
    render(<Footer />)

    expect(screen.getByText(/for general information purposes only/i)).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
  })
})
