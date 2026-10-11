import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { BookingForm } from './BookingForm'

function fillValidForm() {
  fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'Ada' } })
  fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Lovelace' } })
  fireEvent.change(screen.getByLabelText('Arrival'), { target: { value: '2026-11-02' } })
  fireEvent.change(screen.getByLabelText('Departure'), { target: { value: '2026-11-09' } })
  fireEvent.change(screen.getByLabelText('Room Type'), { target: { value: 'Room type 2' } })
  fireEvent.change(screen.getByLabelText('Number Of Rooms'), { target: { value: '2' } })
  fireEvent.change(screen.getByLabelText('Adults'), { target: { value: '2' } })
  fireEvent.change(screen.getByLabelText('Childs'), { target: { value: '1' } })
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Sea view please' } })
}

describe('BookingForm', () => {
  it('renders the centred header and the full two-column field set', () => {
    render(<BookingForm />)
    expect(screen.getByRole('heading', { level: 1, name: 'Book a Room' })).toBeInTheDocument()
    expect(screen.getByText(/check the room availability/i)).toBeInTheDocument()
    expect(screen.getByTestId('booking-section')).toHaveAttribute('id', 'book')

    expect(screen.getByLabelText('First Name')).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText('Last Name')).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText('Arrival')).toHaveAttribute('type', 'date')
    expect(screen.getByLabelText('Departure')).toHaveAttribute('type', 'date')
    expect(screen.getByLabelText('Room Type')).toHaveDisplayValue('')
    expect(screen.getByLabelText('Number Of Rooms')).toHaveDisplayValue('')
    expect(screen.getByLabelText('Adults')).toHaveDisplayValue('')
    expect(screen.getByLabelText('Childs')).toHaveDisplayValue('')
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()

    const submit = screen.getByRole('button', { name: 'Book Room' })
    expect(submit).toHaveClass('bg-gradient-to-t', 'rounded-[25px]')
  })

  it('blocks submit with per-field errors until every required field is filled', () => {
    render(<BookingForm />)
    fireEvent.click(screen.getByRole('button', { name: 'Book Room' }))

    expect(screen.getByText('Please enter your first name')).toHaveAttribute('role', 'alert')
    expect(screen.getByText('Please enter your last name')).toBeInTheDocument()
    expect(screen.getByText('Please choose an arrival date')).toBeInTheDocument()
    expect(screen.getByText('Please choose a departure date')).toBeInTheDocument()
    expect(screen.getByText('Please choose a room type')).toBeInTheDocument()
    expect(screen.getByText('Please choose the number of rooms')).toBeInTheDocument()
    expect(screen.getByText('Please choose the number of adults')).toBeInTheDocument()
    expect(screen.getByText('Please choose the number of childs')).toBeInTheDocument()
    expect(screen.getByText('Please enter your message')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows the success state on a valid submit and resets back to the form', () => {
    render(<BookingForm />)
    fillValidForm()
    fireEvent.click(screen.getByRole('button', { name: 'Book Room' }))

    expect(screen.getByRole('status')).toHaveTextContent('Your booking request has been received')
    expect(screen.queryByLabelText('First Name')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Book another room' }))
    expect(screen.getByLabelText('First Name')).toHaveValue('')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
