import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ReservationCta } from './ReservationCta'

describe('ReservationCta', () => {
  it('renders the heading, subtext, and Reservation link', () => {
    render(<ReservationCta />)

    expect(
      screen.getByRole('heading', { name: /natural ingredients and tasty food/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/some trendy and popular courses offered/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /reservation/i })).toHaveAttribute('href', '#contact')
  })
})
