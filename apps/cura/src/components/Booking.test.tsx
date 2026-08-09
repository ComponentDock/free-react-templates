import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Booking } from './Booking'

describe('Booking', () => {
  it('renders the booking section with heading, form fields and submit button', () => {
    render(<Booking />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Book Your Appointment' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/Full Name/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText(/Department/)).toBeInTheDocument()
    expect(screen.getByLabelText('Preferred Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Book Appointment' })).toBeInTheDocument()
  })

  it('shows per-field errors and does not submit with invalid data', async () => {
    const user = userEvent.setup()
    render(<Booking />)
    await user.click(screen.getByRole('button', { name: 'Book Appointment' }))
    expect(screen.getByText('Please enter your full name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.getByText('Please choose a department')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Book Your Appointment' }),
    ).toBeInTheDocument()
  })

  it('shows a success confirmation after a valid submission', async () => {
    const user = userEvent.setup()
    render(<Booking />)
    await user.type(screen.getByLabelText(/Full Name/), 'Jordan Lee')
    await user.type(screen.getByLabelText(/Email/), 'jordan@example.com')
    await user.type(screen.getByLabelText('Phone'), '555-1234')
    await user.selectOptions(screen.getByLabelText(/Department/), 'Cardiology')
    fireEvent.change(screen.getByLabelText('Preferred Date'), {
      target: { value: '2026-09-01' },
    })
    await user.type(screen.getByLabelText('Message'), 'Morning appointments preferred.')
    await user.click(screen.getByRole('button', { name: 'Book Appointment' }))
    expect(
      screen.getByRole('heading', { name: 'Appointment Request Received' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Thanks, Jordan Lee!/)).toBeInTheDocument()
    expect(screen.queryByLabelText(/Full Name/)).not.toBeInTheDocument()
  })

  it('clears a field error as soon as the user corrects the field', async () => {
    const user = userEvent.setup()
    render(<Booking />)
    await user.click(screen.getByRole('button', { name: 'Book Appointment' }))
    expect(screen.getByText('Please enter your full name')).toBeInTheDocument()
    await user.type(screen.getByLabelText(/Full Name/), 'Ari')
    expect(screen.queryByText('Please enter your full name')).not.toBeInTheDocument()
  })
})
