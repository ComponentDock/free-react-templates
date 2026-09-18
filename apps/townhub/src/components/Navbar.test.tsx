import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

describe('Navbar', () => {
  it('renders the brand logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Town')).toBeInTheDocument()
    expect(screen.getByText('Hub')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('renders the Add Listing CTA button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /add listing/i })).toHaveAttribute('href', '#listing')
  })

  it('renders the Sign in or Register link', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /sign in or register/i })).toHaveAttribute(
      'href',
      '#page',
    )
  })

  it('has aria-label on nav element', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument()
  })
})
