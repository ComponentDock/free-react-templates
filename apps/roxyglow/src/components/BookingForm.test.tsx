import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders all form fields', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText(/Check-in Date/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Check-out Date/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Room/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Guests/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Check Availability/i })).toBeInTheDocument()
  })

  it('shows best price guaranteed text', () => {
    render(<BookingForm />)
    expect(screen.getByText('Best Price Guaranteed!')).toBeInTheDocument()
  })

  it('has room options', () => {
    render(<BookingForm />)
    const roomSelect = screen.getByLabelText(/Room/)
    expect(roomSelect).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Suite' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Luxury' })).toBeInTheDocument()
  })

  it('has guest options from 1 to 6', () => {
    render(<BookingForm />)
    expect(screen.getByRole('option', { name: '1 Adult' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '6 Adults' })).toBeInTheDocument()
  })
})
