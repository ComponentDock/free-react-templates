import { render, screen } from '@testing-library/react'
import { ReservationBar } from './ReservationBar'

describe('ReservationBar', () => {
  it('renders the reservation form', () => {
    render(<ReservationBar />)
    expect(screen.getByLabelText('Check In')).toBeInTheDocument()
    expect(screen.getByLabelText('Check Out')).toBeInTheDocument()
    expect(screen.getByLabelText('Guests')).toBeInTheDocument()
  })

  it('displays the book now button', () => {
    render(<ReservationBar />)
    expect(screen.getByText('Book Now')).toBeInTheDocument()
  })

  it('has correct input types', () => {
    render(<ReservationBar />)
    expect(screen.getByLabelText('Check In')).toHaveAttribute('type', 'date')
    expect(screen.getByLabelText('Check Out')).toHaveAttribute('type', 'date')
  })

  it('has guest options', () => {
    render(<ReservationBar />)
    const select = screen.getByLabelText('Guests')
    expect(select).toBeInTheDocument()
  })
})
