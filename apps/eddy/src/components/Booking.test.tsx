import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Booking } from './Booking'

describe('Booking', () => {
  it('renders the heading and all form fields', () => {
    render(<Booking />)

    expect(screen.getByRole('heading', { name: 'Book Your Stay' })).toBeInTheDocument()

    expect(screen.getByLabelText('Arrival Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Departure Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Adults')).toBeInTheDocument()
    expect(screen.getByLabelText('Children')).toBeInTheDocument()
    expect(screen.getByLabelText('Rooms')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'CHECK AVAILABILITY' })).toBeInTheDocument()
  })

  it('allows selecting adults count', async () => {
    const user = userEvent.setup()
    render(<Booking />)

    const adultsSelect = screen.getByLabelText('Adults')
    await user.selectOptions(adultsSelect, '3')
    expect(adultsSelect).toHaveValue('3')
  })

  it('allows selecting children count', async () => {
    const user = userEvent.setup()
    render(<Booking />)

    const childrenSelect = screen.getByLabelText('Children')
    await user.selectOptions(childrenSelect, '2')
    expect(childrenSelect).toHaveValue('2')
  })

  it('allows selecting rooms count', async () => {
    const user = userEvent.setup()
    render(<Booking />)

    const roomsSelect = screen.getByLabelText('Rooms')
    await user.selectOptions(roomsSelect, '2')
    expect(roomsSelect).toHaveValue('2')
  })

  it('allows typing arrival date', async () => {
    const user = userEvent.setup()
    render(<Booking />)

    const input = screen.getByLabelText('Arrival Date')
    await user.type(input, '2026-10-01')
    expect(input).toHaveValue('2026-10-01')
  })

  it('allows typing departure date', async () => {
    const user = userEvent.setup()
    render(<Booking />)

    const input = screen.getByLabelText('Departure Date')
    await user.type(input, '2026-10-07')
    expect(input).toHaveValue('2026-10-07')
  })

  it('submits the form and prevents default navigation', async () => {
    const user = userEvent.setup()
    render(<Booking />)

    // Fill required fields
    await user.type(screen.getByLabelText('Arrival Date'), '2026-10-01')
    await user.type(screen.getByLabelText('Departure Date'), '2026-10-07')

    // Submit the form via the button
    await user.click(screen.getByRole('button', { name: 'CHECK AVAILABILITY' }))

    // The form should still be present (navigation was prevented)
    expect(screen.getByRole('heading', { name: 'Book Your Stay' })).toBeInTheDocument()
  })
})
