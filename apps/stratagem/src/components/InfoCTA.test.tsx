import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InfoCTA } from './InfoCTA'

describe('InfoCTA', () => {
  it('renders the heading', () => {
    render(<InfoCTA />)
    expect(
      screen.getByRole('heading', { name: /For Any Information Call Us/i }),
    ).toBeInTheDocument()
  })

  it('renders the phone number button', () => {
    render(<InfoCTA />)
    const link = screen.getByRole('link', { name: /673 763 6786/ })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'tel:+16737636786')
  })

  it('renders the subtitle text', () => {
    render(<InfoCTA />)
    expect(screen.getByText(/consultants are ready to discuss/i)).toBeInTheDocument()
  })
})
