import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Register } from './Register'

describe('Register', () => {
  it('renders the register band with subheading, heading, and book button', () => {
    render(<Register />)
    expect(screen.getByText('Register Now to Book')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Your Presence' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book Now ($150)' })).toHaveAttribute(
      'href',
      '#register',
    )
  })
})
