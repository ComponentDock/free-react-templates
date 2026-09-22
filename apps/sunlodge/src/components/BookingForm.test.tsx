import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'
import { describe, expect, it } from 'vitest'

describe('BookingForm', () => {
  it('renders the form heading', () => {
    render(<BookingForm />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Book A Room')
  })

  it('renders the section heading', () => {
    render(<BookingForm />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings[0]).toHaveTextContent(/Ullamcorper mattis/)
  })

  it('renders all form fields', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText('Check In')).toBeInTheDocument()
    expect(screen.getByLabelText('Check Out')).toBeInTheDocument()
    expect(screen.getByLabelText('Room')).toBeInTheDocument()
    expect(screen.getByLabelText('Guest')).toBeInTheDocument()
  })

  it('renders the Check Availability button', () => {
    render(<BookingForm />)
    expect(screen.getByRole('button', { name: /check availability/i })).toBeInTheDocument()
  })

  it('allows typing in check in date', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    const checkIn = screen.getByLabelText('Check In')
    await user.type(checkIn, '2026-12-25')
    expect(checkIn).toHaveValue('2026-12-25')
  })

  it('allows typing in check out date', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    const checkOut = screen.getByLabelText('Check Out')
    await user.type(checkOut, '2026-12-30')
    expect(checkOut).toHaveValue('2026-12-30')
  })

  it('allows selecting a room', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    const roomSelect = screen.getByLabelText('Room')
    await user.selectOptions(roomSelect, 'deluxe')
    expect(roomSelect).toHaveValue('deluxe')
  })

  it('allows selecting guest count', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    const guestSelect = screen.getByLabelText('Guest')
    await user.selectOptions(guestSelect, '2')
    expect(guestSelect).toHaveValue('2')
  })

  it('submits the form without error', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    const button = screen.getByRole('button', { name: /check availability/i })
    await user.click(button)
  })
})
