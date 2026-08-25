import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingBar } from './BookingBar'

describe('BookingBar', () => {
  it('renders all form fields', () => {
    render(<BookingBar />)
    expect(screen.getByLabelText('Check-in')).toBeInTheDocument()
    expect(screen.getByLabelText('Check-out')).toBeInTheDocument()
    expect(screen.getByLabelText('Room Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Guests')).toBeInTheDocument()
  })

  it('renders Check Availability button', () => {
    render(<BookingBar />)
    expect(screen.getByRole('button', { name: 'Check Availability' })).toBeInTheDocument()
  })

  it('allows selecting room type', async () => {
    const user = userEvent.setup()
    render(<BookingBar />)
    const select = screen.getByLabelText('Room Type')
    await user.selectOptions(select, 'suite')
    expect(select).toHaveValue('suite')
  })

  it('allows selecting guests', async () => {
    const user = userEvent.setup()
    render(<BookingBar />)
    const select = screen.getByLabelText('Guests')
    await user.selectOptions(select, '2')
    expect(select).toHaveValue('2')
  })

  it('allows setting check-in date', async () => {
    const user = userEvent.setup()
    render(<BookingBar />)
    const input = screen.getByLabelText('Check-in')
    await user.type(input, '2025-06-15')
    expect(input).toHaveValue('2025-06-15')
  })

  it('allows setting check-out date', async () => {
    const user = userEvent.setup()
    render(<BookingBar />)
    const input = screen.getByLabelText('Check-out')
    await user.type(input, '2025-06-20')
    expect(input).toHaveValue('2025-06-20')
  })

  it('submits form without page reload', async () => {
    const user = userEvent.setup()
    render(<BookingBar />)
    await user.click(screen.getByRole('button', { name: 'Check Availability' }))
    // Form should still be present (preventDefault worked)
    expect(screen.getByLabelText('Check-in')).toBeInTheDocument()
  })

  it('has booking region label', () => {
    render(<BookingBar />)
    expect(screen.getByRole('region', { name: 'Booking' })).toBeInTheDocument()
  })
})
