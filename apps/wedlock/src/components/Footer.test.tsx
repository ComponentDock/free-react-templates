import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the office block with address, email and phone', () => {
    render(<Footer />)
    expect(screen.getByText(/785 15h Street/i)).toBeInTheDocument()
    expect(screen.getByText('hello@wedlock.example')).toBeInTheDocument()
    expect(screen.getByText('+1 840 841 25 69')).toBeInTheDocument()
  })

  it('renders the links column and newsletter input', () => {
    render(<Footer />)
    for (const label of ['Home', 'Services', 'About Us', 'Portfolio', 'Contacts']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
  })

  it('renders the copyright strip', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument()
  })
})
