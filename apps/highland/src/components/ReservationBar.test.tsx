import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ReservationBar } from './ReservationBar'

describe('ReservationBar', () => {
  it('renders the reservation bar with text', () => {
    render(<ReservationBar />)
    expect(screen.getByTestId('reservation-bar')).toBeInTheDocument()
    expect(screen.getByText('For Reservation or Query?')).toBeInTheDocument()
  })

  it('renders phone number button', () => {
    render(<ReservationBar />)
    expect(screen.getByText('+10 576 377 4789')).toBeInTheDocument()
  })

  it('phone link has correct href', () => {
    render(<ReservationBar />)
    const phoneLink = screen.getByText('+10 576 377 4789').closest('a')
    expect(phoneLink).toHaveAttribute('href', 'tel:+105763774789')
  })
})
