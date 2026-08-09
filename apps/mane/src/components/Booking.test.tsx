import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Booking } from './Booking'

describe('Booking', () => {
  it('renders the heading, the form fields, and the call-us line', () => {
    render(<Booking />)

    expect(screen.getByRole('heading', { name: 'Make an Appointment' })).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByText(/Call Us: 012-3456-7890/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Book Appointment' })).toBeInTheDocument()
  })

  it('shows per-field errors on an invalid submission', async () => {
    const user = userEvent.setup()
    render(<Booking />)

    await user.click(screen.getByRole('button', { name: 'Book Appointment' }))
    expect(screen.getByText('Name is required.')).toBeInTheDocument()
    expect(screen.getByText('A valid email address is required.')).toBeInTheDocument()
    expect(screen.getByText('A phone number is required.')).toBeInTheDocument()
    expect(screen.queryByText('Appointment requested!')).not.toBeInTheDocument()
  })

  it('submits a valid request and shows the success message', async () => {
    const user = userEvent.setup()
    render(<Booking />)

    await user.type(screen.getByLabelText('Name'), 'Jane Smith')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Phone'), '(555) 123-4567')
    await user.click(screen.getByRole('button', { name: 'Book Appointment' }))

    expect(screen.getByText('Appointment requested!')).toBeInTheDocument()
    expect(screen.getByText(/Thanks, Jane Smith!/)).toBeInTheDocument()
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument()
  })
})
