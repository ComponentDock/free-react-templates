import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the about widget, useful links, contact details, socials, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Useful Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()

    expect(screen.getByText(/Binghamton, New York/i)).toBeInTheDocument()
    expect(screen.getByText('00 (953) 9865 562')).toBeInTheDocument()
    expect(screen.getByText('support@colorlib.com')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://facebook.com',
    )
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com',
    )
    expect(screen.getByRole('link', { name: 'Dribbble' })).toHaveAttribute(
      'href',
      'https://dribbble.com',
    )
    expect(screen.getByRole('link', { name: 'Behance' })).toHaveAttribute(
      'href',
      'https://behance.net',
    )

    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
  })
})
