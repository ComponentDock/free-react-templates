import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ReservationCTA } from './ReservationCTA'

describe('ReservationCTA', () => {
  it('renders the heading and CTA button', () => {
    render(<ReservationCTA />)

    expect(screen.getByText(/Natural ingredients and tasty food/)).toBeInTheDocument()
    expect(screen.getByText(/Some trendy and popular courses offered/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /reservation/i })).toBeInTheDocument()
  })

  it('links the CTA to the contact section', () => {
    render(<ReservationCTA />)

    expect(screen.getByRole('link', { name: /reservation/i })).toHaveAttribute('href', '#contact')
  })
})
