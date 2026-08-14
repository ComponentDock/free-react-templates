import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingWidget } from './BookingWidget'

describe('BookingWidget', () => {
  it('shows the Book Your Room title with date fields, selects and the Book Now button', () => {
    render(<BookingWidget />)
    expect(screen.getByRole('heading', { name: /Book Your Room/i, level: 2 })).toBeInTheDocument()
    expect(screen.getByLabelText('Arrival Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Departure Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Adult')).toBeInTheDocument()
    expect(screen.getByLabelText('Child')).toBeInTheDocument()
    expect(screen.getByLabelText('Number of Rooms')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Book Now/i })).toBeInTheDocument()
  })

  it('shows per-field errors when submitted empty', async () => {
    const user = userEvent.setup()
    render(<BookingWidget />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    expect(screen.getByText('Please choose an arrival date')).toBeInTheDocument()
    expect(screen.getByText('Please choose a departure date')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rejects a departure date before the arrival date', async () => {
    const user = userEvent.setup()
    render(<BookingWidget />)
    fireEvent.change(screen.getByLabelText('Arrival Date'), { target: { value: '2026-08-20' } })
    fireEvent.change(screen.getByLabelText('Departure Date'), { target: { value: '2026-08-15' } })
    fireEvent.change(screen.getByLabelText('Adult'), { target: { value: 'Adult' } })
    fireEvent.change(screen.getByLabelText('Child'), { target: { value: 'Child' } })
    fireEvent.change(screen.getByLabelText('Number of Rooms'), { target: { value: 'Room 01' } })
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    expect(
      screen.getByText('Departure date must be on or after the arrival date'),
    ).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('clears a field error once the user edits the field', async () => {
    const user = userEvent.setup()
    render(<BookingWidget />)
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    expect(screen.getByText('Please choose an arrival date')).toBeInTheDocument()
    fireEvent.change(screen.getByLabelText('Arrival Date'), { target: { value: '2026-08-15' } })
    expect(screen.queryByText('Please choose an arrival date')).not.toBeInTheDocument()
  })

  it('swaps to a confirmation on a valid submit', async () => {
    const user = userEvent.setup()
    render(<BookingWidget />)
    fireEvent.change(screen.getByLabelText('Arrival Date'), { target: { value: '2026-08-15' } })
    fireEvent.change(screen.getByLabelText('Departure Date'), { target: { value: '2026-08-20' } })
    fireEvent.change(screen.getByLabelText('Adult'), { target: { value: 'Adult' } })
    fireEvent.change(screen.getByLabelText('Child'), { target: { value: 'Child' } })
    fireEvent.change(screen.getByLabelText('Number of Rooms'), { target: { value: 'Room 01' } })
    await user.click(screen.getByRole('button', { name: /Book Now/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/Booking received/i)
    expect(screen.queryByLabelText('Arrival Date')).not.toBeInTheDocument()
  })
})
