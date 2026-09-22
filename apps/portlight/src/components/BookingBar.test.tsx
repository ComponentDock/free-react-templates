import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingBar } from './BookingBar'

describe('BookingBar', () => {
  it('renders all form labels', () => {
    render(<BookingBar />)
    expect(screen.getByLabelText('Check-in Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Check-out Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Room')).toBeInTheDocument()
    expect(screen.getByLabelText('Guests')).toBeInTheDocument()
  })

  it('renders room type options', () => {
    render(<BookingBar />)
    const roomSelect = screen.getByLabelText('Room')
    expect(roomSelect).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Suite' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Deluxe' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Superior' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'King Room' })).toBeInTheDocument()
  })

  it('renders guest options', () => {
    render(<BookingBar />)
    expect(screen.getByRole('option', { name: '1 Adult' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '2 Adults' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Family' })).toBeInTheDocument()
  })

  it('renders check availability button', () => {
    render(<BookingBar />)
    expect(screen.getByRole('button', { name: /check availability/i })).toBeInTheDocument()
    expect(screen.getByText('Best Price Guaranteed!')).toBeInTheDocument()
  })

  it('allows selecting room type', async () => {
    const user = userEvent.setup()
    render(<BookingBar />)
    await user.selectOptions(screen.getByLabelText('Room'), 'Deluxe')
    expect(screen.getByLabelText('Room')).toHaveValue('Deluxe')
  })
})
